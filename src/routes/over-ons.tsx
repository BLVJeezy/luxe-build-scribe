import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, SectionHeader, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import { ShieldCheck, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Renobest — vakmanschap in Limburg" },
      {
        name: "description",
        content:
          "Renobest is een Limburgse renovatiespecialist voor badkamers, keukens en dressings. Vakmanschap, eigen mensen en één aanspreekpunt.",
      },
      { property: "og:title", content: "Over Renobest" },
      { property: "og:description", content: "Vertrouwen, vakmanschap, nauwgezetheid — al jaren in Limburg." },
      { property: "og:url", content: "/over-ons" },
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
            <p className="eyebrow">Over Renobest</p>
            <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">
              Een renovatiepartner die{" "}
              <span className="italic text-primary">doet wat hij belooft.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              Renobest is een Limburgse familiezaak gespecialiseerd in
              badkamers, keukens en dressings. We werken al jaren met een vast
              team van eigen vakmensen — geen onderaannemers, geen
              verrassingen.
            </p>
          </div>
          <Placeholder
            prompt="Professional craftsman team portrait in modern renovated bathroom showroom, friendly atmosphere, premium editorial photography, warm natural light"
            width={1000}
            height={1100}
            className="rounded-sm shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          eyebrow="Onze waarden"
          title="Drie woorden waar we elke dag naar handelen"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Vertrouwen", body: "Eerlijke prijzen, transparante planning, één vast aanspreekpunt — vanaf het eerste gesprek." },
            { icon: Award, title: "Vakmanschap", body: "Eigen vakmensen met jarenlange ervaring. Elk detail telt, van leiding tot voeg." },
            { icon: Heart, title: "Nauwgezetheid", body: "We werken pas af als alles klopt. En we gaan altijd die extra mile om u te verrassen." },
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
            prompt="Friendly business owner in modern renovated kitchen, professional portrait, warm natural light, premium editorial photography, Belgian craftsman"
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
              Bij Renobest geloven we dat een goede renovatie begint en eindigt
              met persoonlijk contact. Daarom is de zaakvoerder altijd uw
              aanspreekpunt: hij komt ter plekke, denkt mee over het ontwerp en
              volgt het project van dichtbij op. Geen tussenpersonen, geen
              ruis.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Het team bestaat uit ervaren tegelzetters, loodgieters,
              elektriciens en schrijnwerkers in vaste dienst. Zo kunnen we
              kwaliteit garanderen en strakke planningen aanhouden.
            </p>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Maak kennis"
        title="Laat ons uw project bespreken"
        body="Plan een vrijblijvend kennismakingsgesprek bij u thuis. Wij luisteren, denken mee en bezorgen u een heldere offerte."
      />
    </SiteShell>
  );
}
