"use client";

import { motion } from "framer-motion";
import {
  Video,
  TrendingUp,
  Target,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  {
    icon: Video,
    label: "Sessions Analyzed",
    value: "147",
    change: "+12 this week",
    changeColor: "text-success",
  },
  {
    icon: TrendingUp,
    label: "Avg Buy Signal",
    value: "72%",
    change: "+5% vs last month",
    changeColor: "text-success",
  },
  {
    icon: Target,
    label: "High-Intent",
    value: "34",
    change: "23% of total",
    changeColor: "text-amber",
  },
  {
    icon: BarChart3,
    label: "Conversion Rate",
    value: "23%",
    change: "+3% vs last month",
    changeColor: "text-success",
  },
];

const weeklyData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 82 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 91 },
  { day: "Fri", value: 74 },
  { day: "Sat", value: 38 },
  { day: "Sun", value: 45 },
];

const recentSessions = [
  {
    name: "Sarah Chen — Acme Corp",
    date: "Feb 6, 2026",
    score: 89,
    status: "High Intent",
  },
  {
    name: "Marcus Johnson — TechFlow",
    date: "Feb 6, 2026",
    score: 72,
    status: "Interested",
  },
  {
    name: "Priya Patel — NovaSoft",
    date: "Feb 5, 2026",
    score: 45,
    status: "Skeptical",
  },
  {
    name: "David Kim — CloudScale",
    date: "Feb 5, 2026",
    score: 91,
    status: "Ready to Buy",
  },
  {
    name: "Elena Rossi — DataPrime",
    date: "Feb 4, 2026",
    score: 63,
    status: "Engaged",
  },
];

function getStatusColor(status: string): string {
  switch (status) {
    case "High Intent":
      return "bg-amber/10 text-amber";
    case "Ready to Buy":
      return "bg-success/10 text-success";
    case "Interested":
      return "bg-teal/10 text-teal";
    case "Skeptical":
      return "bg-skeptical/10 text-skeptical";
    case "Engaged":
      return "bg-engaged/10 text-engaged";
    default:
      return "bg-muted/10 text-muted";
  }
}

export default function DashboardPage() {
  const maxValue = Math.max(...weeklyData.map((d) => d.value));

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
            Analytics Dashboard
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="mb-8 text-muted">
            Overview of your buyer intent analysis.
          </motion.p>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i + 2}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
            >
              <div className="mb-3 flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-amber" />
                <span className={`text-xs ${stat.changeColor}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Bar Chart */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            <motion.div
              variants={fadeUp}
              custom={6}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
                Weekly Buy Signal Scores
              </h3>
              <div className="flex h-56 items-end gap-3">
                {weeklyData.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <span className="text-xs font-semibold text-white">
                      {item.value}%
                    </span>
                    <div
                      className="w-full rounded-t-md bg-amber transition-all duration-500"
                      style={{
                        height: `${(item.value / maxValue) * 100}%`,
                      }}
                    />
                    <span className="text-xs text-muted">{item.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Score Distribution */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <motion.div
              variants={fadeUp}
              custom={7}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
                Score Distribution
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted">0-25% (Low)</span>
                    <span className="text-danger">12</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface">
                    <div className="h-2 w-1/6 rounded-full bg-danger" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted">26-50% (Moderate)</span>
                    <span className="text-skeptical">38</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface">
                    <div className="h-2 w-1/4 rounded-full bg-skeptical" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted">51-75% (Good)</span>
                    <span className="text-teal">63</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface">
                    <div className="h-2 w-5/12 rounded-full bg-teal" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted">76-100% (High)</span>
                    <span className="text-amber">34</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface">
                    <div className="h-2 w-1/4 rounded-full bg-amber" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Recent Sessions Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="rounded-xl border border-border bg-card"
          >
            <div className="border-b border-border p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Recent Sessions
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted">
                    <th className="px-6 py-4">Prospect</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Buy Signal</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSessions.map((session, i) => (
                    <motion.tr
                      key={i}
                      variants={fadeUp}
                      custom={i + 1}
                      className="border-b border-border last:border-0 hover:bg-card-hover"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white">
                        {session.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted">
                        {session.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 rounded-full bg-surface">
                            <div
                              className="h-2 rounded-full bg-amber"
                              style={{ width: `${session.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {session.score}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(session.status)}`}
                        >
                          {session.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
