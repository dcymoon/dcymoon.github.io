export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>
          © 2025 Daniel Moon
        </span>
        <div className="flex items-center gap-6">
          <a
            href="mailto:daniel.cy.moon@gmail.com"
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/danielcymoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
