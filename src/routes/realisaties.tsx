import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, Section, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/realisaties")({
  head: () => ({
    meta: [
      { title: "Realisaties — Bouwfirma Houbrechts Tongeren" },
      {
        name: "description",
        content: "Bekijk afgewerkte renovatie- en ruwbouwprojecten van Bouwfirma Houbrechts in Tongeren, Bilzen, Riemst en heel Limburg.",
      },
    ],
    links: [{ rel: "canonical", href: "/realisaties" }],
  }),
  component: RealisatiesPage,
});

type Category = "Alle" | "Renovatie" | "Ruwbouw";

const projects: { title: string; place: string; category: Exclude<Category, "Alle">; prompt: string; size: "tall" | "wide" | "square" }[] = [
  { title: "Badkamerrenovatie", place: "Tongeren", category: "Renovatie", prompt: "Modern bathroom renovation Belgium grey slate tiles walk-in shower contemporary fixtures professional finish", size: "tall" },
  { title: "Uitbouw ruwbouw", place: "Bilzen", category: "Ruwbouw", prompt: "House extension construction Belgium brick masonry professional contractor residential Limburg", size: "wide" },
  { title: "Totaalrenovatie", place: "Riemst", category: "Renovatie", prompt: "Complete Belgian home interior renovation open plan herringbone floor new kitchen modern bright", size: "square" },
  { title: "Gevelrenovatie", place: "Borgloon", category: "Renovatie", prompt: "Belgian brick facade renovation fresh repointing traditional Limburg house professional finish", size: "wide" },
  { title: "Nieuwbouw woning", place: "Hoeselt", category: "Ruwbouw", prompt: "New residential construction Belgium brick house casco professional ruwbouw Limburg landscape", size: "tall" },
  { title: "Keukenrenovatie", place: "Tongeren", category: "Renovatie", prompt: "Kitchen renovation Belgium cream handleless cabinets stone countertop warm pendant lighting premium", size: "square" },
  { title: "Uitbouw garage", place: "Sint-Truiden", category: "Ruwbouw", prompt: "Garage construction extension Belgium brick masonry professional contractor residential", size: "square" },
  { title: "Badkamerrenovatie", place: "Kortessem", category: "Renovatie", prompt: "Belgian bathroom renovation dark green tiles brass fixtures vintage style compact luxury", size: "wide" },
  { title: "Funderingswerken", place: "Tongeren", category: "Ruwbouw", prompt: "Foundation construction Belgium concrete footings reinforced residential professional building", size: "tall" },
];

function RealisatiesPage() {
  const [filter, setFilter] = useState<Category>("Alle");
  const filtered = filter === "Alle" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow py-20 md:py-24">
          <p className="eyebrow">Realisaties · Tongeren & Limburg</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
            Projecten die voor zich{" "}
            <span className="italic text-primary">spreken.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">
            Een greep uit onze afgewerkte renovatie- en ruwbouwprojecten in de regio Tongeren, Bilzen, Riemst en omstreken.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-2">
          {(["Alle", "Renovatie", "Ruwbouw"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-sm border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => {
            const dims =
              p.size === "tall" ? { w: 800, h: 1100 } : p.size === "wide" ? { w: 1100, h: 800 } : { w: 900, h: 900 };
            return (
              <figure key={`${p.title}-${p.place}`} className="group overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
                <Placeholder prompt={p.prompt} width={dims.w} height={dims.h} className="transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-sm font-medium">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.place}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {p.category}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Section>

      <CTABand
        eyebrow="Uw project wordt het volgende"
        title="Klaar om uw woning te transformeren?"
        body="Vraag vandaag nog een gratis en vrijblijvende offerte aan. Wij komen bij u langs in de regio Tongeren."
      />
    </SiteShell>
  );
}
