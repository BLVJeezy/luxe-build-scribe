import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/badkamers")({
  head: () => ({
    meta: [
      { title: "Badkamerrenovatie in Limburg — Renobest" },
      {
        name: "description",
        content:
          "Uw droombadkamer van A tot Z, gerealiseerd door eigen vakmensen. Stijlvol, praktisch en met oog voor detail. Vraag uw offerte aan bij Renobest.",
      },
      { property: "og:title", content: "Badkamerrenovatie — Renobest" },
      { property: "og:description", content: "Luxueuze badkamers, één aanspreekpunt, eigen vakmensen." },
      { property: "og:url", content: "/badkamers" },
    ],
    links: [{ rel: "canonical", href: "/badkamers" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Badkamers"
      title="Een badkamer die voelt als"
      titleAccent="uw privé-spa."
      intro="Van walk-in inloopdouche tot vrijstaand bad: Renobest realiseert tijdloze, praktische badkamers met luxueuze afwerking — volledig door ons eigen team."
      heroPrompt="Luxurious spa bathroom renovation, walk-in rain shower with frameless glass, freestanding stone bathtub, warm wood double vanity with brass fixtures, large format porcelain tiles, soft natural light, premium interior photography"
      benefits={[
        "Volledige coördinatie: sanitair, tegelwerk, elektra, verlichting, schrijnwerk — alles in één hand.",
        "3D-ontwerp zodat u uw badkamer al ziet voordat we starten.",
        "Slimme indeling op maat van uw ruimte en gezin.",
        "Premium materialen en sanitair van A-merken.",
        "Strak afgewerkt tegelwerk en perfect afgewerkte voegen.",
        "Vaste opleverdatum en transparante prijsafspraken.",
      ]}
      painSolution={{
        pain: "Drie aannemers, twee onderaannemers en niemand die de eindverantwoordelijkheid neemt.",
        solution: "Eén aanspreekpunt, één planning, één team dat uw badkamer realiseert van A tot Z.",
      }}
      materials={[
        {
          title: "Tegels & natuursteen",
          body: "Grootformaat porselein, marmerlook of warme natuursteen — geadviseerd op kleur, formaat en onderhoud.",
          prompt: "Large format porcelain bathroom tiles in warm cream and natural stone, close-up texture, premium interior detail photography",
        },
        {
          title: "Sanitair & kranen",
          body: "Vrijstaande baden, inloopdouches en designkranen in chroom, matzwart of geborsteld brons.",
          prompt: "Luxury bathroom fixtures detail, brushed brass shower head and tap, frameless glass, soft lighting, premium interior product photography",
        },
        {
          title: "Meubel & verlichting",
          body: "Maatwerk badkamermeubels in eik of mat lak, met sfeerverlichting en inbouwspots op de juiste plek.",
          prompt: "Custom oak bathroom vanity with integrated LED lighting, double sink, warm ambient light, modern minimalist design",
        },
      ]}
      miniSteps={[
        { n: "01", title: "Plaatsbezoek", body: "We bekijken de ruimte en luisteren naar uw wensen." },
        { n: "02", title: "Ontwerp + offerte", body: "U krijgt een gedetailleerd 3D-ontwerp en transparante prijs." },
        { n: "03", title: "Realisatie", body: "Ons team voert alles uit — sloop, ruwbouw, afwerking, oplevering." },
      ]}
      projects={[
        { title: "Spa-badkamer · Hasselt", prompt: "Spa bathroom with double walk-in shower, terrazzo floor, brass fixtures, warm wood vanity" },
        { title: "Klassiek modern · Genk", prompt: "Classic modern bathroom with marble tiles, freestanding tub, gold fixtures, large mirror" },
        { title: "Compact luxe · Tongeren", prompt: "Small luxury bathroom with dark green tiles, brass fixtures, vintage style mirror" },
        { title: "Minimalist · Maaseik", prompt: "Minimalist bathroom in micro cement, walk-in shower, black fixtures, hidden lighting" },
        { title: "Familie badkamer · Sint-Truiden", prompt: "Family bathroom with double sink, bath and shower, warm wood and soft beige tiles" },
        { title: "Penthouse badkamer · Bilzen", prompt: "Penthouse bathroom with city view, freestanding black bathtub, marble walls, designer lighting" },
      ]}
      faq={[
        { q: "Hoe lang duurt een volledige badkamerrenovatie?", a: "Een gemiddelde renovatie duurt 3 tot 5 weken, afhankelijk van de omvang. We communiceren vooraf een vaste planning en houden u dagelijks op de hoogte." },
        { q: "Werken jullie met eigen mensen of onderaannemers?", a: "Renobest werkt het volledige project af met eigen werknemers. Geen gepuzzel en geen onderaannemers die naar elkaar wijzen." },
        { q: "Kunnen we materialen zelf kiezen?", a: "Zeker. U krijgt onderbouwd advies en kan kiezen uit ons netwerk van toonzalen, of zelf materialen aanleveren." },
        { q: "Krijgen we een 3D-ontwerp?", a: "Ja, na de eerste afspraak werken we een 3D-ontwerp uit zodat u uw nieuwe badkamer al kan beleven voor de start." },
        { q: "Hoe verloopt de offerte?", a: "Na een vrijblijvend plaatsbezoek ontvangt u een gedetailleerde, transparante offerte zonder verborgen kosten." },
      ]}
    />
  ),
});
