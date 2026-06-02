import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, Section } from "@/components/site/SiteShell";
import { Toaster, toast } from "sonner";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & offerte aanvragen — Renobest" },
      {
        name: "description",
        content:
          "Vraag vrijblijvend uw offerte aan bij Renobest. Wij plannen een kennismakingsgesprek bij u thuis in Limburg.",
      },
      { property: "og:title", content: "Contact — Renobest" },
      { property: "og:description", content: "Plan een vrijblijvend gesprek over uw renovatie." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("naam") || !data.get("email") || !data.get("bericht")) {
      toast.error("Vul alstublieft alle verplichte velden in.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Bedankt! We nemen binnen 24u contact met u op.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <SiteShell>
      <Toaster position="top-center" richColors />
      <section className="bg-ink text-cream">
        <div className="container-narrow py-20 md:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
            Realiseer uw{" "}
            <span className="italic text-primary">droomproject</span> — neem contact op.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">
            Vul het formulier in en wij plannen een vrijblijvend
            kennismakingsgesprek bij u thuis. Binnen 24u krijgt u van ons
            bericht.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10"
          >
            <div className="grid gap-5">
              <Field label="Naam *" name="naam" required />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="E-mail *" name="email" type="email" required />
                <Field label="Telefoon" name="telefoon" type="tel" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Dienst
                  </label>
                  <select
                    name="dienst"
                    defaultValue="Badkamer"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option>Badkamer</option>
                    <option>Keuken</option>
                    <option>Dressing</option>
                    <option>Combinatie / anders</option>
                  </select>
                </div>
                <Field label="Postcode" name="postcode" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Vertel ons over uw project *
                </label>
                <textarea
                  name="bericht"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Beschrijf kort uw renovatie, gewenste timing, eventuele inspiratie..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-60"
              >
                {submitting ? "Versturen..." : "Verstuur aanvraag"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                We nemen binnen 24u contact met u op. Uw gegevens worden enkel gebruikt om uw aanvraag te behandelen.
              </p>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-sm bg-ink p-8 text-cream">
              <p className="eyebrow">Bereik ons direct</p>
              <ul className="mt-6 space-y-4 text-sm">
                <ContactItem icon={Phone} label="Telefoon" value="+32 (0)11 00 00 00" href="tel:+3211000000" />
                <ContactItem icon={Mail} label="E-mail" value="info@renobest.be" href="mailto:info@renobest.be" />
                <ContactItem icon={MapPin} label="Werkgebied" value="Limburg & omstreken" />
                <ContactItem icon={Clock} label="Bereikbaar" value="Ma–Vr · 8u – 18u" />
              </ul>
            </div>
            <div className="rounded-sm border border-border bg-cream p-6 text-sm">
              <p className="font-serif text-xl">Wij komen bij u thuis</p>
              <p className="mt-2 text-muted-foreground">
                Het eerste gesprek vindt plaats bij u thuis. Zo zien we de
                ruimte, leren u kennen en kunnen we gericht advies geven.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 flex-none text-primary" strokeWidth={1.6} />
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-cream/55">{label}</p>
        <p className="mt-0.5 text-base">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="hover:text-primary">{content}</a> : content}</li>;
}
