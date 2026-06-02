
# Renobest Marketing Website

Een premium, lead-gerichte website voor Renobest (badkamers, keukens, dressings) met aparte diensten- en regiopagina's voor SEO in Limburg.

## Merkidentiteit

- **Primair accent**: Burgundy/Dark Red `rgb(182, 55, 62)` — gebruikt voor CTA's, links, key highlights
- **Neutrals**: Wit, warm grijs, off-black voor tekst en achtergronden
- **Typografie**: Display serif (bv. Cormorant of Instrument Serif) voor headings + clean sans (Inter/Work Sans) voor body — straalt vakmanschap + modern uit
- **Logo**: meegeleverd logo (R_W_HORIZONTAL) in header/footer
- **Tone**: Nederlandstalig, expert, geruststellend, aspirationeel

## Sitemap

```
/                       Home — hero, USP's, diensten preview, realisaties, aanpak, testimonials, CTA
/badkamers              Dienstpagina badkamerrenovaties
/keukens                Dienstpagina keukenrenovaties
/dressings              Dienstpagina dressings & inbouwkasten
/aanpak                 6-staps proces van eerste afspraak tot oplevering
/realisaties            Project gallery (placeholders met data-lov-image-placeholder)
/over-ons               Over Renobest, vakmanschap, één aanspreekpunt
/regio/hasselt          Regiopagina (lokale SEO)
/regio/genk             Regiopagina
/regio/sint-truiden     Regiopagina
/regio/tongeren         Regiopagina
/regio/maaseik          Regiopagina
/contact                Contactformulier + offerte aanvraag
```

Elke route krijgt eigen `head()` met unieke title, description, og:title, og:description.

## Pagina-opbouw

### Home (`/`)
- **Hero**: groot beeld van badkamerrenovatie, headline "De badkamer, keuken of dressing van uw dromen is ons vak", subkop, twee CTA's: "Vraag een offerte aan" (burgundy) + "Ontdek onze aanpak" (outline)
- **USP-strip**: 4 pijlers — Eén aanspreekpunt · Eigen vakmensen · Vakmanschap & detail · Altijd the extra mile
- **Diensten preview**: 3 kaarten (Badkamers, Keukens, Dressings) met beeld + korte tekst + "Ontdek meer"
- **Aanpak teaser**: 3 stappen highlight + link naar /aanpak
- **Realisaties strip**: 6 projectkaarten + "Bekijk alle realisaties"
- **Testimonials**: 3 quotes "Wat onze klanten zeggen"
- **CTA-band**: "Realiseer uw droomproject — Vraag een offerte aan"
- **Footer**: contact, regio's, diensten, social

### Dienstpagina's (Badkamers / Keukens / Dressings)
Zelfde sjabloon, dienst-specifieke copy:
- Hero met groot beeld + dienst-specifieke headline
- "Wat krijgt u bij Renobest?" — bullet list (totaalconcept, eigen vakmensen, één aanspreekpunt, oog voor detail)
- Pain → Solution sectie (stress van renovatie → onze aanpak)
- Materialen & afwerking
- 3-staps mini-aanpak
- Realisaties strip gefilterd op deze dienst
- FAQ accordion (4-6 vragen)
- CTA-band

### Aanpak (`/aanpak`)
- 6 stappen (Kennismaking thuis → Ontwerp & advies → Materiaalkeuze → Planning → Uitvoering eigen vakmensen → Oplevering + extra mile)
- Eén-aanspreekpunt callout (zaakvoerder als vast contact)
- CTA

### Realisaties (`/realisaties`)
- Filter tabs (Alle / Badkamers / Keukens / Dressings)
- Masonry/grid met projectkaarten (image placeholders)
- CTA-band onderaan

### Regiopagina's (`/regio/[stad]`)
Sjabloon per stad voor lokale SEO:
- Hero "Badkamer-, keuken- en dressingrenovatie in [Stad]"
- Lokale intro (vermelding stad/buurten)
- Drie diensten herhaald in lokale context
- "Waarom Renobest in [Stad]" — reistijd, kennis van regio, lokale referenties
- Mini-realisaties uit de regio
- CTA + contactgegevens

### Over ons (`/over-ons`)
- Verhaal van Renobest, zaakvoerder als vast aanspreekpunt
- Team & vakmanschap, eigen vakmensen (geen onderaannemers)
- Waarden: vertrouwen, vakmanschap, nauwgezetheid
- CTA

### Contact (`/contact`)
- Offerteformulier (naam, e-mail, telefoon, dienst, postcode, bericht)
- Contactgegevens, openingsuren
- Map placeholder
- Form submit toont bevestigingstoast (frontend-only in deze fase — backend later)

## Gedeelde componenten

- `Header` — logo links, nav (Diensten dropdown, Aanpak, Realisaties, Over ons, Contact), burgundy CTA "Offerte aanvragen"
- `Footer` — kolommen: diensten, regio's, bedrijf, contact
- `ServiceCard`, `ProjectCard`, `TestimonialCard`, `StepCard`, `USPItem`
- `CTABand` — herbruikbare burgundy/dark conversie-band
- `FAQ` accordion (shadcn)
- `QuoteForm` (shadcn form + zod)

## Beelden

Alle visuals via `<div data-lov-image-placeholder data-prompt="..." data-width="..." data-height="...">` met concrete prompts per blok (luxe moderne badkamer, scandinavische keuken, verlichte walk-in dressing, vakmensen aan het werk, etc.). Geen stock-iconen die niet bij merk passen.

## Design system (technisch)

- `src/styles.css`: tokens in oklch — `--primary` = burgundy (~oklch(0.45 0.15 25)), warm neutrals, serif/sans font variabelen, ruime border-radius (`--radius: 0.5rem`), elegante shadow tokens
- Tailwind utilities via semantic tokens — geen losse hex-codes in componenten
- Subtiele fade-in/slide-up animaties (tw-animate-css) bij scroll, niet overdrijven
- Responsive: mobile first, generous whitespace op desktop

## Technisch

- TanStack Start file-based routing onder `src/routes/` met juiste filename↔path mapping (`regio.$stad.tsx` voor dynamische regio of aparte files per stad — kies aparte files voor expliciete SEO-controle)
- Elke route eigen `head()`; root houdt sitewide defaults
- JSON-LD `LocalBusiness` op home + per regiopagina, `Service` op dienstpagina's
- Form is in deze iteratie frontend-only (zod validatie + toast). Backend/Lovable Cloud kan in een volgende stap.

## Buiten scope (voor latere iteraties)

- Echte backend voor offerteformulier (email versturen via Lovable Cloud)
- Echte projectfoto's uploaden (nu placeholders)
- Meertaligheid (FR/EN)
- Blog/inspiratie sectie
