import { MapPin } from "lucide-react";
import municipalities from "@/data/municipalities";

export default function ServiceAreaSection() {
  return (
    <section
      className="section-pad bg-white"
      aria-labelledby="service-area-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#0274be] text-sm font-semibold uppercase tracking-widest mb-3">
            Coverage
          </p>
          <h2
            id="service-area-heading"
            className="text-[#0f1117] mb-5"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            We Serve the Greater Toronto Area
          </h2>
          <div className="divider-brand mx-auto mb-5" />
          <p
            className="text-[#0f1117]/60 max-w-xl mx-auto"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            From Toronto to Barrie, Burlington to Oshawa — our crews cover the
            entire GTA and surrounding regions.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: municipality list */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} className="text-[#0055a5]" />
              <h3
                className="text-[#0f1117] font-semibold text-lg"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Communities We Serve
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
              {municipalities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-2 text-sm text-[#0f1117]/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0055a5] shrink-0" />
                  {city.name}
                </div>
              ))}
            </div>
            <p className="text-[#0f1117]/45 text-sm mt-6 italic">
              Not seeing your city? Give us a call — we may still service your area.
            </p>
          </div>

          {/* Right: map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#f0f2f5]">
            <iframe
              title="Can Do Fence & Deck Service Area — Greater Toronto Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368831.1539654088!2d-79.9165545!3d43.8555305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
