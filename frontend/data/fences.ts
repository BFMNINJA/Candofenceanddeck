export interface FenceProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated" | "Cedar";
  description: string;
  badge?: string;
  imageUrl: string;
}

const fences: FenceProduct[] = [
  // ===== BROWN PRESSURE TREATED =====
  {
    id: "pt-lattice-top",
    name: "Traditional Lattice Top",
    slug: "traditional-lattice-top",
    material: "Pressure Treated",
    description:
      "A timeless classic featuring an elegant lattice top panel above solid privacy boards. Adds charm and character to any property while maintaining full privacy at the base.",
    badge: "Classic",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "pt-simple-economical",
    name: "Simple Economical",
    slug: "simple-economical",
    material: "Pressure Treated",
    description:
      "Clean, straightforward privacy fencing at the best value. Straight-cut boards deliver a neat, uniform look that suits any yard. Perfect for budget-conscious homeowners who don't want to compromise on quality.",
    badge: "Best Value",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "pt-scallop-top",
    name: "Scallop Top",
    slug: "scallop-top",
    material: "Pressure Treated",
    description:
      "A graceful scalloped profile along the top creates a flowing, decorative silhouette. This style adds visual interest and curb appeal while maintaining full privacy.",
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
  {
    id: "pt-privacy-style",
    name: "Privacy Style",
    slug: "privacy-style",
    material: "Pressure Treated",
    description:
      "Maximum privacy with a clean, flat top edge. Boards are tightly fitted for a solid barrier. Ideal for yards bordering busy streets or neighbours where complete privacy is the priority.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "pt-featured-fence",
    name: "Featured Fence",
    slug: "featured-fence",
    material: "Pressure Treated",
    description:
      "Our premium pressure-treated signature style — combining solid privacy boards with decorative post caps and a refined finish. A step above the standard, this fence makes a statement.",
    badge: "Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "pt-private-scallop",
    name: "Privacy + Scallop",
    slug: "privacy-scallop",
    material: "Pressure Treated",
    description:
      "The best of both worlds — full privacy boards at the base with a graceful scalloped top profile. A beautiful balance of function and aesthetics for any residential property.",
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
  {
    id: "pt-ibeam-heavy-duty",
    name: "I-BEAM Heavy Duty",
    slug: "ibeam-heavy-duty",
    material: "Pressure Treated",
    description:
      "Engineered for maximum strength and longevity. Uses I-beam style steel posts with pressure-treated boards for a fence that stands up to the harshest GTA winters and strongest winds.",
    badge: "Heavy Duty",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
  },
  {
    id: "pt-board-on-board",
    name: "Board-on-Board",
    slug: "board-on-board",
    material: "Pressure Treated",
    description:
      "Alternating overlapping boards on both sides create a fully opaque fence that looks identical from both sides. A neighbourly choice that provides complete privacy from every angle.",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },

  // ===== CEDAR =====
  {
    id: "cedar-fence-a",
    name: "Cedar Fence A",
    slug: "cedar-fence-a",
    material: "Cedar",
    description:
      "Natural western red cedar with a classic straight-cut top. Cedar's natural oils resist rot and insects without chemical treatment, offering a beautiful, aromatic, and eco-friendly fencing option.",
    badge: "Natural",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "cedar-fence-b",
    name: "Cedar Fence B",
    slug: "cedar-fence-b",
    material: "Cedar",
    description:
      "Cedar privacy fence with a decorative dog-ear top profile. The warm, honey-brown tone of fresh cedar adds natural warmth and elegance to your outdoor living space.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "cedar-fence-c",
    name: "Cedar Fence C",
    slug: "cedar-fence-c",
    material: "Cedar",
    description:
      "A cedar scallop-top style fence that blends natural beauty with a flowing decorative silhouette. The natural grain of cedar makes each panel unique, giving your yard a one-of-a-kind look.",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "cedar-fence-d",
    name: "Cedar Fence D",
    slug: "cedar-fence-d",
    material: "Cedar",
    description:
      "Cedar board-on-board design offering complete two-sided privacy. The natural texture and colour variation of cedar boards creates a rich, premium appearance that improves with age.",
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
  {
    id: "cedar-fence-e",
    name: "Cedar Fence E",
    slug: "cedar-fence-e",
    material: "Cedar",
    description:
      "Shadowbox cedar fencing with alternating boards creating a light, open feel while maintaining privacy. Air circulates freely between boards, extending the life of the fence.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
  },
  {
    id: "cedar-fence-f",
    name: "Cedar Fence F",
    slug: "cedar-fence-f",
    material: "Cedar",
    description:
      "Horizontal cedar slat fence — a modern, architectural look that complements contemporary homes. Clean lines and premium cedar combine for a fence that is as much art as function.",
    badge: "Modern",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "cedar-fence-g",
    name: "Cedar Fence G",
    slug: "cedar-fence-g",
    material: "Cedar",
    description:
      "Cedar lattice-top privacy fence combining a solid privacy base with an open cedar lattice top section. The lattice allows light and air flow while adding a decorative garden aesthetic.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "cedar-fence-h",
    name: "Cedar Fence H",
    slug: "cedar-fence-h",
    material: "Cedar",
    description:
      "Premium cedar with routed post details and a flat top. A polished, refined look that pairs beautifully with upscale homes and manicured gardens. Can be stained or left natural.",
    badge: "Premium",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "cedar-fence-i",
    name: "Cedar Fence I",
    slug: "cedar-fence-i",
    material: "Cedar",
    description:
      "Custom cedar privacy fence with a pointed picket top — combining the charm of a traditional picket fence with full privacy coverage. A uniquely GTA style for heritage and character homes.",
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
];

export default fences;
