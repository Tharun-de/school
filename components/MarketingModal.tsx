"use client";

import { useEffect, useMemo, useState } from "react";
import { siteContent } from "@/data/content";

type ShowOncePer = "session" | "day" | "always";

function shouldShow(dismissKey: string, showOncePer: ShowOncePer): boolean {
  if (typeof window === "undefined") return false;

  try {
    if (showOncePer === "always") return true;
    if (showOncePer === "session") {
      const dismissed = sessionStorage.getItem(dismissKey);
      return !dismissed;
    }
    const raw = localStorage.getItem(dismissKey);
    if (!raw) return true;
    const last = Number(raw);
    if (Number.isNaN(last)) return true;
    const oneDayMs = 24 * 60 * 60 * 1000;
    return Date.now() - last > oneDayMs;
  } catch {
    return true;
  }
}

function markDismissed(dismissKey: string, showOncePer: ShowOncePer) {
  try {
    if (showOncePer === "always") return; // do not persist dismissal
    if (showOncePer === "session") {
      sessionStorage.setItem(dismissKey, "1");
      return;
    }
    localStorage.setItem(dismissKey, String(Date.now()));
  } catch {}
}

export default function MarketingModal() {
  const cfg = siteContent.marketingModal;
  const [open, setOpen] = useState(false);

  const dismissKey = useMemo(() => cfg?.dismissKey || "marketing-modal-v1", [cfg?.dismissKey]);
  const showOncePer: ShowOncePer = (cfg?.showOncePer as ShowOncePer) || "session";

  useEffect(() => {
    if (!cfg?.enabled) return;
    if (!cfg?.src) return;
    if (showOncePer === "always") {
      setOpen(true);
      return;
    }
    const should = shouldShow(dismissKey, showOncePer);
    if (should) setOpen(true);
  }, [cfg?.enabled, cfg?.src, dismissKey, showOncePer]);

  const onClose = () => {
    setOpen(false);
    markDismissed(dismissKey, showOncePer);
  };

  if (!cfg?.enabled || !open) return null;

  const isPdf = cfg.type === "pdf" || (cfg.src && cfg.src.toLowerCase().endsWith(".pdf"));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />
      <div className="relative max-w-3xl w-[92vw] md:w-[80vw] lg:w-[60vw] bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          aria-label="Close marketing modal"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
        >
          ×
        </button>

        {isPdf ? (
          <div className="w-full h-[75vh]">
            <iframe
              src={cfg.src}
              title={cfg.title || "Promotional Poster"}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full max-h-[85vh] overflow-auto">
            {/* Use native img to avoid remote domain config; can switch to next/image if needed */}
            <img
              src={cfg.src}
              alt={cfg.title || "Promotional Poster"}
              className="w-full h-auto block"
            />
          </div>
        )}
      </div>
    </div>
  );
}


