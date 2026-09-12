import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, posts } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import SectionTag from "../components/SectionTag.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

export default function Writing() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-16 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag label="Writing" />
          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[12vw] sm:text-[7vw] lg:text-[5.5vw] mt-8 max-w-4xl">
            Thoughts, shipped in public.
          </h1>
          <p className="text-muted max-w-xl mt-6 text-lg">
            I share what I learn as I build: RAG systems, LLM orchestration, ML experiments, and the occasional
            late-night AI rabbit hole.
          </p>
          <div className="flex gap-10 mt-10 font-mono text-sm">
            <div><span className="text-accent text-xl font-semibold">16+</span> posts shared</div>
            <div><span className="text-accent text-xl font-semibold">7</span> topics covered</div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="px-6 md:px-10 py-16 border-t border-line">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group block border border-accent/40 bg-accent-soft/40 rounded-3xl p-8 sm:p-14"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-accent">Most viewed</span>
                <h2 className="font-display text-3xl sm:text-4xl font-medium mt-4 max-w-3xl group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mt-4 max-w-2xl">{featured.body}</p>
                <div className="flex items-center justify-between mt-8">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] border border-line-strong rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* POST GRID */}
      <section className="px-6 md:px-10 py-16 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 02 )" label="Recent posts" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={(i % 6) * 0.06}>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group flex flex-col justify-between h-full border border-line rounded-2xl p-6 hover:border-accent transition-colors"
                >
                  <div>
                    <h3 className="font-display text-lg font-medium group-hover:text-accent transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted mt-3 leading-relaxed">{p.body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] text-muted border border-line-strong rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-medium max-w-3xl mx-auto">
              Let&apos;s connect and grow together.
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">
              I post regularly about AI engineering, RAG systems, and lessons from building production systems.
            </p>
            <MagneticButton
              as="a"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-ink px-7 py-4 font-medium"
            >
              Follow on LinkedIn <ArrowUpRight size={18} />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
}
