import Image from "next/image";

export function LiveProgressSection() {
  return (
    <section
      id="live-progress"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-deep-space)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4rem auto" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            Real-Time HUD
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
            Know where the journey stands.{" "}
            <span style={{ color: "var(--color-cyan-glow)" }}>Without asking.</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            A glance at your phone gives you the entire picture: individual participant speeds,
            distance left, and dynamic ETA updates.
          </p>
        </div>

        {/* Feature Layout with Desktop Artwork 03_Stay_Connected */}
        <div
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid var(--color-cyan-border)",
            boxShadow: "0 0 50px -15px rgba(34, 199, 255, 0.25)",
            backgroundColor: "#070b10",
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
            <Image
              src="/images/screenshots/desktop/03_Stay_Connected_Desktop_1920x1080.jpg"
              alt="Zyncers Stay Connected — Live Multi-Participant Dashboard"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Contextual Overlay Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              padding: "2rem",
              backgroundColor: "rgba(5, 8, 12, 0.9)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-cyan-glow)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Active Participant Avatars
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                Distinguishable visual icons display each participant&apos;s current route segment and status on the shared map.
              </p>
            </div>

            <div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-accent-emerald)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Distance &amp; Time Calibration
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                Dynamic navigation calculation accounts for transit conditions to keep arrival estimates accurate for the whole group.
              </p>
            </div>

            <div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-accent-indigo)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Arrival Readiness
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                Automatic alerts when someone enters the meeting zone, so people can grab tables or prepare without constant checking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
