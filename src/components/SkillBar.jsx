import { motion } from "framer-motion";

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="py-3">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm sm:text-base">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-[3px] w-full bg-line rounded-full overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </div>
  );
}
