import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section id="showreel" className="relative overflow-x-clip py-10">
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="sec-tag">Showreel</span>
          <h2 className="mb-3 mt-[14px] text-[clamp(32px,4.4vw,46px)] font-extrabold">
            Four projects,
            <br />
            sixteen seconds.
          </h2>
          <p className="m-0 text-[16.5px] text-soft">
            A quick tour of the shipped work — DOVIRA, Hisab AI, RAG Web and Swift Logistics.
          </p>
        </Reveal>
        <Reveal>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="/images/showreel-poster.jpg"
            aria-label="Showreel — a 16 second tour of Khalid Bin Masud's projects"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="h-auto w-full rounded-3xl border border-[rgba(255,120,110,0.15)] bg-black"
          >
            <source src="/images/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag. The project screenshots are shown in the
            Projects section above.
          </video>
          <div className="mt-4 flex justify-start">
            <button
              type="button"
              onClick={toggle}
              aria-pressed={playing}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(255,120,110,0.32)] bg-[rgba(255,96,84,0.07)] px-4 py-2 text-sm font-extrabold text-ink transition-colors hover:bg-[rgba(255,96,84,0.15)]"
            >
              {playing ? (
                <Pause className="size-4" aria-hidden="true" />
              ) : (
                <Play className="size-4" aria-hidden="true" />
              )}
              {playing ? "Pause showreel" : "Play showreel"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
