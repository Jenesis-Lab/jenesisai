import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Database, LineChart } from "lucide-react"
import Navbar from "@/components/navbar"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-12 pt-32">
        <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>

        <div className="max-w-4xl mx-auto">
          <p className="mb-12 text-lg text-muted-foreground">
            JenesisAI offers a comprehensive suite of enterprise AI solutions designed to transform your business
            operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Privacy Architecture</CardTitle>
                <CardDescription>Secure, compliant AI deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  On-prem LLMs with LoRA adapters for full data control. Keep your sensitive data secure while
                  leveraging the power of AI.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-2">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Enterprise Integration</CardTitle>
                <CardDescription>Seamless connectivity with existing systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Native RAG + function calling for seamless system connectivity. Integrate AI capabilities with your
                  existing enterprise software stack.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Agentic Automation</CardTitle>
                <CardDescription>End-to-end task automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Orchestrated AI agents handle tasks end-to-end, autonomously. Reduce manual workflows and increase
                  operational efficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-2">
                  <LineChart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Access Control</CardTitle>
                <CardDescription>Role-based permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Role-based permissions with secure sandboxed execution. Ensure the right people have access to the
                  right AI capabilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg">Contact Us for a Demo</Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-12 px-4 mt-32 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-6 w-6 rounded-full bg-purple-500"></div>
            <span className="font-medium">JenesisAI</span>
          </div>

          <div className="flex gap-6">
            <Link href="/features" className="text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="/solutions" className="text-muted-foreground hover:text-foreground">
              Solutions
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">© 2025 JenesisAI</div>
        </div>
      </footer>
    </div>
  )
}
