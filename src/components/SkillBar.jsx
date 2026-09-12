import { motion } from "framer-motion";

const PIPS = 10;

export default function SkillBar({ name, level, delay = 0 }) {
  const filled = Math.round((level / 100) * PIPS);

  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-sm truncate">{name}</span>
      <div className="flex items-center gap-3 shrink-0">
        <div className="flex gap-[3px]" aria-hidden="true">
          {Array.from({ length: PIPS }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: i < filled ? 1 : 0.18 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: delay + i * 0.02 }}
              className="h-3 w-[5px] rounded-[1px] bg-accent"
            />
          ))}
        </div>
        <span className="font-mono text-xs text-muted w-9 text-right tabular-nums">{level}%</span>
      </div>
    </div>
  );
}
