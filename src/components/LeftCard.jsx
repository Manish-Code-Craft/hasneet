"use client";
import { Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Instagram, Globe, Mail } from "lucide-react";


export default function LeftCard({ onOpenSettings }) {
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-30">
      {/* Rotating Settings Icon */}
      {/* <motion.button
        onClick={onOpenSettings}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute -top-10 left-0 -translate-x-1/2 text-gray-400 hover:text-white cursor-pointer"
      >
        <Settings size={22} />
      </motion.button> */}

      {/* Glass Card */}
      <div className="w-80 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-xl p-10 flex flex-col items-center">
        {/* Availability Badge */}
        <div className="w-full flex justify-center mb-4">
          <span className="bg-[#0f0f0f]/80 text-gray-300 text-sm py-1 px-4 rounded-full border border-white/10 shadow">
            <span className="text-green-500 mr-1">●</span> Available for{" "}
            <span className="text-white font-medium">Freelancing</span>
          </span>
        </div>

        {/* Profile Image */}
        <Image
          src="/images/hasneet.png"
          alt="Hasneet"
          width={400}
          height={400}
          className="w-60 h-60 rounded-2xl object-cover shadow-[0_0_30px_rgba(255,100,0,0.3)] mb-4"
        />

        {/* Name */}
        <h2
          className="text-3xl font-[cursive] text-white mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Hasneet
        </h2>

        {/* Email + Location */}
        <p className="text-gray-400 text-sm">hasneet99@gmail.com</p>
        <p className="text-gray-600 text-xs mb-4">Gurugram, Haryana, India</p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 text-gray-400 mb-6">
        <a
          href="https://www.linkedin.com/in/hasneet-dhalor-151344280/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/hasneet-dhalor-151344280/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://metadome.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Globe size={20} />
        </a>
        <a
          href="mailto:hasneet99@gmail.com"
          className="hover:text-white transition"
        >
          <Mail size={20} />
        </a>
      </div>

        {/* Get Started */}
        <button className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-full py-2 font-semibold hover:bg-gray-100 transition">
          Get Started <span className="text-xl">→</span>
        </button>
      </div>
    </aside>
  );
}
