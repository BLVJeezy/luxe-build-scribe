import { Star } from "lucide-react";
import { Section, SectionHeader } from "./SiteShell";

type Review = {
  author: string;
  place: string;
  rating: number; // 1-5
  text: string;
};

// Echte Google reviews (volledige pool, incl. lage scores die we eruit filteren)
const allReviews: Review[] = [
  { author: "Sonja Meyen", place: "Google · 3 maanden geleden", rating: 5, text: "Top top top, meer kan ik niet zeggen. Van offerte tot oplevering op 2 weken van werf naar een sjieke badkamer. Vriendelijke, bekwame stielmannen." },
  { author: "Nele Sak", place: "Google · 8 maanden geleden", rating: 5, text: "Hun slogan klopt! Dikke 10/10 voor deze firma. Renoveren zonder zorgen. Het begon al met een geweldige 3D-tekening die direct toonde hoe wij het wilden." },
  { author: "Patrick Vergoosen", place: "Google · 1 jaar geleden", rating: 5, text: "Vorig jaar besloten we om onze badkamer te renoveren. Na het vergelijken van verschillende offertes kozen we voor Renobest, vooral dankzij het vertrouwen." },
  { author: "Marie Christine Minke", place: "Google · 7 maanden geleden", rating: 5, text: "Zeer tevreden over de totale badkamerrenovatie. Alles vlot verlopen binnen de afspraken over tijd en budget. Er werd goed geluisterd naar mijn wensen." },
  { author: "Jimmy Vansant", place: "Google · 1 jaar geleden", rating: 4, text: "Zeer tevreden met de renovatie!" },
  { author: "Christof Heusdens", place: "Google · 7 maanden geleden", rating: 5, text: "Topservice! Top-naservice! Topstielmannen! Correcte prijs! Bij een probleem, zelfs in het weekend, kun je hen steeds contacteren. Aanrader!" },
  { author: "Betty Goossens", place: "Google · 1 jaar geleden", rating: 5, text: "Enkele maanden geleden hebben we Renobest gecontacteerd voor een badkamerrenovatie. Heel professioneel en correct." },
  { author: "Lydia Vandoren", place: "Google · 1 jaar geleden", rating: 5, text: "Wij genieten nu al sinds 1 jaar van onze volledig vernieuwde badkamer! Gewoon zalig. Werken verliepen vlot en mooi binnen de afgesproken tijd." },
  { author: "Mia Indekeu", place: "Google · 10 maanden geleden", rating: 5, text: "Fantastisch! Mercikes aan Robby die het zo mooi wist uit te zoeken. Heel content over de plaatsers, harde en precieze werkers." },
  { author: "Lut Brouns", place: "Google · 1 jaar geleden", rating: 5, text: "Super tevreden over alle aspecten. Renoveren in een bewoond appartement van 1974 levert verrassingen op, maar Renobest had alles voorzien." },
  { author: "Sebastien Bodart", place: "Google · 2 jaar geleden", rating: 5, text: "Ik kan enkel maar positief zijn over onze ervaring met Renobest en de renovatie van onze badkamer." },
  { author: "Cora Meier", place: "Google · 2 jaar geleden", rating: 5, text: "Al meerdere malen samengewerkt met Renobest voor de renovaties van keuken en badkamer." },
  { author: "Ludo Claes", place: "Google · 2 jaar geleden", rating: 5, text: "Wij wilden een totale renovatie van onze badkamer en kwamen Renobest tegen. Vanaf het eerste contact hadden we een goed gevoel." },
  { author: "Ingrid Vanbrabant", place: "Google · 1 jaar geleden", rating: 5, text: "Zeer vriendelijke en professionele vakmensen die weten van aanpakken. Luisteren aandachtig naar onze wensen en realiseren die tot in de kleinste details." },
  { author: "Christel Bangels", place: "Google · 3 maanden geleden", rating: 5, text: "Bekwame en correcte firma, zeker aan te bevelen!" },
  { author: "Raf Ruysen", place: "Google · 1 jaar geleden", rating: 5, text: "Zeer tevreden over de communicatie en uitvoering van de werken. Onze badkamer is exact zoals wij altijd gewild hebben. Top!" },
  { author: "Mireille Vanhoutryve", place: "Google · 1 jaar geleden", rating: 5, text: "Een kleine, oude badkamer werd getransformeerd in een mooi geheel. Van begin tot einde een zeer goede samenwerking." },
  { author: "Gijs Debeij", place: "Google · 3 jaar geleden", rating: 5, text: "Zeer tevreden. Gehele badkamer laten renoveren met top resultaat. Service van begin tot einde dik in orde!" },
  { author: "Gerard Verberne", place: "Google · 2 jaar geleden", rating: 5, text: "Bedankt voor de fijne samenwerking. Fijn, net personeel. Alles perfect volgens afspraak." },
  { author: "Thieu Casters", place: "Google · 2 jaar geleden", rating: 5, text: "Een echte aanrader. Ook na 3 jaar zeer vlotte achteraf service, fijne communicatie en perfect uitgevoerd door bekwame vakmensen." },
  { author: "Jos Mesotten", place: "Google · 2 jaar geleden", rating: 5, text: "Gewoon topfirma met vriendelijk en behulpzaam personeel die hun vak kennen." },
  { author: "Silvy Leenders", place: "Google · 8 maanden geleden", rating: 5, text: "Super super tevreden. Vriendelijke mensen." },
  { author: "Laurens Ignoul", place: "Google · 1 jaar geleden", rating: 5, text: "Goede service, snelle opvolging. Zeer tevreden over de uitgevoerde werken." },
  { author: "Victor David", place: "Google · 3 maanden geleden", rating: 5, text: "Behulpzame medewerkers!" },
  { author: "Jimmy B", place: "Google · 3 jaar geleden", rating: 5, text: "Goede communicatie en duidelijke prijsafspraken. Kleine problemen werden snel opgelost. Hogere prijs, maar kwaliteitsmateriaal." },
  // Lage reviews — worden uit de weergave gefilterd (<3 sterren)
  { author: "Anoniem", place: "Google", rating: 2, text: "Niet positief." },
  { author: "Anoniem", place: "Google", rating: 1, text: "Geen aanrader." },
];

// Filter reviews onder 3 sterren weg uit de weergave
const reviews = allReviews.filter((r) => r.rating >= 3);
// Officieel Google-totaal en gemiddelde (incl. alle reviews)
const totalCount = 34;
const average = 4.3;

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

      <div className="container-narrow mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { id: "uD-QxtyMHlc", title: "De zaakvoerder aan het woord", subtitle: "Zo gaan wij te werk" },
            { id: "N6nWqV8zfLE", title: "Een klant vertelt", subtitle: "Ervaring met Renobest" },
            { id: "uD-QxtyMHlc", title: "Nog een klantenreview", subtitle: "Tevreden over de afwerking" },
          ].map((v, i) => (
            <figure key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="relative aspect-video w-full bg-ink">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <figcaption className="p-4">
                <div className="text-sm font-semibold">{v.title}</div>
                <div className="text-xs text-muted-foreground">{v.subtitle}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
