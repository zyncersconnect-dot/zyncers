"use client";

import Image from "next/image";
import { DownloadAction } from "./DownloadAction";

export function HeroSection() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: "calc(var(--header-height) + 4.5rem)",
        paddingBottom: "5.5rem",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      {/* High-Voltage Neon Glow Orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(0, 240, 255, 0.16) 0%, rgba(0, 110, 255, 0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Value Proposition & Launch Actions */}
          <div style={{ maxWidth: "620px" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="badge-tag">
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#00f0ff",
                    boxShadow: "0 0 12px #00f0ff",
                    display: "inline-block",
                  }}
                  className="animate-pulse-glow"
                />
                Human Coordination Reimagined
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-0.045em",
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              Meet in the Middle.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00f0ff 0%, #38bdf8 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  filter: "drop-shadow(0 0 25px rgba(0, 240, 255, 0.4))",
                }}
              >
                Arrive Together.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.0625rem, 1.8vw, 1.25rem)",
                color: "rgba(226, 232, 240, 0.85)",
                lineHeight: 1.65,
                marginBottom: "2.25rem",
              }}
            >
              Plan a Group Trip, find a meeting point and follow everyone&apos;s progress.
              Traveling solo? Share your journey with the people you choose.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <DownloadAction />
            </div>

            {/* Quick Proof Pillars with Neon Blue Accents */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.25rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(0, 240, 255, 0.15)",
              }}
              className="hero-metrics"
            >
              <div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#00f0ff",
                    textShadow: "0 0 15px rgba(0, 240, 255, 0.6)",
                  }}
                >
                  Group Trips
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                  Multi-origin shared route &amp; meeting point
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#38bdf8",
                    textShadow: "0 0 15px rgba(56, 189, 248, 0.6)",
                  }}
                >
                  Solo Trips
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                  Discreet viewer sharing &amp; live safety checks
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#10b981",
                    textShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
                  }}
                >
                  Trip Chat
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                  Unified in-journey messages &amp; ETAs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork Featuring Real App Campaign with Neon Halo */}
          <div style={{ position: "relative" }}>
            <div
              className="glass-panel-glow"
              style={{
                position: "relative",
                padding: "0.85rem",
                overflow: "hidden",
                border: "1px solid rgba(0, 240, 255, 0.4)",
                boxShadow: "0 0 50px -10px rgba(0, 240, 255, 0.35), 0 25px 60px rgba(0, 0, 0, 0.9)",
                transform: "perspective(1000px) rotateY(-4deg) rotateX(2deg)",
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  backgroundColor: "#030712",
                }}
              >
                <Image
                  src="/images/screenshots/desktop/01_Meet_in_the_Middle_Desktop_1920x1080.jpg"
                  alt="Zyncers Meet in the Middle — Real-Time Group Journey Convergence"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Luminous Neon Floating Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  background: "rgba(3, 7, 18, 0.9)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(0, 240, 255, 0.5)",
                  borderRadius: "0.875rem",
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 240, 255, 0.3)",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#00f0ff",
                    boxShadow: "0 0 15px #00f0ff",
                  }}
                  className="animate-pulse-glow"
                />
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff" }}>
                    Convergence in Progress
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#38bdf8" }}>
                    3 participants converging to Center Point
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
