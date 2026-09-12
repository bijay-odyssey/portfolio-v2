import { ArrowUpRight } from "lucide-react";
import { SiKaggle, SiGithub } from "react-icons/si";
import { LinkedInIcon } from "./icons.jsx";
import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import MagneticButton from "./MagneticButton.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line px-6 md:px-10 pt-24 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6">Get in touch</p>
          <h2 className="font-display font-medium text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-tight">
            Let&apos;s build
            <br />
            something<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton
            as="a"
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="inline-flex items-center gap-3 rounded-full bg-accent text-ink px-7 py-4 font-medium text-lg"
          >
            {profile.email} <ArrowUpRight size={20} />
          </MagneticButton>
          <span className="font-mono text-sm text-muted">{profile.phone}</span>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-line pt-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors" data-cursor-hover>Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors" data-cursor-hover>About</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors" data-cursor-hover>Projects</Link></li>
              <li><Link to="/skills" className="hover:text-accent transition-colors" data-cursor-hover>Skills</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Social</p>
            <ul className="space-y-2 text-sm">
              <li><a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" data-cursor-hover>GitHub</a></li>
              <li><a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" data-cursor-hover>LinkedIn</a></li>
              <li><a href={profile.links.kaggle} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" data-cursor-hover>Kaggle</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Status</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {profile.availability}
            </div>
            <p className="text-sm text-muted mt-2">{profile.location}</p>
          </div>
          <div className="flex md:justify-end items-start gap-4">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-cursor-hover className="w-11 h-11 rounded-full border border-line-strong flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <SiGithub size={16} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-cursor-hover className="w-11 h-11 rounded-full border border-line-strong flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <LinkedInIcon size={16} />
            </a>
            <a href={profile.links.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle" data-cursor-hover className="w-11 h-11 rounded-full border border-line-strong flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <SiKaggle size={16} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted font-mono">
          <span>© {new Date().getFullYear()} {profile.name} — built with React &amp; Framer Motion</span>
          <span>Kathmandu, NP · v2.0.0</span>
        </div>
      </div>
    </footer>
  );
}
