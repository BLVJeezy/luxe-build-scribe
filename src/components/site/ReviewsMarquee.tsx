import { Star } from "lucide-react";
import { Section, SectionHeader } from "./SiteShell";

type Review = {
  author: string;
  place: string;
  rating: number; // 1-5
  text: string;
};

// Pool of reviews (incl. some low-rated, which we filter out)
const allReviews: Review[] = [
  { author: "Familie Vandenberghe", place: "Hasselt", rating: 5, text: "Eindelijk een renovatieploeg die doet wat ze belooft. Perfecte planning en een resultaat dat de verwachtingen overtreft." },
  { author: "Sofie & Tom", place: "Genk", rating: 5, text: "Van eerste gesprek tot oplevering: nauwgezet, eerlijk en met oog voor detail. Onze keuken is exact zoals gedroomd." },
  { author: "Patrick D.", place: "Sint-Truiden", rating: 5, text: "De zaakvoerder kwam zelf langs. Geen gepuzzel met onderaannemers, gewoon kwaliteit en rust." },
  { author: "Lieve & Jan", place: "Tongeren", rating: 5, text: "Onze dressing is een pareltje. Alles tot in de millimeter afgewerkt." },
  { author: "Karel V.", place: "Maaseik", rating: 4, text: "Vlotte communicatie en sterk vakmanschap. Kleine puntjes meteen opgelost." },
  { author: "Annelies P.", place: "Bilzen", rating: 5, text: "Wat een ervaring! Begeleiding van A tot Z, en het eindresultaat is luxueus." },
  { author: "Marc & Els", place: "Lommel", rating: 5, text: "Echte vakmensen die meedenken. We zijn dolblij met onze nieuwe badkamer." },
  { author: "Greet S.", place: "Beringen", rating: 4, text: "Professioneel team, strakke planning en mooie afwerking. Aanrader." },
  { author: "Nick & Eva", place: "Diepenbeek", rating: 5, text: "Zorgeloos verloop, één aanspreekpunt, en alles op tijd opgeleverd." },
  { author: "Anoniem", place: "—", rating: 2, text: "Niet helemaal mijn verwachting." }, // excluded
  { author: "Jeroen H.", place: "Houthalen", rating: 5, text: "Topkwaliteit, eerlijk advies en een prachtige keuken op maat." },
  { author: "Familie Coenen", place: "Pelt", rating: 5, text: "Onze dressing en badkamer in één traject — perfect gecoördineerd." },
];

// Filter out reviews under 3 stars
const reviews = allReviews.filter((r) => r.rating >= 3);
const totalCount = reviews.length;
const average =
  Math.round((reviews.reduce((s, r) => s + r.rating, 0) / totalCount) * 10) / 10;

// Duplicate the array so the marquee loops seamlessly
const loop = [...reviews, ...reviews];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} van 5 sterren`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={
            i <= Math.round(value)
              ? "h-4 w-4 fill-primary text-primary"
              : "h-4 w-4 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="flex w-[320px] shrink-0 flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:w-[360px]">
      <div>
        <Stars value={r.rating} />
        <p className="mt-4 font-serif text-lg leading-snug">"{r.text}"</p>
      </div>
      <footer className="mt-5 text-sm">
        <span className="font-medium">{r.author}</span>
        <span className="text-muted-foreground"> · {r.place}</span>
      </footer>
    </article>
  );
}

export function ReviewsMarquee() {
  return (
    <Section className="bg-cream">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Wat onze klanten zeggen"
          title="Vertrouwen, vakmanschap, nauwgezetheid"
          align="center"
        />
        <div className="mt-6 flex items-center justify-center gap-3">
          <Stars value={average} />
          <span className="text-sm">
            <span className="font-semibold text-foreground">{average.toFixed(1)}</span>
            <span className="text-muted-foreground"> · op basis van {totalCount} reviews</span>
          </span>
        </div>
      </div>

      <div
        className="marquee mt-12 [--marquee-duration:60s] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="marquee-track flex gap-5">
          {loop.map((r, i) => (
            <ReviewCard key={`${r.author}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </Section>
  );
}
