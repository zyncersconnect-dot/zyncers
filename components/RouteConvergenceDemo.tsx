"use client";

import { useState, useEffect } from "react";

interface Participant {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  eta: string;
  distance: string;
  status: string;
}

const INITIAL_PARTICIPANTS: Participant[] = [
  { id: "1", name: "Alex (You)", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.8)", startX: 60, startY: 80, currentX: 60, currentY: 80, eta: "14 min", distance: "4.2 km", status: "En route" },
  { id: "2", name: "Sarah", color: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.8)", startX: 380, startY: 70, currentX: 380, currentY: 70, eta: "16 min", distance: "5.1 km", status: "En route" },
  { id: "3", name: "Marcus", color: "#10b981", glowColor: "rgba(16, 185, 129, 0.8)", startX: 70, startY: 280, currentX: 70, currentY: 280, eta: "12 min", distance: "3.8 km", status: "En route" },
  { id: "4", name: "Elena", color: "#fb923c", glowColor: "rgba(251, 146, 60, 0.8)", startX: 410, startY: 260, currentX: 410, currentY: 260, eta: "15 min", distance: "4.6 km", status: "En route" },
  { id: "5", name: "David", color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.8)", startX: 240, startY: 320, currentX: 240, currentY: 320, eta: "11 min", distance: "3.2 km", status: "En route" },
];

const MEETING_POINT = {
  name: "Artisan Roasters & Café",
  category: "Selected Shared Venue",
  x: 240,
  y: 175,
};

export function RouteConvergenceDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 1

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          return 0; // loop
        }
        return prev + 0.015;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Derive current simulation stage directly from progress
  const stage =
    progress < 0.2
      ? "origins"
      : progress < 0.45
      ? "calculating"
      : progress < 0.88
      ? "converging"
      : "arrived";

  // Interpolate participant current position towards MEETING_POINT
  const currentParticipants = INITIAL_PARTICIPANTS.map((p) => {
    const moveFactor = progress < 0.45 ? 0 : Math.min(1, (progress - 0.45) / 0.45);
    // Smooth easeInOut
    const ease = moveFactor * moveFactor * (3 - 2 * moveFactor);
    return {
      ...p,
      currentX: p.startX + (MEETING_POINT.x - p.startX) * ease,
      currentY: p.startY + (MEETING_POINT.y - p.startY) * ease,
    };
  });

  return (
    <section
      id="meet-in-the-middle"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            The Signature Core Feature
          </span>
          <h2
            style={{
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            One plan. Different starting points.{" "}
            <span
              style={{
                color: "#00f0ff",
                textShadow: "0 0 25px rgba(0, 240, 255, 0.6)",
              }}
            >
              A shared meeting place.
            </span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            No more endless group chat debates or uneven travel burdens. Zyncers evaluates everyone&apos;s
            starting location, identifies a balanced center point, reveals nearby venues, and tracks
            everyone&apos;s journey as you converge.
          </p>
        </div>

        {/* Interactive Canvas & Progress Monitor */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="demo-container"
        >
          {/* Map Simulation Panel */}
          <div
            className="glass-panel-glow"
            style={{
              padding: "1.5rem",
              position: "relative",
              backgroundColor: "rgba(5, 11, 24, 0.96)",
              border: "1px solid rgba(0, 240, 255, 0.4)",
              boxShadow: "0 0 50px -10px rgba(0, 240, 255, 0.35), 0 20px 45px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Simulation Header Controls */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid rgba(0, 240, 255, 0.15)",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: stage === "arrived" ? "#10b981" : "#00f0ff",
                    boxShadow: `0 0 14px ${stage === "arrived" ? "#10b981" : "#00f0ff"}`,
                  }}
                  className="animate-pulse-glow"
                />
                <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff" }}>
                  {stage === "origins" && "Evaluating 5 Starting Points..."}
                  {stage === "calculating" && "Calculating Meeting Point & Venue Discovery..."}
                  {stage === "converging" && "Converging En Route..."}
                  {stage === "arrived" && "Arrived Together at Meeting Point!"}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "9999px",
                    background: "rgba(0, 240, 255, 0.1)",
                    border: "1px solid rgba(0, 240, 255, 0.3)",
                    color: "#00f0ff",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 0 15px -3px rgba(0, 240, 255, 0.3)",
                  }}
                >
                  {isPlaying ? "Pause Demo" : "Resume Demo"}
                </button>
                <button
                  type="button"
                  onClick={() => setProgress(0)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Reset
                </button>
              </div>
            </div>

            {/* SVG Dark Neon Cartographic Surface */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "480 / 360",
                backgroundColor: "#030611",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <svg
                viewBox="0 0 480 360"
                style={{ width: "100%", height: "100%", display: "block" }}
                role="img"
                aria-label="Simulation of five travelers starting in separate locations converging toward a shared center point"
              >
                <defs>
                  {/* Subtle Grid */}
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
                  </pattern>
                  {/* Neon Glow Filter */}
                  <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur2" />
                      <feMergeNode in="blur1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect width="480" height="360" fill="url(#grid)" />

                {/* Simulated Road Arteries */}
                <path d="M 30 190 Q 240 160 450 180" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="3" fill="none" />
                <path d="M 230 20 Q 250 180 250 350" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="3" fill="none" />
                <path d="M 70 80 Q 150 130 240 175" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="2" fill="none" />
                <path d="M 380 70 Q 300 120 240 175" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="2" fill="none" />
                <path d="M 70 280 Q 160 220 240 175" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="2" fill="none" />
                <path d="M 410 260 Q 320 210 240 175" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="2" fill="none" />

                {/* Converging Luminous Neon Routes */}
                {currentParticipants.map((p) => (
                  <g key={`route-${p.id}`}>
                    {/* Underlying Guide Path */}
                    <line
                      x1={p.startX}
                      y1={p.startY}
                      x2={MEETING_POINT.x}
                      y2={MEETING_POINT.y}
                      stroke={p.color}
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.25"
                    />
                    {/* Active Drawn Neon Trajectory */}
                    <line
                      x1={p.startX}
                      y1={p.startY}
                      x2={p.currentX}
                      y2={p.currentY}
                      stroke={p.color}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      filter="url(#neon-glow)"
                    />
                  </g>
                ))}

                {/* Central Meeting Point Destination Marker */}
                <g transform={`translate(${MEETING_POINT.x}, ${MEETING_POINT.y})`}>
                  {/* Concentric Glow Pulses */}
                  <circle
                    r={progress > 0.3 ? "30" : "15"}
                    fill="none"
                    stroke="#00f0ff"
                    strokeOpacity={progress > 0.3 ? "0.6" : "0.2"}
                    strokeWidth="2"
                    filter="url(#neon-glow)"
                  />
                  <circle
                    r="15"
                    fill="#040b17"
                    stroke="#00f0ff"
                    strokeWidth="3"
                    filter="url(#neon-glow)"
                  />
                  <circle r="6" fill="#00f0ff" />

                  {/* Destination Label Flag */}
                  <g transform="translate(0, -32)">
                    <rect
                      x="-75"
                      y="-12"
                      width="150"
                      height="26"
                      rx="8"
                      fill="rgba(3, 7, 18, 0.95)"
                      stroke="rgba(0, 240, 255, 0.5)"
                      filter="drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))"
                    />
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fill="#00f0ff"
                      fontSize="10"
                      fontWeight="700"
                    >
                      ★ {MEETING_POINT.name}
                    </text>
                  </g>
                </g>

                {/* Moving Participant Avatars */}
                {currentParticipants.map((p) => (
                  <g key={`avatar-${p.id}`} transform={`translate(${p.currentX}, ${p.currentY})`}>
                    <circle r="13" fill="#030712" stroke={p.color} strokeWidth="3" filter="url(#neon-glow)" />
                    <circle r="4.5" fill={p.color} />
                    {/* Name Tag */}
                    <g transform="translate(0, 20)">
                      <rect
                        x="-32"
                        y="-8"
                        width="64"
                        height="18"
                        rx="5"
                        fill="rgba(3, 7, 18, 0.9)"
                        stroke={p.color}
                        strokeOpacity="0.5"
                      />
                      <text
                        x="0"
                        y="5"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="9.5"
                        fontWeight="600"
                      >
                        {p.name.split(" ")[0]}
                      </text>
                    </g>
                  </g>
                ))}
              </svg>
            </div>

            {/* Explanatory Technical Note */}
            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.78125rem",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ color: "rgba(226, 232, 240, 0.7)" }}>
                Deterministic product demo · Actual app calculates meeting points using verified map algorithms
              </span>
              <span style={{ color: "#00f0ff", fontWeight: 600 }}>Multi-origin calculation</span>
            </div>
          </div>

          {/* Participant Real-time Status Card Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              className="glass-panel"
              style={{
                padding: "1.75rem",
                border: "1px solid rgba(0, 240, 255, 0.25)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                Live Group Coordination HUD
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Everyone sees the shared meeting point and each participant&apos;s distance and estimated arrival time.
              </p>

              {/* Participant List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {INITIAL_PARTICIPANTS.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.75rem",
                      background: "rgba(0, 240, 255, 0.04)",
                      border: "1px solid rgba(0, 240, 255, 0.12)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: p.color,
                          boxShadow: `0 0 10px ${p.color}`,
                        }}
                      />
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#ffffff" }}>
                        {p.name}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.8125rem" }}>
                      <span style={{ color: "var(--text-secondary)" }}>{p.distance}</span>
                      <span
                        style={{
                          padding: "0.25rem 0.6rem",
                          borderRadius: "0.375rem",
                          background: "rgba(0, 240, 255, 0.15)",
                          color: "#00f0ff",
                          fontWeight: 700,
                          border: "1px solid rgba(0, 240, 255, 0.3)",
                        }}
                      >
                        {p.eta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
