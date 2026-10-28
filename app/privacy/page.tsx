import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyncers",
  description: "Read the Zyncers Privacy Policy regarding location data, trip sharing, and personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: "calc(var(--header-height) + 3rem)", paddingBottom: "6rem", minHeight: "80vh" }}>
        <div className="container-custom" style={{ maxWidth: "860px" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <Link href="/" style={{ color: "var(--color-cyan-glow)", fontSize: "0.875rem", textDecoration: "none" }}>
              ← Return to Home
            </Link>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "var(--text-pure)",
                marginTop: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
              Last updated: October 2026 · Official policy of Zyncers (FZE)
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                1. Overview &amp; Commitment
              </h2>
              <p>
                Zyncers (FZE) (&quot;Zyncers&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides real-time human coordination and group travel tools.
                We recognize that location data is deeply personal. Our core privacy commitment is simple: location data is only accessed
                and shared to coordinate active trips that you intentionally initiate, and never for covert background surveillance or unauthorized profiling.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                2. Information We Collect
              </h2>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><strong>Account Information:</strong> Name, email address, and authentication identifiers necessary to create your Zyncers account.</li>
                <li><strong>Real-Time Location Data:</strong> Precise GPS coordinates during active Solo Trips or Group Trips to calculate meeting points, estimate ETAs, and display shared participant vectors.</li>
                <li><strong>In-Trip Communication:</strong> Messages exchanged in Trip Chat are stored strictly to display journey communication to authorized trip participants.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                3. How Sharing Works
              </h2>
              <p>
                Location sharing is explicitly trip-bounded. On Solo Trips, only contacts whom you explicitly select as viewers receive your progress.
                On Group Trips, only accepted members of that specific outing can view convergence routes and arrival estimates. You can terminate sharing at any moment with a single tap in the app.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                4. Data Subject Rights &amp; Inquiries
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal data at any time. For privacy inquiries or grievances, contact us at:
              </p>
              <div style={{ marginTop: "0.75rem", padding: "1rem", borderRadius: "0.5rem", background: "rgba(255, 255, 255, 0.03)" }}>
                <div><strong>Zyncers (FZE)</strong></div>
                <div>Sharjah Research, Technology and Innovation Park, Sharjah, UAE</div>
                <div>Email: <a href="mailto:connect@zyncers.com" style={{ color: "var(--color-cyan-glow)" }}>connect@zyncers.com</a></div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
