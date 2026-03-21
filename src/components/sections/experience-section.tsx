import { Section } from "@/components/layout/section";
import { MapPin, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "InTheValley",
    role: "Software Engineer",
    period: "June 2023 – Present",
    location: "Remote",
    highlights: [
      "Built a crawler-based system with AI superpowers—combining document extraction, preprocessing, and LLM-driven analysis",
      "Integrated Anthropic API to generate summaries and structured outputs from massive regulatory documents (because someone has to read them)",
      "Contributed to the development of an invoicing platform that integrates multiple software solutions for seamless monthly billing",
      "Migrated Google Workspace accounts to Microsoft 365 to boost productivity and security",
      "Created DBTs for data analysis using Snowflake, Metabase, and Fivetran to turn raw data into actionable insights",
    ],
  },
  {
    company: "ConCntric",
    role: "Backend Engineer",
    period: "January 2023 – June 2023",
    location: "Remote",
    highlights: [
      "Contributed to the startup's journey towards Series A funding",
      "Developed and maintained backend infrastructure using Python, Django, and AWS",
    ],
  },
  {
    company: "Rings AI",
    role: "Backend Engineer",
    period: "April 2022 – January 2023",
    location: "Remote",
    highlights: [
      "Developed backend systems for a relationship-based platform using Python and AWS",
      "Designed and deployed scalable cloud infrastructure with AWS Lambda, AppSync, DynamoDB, RDS, and Glue",
      "Migrated from OpenSearch to Rockset for real-time analytics, improving performance and cutting costs",
    ],
  },
  {
    company: "Simetrik",
    role: "Backend Developer",
    period: "February 2022 – April 2022",
    location: "Remote",
    highlights: [
      "Developed microservices in the AWS cloud using the Serverless framework",
      "Applied Clean Architecture principles to ensure code scalability and maintainability",
    ],
  },
  {
    company: "SMARTFENSE",
    role: "Python Developer",
    period: "2021",
    location: "Remote",
    highlights: [
      "Implemented new backend features in a Django-based monolithic project",
      "Assisted in the migration from Python 2 to Python 3 (a rite of passage, really)",
    ],
  },
];

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've built cool stuff"
    >
      <div className="grid gap-4">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)]"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="mt-1 text-lg text-muted">{exp.company}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </span>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 leading-7 text-muted">
                  <span className="text-accent">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
