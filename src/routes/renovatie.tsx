import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/renovatie")({
  head: () => ({
    meta: [
      { title: "Renovatie Tongeren — Badkamer, Keuken & Totaalrenovatie | Houbrechts" },
      {
        name: "description",
        content:
          "Bouwfirma Houbrechts renoveert uw woning in Tongeren en omstreken. Badkamer, keuken, totaalrenovatie en gevelrenovatie. Gratis offerte, 6% BTW mogelijk.",
      },
      { property: "og:title", content: "Renovatie Tongeren — Houbrechts" },
      { property: "og:description", content: "Renovatiewerken in Tongeren: badkamer, keuken, totaalrenovatie. Erkend aannemer, gratis offerte." },
      { property: "og:url", content: "/renovatie" },
    ],
    links: [{ rel: "canonical", href: "/renovatie" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Renovatiewerken · Tongeren"
      title="Renovatie die voelt als"
      titleAccent="een nieuw thuis."
      intro="Van badkamerrenovatie tot volledige verbouwing — Bouwfirma Houbrechts begeleidt uw renovatieproject van A tot Z. Erkend aannemer, eerlijke prijs, lokale kennis."
      heroPrompt="Beautiful Belgian home renovation completed project, modern open living space with natural materials, warm lighting, premium interior photography, residential renovation Limburg Belgium"
      benefits={[
        "Volledige coördinatie: sloopwerken, ruwbouw, tegels, sanitair, elektra, schilderwerk — alles in één hand.",
        "Transparante offerte zonder verborgen kosten, opgesteld na gratis plaatsbezoek.",
        "Mogelijk 6% BTW voor woningen ouder dan 10 jaar — duizenden euro's besparing.",
        "Vaste startdatum en opleverdatum met heldere tussentijdse communicatie.",
        "Eén aanspreekpunt van begin tot einde: de zaakvoerder volgt alles op.",
        "Erkend aannemer in Limburg met jarenlange lokale ervaring.",
      ]}
      painSolution={{
        pain: "Drie aannemers, niemand die de eindverantwoordelijkheid neemt — en uw renovatie die maar aanloopt.",
        solution: "Eén aanspreekpunt, één planning, één team dat uw renovatie van A tot Z realiseert in Tongeren.",
      }}
      materials={[
        {
          title: "Badkamer & tegels",
          body: "Grootformaat porselein, marmerlook of natuursteen — advies op kleur, formaat en onderhoud. Walk-in douche, vrijstaand bad, ingebouwde meubels.",
          prompt: "Premium bathroom renovation with large format porcelain tiles, walk-in shower, warm natural stone, Belgian renovation contractor work, professional photography",
        },
        {
          title: "Keuken & woonkamer",
          body: "Bouwkundige aanpassingen voor uw nieuwe keuken: doorbraken, vloerwerken, elektra en sanitair. Wij leggen de basis, u kiest de fronten.",
          prompt: "Kitchen renovation in progress, new walls and floor, fresh plastering, professional Belgian building contractor, before and after renovation",
        },
        {
          title: "Gevel & buitenwerken",
          body: "Voegwerken, gevelisolatie, bepleistering en gevelrenovatie. Uw gevel als visitekaartje — duurzaam en verzorgd.",
          prompt: "Belgian brick facade renovation, fresh repointing work on traditional Limburg house, professional gevelrenovatie, warm afternoon light",
        },
      ]}
      miniSteps={[
        { n: "01", title: "Plaatsbezoek", body: "Wij komen ter plaatse, bekijken de situatie en luisteren naar uw wensen." },
        { n: "02", title: "Transparante offerte", body: "U ontvangt een gedetailleerde offerte zonder verborgen kosten, binnen 5 werkdagen." },
        { n: "03", title: "Uitvoering & oplevering", body: "Ons team voert alles uit — sloop, ruwbouw, afwerking. U heeft één aanspreekpunt." },
      ]}
      projects={[
        { title: "Badkamerrenovatie · Tongeren", prompt: "Modern bathroom renovation in Belgian home, grey slate floor, walk-in shower, white vanity, warm lighting" },
        { title: "Totaalrenovatie · Bilzen", prompt: "Complete interior renovation Belgian house, open plan living, wooden floors, new kitchen, bright modern space" },
        { title: "Keukenrenovatie · Riemst", prompt: "Renovated Belgian kitchen with cream handleless cabinets, stone countertop, pendant lights, warm interior" },
        { title: "Gevelrenovatie · Borgloon", prompt: "Renovated Belgian brick house facade, fresh pointing, traditional Limburg architecture, professional finish" },
        { title: "Badkamerrenovatie · Hoeselt", prompt: "Small Belgian bathroom renovation, dark green tiles, brass fixtures, vintage style, compact luxury" },
        { title: "Totaalrenovatie · Sint-Truiden", prompt: "Full home renovation Belgian terrace house, open staircase, light walls, herringbone floor, modern rustic" },
      ]}
      faq={[
        { q: "Kan ik in aanmerking komen voor 6% BTW bij renovatie?", a: "Voor renovatiewerken aan woningen ouder dan 10 jaar geldt in België een verlaagd BTW-tarief van 6% in plaats van 21%. Dit geldt voor arbeidskosten en door de aannemer aangekochte materialen. Wij informeren u altijd over de exacte voorwaarden bij de offerte." },
        { q: "Hoelang duurt een gemiddelde badkamerrenovatie?", a: "Een gemiddelde badkamerrenovatie van A tot Z duurt 2 tot 4 weken, afhankelijk van de omvang en de gekozen materialen. Wij plannen altijd een vaste startdatum en houden u tussentijds op de hoogte." },
        { q: "Werken jullie ook met onderaannemers?", a: "Voor gespecialiseerde onderdelen zoals elektriciteitswerken werken wij samen met erkende en betrouwbare vaklui. U heeft echter altijd één aanspreekpunt: wij coördineren alles en u hoeft nooit naar iemand anders door te worden verwezen." },
        { q: "Wat kost een totaalrenovatie in Tongeren?", a: "Dit hangt sterk af van de staat van de woning, de gewenste afwerking en de oppervlakte. Als richtprijs rekent u met €400 à €800 per m² voor een kwalitatieve renovatie. Wij maken altijd een gedetailleerde offerte op maat na een gratis plaatsbezoek." },
        { q: "Hoe vraag ik een offerte aan?", a: "U kunt het contactformulier invullen of ons rechtstreeks bellen. Na een vrijblijvend plaatsbezoek bij u thuis ontvangt u binnen 5 werkdagen een gedetailleerde offerte zonder verborgen kosten." },
      ]}
    />
  ),
});
