import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home", n: "00" },
  { to: "/about", label: "About", n: "01" },
  { to: "/projects", label: "Projects", n: "02" },
  { to: "/skills", label: "Skills", n: "03" },
  { to: "/writing", label: "Writing", n: "04" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 md:px-10 h-20">
          <Link to="/" className="font-display font-semibold text-lg tracking-tight" data-cursor-hover>
            BIJAYA<span className="text-accent">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.slice(1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-cursor-hover
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-accent" : "text-paper/70 hover:text-paper"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="#contact"
              data-cursor-hover
              className="ml-2 inline-flex items-center gap-1 rounded-full border border-line-strong px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Say hello <ArrowUpRight size={14} />
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-line-strong"
            aria-label="Toggle menu"
            data-cursor-hover
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 py-3 border-b border-line font-display text-4xl sm:text-6xl font-medium ${
                        isActive ? "text-accent" : "text-paper"
                      }`
                    }
                  >
                    <span className="font-mono text-sm text-muted">{l.n}</span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-1 text-muted text-sm font-mono">
              <span>bijaybeezoe@gmail.com</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
