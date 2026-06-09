"use client";

import { useState } from "react";

type NavItem = {
  label: string;
  href: `#${string}`;
};

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Tools",
    href: "#security-tools",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group text-lg font-bold tracking-wide text-white transition"
          aria-label="Go to home section"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Alaaeldeen
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}

          <a
            href="/Alaaeldeen-Abdelnour-Resume.pdf"
            download="Alaaeldeen-Abdelnour-Resume.pdf"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-200 transition duration-300 hover:border-cyan-300/70 hover:bg-cyan-300/20 hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/Alaaeldeen-Abdelnour-Resume.pdf"
            download="Alaaeldeen-Abdelnour-Resume.pdf"
            onClick={closeMenu}
            className="mt-2 rounded-xl border border-cyan-300/50 bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 px-4 py-3 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}