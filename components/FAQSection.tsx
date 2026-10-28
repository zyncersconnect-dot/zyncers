"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What is Zyncers?",
    a: "Zyncers is a real-time human coordination and group travel mobile application. Unlike traditional navigation apps that merely guide one person from Point A to Point B, Zyncers coordinates multiple people starting from different places, calculates an equitable meeting point, and lets everyone follow shared journey progress together.",
  },
  {
    q: "How are Group Trips different from Solo Trips?",
    a: "Group Trips are designed for shared outings with friends, family, or colleagues starting at different origin points, coordinating toward a common destination with live ETAs and group chat. Solo Trips are designed for individual journeys where you hand-pick selected viewers (such as parents, a partner, or close friends) who can follow your real-time path and safety status without being part of a group.",
  },
  {
    q: "How does the meeting-point feature work?",
    a: "When a Group Trip is created, participants share their starting locations. The Zyncers app computes an equitable center point, balancing travel convenience across the group so that no single person is stuck with an unreasonable commute. You can also explore curated cafés, restaurants, and venues right around that meeting point.",
  },
  {
    q: "Can people start from different locations?",
    a: "Yes, that is the core design of Zyncers. Every participant joins from their real-world departure coordinate, and the application creates coordinated convergence routes toward the destination.",
  },
  {
    q: "Can I discover nearby cafés and restaurants?",
    a: "Yes. Once a center point or general destination is identified, Zyncers lets you browse nearby categories such as cafés, restaurants, outdoor venues, and activities to choose the exact spot to gather.",
  },
  {
    q: "Can I see participants' trip progress in real time?",
    a: "Yes. During an active Group Trip, all authorized participants can view each other's route vectors, approximate distances remaining, and updated arrival estimates.",
  },
  {
    q: "How does trip chat work?",
    a: "Trip Chat provides dedicated group messaging tied directly to your active journey. Updates on traffic, coffee detours, and arrival notices stay organized within the trip itself rather than cluttering external chat apps.",
  },
  {
    q: "Can I share a Solo Trip with selected people?",
    a: "Yes. When launching a Solo Trip, you select specific viewers from your contacts. Only those designated contacts have access to your live progress and destination ETA.",
  },
  {
    q: "Can I control who sees my journey and when it stops?",
    a: "Absolutely. You can terminate location sharing at any second with a single tap on your screen. Furthermore, sharing concludes automatically as soon as you reach your destination.",
  },
  {
    q: "Do invited participants need to install the app?",
    a: "Yes, participants download Zyncers on their iOS or Android device to share departure coordinates, view live routes, and participate in in-trip chat.",
  },
  {
    q: "Which devices and operating systems are supported?",
    a: "Zyncers is built natively for modern iOS (iPhone) and Android smartphones with GPS and location services enabled.",
  },
  {
    q: "Is Zyncers free to use?",
    a: "Yes. Core group trip coordination, shared meeting point calculation, solo trip sharing, and in-trip chat are free for all early users.",
  },
  {
    q: "Are subscriptions or paid plans required?",
    a: "No subscription is required to access the core trip coordination and sharing features at launch.",
  },
  {
    q: "Which countries are supported?",
    a: "Initial rollout access is being deployed across select regions during the early access beta phase, followed by global availability on both major app stores.",
  },
  {
    q: "How do I download the app?",
    a: "During our current pre-launch phase, you can join the early-access waitlist directly on this website. Registered testers will receive download invitations for iOS TestFlight and Google Play Beta.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach our dedicated support team directly via email at connect@zyncers.com.",
  },
  {
    q: "How can I request account deletion?",
    a: "In accordance with Apple and Google app requirements, users can initiate account and personal data deletion directly within the mobile app settings or by emailing connect@zyncers.com with the subject line 'Account Deletion Request'.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "6.5rem 0",
        backgroundColor: "var(--bg-midnight)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: "780px", marginBottom: "4rem" }}>
          <span className="badge-tag" style={{ marginBottom: "1rem" }}>
            Got Questions?
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
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Everything you need to know about Zyncers, trip types, location sharing, and release availability.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "900px" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="glass-panel"
                style={{
                  border: isOpen ? "1px solid var(--color-cyan-border)" : "1px solid var(--border-subtle)",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.5rem 1.75rem",
                    background: "none",
                    border: "none",
                    color: "var(--text-pure)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ paddingRight: "1rem" }}>{faq.q}</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: isOpen ? "var(--color-cyan-glow)" : "rgba(255, 255, 255, 0.08)",
                      color: isOpen ? "#050608" : "#ffffff",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.75rem 1.5rem 1.75rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <p style={{ marginTop: "1rem" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
