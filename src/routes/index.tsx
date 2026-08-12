import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-facade.jpg";
import drawingPanel from "@/assets/img_p1_3.jpg.asset.json";
import drawingElevation from "@/assets/img_p3_1.jpg.asset.json";
import drawingLayout from "@/assets/img_p8_1.jpg.asset.json";
import { CtaBand } from "@/components/site-chrome";
import { services, site, whyUs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "| Façade & IMP Shop Drawings" },
      {
        name: "description",
        content:
          "Professional shop drawing and detailing services for façade, glazing, IMP, single-skin panel and structural systems. 25+ years of industry experience.",
      },
      { property: "og:title", content: "| Façade & IMP Shop Drawings" },
      {
        property: "og:description",
        content:
          "Professional shop drawing and detailing services for façade, glazing, IMP, single-skin panel and structural systems. 25+ years of industry experience.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "25+", label: "Years of industry experience" },
  { value: "2022", label: "Company established" },
  { value: "3", label: "Dedicated detailers" },
  { value: "AutoCAD · Revit", label: "Bluebeam markup workflow" },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt="Unitized glass curtain wall and metal panel facade of a modern high-rise"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-accent">{site.tagline}</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.03] md:text-6xl">
            PRECISE ENGINEERING SERVICES.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            Precise Engineering Services provides professional detailing support for façade, glazing, insulated
            metal panel, single-skin panel and structural modeling projects — backed by {site.experience} years of
            industry experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-6 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-primary-foreground/25 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-border px-2 py-8 md:px-6">
              <p className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.value}</p>
              <p className="mt-2 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              A detailing partner that thinks like a fabricator.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We support contractors, fabricators, architects and engineering teams with accurate, coordinated
              drawings that hold up in the shop and on site. Every set is produced with the field in mind — clean
              dimensioning, resolved connections and documentation that reduces RFIs.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Led by a project management professional with 25+ years of experience",
                "AutoCAD, Revit and Bluebeam production and markup workflow",
                "Remote detailing support aligned to your standards and templates",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground underline decoration-accent decoration-2 underline-offset-8"
            >
              More about us <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={drawingPanel.url}
              alt="Shop drawing detail of a composite panel assembly with Z-girts and fasteners"
              loading="lazy"
              className="col-span-2 h-56 w-full border border-border bg-card object-cover object-top shadow-panel"
            />
            <img
              src={drawingElevation.url}
              alt="Façade elevation drawing with window type labels"
              loading="lazy"
              className="h-44 w-full border border-border bg-card object-cover object-top shadow-panel"
            />
            <img
              src={drawingLayout.url}
              alt="Wall panel layout drawing with key plan"
              loading="lazy"
              className="h-44 w-full border border-border bg-card object-cover object-top shadow-panel"
            />
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Our services</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">
            Detailing scopes we deliver every week.
          </h2>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                className="group bg-card p-8 transition-colors hover:bg-background"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground">
                  Details <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">
            Experience, documentation discipline, dependable delivery.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
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
