"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, CheckCircle, AlertCircle } from "lucide-react";

const STORAGE_KEY_DISMISSED = "cando-quote-popup-dismissed-at";
const STORAGE_KEY_SUBMITTED = "cando-quote-popup-submitted";
const COOLDOWN_DAYS = 3;
const MIN_DELAY_MS = 10_000;
const FALLBACK_DELAY_MS = 30_000;
const SCROLL_THRESHOLD = 0.6;

type Status = "idle" | "loading" | "success" | "error";

function shouldSkipInitially(): boolean {
  if (typeof window === "undefined") return true;

  const submitted = localStorage.getItem(STORAGE_KEY_SUBMITTED);
  if (submitted === "true") return true;

  const dismissedAt = localStorage.getItem(STORAGE_KEY_DISMISSED);
  if (dismissedAt) {
    const cooldownMs = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
    const elapsed = Date.now() - parseInt(dismissedAt, 10);
    if (!Number.isNaN(elapsed) && elapsed < cooldownMs) return true;
  }
  return false;
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

function isQuoteSectionVisible(): boolean {
  if (typeof document === "undefined") return false;
  const el = document.getElementById("quote");
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export default function QuotePopup() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", phone: "", serviceType: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firedRef = useRef(false);

  // Mount gate for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Route-based exclusion: don't show on /contact at all
  const excludedRoute = pathname === "/contact";

  const openPopup = useCallback(() => {
    if (firedRef.current) return;
    if (isQuoteSectionVisible()) return; // user already looking at quote form
    firedRef.current = true;
    setOpen(true);
  }, []);

  // Arm triggers after min delay
  useEffect(() => {
    if (excludedRoute) return;
    if (shouldSkipInitially()) return;

    let exitHandler: ((e: MouseEvent) => void) | null = null;
    let scrollHandler: (() => void) | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const armTimer = setTimeout(() => {
      // After 10s, arm the triggers
      if (isMobile()) {
        // Mobile: scroll-based trigger
        scrollHandler = () => {
          const scrolled = window.scrollY + window.innerHeight;
          const total = document.documentElement.scrollHeight;
          if (total > 0 && scrolled / total >= SCROLL_THRESHOLD) {
            openPopup();
          }
        };
        window.addEventListener("scroll", scrollHandler, { passive: true });
      } else {
        // Desktop: exit-intent trigger
        exitHandler = (e: MouseEvent) => {
          // Mouse leaving the top of viewport indicates heading toward browser controls
          if (e.clientY <= 0) {
            openPopup();
          }
        };
        document.addEventListener("mouseleave", exitHandler);

        // Desktop also gets scroll fallback at 60%
        scrollHandler = () => {
          const scrolled = window.scrollY + window.innerHeight;
          const total = document.documentElement.scrollHeight;
          if (total > 0 && scrolled / total >= SCROLL_THRESHOLD) {
            openPopup();
          }
        };
        window.addEventListener("scroll", scrollHandler, { passive: true });
      }

      // Fallback timer (total = MIN_DELAY + FALLBACK)
      fallbackTimer = setTimeout(() => {
        openPopup();
      }, FALLBACK_DELAY_MS - MIN_DELAY_MS);
    }, MIN_DELAY_MS);

    return () => {
      clearTimeout(armTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (exitHandler) document.removeEventListener("mouseleave", exitHandler);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, [excludedRoute, openPopup]);

  // ESC key to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const handleDismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY_DISMISSED, String(Date.now()));
    } catch {
      // Storage unavailable - ignore
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.serviceType) e.serviceType = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Split name into firstName + lastName
    const parts = form.name.trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || "-";

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: form.phone,
          email: "",
          serviceType: form.serviceType,
          message: "Submitted via site-wide popup",
          source: "popup",
        }),
      });
      if (res.ok) {
        setStatus("success");
        try {
          localStorage.setItem(STORAGE_KEY_SUBMITTED, "true");
        } catch {
          // Ignore storage errors
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(15, 17, 23, 0.6)", backdropFilter: "blur(4px)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <motion.div
            key="popup-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <X size={18} />
            </button>

            {status === "success" ? (
              <div className="p-8 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h2
                  id="popup-title"
                  className="text-[#0f1117] text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Thanks - We&apos;ll Be In Touch
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  We&apos;ve received your request and will call you back within
                  one business day. Need us sooner?
                </p>
                <a
                  href="tel:+14166303325"
                  className="inline-flex items-center gap-2 bg-[#0055a5] text-white font-semibold px-5 py-3 rounded-full text-sm hover:bg-[#0274be] transition-colors"
                >
                  <Phone size={15} />
                  (416) 630-3325
                </a>
              </div>
            ) : (
              <>
                {/* Header */}
                <div
                  className="px-7 pt-7 pb-5 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0055a5 0%, #0274be 100%)",
                  }}
                >
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1.5">
                    Free Estimate
                  </p>
                  <h2
                    id="popup-title"
                    className="text-white text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Get a Free Quote
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Fill in 3 quick details - we&apos;ll call you back within
                    one business day.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-7 space-y-4">
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="block text-gray-700 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="popup-name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 text-[#0f1117] placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:border-[#0274be] focus:ring-2 focus:ring-[#0274be]/10"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="popup-phone"
                      className="block text-gray-700 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="popup-phone"
                      type="tel"
                      placeholder="(416) 555-0123"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 text-[#0f1117] placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:border-[#0274be] focus:ring-2 focus:ring-[#0274be]/10"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="popup-service"
                      className="block text-gray-700 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    >
                      Service Needed
                    </label>
                    <select
                      id="popup-service"
                      value={form.serviceType}
                      onChange={(e) =>
                        setForm({ ...form, serviceType: e.target.value })
                      }
                      className="w-full bg-white border border-gray-200 text-[#0f1117] rounded-lg px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:border-[#0274be] focus:ring-2 focus:ring-[#0274be]/10 cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <option value="Fence">Fence</option>
                      <option value="Deck">Deck</option>
                      <option value="Fence & Deck">Fence &amp; Deck</option>
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                      <AlertCircle size={15} />
                      Something went wrong. Please try calling us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#0055a5] text-white font-semibold py-3 rounded-full text-sm hover:bg-[#0274be] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Request My Free Quote"
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <p className="text-gray-400 text-xs mb-1.5">
                      Or call us directly:
                    </p>
                    <a
                      href="tel:+14166303325"
                      className="inline-flex items-center gap-1.5 text-[#0055a5] font-semibold text-sm hover:text-[#0274be] transition-colors"
                    >
                      <Phone size={14} />
                      (416) 630-3325
                    </a>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
