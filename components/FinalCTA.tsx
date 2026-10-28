import { LaunchNotificationForm } from "./LaunchNotificationForm";

export function FinalCTA() {
  return (
    <section
      id="early-access"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-deep-space)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34, 199, 255, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
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
          className="cta-grid"
        >
          {/* Left Column: Vision & Message */}
          <div>
            <span className="badge-tag" style={{ marginBottom: "1rem" }}>
              Be Part of What Comes Next
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "var(--text-pure)",
                lineHeight: 1.12,
                marginTop: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              Your next plan{" "}
              <span style={{ color: "var(--color-cyan-glow)" }}>starts together.</span>
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "2rem" }}>
              Bring everyone into the plan, find your meeting point and make getting together simpler.
              Join the private beta community and receive your download credentials first.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.25rem" }}>✦</span>
                <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                  Priority beta invitations for iOS TestFlight and Android
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.25rem" }}>✦</span>
                <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                  Direct feedback channel with the Zyncers engineering team
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.25rem" }}>✦</span>
                <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                  Lifetime free access for early community participants
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Notification / Waitlist Form */}
          <div>
            <LaunchNotificationForm />
          </div>
        </div>
      </div>

      
    </section>
  );
}
