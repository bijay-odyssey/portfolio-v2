import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile, heroCopy, capabilities, projects, toolsGrid } from "../data/content.js";
import Reveal from "../components/Reveal.jsx";
import SectionTag from "../components/SectionTag.jsx";
import Marquee from "../components/Marquee.jsx";
import ProjectRow from "../components/ProjectRow.jsx";
import GithubStats from "../components/GithubStats.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <motion.div {...pageTransition}>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-accent mb-8"
          >
            {profile.eyebrow}
          </motion.p>

          <h1 className="font-display font-medium leading-[0.92] tracking-tight text-[13vw] sm:text-[9vw] lg:text-[7.2vw]">
            {["Designing", "production-grade", "AI systems."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block overflow-hidden"
              >
                {line === "AI systems." ? (
                  <>
                    <span className="text-accent">AI</span> systems.
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="max-w-md text-muted text-base sm:text-lg">{heroCopy.sub}</p>

            <div className="flex items-center gap-4 shrink-0">
              <MagneticButton
                as={Link}
                to="/projects"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3.5 font-medium"
              >
                View projects <ArrowUpRight size={18} />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/about"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium hover:border-accent hover:text-accent transition-colors"
              >
                About me
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            System online — based in {profile.location}
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            Scroll <ArrowDown size={14} className="animate-bounce" />
          </div>
        </motion.div>
      </section>

      <Marquee items={toolsGrid.slice(0, 10)} />

      {/* INTRO / STORY TEASER */}
      <section className="px-6 md:px-10 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 01 )" label="Who I am" />
          <Reveal className="mt-8">
            <p className="font-display text-[7vw] sm:text-[4.2vw] leading-[1.15] max-w-5xl">
              A self-taught engineer from Nepal who cold-emailed a US fintech and became{" "}
              <span className="text-accent">sole architect</span> of their core AI underwriting platform — all
              while finishing a BCA degree.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/about"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-accent font-medium border-b border-accent pb-1"
            >
              Read the full story <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionTag index="( 02 )" label="What I build" />
              <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6">From notebooks to production.</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08} className="bg-ink p-8 hover:bg-paper/[0.03] transition-colors">
                <span className="font-mono text-xs text-muted">{c.index}</span>
                <h3 className="font-display text-xl font-medium mt-4 mb-3">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">{c.body}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-paper/60 border border-line-strong rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <SectionTag index="( 03 )" label="Selected work" />
              <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6">Featured projects.</h2>
            </div>
            <Link to="/projects" data-cursor-hover className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
              View all 17+ projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="border-t border-line">
            {featured.map((p, i) => (
              <ProjectRow key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* GITHUB STATS */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px]">
          <SectionTag index="( 04 )" label="Open source" />
          <h2 className="font-display text-4xl sm:text-5xl font-medium mt-6 mb-12">Building in the open.</h2>
          <GithubStats />
        </div>
      </section>
    </motion.div>
  );
}
