import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, HardHat } from "lucide-react";

const services = [
  { to: "/renovatie", label: "Renovatiewerken" },
  { to: "/ruwbouw", label: "Ruwbouw & Nieuwbouw" },
  { to: "/aanpak", label: "Onze aanpak" },
  { to: "/realisaties", label: "Realisaties" },
] as const;

const regios = [
  { to: "/regio/tongeren", label: "Tongeren" },
  { to: "/regio/bilzen", label: "Bilzen" },
  { to: "/regio/riemst", label: "Riemst" },
  { to: "/regio/borgloon", label: "Borgloon" },
  { to: "/regio/hoeselt", label: "Hoeselt" },
] as const;

const company = [
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-ink text-cream/80">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-primary">
              <HardHat className="h-5 w-5 text-white" strokeWidth={1.8} />
            </div>
            <div className="leading-none">
              <p className="font-serif text-xl text-cream">Houbrechts</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Bouwfirma · Tongeren</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            Uw betrouwbare bouwpartner in Tongeren en omstreken. Renovatie en ruwbouw van A tot Z — vakmanschap, eerlijke prijzen, persoonlijke begeleiding.
          </p>
          <div className="mt-6 space-y-2 text-sm text-cream/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +32 (0)... — bel ons direct</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@houbrechts.be</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Driekruisenstraat 105, 3700 Tongeren</p>
          </div>
        </div>

        <FooterCol title="Diensten" items={services} />
        <FooterCol title="Werkgebied" items={regios} />
        <FooterCol title="Bedrijf" items={company} />
      </div>

      <div className="border-t border-cream/10">
        <div className="container-narrow flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream/45 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Bouwfirma Houbrechts. Alle rechten voorbehouden.</p>
          <p>Renovatie · Ruwbouw · Tongeren — Limburg, België</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: readonly { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-cream/65 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
