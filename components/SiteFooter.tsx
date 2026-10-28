import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#030406",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "5rem 0 3rem 0",
        color: "var(--text-secondary)",
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand & Address Column */}
          <div style={{ maxWidth: "340px" }}>
            <Link href="#top" style={{ display: "inline-block", marginBottom: "1.25rem" }}>
              <div style={{ position: "relative", width: "135px", height: "36px" }}>
                <Image
                  src="/images/brand/logo-dark.jpeg"
                  alt="Zyncers Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="135px"
                />
              </div>
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
              Human Coordination, Reimagined. Turn separate journeys into a coordinated real-world experience.
            </p>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              <div>{siteConfig.companyName}</div>
              {siteConfig.companyAddress.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <div style={{ marginTop: "0.5rem" }}>
                <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "var(--color-cyan-glow)", textDecoration: "none" }}>
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
            className="footer-links-grid"
          >
            {/* Column 1: Product */}
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-pure)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                Product
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
                <li>
                  <a href="#meet-in-the-middle" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Meet in the Middle
                  </a>
                </li>
                <li>
                  <a href="#group-trips" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Group Trips
                  </a>
                </li>
                <li>
                  <a href="#solo-trips" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Solo Trips
                  </a>
                </li>
                <li>
                  <a href="#live-progress" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Live Progress HUD
                  </a>
                </li>
                <li>
                  <a href="#trip-chat" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Trip Chat
                  </a>
                </li>
                <li>
                  <a href="#app-showcase" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    App Tour
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources & Company */}
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-pure)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                Company
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
                <li>
                  <a href="#how-it-works" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#use-cases" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#faq" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Trust & Legal */}
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-pure)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                Legal &amp; Trust
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
                <li>
                  <Link href="/privacy" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/account-deletion" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Account Deletion
                  </Link>
                </li>
                <li>
                  <a href="#privacy-trust" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                    Location Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Social Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            paddingTop: "2.5rem",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {currentYear} {siteConfig.companyName}. All rights reserved. &quot;Meet in the Middle. Arrive Together.&quot;
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              Instagram
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              Email
            </a>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
