export default function Marquee({ items, className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-line ${className}`}>
      <div className="flex w-max animate-marquee py-5">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-display text-2xl sm:text-4xl font-medium text-paper/25 whitespace-nowrap"
          >
            {item}
            <span className="text-accent text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
