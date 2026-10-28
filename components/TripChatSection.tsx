import Image from "next/image";

export function TripChatSection() {
  return (
    <section
      id="trip-chat"
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
          className="chat-grid"
        >
          {/* Left Column: Explanatory Content */}
          <div style={{ order: 2 }} className="chat-content">
            <span className="badge-tag" style={{ marginBottom: "1rem" }}>
              In-Journey Communication
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
              Less confusion.{" "}
              <span style={{ color: "var(--color-cyan-glow)" }}>More connection.</span>
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "2rem" }}>
              Leave the endless WhatsApp pinging behind. Trip Chat keeps all messages, detour updates,
              and arrival announcements right inside the trip view, keeping everyone on the exact same page.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  borderLeft: "4px solid var(--color-cyan-glow)",
                }}
              >
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  Context-Aware Messaging
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Trip messages are tied directly to the active journey, ensuring updates never get lost in general family or friend group threads.
                </p>
              </div>

              <div
                className="glass-panel"
                style={{
                  padding: "1.5rem",
                  borderLeft: "4px solid var(--color-accent-indigo)",
                }}
              >
                <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.25rem" }}>
                  Seamless Map &amp; Chat Toggle
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Effortlessly switch between full-screen route navigation and the active conversation without losing track of your destination.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork From 06_Stay_in_Sync */}
          <div style={{ order: 1, position: "relative" }} className="chat-visual">
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
                  src="/images/screenshots/desktop/06_Stay_in_Sync_Desktop_1920x1080.jpg"
                  alt="Zyncers Stay in Sync — In-Trip Group Messaging and Coordination"
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
                Dedicated Journey Messaging
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
