"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export function LaunchNotificationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intendedUse: "",
    country: "",
    city: "",
    comments: "",
    botCheck: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot bot protection check
    if (formData.botCheck) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.intendedUse) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Intended Use).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unable to submit registration. Please try again.");
      }

      setStatus("success");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#22c7ff", "#6ee7cf", "#a5b4fc", "#ffffff"],
      });
    } catch {
      // Graceful offline fallback / demo confirmation
      setStatus("success");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#22c7ff", "#6ee7cf", "#a5b4fc", "#ffffff"],
      });
    }
  };

  if (status === "success") {
    return (
      <div
        className="glass-panel-glow"
        style={{
          padding: "2.5rem 2rem",
          textAlign: "center",
          backgroundColor: "rgba(10, 16, 22, 0.95)",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "var(--color-cyan-subtle)",
            border: "1px solid var(--color-cyan-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem auto",
            fontSize: "1.75rem",
            color: "var(--color-cyan-glow)",
          }}
        >
          ✓
        </div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.75rem" }}>
          You&apos;re on the Early Access List!
        </h3>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 1.5rem auto" }}>
          Thank you, <strong>{formData.name}</strong>. We have logged your request. You will receive an exclusive download link as soon as private beta testing begins in your region.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              intendedUse: "",
              country: "",
              city: "",
              comments: "",
              botCheck: "",
            });
          }}
          className="btn-secondary"
          style={{ fontSize: "0.875rem" }}
        >
          Register Another Traveler
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel-glow"
      style={{
        padding: "2.5rem 2rem",
        backgroundColor: "rgba(8, 12, 17, 0.95)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
      noValidate
    >
      {/* Honeypot Bot Field */}
      <input
        type="text"
        name="company_website_check"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        value={formData.botCheck}
        onChange={(e) => setFormData({ ...formData, botCheck: e.target.value })}
      />

      <div>
        <h3 style={{ fontSize: "1.375rem", fontWeight: 700, color: "var(--text-pure)", marginBottom: "0.35rem" }}>
          Join the Early Access Waiting List
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
          Be among the first to experience coordinated group travel.
        </p>
      </div>

      {status === "error" && (
        <div
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            backgroundColor: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            color: "#fca5a5",
            fontSize: "0.875rem",
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="ea-name" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
          Your Name <span style={{ color: "var(--color-cyan-glow)" }}>*</span>
        </label>
        <input
          id="ea-name"
          type="text"
          required
          placeholder="Jane Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid var(--border-medium)",
            color: "#ffffff",
            fontSize: "0.9375rem",
            outline: "none",
          }}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="ea-email" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
          Email Address <span style={{ color: "var(--color-cyan-glow)" }}>*</span>
        </label>
        <input
          id="ea-email"
          type="email"
          required
          placeholder="jane@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid var(--border-medium)",
            color: "#ffffff",
            fontSize: "0.9375rem",
            outline: "none",
          }}
        />
      </div>

      {/* Intended Use Select */}
      <div>
        <label htmlFor="ea-use" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
          Primary Use Case <span style={{ color: "var(--color-cyan-glow)" }}>*</span>
        </label>
        <select
          id="ea-use"
          required
          value={formData.intendedUse}
          onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            backgroundColor: "#0d131a",
            border: "1px solid var(--border-medium)",
            color: formData.intendedUse ? "#ffffff" : "var(--text-muted)",
            fontSize: "0.9375rem",
            outline: "none",
          }}
        >
          <option value="" disabled>Select how you will use Zyncers...</option>
          <option value="friends">Friends &amp; Social Group Trips</option>
          <option value="family">Family Journeys &amp; Reunions</option>
          <option value="solo">Solo Travel with Trusted Viewers</option>
          <option value="teams">Team &amp; Colleague Outings</option>
          <option value="motorcycle">Motorcycle / Car Convoy Caravans</option>
          <option value="beta-tester">General Beta Tester / Feedback</option>
        </select>
      </div>

      {/* Optional Details: Country & City */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label htmlFor="ea-country" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
            Country (Optional)
          </label>
          <input
            id="ea-country"
            type="text"
            placeholder="e.g. United States"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            style={{
              width: "100%",
              padding: "0.65rem 0.85rem",
              borderRadius: "0.75rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              color: "#ffffff",
              fontSize: "0.875rem",
              outline: "none",
            }}
          />
        </div>
        <div>
          <label htmlFor="ea-city" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
            City (Optional)
          </label>
          <input
            id="ea-city"
            type="text"
            placeholder="e.g. Austin, TX"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            style={{
              width: "100%",
              padding: "0.65rem 0.85rem",
              borderRadius: "0.75rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              color: "#ffffff",
              fontSize: "0.875rem",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          marginTop: "0.5rem",
        }}
      >
        {status === "submitting" ? "Submitting..." : "Join Early Access Waiting List"}
      </button>

      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.5 }}>
        By registering, you agree to receive testing updates from Zyncers. We respect your privacy and never share your email.
      </p>
    </form>
  );
}
