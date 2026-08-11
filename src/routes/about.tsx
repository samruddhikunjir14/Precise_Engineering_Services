import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site-chrome";
import { services, site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Precise Engineering Services, Pune" },
      {
        name: "description",
        content:
          "Precise Engineering Services is a specialised façade, glazing, IMP and structural detailing company in Pune, India, led by Chaitrali Ajay Rakate with 25+ years of experience.",
      },
      { property: "og:title", content: "About Precise Engineering Services" },
      {
        property: "og:description",
        content:
          "A detailing support company for contractors, fabricators and engineering teams. Established 2022, backed by 25+ years of industry experience.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A specialised detailing and engineering support company."
        intro={`Established in ${site.founded} and led by ${site.founder}, Precise Engineering Services delivers high-quality detailing solutions for façade, glazing, insulated metal panel, single-skin panel and structural modeling projects.`}
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold">Our story</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Precise Engineering Services was formed to give building envelope contractors a detailing partner
                that understands construction, not just CAD. Our team is led by {site.founder}, a project
                management professional with {site.experience} years of industry experience in construction
                detailing and engineering support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We combine practical project knowledge with technical expertise to deliver accurate, coordinated
                and construction-ready drawings — supporting contractors, fabricators, architects and engineering
                teams to improve coordination, reduce errors and keep execution moving.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Our expertise</h2>
              <ul className="mt-5 grid gap-px bg-border sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug} className="bg-card p-5 text-sm font-medium">
                    {s.title}
                  </li>
                ))}
                <li className="bg-card p-5 text-sm font-medium">Construction documentation & drawing coordination</li>
                <li className="bg-card p-5 text-sm font-medium">Revision, markup and submittal support</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Our approach</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We focus on accuracy, timely delivery and clear communication. Detailed drawings drive the
                construction process, so we work closely with clients to follow their standards, templates and
                review cycles. Our goal is to become a trusted detailing partner for clients in India and
                international markets.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Our commitment</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Dependable engineering support delivered through quality workmanship, attention to detail and a
                client-focused approach on every set we issue.
              </p>
            </div>
          </div>

          <aside className="h-fit border border-border bg-card p-7 shadow-panel lg:sticky lg:top-28">
            <p className="eyebrow">Company facts</p>
            <dl className="mt-6 space-y-5 text-sm">
              {[
                ["Founder", site.founder],
                ["Established", site.founded],
                ["Experience", `${site.experience} years`],
                ["Team", "3 detailing professionals"],
                ["Location", site.location],
                ["Software", site.software.join(" · ")],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1.5 font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
