import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { services, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Precise Engineering Services, Pune India" },
      {
        name: "description",
        content: `Discuss façade, glazing, IMP or drafting support for your next project. Email ${site.email} or call ${site.phone}.`,
      },
      { property: "og:title", content: "Contact Precise Engineering Services" },
      {
        property: "og:description",
        content: "Send your project requirements, drawings or scope of work and our team will respond promptly.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    "Project enquiry — detailing support",
  )}&body=${encodeURIComponent(
    "Company:\nContact name:\nProject location:\nScope (façade / glazing / IMP / panel / structural):\nDrawing set available: yes / no\nTarget schedule:\n\nAdditional notes:\n",
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's discuss your project requirements."
        intro="Looking for reliable façade, glazing, IMP or drafting support for an upcoming project? Send us your scope of work and we will respond with a support plan and schedule."
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-display text-2xl font-bold">Contact information</h2>
            <ul className="mt-7 space-y-px bg-border">
              <li className="bg-card">
                <a href={`mailto:${site.email}`} className="flex items-start gap-4 p-5 transition-colors hover:bg-surface">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </span>
                    <span className="mt-1 block break-all font-medium">{site.email}</span>
                  </span>
                </a>
              </li>
              <li className="bg-card">
                <a href={`tel:${site.phoneHref}`} className="flex items-start gap-4 p-5 transition-colors hover:bg-surface">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Phone
                    </span>
                    <span className="mt-1 block font-medium">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li className="bg-card">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-5 transition-colors hover:bg-surface"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-medium">Message us directly</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 bg-card p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Office
                  </span>
                  <span className="mt-1 block font-medium">{site.location}</span>
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                Our services
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li
                    key={s.slug}
                    className="border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit border border-border bg-card p-8 shadow-panel">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-4 font-display text-2xl font-bold">Send your requirements</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Share your drawings, scope of work or project schedule by email and our team will get back to you
              with the right support solution. Include the systems involved and your target dates so we can
              respond accurately.
            </p>
            <a
              href={mailto}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Compose an enquiry
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-border px-6 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>

            <div className="mt-10 border-t border-border pt-6 text-sm">
              <p className="font-medium">{site.founder}</p>
              <p className="mt-1 text-muted-foreground">Founder | Project Management & Engineering Support</p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                {site.tagline}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
