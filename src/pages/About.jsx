import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, story, timeline, research } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import SectionTag from "../components/SectionTag.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag label="Who I am" />
          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[12vw] sm:text-[7vw] lg:text-[5.5vw] mt-8 max-w-5xl">
            Self-taught engineer. Production-first mindset.
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton
              as="a"
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3.5 font-medium"
            >
              Contact me <ArrowUpRight size={18} />
            </MagneticButton>
            <a
              href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* STORY + SIDEBAR */}
      <section className="px-6 md:px-10 py-16 border-t border-line">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-8 space-y-6">
            {story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={`leading-relaxed ${i === 0 ? "font-display text-2xl sm:text-3xl font-medium leading-snug" : "text-muted"}`}>
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="grid sm:grid-cols-3 gap-6 pt-8">
              {story.values.map((v) => (
                <div key={v.title} className="border border-line rounded-2xl p-6">
                  <h3 className="font-display text-lg font-medium text-accent mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.body}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 border border-line rounded-2xl p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Quick info</p>
              <dl className="space-y-4">
                {story.quickInfo.map((q) => (
                  <div key={q.label} className="flex flex-col gap-1 border-b border-line pb-3 last:border-0">
                    <dt className="text-xs text-muted">{q.label}</dt>
                    <dd className="text-sm">{q.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl text-accent font-semibold">{s.value}</div>
                    <div className="text-xs text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 02 )" label="Career journey" />
          <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6 mb-14">The path so far.</h2>

          <div className="relative border-l border-line pl-8 sm:pl-12 space-y-14">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05} className="relative">
                <span className="absolute -left-[41px] sm:-left-[57px] top-1 w-3 h-3 rounded-full bg-accent" />
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">{t.date}</p>
                <h3 className="font-display text-2xl font-medium">{t.title}</h3>
                <p className="text-sm text-muted mb-3">{t.org}</p>
                <p className="text-muted leading-relaxed max-w-3xl">{t.body}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {t.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-paper/60 border border-line-strong rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 03 )" label="Research" />
          <Reveal className="mt-8 border border-line rounded-2xl p-8 sm:p-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">{research.badge}</span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium mt-4 max-w-4xl leading-snug">
              {research.title}
            </h3>
            <p className="text-muted leading-relaxed mt-5 max-w-3xl">{research.body}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {research.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] text-paper/60 border border-line-strong rounded-full px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
}
