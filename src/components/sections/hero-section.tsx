import { Button } from "@/components/ui/button";
import { Sparkles, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="px-4 pb-16 pt-12 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-sm text-muted shadow-sm">
            <Sparkles className="h-4 w-4" />
            Self-taught software engineer & AI enthusiast
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm Zoe! I build scalable systems and make AI actually useful.
          </h1>

          {/* Mobile image: shows between heading and paragraph */}
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)] lg:hidden">
            <img
              src="/src/assets/profile-photo.jpg"
              alt="Zoe Sobol"
              className="aspect-[4/5] rounded-[1.5rem] object-cover"
            />
          </div>

          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Software engineer with a passion for integrating AI into real-world
            products. I turn complex problems into reliable, production-ready
            solutions—and I love every minute of it.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="rounded-full bg-accent text-accent-foreground hover:opacity-90"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-card hover:bg-card/80"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Desktop image: shows on the right side */}
        <div className="hidden rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)] lg:block">
          <img
            src="/src/assets/profile-photo.jpg"
            alt="Zoe Sobol"
            className="aspect-[4/5] rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
