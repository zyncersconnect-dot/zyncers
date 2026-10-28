import { SiteHeader } from "@/components/SiteHeader";
import { CinematicScrollAnimation } from "@/components/CinematicScrollAnimation";
import { HeroSection } from "@/components/HeroSection";
import { CoordinationProblem } from "@/components/CoordinationProblem";
import { RouteConvergenceDemo } from "@/components/RouteConvergenceDemo";
import { HowItWorks } from "@/components/HowItWorks";
import { GroupTripsSection } from "@/components/GroupTripsSection";
import { SoloTripsSection } from "@/components/SoloTripsSection";
import { LiveProgressSection } from "@/components/LiveProgressSection";
import { NearbyDiscoverySection } from "@/components/NearbyDiscoverySection";
import { TripChatSection } from "@/components/TripChatSection";
import { AppShowcase } from "@/components/AppShowcase";
import { ThemeComparison } from "@/components/ThemeComparison";
import { UseCasesSection } from "@/components/UseCasesSection";
import { PrivacyTrustSection } from "@/components/PrivacyTrustSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { NeonBackgroundCanvas } from "@/components/NeonBackgroundCanvas";

export default function HomePage() {
  return (
    <>
      {/* Dynamic Ambient Neon Particle Canvas */}
      <NeonBackgroundCanvas />

      {/* 01 — Site Navigation Header */}
      <SiteHeader />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* 00 — 20-Second Continuous Cinematic Scroll Animation (Part 1 + Part 2) */}
        <CinematicScrollAnimation />

        {/* 02 — Cinematic Hero */}
        <HeroSection />


        {/* 03 — The Problem: Coordinating People is Hard */}
        <CoordinationProblem />

        {/* 04 — The Signature Core Feature: Meet in the Middle */}
        <RouteConvergenceDemo />

        {/* 05 — How Zyncers Works (4 Steps) */}
        <HowItWorks />

        {/* 06 — Group Trips Dedicated Section */}
        <GroupTripsSection />

        {/* 07 — Solo Trips Dedicated Section */}
        <SoloTripsSection />

        {/* 08 — Live Progress & Move Together */}
        <LiveProgressSection />

        {/* 09 — Discover Places Around Your Plan */}
        <NearbyDiscoverySection />

        {/* 10 — Stay In Sync (Trip Chat) */}
        <TripChatSection />

        {/* 11 — Inside the Zyncers App (Showcase) */}
        <AppShowcase />

        {/* 12 — Your App, Your Style (Themes) */}
        <ThemeComparison />

        {/* 13 — Built For Real Life (Use Cases) */}
        <UseCasesSection />

        {/* 14 — Privacy and Sharing Control */}
        <PrivacyTrustSection />

        {/* 15 — Frequently Asked Questions */}
        <FAQSection />

        {/* 16 — Final Conversion Section */}
        <FinalCTA />
      </main>

      {/* 17 — Site Footer */}
      <SiteFooter />
    </>
  );
}
