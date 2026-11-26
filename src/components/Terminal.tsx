import { useEffect, useRef, useState } from "react";
import { TERMINAL_COMMANDS } from "@/data/portfolio";

type TermLine = { text: string; kind: "out" | "cmd" | "dim" };

const PROMPT = "khalid@portfolio:~$ ";
const CHIPS = ["help", "skills", "projects", "contact", "whoami"] as const;

export function Terminal() {
  const [lines, setLines] = useState<TermLine[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const print = (text: string, kind: TermLine["kind"] = "out") => {
    setLines((prev) => [...prev, { text, kind }]);
  };

  const runCmd = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    print(`${PROMPT}${cmd}`, "cmd");
    const c = cmd.toLowerCase();
    if (c === "clear") {
      setLines([]);
      return;
    }
    if (TERMINAL_COMMANDS[c]) {
      print(TERMINAL_COMMANDS[c]);
    } else {
      print(`command not found: ${c} — type 'help' for the list.`, "dim");
    }
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    print("Welcome to Khalid's portfolio terminal. Type 'help' to begin.", "dim");
    if (reduce) {
      print(`${PROMPT}help`, "cmd");
      print(TERMINAL_COMMANDS.help);
      return;
    }
    let di = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        di += 1;
        setInput("help".slice(0, di));
        if (di >= 4) {
          window.clearInterval(interval);
          setInput("");
          runCmd("help");
        }
      }, 90);
    }, 900);
    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-[22px] border border-[rgba(255,120,110,0.32)] bg-gradient-to-b from-[#150d0e] to-[#0e090a] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_90px_rgba(238,52,40,0.16)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="relative flex items-center gap-2 border-b border-[rgba(255,120,110,0.15)] px-4 py-[13px]">
        <i className="block size-[11px] rounded-full bg-[#ff5f45]" aria-hidden="true" />
        <i className="block size-[11px] rounded-full bg-[#ffb84d]" aria-hidden="true" />
        <i className="block size-[11px] rounded-full bg-[#3ddc97]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-soft">khalid@portfolio — zsh</span>
      </div>
      <div className="relative overflow-x-auto px-5 pb-6 pt-5 font-mono text-[13.8px] leading-[1.85]">
        <div className="whitespace-pre-wrap break-words">
          {lines.map((line, i) => (
            <div
              key={i}
              className={
                line.kind === "dim"
                  ? "text-faint"
                  : line.kind === "cmd"
                    ? "text-ink"
                    : "text-ink"
              }
            >
              {line.kind === "cmd" ? (
                <>
                  <span className="text-gold">{PROMPT}</span>
                  {line.text.slice(PROMPT.length)}
                </>
              ) : (
                line.text
              )}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="flex-none font-bold text-accent">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const v = input;
                setInput("");
                runCmd(v);
              }
            }}
            className="min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-[13.8px] leading-[1.85] text-white outline-none"
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal input — type a command and press Enter"
          />
        </div>
      </div>
      <div className="relative flex flex-wrap gap-2 px-5 pb-5">
        <span className="chip">try:</span>
        {CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => runCmd(chip)}
            className="chip cursor-pointer transition-colors hover:bg-[rgba(238,52,40,0.24)]"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
