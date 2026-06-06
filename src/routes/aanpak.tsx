import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, SectionHeader } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import { UserCheck } from "lucide-react";

export const Route = createFileRoute("/aanpak")({
  head: () => ({
    meta: [
      { title: "Onze aanpak — Bouwfirma Houbrechts Tongeren" },
      {
        name: "description",
        content:
          "Transparant, eerlijk en persoonlijk — ontdek de aanpak van Bouwfirma Houbrechts in Tongeren. Van eerste afspraak tot oplevering.",
      },
    ],
    links: [{ rel: "canonical", href: "/aanpak" }],
  }),
  component: AanpakPage,
});

const steps = [
  {
    n: "01",
    title: "Gratis kennismaking bij u thuis",
    body: "De zaakvoerder komt persoonlijk langs, luistert naar uw wensen en bekijkt de situatie ter plaatse. Geheel vrijblijvend en zonder verplichtingen.",
  },
  {
    n: "02",
    title: "Transparante offerte",
    body: "U ontvangt een gedetailleerde offerte zonder verborgen kosten. Alles uitgelegd per post: materialen, uren en planning — binnen 5 werkdagen.",
  },
  {
    n: "03",
    title: "Materialen & voorbereiding",
    body: "Samen bespreken we de materialen, leveringen en planning. Wij regelen alles zodat de start vlot verloopt.",
  },
  {
    n: "04",
    title: "Vaste startdatum",
    body: "U krijgt een vaste startdatum en opleverdatum. Week per week weet u wat er zal gebeuren op uw werf.",
  },
  {
    n: "05",
    title: "Uitvoering door ons team",
    body: "Wij voeren het project uit — van sloop tot afwerking. Eén aanspreekpunt, geen doorverwijzingen, geen miscommunicatie.",
  },
  {
    n: "06",
    title: "Oplevering & nazorg",
    body: "Gezamenlijke eindcontrole bij oplevering. Zijn er puntjes? Wij lossen alles op tot u 100% tevreden bent.",
  },
];

function AanpakPage() {
  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow py-20 md:py-28">
          <p className="eyebrow">Onze aanpak</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
            Transparant, eerlijk en{" "}
            <span className="italic text-primary">persoonlijk.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            Onze aanpak is eenvoudig: één aanspreekpunt, duidelijke afspraken en vakmanschap van begin tot einde. Zo werkt Bouwfirma Houbrechts.
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
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/72">
                Van het eerste plaatsbezoek tot de oplevering: u heeft één vast contact die uw project van dichtbij opvolgt. Geen doorverwijzingen, geen ruis op de lijn — gewoon duidelijke communicatie en vakmanschap.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          align="center"
          eyebrow="Altijd the extra mile"
          title="Ons team heeft oog voor elk detail."
          intro="Heeft u na de oplevering nog een extra vraag of een punt dat afgewerkt moet worden? Wij staan voor u klaar. Dat is voor ons vanzelfsprekend."
        />
      </Section>

      <CTABand
        eyebrow="Klaar om te starten?"
        title="Plan uw gratis kennismakingsgesprek"
        body="De zaakvoerder komt persoonlijk langs. Geen verplichtingen, geen kleine lettertjes — gewoon eerlijk advies en een transparante offerte."
      />
    </SiteShell>
  );
}
