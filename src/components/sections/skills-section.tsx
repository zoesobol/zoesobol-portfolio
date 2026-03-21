import { Section } from "@/components/layout/section";
import { Code2, Cloud, Wrench, Brain, Globe } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Django", "Flask", "SQL", "NoSQL", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Linux", "Serverless"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Metabase", "Fivetran", "Snowflake", "Git"],
  },
  {
    title: "AI & Innovation",
    icon: Brain,
    skills: ["LLM APIs", "Anthropic", "AI-assisted automation"],
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English", "Spanish"],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="My toolkit">
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)]"
            >
              <div className="mb-4 flex items-center gap-2">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
