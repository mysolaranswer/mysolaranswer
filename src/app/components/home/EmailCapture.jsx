"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center gap-3 py-4 px-6 rounded-2xl bg-green-50 border border-green-200 text-center">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
          <p className="text-green-800 font-semibold text-base">{message}</p>
          <p className="text-green-600 text-sm">We'll notify you the moment we launch.</p>
        </div>
      </div>
    );
  }

  // ── Form state ────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            id="email-subscribe"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // Clear error as soon as they start typing again
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email"
            required
            disabled={status === "loading"}
            aria-label="Email address"
            className={`
              flex-grow px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all
              placeholder:text-gray-400 text-[var(--color-navy)] bg-white
              focus:ring-2 focus:ring-[var(--color-amber)]/40 focus:border-[var(--color-amber)]
              disabled:opacity-60 disabled:cursor-not-allowed
              ${status === "error" 
                ? "border-red-300 focus:ring-red-200 focus:border-red-400" 
                : "border-gray-200 hover:border-gray-300"
              }
            `}
          />
          <button
            type="submit"
            disabled={status === "loading" || !email.trim()}
            className="
              px-6 py-3 rounded-xl bg-[var(--color-amber)] text-[var(--color-black)] label
              hover:opacity-90 active:scale-95 transition-all
              disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100
              flex items-center justify-center gap-2 whitespace-nowrap
              min-w-[130px] shadow-sm
            "
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Notify Me"
            )}
          </button>
        </div>

        {/* Error message */}
        {status === "error" && message && (
          <div className="mt-2.5 flex items-center gap-2 text-red-600 text-xs font-medium px-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {message}
          </div>
        )}

        <p className="mt-3 text-center text-gray-400 text-xs">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
