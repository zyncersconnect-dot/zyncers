export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "CREATE",
      subtitle: "Choose Solo or Group Trip",
      description:
        "Select whether you're embarking on a solo journey you want to share with trusted viewers, or launching a group trip with friends traveling from separate locations.",
      tag: "Initiation",
    },
    {
      num: "02",
      title: "INVITE",
      subtitle: "Add Participants or Viewers",
      description:
        "For a Group Trip, invite fellow travelers to contribute their starting points. For a Solo Trip, select viewers from your contacts to follow your real-time path.",
      tag: "Permissions",
    },
    {
      num: "03",
      title: "CHOOSE",
      subtitle: "Smart Meeting Point & Venues",
      description:
        "The app evaluates the group's starting positions and suggests a fair meeting point. Discover nearby cafés, restaurants, and activities right around your destination.",
      tag: "Discovery",
    },
    {
      num: "04",
      title: "MOVE TOGETHER",
      subtitle: "Live Progress & In-Trip Chat",
      description:
        "Follow everyone's journey en route with real-time ETA context, active navigation, and integrated group chat to keep all coordination in one unified place.",
      tag: "Convergence",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--bg-midnight)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: "700px", marginBottom: "4rem" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            The Workflow
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
            Four intuitive steps.{" "}
            <span style={{ color: "var(--color-cyan-glow)" }}>Zero coordination chaos.</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Zyncers is designed around how people actually move together in the physical world.
            From initial invitation to shared arrival, every step keeps everyone synchronized.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.75rem",
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-panel"
              style={{
                padding: "2.25rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Subtle top cyan line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, var(--color-cyan-glow), transparent)",
                }}
              />

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-cyan-glow)",
                      fontFamily: "monospace",
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {step.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-pure)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {step.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--color-cyan-glow)",
                    marginBottom: "1rem",
                  }}
                >
                  {step.subtitle}
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
