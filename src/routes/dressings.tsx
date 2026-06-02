import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/dressings")({
  head: () => ({
    meta: [
      { title: "Dressings & inbouwkasten op maat — Renobest" },
      {
        name: "description",
        content:
          "Slim ingedeelde dressings en inbouwkasten op maat, vakkundig geplaatst door Renobest. Ontdek onze realisaties in Limburg.",
      },
      { property: "og:title", content: "Dressings op maat — Renobest" },
      { property: "og:description", content: "Maatwerk dressings met oog voor detail, geplaatst door eigen vakmensen." },
      { property: "og:url", content: "/dressings" },
    ],
    links: [{ rel: "canonical", href: "/dressings" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Dressings"
      title="Een dressing waar alles op"
      titleAccent="zijn plek staat."
      intro="Walk-in dressings, inbouwkasten in slaapkamer of hal — Renobest ontwerpt en plaatst maatwerkkasten met slimme indeling en perfecte afwerking."
      heroPrompt="Elegant walk-in dressing room, custom oak wardrobe with integrated LED lighting, organized open shelving with folded clothes, shoe display, soft beige carpet, warm ambient lighting, premium interior architecture photography"
      benefits={[
        "Volledig maatwerk — perfect inpasbaar in elke ruimte.",
        "Doordachte indeling: hanggedeelte, lades, schoenenrek, sieradenlade.",
        "Geïntegreerde LED-verlichting voor sfeer én functie.",
        "Premium beslag (Blum, Hettich) voor zachte sluiting.",
        "Strak afgewerkt tot tegen plafond en wand.",
        "Afwerking in lak, fineer of houttinten naar keuze.",
      ]}
      painSolution={{
        pain: "Standaardkasten die nooit helemaal passen en ruimte verloren laten.",
        solution: "Een dressing op de millimeter, met de juiste indeling voor uw kleding en gewoontes.",
      }}
      materials={[
        {
          title: "Open of gesloten",
          body: "Walk-in dressings met open vakken, of inbouwkasten met deuren in vlak design.",
          prompt: "Custom open walk-in wardrobe with oak shelving and organized clothes, warm lighting, premium interior",
        },
        {
          title: "Verlichting",
          body: "Geïntegreerde LED-strips in legplanken en hangrails — schakelt automatisch aan bij openen.",
          prompt: "Wardrobe interior with integrated LED lighting strips, organized shelves, modern design detail",
        },
        {
          title: "Indeling op maat",
          body: "Lades met fluwelen inleg, broekenrekken, schoenenladder, sieradenvakken — alles wat u nodig heeft.",
          prompt: "Custom wardrobe interior with velvet-lined drawers, tie rack, jewelry compartments, premium luxury closet detail",
        },
      ]}
      miniSteps={[
        { n: "01", title: "Inventarisatie", body: "We bespreken uw garderobe en gewoonten." },
        { n: "02", title: "3D-ontwerp", body: "U ziet exact hoe uw dressing eruit zal zien." },
        { n: "03", title: "Plaatsing", body: "Ons team plaatst de dressing in 1 tot 2 dagen." },
      ]}
      projects={[
        { title: "Walk-in dressing · Hasselt", prompt: "Luxurious walk-in dressing room with oak shelves, central island with drawers, brass fixtures" },
        { title: "Slaapkamer kast · Genk", prompt: "Bedroom built-in wardrobe in matte cream finish, handleless doors, integrated lighting" },
        { title: "Hal-kast · Tongeren", prompt: "Custom hallway storage closet in warm wood, integrated bench, coat hooks" },
        { title: "Compact dressing · Maaseik", prompt: "Small walk-in closet with smart organization, mirror, soft lighting, modern design" },
        { title: "Luxe dressing · Sint-Truiden", prompt: "Luxury dressing room with display cases, marble island, chandelier, premium interior" },
        { title: "Kinderkast · Bilzen", prompt: "Custom kids wardrobe in soft pastel colors with organized hanging space and drawers" },
      ]}
      faq={[
        { q: "Hoe lang duurt de plaatsing?", a: "Een gemiddelde dressing wordt op 1 tot 2 dagen geplaatst, na een productietijd van 4 à 6 weken." },
        { q: "Kan een dressing in een schuine ruimte?", a: "Zeker. Maatwerk betekent dat we ook hellende daken, hoeken en nissen perfect kunnen invullen." },
        { q: "Welke materialen gebruiken jullie?", a: "We werken met gemelamineerd plaatmateriaal, lak op MDF of echt houtfineer — afhankelijk van uw budget en stijl." },
        { q: "Kunnen jullie ook verlichting voorzien?", a: "Ja, geïntegreerde LED-verlichting met bewegingsmelder of touch-bediening is standaard mogelijk." },
      ]}
    />
  ),
});
