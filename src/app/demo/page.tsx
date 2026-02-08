"use client";

import { motion } from "framer-motion";
import { Play, ArrowLeft, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const timelineEvents = [
  { time: "0:12", emotion: "curious", label: "Curious" },
  { time: "0:45", emotion: "interested", label: "Interested" },
  { time: "1:20", emotion: "skeptical", label: "Skeptical" },
  { time: "2:05", emotion: "engaged", label: "Engaged" },
  { time: "2:48", emotion: "excited", label: "Excited" },
  { time: "3:15", emotion: "skeptical", label: "Skeptical" },
  { time: "3:55", emotion: "interested", label: "Interested" },
  { time: "4:30", emotion: "excited", label: "Excited" },
  { time: "5:10", emotion: "ready", label: "Ready to Buy" },
];

const emotionColorMap: Record<string, string> = {
  curious: "bg-curious",
  interested: "bg-interested",
  skeptical: "bg-skeptical",
  engaged: "bg-engaged",
  excited: "bg-excited",
  ready: "bg-ready",
};

const heatmapData = [
  [3, 5, 7, 8, 6, 4, 2, 5, 8, 9],
  [2, 4, 6, 7, 8, 5, 3, 6, 7, 8],
  [4, 6, 5, 3, 7, 8, 9, 7, 6, 5],
  [5, 7, 8, 6, 4, 3, 7, 8, 9, 8],
  [3, 5, 7, 9, 8, 6, 5, 7, 8, 9],
  [6, 4, 3, 5, 7, 8, 6, 5, 7, 8],
];

function getHeatColor(value: number): string {
  if (value >= 8) return "bg-ready";
  if (value >= 6) return "bg-engaged";
  if (value >= 4) return "bg-skeptical";
  return "bg-danger/40";
}

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const buySignalScore = 78;

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

      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div initial="hidden" animate="visible">
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="mb-2 text-3xl font-bold text-white"
          >
            Interactive Demo
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="mb-8 text-muted">
            See how IntentSight analyzes a sales call in real-time.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Video Player + Timeline */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            {/* Fake Video Player */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-card" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-amber/20 transition-colors hover:bg-amber/30"
              >
                <Play
                  className={`h-8 w-8 text-amber ${isPlaying ? "hidden" : ""}`}
                  fill="currentColor"
                />
                {isPlaying && (
                  <div className="flex gap-1">
                    <div className="h-6 w-1.5 rounded-full bg-amber" />
                    <div className="h-6 w-1.5 rounded-full bg-amber" />
                  </div>
                )}
              </button>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-muted">
                <Clock className="h-4 w-4" />
                <span>5:42 / 12:30</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-muted">
                <Users className="h-4 w-4" />
                <span>2 participants</span>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-4 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                Emotion Timeline
              </h3>
              <div className="relative">
                {/* Track */}
                <div className="h-2 w-full rounded-full bg-surface">
                  <div className="h-2 w-5/12 rounded-full bg-amber/50" />
                </div>
                {/* Dots */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {timelineEvents.map((event, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs"
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${emotionColorMap[event.emotion]}`}
                      />
                      <span className="font-mono text-muted">
                        {event.time}
                      </span>
                      <span className="text-white">{event.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Engagement Heatmap */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-4 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                Engagement Heatmap
              </h3>
              <div className="space-y-1.5">
                {heatmapData.map((row, ri) => (
                  <div key={ri} className="flex gap-1.5">
                    {row.map((val, ci) => (
                      <div
                        key={ci}
                        className={`h-8 flex-1 rounded ${getHeatColor(val)} transition-transform hover:scale-110`}
                        style={{ opacity: 0.5 + val * 0.05 }}
                        title={`Engagement: ${val}/10`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted">
                <span>Low engagement</span>
                <div className="flex gap-1">
                  <div className="h-3 w-6 rounded bg-danger/40" />
                  <div className="h-3 w-6 rounded bg-skeptical" />
                  <div className="h-3 w-6 rounded bg-engaged" />
                  <div className="h-3 w-6 rounded bg-ready" />
                </div>
                <span>High engagement</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Side Panel */}
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            {/* Buy Signal Score */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
                Buy Signal Score
              </h3>
              <div className="flex flex-col items-center">
                {/* CSS-only Circular Progress */}
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <svg className="h-40 w-40 -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-surface"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${buySignalScore * 4.4} 440`}
                      className="text-amber"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-bold text-white">
                      {buySignalScore}%
                    </span>
                    <span className="text-xs text-muted">Buy Signal</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-muted">
                  High intent detected. Prospect shows strong buying signals in
                  the last 2 minutes.
                </p>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                Key Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Attention Span</span>
                  <span className="text-sm font-semibold text-success">
                    87%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-surface">
                  <div className="h-1.5 w-7/8 rounded-full bg-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Positive Reactions</span>
                  <span className="text-sm font-semibold text-teal">
                    23
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Objection Moments</span>
                  <span className="text-sm font-semibold text-skeptical">
                    4
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Peak Engagement</span>
                  <span className="text-sm font-semibold text-amber">
                    3:55
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Recommendation */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="rounded-xl border border-amber/30 bg-amber/5 p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber" />
                <h3 className="text-sm font-semibold text-amber">
                  AI Recommendation
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Prospect peaked at the ROI discussion. Consider circling back to
                pricing with a limited-time offer to capitalize on high intent.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
