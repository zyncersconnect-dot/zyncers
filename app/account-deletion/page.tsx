import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Account Deletion | Zyncers",
  description: "Learn how to initiate an account deletion request for your Zyncers mobile profile.",
};

export default function AccountDeletionPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: "calc(var(--header-height) + 3rem)", paddingBottom: "6rem", minHeight: "80vh" }}>
        <div className="container-custom" style={{ maxWidth: "800px" }}>
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
              Account &amp; Data Deletion
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
              Compliance pathway for iOS App Store and Google Play guidelines
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
                1. In-App Deletion (Fastest)
              </h2>
              <p>
                In accordance with Apple and Google platform guidelines, any registered user can delete their Zyncers account directly from the mobile app:
              </p>
              <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Open the Zyncers mobile application.</li>
                <li>Navigate to <strong>Settings</strong> &gt; <strong>Account</strong>.</li>
                <li>Tap <strong>Delete Account &amp; Personal Data</strong>.</li>
                <li>Confirm authentication to immediately execute permanent profile closure.</li>
              </ol>
            </section>

            <section>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
                2. Email Deletion Request
              </h2>
              <p>
                If you no longer have access to the mobile application, you can submit an external deletion request by emailing:
              </p>
              <div style={{ marginTop: "0.75rem", padding: "1rem", borderRadius: "0.5rem", background: "rgba(255, 255, 255, 0.03)" }}>
                <div>Email: <a href="mailto:connect@zyncers.com" style={{ color: "var(--color-cyan-glow)" }}>connect@zyncers.com</a></div>
                <div>Subject: <strong>Account Deletion Request</strong></div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                  Please include the registered email address associated with your Zyncers account. Our team verifies identity and processes full erasure within statutory timeframes.
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
