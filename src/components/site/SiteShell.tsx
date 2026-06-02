import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      {bleed ? children : <div className="container-narrow">{children}</div>}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-4xl leading-[1.1] md:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

export function Placeholder({
  prompt,
  width = 1200,
  height = 800,
  className = "",
}: {
  prompt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      data-lov-image-placeholder
      data-prompt={prompt}
      data-width={width}
      data-height={height}
      className={`bg-stone ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    />
  );
}
