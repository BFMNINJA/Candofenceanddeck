export interface FenceProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated";
  description: string;
  fullDescription: string;
  features: string[];
  badge?: string;
  imageUrl: string;
}

const fences: FenceProduct[] = [
  {
    id: "pt-lattice-top",
    name: "Traditional Lattice Top",
    slug: "traditional-lattice-top",
    material: "Pressure Treated",
    description:
      "A timeless classic featuring an elegant lattice top panel above solid privacy boards. Adds charm and character to any property while maintaining full privacy at the base.",
    fullDescription:
      "The Traditional Lattice Top is one of our most-requested pressure-treated fence styles. It combines solid privacy boards at the base with a decorative lattice panel across the top section, giving you complete privacy where you need it and an elegant, open aesthetic where it counts. The lattice top softens the visual weight of a full privacy fence and lets light and air flow through the upper section, making it ideal for gardens, pool areas, and properties where you want privacy without feeling enclosed. Every fence is built with kiln-dried pressure-treated lumber rated for ground contact, concrete-set 4x4 posts, and galvanized fasteners to stand up to Canadian weather year after year.",
    features: [
      "Kiln-dried pressure-treated lumber",
      "Concrete-set 4x4 posts, 8ft on-center",
      "Galvanized steel fasteners throughout",
      "Available in 5ft, 6ft, and 8ft heights",
      "Solid privacy base with decorative lattice top",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "The Simple Economical fence is our most affordable privacy fence style without sacrificing build quality. Straight-cut pressure-treated boards are installed tightly side-by-side for a clean, uniform appearance and full privacy coverage. This is an excellent choice for homeowners looking to enclose a yard quickly and affordably - think rental properties, starter homes, or property lines where function matters more than ornate style. Despite the economical price point, every Simple Economical fence uses the same premium lumber, concrete-set posts, and galvanized hardware as our higher-tier styles, and is covered by our 5-year written warranty.",
    features: [
      "Kiln-dried pressure-treated boards",
      "Clean straight-cut top for a neat profile",
      "Concrete-set 4x4 posts, 8ft spacing",
      "Galvanized fasteners and hardware",
      "Fastest-installation privacy option",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "The Scallop Top fence adds a graceful, flowing curve to the top edge of an otherwise solid privacy fence. The scalloped profile dips down gently in the middle of each section and rises at the posts, creating a rhythmic, decorative silhouette that softens the line of your property. It's a popular choice for homeowners who want full privacy at eye-level without the heavy, boxed-in feel of a straight-top fence. Pairs beautifully with traditional and character homes. Built from pressure-treated lumber with concrete-set posts and galvanized hardware, backed by our 5-year written warranty.",
    features: [
      "Decorative scalloped top profile",
      "Full privacy at eye level",
      "Pressure-treated, ground-contact rated lumber",
      "Concrete-set 4x4 posts",
      "Custom section widths available",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "The Privacy Style fence is built for homeowners who want maximum seclusion. Boards are installed tightly together with no gaps, and the top edge is kept straight and flat for a solid, uninterrupted barrier. This style is ideal for properties backing onto busy streets, commercial areas, or neighbours where complete visual privacy is the goal. The straight-top profile also pairs well with modern and minimalist home designs. Built from pressure-treated lumber with concrete-set 4x4 posts and galvanized fasteners - designed to stand up to wind, weather, and time.",
    features: [
      "Maximum privacy - no gaps between boards",
      "Clean flat-top profile",
      "Kiln-dried pressure-treated lumber",
      "Concrete-set 4x4 posts, 8ft spacing",
      "Heights up to 8ft available",
      "5-year written warranty included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "pt-featured-fence",
    name: "Featured Fence",
    slug: "featured-fence",
    material: "Pressure Treated",
    description:
      "Our premium pressure-treated signature style - combining solid privacy boards with decorative post caps and a refined finish. A step above the standard, this fence makes a statement.",
    fullDescription:
      "The Featured Fence is our premium pressure-treated design - a step above standard privacy fencing. It combines solid, tightly-fitted privacy boards with decorative post caps, routed post details, and a refined finish that elevates the overall look. This is the fence we recommend when homeowners want something that looks custom and high-end. The detailed finishing makes a noticeable difference from the street and adds real curb appeal. Built with premium pressure-treated lumber, concrete-set 4x4 posts with decorative caps, and galvanized hardware throughout.",
    features: [
      "Premium pressure-treated lumber",
      "Decorative post caps included",
      "Routed post detail for a refined look",
      "Concrete-set 4x4 posts",
      "Galvanized hardware throughout",
      "5-year written warranty included",
    ],
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
      "The best of both worlds - full privacy boards at the base with a graceful scalloped top profile. A beautiful balance of function and aesthetics for any residential property.",
    fullDescription:
      "The Privacy + Scallop combines the full-coverage privacy of our solid privacy fence with the decorative charm of our scallop top. The lower three-quarters of the fence are solid privacy boards, and the top section curves gracefully in a scalloped profile. The result is a fence that gives you complete privacy where you sit and relax, while keeping the top line soft and visually interesting from both sides. It's one of our most balanced designs - popular for backyards, side yards, and anywhere you want function and aesthetics working together. Built with pressure-treated lumber and our standard construction quality.",
    features: [
      "Solid privacy base with scalloped top",
      "Balances privacy with decorative appeal",
      "Pressure-treated, ground-contact rated lumber",
      "Concrete-set 4x4 posts, 8ft spacing",
      "Galvanized hardware throughout",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "The I-BEAM Heavy Duty fence is engineered for homeowners who want a fence that will outlast everything around it. Instead of standard 4x4 wood posts, this style uses I-beam style steel posts that are concreted into the ground for maximum structural integrity. The pressure-treated boards slide into the steel posts, giving you a fence that won't lean, twist, or loosen - even in the strongest GTA wind storms or heaviest winter snow loads. This is the fence of choice for exposed properties, corner lots, and anywhere wind load is a concern. It also eliminates the common failure point of wooden posts rotting at ground level.",
    features: [
      "I-beam style galvanized steel posts",
      "Engineered for maximum wind load",
      "No post rot - posts never touch soil",
      "Pressure-treated board panels",
      "Ideal for exposed and corner properties",
      "Extended warranty on post system",
    ],
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
    fullDescription:
      "The Board-on-Board fence uses an alternating overlapping board pattern that creates a fully opaque privacy fence that looks identical from both sides. This is the neighbourly choice - no one ends up with the 'ugly side' of the fence. The overlap ensures complete privacy from every angle, and the construction is significantly sturdier than single-sided fencing. It's also one of the most visually striking styles, with depth and shadow lines that change throughout the day as the sun moves. Built with premium pressure-treated lumber, concrete-set posts, and galvanized hardware. Popular for shared property lines and high-end residential installations.",
    features: [
      "Identical appearance from both sides",
      "Alternating overlapping board construction",
      "Complete privacy - no sight lines",
      "Pressure-treated, ground-contact rated lumber",
      "Concrete-set 4x4 posts",
      "5-year written warranty included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
];

export default fences;
