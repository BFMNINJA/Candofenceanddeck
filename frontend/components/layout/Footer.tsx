import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/fences", label: "Fence Styles" },
  { href: "/decks", label: "Deck Styles" },
  { href: "/gallery", label: "Project Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#1a1f2e] text-white/80 pt-16 pb-6"
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
              GTA&apos;s most trusted fence and deck builder since 1998. Proudly
              serving homeowners across the Greater Toronto Area with quality
              craftsmanship and the industry&apos;s best written warranty.
            </p>
            <div className="flex items-start gap-2.5 text-sm text-white/60 mb-5">
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
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0274be] transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0274be] transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
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
                  (416) 630-3325 - Toronto
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
                  (905) 642-3325 - GTA
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@candofence.com"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#0274be] transition-colors duration-200 group"
                >
                  <Mail
                    size={15}
                    className="text-[#0274be] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  sales@candofence.com
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
