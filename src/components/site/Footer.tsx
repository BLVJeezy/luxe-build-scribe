import { Link } from "@tanstack/react-router";
import logo from "@/assets/renobest-logo.png.asset.json";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { to: "/badkamers", label: "Badkamers" },
  { to: "/keukens", label: "Keukens" },
  { to: "/dressings", label: "Dressings" },
] as const;

const regios = [
  { to: "/regio/hasselt", label: "Hasselt" },
  { to: "/regio/genk", label: "Genk" },
  { to: "/regio/sint-truiden", label: "Sint-Truiden" },
  { to: "/regio/tongeren", label: "Tongeren" },
  { to: "/regio/maaseik", label: "Maaseik" },
] as const;

const company = [
  { to: "/aanpak", label: "Onze aanpak" },
  { to: "/realisaties", label: "Realisaties" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-ink text-cream/80">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={logo.url} alt="Renobest" className="h-10 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
            De badkamer, keuken of dressing van uw dromen is ons vak.
            Vakmanschap, één aanspreekpunt en eigen vakmensen — van eerste
            afspraak tot oplevering.
          </p>
          <div className="mt-6 space-y-2 text-sm text-cream/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +32 (0)11 00 00 00</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@renobest.be</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Limburg, België</p>
          </div>
        </div>

        <FooterCol title="Diensten" items={services} />
        <FooterCol title="Regio's" items={regios} />
        <FooterCol title="Bedrijf" items={company} />
      </div>

      <div className="border-t border-cream/10">
        <div className="container-narrow flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream/50 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Renobest. Alle rechten voorbehouden.</p>
          <p>Badkamers · Keukens · Dressings — Limburg</p>
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
              className="text-cream/70 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
