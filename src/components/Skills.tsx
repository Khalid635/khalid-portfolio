import { ArrowUpRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SITE, SKILL_GROUPS } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-x-clip py-10">
      <span className="orb left-0 top-5 size-[150px] bg-[#a01c12]" aria-hidden="true" />
      <span className="orb bottom-10 right-0 size-[160px] bg-[#c22418]" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">03 — Skills</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            The toolbox behind
            <br />
            the projects above.
          </h2>
          <p className="m-0 text-[16.5px] text-soft">
            Nothing here is decorative — every tool below has been used in a shipped project or daily
            coursework.
          </p>
        </Reveal>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <Reveal
              key={group.title}
              className="rounded-[20px] border border-[rgba(255,120,110,0.15)] bg-gradient-to-b from-panel2 to-panel p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-[rgba(255,120,110,0.32)]"
            >
              <div className="mb-[14px] grid size-11 place-items-center rounded-xl bg-[rgba(239,58,44,0.13)] font-display text-xl font-extrabold text-accent">
                {group.n}
              </div>
              <h3 className="mb-3 text-[18.5px] font-bold">{group.title}</h3>
              <div className="flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 flex flex-wrap items-center justify-between gap-5 rounded-[20px] border border-[rgba(255,150,110,0.3)] bg-[linear-gradient(120deg,rgba(255,150,110,0.08),rgba(255,96,84,0.08))] px-[26px] py-6">
          <div>
            <b className="flex items-center gap-2 font-display text-xl">
              <Bot className="size-5 text-accent" aria-hidden="true" />
              Currently learning — AI &amp; Machine Learning
            </b>
            <p className="mt-1 max-w-[62ch] text-[15px] text-soft">
              On Phitron&apos;s AI/ML path (Batch 3): AI Programming with Python, moving into Pandas and
              model-building — plus free GPU practice on Kaggle. The goal is to bring ML into real
              products, not just notebooks.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href={SITE.github} target="_blank" rel="noopener">
              Follow the progress
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
