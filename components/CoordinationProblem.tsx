export function CoordinationProblem() {
  return (
    <section
      id="coordination-problem"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--bg-midnight)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "760px", marginBottom: "4rem" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            The Reality of Group Travel
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-pure)",
              lineHeight: 1.15,
              marginTop: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            Everyone has a destination.{" "}
            <span style={{ color: "var(--color-cyan-glow)" }}>
              Getting there together is the challenge.
            </span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Traditional maps navigate one person from Point A to Point B. But real life happens in groups.
            When plans depend on four different people, separate chats, and guessing who is running late,
            the journey becomes fragmented before you even arrive.
          </p>
        </div>

        {/* Visual Comparison: Fragmented Reality vs. Coordinated Zyncers Experience */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="problem-comparison-grid"
        >
          {/* Card 1: Fragmented Apps */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "rgba(10, 14, 18, 0.7)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                background: "rgba(239, 68, 68, 0.12)",
                color: "#f87171",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              The Fragmented Status Quo
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "1rem" }}>
              4 apps to coordinate 1 outing
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "#f87171", fontSize: "1.125rem", lineHeight: 1 }}>✕</span>
                <span>Repeated &quot;Where are you?&quot; texts while trying to drive or walk</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "#f87171", fontSize: "1.125rem", lineHeight: 1 }}>✕</span>
                <span>Unfair travel burdens when one person has to travel 45 mins while others travel 10 mins</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "#f87171", fontSize: "1.125rem", lineHeight: 1 }}>✕</span>
                <span>Screenshots of map directions pasted across different messaging groups</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "#f87171", fontSize: "1.125rem", lineHeight: 1 }}>✕</span>
                <span>Lost progress context whenever unexpected traffic or detours happen</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Coordinated with Zyncers */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "rgba(13, 22, 30, 0.85)",
              border: "1px solid var(--color-cyan-border)",
              boxShadow: "0 0 35px -10px rgba(34, 199, 255, 0.25)",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                background: "var(--color-cyan-subtle)",
                color: "var(--color-cyan-glow)",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              The Zyncers Way
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "1rem" }}>
              One unified human coordination layer
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.125rem", lineHeight: 1 }}>✓</span>
                <span><strong>Multi-origin intelligence:</strong> Calculate a fair shared meeting point from everyone&apos;s location</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.125rem", lineHeight: 1 }}>✓</span>
                <span><strong>Live participant progress:</strong> See friends moving en route with real-time ETA context</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.125rem", lineHeight: 1 }}>✓</span>
                <span><strong>Dedicated trip chat:</strong> Trip updates and venue discoveries stay linked to your specific outing</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                <span style={{ color: "var(--color-cyan-glow)", fontSize: "1.125rem", lineHeight: 1 }}>✓</span>
                <span><strong>Flexible privacy:</strong> Effortless control over who sees your journey and when sharing concludes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </section>
  );
}
