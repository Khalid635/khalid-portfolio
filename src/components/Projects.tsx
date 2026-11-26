import { useState } from "react";
import { ArrowUpRight, Copy, KeyRound, Lock, Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@ui-sdk/react/dialog";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useToast } from "@/components/Toast";
import { PROJECTS, type Project, type ProjectCategory } from "@/data/portfolio";

type Filter = "all" | ProjectCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "ai", label: "AI" },
  { value: "live", label: "Live sites" },
  { value: "opensource", label: "Open source" },
];

function filtered(filter: Filter): Project[] {
  if (filter === "all") return PROJECTS;
  return PROJECTS.filter((p) => p.categories.includes(filter));
}

function SaveClipVisual() {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-center gap-3.5 px-[26px] pb-[26px] pt-[58px]"
      style={{
        background:
          "radial-gradient(600px 300px at 80% 0%, rgba(238,52,40,0.14), transparent 60%), linear-gradient(160deg, #140b0c, #0a0607)",
      }}
    >
      <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-[13px] border border-[rgba(255,120,110,0.32)] bg-[rgba(255,255,255,0.05)] px-[14px] py-3 font-mono text-[12.8px] text-[#e3d5d1]">
        <span className="overflow-hidden text-ellipsis">youtube.com/watch?v=…</span>
        <span className="ml-auto flex-none rounded-lg bg-accent px-3 py-1.5 font-sans text-[12.5px] font-extrabold text-white">
          Fetch
        </span>
      </div>
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        <span className="rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(255,96,84,0.08)] px-[11px] py-1.5 text-[#f0dcd8]">
          Paste link
        </span>
        <b className="self-center text-accent">→</b>
        <span className="rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(255,96,84,0.08)] px-[11px] py-1.5 text-[#f0dcd8]">
          Preview &amp; formats
        </span>
        <b className="self-center text-accent">→</b>
        <span className="rounded-full border border-[rgba(255,120,110,0.15)] bg-[rgba(255,96,84,0.08)] px-[11px] py-1.5 text-[#f0dcd8]">
          Download
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onPreview,
}: {
  project: Project;
  onPreview: (p: Project) => void;
}) {
  const { copy } = useToast();
  const mediaTag = (
    <span className="chip absolute left-[14px] top-[14px] z-[2] bg-[rgba(13,16,34,0.85)]">
      {project.id === "dovira" || project.id === "swift-logistics" ? (
        <Star className="size-3 fill-current" aria-hidden="true" />
      ) : null}
      {project.mediaTag}
    </span>
  );

  return (
    <article
      className={`grid overflow-hidden rounded-3xl border border-[rgba(255,120,110,0.15)] bg-panel transition-[border-color,transform] duration-200 hover:border-[rgba(255,120,110,0.32)] ${
        project.alt ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
      }`}
    >
      <div
        className={`relative bg-[#120a0b] ${project.alt ? "lg:order-2" : ""} ${
          project.image ? "" : "min-h-[380px] max-lg:min-h-[320px]"
        }`}
      >
        {mediaTag}
        {project.image ? (
          <button
            type="button"
            onClick={() => onPreview(project)}
            className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
            aria-label={`View ${project.title} screenshot larger`}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={800}
              loading="lazy"
              className="h-auto w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:scale-[1.04]"
            />
          </button>
        ) : (
          <SaveClipVisual />
        )}
      </div>

      <div className="flex flex-col px-[30px] pb-[26px] pt-[30px] max-sm:px-5 max-sm:pb-[22px] max-sm:pt-6">
        <span className="mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-peach">
          {project.kind}
        </span>
        <h3 className="text-[26px] font-extrabold">{project.title}</h3>
        <p className="mt-2.5 text-[15.5px] text-soft">{project.description}</p>
        <ul className="mt-[18px] grid list-none gap-[9px] p-0">
          {project.features.map((f) => (
            <li key={f} className="relative pl-[26px] text-[14.8px] text-[#e3d5d1]">
              <span className="absolute left-1 font-bold text-peach" aria-hidden="true">
                ▸
              </span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-[7px]">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        {project.metrics && (
          <div className="mt-4 flex flex-wrap gap-x-3.5 gap-y-2 font-mono text-[12.5px] text-soft">
            {project.metrics.map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5">
                <span className="size-[5px] rounded-full bg-accent" aria-hidden="true" />
                {m}
              </span>
            ))}
          </div>
        )}
        {project.demoLogin && (
          <div className="mt-[18px] flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[13px] border border-dashed border-[rgba(255,120,110,0.45)] bg-[rgba(238,52,40,0.06)] px-[14px] py-3 text-[13.8px] text-[#f3d9d4]">
            <span className="inline-flex items-center gap-1.5 font-bold">
              <KeyRound className="size-4" aria-hidden="true" />
              Demo login:
            </span>
            <code className="font-mono text-[13px] text-[#ffb59d]">{project.demoLogin.user}</code>
            <code className="font-mono text-[13px] text-[#ffb59d]">{project.demoLogin.pass}</code>
            <button
              type="button"
              onClick={() => copy(`${project.demoLogin!.user} / ${project.demoLogin!.pass}`)}
              className="ml-auto inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[rgba(255,120,110,0.4)] bg-[rgba(238,52,40,0.14)] px-3 py-1.5 text-[12.5px] font-extrabold text-[#ffb59d] transition-colors hover:bg-[rgba(238,52,40,0.24)]"
            >
              <Copy className="size-3.5" aria-hidden="true" />
              Copy login
            </button>
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-[rgba(255,120,110,0.15)] pt-5">
          {project.liveUrl && (
            <Button asChild size="sm" className="transition-transform duration-200 hover:-translate-y-px">
              <a href={project.liveUrl} target="_blank" rel="noopener">
                {project.liveLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="sm" variant="outline" className="transition-transform duration-200 hover:-translate-y-px">
              <a href={project.repoUrl} target="_blank" rel="noopener">
                GitHub repo
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          )}
          {project.caseStudy && (
            <Button asChild size="sm" variant="ghost" className="transition-transform duration-200 hover:-translate-y-px">
              <Link to="/case-study-dovira">Case study →</Link>
            </Button>
          )}
          {project.note && (
            <span className="chip self-center">
              <Lock className="size-3.5" aria-hidden="true" />
              {project.note}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [preview, setPreview] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative overflow-x-clip py-10 pt-10">
      <span className="orb right-0 top-[30px] size-[220px] bg-[#d9261c]" aria-hidden="true" />
      <span className="orb bottom-[120px] left-0 size-[120px] bg-[#ff6a55] opacity-[0.38]" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">02 — Flagship deployments</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            Flagship
            <br />
            Deployments.
          </h2>
          <p className="m-0 text-[16.5px] text-soft">
            Five real projects — not tutorial clones. Three live sites you can open right now, and most are open
            source on GitHub with full READMEs.
          </p>
        </Reveal>

        <Tabs defaultValue="all">
          <TabsList className="flex flex-wrap gap-2" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <TabsTab
                key={f.value}
                value={f.value}
                className="cursor-pointer rounded-full border border-[rgba(255,120,110,0.32)] bg-[rgba(255,96,84,0.06)] px-4 py-2 text-[13.5px] font-bold text-soft transition-colors duration-200 hover:bg-[rgba(255,96,84,0.16)] hover:text-white aria-selected:border-transparent aria-selected:bg-accent aria-selected:text-white"
              >
                {f.label}
              </TabsTab>
            ))}
          </TabsList>
          {FILTERS.map((f) => (
            <TabsPanel key={f.value} value={f.value} className="mt-8">
              <div className="grid gap-[26px]">
                {filtered(f.value).map((project) => (
                  <ProjectCard key={project.id} project={project} onPreview={setPreview} />
                ))}
              </div>
            </TabsPanel>
          ))}
        </Tabs>
      </div>

      <Dialog
        open={preview !== null}
        onOpenChange={(open) => {
          if (!open) setPreview(null);
        }}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/70" />
        <DialogContent
          className="fixed left-1/2 top-1/2 z-[70] m-0 max-h-[90vh] w-[min(900px,calc(100%-24px))] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-3xl border border-[rgba(255,120,110,0.32)] bg-panel2 p-0 shadow-[0_30px_80px_rgba(0,0,0,0.6)] outline-none"
          aria-label={preview ? `${preview.title} — screenshot` : "Project screenshot"}
        >
          {preview && (
            <>
              <div className="relative">
                <img src={preview.image ?? ""} alt={preview.imageAlt} className="h-auto w-full" />
                <DialogClose
                  aria-label="Close"
                  className="absolute right-3 top-3 grid size-10 cursor-pointer place-items-center rounded-full border border-[rgba(255,120,110,0.32)] bg-[rgba(6,4,5,0.85)] text-white transition-colors hover:bg-accent"
                >
                  <X className="size-5" aria-hidden="true" />
                </DialogClose>
              </div>
              <div className="px-6 pb-6 pt-5">
                <DialogTitle className="text-2xl font-extrabold">{preview.title}</DialogTitle>
                <DialogDescription className="mt-2 text-[15px] leading-relaxed text-soft">
                  {preview.description}
                </DialogDescription>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {preview.liveUrl && (
                    <Button asChild size="sm">
                      <a href={preview.liveUrl} target="_blank" rel="noopener">
                        {preview.liveLabel}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                  {preview.repoUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={preview.repoUrl} target="_blank" rel="noopener">
                        GitHub repo
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                  {preview.caseStudy && (
                    <Button asChild size="sm" variant="ghost">
                      <Link to="/case-study-dovira">Case study →</Link>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
