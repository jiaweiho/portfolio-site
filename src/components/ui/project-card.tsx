import { ExternalLink } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className={cn(
            "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
            project.type === 'workplace' 
              ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300"
              : "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300"
          )}>
            {project.type === 'workplace' ? 'Workplace' : 'Private'}
          </span>
          <div className="flex gap-3">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-400 p-1" aria-label="View Source on GitHub">
                <Icons.github className="w-5 h-5" />
              </a>
            )}
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-400 p-1" aria-label="View Live Project">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        {project.role && (
          <p className="text-sm font-bold text-blue-800 dark:text-blue-400 mb-4 uppercase tracking-wide">
            {project.role}
          </p>
        )}
        
        <p className="text-zinc-900 dark:text-zinc-400 text-base font-medium leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-bold px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-md border border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
