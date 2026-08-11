import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site-chrome";
import { services, site, whyUs } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Façade, Glazing, IMP & Structural Detailing" },
      {
        name: "description",
        content:
          "Façade shop drawings, glass and glazing detailing, IMP and single-skin panel detailing, structural modeling and lumber drafting support for contractors and fabricators.",
      },
      { property: "og:title", content: "Detailing Services | Precise Engineering Services" },
      {
        property: "og:description",
        content:
          "Specialised drafting and detailing support for façade, glazing, panel systems and structural documentation.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Professional detailing and engineering support solutions."
        intro="We deliver accurate, coordinated and project-focused documentation for façade, glazing, panel systems and structural scopes — produced in AutoCAD and Revit, reviewed and marked up in Bluebeam."
      />

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.slug} className="bg-card p-8 md:p-10">
                <span className="font-mono text-[0.65rem] tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-xl font-bold leading-snug">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Why work with us</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
              Built for contractors who cannot afford drawing errors.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Software: {site.software.join(", ")}. Delivery in your file formats, sheet templates and layer
              standards, with revision histories maintained set to set.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
