"use client";
import { motion } from "framer-motion";

export default function SidebarMenu({ open, onClose }) {
  if (!open) return null;
  const items = ["Home","Experience","Selected Works","Services","About","Testimonial","Partners","Awards","Pricing","FAQs","Contact","Blogs"];
  return (
    <motion.aside
      initial={{ x: 320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 320, opacity: 0 }}
      className="fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] border-l border-neutral-800 p-8 z-40"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Menu</h3>
        <button onClick={onClose} className="text-neutral-400 hover:text-white">✕</button>
      </div>
      <ul className="space-y-4 text-neutral-300">
        {items.map(t => (
          <li key={t} className="hover:text-white cursor-pointer" onClick={()=>{
            const id = t.toLowerCase().replace(/ /g,'');
            document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
            onClose();
          }}>{t}</li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="text-neutral-400 mb-2">Social Network</p>
        <div className="flex gap-4 text-neutral-400">
          <span>𝕏</span><span>●</span><span>◎</span><span>ƒ</span>
        </div>
      </div>
    </motion.aside>
  );
}
