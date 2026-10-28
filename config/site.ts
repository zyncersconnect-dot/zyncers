export type LaunchMode = 'prelaunch' | 'partial' | 'live';

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  domain: string;
  companyName: string;
  companyAddress: string[];
  contactEmail: string;
  privacyEmail: string;
  launchMode: LaunchMode;
  stores: {
    appStore: {
      available: boolean;
      url: string; // Set when available, or placeholder for prelaunch
      label: string;
    };
    googlePlay: {
      available: boolean;
      url: string;
      label: string;
    };
    qrCodeEnabled: boolean;
    qrTargetUrl: string;
  };
  supportedCountries: string[];
  pricing: {
    isFree: boolean;
    label: string;
    description: string;
  };
  social: {
    linkedin: string;
    instagram: string;
  };
  features: {
    earlyAccessForm: boolean;
    placeDiscovery: boolean;
    groupChat: boolean;
    soloTrips: boolean;
    groupTrips: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Zyncers",
  tagline: "Meet in the Middle. Arrive Together.",
  subTagline:
    "Plan a Group Trip, find a meeting point and follow everyone's progress. Traveling solo? Share your journey with the people you choose.",
  domain: "https://www.zyncers.com",
  companyName: "Zyncers (FZE)",
  companyAddress: [
    "Sharjah Research, Technology and Innovation Park",
    "Sharjah, United Arab Emirates",
  ],
  contactEmail: "connect@zyncers.com",
  privacyEmail: "connect@zyncers.com",
  
  // Launch state configuration: 'prelaunch' | 'partial' | 'live'
  // prelaunch: Waitlist form active, store badges say "Launching Soon" or pre-order
  // partial: One store available, other says "Launching Soon"
  // live: Both stores available, instant download + QR code
  launchMode: "prelaunch",

  stores: {
    appStore: {
      available: false,
      url: "https://apps.apple.com/app/zyncers", // To be updated by client upon App Store release
      label: "Download on the App Store",
    },
    googlePlay: {
      available: false,
      url: "https://play.google.com/store/apps/details?id=com.zyncers.app", // To be updated by client upon Google Play release
      label: "Get it on Google Play",
    },
    qrCodeEnabled: false,
    qrTargetUrl: "https://www.zyncers.com/#download",
  },

  supportedCountries: ["Global (Initial rollout regions to be announced)"],

  pricing: {
    isFree: true,
    label: "Free to Start",
    description: "Core group coordination and solo journey sharing are free for all early users.",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/zyncers/",
    instagram: "https://www.instagram.com/zyncers",
  },

  features: {
    earlyAccessForm: true,
    placeDiscovery: true,
    groupChat: true,
    soloTrips: true,
    groupTrips: true,
  },
};
