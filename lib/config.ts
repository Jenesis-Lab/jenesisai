export const FRONTEND_PLATFORM_URL = process.env.NEXT_PUBLIC_FRONTEND_PLATFORM_URL || "https://app.jenesisai.org"

export const SITE_URL = "https://www.jenesisai.org"

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

/** Platform API — the landing page reads the desktop-download manifest from
 *  here (`GET /downloads/desktop`) so installer links live in one place. */
export const PLATFORM_API_URL = process.env.NEXT_PUBLIC_PLATFORM_API_URL || "https://api.jenesisai.org"
