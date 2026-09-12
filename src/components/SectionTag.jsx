export default function SectionTag({ index, label }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
      {index && <span className="text-accent">{index}</span>}
      <span className="h-px w-8 bg-line-strong" />
      {label}
    </div>
  );
}
