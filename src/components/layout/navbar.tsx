"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Icons } from "@/components/ui/icons";
import { profile } from "@/data/projects";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black text-blue-700 dark:text-blue-400">
          JWH
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
          <Link href="/#projects" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/#skills" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Skills</Link>
          <Link href="/#contact" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Contact</Link>
          <Link href="/about" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Icons.github className="w-5 h-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Icons.linkedin className="w-5 h-5" />
            </a>
          </div>
{/*           <div className="border-l border-zinc-200 dark:border-zinc-800 pl-4">
            <ModeToggle />
          </div> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-4 text-base font-bold uppercase tracking-wide">
            <Link
              href="/#projects"
              onClick={closeMenu}
              className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              onClick={closeMenu}
              className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </nav>
          <div className="flex sm:hidden items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Icons.github className="w-5 h-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Icons.linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
