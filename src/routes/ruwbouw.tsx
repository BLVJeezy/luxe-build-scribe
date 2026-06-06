import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/ruwbouw")({
  head: () => ({
    meta: [
      { title: "Ruwbouw & Nieuwbouw Tongeren — Aannemer Limburg | Houbrechts" },
      {
        name: "description",
        content:
          "Bouwfirma Houbrechts: ruwbouw en nieuwbouw in Tongeren en Limburg. Funderingen, metselwerk, betonwerken en uitbouw. Erkend aannemer — gratis offerte.",
      },
      { property: "og:title", content: "Ruwbouw Tongeren — Houbrechts" },
      { property: "og:description", content: "Ruwbouw en nieuwbouw aannemer in Tongeren: funderingen, metselwerk, uitbouw. Gratis en vrijblijvende offerte." },
      { property: "og:url", content: "/ruwbouw" },
    ],
    links: [{ rel: "canonical", href: "/ruwbouw" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Ruwbouw & Nieuwbouw · Tongeren"
      title="Een fundament gebouwd om"
      titleAccent="te blijven."
      intro="Van fundering tot windicht — Bouwfirma Houbrechts voert ruwbouwwerken uit met vakmanschap en precisie in de regio Tongeren–Limburg. Nieuwbouw, uitbouw of aanbouw: wij leggen de basis."
      heroPrompt="Professional Belgian residential construction ruwbouw, brick masonry work on modern house, professional contractors at work, Limburg landscape, warm afternoon light, editorial construction photography"
      benefits={[
        "Van fundering tot windicht: wij bouwen uw woning of uitbouw in één hand.",
        "Erkend aannemer met jarenlange ervaring in de regio Tongeren–Limburg.",
        "Transparante planning met vaste startdatum en tussentijdse communicatie.",
        "Samenwerking met uw architect of op basis van eigen plannen.",
        "Gecertificeerde materialen en beproefde bouwmethodes.",
        "Één aanspreekpunt van eerste offerte tot oplevering.",
      ]}
      painSolution={{
        pain: "Onduidelijkheid over planning, aannemer die verdwijnt en kostenoverschrijdingen die u verrassen.",
        solution: "Bouwfirma Houbrechts: transparante offerte, vaste planning en één aanspreekpunt — altijd bereikbaar.",
      }}
      materials={[
        {
          title: "Metselwerk",
          body: "Dragend en niet-dragend metselwerk in gevelbakstenen, poriso of cellenbeton. Voegwerken en herstelmetselwerk in de regio Tongeren.",
          prompt: "Professional brick masonry work on Belgian residential building, skilled craftsman laying bricks, traditional and modern construction, Limburg Belgium",
        },
        {
          title: "Betonwerken",
          body: "Funderingsplaten, gewapend beton, tussenvloeren en chapewerken. Wij werken met gecertificeerde betonmengsels op maat van uw project.",
          prompt: "Concrete foundation work poured and reinforced, construction site Belgium, professional residential building, rebar and concrete formwork",
        },
        {
          title: "Dak & winddicht",
          body: "Dakstructuur, tengels, panlatten en winddicht maken. Wij werken samen met erkende dakwerkers voor een volledige winddichte oplevering.",
          prompt: "Belgian residential roof timber frame structure, wooden roof joists and rafters, new construction Belgium, professional construction photography",
        },
      ]}
      miniSteps={[
        { n: "01", title: "Plaatsbezoek & opname", body: "Wij komen ter plaatse, bekijken de grond, bespreken plannen en luisteren naar uw wensen." },
        { n: "02", title: "Detailofferte", body: "U ontvangt een transparante, gedetailleerde prijsopgave met fasering en timing." },
        { n: "03", title: "Bouw & oplevering", body: "Op de afgesproken datum starten wij de werken. U heeft één aanspreekpunt van begin tot einde." },
      ]}
      projects={[
        { title: "Nieuwbouw woning · Tongeren", prompt: "New residential construction Belgium, brick house being built, professional ruwbouw, Limburg landscape background" },
        { title: "Uitbouw veranda · Bilzen", prompt: "House extension construction Belgium, brick extension being built onto existing house, professional contractors" },
        { title: "Garage & carport · Riemst", prompt: "New garage construction Belgium, brick masonry walls, professional contractor, residential Limburg" },
        { title: "Funderingswerken · Hoeselt", prompt: "Foundation construction work Belgium, concrete footings and basement walls, professional residential building" },
        { title: "Aanbouw slaapkamer · Borgloon", prompt: "Bedroom addition construction Belgium, brick extension on traditional house, professional masonry work" },
        { title: "Casco woning · Sint-Truiden", prompt: "Casco house construction Belgium complete shell, brick walls and roof structure, windtight new build" },
      ]}
      faq={[
        { q: "Wat is het verschil tussen ruwbouw en casco/windicht?", a: "'Casco' of 'windicht' betekent dat de woning wind- en waterdicht is maar nog niet binnenafgewerkt. Ruwbouw omvat alle structurele werken: fundering, dragende muren, tussenvloeren en dakstructuur. Wij kunnen u een woning windicht opleveren waarna de binnenafwerking volgt." },
        { q: "Heb ik een architect nodig voor mijn uitbouw?", a: "Voor uitbouwen groter dan 40m² is in Tongeren een architect en bouwvergunning verplicht. Voor kleinere constructies soms niet, afhankelijk van de locatie en de gemeente. Wij adviseren u hierover en werken vlot samen met uw architect." },
        { q: "Hoelang duurt de ruwbouw van een gemiddelde woning?", a: "Een standaard woning tot windicht duurt gemiddeld 4 tot 8 maanden, afhankelijk van de grootte en complexiteit. Wij stellen altijd een gedetailleerde planning op bij de offerte." },
        { q: "Werken jullie op basis van architectuurplannen?", a: "Zeker. Wij werken regelmatig samen met lokale en regionale architecten. Heeft u al plannen? Bezorg ze ons en wij maken een gedetailleerde offerte op." },
        { q: "Wat is de richtprijs voor een ruwbouw in Tongeren?", a: "De prijs hangt sterk af van de grootte, de bodemgesteldheid en het type constructie. Als indicatie rekent u voor een standaard rijwoning met €150.000 à €250.000 voor de volledige ruwbouwfase. Wij maken altijd een correcte offerte na plaatsbezoek." },
      ]}
    />
  ),
});
