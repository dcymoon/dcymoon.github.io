import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export default function Home() {
  const featured = caseStudies.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 md:py-36">
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          UX Designer — Houston, TX
        </p>
        <h1
          className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-8"
          style={{ color: "var(--text)" }}
        >
          Daniel Moon
        </h1>
        <p
          className="text-xl md:text-2xl leading-relaxed max-w-2xl"
          style={{ color: "var(--text-muted)" }}
        >
          Designing human-centered experiences at the intersection of empathy
          and technology. Currently at EOG Resources.
        </p>
        <div className="mt-12">
          <Link
            href="/work"
            className="text-sm font-medium border-b pb-0.5 inline-block"
            style={{ color: "var(--text)", borderColor: "var(--text)" }}
          >
            View Work →
          </Link>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* Featured work */}
      <section className="py-16">
        <p
          className="text-xs tracking-widest uppercase mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Selected Work
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((cs) => (
            <Link key={cs.slug} href={`/work/${cs.slug}`} className="group block">
              <div
                className="aspect-video rounded-sm mb-4 w-full"
                style={{ background: cs.coverColor }}
              />
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                {cs.category}
              </p>
              <h3 className="text-sm font-medium" style={{ color: "var(--text)" }}>
                {cs.title} — {cs.subtitle}
              </h3>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/work" className="text-sm" style={{ color: "var(--text-muted)" }}>
            All case studies →
          </Link>
        </div>
      </section>
    </div>
  );
}
