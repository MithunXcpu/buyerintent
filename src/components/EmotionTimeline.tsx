"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineEvents, emotionTextColors } from "@/data/mockData";
import type { TimelineEvent } from "@/data/mockData";

const emotionDotColors: Record<string, string> = {
  curious: "bg-curious",
  interested: "bg-interested",
  skeptical: "bg-skeptical",
  engaged: "bg-engaged",
  excited: "bg-excited",
  ready: "bg-ready animate-pulse-glow",
};

export default function EmotionTimeline() {
  const [active, setActive] = useState<TimelineEvent | null>(null);

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-white mb-4">Emotion Timeline</h3>
      <div className="relative">
        {/* Timeline bar */}
        <div className="h-1 bg-border rounded-full w-full" />

        {/* Events */}
        <div className="relative flex justify-between mt-[-10px]">
          {timelineEvents.map((event, i) => {
            const position = (event.seconds / 60) * 100;
            return (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer group"
                style={{ position: "absolute", left: `${position}%`, transform: "translateX(-50%)" }}
                onMouseEnter={() => setActive(event)}
                onMouseLeave={() => setActive(null)}
              >
                <div
                  className={`w-5 h-5 rounded-full ${emotionDotColors[event.emotion]} border-2 border-base transition-transform group-hover:scale-150`}
                />
                <span className="text-xs text-muted mt-2 whitespace-nowrap">{event.timestamp}</span>
                <span className={`text-xs font-medium mt-0.5 whitespace-nowrap ${emotionTextColors[event.emotion]}`}>
                  {event.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-8 p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${emotionDotColors[active.emotion]}`} />
                <span className={`font-semibold ${emotionTextColors[active.emotion]}`}>
                  {active.label}
                </span>
                <span className="text-sm text-muted">at {active.timestamp}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{active.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
