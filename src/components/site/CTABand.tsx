import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTABand({
  eyebrow = "Klaar voor uw renovatie?",
  title = "Realiseer uw droomproject met Renobest",
  body = "Eén aanspreekpunt, eigen vakmensen en oog voor het kleinste detail. Vraag vrijblijvend uw offerte aan.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-narrow relative grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center md:py-24">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Vraag een offerte aan <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/aanpak"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-primary hover:text-primary"
          >
            Ontdek onze aanpak
          </Link>
        </div>
      </div>
    </section>
  );
}
