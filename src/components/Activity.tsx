import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/portfolio";

export function Activity() {
  return (
    <section id="activity" className="relative overflow-x-clip py-10">
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">GitHub activity</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            Shipping,
            <br />
            week after week.
          </h2>
          <p className="m-0 text-[16.5px] text-soft">
            Every square is a day I pushed code — open-source work, bug fixes and new features, mostly
            after classes.
          </p>
        </Reveal>
        <Reveal className="rounded-3xl border border-[rgba(255,120,110,0.15)] bg-gradient-to-[170deg] from-panel2 to-panel p-7 max-sm:p-[18px]">
          <img
            src="https://ghchart.rshah.org/e63946/Khalid635"
            alt="Khalid Bin Masud's GitHub contribution calendar"
            loading="lazy"
            className="h-auto w-full max-w-[760px]"
          />
          <div className="mt-5 flex flex-wrap items-center gap-3.5">
            <Button asChild size="sm">
              <a href={SITE.github} target="_blank" rel="noopener">
                <GithubIcon className="size-4" />
                GitHub profile
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <span className="text-[13.5px] text-soft">Live from GitHub — updates every day.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
