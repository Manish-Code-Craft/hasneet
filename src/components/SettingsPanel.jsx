"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const COLORS = ["#ff6600","#16a34a","#6d28d9","#a21caf","#f59e0b","#000000","#0a0a2a","#004f4f","#666666"];
const BG_OPTIONS = [
  { key: "liquid", label: "Liquids Wavy"},
  { key: "ball", label: "3D Abstract Ball"},
  { key: "waves", label: "Water Waves"},
  { key: "earth", label: "Earth Lines Sphere"},
  { key: "solid", label: "Solid Color"},
  { key: "strings", label: "Simple Strings"},
];

export default function SettingsPanel({ open, onClose }) {
  const { accent, setAccent, bgStyle, setBgStyle } = useTheme();
  if (!open) return null;

  return (
    <motion.div
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -320, opacity: 0 }}
      className="fixed top-0 left-72 h-full w-96 bg-[#1a1a1a] border-r border-neutral-800 p-8 z-40 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Configuration</h2>
        <button onClick={onClose} className="text-neutral-400 hover:text-white">✕</button>
      </div>

      <p className="text-neutral-400 mb-2">COLORS</p>
      <div className="flex flex-wrap gap-3 mb-8">
        {COLORS.map(c => (
          <button
            key={c}
            onClick={() => setAccent(c)}
            className={`w-7 h-7 rounded-full border-2 ${accent === c ? "border-white" : "border-transparent"}`}
            style={{ backgroundColor: c }}
            aria-label={`Accent ${c}`}
          />
        ))}
      </div>

      <p className="text-neutral-400 mb-2">THREE DIMENSIONAL SHAPES</p>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {BG_OPTIONS.map(opt => (
          <button
            key={opt.key}
            onClick={() => setBgStyle(opt.key)}
            className={`text-left px-3 py-2 rounded-lg border ${bgStyle === opt.key ? "border-accent/60 text-white bg-accent/10" : "border-neutral-800 text-neutral-300 hover:bg-neutral-800"}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
