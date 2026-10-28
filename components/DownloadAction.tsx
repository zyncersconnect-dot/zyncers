import { siteConfig } from "@/config/site";

interface DownloadActionProps {
  variant?: "primary" | "secondary" | "header" | "pill";
  className?: string;
  showLabels?: boolean;
}

export function DownloadAction({
  variant = "primary",
  className = "",
  showLabels = true,
}: DownloadActionProps) {
  const { launchMode, stores } = siteConfig;

  // In prelaunch mode: direct visitors to Early Access waiting list
  if (launchMode === "prelaunch") {
    if (variant === "header") {
      return (
        <a
          href="#early-access"
          className={`btn-primary ${className}`}
          style={{ padding: "0.55rem 1.25rem", fontSize: "0.875rem" }}
        >
          <span>Join Early Access</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      );
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} className={className}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <a href="#early-access" className="btn-primary">
            <span>Join Early Access Waitlist</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#how-it-works" className="btn-secondary">
            <span>See How It Works</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
        {showLabels && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-cyan-glow)", display: "inline-block" }}></span>
            <span>iOS & Android releases launching soon · Private beta rollouts pending</span>
          </div>
        )}
      </div>
    );
  }

  // In live or partial mode: render store badges
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }} className={className}>
      {stores.appStore.available ? (
        <a
          href={stores.appStore.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label={stores.appStore.label}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.77 1.05-1.84.93-2.92-1 .04-2.23.67-2.92 1.48-.59.69-1.12 1.8-1 2.87 1.13.09 2.37-.59 2.99-1.43z" />
          </svg>
          <span>App Store</span>
        </a>
      ) : (
        <span
          className="btn-secondary"
          style={{ opacity: 0.6, cursor: "not-allowed" }}
          title="App Store release coming soon"
        >
          <span>App Store (Coming Soon)</span>
        </span>
      )}

      {stores.googlePlay.available ? (
        <a
          href={stores.googlePlay.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label={stores.googlePlay.label}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.274-.285-.436-.677-.436-1.114V2.928c0-.437.162-.829.435-1.114zM15.207 13.414l2.585 2.586-13.003 7.508 10.418-10.094zm0-2.828L4.789.492l13.003 7.508-2.585 2.586zm1.414 1.414l3.14-1.813c.87-.502.87-1.32 0-1.823l-3.14-1.813-2.316 2.724 2.316 2.725z" />
          </svg>
          <span>Google Play</span>
        </a>
      ) : (
        <span
          className="btn-secondary"
          style={{ opacity: 0.6, cursor: "not-allowed" }}
          title="Google Play release coming soon"
        >
          <span>Google Play (Coming Soon)</span>
        </span>
      )}
    </div>
  );
}
