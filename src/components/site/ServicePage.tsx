import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteShell, Section, SectionHeader, Placeholder } from "./SiteShell";
import { CTABand } from "./CTABand";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  heroPrompt: string;
  benefits: string[];
  painSolution: { pain: string; solution: string };
  materials: { title: string; body: string; prompt: string }[];
  miniSteps: { n: string; title: string; body: string }[];
  projects: { title: string; prompt: string }[];
  faq: { q: string; a: string }[];
}

export function ServicePage(props: ServicePageProps) {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="container-narrow grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow">{props.eyebrow}</p>
            <h1 className="mt-5 text-5xl leading-[1.04] md:text-6xl">
              {props.title}{" "}
              <span className="italic text-primary">{props.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
              {props.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary-deep"
              >
                Vraag een offerte aan <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/realisaties"
                className="inline-flex items-center justify-center rounded-sm border border-cream/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream hover:border-primary hover:text-primary"
              >
                Bekijk realisaties
              </Link>
            </div>
          </div>
          <Placeholder
            prompt={props.heroPrompt}
            width={1000}
            height={1100}
            className="rounded-sm shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      {/* Benefits */}
      <Section className="bg-cream">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Wat krijgt u"
            title="Een totaalproject, zonder verrassingen"
            intro="Renobest neemt het volledige traject in handen — design, materialen, planning en uitvoering. Met één vast aanspreekpunt en eigen vakmensen."
          />
          <ul className="space-y-4">
            {props.benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 rounded-sm bg-background p-5 shadow-[var(--shadow-soft)]">
                <Check className="mt-0.5 h-5 w-5 flex-none text-primary" strokeWidth={2.2} />
                <span className="text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Pain → Solution */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-sm border border-border bg-card p-10">
            <p className="eyebrow text-muted-foreground">De realiteit</p>
            <h3 className="mt-3 text-3xl">{props.painSolution.pain}</h3>
          </div>
          <div className="rounded-sm bg-ink p-10 text-cream">
            <p className="eyebrow">Onze oplossing</p>
            <h3 className="mt-3 text-3xl">{props.painSolution.solution}</h3>
          </div>
        </div>
      </Section>

      {/* Materials */}
      <Section className="bg-cream">
        <SectionHeader
          eyebrow="Materialen & afwerking"
          title="Premium materialen, eerlijk advies"
          intro="We werken met sterke, tijdloze materialen die jaren mooi blijven — en helpen u kiezen wat past bij uw stijl en budget."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {props.materials.map((m) => (
            <div key={m.title} className="overflow-hidden rounded-sm bg-background shadow-[var(--shadow-soft)]">
              <Placeholder prompt={m.prompt} width={800} height={700} />
              <div className="p-6">
                <h4 className="text-xl">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini steps */}
      <Section className="bg-ink text-cream">
        <SectionHeader eyebrow="In drie stappen" title="Hoe uw project verloopt" />
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {props.miniSteps.map((s) => (
            <li key={s.n} className="border-t border-cream/15 pt-6">
              <span className="font-serif text-4xl text-primary">{s.n}</span>
              <h4 className="mt-3 text-2xl">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Projects */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Realisaties" title={`Onze ${props.eyebrow.toLowerCase()}`} />
          <Link to="/realisaties" className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
            Bekijk alle projecten <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {props.projects.map((p) => (
            <figure key={p.title} className="overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
              <Placeholder prompt={p.prompt} width={900} height={700} />
              <figcaption className="p-5 text-sm font-medium">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="Veelgestelde vragen" title="Goed om te weten" />
          <Accordion type="single" collapsible className="w-full">
            {props.faq.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CTABand />
    </SiteShell>
  );
}
