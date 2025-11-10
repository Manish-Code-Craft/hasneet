import { useState } from "react";
import Background from "@/components/Background";
import LeftCard from "@/components/LeftCard";
import RightNav from "@/components/RightNav";
import SettingsPanel from "@/components/SettingsPanel";
import SidebarMenu from "@/components/SidebarMenu";

export default function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Background />
      <LeftCard onOpenSettings={() => setSettingsOpen(true)} />
      <RightNav onOpenSidebar={() => setMenuOpen(true)} />
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main content */}
      <main className="relative z-10 lg:ml-[450px] 2xl:ml-[600px] mr-16 px-10 pt-16">
        <section id="home" className="min-h-screen flex flex-col justify-center bg-transparent">
          <p className="text-sm text-neutral-400 mb-2">
            Gurugram, India • Creative Direction | CGI | 3D Visualization
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Crafting <span className="text-orange-500">Immersive Worlds</span> Through Digital Storytelling
          </h1>

          <p className="text-neutral-400 max-w-2xl mb-6 text-base md:text-lg">
            I’m <span className="text-white font-medium">Hasneet Dhalor</span>, a Creative Director with over 12 years of experience
            blending <span className="text-white">CGI, real-time visualization, and immersive technologies</span> to shape the future
            of digital storytelling. My work bridges creativity and innovation — crafting impactful experiences that connect emotion
            with technology.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Creative Direction", "3D Visualization", "XR Experiences", "Animation", "Design Leadership"].map((tag) => (
              <span
                key={tag}
                className="bg-[#141414] border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Add demo sections for scroll spy */}
        {["Experience", "Works", "Services", "About", "Testimonials", "Partners", "Awards", "Pricing", "FAQs", "Contact", "Blogs"].map(sec => (
          <section id={sec.toLowerCase()} key={sec} className="min-h-screen py-24 scroll-mt-24">
            <h2 className="text-5xl font-semibold mb-4">{sec}</h2>
            <p className="text-neutral-400 max-w-2xl">
              This is the {sec} section — add your content here.
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}
