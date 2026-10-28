import Image from "next/image";

export function GroupTripsSection() {
  return (
    <section
      id="group-trips"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-deep-space)",
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
          className="group-trips-grid"
        >
          {/* Left Column: Visual Artwork From 04_Move_Together */}
          <div style={{ position: "relative" }}>
            <div
              className="glass-panel-glow"
              style={{
                position: "relative",
                padding: "0.75rem",
                overflow: "hidden",
                transform: "perspective(1000px) rotateY(3deg)",
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
                  src="/images/screenshots/desktop/04_Move_Together_Desktop_1920x1080.jpg"
                  alt="Zyncers Move Together — Group Navigation and Live Progress"
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
                  right: "1.25rem",
                  background: "rgba(5, 10, 16, 0.9)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid var(--color-cyan-border)",
                  borderRadius: "0.75rem",
                  padding: "0.6rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-cyan-glow)",
                }}
              >
                Live Multi-Participant Sync
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Content */}
          <div>
            <span className="badge-tag" style={{ marginBottom: "1rem" }}>
              Collaborative Outings
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
              Different starting points.{" "}
              <span style={{ color: "var(--color-cyan-glow)" }}>One shared plan.</span>
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "2rem" }}>
              Whether you are meeting college friends, planning a weekend motorcycle convoy, or assembling
              family from different sides of town, Zyncers brings the entire group onto one interactive journey map.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--color-cyan-subtle)",
                    border: "1px solid var(--color-cyan-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-cyan-glow)",
                    fontWeight: 700,
                  }}
                >
                  1
                </div>
                <div>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                    Multi-Origin Start Coordinates
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    Everyone joins from their actual starting location without needing manual address entry.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(165, 180, 252, 0.12)",
                    border: "1px solid rgba(165, 180, 252, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent-indigo)",
                    fontWeight: 700,
                  }}
                >
                  2
                </div>
                <div>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                    Shared Meeting Point Calculation
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    Compute a fair middle ground so no individual traveler carries an unfair commute burden.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(110, 231, 207, 0.12)",
                    border: "1px solid rgba(110, 231, 207, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent-emerald)",
                    fontWeight: 700,
                  }}
                >
                  3
                </div>
                <div>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                    Continuous Progress & En-Route Chat
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    Real-time distance remaining, live arrival estimates, and trip-dedicated group messaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
