"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header style={{ borderBottom: "1px solid var(--border)" }}>
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide"
          style={{ color: "var(--text)" }}
        >
          Daniel Moon
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className="text-sm" style={{ color: "var(--text-muted)" }}>
            Work
          </Link>
          <Link href="/about" className="text-sm" style={{ color: "var(--text-muted)" }}>
            About
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              style={{
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: "0.875rem",
              }}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
