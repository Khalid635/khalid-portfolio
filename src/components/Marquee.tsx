import { MARQUEE_ITEMS } from "@/data/portfolio";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[54px] w-full items-center overflow-hidden border-y border-[rgba(255,120,110,0.15)] bg-[rgba(10,6,7,0.55)]"
    >
      <div className="marquee-track absolute left-0 top-0 flex h-[54px] w-max items-center gap-11 whitespace-nowrap font-mono text-sm text-faint will-change-transform">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-11">
            <b className="font-medium text-soft">{item}</b>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
