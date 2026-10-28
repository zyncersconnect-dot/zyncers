import Image from "next/image";

export function ThemeComparison() {
  return (
    <section
      id="themes"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-deep-space)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4rem auto" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            Visual Experience
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
            Your app.{" "}
            <span style={{ color: "var(--color-cyan-glow)" }}>Your style.</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Switch effortlessly between crisp light mode engineered for bright sunlight legibility
            and high-contrast neon dark mode designed for evening drives and low-glare navigation.
          </p>
        </div>

        {/* Side-by-side Theme Comparison Artwork 07_Your_App_Your_Style */}
        <div
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid var(--border-medium)",
            boxShadow: "0 0 50px -15px rgba(34, 199, 255, 0.2)",
            backgroundColor: "#080c10",
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
            <Image
              src="/images/screenshots/desktop/07_Your_App_Your_Style_Desktop_1920x1080.jpg"
              alt="Zyncers Your App Your Style — Light and Neon Dark Theme Comparison"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Theme Distinction Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              padding: "2.5rem 2rem",
              backgroundColor: "rgba(6, 10, 15, 0.95)",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                ☀ Clean Daylight Mode
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.5rem" }}>
                High-Contrast Sunlit Readability
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Clear white backgrounds and deep contrast lines designed for daylight driving and outdoor walking without squinting.
              </p>
            </div>

            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: "var(--color-cyan-subtle)",
                  color: "var(--color-cyan-glow)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                ☾ Cyberpunk Neon Dark Mode
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.5rem" }}>
                Luminous Nighttime Aesthetics
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Deep obsidian map tiles accented by electric cyan and luminous route vectors to protect night vision and elevate your in-car cockpit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
