import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent">
        <span className="font-display text-sm font-bold tracking-tight text-accent-foreground">PES</span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[0.95rem] font-semibold uppercase tracking-[0.14em] ${
            inverted ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          Precise Engineering
        </span>
        <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
          Services · Pune, India
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              className="relative py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-foreground hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="bg-primary px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Request a quote
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block bg-primary px-4 py-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground"
          >
            Request a quote
          </a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-[0.1em]">{site.name}</h3>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">{site.tagline}</p>
          <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground/50">
            {site.location}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-primary-foreground/75 transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-primary-foreground/75 hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="text-primary-foreground/75 hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground/75 hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-5 py-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/45">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Need detailing support?</h2>
          <p className="mt-2 max-w-xl text-sm text-primary-foreground/70">
            Send us your scope of work or drawing set and we will come back with a support plan and schedule.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="bg-accent px-6 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Email us
          </a>
          <Link
            to="/contact"
            className="border border-primary-foreground/25 px-6 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
          >
            Contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
