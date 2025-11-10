"use client";
import {
  Home,
  List,
  FileText,
  Layers,
  Info,
  MessageSquareText,
  Users2,
  Award,
  BadgeDollarSign,
  HelpCircle,
  Mail,
  BookOpen,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function RightNav({ onOpenSidebar }) {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "experience", icon: List, label: "Experience" },
    { id: "works", icon: FileText, label: "Works" },
    { id: "services", icon: Layers, label: "Services" },
    { id: "about", icon: Info, label: "About" },
    { id: "testimonial", icon: MessageSquareText, label: "Testimonials" },
    { id: "partners", icon: Users2, label: "Partners" },
    { id: "awards", icon: Award, label: "Awards" },
    { id: "pricing", icon: BadgeDollarSign, label: "Pricing" },
    { id: "faqs", icon: HelpCircle, label: "FAQs" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "blogs", icon: BookOpen, label: "Blogs" },
  ];

  // --- scroll-spy logic ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 } // triggers when 40% of section is visible
    );

    menuItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* vertical nav bar */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-30 flex flex-col gap-5 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-xl">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`group relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all ${
              active === id
                ? "border-orange-500 text-orange-500 shadow-[0_0_10px_rgba(255,100,0,0.4)]"
                : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            <Icon size={18} />
            <span className="absolute right-12 text-xs bg-black/70 border border-white/10 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* top-right toggle menu button */}
      <button
        onClick={onOpenSidebar}
        className="fixed top-6 right-6 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition shadow-xl"
      >
        <Menu size={20} />
      </button>
    </>
  );
}
