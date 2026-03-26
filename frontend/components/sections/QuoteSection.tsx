"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
};

export default function QuoteSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/08 border border-white/15 text-white placeholder-white/35 rounded-lg px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:border-[#0274be] focus:bg-white/12";
  const labelClass = "block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <section
      id="quote"
      className="section-pad bg-[#0f1117]"
      aria-labelledby="quote-heading"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Free Estimate
          </p>
          <h2
            id="quote-heading"
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Get Your Free Quote
          </h2>
          <div
            className="w-14 h-1 mx-auto mb-5 rounded-full"
            style={{ background: "linear-gradient(90deg, #0055a5, #0274be)" }}
          />
          <p className="text-white/55 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Fill out the form below and we&apos;ll get back to you within one
            business day. No obligation, no pressure — just an honest quote.
          </p>
        </div>

        {/* Success state */}
        {submitStatus === "success" ? (
          <div className="glass-card rounded-2xl p-10 text-center">
            <CheckCircle size={52} className="text-green-400 mx-auto mb-5" />
            <h3
              className="text-white font-bold text-2xl mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Quote Request Sent!
            </h3>
            <p className="text-white/65 mb-6">
              Thanks! We&apos;ll review your request and get back to you within one
              business day. You can also call us directly at{" "}
              <a
                href="tel:+14166303325"
                className="text-[#0274be] hover:text-white transition-colors"
              >
                (416) 630-3325
              </a>
              .
            </p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="text-[#0274be] text-sm font-semibold hover:text-white transition-colors underline underline-offset-2"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
          >
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className={inputClass}
                  {...register("firstName", { required: "Required" })}
                />
                {errors.firstName && (
                  <p className={errorClass}>{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  className={inputClass}
                  {...register("lastName", { required: "Required" })}
                />
                {errors.lastName && (
                  <p className={errorClass}>{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Contact row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(416) 555-0123"
                  className={inputClass}
                  {...register("phone", { required: "Required" })}
                />
                {errors.phone && (
                  <p className={errorClass}>{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={inputClass}
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Service type */}
            <div>
              <label htmlFor="serviceType" className={labelClass}>
                Service Needed *
              </label>
              <select
                id="serviceType"
                className={`${inputClass} cursor-pointer`}
                {...register("serviceType", { required: "Required" })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service...
                </option>
                <option value="Fence">Fence</option>
                <option value="Deck">Deck</option>
                <option value="Gate">Gate</option>
                <option value="Fence & Deck">Fence & Deck</option>
                <option value="Not Sure">Not Sure Yet</option>
              </select>
              {errors.serviceType && (
                <p className={errorClass}>{errors.serviceType.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Project Details
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project — size, style preferences, timeline, anything helpful..."
                className={`${inputClass} resize-none`}
                {...register("message")}
              />
            </div>

            {/* Error state */}
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                <AlertCircle size={16} />
                Something went wrong. Please try again or call us at (416) 630-3325.
              </div>
            )}

            {/* Submit */}
            {submitStatus === "loading" ? (
              <div className="w-full flex items-center justify-center gap-2 bg-[#0055a5] opacity-60 text-white font-semibold py-4 px-8 rounded-full cursor-not-allowed">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <AnimatedButton
                type="submit"
                variant="primary"
                className="w-full justify-center"
              >
                Send Quote Request
              </AnimatedButton>
            )}

            <p className="text-white/35 text-xs text-center">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
