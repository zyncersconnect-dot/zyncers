import Image from "next/image";

export function SoloTripsSection() {
  return (
    <section
      id="solo-trips"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-midnight)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="solo-trips-grid"
        >
          {/* Left Column: Explanatory Content */}
          <div style={{ order: 2 }} className="solo-content">
            <span className="badge-tag" style={{ marginBottom: "1rem" }}>
              Personal Journey Sharing
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
              Your journey.{" "}
              <span style={{ color: "var(--color-accent-indigo)" }}>
                Shared with the people you choose.
              </span>
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "2rem" }}>
              Traveling on your own doesn&apos;t mean being disconnected. Solo Trips allow you to
              hand-pick trusted family members or friends to follow your journey in real time,
              giving everyone peace of mind without public broadcasting.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  borderLeft: "4px solid var(--color-accent-indigo)",
                }}
              >
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  Selected Viewers Only
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  You retain total granular control. Only viewers you explicitly designate can see your route, ETA, and progress.
                </p>
              </div>

              <div
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  borderLeft: "4px solid var(--color-cyan-glow)",
                }}
              >
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  Active Sharing Controls
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Sharing ends automatically when you reach your destination, or whenever you choose to stop it from your active trip screen.
                </p>
              </div>

              <div
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  borderLeft: "4px solid var(--color-accent-emerald)",
                }}
              >
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  In-Trip Messaging Link
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Viewers can send quick messages and check your arrival time without interrupting your navigation with incoming calls.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork From 05_Navigate_Your_Way */}
          <div style={{ order: 1, position: "relative" }} className="solo-visual">
            <div
              className="glass-panel-glow"
              style={{
                position: "relative",
                padding: "0.75rem",
                overflow: "hidden",
                transform: "perspective(1000px) rotateY(-3deg)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  backgroundColor: "#080c10",
                }}
              >
                <Image
                  src="/images/screenshots/desktop/05_Navigate_Your_Way_Desktop_1920x1080.jpg"
                  alt="Zyncers Navigate Your Way — Solo Trip Navigation and Selected Viewers"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Verified Feature Overlay Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  background: "rgba(5, 10, 16, 0.9)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(165, 180, 252, 0.4)",
                  borderRadius: "0.75rem",
                  padding: "0.6rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-accent-indigo)",
                }}
              >
                Discreet Viewer Sharing
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
