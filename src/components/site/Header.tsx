import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, HardHat } from "lucide-react";

const nav = [
  { to: "/renovatie", label: "Renovatie" },
  { to: "/ruwbouw", label: "Ruwbouw" },
  { to: "/aanpak", label: "Aanpak" },
  { to: "/realisaties", label: "Realisaties" },
  { to: "/over-ons", label: "Over ons" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/88">
      <div className="container-narrow flex h-20 items-center justify-between">
        {/* Logo mark */}
        <Link to="/" className="flex items-center gap-3" aria-label="Bouwfirma Houbrechts home">
          <div className="flex h-10 w-10 items-center justify-center bg-primary">
            <HardHat className="h-5 w-5 text-white" strokeWidth={1.8} />
          </div>
          <div className="leading-none">
            <p className="font-serif text-xl text-cream tracking-tight">Houbrechts</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Bouwfirma · Tongeren
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-cream/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Gratis offerte
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-cream lg:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary/20 bg-ink lg:hidden">
          <div className="container-narrow flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-medium text-cream/75 hover:bg-primary/10 hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              Gratis offerte aanvragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
