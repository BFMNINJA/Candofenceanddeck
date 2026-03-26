import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/fences", label: "Fence Styles" },
  { href: "/decks", label: "Deck Styles" },
  { href: "/gates", label: "Gate Styles" },
  { href: "/gallery", label: "Project Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact Us" },
  { href: "/#quote", label: "Get a Free Quote" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0f1117] text-white/80 pt-16 pb-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo + tagline + address */}
          <div>
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex flex-col items-start leading-tight">
                <span
                  className="text-white font-bold text-2xl tracking-tight group-hover:text-[#0274be] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Can Do
                </span>
                <span className="text-[#0274be] text-xs font-semibold tracking-widest uppercase -mt-1">
                  Fence &amp; Deck
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              GTA's most trusted fence and deck builder since 1998. Proudly
              serving homeowners across the Greater Toronto Area with
              quality craftsmanship and the industry's best written
              warranty.
            </p>
            <div className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin
                size={16}
                className="mt-0.5 text-[#0274be] shrink-0"
              />
              <address className="not-italic leading-relaxed">
                5312 Bloomington Road East
                <br />
                Whitchurch-Stouffville, ON L4A 7X3
              </address>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#0274be] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0274be]/60 group-hover:bg-[#0274be] transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14166303325"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#0274be] transition-colors duration-200 group"
                >
                  <Phone
                    size={15}
                    className="text-[#0274be] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  (416) 630-3325 — Toronto
                </a>
              </li>
              <li>
                <a
                  href="tel:+19056423325"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#0274be] transition-colors duration-200 group"
                >
                  <Phone
                    size={15}
                    className="text-[#0274be] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  (905) 642-3325 — GTA
                </a>
              </li>
              <li>
                <a
                  href="tel:+18336303325"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#0274be] transition-colors duration-200 group"
                >
                  <Phone
                    size={15}
                    className="text-[#0274be] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  (833) 630-3325 — Toll Free
                </a>
              </li>
              <li>
                <a
                  href="mailto:alon@candofence.com"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#0274be] transition-colors duration-200 group"
                >
                  <Mail
                    size={15}
                    className="text-[#0274be] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  alon@candofence.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
                Business Hours
              </h4>
              <p className="text-white/50 text-sm">
                Monday – Friday: 8:00 AM – 6:00 PM
              </p>
              <p className="text-white/50 text-sm">
                Saturday: 9:00 AM – 4:00 PM
              </p>
              <p className="text-white/50 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Can Do Fence &amp; Deck. All
            rights reserved. Serving the GTA since 1998.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>WSIB Insured</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Licensed &amp; Bonded</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5-Year Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
