import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, SectionHeader } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import { UserCheck } from "lucide-react";

export const Route = createFileRoute("/aanpak")({
  head: () => ({
    meta: [
      { title: "Onze aanpak — Renobest" },
      {
        name: "description",
        content:
          "Vertrouwen, vakmanschap en nauwgezetheid — van eerste afspraak tot oplevering. Ontdek de zes stappen van Renobest.",
      },
      { property: "og:title", content: "Onze aanpak — Renobest" },
      { property: "og:description", content: "Eén aanspreekpunt en eigen vakmensen, in 6 heldere stappen." },
      { property: "og:url", content: "/aanpak" },
    ],
    links: [{ rel: "canonical", href: "/aanpak" }],
  }),
  component: AanpakPage,
});

const steps = [
  {
    n: "01",
    title: "Kennismaking bij u thuis",
    body: "De zaakvoerder komt persoonlijk langs, luistert naar uw dromen en bekijkt de ruimte. Geheel vrijblijvend.",
  },
  {
    n: "02",
    title: "Ontwerp & advies",
    body: "Wij werken een doordacht 3D-ontwerp uit en helpen u slimme keuzes maken op vlak van indeling, materialen en sfeer.",
  },
  {
    n: "03",
    title: "Materiaalkeuze",
    body: "Samen kiezen we tegels, sanitair, fronten, werkbladen — bij vertrouwde leveranciers, zonder verrassingen.",
  },
  {
    n: "04",
    title: "Heldere planning",
    body: "U krijgt een vaste startdatum en opleverdatum. Een duidelijke planning, week per week.",
  },
  {
    n: "05",
    title: "Uitvoering met eigen vakmensen",
    body: "Wij realiseren het volledige project met onze eigen werknemers. Geen onderaannemers, geen gepuzzel.",
  },
  {
    n: "06",
    title: "Oplevering + the extra mile",
    body: "Bij de eindcontrole lopen we alles na. Extra wensen? Wij staan voor u klaar tot u 100% tevreden bent.",
  },
];

function AanpakPage() {
  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow py-20 md:py-28">
          <p className="eyebrow">Onze aanpak</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
            Vertrouwen, vakmanschap en{" "}
            <span className="italic text-primary">nauwgezetheid.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Onze aanpak staat helemaal in het teken van vertrouwen, vakmanschap
            en nauwgezetheid — van de eerste afspraak tot de oplevering.
          </p>
        </div>
      </section>

      <Section>
        <ol className="grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <span className="font-serif text-4xl text-primary">{s.n}</span>
              <h2 className="mt-4 text-2xl">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-cream">
        <div className="rounded-sm bg-ink p-10 text-cream md:p-14">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
            <UserCheck className="h-16 w-16 text-primary" strokeWidth={1.4} />
            <div>
              <p className="eyebrow">Eén aanspreekpunt</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                De zaakvoerder is altijd uw aanspreekpunt.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/75">
                Van de eerste afspraak bij u thuis tot de oplevering: u heeft
                één vast contact die het volledige project opvolgt. Geen
                doorverwijzingen, geen ruis op de lijn.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <SectionHeaderBlock />
      <CTABand />
    </SiteShell>
  );
}

function SectionHeaderBlock() {
  return (
    <Section>
      <SectionHeader
        align="center"
        eyebrow="Altijd the extra mile"
        title="Ons team heeft oog voor het kleinste detail."
        intro="Heeft u aan het eind van het project nog extra wensen? Dan staan we voor u klaar. Dat is voor ons vanzelfsprekend."
      />
    </Section>
  );
}
