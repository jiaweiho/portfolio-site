import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Icons } from "@/components/ui/icons";
import { profile } from "@/data/projects";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter hover:text-blue-700 transition-colors">
          JW<span className="text-blue-700 dark:text-blue-400">H</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
          <Link href="/#projects" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/#skills" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Skills</Link>
          <Link href="/about" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">About</Link>
          <Link href="/#contact" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Icons.github className="w-5 h-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-900 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Icons.linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="border-l border-zinc-200 dark:border-zinc-800 pl-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
