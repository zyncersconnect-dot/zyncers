export function PrivacyTrustSection() {
  return (
    <section
      id="privacy-trust"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-deep-space)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "780px", marginBottom: "4rem" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            Privacy &amp; Control
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
            Your location.{" "}
            <span style={{ color: "var(--color-cyan-glow)" }}>Strictly on your terms.</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Real-time human coordination requires trust. We believe location sharing must always be
            explicit, strictly scoped to the active trip, and entirely within your control.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: "2rem",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-cyan-glow)" }}>
              ⏱
            </div>
            <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.5rem" }}>
              Trip-Bounded Location Access
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Your location is only shared while a Solo Trip or Group Trip is actively underway. We do not track background movements outside active sessions.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "2rem",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent-indigo)" }}>
              👥
            </div>
            <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.5rem" }}>
              Hand-Picked Viewers
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              On Solo Trips, nobody has access to your journey except the specific people you select. There are no public profiles, public broadcasts, or ambient tracking.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "2rem",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent-emerald)" }}>
              🛑
            </div>
            <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.5rem" }}>
              Immediate Revocation
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              You can pause or terminate location sharing at any second with a single tap on your active trip screen, immediately closing access for all viewers.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "2rem",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--color-accent-orange)" }}>
              🛡
            </div>
            <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.5rem" }}>
              Compliant Privacy Standards
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Governed by transparent terms under Zyncers (FZE) with dedicated privacy rights, data grievance channels, and formal account deletion workflows.
            </p>
          </div>
        </div>

        {/* Policy Link Footnote */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Review our detailed privacy commitments in our{" "}
            <a href="/privacy" style={{ color: "var(--color-cyan-glow)", textDecoration: "underline" }}>
              Official Privacy Policy
            </a>{" "}
            or contact our Data Privacy team at{" "}
            <a href="mailto:connect@zyncers.com" style={{ color: "var(--color-cyan-glow)" }}>
              connect@zyncers.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
