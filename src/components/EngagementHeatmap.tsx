"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { engagementData } from "@/data/mockData";

function getHeatColor(intensity: number): string {
  if (intensity >= 80) return "bg-amber";
  if (intensity >= 60) return "bg-amber-dark";
  if (intensity >= 40) return "bg-teal";
  if (intensity >= 20) return "bg-teal-dark";
  return "bg-border";
}

export default function EngagementHeatmap() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxIntensity = Math.max(...engagementData.map((d) => d.intensity));

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-white mb-4">Engagement Heatmap</h3>
      <div className="flex items-end gap-1.5 h-40">
        {engagementData.map((d, i) => {
          const height = (d.intensity / maxIntensity) * 100;
          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-end h-full relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === i && (
                <div className="absolute -top-8 bg-card border border-border rounded-lg px-2 py-1 text-xs text-white whitespace-nowrap z-10">
                  {d.time} — {d.intensity}%
                </div>
              )}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`w-full rounded-t-sm ${getHeatColor(d.intensity)} cursor-pointer transition-opacity ${
                  hoveredIndex !== null && hoveredIndex !== i ? "opacity-50" : "opacity-100"
                }`}
              />
              <span className="text-xs text-muted mt-1.5 whitespace-nowrap">{d.time}</span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-end gap-3 mt-3">
        <span className="text-xs text-muted">Low</span>
        <div className="flex gap-0.5">
          <div className="w-4 h-2 rounded-sm bg-border" />
          <div className="w-4 h-2 rounded-sm bg-teal-dark" />
          <div className="w-4 h-2 rounded-sm bg-teal" />
          <div className="w-4 h-2 rounded-sm bg-amber-dark" />
          <div className="w-4 h-2 rounded-sm bg-amber" />
        </div>
        <span className="text-xs text-muted">High</span>
      </div>
    </div>
  );
}
