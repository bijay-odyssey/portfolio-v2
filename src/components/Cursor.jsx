import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const isFine = useRef(false);

  useEffect(() => {
    isFine.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine.current) return;

    const move = (e) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };
    const onOver = (e) => {
      const el = e.target.closest("a, button, [data-cursor-hover]");
      setActive(Boolean(el));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isFine.current) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block rounded-full border border-accent mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        width: 32,
        height: 32,
        opacity: visible ? 1 : 0,
      }}
      animate={{ scale: active ? 1.8 : 1 }}
      transition={{ scale: { duration: 0.25, ease: "easeOut" } }}
    />
  );
}
