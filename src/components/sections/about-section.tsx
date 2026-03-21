import { Section } from "@/components/layout/section";
import { Brain, Zap, Heart, Users, GraduationCap } from "lucide-react";

const strengths = [
  { icon: Zap, text: "Hard-working & proactive" },
  { icon: Brain, text: "Strong problem solver" },
  { icon: Users, text: "Team player & leader" },
  { icon: Heart, text: "Adaptable & quick learner" },
];

export function AboutSection() {
  return (
    <Section id="about" title="About" subtitle="The human behind the code">
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow)]">
          <p className="leading-relaxed text-justify text-muted">
            I'm a self-taught Software Engineer who went from curious tinkerer
            to building production systems that handle real-world complexity. My
            sweet spot? Backend development with a splash of AI magic. I've
            spent the last few years integrating LLM APIs, automating workflows,
            and making scalable systems that actually work when they need to.
          </p>
          <p className="mt-4 leading-relaxed text-justify text-muted">
            Whether it's wrangling data pipelines, designing cloud architecture,
            or teaching machines to summarize regulatory documents (yes,
            really), I'm all about solving hard problems with clean code and a
            proactive mindset. Plus, I love collaborating with great teams and
            learning new things every day.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)]">
          <h3 className="mb-4 text-lg font-semibold">What Makes Me Tick</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-muted">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)]">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <p className="text-muted">
            <span className="font-medium">Licenciatura en Informática</span> —
            UES21
          </p>
        </div>
      </div>
    </Section>
  );
}
