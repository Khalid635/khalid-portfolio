import { ArrowUpRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useToast } from "@/components/Toast";
import { SITE } from "@/data/portfolio";

const CP_STATS = [
  { value: "28", label: "Problems solved" },
  { value: "4 days", label: "Longest streak" },
  { value: "C++", label: "Main language" },
] as const;

export function Credentials() {
  const { copy } = useToast();

  return (
    <section id="credentials" className="relative overflow-x-clip py-10">
      <span className="orb right-0 top-[30px] size-[130px] bg-[#7a2008]" aria-hidden="true" />
      <span className="orb bottom-5 left-0 size-[180px] bg-[#8f1d14]" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">04 — Credentials &amp; practice</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            Certified foundations,
            <br />
            practised daily.
          </h2>
        </Reveal>

        <div className="grid gap-[22px] lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-3xl border border-[rgba(255,120,110,0.15)] bg-gradient-to-[170deg] from-panel2 to-panel p-8">
            <span className="sec-tag text-xs">Certification · Phitron</span>
            <h3 className="relative mt-3 text-2xl font-bold">Programming &amp; Problem Solving</h3>
            <p className="relative mt-2 text-[15.5px] text-soft">
              First two semesters (Fall 2025–2026) — C, C++, Data Structures and Algorithms, completed
              with a perfect score.
            </p>
            <div className="relative mb-1.5 mt-5 flex items-baseline gap-3">
              <b className="font-display text-[58px] leading-none text-accent">4.0</b>
              <span className="font-bold text-soft">
                CGPA
                <br />
                out of 4.0
              </span>
            </div>
            <div className="relative mt-4 flex flex-wrap items-center gap-2.5">
              <span className="text-[13.5px] font-bold text-soft">Validation no.</span>
              <code className="rounded-[9px] border border-[rgba(255,120,110,0.15)] bg-[rgba(0,0,0,0.35)] px-[13px] py-2 font-mono text-[13.5px] text-[#f0dcd8]">
                PHDSA-077495031504
              </code>
              <button
                type="button"
                onClick={() => copy("PHDSA-077495031504")}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[rgba(255,120,110,0.4)] bg-[rgba(238,52,40,0.14)] px-3 py-1.5 text-[12.5px] font-extrabold text-[#ffb59d] transition-colors hover:bg-[rgba(238,52,40,0.24)]"
              >
                <Copy className="size-3.5" aria-hidden="true" />
                Copy
              </button>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-[7px]">
              {["C", "C++", "Data Structures", "Algorithms"].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative overflow-hidden rounded-3xl border border-[rgba(255,120,110,0.15)] bg-gradient-to-[170deg] from-panel2 to-panel p-8">
            <span className="sec-tag text-xs">Competitive Programming</span>
            <h3 className="relative mt-3 text-2xl font-bold">
              Codeforces —{" "}
              <span className="font-mono text-[19px] text-peach">{SITE.codeforcesHandle}</span>
            </h3>
            <p className="relative mt-2 text-[15.5px] text-soft">
              I practise algorithms and data structures on Codeforces, mainly in C++. It&apos;s where I
              build the habit of breaking a problem down and checking complexity before writing code.
            </p>
            <div className="relative my-[22px] flex gap-3.5">
              {CP_STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 rounded-[15px] border border-[rgba(255,120,110,0.15)] bg-[rgba(0,0,0,0.22)] px-4 py-4 text-center"
                >
                  <b className="block font-display text-[32px] leading-[1.1]">{s.value}</b>
                  <span className="text-[12.8px] font-bold text-soft">{s.label}</span>
                </div>
              ))}
            </div>
            <Button asChild size="sm" className="relative">
              <a href={SITE.codeforces} target="_blank" rel="noopener">
                View Codeforces profile
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
