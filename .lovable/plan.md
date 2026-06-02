Aanpassingen in `src/routes/index.tsx` voor de floating USP bar (overlapt hero):

1. **Glassmorphism kaarten** — Elke USP wordt een aparte kaart:
   - `rounded-xl` afgeronde hoeken
   - Donkere semi-transparante achtergrond `bg-ink/55`
   - `backdrop-blur-xl` voor glaseffect
   - Subtiele rand `border border-cream/15`
   - `shadow-[var(--shadow-elegant)]` voor diepte

2. **Mobiele optimalisatie** — Grid wordt:
   - Mobiel: `grid-cols-2` (2 per rij) met enkel titel + icoon zichtbaar
   - Desktop: `lg:grid-cols-4` (4 op een rij) met volledige tekst
   - Bodytekst krijgt `hidden sm:block` zodat ze op mobiel verborgen is

3. **Tekst-/icoonkleuren** voor contrast op donkere achtergrond:
   - Iconen: `text-primary` (burgundy)
   - Titel: `text-cream`
   - Body: `text-cream/75`

4. **Icoonwijziging** — "Oog voor detail" gebruikt voortaan `Gem` in plaats van `Sparkles` (past beter bij vakmanschap/luxe). Import in lucide-react wordt aangepast.