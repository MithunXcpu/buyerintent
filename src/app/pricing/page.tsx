"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "Perfect for small teams getting started with buyer intent analysis.",
    highlighted: false,
    features: [
      "50 sessions per month",
      "Basic analytics dashboard",
      "Buy signal scoring",
      "Email support",
      "7-day data retention",
      "Single user",
    ],
  },
  {
    name: "Professional",
    price: "$299",
    period: "/mo",
    description: "For growing sales teams that need deeper insights and more capacity.",
    highlighted: true,
    features: [
      "500 sessions per month",
      "Advanced analytics dashboard",
      "Engagement heatmaps",
      "Emotion timeline analysis",
      "Priority support",
      "30-day data retention",
      "Up to 10 users",
      "CRM integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need unlimited scale and custom solutions.",
    highlighted: false,
    features: [
      "Unlimited sessions",
      "Full API access",
      "Custom AI models",
      "Dedicated support manager",
      "Unlimited data retention",
      "Unlimited users",
      "Custom integrations",
      "On-premise deployment",
      "SOC 2 Type II compliance",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-base/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-amber">
            IntentSight
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-muted"
          >
            Start free for 14 days. No credit card required.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-3"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              custom={i + 2}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-amber bg-card shadow-lg shadow-amber/5"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber px-4 py-1 text-xs font-bold text-base">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="ml-1 text-muted">{tier.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-amber text-base hover:bg-amber-light"
                    : "border border-border text-white hover:border-muted hover:bg-surface"
                }`}
              >
                {tier.name === "Enterprise"
                  ? "Contact Sales"
                  : "Start Free Trial"}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="text-muted">
            Have questions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-amber transition-colors hover:text-amber-light"
            >
              Get in touch
            </Link>{" "}
            and we will help you find the right plan.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
