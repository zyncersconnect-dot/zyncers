import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | Zyncers",
  description: "Terms of Service and conditions for using Zyncers group travel coordination.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
              Last updated: October 2026 · Zyncers (FZE)
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Zyncers mobile application or website, you agree to be bound by these Terms of Service
                and our Privacy Policy. If you do not agree with any portion of these terms, you should discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                2. Nature of the Service
              </h2>
              <p>
                Zyncers provides group journey coordination, shared destination planning, meeting point discovery, and personal trip sharing.
                Zyncers is an aid to travel planning; drivers and pedestrians must always obey all local traffic laws and maintain safe awareness.
                Zyncers is not an emergency response service.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                3. User Conduct &amp; Location Sharing
              </h2>
              <p>
                You agree not to use the application to stalk, harass, or track any individual without their explicit and voluntary consent.
                All location sharing features are intended for mutual, voluntary coordination between trusted individuals.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                4. Contact Information
              </h2>
              <p>
                For legal inquiries regarding these terms, contact Zyncers (FZE) at <a href="mailto:connect@zyncers.com" style={{ color: "var(--color-cyan-glow)" }}>connect@zyncers.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
