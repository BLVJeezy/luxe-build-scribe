import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, SectionHeader, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import { ShieldCheck, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Bouwfirma Houbrechts — Tongeren" },
      {
        name: "description",
        content:
          "Bouwfirma Houbrechts is een lokale familiezaak in Tongeren gespecialiseerd in renovatiewerken en ruwbouw. Vakmanschap, eerlijkheid en persoonlijke aanpak.",
      },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOnsPage,
});

function OverOnsPage() {
  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">Over Houbrechts</p>
            <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">
              Een bouwpartner die{" "}
              <span className="italic text-primary">doet wat hij belooft.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              Bouwfirma Houbrechts is een familiezaak gevestigd in Tongeren, gespecialiseerd in renovatiewerken en ruwbouw voor particulieren in de regio Tongeren–Limburg. Wij werken met eerlijke prijzen, persoonlijke begeleiding en oog voor kwaliteit.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-cream/20 pt-8 max-w-sm">
              <div>
                <p className="font-serif text-3xl text-primary">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/55">lokaal in Tongeren</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-primary">1</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/55">vast aanspreekpunt</p>
              </div>
            </div>
          </div>
          <Placeholder
            prompt="Friendly Belgian building contractor professional portrait, construction site background, professional workwear, warm natural light, editorial photography, trust and expertise"
            width={1000}
            height={1100}
            className="rounded-sm shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          eyebrow="Onze waarden"
          title="Drie principes waar we elke dag naar handelen"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Eerlijkheid", body: "Transparante prijzen, heldere planning en eerlijk advies — ook als dat betekent dat wij u doorverwijzen naar een andere specialist." },
            { icon: Award, title: "Vakmanschap", body: "Jarenlange ervaring in renovatie en ruwbouw in de regio Tongeren. Elk detail telt, van fundering tot afwerking." },
            { icon: Heart, title: "Persoonlijke aanpak", body: "U spreekt altijd met de zaakvoerder — geen grote anonieme organisatie, maar een team dat uw project kent en respecteert." },
          ].map((v) => (
            <div key={v.title} className="rounded-sm border border-border bg-background p-8">
              <v.icon className="h-8 w-8 text-primary" strokeWidth={1.4} />
              <h3 className="mt-5 text-2xl">{v.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Placeholder
            prompt="Professional Belgian building contractor in front of completed renovation project, Tongeren Limburg, friendly and confident, editorial photography"
            width={1000}
            height={900}
            className="rounded-sm shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="eyebrow">De zaakvoerder</p>
            <h2 className="mt-3 text-4xl leading-[1.1] md:text-5xl">
              Uw vast aanspreekpunt — van offerte tot oplevering.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Bij Bouwfirma Houbrechts gelooft u dat een goed bouwproject begint en eindigt met persoonlijk contact. Daarom is de zaakvoerder altijd uw aanspreekpunt: hij komt ter plaatse, denkt mee over het ontwerp en volgt het project van dichtbij op.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Gevestigd in Tongeren, actief in de regio Tongeren, Bilzen, Riemst, Borgloon, Hoeselt en omstreken. Wij kennen de lokale markt, de bouwreglementen en de leveranciers in de regio.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>📍 Driekruisenstraat 105, 3700 Tongeren</p>
              <p>✓ Erkend aannemer · BTW-plichtig</p>
              <p>✓ Werkgebied: heel Limburg</p>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Maak kennis"
        title="Laat ons uw project bespreken"
        body="Plan een vrijblijvend kennismakingsgesprek. Wij luisteren, denken mee en bezorgen u een heldere offerte zonder verborgen kosten."
      />
    </SiteShell>
  );
}
