import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UserCheck, Hammer, MapPin, HeartHandshake } from "lucide-react";
import { SiteShell, Section, SectionHeader, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import { ReviewsMarquee } from "@/components/site/ReviewsMarquee";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Bouwfirma Tongeren — Renovatie & Ruwbouw | Houbrechts" },
      {
        name: "description",
        content:
          "Bouwfirma Houbrechts in Tongeren: specialist in renovatiewerken en ruwbouw in Limburg. Eerlijke prijzen, persoonlijke aanpak, gratis offerte.",
      },
      { property: "og:title", content: "Bouwfirma Houbrechts Tongeren — Renovatie & Ruwbouw" },
      {
        property: "og:description",
        content: "Specialist in renovatie en ruwbouw in Tongeren en omstreken. Lokale familiezaak, één aanspreekpunt.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Bouwfirma Houbrechts",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Driekruisenstraat 105",
            addressLocality: "Tongeren",
            postalCode: "3700",
            addressCountry: "BE",
          },
          geo: { "@type": "GeoCoordinates", latitude: 50.78, longitude: 5.46 },
          url: "https://houbrechts.be",
          areaServed: "Tongeren, Limburg, België",
          description: "Bouwfirma gespecialiseerd in renovatiewerken en ruwbouw in de regio Tongeren–Limburg.",
        }),
      },
    ],
  }),
  component: HomePage,
}));

const usps = [
  {
    icon: UserCheck,
    title: "Één aanspreekpunt",
    body: "De zaakvoerder is uw vaste contact, van eerste gesprek tot oplevering.",
  },
  {
    icon: Hammer,
    title: "Vakmanschap",
    body: "Jarenlange ervaring in renovatie en ruwbouw — oog voor elk detail.",
  },
  {
    icon: MapPin,
    title: "Lokaal in Tongeren",
    body: "Gevestigd in Tongeren, actief in de hele regio Limburg.",
  },
  {
    icon: HeartHandshake,
    title: "Eerlijke prijs",
    body: "Transparante offertes zonder verborgen kosten. 6% BTW mogelijk.",
  },
];

const services = [
  {
    to: "/renovatie" as const,
    title: "Renovatie",
    body: "Van badkamerrenovatie tot totaalverbouwing — wij renoveren uw woning van A tot Z met vakmanschap en oog voor detail.",
    prompt: "Belgian home renovation project, beautiful modern bathroom with natural stone tiles, warm lighting, premium interior photography, renovation contractor",
  },
  {
    to: "/ruwbouw" as const,
    title: "Ruwbouw & Nieuwbouw",
    body: "Solide fundamenten voor uw nieuwbouw, uitbouw of aanbouw. Funderingen, metselwerk en betonwerken.",
    prompt: "Belgian new construction ruwbouw, brick masonry work on modern residential home, professional contractors, Limburg architecture, editorial photography",
  },
];

const approach = [
  { n: "01", title: "Gratis kennismaking", body: "Wij komen ter plaatse, luisteren naar uw wensen en bekijken de situatie." },
  { n: "02", title: "Heldere offerte", body: "U ontvangt een gedetailleerde, transparante offerte zonder verborgen kosten." },
  { n: "03", title: "Uitvoering & oplevering", body: "Wij voeren alles uit en leveren op — u heeft één vast aanspreekpunt." },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-ink text-cream">
        <div className="absolute inset-0">
          <Placeholder
            prompt="Aerial view of beautiful residential renovation project in Belgian Limburg, brick and modern architecture, warm sunset light, professional editorial photography, construction excellence"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/72 to-ink/35" />
        </div>
        <div className="container-narrow relative grid gap-12 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Bouwfirma · Tongeren · Limburg</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
              Renovatie & ruwbouw in{" "}
              <span className="italic text-primary">Tongeren.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/82">
              Bouwfirma Houbrechts is uw lokale partner voor renovatiewerken en ruwbouw in de regio Tongeren–Limburg. Familiezaak, persoonlijke begeleiding, eerlijke prijzen.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Gratis offerte aanvragen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/aanpak"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/30 bg-ink/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                Onze aanpak
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/20 pt-8">
              <Stat n="15+" label="jaar ervaring" />
              <Stat n="100%" label="lokale expertise" />
              <Stat n="6%" label="BTW mogelijk" />
            </dl>
          </div>
        </div>

        {/* Floating USP bar */}
        <div className="container-narrow relative -mb-16 translate-y-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {usps.map((u) => (
              <div
                key={u.title}
                className="rounded-sm border border-cream/12 bg-ink/55 p-4 backdrop-blur-xl shadow-[var(--shadow-elegant)] sm:p-5"
              >
                <u.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-3 text-sm font-semibold text-cream">{u.title}</h3>
                <p className="mt-1 hidden text-xs leading-relaxed text-cream/70 sm:block">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SELECTOR */}
      <section className="bg-cream pt-32 pb-14">
        <div className="container-narrow">
          <SectionHeader
            title="Waarvoor kunt u bij ons terecht?"
            intro="Selecteer uw type project en ontdek hoe Bouwfirma Houbrechts uw woning transformeert."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Placeholder prompt={s.prompt} width={900} height={700} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-ink/20 transition-opacity group-hover:bg-ink/10" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-3xl">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Meer over {s.title.toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews marquee */}
      <ReviewsMarquee />

      {/* Approach teaser */}
      <Section className="bg-ink text-cream" bleed>
        <div className="container-narrow grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Onze aanpak</p>
            <h2 className="mt-3 text-4xl leading-[1.1] md:text-5xl">
              Van eerste gesprek tot laatste steen —{" "}
              <span className="italic text-primary">begin tot einde.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/68">
              We luisteren naar uw wensen, adviseren eerlijk en realiseren uw bouwproject — met een vast aanspreekpunt en transparante afspraken.
            </p>
            <Link
              to="/aanpak"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Bekijk het volledige proces <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ol className="space-y-6">
            {approach.map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-[auto_1fr] gap-6 border-l-2 border-primary/30 pl-6"
              >
                <span className="font-serif text-3xl text-primary">{step.n}</span>
                <div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm text-cream/68">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Realisaties strip */}
      <Section className="bg-cream">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Realisaties" title="Recent gerealiseerd in Limburg" />
          <Link to="/realisaties" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
            Alle projecten <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { prompt: "Beautiful renovated Belgian bathroom with grey slate tiles, walk-in shower, modern fixtures, warm lighting", title: "Badkamerrenovatie · Tongeren" },
            { prompt: "Brick masonry ruwbouw construction on modern Belgian residential home extension, Limburg, professional construction photography", title: "Uitbouw ruwbouw · Bilzen" },
            { prompt: "Complete home renovation interior, open living space with modern kitchen and wooden floors, Belgian style", title: "Totaalrenovatie · Riemst" },
            { prompt: "Renovated Belgian kitchen with cream cabinets, natural stone counter, warm pendant lighting, editorial interior photography", title: "Keukenrenovatie · Borgloon" },
            { prompt: "New construction Belgian house foundations and brickwork, professional ruwbouw, Limburg landscape", title: "Nieuwbouw ruwbouw · Hoeselt" },
            { prompt: "Renovated Belgian facade gevelrenovatie, freshly repointed brickwork on traditional Limburg house, professional photography", title: "Gevelrenovatie · Tongeren" },
          ].map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)]">
              <Placeholder prompt={p.prompt} width={900} height={700} className="transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="p-5 text-sm font-medium">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTABand />
    </SiteShell>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-primary md:text-4xl">{n}</dt>
      <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/55">{label}</dd>
    </div>
  );
}
