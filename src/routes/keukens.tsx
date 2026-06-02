import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/keukens")({
  head: () => ({
    meta: [
      { title: "Keukenrenovatie in Limburg — Renobest" },
      {
        name: "description",
        content:
          "Premium keukens op maat: stijlvol, praktisch en volledig afgewerkt door eigen vakmensen. Renobest realiseert uw droomkeuken in Limburg.",
      },
      { property: "og:title", content: "Keukenrenovatie — Renobest" },
      { property: "og:description", content: "Op maat gemaakte keukens met oog voor detail en één vast aanspreekpunt." },
      { property: "og:url", content: "/keukens" },
    ],
    links: [{ rel: "canonical", href: "/keukens" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Keukens"
      title="Een keuken die het kloppend"
      titleAccent="hart wordt van uw huis."
      intro="Renobest ontwerpt en plaatst stijlvolle, praktische keukens op maat — van compact stadshuis tot ruime villa. Inclusief alle aansluitingen, toestellen en afwerking."
      heroPrompt="Premium modern kitchen renovation, matte handleless cabinets in warm beige tones, natural marble island with waterfall edge, integrated Miele appliances, soft pendant lighting, editorial interior architecture photography"
      benefits={[
        "Maatwerkkeukens, ontworpen rond uw kookgewoonten.",
        "Volledige coördinatie van elektriciteit, sanitair, ventilatie en afwerking.",
        "Premium toestellen (Bosch, Siemens, Miele, AEG) tegen scherpe condities.",
        "Strak afgewerkte werkbladen in natuursteen, dekton of composiet.",
        "Slimme indeling met lades, schuif­systemen en verlichting.",
        "Eén opleverdatum — de keuken is gebruiksklaar.",
      ]}
      painSolution={{
        pain: "Een nieuwe keuken die maanden duurt, met telkens een andere uitvoerder over de vloer.",
        solution: "Eén ploeg, één strakke planning en een keuken die op de afgesproken dag klaar is voor gebruik.",
      }}
      materials={[
        {
          title: "Fronten & cabinets",
          body: "Matte lak, gefineerd hout of structuurlaminaat — in elke stijl, van Scandinavisch tot industrieel.",
          prompt: "Modern kitchen cabinet detail in matte beige and warm oak, handleless design, soft natural light, product photography",
        },
        {
          title: "Werkbladen",
          body: "Natuursteen, dekton, keramiek of composiet — gekozen op basis van uw gebruik en stijl.",
          prompt: "Marble kitchen worktop close-up with brass tap, soft shadows, premium interior detail photography",
        },
        {
          title: "Toestellen",
          body: "Inductie, combi-oven, koffiemachine, wijnklimaatkast — wij adviseren en plaatsen integraal.",
          prompt: "Built-in modern kitchen appliances, integrated oven and coffee machine in warm wood cabinetry, premium interior",
        },
      ]}
      miniSteps={[
        { n: "01", title: "Wensen & metingen", body: "We bespreken kookgewoonten, stijl en ruimte." },
        { n: "02", title: "3D-ontwerp & offerte", body: "U ziet uw keuken in detail voordat de productie start." },
        { n: "03", title: "Plaatsing & oplevering", body: "Wij zorgen voor uitbraak, installatie en finale check." },
      ]}
      projects={[
        { title: "Scandinavische keuken · Hasselt", prompt: "Scandinavian style kitchen with warm oak, white walls, marble island, soft daylight" },
        { title: "Donkere keuken · Genk", prompt: "Dark moody kitchen with deep green cabinets, brass fixtures, marble worktop" },
        { title: "Familie keuken · Sint-Truiden", prompt: "Family kitchen with large island, warm wood, white cabinets and pantry" },
        { title: "Loft keuken · Maaseik", prompt: "Industrial loft kitchen with black cabinets, concrete worktop, brass pendant lights" },
        { title: "Klassiek modern · Tongeren", prompt: "Classic modern kitchen with shaker style cabinets in soft cream, marble counters" },
        { title: "Compact stadskeuken · Bilzen", prompt: "Compact urban kitchen with handleless cabinets, integrated appliances, smart storage" },
      ]}
      faq={[
        { q: "Hoe lang duurt een keukenrenovatie?", a: "Een gemiddelde keuken wordt op 1 tot 2 weken geplaatst, na een doorlooptijd van 6 à 8 weken voor productie en levering." },
        { q: "Komen jullie ook de oude keuken uitbreken?", a: "Ja. Sloop, afvoer, ruwbouwaanpassingen en plaatsing — alles gebeurt door ons team." },
        { q: "Kunnen we onze eigen toestellen voorzien?", a: "Zeker. We integreren even graag uw eigen aangekochte toestellen als toestellen die wij leveren." },
        { q: "Krijgen we een 3D-ontwerp?", a: "Ja, elk project start met een gedetailleerd 3D-ontwerp en materialenplan." },
      ]}
    />
  ),
});
