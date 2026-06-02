import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/renobest-logo.png.asset.json";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/badkamers", label: "Badkamers" },
  { to: "/keukens", label: "Keukens" },
  { to: "/dressings", label: "Dressings" },
  { to: "/aanpak", label: "Aanpak" },
  { to: "/realisaties", label: "Realisaties" },
  { to: "/over-ons", label: "Over ons" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <div className="container-narrow flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Renobest home">
          <img src={logo.url} alt="Renobest" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-primary"
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
            Offerte aanvragen
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
        <div className="border-t border-border/40 bg-ink lg:hidden">
          <div className="container-narrow flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-medium text-cream/80 hover:bg-stone/10 hover:text-primary"
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
              Offerte aanvragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
