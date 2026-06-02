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
  hasselt: {
    name: "Hasselt",
    intro:
      "Als Limburgse hoofdstad combineert Hasselt stadse panden en moderne villa's. Renobest realiseerde hier al tal van premium badkamers en keukens.",
    buurten: ["Centrum", "Runkst", "Banneux", "Kiewit", "Sint-Lambrechts-Herk"],
    reistijd: "15 min van onze werkplaats",
    references: "20+ projecten in en rond Hasselt",
  },
  genk: {
    name: "Genk",
    intro:
      "Van moderne nieuwbouw tot karaktervolle renovaties in oudere wijken — Genk biedt veel diversiteit. Wij kennen de typische woningstijlen door en door.",
    buurten: ["Centrum", "Waterschei", "Winterslag", "Zwartberg", "Bret"],
    reistijd: "20 min van onze werkplaats",
    references: "15+ projecten in Genk",
  },
  "sint-truiden": {
    name: "Sint-Truiden",
    intro:
      "Sint-Truiden combineert charmante historische woningen met moderne nieuwbouw. Wij hebben ervaring met beide en respecteren de bestaande karakteristieken.",
    buurten: ["Centrum", "Brustem", "Gorsem", "Velm", "Zepperen"],
    reistijd: "30 min van onze werkplaats",
    references: "12+ projecten in Haspengouw",
  },
  tongeren: {
    name: "Tongeren",
    intro:
      "België's oudste stad heeft een uniek woningbestand. Renobest renoveert hier met respect voor karakter én met moderne afwerking.",
    buurten: ["Centrum", "Berg", "Mal", "Sluizen", "Vreren"],
    reistijd: "25 min van onze werkplaats",
    references: "10+ projecten in Tongeren e.o.",
  },
  maaseik: {
    name: "Maaseik",
    intro:
      "Van karakteristieke woningen in het centrum tot ruime villa's aan de Maas — onze ploeg renoveert in heel het Maasland.",
    buurten: ["Centrum", "Neeroeteren", "Opoeteren", "Aldeneik"],
    reistijd: "35 min van onze werkplaats",
    references: "8+ projecten in het Maasland",
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
        { title: `Badkamer, keuken & dressing renovatie in ${name} — Renobest` },
        {
          name: "description",
          content: `Renobest renoveert badkamers, keukens en dressings in ${name} en omstreken. Eigen vakmensen, één aanspreekpunt, perfecte afwerking.`,
        },
        { property: "og:title", content: `Renovatie in ${name} — Renobest` },
        {
          property: "og:description",
          content: `Premium badkamer-, keuken- en dressingrenovaties in ${name}.`,
        },
        { property: "og:url", content: `/regio/${name.toLowerCase()}` },
      ],
      links: [{ rel: "canonical", href: `/regio/${name.toLowerCase()}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Renobest — ${name}`,
            areaServed: name,
            description: `Badkamer-, keuken- en dressingrenovaties in ${name} en omstreken.`,
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
          We kennen deze regio nog niet. Bekijk al onze regio's of neem direct contact op.
        </p>
        <Link to="/contact" className="mt-6 inline-block text-primary">
          Naar contact →
        </Link>
      </Section>
    </SiteShell>
  );
}

const services = [
  { to: "/badkamers" as const, title: "Badkamers", prompt: "Modern luxury bathroom renovation with walk-in shower and freestanding tub" },
  { to: "/keukens" as const, title: "Keukens", prompt: "Premium modern kitchen with marble island and warm wood cabinets" },
  { to: "/dressings" as const, title: "Dressings", prompt: "Custom walk-in dressing room with oak shelves and integrated lighting" },
];

function RegioPage() {
  const { stad } = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="bg-ink text-cream">
        <div className="container-narrow grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Renobest in {stad.name}
            </p>
            <h1 className="mt-4 text-5xl leading-[1.04] md:text-6xl">
              Renovatie in{" "}
              <span className="italic text-primary">{stad.name}</span> — door eigen vakmensen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              {stad.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary-deep"
              >
                Vraag een offerte aan <ArrowRight className="h-4 w-4" />
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
            prompt={`Beautiful Belgian Limburg home exterior in ${stad.name}, traditional architecture with modern renovation, warm afternoon light, premium real estate photography`}
            width={1000}
            height={1100}
            className="rounded-sm shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      {/* Diensten in stad */}
      <Section className="bg-cream">
        <SectionHeader
          eyebrow="Diensten in deze regio"
          title={`Drie specialiteiten, ook bij u in ${stad.name}`}
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group block overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <Placeholder prompt={s.prompt} width={800} height={700} />
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

      {/* Waarom hier */}
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <Info icon={MapPin} title={`Vertrouwd met ${stad.name}`} body={`We werken regelmatig in ${stad.buurten.join(", ")}.`} />
          <Info icon={Clock} title="Snel ter plaatse" body={stad.reistijd + " — vlot bereikbaar voor opvolging."} />
          <Info icon={Wrench} title="Lokale referenties" body={stad.references + ". Vraag gerust om voorbeelden."} />
        </div>
      </Section>

      <CTABand
        eyebrow={`Plan uw renovatie in ${stad.name}`}
        title={`Klaar voor uw nieuwe badkamer, keuken of dressing in ${stad.name}?`}
        body="Vrijblijvend plaatsbezoek, helder advies en een eerlijke offerte. Wij komen graag bij u langs."
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
