import { motion } from "framer-motion";
import { skillGroups, stackChips, toolsGrid, learning } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import SectionTag from "../components/SectionTag.jsx";
import SkillBar from "../components/SkillBar.jsx";

export default function Skills() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-16 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag label="Skills & expertise" />
          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[12vw] sm:text-[7vw] lg:text-[5.5vw] mt-8 max-w-4xl">
            40+ tools. One production mindset.
          </h1>
          <p className="text-muted max-w-xl mt-6 text-lg">
            Self-assessed proficiency across ML, AI/RAG, LLM orchestration, AWS cloud, backend engineering, and
            security.
          </p>
        </div>
      </section>

      {/* PROFICIENCY GRID */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 01 )" label="Proficiency" />
          <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6 mb-12">Where the depth is.</h2>

          <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.title} delay={(gi % 2) * 0.06} className="bg-ink p-7 sm:p-8">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-mono text-xs text-accent">{String(gi + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-medium">{group.title}</h3>
                </div>
                <div className="divide-y divide-line">
                  {group.skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.03} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 02 )" label="Tools & environment" />
          <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6 mb-12">Daily toolkit.</h2>
          <div className="flex flex-wrap gap-3">
            {toolsGrid.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 12) * 0.02, duration: 0.3 }}
                className="font-mono text-sm border border-line-strong rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE STACK */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 03 )" label="Complete technical stack" />
          <div className="mt-10 space-y-8">
            {Object.entries(stackChips).map(([group, chips], gi) => (
              <Reveal key={group} delay={(gi % 4) * 0.05} className="grid sm:grid-cols-[220px_1fr] gap-4 border-b border-line pb-6">
                <h3 className="font-display text-lg font-medium text-muted">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span key={c} className="font-mono text-[11px] text-paper/70 border border-line-strong rounded-full px-2.5 py-1">
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY EXPLORING */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 04 )" label="Currently exploring" />
          <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6 mb-12">What's next.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {learning.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="bg-ink p-7 hover:bg-paper/[0.03] transition-colors">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-medium mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
