import { Copy, Globe, Mail, Swords } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useToast } from "@/components/Toast";
import { SITE } from "@/data/portfolio";

const MAILTO = `mailto:${SITE.email}?subject=Internship%20%2F%20Project%20Opportunity%20for%20Khalid%20Bin%20Masud`;

export function Contact() {
  const { copy } = useToast();

  return (
    <section id="contact" className="relative overflow-x-clip py-10">
      <span className="orb left-0 top-[10px] size-[180px] bg-[#8f1d14]" aria-hidden="true" />
      <span className="orb bottom-0 right-0 size-[170px] bg-[#d9261c]" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-[rgba(255,120,110,0.32)] bg-[radial-gradient(700px_320px_at_50%_-10%,rgba(238,52,40,0.28),transparent_65%),linear-gradient(180deg,#150d0e,#0e090a)] px-[clamp(30px,5vw,56px)] py-[clamp(30px,5vw,56px)] text-center">
          <span className="sec-tag inline-flex justify-center">06 — Contact</span>
          <h2 className="mt-[14px] text-[clamp(30px,4.6vw,48px)] font-extrabold">
            Looking for an intern
            <br />
            who actually ships?
          </h2>
          <p className="mx-auto mt-[14px] max-w-[56ch] text-[16.5px] text-soft">
            I&apos;m looking for an internship or a project collaborator. Send a message and I&apos;ll reply
            by email — or find me on GitHub and LinkedIn.
          </p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={MAILTO}>
                <Mail className="size-4" aria-hidden="true" />
                {SITE.email}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => copy(SITE.email)}
              className="transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Copy className="size-4" aria-hidden="true" />
              Copy email
            </Button>
          </div>
          <div className="mt-[26px] flex flex-wrap justify-center gap-2.5">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(0,0,0,0.25)] px-[17px] py-2.5 text-sm font-extrabold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,120,110,0.32)] hover:bg-[rgba(255,96,84,0.13)]"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(0,0,0,0.25)] px-[17px] py-2.5 text-sm font-extrabold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,120,110,0.32)] hover:bg-[rgba(255,96,84,0.13)]"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={SITE.codeforces}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(0,0,0,0.25)] px-[17px] py-2.5 text-sm font-extrabold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,120,110,0.32)] hover:bg-[rgba(255,96,84,0.13)]"
            >
              <Swords className="size-4" aria-hidden="true" />
              Codeforces
            </a>
            <a
              href={SITE.previousPortfolio}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(0,0,0,0.25)] px-[17px] py-2.5 text-sm font-extrabold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,120,110,0.32)] hover:bg-[rgba(255,96,84,0.13)]"
            >
              <Globe className="size-4" aria-hidden="true" />
              Previous portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,120,110,0.15)] pb-10 pt-[30px] text-[13.8px] text-faint">
      <div className="wrap flex flex-wrap items-center justify-between gap-3.5 pr-16">
        <span>© 2026 Khalid Bin Masud · CSE, Presidency University · Dhaka, Bangladesh</span>
        <span>
          Built with React, TypeScript &amp; Tailwind CSS ·{" "}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer border-0 bg-transparent p-0 font-bold text-soft underline-offset-2 hover:text-white hover:underline"
          >
            Back to top ↑
          </button>
        </span>
      </div>
    </footer>
  );
}
