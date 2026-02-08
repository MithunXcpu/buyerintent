"use client";

import { motion } from "framer-motion";

interface BarChartProps {
  data: { label: string; value: number; displayValue?: string }[];
  maxValue?: number;
  barColor?: string;
}

export default function BarChart({ data, maxValue, barColor = "bg-amber" }: BarChartProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end gap-3 h-48">
      {data.map((d, i) => {
        const height = (d.value / max) * 100;
        return (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
            <span className="text-xs text-muted mb-1">{d.displayValue ?? d.value}</span>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`w-full rounded-t-md ${barColor}`}
            />
            <span className="text-xs text-muted mt-2 text-center whitespace-nowrap">{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}
