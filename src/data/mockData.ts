export type EmotionType = "curious" | "interested" | "skeptical" | "engaged" | "excited" | "ready";

export interface TimelineEvent {
  timestamp: string;
  seconds: number;
  emotion: EmotionType;
  label: string;
  description: string;
}

export interface DetectedPerson {
  id: number;
  name: string;
  buyScore: number;
  dominantEmotion: EmotionType;
  keyMoments: string[];
}

export interface Session {
  id: string;
  date: string;
  duration: string;
  peopleDetected: number;
  avgScore: number;
  topEmotion: EmotionType;
  location: string;
  type: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const emotionColors: Record<EmotionType, string> = {
  curious: "bg-curious",
  interested: "bg-interested",
  skeptical: "bg-skeptical",
  engaged: "bg-engaged",
  excited: "bg-excited",
  ready: "bg-ready",
};

export const emotionTextColors: Record<EmotionType, string> = {
  curious: "text-curious",
  interested: "text-interested",
  skeptical: "text-skeptical",
  engaged: "text-engaged",
  excited: "text-excited",
  ready: "text-ready",
};

export const timelineEvents: TimelineEvent[] = [
  { timestamp: "0:05", seconds: 5, emotion: "curious", label: "Curious", description: "Eyebrows raised, leaning forward slightly. Initial interest triggered by product intro." },
  { timestamp: "0:12", seconds: 12, emotion: "interested", label: "Interested", description: "Sustained eye contact, nodding. Responded positively to feature overview." },
  { timestamp: "0:28", seconds: 28, emotion: "skeptical", label: "Skeptical", description: "Slight frown, crossed arms. Pricing slide triggered doubt signals." },
  { timestamp: "0:35", seconds: 35, emotion: "engaged", label: "Engaged", description: "Arms uncrossed, asking questions. Case study resonated strongly." },
  { timestamp: "0:42", seconds: 42, emotion: "excited", label: "Excited", description: "Smiling, animated gestures. ROI demonstration sparked enthusiasm." },
  { timestamp: "0:55", seconds: 55, emotion: "ready", label: "Ready to Buy", description: "Forward lean, direct eye contact, verbal buying signals detected." },
];

export const detectedPeople: DetectedPerson[] = [
  {
    id: 1,
    name: "Person 1",
    buyScore: 87,
    dominantEmotion: "excited",
    keyMoments: [
      "Showed strong interest at 0:12 during feature demo",
      "Leaned forward during ROI discussion at 0:42",
      "Asked about implementation timeline at 0:50",
    ],
  },
  {
    id: 2,
    name: "Person 2",
    buyScore: 62,
    dominantEmotion: "engaged",
    keyMoments: [
      "Skeptical during pricing at 0:28",
      "Re-engaged after case study at 0:35",
      "Nodding during Q&A section",
    ],
  },
  {
    id: 3,
    name: "Person 3",
    buyScore: 45,
    dominantEmotion: "curious",
    keyMoments: [
      "Attentive but reserved throughout",
      "Showed curiosity about integrations at 0:20",
      "Taking notes during technical deep-dive",
    ],
  },
];

export const engagementData = [
  { time: "0:00", intensity: 20 },
  { time: "0:05", intensity: 45 },
  { time: "0:10", intensity: 60 },
  { time: "0:15", intensity: 55 },
  { time: "0:20", intensity: 50 },
  { time: "0:25", intensity: 35 },
  { time: "0:30", intensity: 40 },
  { time: "0:35", intensity: 65 },
  { time: "0:40", intensity: 75 },
  { time: "0:45", intensity: 85 },
  { time: "0:50", intensity: 90 },
  { time: "0:55", intensity: 95 },
];

export const sessions: Session[] = [
  { id: "S-001", date: "2026-02-06", duration: "4:32", peopleDetected: 3, avgScore: 78, topEmotion: "excited", location: "NYC Showroom", type: "Sales Call" },
  { id: "S-002", date: "2026-02-05", duration: "12:15", peopleDetected: 8, avgScore: 65, topEmotion: "interested", location: "Trade Show Booth", type: "Trade Show" },
  { id: "S-003", date: "2026-02-05", duration: "6:48", peopleDetected: 2, avgScore: 82, topEmotion: "ready", location: "Virtual Meeting", type: "Sales Call" },
  { id: "S-004", date: "2026-02-04", duration: "3:22", peopleDetected: 1, avgScore: 91, topEmotion: "ready", location: "Retail Floor", type: "Retail" },
  { id: "S-005", date: "2026-02-04", duration: "8:10", peopleDetected: 4, avgScore: 58, topEmotion: "curious", location: "Open House", type: "Real Estate" },
  { id: "S-006", date: "2026-02-03", duration: "5:45", peopleDetected: 2, avgScore: 73, topEmotion: "engaged", location: "Dealership", type: "Car Sales" },
  { id: "S-007", date: "2026-02-03", duration: "15:30", peopleDetected: 12, avgScore: 61, topEmotion: "interested", location: "Convention Center", type: "Trade Show" },
  { id: "S-008", date: "2026-02-02", duration: "7:20", peopleDetected: 3, avgScore: 85, topEmotion: "excited", location: "Virtual Meeting", type: "Sales Call" },
  { id: "S-009", date: "2026-02-01", duration: "2:55", peopleDetected: 1, avgScore: 44, topEmotion: "skeptical", location: "Retail Floor", type: "Retail" },
  { id: "S-010", date: "2026-01-31", duration: "9:40", peopleDetected: 5, avgScore: 70, topEmotion: "engaged", location: "Office", type: "Sales Call" },
];

export const dashboardStats = {
  totalSessions: 247,
  avgBuyScore: 72,
  conversionRate: 34,
  topSignal: "Forward Lean + Eye Contact",
};

export const buySignalDistribution = [
  { range: "0-20", count: 12, label: "Low" },
  { range: "21-40", count: 28, label: "Below Avg" },
  { range: "41-60", count: 45, label: "Moderate" },
  { range: "61-80", count: 67, label: "High" },
  { range: "81-100", count: 38, label: "Very High" },
];

export const emotionBreakdown = [
  { emotion: "Curious", percentage: 18, color: "text-curious" },
  { emotion: "Interested", percentage: 25, color: "text-interested" },
  { emotion: "Skeptical", percentage: 12, color: "text-skeptical" },
  { emotion: "Engaged", percentage: 22, color: "text-engaged" },
  { emotion: "Excited", percentage: 15, color: "text-excited" },
  { emotion: "Ready to Buy", percentage: 8, color: "text-ready" },
];

export const engagementOverTime = [
  { week: "W1", value: 58 },
  { week: "W2", value: 62 },
  { week: "W3", value: 55 },
  { week: "W4", value: 71 },
  { week: "W5", value: 68 },
  { week: "W6", value: 75 },
  { week: "W7", value: 79 },
  { week: "W8", value: 82 },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "Perfect for small teams getting started with buyer intent analysis.",
    features: [
      "50 video analyses per month",
      "Basic emotion detection (4 emotions)",
      "Email reports (weekly digest)",
      "Single user access",
      "7-day data retention",
      "Standard support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$299",
    period: "/mo",
    description: "For growing sales teams that need real-time insights and API access.",
    features: [
      "500 video analyses per month",
      "Full emotion spectrum (12 emotions)",
      "Real-time alerts and notifications",
      "API access with webhooks",
      "Up to 10 users",
      "90-day data retention",
      "Custom report templates",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations requiring maximum control, security, and customization.",
    features: [
      "Unlimited video analyses",
      "On-premise deployment option",
      "Custom emotion models",
      "Dedicated success manager",
      "Unlimited users",
      "Unlimited data retention",
      "SSO and SAML integration",
      "Custom SLA (99.99% uptime)",
      "HIPAA compliance available",
      "24/7 premium support",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const faqs = [
  {
    question: "How does IntentSight detect buyer intent from video?",
    answer: "IntentSight uses advanced computer vision and machine learning models to analyze facial micro-expressions, body language, gaze direction, and vocal patterns. Our AI has been trained on millions of sales interactions to identify signals that correlate with buying intent, such as forward leaning, sustained eye contact, and specific facial muscle movements.",
  },
  {
    question: "What about privacy and data protection?",
    answer: "Privacy is at the core of everything we build. All video processing happens in real-time and raw video is never stored unless explicitly opted in. We are fully GDPR and CCPA compliant, support consent flow integrations, and offer on-premise deployment for Enterprise customers. All data is encrypted at rest and in transit.",
  },
  {
    question: "How accurate is the buyer intent scoring?",
    answer: "Our models achieve 94% accuracy in controlled testing environments and 89% in real-world sales scenarios. Accuracy improves over time as the system learns from your specific use cases and feedback. We continuously validate our models against actual conversion outcomes.",
  },
  {
    question: "Can IntentSight work with live video calls?",
    answer: "Yes. IntentSight integrates with Zoom, Microsoft Teams, Google Meet, and any WebRTC-based platform. For live calls, our analysis runs with less than 2 seconds of latency, providing real-time coaching cues to sales representatives during active conversations.",
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with major CRM platforms including Salesforce, HubSpot, and Pipedrive. We also support Slack and Teams for real-time notifications, and our REST API allows custom integrations with any platform. Webhooks are available on Professional and Enterprise plans.",
  },
  {
    question: "Do I need special hardware or cameras?",
    answer: "No special hardware is required. IntentSight works with standard webcams, conference room cameras, and even smartphone cameras. For optimal results, we recommend 720p or higher resolution with good lighting. Our algorithms are optimized to work well even in imperfect conditions.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most teams are up and running within 30 minutes. Simply sign up, install our browser extension or connect your video platform, and start analyzing. Enterprise deployments with custom models typically take 2-4 weeks with dedicated onboarding support.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes. Both our Starter and Professional plans come with a 14-day free trial with full feature access. No credit card required to start. Enterprise trials are available upon request with a custom scope tailored to your organization.",
  },
];

export const useCases = [
  {
    title: "Retail",
    description: "Understand shopper interest in real-time. Identify which displays and products generate the most engagement on your sales floor.",
    icon: "ShoppingBag",
  },
  {
    title: "Sales Calls",
    description: "Get live coaching cues during video sales calls. Know exactly when your prospect is engaged, skeptical, or ready to close.",
    icon: "Phone",
  },
  {
    title: "Real Estate",
    description: "Read buyer reactions during property tours. Know which rooms and features generate genuine excitement versus polite interest.",
    icon: "Home",
  },
  {
    title: "Car Dealerships",
    description: "Detect genuine interest versus tire-kicking. Score buyer intent during test drives and showroom walkthroughs.",
    icon: "Car",
  },
  {
    title: "Trade Shows",
    description: "Measure booth engagement at scale. Identify your hottest leads from hundreds of visitors based on real behavioral signals.",
    icon: "Users",
  },
];
