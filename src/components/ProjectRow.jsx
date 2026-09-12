import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectRow({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-3 md:gap-6 border-b border-line py-7 px-2 md:px-4 transition-colors hover:bg-paper/[0.03]"
    >
      <span className="hidden md:block md:col-span-1 font-mono text-sm text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="md:col-span-5 after:absolute after:inset-0"
      >
        <h3 className="font-display text-xl sm:text-2xl font-medium group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted max-w-md line-clamp-2">{project.body}</p>
      </a>

      <div className="md:col-span-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="font-mono text-[11px] text-muted/80 border border-line-strong rounded-full px-2.5 py-1">
            {s}
          </span>
        ))}
      </div>

      <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
        {project.kaggleLink && (
          <a
            href={project.kaggleLink}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="relative z-10 font-mono text-[11px] text-muted hover:text-accent border border-line-strong hover:border-accent rounded-full px-2.5 py-1 transition-colors"
          >
            Kaggle
          </a>
        )}
        {project.stars > 0 && (
          <span className="flex items-center gap-1 text-xs text-muted font-mono">
            <Star size={12} className="fill-current" /> {project.stars}
          </span>
        )}
        <span className="w-9 h-9 rounded-full border border-line-strong flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.div>
  );
}
