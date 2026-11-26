import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogContent, DialogTitle, DialogTrigger } from "@ui-sdk/react/dialog";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/data/portfolio";

const SECTION_IDS = ["about", "projects", "skills", "credentials", "journey", "contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActive("");
      return;
    }
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-140px 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [onHome]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-[3px] bg-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-[rgba(255,120,110,0.15)] bg-[rgba(7,4,5,0.78)] backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 font-extrabold no-underline" aria-label="Khalid Bin Masud — home">
            <span className="grid size-[38px] place-items-center rounded-[11px] bg-accent font-mono text-sm font-bold text-white shadow-[0_8px_26px_rgba(238,52,40,0.5)]">
              KM
            </span>
            <span className="leading-tight">
              <span className="block text-[16.5px]">Khalid Bin Masud</span>
              <small className="block text-[11.5px] font-semibold tracking-[0.04em] text-soft">
                FULL-STACK DEVELOPER
              </small>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className={`rounded-full px-[13px] py-2 text-sm font-bold no-underline transition-colors duration-200 ${
                  active === link.id
                    ? "bg-[rgba(255,96,84,0.14)] text-white"
                    : "text-soft hover:bg-[rgba(255,96,84,0.14)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button asChild size="sm" className="hidden transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex">
              <a href={SITE.github} target="_blank" rel="noopener">
                <GithubIcon className="size-4" />
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </Button>

            <Dialog open={menuOpen} onOpenChange={(open) => setMenuOpen(open)}>
              <DialogTrigger
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="grid size-[42px] place-items-center rounded-[10px] border border-[rgba(255,120,110,0.32)] bg-transparent text-white lg:hidden"
              >
                {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
              </DialogTrigger>
              <DialogBackdrop className="fixed inset-0 bg-black/60" />
              <DialogContent
                className="fixed inset-x-3 top-[72px] z-[70] m-0 w-auto rounded-2xl border border-[rgba(255,120,110,0.15)] bg-panel2 p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.55)] outline-none lg:hidden"
                aria-label="Menu"
              >
                <DialogTitle className="sr-only">Menu</DialogTitle>
                <nav className="flex flex-col" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.id}
                      to={`/#${link.id}`}
                      onClick={closeMenu}
                      className="rounded-xl px-3.5 py-3 text-sm font-bold text-soft no-underline hover:bg-[rgba(255,96,84,0.14)] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener"
                    className="mt-1 flex items-center gap-2 rounded-xl bg-accent px-3.5 py-3 text-sm font-bold text-white no-underline"
                  >
                    <GithubIcon className="size-4" />
                    GitHub ↗
                  </a>
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[18px] right-[18px] z-50 grid size-[46px] cursor-pointer place-items-center rounded-full border border-[rgba(255,120,110,0.32)] bg-[rgba(21,13,14,0.92)] text-white shadow-[0_14px_34px_rgba(0,0,0,0.5)]"
        >
          <ArrowUp className="size-[18px]" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
