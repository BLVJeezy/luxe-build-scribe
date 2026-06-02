import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, UserCheck, Hammer, Sparkles, HeartHandshake } from "lucide-react";
import { SiteShell, Section, SectionHeader, Placeholder } from "@/components/site/SiteShell";
import { CTABand } from "@/components/site/CTABand";
import heroTeam from "@/assets/hero-team.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renobest — Badkamers, keukens & dressings in Limburg" },
      {
        name: "description",
        content:
          "Uw droombadkamer, -keuken of -dressing van A tot Z. Renobest werkt met eigen vakmensen en één vast aanspreekpunt voor een zorgeloze renovatie in Limburg.",
      },
      { property: "og:title", content: "Renobest — Renovatie zonder zorgen in Limburg" },
      {
        property: "og:description",
        content:
          "Stijlvolle en praktische badkamers, keukens en dressings — afgewerkt met oog voor detail.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const usps = [
  {
    icon: UserCheck,
    title: "Eén aanspreekpunt",
    body: "De zaakvoerder is uw vaste contact, van eerste afspraak tot oplevering.",
  },
  {
    icon: Hammer,
    title: "Eigen vakmensen",
    body: "Geen onderaannemers die naar elkaar wijzen — alles door ons eigen team.",
  },
  {
    icon: Sparkles,
    title: "Oog voor detail",
    body: "Vakmanschap en nauwgezetheid in elke afwerking, van leiding tot voeg.",
  },
  {
    icon: HeartHandshake,
    title: "Altijd the extra mile",
    body: "Extra wensen op het einde? Wij staan voor u klaar tot u 100% tevreden bent.",
  },
];

const services = [
  {
    to: "/badkamers" as const,
    title: "Badkamers",
    body: "Tijdloze badkamers met luxueuze afwerking — van walk-in douche tot vrijstaand bad.",
    prompt: "Luxurious modern bathroom renovation, walk-in rain shower with black fixtures, freestanding stone bath, warm natural light, large format porcelain tiles, premium interior photography",
  },
  {
    to: "/keukens" as const,
    title: "Keukens",
    body: "Praktische, stijlvolle keukens op maat — het kloppend hart van uw woning.",
    prompt: "Premium modern kitchen renovation, matte handleless cabinets in warm tones, natural stone worktop with waterfall edge, integrated appliances, soft pendant lighting, editorial interior photography",
  },
  {
    to: "/dressings" as const,
    title: "Dressings",
    body: "Slim ingedeelde dressings en inbouwkasten — alles op zijn plek, elke dag.",
    prompt: "Elegant walk-in dressing room, custom oak wardrobe with integrated LED lighting, organized shelves and drawers, soft beige carpet, warm ambient lighting, premium interior photography",
  },
];

const approach = [
  { n: "01", title: "Kennismaking bij u thuis", body: "We luisteren naar uw dromen en bekijken de ruimte." },
  { n: "02", title: "Ontwerp & advies", body: "U krijgt een doordacht 3D-ontwerp en heldere offerte." },
  { n: "03", title: "Realisatie met eigen team", body: "Wij voeren alles uit — van sloop tot oplevering." },
];

const testimonials = [
  {
    quote:
      "Eindelijk een renovatieploeg die doet wat ze belooft. Eén aanspreekpunt, perfecte planning en een resultaat dat de verwachtingen overtreft.",
    author: "Familie Vandenberghe",
    place: "Hasselt",
  },
  {
    quote:
      "Van het eerste gesprek tot de oplevering: nauwgezet, eerlijk en met oog voor detail. Onze keuken is exact zoals we ze gedroomd hadden.",
    author: "Sofie & Tom",
    place: "Genk",
  },
  {
    quote:
      "Wij waardeerden enorm dat de zaakvoerder zelf langskwam. Geen gepuzzel met onderaannemers, gewoon kwaliteit en rust.",
    author: "Patrick D.",
    place: "Sint-Truiden",
  },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={heroTeam.url}
            alt="Renobest team aan het werk aan een dressing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
        </div>
        <div className="container-narrow relative grid gap-12 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Renovatie · Limburg</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
              De badkamer van uw{" "}
              <span className="italic text-primary">dromen</span> is ons vak.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/85">
              Vertrouw op Renobest voor een stijlvolle en praktische badkamer,
              keuken of dressing — afgewerkt met veel oog voor detail, door
              onze eigen vakmensen.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Vraag een offerte aan <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/aanpak"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/30 bg-ink/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                Ontdek onze aanpak
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/20 pt-8">
              <Stat n="15+" label="jaar ervaring" />
              <Stat n="100%" label="eigen vakmensen" />
              <Stat n="1" label="vast aanspreekpunt" />
            </dl>
          </div>
        </div>
      </section>


      {/* SERVICE SELECTOR */}
      <section className="bg-cream py-14">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Kies uw renovatie"
            title="Waarmee kunnen wij u helpen?"
            intro="Selecteer wat u wenst te renoveren en ontdek hoe Renobest uw dromen waarmaakt."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Placeholder prompt={s.prompt} width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-ink/20 transition-opacity group-hover:bg-ink/10" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Bekijk {s.title.toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <Section className="bg-cream">
        <SectionHeader
          eyebrow="Waarom Renobest"
          title="Renovatie zonder zorgen, mét vakmanschap"
          intro="Onze aanpak staat helemaal in het teken van vertrouwen, vakmanschap en nauwgezetheid — van de eerste afspraak tot de oplevering."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.title} className="bg-background p-8">
              <u.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Diensten"
            title="Drie specialiteiten, één aanpak"
            intro="Of het nu om een badkamer, keuken of dressing gaat — onze methode blijft dezelfde: luisteren, ontwerpen, realiseren."
          />
          <Link to="/realisaties" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
            Bekijk onze realisaties <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group block overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <Placeholder prompt={s.prompt} width={800} height={900} />
              <div className="p-7">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Ontdek meer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Approach teaser */}
      <Section className="bg-ink text-cream" bleed>
        <div className="container-narrow grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Onze aanpak</p>
            <h2 className="mt-3 text-4xl leading-[1.1] md:text-5xl">
              Van eerste droom tot laatste detail —{" "}
              <span className="italic text-primary">begin tot einde.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
              We luisteren naar uw dromen, helpen u slimme keuzes maken en
              realiseren uw héle project met onze eigen vakmensen.
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
                  <p className="mt-1 text-sm text-cream/70">{step.body}</p>
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
            { prompt: "Modern minimalist bathroom with black slate floor, brass shower fixtures, freestanding oval tub", title: "Badkamer · Hasselt" },
            { prompt: "Warm wood kitchen with marble island and brass pendant lights, scandinavian style", title: "Keuken · Genk" },
            { prompt: "Custom walk-in dressing with oak shelving and integrated LED strips, luxury closet design", title: "Dressing · Tongeren" },
            { prompt: "Spa-style bathroom with double vanity, large mirror, terrazzo tiles, plants", title: "Badkamer · Sint-Truiden" },
            { prompt: "Industrial style kitchen with black cabinets, concrete worktop and brass accents", title: "Keuken · Maaseik" },
            { prompt: "Compact bathroom renovation with green tiles, brass fixtures, vintage mirror", title: "Badkamer · Bilzen" },
          ].map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)]">
              <Placeholder prompt={p.prompt} width={900} height={700} className="transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="p-5 text-sm font-medium">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader eyebrow="Wat onze klanten zeggen" title="Vertrouwen, vakmanschap, nauwgezetheid" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="rounded-sm border border-border bg-card p-8">
              <p className="font-serif text-xl leading-snug">"{t.quote}"</p>
              <footer className="mt-6 flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="font-medium">{t.author}</span>
                <span className="text-muted-foreground">· {t.place}</span>
              </footer>
            </blockquote>
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
      <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/60">{label}</dd>
    </div>
  );
}
