import Image from "next/image";

export function NearbyDiscoverySection() {
  return (
    <section
      id="nearby-discovery"
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
          className="discovery-grid"
        >
          {/* Left Column: Visual Artwork From 02_Your_Trip_Your_Way */}
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
                  src="/images/screenshots/desktop/02_Your_Trip_Your_Way_Desktop_1920x1080.jpg"
                  alt="Zyncers Your Trip Your Way — Home Screen & Nearby Venue Discovery"
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
                  border: "1px solid var(--color-cyan-border)",
                  borderRadius: "0.75rem",
                  padding: "0.6rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-cyan-glow)",
                }}
              >
                Curated Meeting Points
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Content */}
          <div>
            <span className="badge-tag" style={{ marginBottom: "1rem" }}>
              Venue Discovery
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
              Make the meeting point{" "}
              <span style={{ color: "var(--color-cyan-glow)" }}>part of the experience.</span>
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "2rem" }}>
              A meeting point shouldn&apos;t just be an arbitrary latitude and longitude on an empty road.
              Zyncers highlights nearby cafés, restaurants, parks, and lively social venues right around
              your computed center point so the group can meet somewhere great.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="glass-panel" style={{ padding: "1.25rem 1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  Instant Category Browsing
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Filter by coffee shops, breakfast spots, outdoor parks, or casual dining near your group&apos;s intersection.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: "1.25rem 1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  One-Tap Destination Selection
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Agree on a spot and select it as the group&apos;s common destination. All routes immediately recalculate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
