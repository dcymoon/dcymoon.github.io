import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          Work
        </p>
        <h1 className="text-3xl font-medium" style={{ color: "var(--text)" }}>
          Case Studies
        </h1>
      </div>

      <div>
        {caseStudies.map((cs, i) => (
          <Link
            key={cs.slug}
            href={`/work/${cs.slug}`}
            className="group flex items-start gap-8 py-6 border-t block"
            style={{ borderColor: "var(--border)" }}
          >
            <span
              className="text-xs mt-1 w-4 flex-shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              className="w-20 h-14 rounded-sm flex-shrink-0"
              style={{ background: cs.coverColor }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-base font-medium" style={{ color: "var(--text)" }}>
                  {cs.title} — {cs.subtitle}
                </h2>
                <span
                  className="text-xs flex-shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cs.year}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                {cs.overview}
              </p>
              <div className="flex flex-wrap gap-2">
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
          </Link>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </div>
  );
}
