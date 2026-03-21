import { Section } from "@/components/layout/section";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with cutting-edge web technologies. Features smooth animations, dark mode, and a mobile-first approach.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind v4", "shadcn/ui"],
    imageUrl: "/src/assets/portfolio-screenshot.jpg",
    githubUrl: "https://github.com/zoesobol/zoesobol-portfolio",
    liveUrl: "#home",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 aspect-video rounded-[1.25rem] object-cover"
              />
            ) : (
              <div className="mb-4 aspect-video rounded-[1.25rem] bg-background/70" />
            )}

            <div className="mb-3 flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target={
                      project.liveUrl.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.liveUrl.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted transition-colors hover:text-accent"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-4 text-muted">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
