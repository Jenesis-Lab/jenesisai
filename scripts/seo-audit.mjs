// SEO audit for the static export in out/. Run after `npm run build`:
//   node scripts/seo-audit.mjs
// Exits non-zero if any ERROR-level finding exists.
import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"

const OUT = join(process.cwd(), "out")
const SITE = "https://www.jenesisai.org"
const pages = readdirSync(OUT).filter((f) => f.endsWith(".html") && f !== "404.html")

let errors = 0
let warnings = 0
const err = (page, msg) => { errors++; console.log(`  ERROR  [${page}] ${msg}`) }
const warn = (page, msg) => { warnings++; console.log(`  WARN   [${page}] ${msg}`) }
const ok = (msg) => console.log(`  ok     ${msg}`)

const get = (html, re) => { const m = html.match(re); return m ? m[1] : null }
const getAll = (html, re) => Array.from(html.matchAll(re), (m) => m[1])

for (const file of pages) {
  const page = file.replace(".html", "")
  const html = readFileSync(join(OUT, file), "utf8")
  console.log(`\n— ${file}`)

  // Title
  const title = get(html, /<title>([^<]*)<\/title>/)
  if (!title) err(page, "missing <title>")
  else if (title.length > 65) warn(page, `title ${title.length} chars (>65, may truncate in SERP): "${title}"`)
  else ok(`title (${title.length} chars)`)

  // Meta description
  const desc = get(html, /<meta name="description" content="([^"]*)"/)
  if (!desc) err(page, "missing meta description")
  else if (desc.length < 50 || desc.length > 170) warn(page, `description ${desc.length} chars (ideal 50–160)`)
  else ok(`description (${desc.length} chars)`)

  // Canonical
  const canonical = get(html, /<link rel="canonical" href="([^"]*)"/)
  if (!canonical) err(page, "missing canonical")
  else if (!canonical.startsWith(SITE)) err(page, `canonical points off-site: ${canonical}`)
  else ok(`canonical ${canonical}`)

  // OG + twitter
  for (const tag of ["og:title", "og:description", "og:image"]) {
    if (!html.includes(`property="${tag}"`)) err(page, `missing ${tag}`)
  }
  if (!html.includes('name="twitter:card"')) err(page, "missing twitter:card")
  else ok("og:title/og:description/og:image/twitter:card present")

  // Viewport + lang
  if (!html.includes('name="viewport"')) err(page, "missing viewport meta")
  if (!html.match(/<html[^>]*lang="en"/)) err(page, "missing html lang attribute")

  // Exactly one h1
  const h1s = getAll(html, /<h1[^>]*>/g)
  if (h1s.length !== 1) err(page, `expected exactly 1 <h1>, found ${h1s.length}`)
  else ok("exactly one <h1>")

  // Images without alt
  const imgs = getAll(html, /<img([^>]*)>/g)
  const noAlt = imgs.filter((attrs) => !/alt="/.test(attrs)).length
  if (noAlt > 0) err(page, `${noAlt} <img> tags missing alt`)
  else ok(`all ${imgs.length} images have alt text`)

  // JSON-LD parses
  const ldBlocks = getAll(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
  for (const block of ldBlocks) {
    try { JSON.parse(block) } catch { err(page, "JSON-LD does not parse") }
  }
  if (ldBlocks.length) ok(`${ldBlocks.length} JSON-LD block(s) parse`)

  // Dead "#" links and internal links that don't resolve
  const hrefs = getAll(html, /<a[^>]*href="([^"]*)"/g)
  const dead = hrefs.filter((h) => h === "#")
  if (dead.length) err(page, `${dead.length} dead href="#" links`)
  const internal = hrefs.filter((h) => h.startsWith("/") && !h.startsWith("//"))
  for (const link of new Set(internal)) {
    const path = link.replace(/[?#].*$/, "").replace(/\/$/, "")
    if (path === "") continue
    const candidates = [join(OUT, `${path}.html`), join(OUT, path, "index.html"), join(OUT, path)]
    if (!candidates.some(existsSync)) err(page, `internal link does not resolve: ${link}`)
  }
  ok(`${internal.length} internal links resolve, no "#" links`)

  // Referenced local assets exist
  const assets = [
    ...getAll(html, /src="(\/[^"]+?\.(?:webp|png|jpg|svg|ico))[?"]/g),
    ...getAll(html, /href="(\/[^"]+?\.(?:webp|png|jpg|svg|ico))[?"]/g),
  ]
  for (const a of new Set(assets)) {
    if (!existsSync(join(OUT, a))) err(page, `referenced asset missing: ${a}`)
  }
  ok(`${new Set(assets).size} referenced assets exist`)
}

// Site-level files
console.log("\n— site files")
for (const f of ["robots.txt", "sitemap.xml", "favicon.ico", "og-image.jpg", "icon.svg"]) {
  if (!existsSync(join(OUT, f))) err("site", `missing ${f}`)
  else ok(f)
}
const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8")
const sitemapUrls = getAll(sitemap, /<loc>([^<]*)<\/loc>/g)
for (const u of sitemapUrls) {
  const path = u.replace(SITE, "").replace(/\/$/, "") || "index"
  if (!existsSync(join(OUT, `${path === "index" ? "index" : path}.html`))) err("sitemap", `sitemap URL has no page: ${u}`)
}
ok(`sitemap lists ${sitemapUrls.length} URLs, all resolve to pages`)

console.log(`\n==== RESULT: ${errors} error(s), ${warnings} warning(s) ====`)
process.exit(errors ? 1 : 0)
