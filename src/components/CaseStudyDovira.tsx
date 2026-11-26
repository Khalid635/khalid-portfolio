import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CASE_STUDY } from "@/data/portfolio";

export function CaseStudyDovira() {
  return (
    <main id="top">
      <div className="wrap pb-10 pt-[120px] max-sm:pt-[100px]">
        <Reveal className="max-w-[720px]">
          <span className="sec-tag">{CASE_STUDY.tag}</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            DOVIRA — an AI download
            <br />
            manager, built in the open.
          </h2>
          <p className="m-0 text-[16.5px] text-soft">{CASE_STUDY.intro}</p>
        </Reveal>

        <div className="mt-[30px] flex flex-wrap gap-3">
          <Button asChild>
            <a href={CASE_STUDY.liveUrl} target="_blank" rel="noopener">
              Live site
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={CASE_STUDY.repoUrl} target="_blank" rel="noopener">
              GitHub repo
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={CASE_STUDY.launchPost} target="_blank" rel="noopener">
              Launch post
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="my-7 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(130px,1fr))]">
          {CASE_STUDY.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[rgba(255,120,110,0.15)] bg-gradient-to-[170deg] from-panel2 to-panel p-[18px]"
            >
              <b className="block font-display text-[26px]">{s.value}</b>
              <span className="text-[13px] text-soft">{s.label}</span>
            </div>
          ))}
        </div>

        {CASE_STUDY.blocks.map((block) => (
          <Reveal key={block.heading} className="my-9">
            <h2 className="mb-3 text-[clamp(24px,3vw,30px)] font-extrabold">{block.heading}</h2>
            {"paragraphs" in block &&
              block.paragraphs.map((p, i) => (
                <p key={i} className="m-0 text-base leading-[1.7] text-soft">
                  {p}
                </p>
              ))}
            {"list" in block && (
              <ul className="list-disc pl-5 text-base leading-[1.8] text-soft marker:text-accent">
                {block.list.map((item) => (
                  <li key={item} className="mb-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}

        <Reveal className="my-9">
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to portfolio
            </Link>
          </Button>
        </Reveal>
      </div>
    </main>
  );
}
