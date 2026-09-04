'use client';

import { Navbar } from "@/components/layout/navbar";
import { ProjectCard } from "@/components/ui/project-card";
import { Project, profile as fallbackProfile, projects as fallbackProjects } from "@/data/projects";
import { Icons } from "@/components/ui/icons";
import { Mail, ArrowRight, Code2, Database, Layout } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [profile, setProfile] = useState(fallbackProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/portfolio-site');
        if (res.ok) {
          const data = await res.json();
          
          if (data.projects) setProjects(data.projects);
          if (data.profile) setProfile(data.profile);
        }
      } catch (error) {
        console.error('Failed to fetch from API:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="dark:bg-zinc-950 bg-white/95 mx-auto px-4 py-20 space-y-32">
        {/* Hero Section */}
        <section className="grid md:grid-cols-1 gap-12 items-center max-w-6xl mx-auto py-12 md:py-20">
          <div className="flex flex-col items-center text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-900 dark:text-zinc-200 font-bold">
              {profile.title}
            </p>
            <p className="text-xl text-zinc-900 dark:text-zinc-300 text-center max-w-xl font-semibold leading-relaxed">
              {profile.elevator_pitch}
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="bg-blue-700 dark:bg-blue-400 text-zinc-50 dark:text-zinc-900 px-8 py-3 rounded-full font-bold flex items-center text-center gap-2 hover:bg-black dark:hover:bg-white transition-all shadow-md hover:shadow-lg"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${profile.email}`}
                className="bg-transparent border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-8 py-3 rounded-full font-bold text-center hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Expertise</h2>
            <p className="text-zinc-900 dark:text-zinc-300 text-lg font-medium">Building scalable systems with modern technologies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/40 shadow-xs">
              <Database className="w-10 h-10 text-blue-700 dark:text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills?.backend?.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 shadow-2xs">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/40 shadow-xs">
              <Layout className="w-10 h-10 text-blue-700 dark:text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills?.frontend?.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 shadow-2xs">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/40 shadow-xs">
              <Code2 className="w-10 h-10 text-blue-700 dark:text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills?.tools?.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 shadow-2xs">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Featured Projects</h2>
              <p className="text-zinc-900 dark:text-zinc-300 text-lg font-medium">A collection of my work from professional environments and personal experiments.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Get In Touch</h2>
            <p className="text-xl text-zinc-900 dark:text-zinc-300 font-medium">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a 
                href={`mailto:${profile.email}`} 
                className="flex items-center gap-3 text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-700 dark:text-blue-400" /> {profile.email}
              </a>
              <a 
                href={profile.socials?.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <Icons.linkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" /> LinkedIn
              </a>
              <a 
                href={profile.socials?.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <Icons.github className="w-6 h-6 text-blue-700 dark:text-blue-400" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 text-center text-sm font-medium text-white dark:text-zinc-400">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
