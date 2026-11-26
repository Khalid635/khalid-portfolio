import { Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GOAL_POINTS, JOURNEY } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="relative overflow-x-clip py-10">
      <span className="orb right-0 top-[60px] size-[120px] bg-[#ff6a55] opacity-[0.38]" aria-hidden="true" />
      <span className="orb bottom-[30px] left-0 size-[170px] bg-[#e8322a]" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">05 — Journey</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            Where I am,
            <br />
            and where I&apos;m headed.
          </h2>
        </Reveal>

        <div className="grid items-start gap-[52px] lg:grid-cols-[1fr_380px]">
          <Reveal>
            <div className="relative mt-1.5 pl-[30px]">
              <div
                className="absolute bottom-2 left-2 top-2 w-[2px] bg-accent/70"
                aria-hidden="true"
              />
              {JOURNEY.map((item) => (
                <div key={item.when} className="relative pb-[30px] last:pb-1">
                  <span
                    className={`absolute -left-[30px] top-[5px] size-[18px] rounded-full border-[3px] bg-[#060405] ${
                      "now" in item && item.now
                        ? "border-accent shadow-[0_0_0_5px_rgba(238,52,40,0.15)]"
                        : "border-accent"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[12.5px] tracking-[0.08em] text-peach">
                    {item.when}
                  </span>
                  <h3 className="mb-[5px] mt-[5px] text-xl font-bold">{item.title}</h3>
                  <p className="m-0 max-w-[68ch] text-[15.5px] text-soft">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <aside className="rounded-[22px] border border-[rgba(255,120,110,0.32)] bg-[linear-gradient(160deg,rgba(238,52,40,0.16),rgba(255,150,110,0.06))] p-7 lg:sticky lg:top-[88px]">
              <h3 className="mb-2.5 flex items-center gap-2 text-[21px] font-bold">
                <Target className="size-5 text-accent" aria-hidden="true" />
                The long-term goal
              </h3>
              <p className="mb-[14px] text-[15px] text-soft">
                Become a professional software developer and AI/ML engineer who builds useful, real-world
                products — and eventually engineer at a company like Google or Microsoft.
              </p>
              <ul className="grid list-disc gap-[7px] pl-[18px] text-[15px] text-[#e8dcd8] marker:text-accent">
                {GOAL_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
