import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zoe@sobol.dev",
    href: "mailto:zoe@sobol.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+54 364-4543611",
    href: "tel:+543644543611",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/zoesobol",
    href: "https://linkedin.com/in/zoesobol",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote",
    href: null,
  },
];

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's build something together"
    >
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow)]">
        <p className="mb-6 leading-relaxed text-justify text-muted">
          Got an interesting project? Want to chat about backend architecture,
          AI, or the challenges of migrating legacy code? I'm always up for a
          good conversation. Drop me a line! ✨
        </p>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">{contact.label}</p>
                  <p className="text-sm text-muted">{contact.value}</p>
                </div>
              </div>
            );

            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-xl border border-border bg-background p-4 transition-colors hover:bg-accent/10"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label}
                className="rounded-xl border border-border bg-background p-4"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="rounded-full bg-accent text-accent-foreground hover:opacity-90"
          >
            <a href="mailto:zoe@sobol.dev" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Send me an email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border bg-card hover:bg-card/80"
          >
            <a
              href="https://linkedin.com/in/zoesobol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
