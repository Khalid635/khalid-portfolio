import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastValue = {
  showToast: (msg: string) => void;
  copy: (text: string) => void;
};

const ToastContext = createContext<ToastValue>({
  showToast: () => {},
  copy: () => {},
});

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMessage(null), 2200);
  }, []);

  const copy = useCallback(
    (text: string) => {
      const done = () => showToast(`Copied: ${text}`);
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => showToast(text));
      } else {
        showToast(text);
      }
    },
    [showToast],
  );

  return (
    <ToastContext.Provider value={{ showToast, copy }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        aria-hidden={message === null}
        className="pointer-events-none fixed bottom-6 left-1/2 z-[80] rounded-full border border-[rgba(255,120,110,0.32)] bg-[#2a1214] px-5 py-3 text-sm font-extrabold text-white shadow-2xl transition-all duration-300"
        style={{
          transform: `translate(-50%, ${message ? "0" : "80px"})`,
          opacity: message ? 1 : 0,
        }}
      >
        {message ?? "Copied ✓"}
      </div>
    </ToastContext.Provider>
  );
}
