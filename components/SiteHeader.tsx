"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DownloadAction } from "./DownloadAction";

export function SiteHeader() {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has completed the scroll animation video section
      const cinematicSection = document.getElementById("scroll-cinematic");
      if (cinematicSection) {
        const rect = cinematicSection.getBoundingClientRect();
        // Visible only once the user has scrolled past/completed the scroll animation section
        const hasCompletedAnimation = rect.bottom <= 120;
        setVisible(hasCompletedAnimation);
      } else {
        setVisible(true);
      }

      const sections = [
        "top",
        "how-it-works",
        "meet-in-the-middle",
        "group-trips",
        "solo-trips",
        "app-showcase",
        "faq",
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Meet in Middle", href: "#meet-in-the-middle", id: "meet-in-the-middle" },
    { name: "Group Trips", href: "#group-trips", id: "group-trips" },
    { name: "Solo Trips", href: "#solo-trips", id: "solo-trips" },
    { name: "App Tour", href: "#app-showcase", id: "app-showcase" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <div
      className="navbar-floating-container"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-120%)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <header
        className="navbar-pill"
        style={{
          boxShadow: "0 0 40px -5px rgba(0, 240, 255, 0.45), 0 25px 60px rgba(0, 0, 0, 0.85)",
          borderColor: "rgba(0, 240, 255, 0.38)",
        }}
      >

        {/* Brand Logo with Neon Ambient Reflection */}
        <Link
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "128px",
              height: "34px",
              filter: "drop-shadow(0 0 10px rgba(0, 240, 255, 0.45))",
            }}
          >
            <Image
              src="/images/brand/logo-dark.jpeg"
              alt="Zyncers Logo"
              fill
              priority
              style={{ objectFit: "contain" }}
              sizes="128px"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: "none" }} className="desktop-nav">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    style={{
                      position: "relative",
                      padding: "0.45rem 0.95rem",
                      borderRadius: "9999px",
                      color: isActive ? "#ffffff" : "rgba(226, 232, 240, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.84375rem",
                      fontWeight: isActive ? 600 : 500,
                      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                      background: isActive ? "rgba(0, 240, 255, 0.14)" : "transparent",
                      border: isActive
                        ? "1px solid rgba(0, 240, 255, 0.45)"
                        : "1px solid transparent",
                      boxShadow: isActive
                        ? "0 0 20px -3px rgba(0, 240, 255, 0.4)"
                        : "none",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#00f0ff";
                        e.currentTarget.style.background = "rgba(0, 240, 255, 0.08)";
                        e.currentTarget.style.borderColor = "rgba(0, 240, 255, 0.25)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "rgba(226, 232, 240, 0.8)";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor = "transparent";
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA / Launch Action */}
        <div style={{ display: "none" }} className="desktop-nav">
          <DownloadAction variant="header" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(0, 240, 255, 0.08)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
            color: "#00f0ff",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)",
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "calc(1.25rem + 72px)",
            left: "1rem",
            right: "1rem",
            borderRadius: "1.25rem",
            border: "1px solid rgba(0, 240, 255, 0.35)",
            backgroundColor: "rgba(4, 9, 20, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "1.5rem",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 240, 255, 0.25)",
            zIndex: 99,
          }}
        >
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#f0f9ff",
                    textDecoration: "none",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                  }}
                >
                  <span>{link.name}</span>
                  <span style={{ color: "#00f0ff" }}>→</span>
                </a>
              </li>
            ))}
            <li style={{ paddingTop: "0.75rem", borderTop: "1px solid rgba(0, 240, 255, 0.15)" }}>
              <a
                href="#early-access"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: "100%", textAlign: "center" }}
              >
                Join Early Access
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
