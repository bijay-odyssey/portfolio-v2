import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { flagship, projectCategories, projects, kaggleNotebooks, kaggleStats } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import SectionTag from "../components/SectionTag.jsx";
import ProjectRow from "../components/ProjectRow.jsx";

export default function Projects() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((p) => p.categories.includes(category));
  }, [category]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-16 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag label="Projects & work" />
          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[12vw] sm:text-[7vw] lg:text-[5.5vw] mt-8 max-w-4xl">
            One production platform. Fourteen open experiments.
          </h1>
          <p className="text-muted max-w-xl mt-6 text-lg">
            A production AI platform I architected end to end, plus 14+ open-source projects across RAG, machine
            learning, NLP, and infra — every one with source on GitHub.
          </p>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="px-6 md:px-10 py-16 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 01 )" label="Flagship — production" />
          <Reveal className="mt-8 border border-accent/40 rounded-3xl p-8 sm:p-12 bg-accent-soft/40">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-medium">{flagship.title}</h2>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mt-2">{flagship.meta}</p>
              </div>
              <a
                href="/about"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors shrink-0"
              >
                Full capability breakdown <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="text-muted leading-relaxed mt-6 max-w-3xl">{flagship.body}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {flagship.stack.map((s) => (
                <span key={s} className="font-mono text-[11px] border border-line-strong rounded-full px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTERABLE OPEN SOURCE LIST */}
      <section className="px-6 md:px-10 py-16 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <SectionTag index="( 02 )" label="Open source" />
              <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6">Every shipped experiment.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  data-cursor-hover
                  className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                    category === c
                      ? "bg-accent text-ink border-accent"
                      : "border-line-strong text-paper/70 hover:border-accent hover:text-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-line">
            {filtered.map((p, i) => (
              <ProjectRow key={p.title} project={p} index={i} />
            ))}
            {filtered.length === 0 && (
              <p className="py-16 text-center text-muted">No projects in this category yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* KAGGLE */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionTag index="( 03 )" label="Kaggle" />
              <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6">Community-tested notebooks.</h2>
            </div>
            <div className="flex gap-8 font-mono text-sm">
              <div><span className="text-accent text-xl font-semibold">{kaggleStats.notebooks}</span> notebooks</div>
              <div><span className="text-accent text-xl font-semibold">{kaggleStats.upvotes}</span> upvotes</div>
              <div><span className="text-accent text-xl font-semibold">{kaggleStats.forks}</span> forks</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {kaggleNotebooks.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.06}>
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group block border border-line rounded-2xl p-7 h-full hover:border-accent transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] border border-line-strong rounded-full px-2.5 py-1">{n.tag}</span>
                    <span className="flex items-center gap-1 text-xs text-muted font-mono">
                      <ArrowUp size={12} /> {n.upvotes}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium group-hover:text-accent transition-colors">{n.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{n.body}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
