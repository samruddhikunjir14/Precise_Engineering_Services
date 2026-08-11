import { createFileRoute } from "@tanstack/react-router";
import p1 from "@/assets/img_p1_3.jpg.asset.json";
import p2 from "@/assets/img_p2_1.jpg.asset.json";
import p3 from "@/assets/img_p3_1.jpg.asset.json";
import p8 from "@/assets/img_p8_1.jpg.asset.json";
import p9 from "@/assets/img_p9_1.jpg.asset.json";
import p11 from "@/assets/img_p11_4.jpg.asset.json";
import { CtaBand, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Shop Drawing & Detailing Samples" },
      {
        name: "description",
        content:
          "Sample façade, glazing, IMP, panel layout and roof detailing drawings produced by Precise Engineering Services for construction projects.",
      },
      { property: "og:title", content: "Portfolio | Precise Engineering Services" },
      {
        property: "og:description",
        content: "Project experience and detailing capabilities across façade, glazing, IMP and structural scopes.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    no: "01",
    title: "Façade Detailing Support",
    image: p1.url,
    alt: "Composite panel assembly detail with Z-girts, aluminium flat bars and drill flex fasteners",
    scope: "Façade shop drawings and detailing support for building envelope systems.",
    provided: ["Shop drawing preparation", "Detail development", "Drawing coordination", "Documentation support"],
    deliverables: ["Detailed shop drawings", "Installation drawings", "Coordinated documentation"],
  },
  {
    no: "02",
    title: "Glass & Glazing System Detailing",
    image: p3.url,
    alt: "Building façade elevation drawing with window type labels",
    scope: "Detailed drafting support for storefront, door and glazing systems.",
    provided: ["Glazing shop drawings", "System coordination", "Dimension verification", "Detail preparation"],
    deliverables: ["Fabrication support drawings", "Installation documentation", "Coordinated details"],
  },
  {
    no: "03",
    title: "Insulated Metal Panel (IMP) Project",
    image: p8.url,
    alt: "Wall panel layout drawing with key plan",
    scope: "IMP system detailing and construction drawing support.",
    provided: ["Panel layout drawings", "Joint and connection detailing", "Coordination support"],
    deliverables: ["Construction-ready drawings", "Panel installation details"],
  },
  {
    no: "04",
    title: "Structural & Drafting Support",
    image: p11.url,
    alt: "Sectional and plan views of roof, wall and gutter details",
    scope: "Structural modeling and drafting assistance for construction projects.",
    provided: ["2D drafting", "3D modeling support", "Drawing updates and revisions"],
    deliverables: ["Coordinated section and plan sets", "Revision-tracked drawing packages"],
  },
];

const gallery = [
  { url: p2.url, alt: "Architectural floor plan drawing" },
  { url: p9.url, alt: "Building roof plan showing coping lengths" },
  { url: p1.url, alt: "Panel assembly detail drawing" },
  { url: p8.url, alt: "Wall panel elevation layouts" },
];

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title="Project experience and detailing capabilities."
        intro="A selection of drawings produced across façade systems, glazing, panel systems and construction documentation. Confidential client information has been removed or omitted."
      />

      <section className="section-y">
        <div className="mx-auto max-w-6xl space-y-16 px-5">
          {projects.map((p, i) => (
            <article
              key={p.no}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>figure]:order-2" : ""}`}
            >
              <figure className="border border-border bg-card p-3 shadow-panel">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-72 w-full bg-background object-cover object-top md:h-96"
                />
              </figure>
              <div>
                <span className="font-mono text-[0.65rem] tracking-[0.22em] text-accent">PROJECT {p.no}</span>
                <h2 className="mt-3 font-display text-2xl font-bold">{p.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.scope}</p>

                <div className="mt-7 grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Services provided
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {p.provided.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Deliverables
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {p.deliverables.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Drawing samples</p>
          <h2 className="mt-4 font-display text-3xl font-bold">Documentation standards</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Clear and organised drawings, accurate detailing, coordination with project requirements and
            professional documentation practices — on every sheet we issue.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <img
                key={i}
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="h-44 w-full border border-border bg-card object-cover object-top shadow-panel"
              />
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Confidentiality: project information and drawings are presented only with appropriate permission, and
            sensitive details are removed where required.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
