export function UseCasesSection() {
  const useCases = [
    {
      title: "Friends Meeting for a Weekend Out",
      tag: "Social Groups",
      color: "var(--color-cyan-glow)",
      description:
        "Skip the group chat confusion over who picks the restaurant. Zyncers calculates a shared center point based on everyone's departure location and lets you explore top-rated brunch spots and cafés directly on the map.",
      benefit: "Fair travel distances for everyone with zero arguments.",
    },
    {
      title: "Family Gatherings & Caravans",
      tag: "Families",
      color: "var(--color-accent-indigo)",
      description:
        "Coordinate multi-car road trips or holiday family reunions. Follow relatives driving from different directions, check estimated arrival times, and know exactly when to start dinner.",
      benefit: "Live ETA reassurance without distracted phone calls while driving.",
    },
    {
      title: "Colleagues & Team Outings",
      tag: "Work & Teams",
      color: "var(--color-accent-emerald)",
      description:
        "Assemble teammates spread across the city for dinners, client meetings, or offsite retreats. Pick an equidistant meeting venue that respects everyone's transit commute time.",
      benefit: "Streamlined professional coordination with shared arrival milestones.",
    },
    {
      title: "Solo Travel with Peace of Mind",
      tag: "Individual Explorers",
      color: "var(--color-accent-orange)",
      description:
        "Walking home late at night or navigating an unfamiliar destination? Share your live path exclusively with trusted viewers so your loved ones know you made it safely.",
      benefit: "Discreet real-time viewer tracking with complete privacy controls.",
    },
  ];

  return (
    <section
      id="use-cases"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-midnight)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "720px", marginBottom: "4rem" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            Real-World Scenarios
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
            Built for how life actually happens.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Zyncers turns separate movements into cohesive real-world experiences across everyday outings.
          </p>
        </div>

        {/* Varied Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="use-cases-grid"
        >
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid var(--border-subtle)",
                position: "relative",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: uc.color,
                    background: "rgba(255, 255, 255, 0.05)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {uc.tag}
                </span>

                <h3 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "1rem" }}>
                  {uc.title}
                </h3>

                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  {uc.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border-subtle)",
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: uc.color }}>★</span> {uc.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
