import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, Section, SectionHeader, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import { ArrowRight, MapPin, Clock, Wrench } from "lucide-react";

interface RegioData {
  name: string;
  intro: string;
  buurten: string[];
  reistijd: string;
  references: string;
}

const data: Record<string, RegioData> = {
  tongeren: {
    name: "Tongeren",
    intro: "Als oudste stad van België heeft Tongeren een uniek woningbestand — van historische rijwoningen in het centrum tot moderne woningen in de buitenwijken. Houbrechts renoveert hier met respect voor karakter én met moderne afwerking.",
    buurten: ["Centrum", "Berg", "Mal", "Sluizen", "Vreren", "Widooie", "Nerem"],
    reistijd: "Gevestigd in Tongeren",
    references: "Tientallen projecten in Tongeren",
  },
  bilzen: {
    name: "Bilzen",
    intro: "Bilzen en zijn deelgemeenten kennen een mix van traditionele landbouwwoningen en nieuwbouwverkavelingen. Bouwfirma Houbrechts is actief in de hele Bilzense regio voor renovatie en ruwbouw.",
    buurten: ["Centrum", "Rijkhoven", "Munsterbilzen", "Waltwilder", "Mopertingen"],
    reistijd: "15 min van onze werkplaats",
    references: "Actief in de regio Bilzen",
  },
  riemst: {
    name: "Riemst",
    intro: "Riemst combineert karakteristieke Haspengouwse hoeves en moderne woningen in het landelijke Droog-Haspengouw. Wij kennen de bouwtradities en werken met respect voor het landelijke karakter.",
    buurten: ["Riemst", "Val-Meer", "Vlijtingen", "Genoelselderen", "Vroenhoven"],
    reistijd: "20 min van onze werkplaats",
    references: "Actief in de Riemst regio",
  },
  borgloon: {
    name: "Borgloon",
    intro: "Borgloon en de Haspengouwse fruitstreek herbergen prachtige vakwerkhoeves en landelijke woningen. Houbrechts voert er renovatie- en ruwbouwwerken uit met oog voor de lokale bouwstijl.",
    buurten: ["Borgloon", "Kerniel", "Hendrieken", "Jesseren", "Bommershoven"],
    reistijd: "20 min van onze werkplaats",
    references: "Actief in de Borgloon regio",
  },
  hoeselt: {
    name: "Hoeselt",
    intro: "Hoeselt ligt centraal tussen Tongeren en Bilzen en kent een mix van Haspengouwse hoeves en residentiële verkavelingen. Een vertrouwde werkzone voor Bouwfirma Houbrechts.",
    buurten: ["Hoeselt", "Romershoven", "Sint-Huibrechts-Hern", "Werm", "Vliermaal"],
    reistijd: "15 min van onze werkplaats",
    references: "Actief in de Hoeselt regio",
  },
  heers: {
    name: "Heers",
    intro: "Heers en haar deelgemeenten kennen een landelijk karakter met typische Haspengouwse boerderijen en nieuwbouwwoningen. Houbrechts is actief voor renovatie en ruwbouw in de hele gemeente.",
    buurten: ["Heers", "Mechelen-Bovelingen", "Heks", "Vechmaal", "Veulen"],
    reistijd: "25 min van onze werkplaats",
    references: "Actief in de Heers regio",
  },
  kortessem: {
    name: "Kortessem",
    intro: "Kortessem grenst aan Tongeren en combineert residentieel wonen met landelijk karakter. Een vertrouwde regio voor Bouwfirma Houbrechts.",
    buurten: ["Kortessem", "Vliermaalroot", "Wintershoven", "Guigoven", "Zichen-Zussen-Bolder"],
    reistijd: "15 min van onze werkplaats",
    references: "Actief in de Kortessem regio",
  },
};

export const Route = createFileRoute("/regio/$stad")({
  loader: ({ params }) => {
    const stad = data[params.stad];
    if (!stad) throw notFound();
    return { stad };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.stad.name ?? "Limburg";
    return {
      meta: [
        { title: `Renovatie & ruwbouw in ${name} — Bouwfirma Houbrechts` },
        {
          name: "description",
          content: `Bouwfirma Houbrechts is actief voor renovatie en ruwbouw in ${name} en omstreken. Lokale familiezaak uit Tongeren — gratis offerte.`,
        },
      ],
      links: [{ rel: "canonical", href: `/regio/${name.toLowerCase()}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: `Bouwfirma Houbrechts — ${name}`,
            areaServed: name,
            description: `Renovatie en ruwbouw in ${name} en omstreken.`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Driekruisenstraat 105",
              addressLocality: "Tongeren",
              postalCode: "3700",
              addressCountry: "BE",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFoundRegio,
  component: RegioPage,
});

function NotFoundRegio() {
  return (
    <SiteShell>
      <Section>
        <h1 className="text-4xl">Regio niet gevonden</h1>
        <p className="mt-4 text-muted-foreground">
          Wij zijn actief in de regio Tongeren en omstreken. Neem direct contact op voor meer info.
        </p>
        <Link to="/contact" className="mt-6 inline-block text-primary">
          Naar contact →
        </Link>
      </Section>
    </SiteShell>
  );
}

const services = [
  { to: "/renovatie" as const, title: "Renovatiewerken", prompt: "Belgian home renovation completed beautiful bathroom and interior Limburg professional" },
  { to: "/ruwbouw" as const, title: "Ruwbouw & Nieuwbouw", prompt: "Belgian residential construction ruwbouw brick masonry professional Limburg new build" },
];

function RegioPage() {
  const { stad } = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Bouwfirma Houbrechts in {stad.name}
            </p>
            <h1 className="mt-4 text-5xl leading-[1.04] md:text-6xl">
              Renovatie & ruwbouw in{" "}
              <span className="italic text-primary">{stad.name}</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              {stad.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary-deep"
              >
                Gratis offerte aanvragen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/realisaties"
                className="inline-flex items-center justify-center rounded-sm border border-cream/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream hover:border-primary hover:text-primary"
              >
                Bekijk realisaties
              </Link>
            </div>
          </div>
          <Placeholder
            prompt={`Beautiful traditional Belgian Limburg house exterior in ${stad.name}, Haspengouw architecture, warm afternoon light, residential photography, renovation potential`}
            width={1000}
            height={1100}
            className="rounded-sm shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          eyebrow={`Diensten in ${stad.name}`}
          title={`Twee specialiteiten, ook bij u in ${stad.name}`}
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group block overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <Placeholder prompt={s.prompt} width={900} height={700} />
              <div className="p-6">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {s.title} in {stad.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <Info icon={MapPin} title={`Actief in ${stad.name}`} body={`Wij werken regelmatig in ${stad.buurten.join(", ")}.`} />
          <Info icon={Clock} title="Snel ter plaatse" body={stad.reistijd + " — vlot bereikbaar voor plaatsbezoek en opvolging."} />
          <Info icon={Wrench} title="Lokale referenties" body={stad.references + ". Vraag gerust om referenties in uw gemeente."} />
        </div>
      </Section>

      <CTABand
        eyebrow={`Bouw uw project in ${stad.name}`}
        title={`Klaar voor uw renovatie of ruwbouw in ${stad.name}?`}
        body="Gratis plaatsbezoek, eerlijk advies en een transparante offerte. Wij komen graag bij u langs."
      />
    </SiteShell>
  );
}

function Info({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof MapPin;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-sm border border-border bg-card p-7">
      <Icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
