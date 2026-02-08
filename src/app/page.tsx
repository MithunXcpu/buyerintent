"use client";

import { motion } from "framer-motion";
import {
  Video,
  BarChart3,
  Target,
  ShieldCheck,
  Upload,
  Cpu,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const features = [
  {
    icon: Video,
    title: "Video Analysis Timeline",
    description:
      "Frame-by-frame emotional analysis tracks micro-expressions, posture shifts, and vocal tone changes throughout the entire call.",
  },
  {
    icon: BarChart3,
    title: "Engagement Heatmap",
    description:
      "Visual heatmap shows exactly when prospects lean in, zone out, or hit peak interest — mapped to your talking points.",
  },
  {
    icon: Target,
    title: "Buy Signal Score",
    description:
      "Proprietary scoring algorithm combines 47 behavioral indicators into a single, actionable buy-readiness percentage.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First",
    description:
      "All video processing happens on-device. No recordings stored, no data leaves your infrastructure. SOC 2 Type II compliant.",
  },
];

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload",
    description: "Record or upload your sales call video. We support all major formats and live integrations with Zoom, Teams, and Meet.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Analyze",
    description: "Our AI processes facial expressions, voice patterns, and body language in real-time to detect intent signals.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Insights",
    description: "Get a detailed breakdown with buy signal scores, engagement timelines, and actionable recommendations.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-base/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-amber">
            IntentSight
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/demo"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Demo
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-base transition-colors hover:bg-amber-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-4 inline-flex rounded-full border border-amber/20 bg-amber/10 px-4 py-1.5 text-sm text-amber"
          >
            AI-Powered Buyer Intent Detection
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl"
          >
            Read the room before they read{" "}
            <span className="text-amber">your price tag</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            IntentSight uses advanced AI video analysis to decode buyer emotions
            in real-time. Know exactly when prospects are engaged, skeptical, or
            ready to buy — and adapt your pitch accordingly.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-base transition-colors hover:bg-amber-light"
            >
              Try Live Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-white transition-colors hover:border-muted hover:bg-surface"
            >
              View Pricing
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              Everything you need to decode buyer intent
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-lg text-muted"
            >
              Four powerful modules that work together to give you the full
              picture.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                custom={i}
                className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-amber/30 hover:bg-card-hover"
              >
                <div className="mb-4 inline-flex rounded-lg bg-amber/10 p-3">
                  <feature.icon className="h-6 w-6 text-amber" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              How it works
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-lg text-muted"
            >
              Three simple steps from video to actionable insights.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                custom={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber/10">
                  <step.icon className="h-8 w-8 text-amber" />
                </div>
                <span className="mb-2 text-sm font-bold tracking-widest text-amber">
                  STEP {step.step}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Stop guessing. Start{" "}
            <span className="text-amber">knowing.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-muted"
          >
            Join 500+ sales teams already using IntentSight to close deals
            faster with AI-powered buyer intent detection.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber px-8 py-4 text-lg font-semibold text-base transition-colors hover:bg-amber-light"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <span className="text-lg font-bold text-amber">IntentSight</span>
            <p className="mt-1 text-sm text-muted">
              AI-Powered Buyer Intent Detection
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted">
            <Link href="/demo" className="transition-colors hover:text-white">
              Demo
            </Link>
            <Link
              href="/dashboard"
              className="transition-colors hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} IntentSight. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
