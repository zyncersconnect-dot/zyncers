"use client";

import { useState } from "react";
import Image from "next/image";

interface ShowcaseTab {
  id: string;
  name: string;
  category: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage?: string;
}

const TABS: ShowcaseTab[] = [
  {
    id: "home",
    name: "01. Home & Start",
    category: "Entrypoint",
    title: "Trip Selection & Local Discovery",
    description:
      "Choose instantly between starting a Solo Trip with trusted viewers or launching a coordinated Group Trip. Explore nearby activities directly from your home feed.",
    desktopImage: "/images/screenshots/desktop/02_Your_Trip_Your_Way_Desktop_1920x1080.jpg",
    mobileImage: "/images/screenshots/mobile/02_Your_Trip_Your_Way_1179x2556.png",
  },
  {
    id: "meet",
    name: "02. Meet in the Middle",
    category: "Convergence",
    title: "Shared Meeting Point Calculation",
    description:
      "The app evaluates everyone's departure locations and identifies an equitable meeting hub, turning separate journeys into one shared destination.",
    desktopImage: "/images/screenshots/desktop/01_Meet_in_the_Middle_Desktop_1920x1080.jpg",
    mobileImage: "/images/screenshots/mobile/01_Meet_in_the_Middle_1080x1920.jpg",
  },
  {
    id: "navigation",
    name: "03. Move Together",
    category: "Navigation",
    title: "Multi-Origin Turn Navigation",
    description:
      "Live turn-by-turn guidance keeps all group members advancing along optimal routes with arrival synchronization and dynamic progress updates.",
    desktopImage: "/images/screenshots/desktop/04_Move_Together_Desktop_1920x1080.jpg",
    mobileImage: "/images/screenshots/mobile/04_Move_Together_1080x1920.jpg",
  },
  {
    id: "solo",
    name: "04. Solo Explorer",
    category: "Private Sharing",
    title: "Personal Journey with Trusted Viewers",
    description:
      "Share your solo trip exclusively with chosen people. Viewers can monitor your progress and arrival time while you maintain total privacy control.",
    desktopImage: "/images/screenshots/desktop/05_Navigate_Your_Way_Desktop_1920x1080.jpg",
  },
  {
    id: "chat",
    name: "05. In-Trip Chat",
    category: "Messaging",
    title: "Unified Group Communication",
    description:
      "Stay connected through dedicated journey messages. Detour warnings, coffee stops, and arrival updates stay bundled together with your route.",
    desktopImage: "/images/screenshots/desktop/06_Stay_in_Sync_Desktop_1920x1080.jpg",
    mobileImage: "/images/screenshots/mobile/06_Stay_in_Sync_1080x1920.jpg",
  },
  {
    id: "themes",
    name: "06. Neon & Light Themes",
    category: "Style",
    title: "Daylight Clarity & Cyberpunk Neon",
    description:
      "Seamlessly transition between ultra-clean daytime legibility and high-contrast night/neon dark mode for night drives and urban outings.",
    desktopImage: "/images/screenshots/desktop/07_Your_App_Your_Style_Desktop_1920x1080.jpg",
    mobileImage: "/images/screenshots/mobile/07_Your_App_Your_Style_1179x2556.png",
  },
];

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>(TABS[0]);

  return (
    <section
      id="app-showcase"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-midnight)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            Inside Zyncers
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-pure)",
              lineHeight: 1.15,
              marginTop: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            Built for clarity at every mile.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Explore every core interface of the Zyncers mobile application—from destination selection
            and shared meeting points to live group tracking and custom themes.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "1.5rem",
            marginBottom: "2rem",
            scrollbarWidth: "none",
          }}
          className="tab-selector"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "0.75rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: isActive ? "1px solid var(--color-cyan-glow)" : "1px solid var(--border-subtle)",
                  backgroundColor: isActive ? "var(--color-cyan-subtle)" : "rgba(255, 255, 255, 0.03)",
                  color: isActive ? "var(--color-cyan-glow)" : "var(--text-secondary)",
                  boxShadow: isActive ? "0 0 20px -5px rgba(34, 199, 255, 0.3)" : "none",
                }}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Screen Composition */}
        <div
          className="glass-panel-glow"
          style={{
            padding: "2rem",
            backgroundColor: "rgba(8, 12, 17, 0.95)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="tab-content-grid"
          >
            {/* Visual Screen Container */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  backgroundColor: "#000000",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src={activeTab.desktopImage}
                  alt={activeTab.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 992px) 100vw, 60vw"
                />
              </div>
            </div>

            {/* Description & Capabilities */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-cyan-glow)",
                  background: "var(--color-cyan-subtle)",
                  marginBottom: "1rem",
                }}
              >
                {activeTab.category}
              </div>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "1rem" }}>
                {activeTab.title}
              </h3>

              <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "2rem" }}>
                {activeTab.description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-primary)" }}>
                  <span style={{ color: "var(--color-cyan-glow)" }}>✓</span> Verified in current client application release
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-primary)" }}>
                  <span style={{ color: "var(--color-cyan-glow)" }}>✓</span> Responsive high-resolution Retina rendering
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-primary)" }}>
                  <span style={{ color: "var(--color-cyan-glow)" }}>✓</span> Zero fake statistics or simulated third-party integrations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
