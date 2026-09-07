'use client';

import { Navbar } from "@/components/layout/navbar";
import { profile as fallbackProfile } from "@/data/projects";
import { Icons } from "@/components/ui/icons";
import { 
  Mail, 
  ArrowLeft, 
  Briefcase, 
  Cpu,
  Search, 
  Bot, 
  Activity, 
  GraduationCap, 
  Globe, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  Layers,
  Award
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [profile, setProfile] = useState(fallbackProfile);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/portfolio-site');
        if (res.ok) {
          const data = await res.json();
          if (data.profile) setProfile(data.profile);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    }
    fetchData();
  }, []);

  const coreCompetencies = [
    {
      category: "Backend & System Design",
      icon: Cpu,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/40",
      borderColor: "border-blue-200 dark:border-blue-900/50",
      skills: ["Kotlin", "Java", "Dropwizard", "GraphQL", "Microservices", "Event-Driven Architecture (Kafka)", "Redis"]
    },
    {
      category: "Agentic AI",
      icon: Bot,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/40",
      borderColor: "border-purple-200 dark:border-purple-900/50",
      skills: ["Multi-Agent Orchestration (Handoff & Supervisor)", "LangChain4j", "Output Guardrails", "Tool Argument Guards", "Prompt Engineering (Handlebars/Hot-reloading)", "Mockable LLM Factories"]
    },
    {
      category: "Search & Analytics",
      icon: Search,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
      borderColor: "border-emerald-200 dark:border-emerald-900/50",
      skills: ["Elasticsearch (Vector/kNN)", "Use Embeddings (ELSER/E5)", "Run LLM Evaluation (LLM-as-a-Judge)"]
    },
    {
      category: "Data & Observability",
      icon: Activity,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/40",
      borderColor: "border-amber-200 dark:border-amber-900/50",
      skills: ["Kafka", "PostgreSQL", "OpenTelemetry", "Elastic APM", "Prometheus", "Testcontainers"]
    }
  ];

  const achievements = [
    {
      title: "Agentic AI & Multi-Agent Orchestration",
      description: "Developed multi-agent solutions using Supervisor and Handoff patterns, incorporating template-driven system messages, custom tool setups, and LangChain for internal stakeholders and Volvo Support end-users."
    },
    {
      title: "Content Integrations",
      description: "Developed and maintained continuous integrations, including Vehicle APIs, empowering content editors and stakeholders to produce high-quality support content with faster time-to-market."
    },
    {
      title: "Platform Migrations",
      description: "Led multiple service migrations to align with enterprise engineering standards, modernizing infrastructure while reducing long-term operational costs."
    },
    {
      title: "LLM Guardrails & Security",
      description: "Engineered anti-hallucination guardrails by integrating fuzzy matching against Elasticsearch retrieval results to validate generated responses."
    },
    {
      title: "Event-Driven Data Ingestion",
      description: "Built a decoupled, event-driven Kafka pipeline for CMS synchronization (Contentstack, Volvo Content API, etc.) to reliably ingest and scale multi-source support content."
    },
    {
      title: "Enterprise Hybrid Search",
      description: "Used Elasticsearch and Kibana query parameters to enhance search relevancy across vector and lexical retrieval methods."
    },
    {
      title: "LLM Evaluation Framework",
      description: "Expanded internal evaluation systems utilizing deterministic path validation combined with LLM-as-a-Judge techniques and Redis memory analysis."
    },
    {
      title: "Testing & Observability",
      description: "Implemented behavioral, outcome-based testing strategies to ensure systems are validated against functional output rather than execution paths alone."
    }
  ];

  const keyProjects = [
    {
      name: "New Content Type Integration",
      summary: "Led cross-team architecture and API research to ingest a critical new content stream, driving a key corporate KPI to accelerate user query resolution."
    },
    {
      name: "Anti-Hallucination Guardrails",
      summary: "Spearheaded the development of a fuzzy-matching verification system for the Agentic AI chatbot, ensuring responses are anchored strictly in validated source articles."
    },
    {
      name: "Global Localization Pipeline",
      summary: "Improved language and locale handling across CMS content to deliver accurate, market-specific documentation globally."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50">
      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
        {/* Navigation back */}
        <div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Header Profile Section */}
        <section className="grid md:grid-cols-3 gap-8 items-center border-b border-zinc-200 dark:border-zinc-800 pb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Senior Backend Engineer
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-950 dark:text-zinc-50">
              Jia Wei Ho
            </h1>
            <p className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 leading-snug">
              Distributed Systems, Enterprise Search & AI
            </p>
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm font-semibold">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Stockholm, Sweden</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="mailto:jiwei.ho@gmail.com"
                className="bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-black dark:hover:bg-white transition-all text-sm shadow-sm"
              >
                <Mail className="w-4 h-4" /> jiwei.ho@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/jiaweiho"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-all text-sm"
              >
                <Icons.linkedin className="w-4 h-4 text-blue-700 dark:text-blue-400" /> LinkedIn
              </a>
              <a 
                href="https://github.com/jiaweiho"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-all text-sm"
              >
                <Icons.github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-2xl -z-10"></div>
              <img 
                src={profile.img_path ? `${profile.img_path}` : "/profile/profile.jpg"} 
                alt="Jia Wei Ho"
                className="w-full h-full rounded-3xl object-cover shadow-xl border-4 border-white dark:border-zinc-800"
              />
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-700 dark:text-blue-400" /> Professional Summary
          </h2>
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40">
            <p className="text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed font-medium">
              Senior Backend Engineer specializing in Kubernetes-deployed services, decoupled architectures via event-driven messaging (Kafka), hybrid search implementation (Elasticsearch/Vector/Lexical), and production-ready Agentic AI/LLM systems. Passionate about engineering high-performance, resilient, and observable large-scale Kotlin/Java ecosystems with automated evaluation pipelines.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-700 dark:text-blue-400" /> Core Competencies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {coreCompetencies.map((comp) => {
              const IconComponent = comp.icon;
              return (
                <div 
                  key={comp.category}
                  className={`p-6 rounded-2xl border ${comp.borderColor} bg-white dark:bg-zinc-900/50 shadow-xs flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${comp.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${comp.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
                        {comp.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {comp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-700 dark:text-blue-400" /> Professional Experience
          </h2>

          <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 md:p-8 space-y-8">
            {/* Role Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <div>
                <h3 className="text-2xl font-black text-zinc-950 dark:text-zinc-50">
                  Senior Backend Engineer
                </h3>
                <p className="text-lg font-bold text-blue-700 dark:text-blue-400">
                  Volvo Support Platform
                </p>
              </div>
              <div className="text-left md:text-right text-sm font-semibold text-zinc-600 dark:text-zinc-400 space-y-1">
                <div className="flex items-center md:justify-end gap-1.5">
                  <MapPin className="w-4 h-4 text-zinc-500" /> Sweden
                </div>
                <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full inline-block font-mono text-xs">
                  2022 – Present
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide text-xs text-blue-700 dark:text-blue-400">
                Key Achievements & Deliverables
              </h4>
              <div className="grid gap-4">
                {achievements.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-bold text-zinc-950 dark:text-zinc-100 text-sm md:text-base">
                        {item.title}:
                      </span>{" "}
                      <span className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base font-normal">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide text-xs text-blue-700 dark:text-blue-400">
                Key Featured Projects
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {keyProjects.map((proj) => (
                  <div 
                    key={proj.name}
                    className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-2"
                  >
                    <h5 className="font-bold text-blue-900 dark:text-blue-300 text-base">
                      {proj.name}
                    </h5>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Languages */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-700 dark:text-blue-400" /> Education
            </h2>
            <div className="space-y-2 pt-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                M.Sc. in Computer Science & Engineering
              </h3>
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                University • 2005 – 2011
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-700 dark:text-blue-400" /> Languages
            </h2>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Swedish</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Native</p>
              </div>
              <div className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <p className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">English</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Fluent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="p-8 md:p-12 rounded-3xl bg-zinc-900 dark:bg-zinc-900 text-white text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Let's Connect</h2>
          <p className="text-zinc-300 max-w-xl mx-auto font-medium text-base">
            Interested in discussing system design, backend engineering, or AI orchestration?
          </p>
          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <a 
              href="mailto:jiwei.ho@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md"
            >
              Contact via Email
            </a>
            <a 
              href="https://www.linkedin.com/in/jiaweiho"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 hover:border-zinc-500 text-zinc-200 px-8 py-3 rounded-full font-bold transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 text-center text-sm font-medium text-zinc-700 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Jia Wei Ho. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
