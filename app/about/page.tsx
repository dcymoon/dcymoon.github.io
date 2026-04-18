const skills = [
  "UX Research",
  "UI Design",
  "Interaction Design",
  "Usability Testing",
  "Information Architecture",
  "Prototyping",
  "Mobile App Design",
  "Design Systems",
  "React / Next.js",
  "Figma",
];

const experience = [
  { company: "EOG Resources", role: "UX Designer", period: "Present" },
  { company: "One Creation", role: "UX Designer", period: "2023" },
  { company: "Wintrust Bank", role: "UX Designer (Contract)", period: "2023" },
  { company: "Dirt Bag", role: "UX Designer (Contract)", period: "2022" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          About
        </p>
        <h1 className="text-3xl font-medium" style={{ color: "var(--text)" }}>
          Daniel Moon
        </h1>
      </div>

      <section className="mb-12">
        <p
          className="text-lg leading-relaxed mb-5"
          style={{ color: "var(--text)" }}
        >
          I&apos;m a UX designer with a background in software development and
          engineering. Currently designing at EOG Resources in Houston, TX.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          My goal is to help others through the form of designing experiences —
          combining technical understanding with human-centered design to build
          products people actually want to use.
        </p>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }} className="mb-12" />

      {/* Skills */}
      <section className="mb-12">
        <h2
          className="text-xs tracking-widest uppercase mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="text-sm py-2.5 border-b"
              style={{ color: "var(--text)", borderColor: "var(--border)" }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2
          className="text-xs tracking-widest uppercase mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.company} className="flex items-baseline justify-between">
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  {exp.role}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {exp.company}
                </p>
              </div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }} className="mb-12" />

      {/* Contact */}
      <section>
        <h2
          className="text-xs tracking-widest uppercase mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Contact
        </h2>
        <div className="space-y-3">
          <a
            href="mailto:daniel.cy.moon@gmail.com"
            className="block text-sm"
            style={{ color: "var(--text)" }}
          >
            daniel.cy.moon@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/danielcymoon"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm"
            style={{ color: "var(--text)" }}
          >
            linkedin.com/in/danielcymoon
          </a>
        </div>
      </section>
    </div>
  );
}
