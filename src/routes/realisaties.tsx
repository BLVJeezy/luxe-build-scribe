import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, Section, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/realisaties")({
  head: () => ({
    meta: [
      { title: "Realisaties — Renobest" },
      {
        name: "description",
        content:
          "Bekijk recente badkamers, keukens en dressings die Renobest realiseerde in Hasselt, Genk, Sint-Truiden en heel Limburg.",
      },
      { property: "og:title", content: "Realisaties — Renobest" },
      { property: "og:description", content: "Een selectie van afgewerkte projecten in Limburg." },
      { property: "og:url", content: "/realisaties" },
    ],
    links: [{ rel: "canonical", href: "/realisaties" }],
  }),
  component: RealisatiesPage,
});

type Category = "Alle" | "Badkamers" | "Keukens" | "Dressings";

const projects: { title: string; place: string; category: Exclude<Category, "Alle">; prompt: string; size: "tall" | "wide" | "square" }[] = [
  { title: "Spa-badkamer", place: "Hasselt", category: "Badkamers", prompt: "Spa style bathroom with double walk-in shower, terrazzo floor, brass fixtures, warm wood vanity, premium interior photography", size: "tall" },
  { title: "Scandinavische keuken", place: "Genk", category: "Keukens", prompt: "Scandinavian kitchen with warm oak, white walls, marble island, brass pendant lights", size: "wide" },
  { title: "Walk-in dressing", place: "Tongeren", category: "Dressings", prompt: "Walk-in dressing room with oak shelves, central island, brass fixtures, soft lighting", size: "square" },
  { title: "Klassiek modern badkamer", place: "Sint-Truiden", category: "Badkamers", prompt: "Classic modern bathroom with marble tiles, freestanding tub, gold fixtures", size: "wide" },
  { title: "Donkere keuken", place: "Maaseik", category: "Keukens", prompt: "Dark moody kitchen with deep green cabinets, brass fixtures, marble worktop", size: "tall" },
  { title: "Slaapkamer kast", place: "Bilzen", category: "Dressings", prompt: "Built-in bedroom wardrobe in matte cream, handleless doors, integrated lighting", size: "square" },
  { title: "Penthouse badkamer", place: "Hasselt", category: "Badkamers", prompt: "Penthouse bathroom with city view, freestanding black tub, marble walls", size: "square" },
  { title: "Familiekeuken", place: "Sint-Truiden", category: "Keukens", prompt: "Large family kitchen with white island, warm wood, pantry, family-friendly", size: "wide" },
  { title: "Luxe dressing", place: "Genk", category: "Dressings", prompt: "Luxury dressing room with display cases, marble island, chandelier, premium interior", size: "tall" },
];

function RealisatiesPage() {
  const [filter, setFilter] = useState<Category>("Alle");
  const filtered = filter === "Alle" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow py-20 md:py-24">
          <p className="eyebrow">Realisaties</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
            Projecten die voor zich{" "}
            <span className="italic text-primary">spreken.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">
            Een greep uit recent gerealiseerde badkamers, keukens en dressings —
            allemaal afgewerkt door ons eigen team.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-2">
          {(["Alle", "Badkamers", "Keukens", "Dressings"] as Category[]).map((c) => (
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

      <CTABand />
    </SiteShell>
  );
}
