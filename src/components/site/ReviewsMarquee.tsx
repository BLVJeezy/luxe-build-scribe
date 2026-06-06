const reviews = [
  { quote: "Eindelijk een bouwfirma die doet wat ze belooft. Netjes, op tijd en perfecte afwerking.", author: "Marc V.", place: "Tongeren" },
  { quote: "Onze badkamer volledig vernieuwd — prachtig resultaat. Altijd netjes en correct.", author: "Lies D.", place: "Bilzen" },
  { quote: "Ruwbouw van onze uitbouw perfect uitgevoerd. Professioneel team, eerlijke prijs.", author: "Tom B.", place: "Riemst" },
  { quote: "Van eerste gesprek tot oplevering: persoonlijk contact, nauwgezet en met oog voor detail.", author: "Sofie & Jan", place: "Hoeselt" },
  { quote: "Onze keuken en woonkamer volledig gerenoveerd. Top kwaliteit, scherpe prijs.", author: "Familie Peters", place: "Borgloon" },
  { quote: "Snelle offerte, duidelijke communicatie en prachtig eindresultaat. Absolute aanrader!", author: "Kevin M.", place: "Sint-Truiden" },
  { quote: "Totaalrenovatie van A tot Z begeleid door de zaakvoerder zelf. Geweldig resultaat.", author: "An V.", place: "Tongeren" },
  { quote: "Professioneel, eerlijk en oog voor detail. Ze kwamen zelfs nog extra punten afwerken na de oplevering.", author: "Dirk H.", place: "Kortessem" },
];

export function ReviewsMarquee() {
  const doubled = [...reviews, ...reviews];

  return (
    <div className="border-y border-border bg-stone/40 py-12">
      <div className="marquee" style={{ "--marquee-duration": "55s" } as React.CSSProperties}>
        <div className="marquee-track flex gap-6">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="w-[340px] flex-none rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="text-primary text-sm tracking-wider">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{r.quote}"</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-medium">{r.author}</p>
                <p className="text-xs text-muted-foreground">{r.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
