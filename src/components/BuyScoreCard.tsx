"use client";

import { motion } from "framer-motion";
import type { DetectedPerson } from "@/data/mockData";
import { emotionTextColors } from "@/data/mockData";

function getScoreColor(score: number): string {
  if (score >= 75) return "#22c55e";
  if (score >= 50) return "#f59e0b";
  return "#ef4444";
}

function getScoreTrailColor(score: number): string {
  if (score >= 75) return "text-success";
  if (score >= 50) return "text-amber";
  return "text-danger";
}

export default function BuyScoreCard({ person }: { person: DetectedPerson }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (person.buyScore / 100) * circumference;
  const color = getScoreColor(person.buyScore);

  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:bg-card-hover transition-colors">
      <div className="flex items-start gap-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke="#2a2a2a"
              strokeWidth="8"
            />
            <motion.circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${getScoreTrailColor(person.buyScore)}`}>
              {person.buyScore}
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-white">{person.name}</h4>
          <p className={`text-sm font-medium capitalize ${emotionTextColors[person.dominantEmotion]}`}>
            {person.dominantEmotion}
          </p>
          <ul className="mt-2 space-y-1">
            {person.keyMoments.map((moment, i) => (
              <li key={i} className="text-xs text-muted leading-relaxed flex items-start gap-1.5">
                <span className="text-amber mt-0.5">&#8226;</span>
                {moment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
