"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "I can't imagine going back to how things were before this tool. It has not only improved my work efficiency but also transformed how I approach my daily tasks and creative projects.",
    author: "Emily Lee",
    role: "Product Manager",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 2,
    text: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field. The results speak for themselves.",
    author: "David Wright",
    role: "Research Scientist",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 3,
    text: "What a fantastic AI Product! It has completely transformed how we develop solutions and accelerated our entire development workflow.",
    author: "Manu Arora",
    role: "Tech Innovator & Engineer",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 4,
    text: "After years of using various tools, this one stands out. Highly recommended for anyone looking to boost their efficiency and achieve better results consistently.",
    author: "Sarah Chen",
    role: "Data Analyst",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 5,
    text: "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making in our organization.",
    author: "Ivy Wilson",
    role: "Business Consultant",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 6,
    text: "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets quarter after quarter.",
    author: "Jack Brown",
    role: "Performance Manager",
    avatar: "/placeholder-user.jpg"
  }
]

export function TestimonialsMarquee() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted/80 border border-border/60 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Used by builders around the world
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everyone uses our product, except for the people who don&apos;t use it.
          </p>
        </div>

        {/* Marquee Grid */}
        <div className="relative">
          {/* First Row - Scroll Left */}
          <div className="flex gap-6 mb-6 overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={`${testimonial.id}-dup`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Right */}
          <div className="flex gap-6 overflow-hidden">
            <div className="flex gap-6 animate-scroll-right">
              {testimonials.slice(3, 6).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.slice(3, 6).map((testimonial) => (
                <TestimonialCard key={`${testimonial.id}-dup`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Fade overlays */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <div className="flex-shrink-0 w-[400px] bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/5">
      <Quote className="h-8 w-8 text-indigo-500/30 mb-4 group-hover:text-indigo-500/40 transition-colors" />
      <p className="text-sm text-foreground/90 leading-relaxed mb-6 min-h-[80px]">
        {text}
      </p>
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-border/50 ring-2 ring-transparent group-hover:ring-indigo-500/20 transition-all">
          <span className="text-xs font-semibold text-foreground">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

