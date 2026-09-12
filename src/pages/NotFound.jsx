import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";

export default function NotFound() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-48 text-center">
      <p className="font-mono text-accent text-sm">404</p>
      <h1 className="font-display text-[16vw] sm:text-[10vw] font-medium leading-none mt-4">Lost signal.</h1>
      <p className="text-muted mt-6">This page doesn&apos;t exist — or was never deployed.</p>
      <MagneticButton
        as={Link}
        to="/"
        data-cursor-hover
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3.5 font-medium"
      >
        Back home <ArrowUpRight size={18} />
      </MagneticButton>
    </section>
  );
}
