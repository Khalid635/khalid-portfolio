import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Reveal, useReveal } from "@/components/Reveal";
import { Terminal } from "@/components/Terminal";
import { SITE, STATS, TYPED_PHRASES } from "@/data/portfolio";

function useTyped(phrases: readonly string[]) {
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let pi = 0;
    let ci = phrases[0].length;
    let deleting = true;
    let timer = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (deleting) {
        ci -= 1;
        if (ci <= 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          ci = 0;
        }
      } else {
        ci += 1;
        if (ci >= phrases[pi].length) {
          deleting = true;
          setText(phrases[pi]);
          timer = window.setTimeout(tick, 1900);
          return;
        }
      }
      setText(phrases[pi].slice(0, ci));
      timer = window.setTimeout(tick, deleting ? 26 : 52);
    };
    timer = window.setTimeout(tick, 1400);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [phrases]);
  return text;
}

function CountUp({ target }: { target: number }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / 1100, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target]);
  return <span ref={ref}>{n}</span>;
}

const PLANES: { top: string; left?: string; right?: string; size: number; color: string; r: string }[] = [
  { top: "11%", left: "2%", size: 25, color: "#ff8a70", r: "-16deg" },
  { top: "15%", right: "9%", size: 18, color: "#ffb84d", r: "14deg" },
  { top: "64%", right: "3%", size: 22, color: "#f0442f", r: "-22deg" },
];

export function Hero() {
  const typed = useTyped(TYPED_PHRASES);

  return (
    <div className="relative overflow-clip pb-[84px] pt-[158px] max-sm:pb-16 max-sm:pt-[126px]">
      {PLANES.map((p, i) => (
        <svg
          key={i}
          className="plane"
          style={{ top: p.top, left: p.left, right: p.right, width: p.size, height: p.size, color: p.color, transform: `rotate(${p.r})` }}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      ))}

      <div className="wrap">
        <div className="giant" aria-hidden="true">
          PORTFOLIO
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:gap-[52px]">
          <div>
            <span className="he he1 inline-flex items-center gap-[9px] rounded-full border border-[rgba(238,52,40,0.32)] bg-[rgba(238,52,40,0.1)] px-[14px] py-[7px] text-[13px] font-extrabold text-[#ffd9d4]">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Open to internships &amp; opportunities
            </span>
            <div className="hello he he2">Hello, I&apos;m</div>
            <div className="he he3">
              <span className="name-box">KHALID.</span>
            </div>
            <div className="he he4">
              <span className="inline-flex max-w-full items-center gap-[9px] rounded-[10px] border border-[rgba(255,120,110,0.32)] bg-[rgba(238,52,40,0.07)] px-[14px] py-2 text-[12.5px] tracking-[0.13em] text-[#f0d9d5]">
                <span className="size-2 flex-none rounded-full bg-accent" aria-hidden="true" />
                <span className="font-mono">FULL-STACK DEVELOPER · CSE STUDENT — DHAKA, BANGLADESH</span>
              </span>
            </div>
            <h1 className="he he5 mt-[22px] text-[clamp(29px,3.8vw,46px)] font-extrabold">
              I build <span className="text-accent">full-stack apps</span> with React &amp; FastAPI.
            </h1>
            <div className="he he6 mt-1 min-h-[1.5em] font-display text-[clamp(20px,2.6vw,27px)] font-bold text-soft">
              Also exploring <span className="text-white">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </div>
            <p className="he he6 mt-4 max-w-[56ch] text-[17.5px] text-soft">
              Computer Science &amp; Engineering student at{" "}
              <strong className="text-ink">Presidency University, Dhaka</strong>, learning by shipping: a{" "}
              <strong className="text-ink">role-based logistics platform live on Vercel</strong>, an{" "}
              <strong className="text-ink">open-source AI download manager</strong>, and{" "}
              <strong className="text-ink">JWT-secured REST APIs</strong> — database to deployment, end to end.
            </p>
            <div className="he he7 mt-[30px] flex flex-wrap gap-3">
              <Button asChild size="lg" className="transition-transform duration-200 hover:-translate-y-0.5">
                <a href="#projects">
                  View my projects
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-transform duration-200 hover:-translate-y-0.5">
                <a href="#contact">Let&apos;s work together</a>
              </Button>
            </div>
            <div className="he he7 mt-[22px] flex flex-wrap gap-2.5">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(13,16,34,0.6)] px-[13px] py-[7px] text-[13.5px] font-bold text-soft no-underline transition-colors hover:border-[rgba(255,120,110,0.32)] hover:text-white"
              >
                <GithubIcon className="size-[15px] flex-none" />
                {SITE.githubHandle}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(13,16,34,0.6)] px-[13px] py-[7px] text-[13.5px] font-bold text-soft no-underline transition-colors hover:border-[rgba(255,120,110,0.32)] hover:text-white"
              >
                <LinkedinIcon className="size-[15px] flex-none" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-[7px] rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(13,16,34,0.6)] px-[13px] py-[7px] text-[13.5px] font-bold text-soft">
                <MapPin className="size-[15px] flex-none" aria-hidden="true" />
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

          <div className="he he4 relative mx-1.5 my-3.5 pb-2.5 lg:mx-1.5">
            <div className="relative ml-auto w-[210px] max-w-[210px] max-lg:mx-auto max-lg:w-[170px] max-lg:max-w-[170px]">
              <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] border-[3px] border-accent" aria-hidden="true" />
              <img
                src="/images/asset-1.jpg"
                alt="Khalid Bin Masud — portrait in a navy suit and white shirt against a dark background, in a red frame"
                width={800}
                height={1000}
                className="relative z-[1] aspect-[4/5] max-h-[300px] w-full object-cover object-top grayscale-[0.45] contrast-[1.06] brightness-[0.97]"
              />
            </div>
            <a
              href="https://swift-logistics-frontend.vercel.app/"
              target="_blank"
              rel="noopener"
              className="mt-8 block border border-[rgba(255,120,110,0.32)] border-t-[3px] border-t-accent bg-gradient-to-b from-panel2 to-panel px-5 pb-5 pt-[18px] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,120,110,0.55)]"
            >
              <span className="flex items-center justify-between gap-2.5">
                <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-peach">
                  Featured project · Live now
                </span>
                <span className="text-[17px] font-extrabold text-accent" aria-hidden="true">
                  ↗
                </span>
              </span>
              <b className="mt-[7px] block font-display text-[23px] leading-[1.15]">Swift Logistics</b>
              <span className="mt-[5px] block text-[14.5px] text-soft">
                Role-based parcel booking &amp; tracking platform — admins approve users, staff manage parcels,
                anyone can track by ID.
              </span>
              <span className="mt-[11px] block font-mono text-[11.5px] tracking-[0.08em] text-faint">
                REACT 19 · FASTAPI · POSTGRESQL · JWT
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 max-sm:mt-10">
          <Terminal />
        </div>

        <div className="mt-[88px] grid grid-cols-2 gap-3.5 lg:grid-cols-4 max-lg:mt-[60px]">
          {STATS.map((stat) => (
            <Reveal key={stat.label} className="rounded-[20px] border border-[rgba(255,120,110,0.15)] bg-gradient-to-b from-[rgba(255,96,84,0.09)] to-[rgba(255,96,84,0.02)] px-5 py-[22px]">
              <b className="block font-display text-[34px] leading-none">
                {typeof stat.value === "number" ? <CountUp target={stat.value} /> : stat.value}
              </b>
              <span className="mt-[7px] block text-[13.5px] font-bold text-soft">{stat.label}</span>
              <small className="block text-[12.5px] text-faint">{stat.sub}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
