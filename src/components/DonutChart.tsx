"use client";

import { motion } from "framer-motion";

interface DonutChartProps {
  data: { label: string; percentage: number; color: string }[];
}

const colorMap: Record<string, string> = {
  "text-curious": "#3b82f6",
  "text-interested": "#22c55e",
  "text-skeptical": "#eab308",
  "text-engaged": "#14b8a6",
  "text-excited": "#f59e0b",
  "text-ready": "#f59e0b",
};

export default function DonutChart({ data }: DonutChartProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-48">
        <svg className="w-48 h-48 -rotate-90" viewBox="0 0 100 100">
          {data.map((segment, i) => {
            const segmentLength = (segment.percentage / 100) * circumference;
            const offset = circumference - segmentLength;
            const rotation = (cumulativeOffset / circumference) * 360;
            cumulativeOffset += segmentLength;

            return (
              <motion.circle
                key={i}
                cx="50" cy="50" r={radius}
                fill="none"
                stroke={colorMap[segment.color] || "#a3a3a3"}
                strokeWidth="12"
                strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                strokeDashoffset="0"
                style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "50% 50%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              />
            );
          })}
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
        {data.map((segment, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: colorMap[segment.color] || "#a3a3a3" }}
            />
            <span className="text-xs text-muted">{segment.label}</span>
            <span className="text-xs font-medium text-white">{segment.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
