export interface GateProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated" | "Cedar" | "Iron" | "Mixed";
  description: string;
  badge?: string;
  imageUrl: string;
}

const gates: GateProduct[] = [
  {
    id: "gate-1",
    name: "Gate Style 1 — Single Walk Gate",
    slug: "single-walk-gate",
    material: "Pressure Treated",
    description:
      "A classic single-door walk-through gate perfectly matched to our pressure-treated fence styles. Built with the same quality materials as the fence line for a seamless, uniform appearance. Includes heavy-duty hinges and a secure latch.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "gate-2",
    name: "Gate Style 2 — Double Drive Gate",
    slug: "double-drive-gate",
    material: "Pressure Treated",
    description:
      "A wide double-door drive gate providing full vehicle access to your property. Built from heavy-duty pressure-treated lumber with reinforced cross-bracing to prevent sagging over time. Ideal for driveways up to 10 feet wide.",
    badge: "Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "gate-3",
    name: "Gate Style 3 — Arched Walk Gate",
    slug: "arched-walk-gate",
    material: "Cedar",
    description:
      "An elegant arched-top cedar walk gate that adds a distinctive, welcoming entry to your property. The graceful arch is hand-crafted by our skilled carpenters for a refined, high-end look that complements cedar fence lines.",
    badge: "Elegant",
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
  {
    id: "gate-4",
    name: "Gate Style 4 — Lattice Top Gate",
    slug: "lattice-top-gate",
    material: "Pressure Treated",
    description:
      "Matching our popular lattice-top fence style, this gate features a solid privacy base with a decorative lattice panel at the top. A charming entry point that maintains visual continuity with your fence.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
  },
  {
    id: "gate-5",
    name: "Gate Style 5 — Scallop Top Gate",
    slug: "scallop-top-gate",
    material: "Pressure Treated",
    description:
      "A decorative scallop-top gate that pairs perfectly with our scallop fence styles. The flowing curved top profile adds visual interest and charm to your property entrance. Includes corrosion-resistant hardware.",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "gate-6",
    name: "Gate Style 6 — Board-on-Board Gate",
    slug: "board-on-board-gate",
    material: "Pressure Treated",
    description:
      "A two-sided board-on-board gate offering complete privacy from both inside and outside the property. Alternating overlapping boards ensure no sight lines through the gate. Matches our board-on-board fence style seamlessly.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "gate-7",
    name: "Gate Style 7 — Heavy Duty I-BEAM Gate",
    slug: "heavy-duty-ibeam-gate",
    material: "Mixed",
    description:
      "A premium heavy-duty gate built with I-beam steel posts and pressure-treated wood panels. Engineered for maximum strength and longevity — ideal for high-traffic entrances, commercial properties, or large double-gate spans.",
    badge: "Heavy Duty",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "gate-8",
    name: "Gate Style 8 — Cedar Privacy Gate",
    slug: "cedar-privacy-gate",
    material: "Cedar",
    description:
      "A full-height cedar privacy gate with a flat or dog-ear top. The natural beauty of western red cedar makes this gate a standout feature. Left natural or finished with a stain of your choice to match your fence.",
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
  {
    id: "gate-iron-insert-single",
    name: "Gate with Iron Insert — Single",
    slug: "iron-insert-single",
    material: "Mixed",
    description:
      "A single walk gate combining a pressure-treated or cedar frame with a decorative wrought iron insert panel. The iron insert adds security and ornate visual interest, creating a truly premium entrance to your property.",
    badge: "Decorative",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
  },
  {
    id: "gate-iron-insert-double",
    name: "Gate with Iron Insert — Double",
    slug: "iron-insert-double",
    material: "Mixed",
    description:
      "A grand double-door gate with decorative iron insert panels. Perfect for estate properties, upscale homes, or anyone wanting to make a powerful first impression. The combination of wood and iron is both timeless and strong.",
    badge: "Grand",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "gate-iron-insert-arched",
    name: "Gate with Iron Insert — Arched Double",
    slug: "iron-insert-arched-double",
    material: "Mixed",
    description:
      "The pinnacle of gate design — an arched double gate with ornate iron insert panels. Hand-crafted for clients who want a truly one-of-a-kind entrance. A masterpiece that defines the character of a property.",
    badge: "Signature",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export default gates;
