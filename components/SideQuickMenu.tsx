"use client";

import { useEffect, useState, type MouseEvent } from "react";

type NavigationItem = {
  label: string;
  href: `#${string}`;
  description: string;
};

const RESUME_FILE = "/Alaaeldeen-Abdelnour-Resume.pdf";

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "#home",
    description: "Intro and focus",
  },
  {
    label: "About",
    href: "#about",
    description: "Background and education",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Let’s connect and collaborate",
  },
];

export default function SideQuickMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.12,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) return;

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-cyan-300/35 bg-white/85 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-xl shadow-cyan-500/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-[52%] hover:border-cyan-300/70 hover:bg-cyan-50 hover:shadow-cyan-400/35 md:flex"
        aria-label="Open portfolio quick menu"
        aria-expanded={isOpen}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
        </span>
        Explore
      </button>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/90 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-xl shadow-cyan-500/25 backdrop-blur-xl transition-all duration-300 hover:bg-cyan-50 md:hidden"
        aria-label="Open portfolio quick menu"
        aria-expanded={isOpen}
      >
        Menu <span className="text-[10px]">↗</span>
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[84%] max-w-[19rem] border-l border-white/10 bg-slate-950/95 px-5 py-6 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Portfolio quick menu"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Quick Menu
            </p>

            <h2 className="mt-2 text-lg font-bold text-white">
              Explore Portfolio
            </h2>

            <p className="mt-1.5 max-w-[14rem] text-[11px] leading-5 text-slate-400">
              Fast access to my profile, contact details, and latest resume.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
            aria-label="Close portfolio quick menu"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2.5">
          {navigationItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className={`group flex items-center justify-between rounded-2xl border px-3.5 py-3 transition-all duration-300 ${
                  isActive
                    ? "border-cyan-300/70 bg-cyan-300/10 shadow-lg shadow-cyan-500/10"
                    : "border-white/10 bg-white/[0.035] hover:border-cyan-300/45 hover:bg-white/[0.06]"
                }`}
              >
                <span>
                  <span className="block text-xs font-semibold text-white">
                    {item.label}
                  </span>

                  <span className="mt-0.5 block text-[11px] leading-4 text-slate-400">
                    {item.description}
                  </span>
                </span>

                <span
                  className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive ? "text-cyan-300" : "text-slate-500"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}

          <a
            href={RESUME_FILE}
            download="Alaaeldeen-Abdelnour-Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="group relative mt-4 flex items-center justify-between overflow-hidden rounded-2xl border border-cyan-200/70 bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 px-3.5 py-3 text-xs font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-400/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-300/30 via-sky-300/30 to-emerald-300/30 transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative">
              Download Resume
              <span className="mt-0.5 block text-[10px] font-medium text-slate-700">
                Latest PDF version
              </span>
            </span>

            <span className="relative text-sm transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </nav>
      </aside>
    </>
  );
}