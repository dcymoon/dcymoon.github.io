import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/work"
        className="text-sm mb-12 inline-block"
        style={{ color: "var(--text-muted)" }}
      >
        ← Back to Work
      </Link>

      {/* Header */}
      <div className="mt-8 mb-12">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {cs.category} — {cs.year}
        </p>
        <h1
          className="text-3xl md:text-4xl font-medium leading-tight mb-3"
          style={{ color: "var(--text)" }}
        >
          {cs.title}
        </h1>
        <p className="text-xl" style={{ color: "var(--text-muted)" }}>
          {cs.subtitle}
        </p>
      </div>

      {/* Cover placeholder */}
      <div
        className="w-full aspect-video rounded-sm mb-16"
        style={{ background: cs.coverColor }}
      />

      {/* Overview */}
      <section className="mb-12">
        <h2
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          Overview
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
          {cs.overview}
        </p>
      </section>

      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="mb-12"
      />

      {/* Problem */}
      <section className="mb-12">
        <h2
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          The Problem
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
          {cs.problem}
        </p>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          Process
        </h2>
        <ol className="space-y-4">
          {cs.process.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="text-xs mt-1 flex-shrink-0 w-4"
                style={{ color: "var(--text-muted)" }}
              >
                {i + 1}.
              </span>
              <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Outcome */}
      <section className="mb-16">
        <h2
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          Outcome
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
          {cs.outcome}
        </p>
      </section>

      {/* Tags */}
      <div
        className="flex flex-wrap gap-2 pt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {cs.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: "var(--bg-secondary)",
              color: "var(--text-muted)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
