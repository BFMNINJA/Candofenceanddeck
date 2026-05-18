import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteSection from "@/components/sections/QuoteSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Can Do Fence & Deck for a free quote. Call (416) 630-3325 or fill out our online form. Serving the GTA since 1998.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Toronto Sales",
    value: "(416) 630-3325",
    href: "tel:+14166303325",
  },
  {
    icon: Phone,
    label: "GTA Customer Service",
    value: "(905) 642-3325",
    href: "tel:+19056423325",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@candofence.com",
    href: "mailto:sales@candofence.com",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "5312 Bloomington Road East, Whitchurch-Stouffville, ON L4A 7X3",
    href: "https://maps.google.com/?q=5312+Bloomington+Road+East+Whitchurch-Stouffville+ON",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 8am–6pm | Sat: 9am–4pm | Sun: Closed",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-center"
        style={{
          background: "linear-gradient(135deg, #0f1117 0%, #1e2330 60%, #0055a5 100%)",
        }}
      >
        <div className="relative z-10 px-4">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Get in Touch
          </h1>
          <p className="text-white/65 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Have a question or ready to get started? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact details + map */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: details */}
            <div>
              <h2
                className="text-[#0f1117] font-bold text-2xl mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Contact Information
              </h2>
              <div className="divider-brand mb-8" />

              <div className="space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0055a5]/08 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-[#0055a5]" />
                      </div>
                      <div>
                        <div className="text-[#0f1117]/50 text-xs font-semibold uppercase tracking-wide mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-[#0f1117] font-medium text-sm hover:text-[#0055a5] transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-[#0f1117] font-medium text-sm">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#f0f2f5]">
              <iframe
                title="Can Do Fence & Deck Head Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.0!2d-79.24!3d44.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDAwJzAwLjAiTiA3OcKwMTQnMjQuMCJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}
