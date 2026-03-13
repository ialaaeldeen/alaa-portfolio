"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wide">
          Alaaeldeen
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">

          <Link href="#about" className="hover:text-white transition">
            About
          </Link>

          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>

          <Link href="#skills" className="hover:text-white transition">
            Skills
          </Link>

          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}