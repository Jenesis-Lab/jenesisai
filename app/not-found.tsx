import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-indigo-500 mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Page not found</h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
