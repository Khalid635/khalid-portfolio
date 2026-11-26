import { BookOpen, GraduationCap, Languages, Layers, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PRINCIPLES = [
  {
    icon: Rocket,
    title: "Ship, then polish",
    text: "Finish it and put it online — a working project beats a screenshot every time.",
  },
  {
    icon: Layers,
    title: "Fundamentals first",
    text: "DSA, databases and clean API design before frameworks-of-the-week.",
  },
  {
    icon: BookOpen,
    title: "Learn in public",
    text: "All code is on GitHub — roadmaps, READMEs and honest commit history.",
  },
] as const;

const INFO = [
  { label: "University", value: "Presidency University — B.Sc. in CSE (2025–2029)" },
  { label: "Current focus", value: "Full-stack development · AI/ML with Python" },
  { label: "Daily practice", value: "Data Structures & Algorithms — Codeforces, C++" },
  { label: "Goal", value: "Software Developer & AI/ML Engineer" },
] as const;

export function About() {
  return (
    <section id="about" className="relative overflow-x-clip py-[104px] max-sm:py-[72px]">
      <span className="orb right-0 top-10 size-[170px] bg-[#e8322a]" aria-hidden="true" />
      <span className="orb bottom-[60px] left-0 size-[150px] bg-[#a01c12]" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">01 — Background &amp; philosophy</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            Background &amp;
            <br />
            Philosophy.
          </h2>
          <p className="m-0 text-[16.5px] text-soft">
            Where I come from, how I think about building software — and why every project I start gets
            finished and put online.
          </p>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
          <Reveal>
            <div className="relative w-[250px] max-w-[250px] max-lg:mx-auto">
              <div
                className="absolute -inset-[26px] -z-[1] rounded-[34px] blur-[18px]"
                style={{ background: "radial-gradient(closest-side, rgba(238,52,40,0.42), transparent)" }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[26px] border-[3px] border-accent">
                <img
                  src="/images/asset-1.jpg"
                  alt="Khalid Bin Masud — professional portrait in a navy suit and white shirt against a dark grey background, with a cinematic red tint"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] max-h-[340px] w-full object-cover object-top saturate-[0.82] contrast-[1.07] brightness-[0.96]"
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-[23px] mix-blend-soft-light"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(238,52,40,0.36), rgba(238,52,40,0.12) 34%, rgba(255,150,110,0.22) 58%, rgba(226,44,34,0.20))",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-[23px]"
                  style={{ background: "linear-gradient(180deg, transparent 55%, rgba(5,6,14,0.55))" }}
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-[1] mt-[14px] flex flex-wrap justify-between gap-2.5">
                <span className="chip bg-[rgba(13,16,34,0.85)]">
                  <GraduationCap className="size-3.5" aria-hidden="true" />
                  CSE ’25–’29
                </span>
                <span className="chip bg-[rgba(13,16,34,0.85)]">
                  <Languages className="size-3.5" aria-hidden="true" />
                  Bangla · English
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-[18px] text-[16.8px] text-soft">
              I&apos;m a <strong className="text-ink">Computer Science &amp; Engineering (Honours)</strong>{" "}
              student at Presidency University. Every project I ship covers the full path —{" "}
              <strong className="text-ink">database design, authenticated APIs, a React frontend, and deployment</strong>{" "}
              on Vercel, Render and Netlify.
            </p>
            <p className="mb-[18px] text-[16.8px] text-soft">
              I like backends with <strong className="text-ink">clear validation and honest error handling</strong>,
              and frontends that work well on a phone. Alongside coursework, I practise algorithms on{" "}
              <strong className="text-ink">Codeforces</strong> to sharpen problem-solving, and I&apos;m now going
              deeper into <strong className="text-ink">AI &amp; Machine Learning with Python</strong> through
              Phitron&apos;s AI/ML path.
            </p>
            <p className="mb-[18px] text-[16.8px] text-soft">
              Before university coursework took over, I also completed Phitron&apos;s{" "}
              <strong className="text-ink">Programming &amp; Problem Solving</strong> track — C, C++, Data
              Structures and Algorithms — with a <strong className="text-ink">4.0 CGPA</strong>.
            </p>
            <blockquote className="my-6 rounded-r-[14px] border-l-[3px] border-accent bg-[linear-gradient(90deg,rgba(238,52,40,0.12),transparent)] px-[22px] py-5 font-display text-[19px] leading-[1.45] text-[#f2e6e2]">
              “My philosophy is simple: don&apos;t collect tutorials —{" "}
              <span className="text-peach">collect finished projects</span>. Building end to end teaches you what
              no course can: validation, errors, users, and finishing.”
            </blockquote>

            <div className="my-[26px] grid gap-3 sm:grid-cols-2">
              {INFO.map((cell) => (
                <div
                  key={cell.label}
                  className="rounded-[14px] border border-[rgba(255,120,110,0.15)] bg-panel px-4 py-[14px]"
                >
                  <small className="block text-xs font-extrabold uppercase tracking-[0.08em] text-faint">
                    {cell.label}
                  </small>
                  <b className="mt-[3px] block text-[15.5px]">{cell.value}</b>
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-3 md:grid-cols-3 max-md:grid-cols-1">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[14px] border border-[rgba(255,120,110,0.15)] bg-[linear-gradient(180deg,rgba(255,96,84,0.07),transparent)] p-4"
                >
                  <b className="mb-1 flex items-center gap-2 text-[15px]">
                    <p.icon className="size-4 text-accent" aria-hidden="true" />
                    {p.title}
                  </b>
                  <span className="text-[13.8px] text-soft">{p.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
