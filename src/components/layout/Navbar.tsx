"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PERSONAL, NAV_LINKS } from "@/lib/data";
import Button from "@/components/ui/Button";
import { IconDownload, IconMenu, IconX } from "@/components/ui/Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    // Active section detection
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-text-primary hover:text-accent transition-colors"
          aria-label="Go to homepage"
        >
          <span className="text-accent">[</span>
          <span className="gradient-text">{PERSONAL.name.split(" ")[0]}</span>
          <span className="text-accent">]</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link font-mono text-xs px-3 py-2 rounded-md transition-colors ${
                  activeSection === id
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href={PERSONAL.resumeUrl}
            download
            variant="outline"
            size="sm"
            ariaLabel="Download resume"
          >
            <IconDownload size={14} />
            Resume
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-mono text-sm text-text-secondary hover:text-text-primary px-3 py-2.5 rounded-md hover:bg-surface-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-border mt-2">
            <Button
              href={PERSONAL.resumeUrl}
              download
              variant="outline"
              size="sm"
              className="w-full justify-center"
            >
              <IconDownload size={14} />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
