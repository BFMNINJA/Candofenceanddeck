export interface FenceProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated" | "Cedar";
  description: string;
  fullDescription: string;
  features: string[];
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
      "The Simple Economical fence is our most affordable privacy fence style without sacrificing build quality. Straight-cut pressure-treated boards are installed tightly side-by-side for a clean, uniform appearance and full privacy coverage. This is an excellent choice for homeowners looking to enclose a yard quickly and affordably — think rental properties, starter homes, or property lines where function matters more than ornate style. Despite the economical price point, every Simple Economical fence uses the same premium lumber, concrete-set posts, and galvanized hardware as our higher-tier styles, and is covered by our 5-year written warranty.",
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
      "The Privacy Style fence is built for homeowners who want maximum seclusion. Boards are installed tightly together with no gaps, and the top edge is kept straight and flat for a solid, uninterrupted barrier. This style is ideal for properties backing onto busy streets, commercial areas, or neighbours where complete visual privacy is the goal. The straight-top profile also pairs well with modern and minimalist home designs. Built from pressure-treated lumber with concrete-set 4x4 posts and galvanized fasteners — designed to stand up to wind, weather, and time.",
    features: [
      "Maximum privacy — no gaps between boards",
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
      "Our premium pressure-treated signature style — combining solid privacy boards with decorative post caps and a refined finish. A step above the standard, this fence makes a statement.",
    fullDescription:
      "The Featured Fence is our premium pressure-treated design — a step above standard privacy fencing. It combines solid, tightly-fitted privacy boards with decorative post caps, routed post details, and a refined finish that elevates the overall look. This is the fence we recommend when homeowners want something that looks custom and high-end without stepping up to cedar pricing. The detailed finishing makes a noticeable difference from the street and adds real curb appeal. Built with premium pressure-treated lumber, concrete-set 4x4 posts with decorative caps, and galvanized hardware throughout.",
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
      "The best of both worlds — full privacy boards at the base with a graceful scalloped top profile. A beautiful balance of function and aesthetics for any residential property.",
    fullDescription:
      "The Privacy + Scallop combines the full-coverage privacy of our solid privacy fence with the decorative charm of our scallop top. The lower three-quarters of the fence are solid privacy boards, and the top section curves gracefully in a scalloped profile. The result is a fence that gives you complete privacy where you sit and relax, while keeping the top line soft and visually interesting from both sides. It's one of our most balanced designs — popular for backyards, side yards, and anywhere you want function and aesthetics working together. Built with pressure-treated lumber and our standard construction quality.",
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
      "The I-BEAM Heavy Duty fence is engineered for homeowners who want a fence that will outlast everything around it. Instead of standard 4x4 wood posts, this style uses I-beam style steel posts that are concreted into the ground for maximum structural integrity. The pressure-treated boards slide into the steel posts, giving you a fence that won't lean, twist, or loosen — even in the strongest GTA wind storms or heaviest winter snow loads. This is the fence of choice for exposed properties, corner lots, and anywhere wind load is a concern. It also eliminates the common failure point of wooden posts rotting at ground level.",
    features: [
      "I-beam style galvanized steel posts",
      "Engineered for maximum wind load",
      "No post rot — posts never touch soil",
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
      "The Board-on-Board fence uses an alternating overlapping board pattern that creates a fully opaque privacy fence that looks identical from both sides. This is the neighbourly choice — no one ends up with the 'ugly side' of the fence. The overlap ensures complete privacy from every angle, and the construction is significantly sturdier than single-sided fencing. It's also one of the most visually striking styles, with depth and shadow lines that change throughout the day as the sun moves. Built with premium pressure-treated lumber, concrete-set posts, and galvanized hardware. Popular for shared property lines and high-end residential installations.",
    features: [
      "Identical appearance from both sides",
      "Alternating overlapping board construction",
      "Complete privacy — no sight lines",
      "Pressure-treated, ground-contact rated lumber",
      "Concrete-set 4x4 posts",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "Cedar Fence A is our entry point into western red cedar fencing — a classic straight-top privacy fence built from premium cedar lumber. Unlike pressure-treated lumber, cedar's natural oils make it inherently resistant to rot, decay, and insect damage without any chemical treatment. It's an eco-friendly choice that ages beautifully, developing a soft silvery-grey patina over the years (or you can stain it to maintain the warm honey tones). Cedar is lighter, more dimensionally stable, and has a fine straight grain that looks premium in any setting. Built with hot-dipped galvanized hardware and concrete-set cedar posts for a fence that belongs in premium properties.",
    features: [
      "Premium western red cedar lumber",
      "Natural rot and insect resistance",
      "No chemical treatment needed",
      "Hot-dipped galvanized hardware",
      "Ages naturally or can be stained",
      "5-year written warranty included",
    ],
    badge: "Natural",
    imageUrl: "/cedar-fence-installation.webp",
  },
  {
    id: "cedar-fence-b",
    name: "Cedar Fence B",
    slug: "cedar-fence-b",
    material: "Cedar",
    description:
      "Cedar privacy fence with a decorative dog-ear top profile. The warm, honey-brown tone of fresh cedar adds natural warmth and elegance to your outdoor living space.",
    fullDescription:
      "Cedar Fence B features a decorative dog-ear top profile on premium western red cedar boards. The dog-ear cut adds a subtle decorative touch without being overly ornate — it's the small detail that elevates the fence from basic to considered. Fresh cedar has a warm, honey-brown tone that brings natural beauty to any backyard, and the tight grain takes stain or sealer beautifully if you want to preserve that colour. This style works especially well with traditional, craftsman, and cottage-style homes. Built with hot-dipped galvanized fasteners and concrete-set cedar posts.",
    features: [
      "Decorative dog-ear board tops",
      "Premium western red cedar",
      "Warm natural honey-brown tone",
      "Hot-dipped galvanized hardware",
      "Concrete-set cedar posts",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "Cedar Fence C combines the graceful scallop-top profile with the natural beauty of western red cedar. The scalloped curve along the top softens the fence line and adds architectural interest, while the natural grain variation of cedar ensures no two panels look exactly alike — giving your yard a truly one-of-a-kind appearance. This is a premium style that's often chosen for gardens, heritage homes, and properties where the fence itself becomes a feature rather than just a barrier. The cedar can be left to age naturally into a silver-grey patina or stained to preserve its warm colour.",
    features: [
      "Scalloped decorative top profile",
      "Premium western red cedar boards",
      "Unique grain variation in every panel",
      "Natural rot and insect resistance",
      "Concrete-set cedar posts",
      "5-year written warranty included",
    ],
    imageUrl: "/970e5c066c5147f1d61325a2c62a35af97828afc.webp",
  },
  {
    id: "cedar-fence-d",
    name: "Cedar Fence D",
    slug: "cedar-fence-d",
    material: "Cedar",
    description:
      "Cedar board-on-board design offering complete two-sided privacy. The natural texture and colour variation of cedar boards creates a rich, premium appearance that improves with age.",
    fullDescription:
      "Cedar Fence D brings the board-on-board construction style into premium cedar. Alternating overlapping cedar boards on both sides of the fence create a fully opaque privacy barrier that looks identical from your side and your neighbour's side. The natural texture variation of cedar combined with the depth of the overlapping boards creates a rich, almost sculptural appearance. This is one of our highest-end fence styles — popular for luxury homes, shared property lines, and anywhere the fence itself is part of the landscape design. Cedar's longevity means this fence will look great for decades with minimal maintenance.",
    features: [
      "Board-on-board construction, both sides",
      "Premium western red cedar",
      "Identical appearance from both sides",
      "Complete privacy — no sight lines",
      "Ages to silver-grey or stain to preserve colour",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "Cedar Fence E is a shadowbox-style fence — an elegant variation that uses alternating boards on opposite sides of the frame with small gaps between them. From a head-on angle you get full privacy, but at an angle you can see glimpses through, which gives the fence a light, breezy feel. The gaps also allow air to circulate through the fence, which significantly extends its lifespan by preventing moisture build-up. This style is particularly well-suited to windy properties and areas prone to snow drift. The premium cedar construction ages beautifully and works with any landscape design.",
    features: [
      "Shadowbox construction with air circulation",
      "Premium western red cedar",
      "Privacy head-on, open feel at angles",
      "Wind-resistant design",
      "Extended fence lifespan from airflow",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "Cedar Fence F is our modern horizontal slat fence — arguably the most striking fence we build. Cedar boards are installed horizontally with small, precise gaps between each slat, creating clean architectural lines that complement contemporary, modern, and minimalist home designs. The horizontal orientation draws the eye across the property rather than up, making yards feel wider and more open. It's the fence of choice for new-build homes, architectural renovations, and homeowners who want a fence that functions as a design feature. Built on a steel post system for perfect alignment and long-term stability.",
    features: [
      "Modern horizontal cedar slats",
      "Precise gaps for architectural feel",
      "Steel post system for alignment",
      "Ideal for contemporary homes",
      "Makes yards feel wider and more open",
      "5-year written warranty included",
    ],
    badge: "Modern",
    imageUrl: "/Red-Cedar-fencing-from-canada.webp",
  },
  {
    id: "cedar-fence-g",
    name: "Cedar Fence G",
    slug: "cedar-fence-g",
    material: "Cedar",
    description:
      "Cedar lattice-top privacy fence combining a solid privacy base with an open cedar lattice top section. The lattice allows light and air flow while adding a decorative garden aesthetic.",
    fullDescription:
      "Cedar Fence G pairs a solid cedar privacy base with a cedar lattice top section — a garden-friendly fence design that brings the beauty of cedar together with the decorative charm of lattice work. The open lattice top lets sunlight and breezes flow through the upper part of the fence, which is especially nice for gardens that need morning or evening sun. Climbing plants can weave through the lattice for a living fence effect, and the visual openness keeps yards feeling spacious. A popular choice for gardens, pool surrounds, and any backyard where you want privacy without feeling closed in.",
    features: [
      "Solid cedar privacy base",
      "Open cedar lattice top section",
      "Allows sunlight and airflow",
      "Climbing plants can grow through lattice",
      "Premium western red cedar",
      "5-year written warranty included",
    ],
    imageUrl: "/venetian-fence-panel-big-red-cedar-2016.jpg",
  },
  {
    id: "cedar-fence-h",
    name: "Cedar Fence H",
    slug: "cedar-fence-h",
    material: "Cedar",
    description:
      "Premium cedar with routed post details and a flat top. A polished, refined look that pairs beautifully with upscale homes and manicured gardens. Can be stained or left natural.",
    fullDescription:
      "Cedar Fence H is our most refined cedar style — premium western red cedar construction with decorative routed post details and a clean flat-top profile. Every post features custom routed detailing that adds architectural interest and gives the fence an almost millwork-quality finish. This is the fence we recommend for upscale residential properties, heritage homes, and manicured gardens where every detail matters. It can be left natural to age into a silver-grey patina or finished with a semi-transparent stain to preserve the warm cedar tones indefinitely. The construction quality reflects the higher price point — this is a fence built to be admired.",
    features: [
      "Premium western red cedar",
      "Decorative routed post details",
      "Clean flat-top profile",
      "Millwork-quality finish",
      "Natural aging or stain-ready",
      "5-year written warranty included",
    ],
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
    fullDescription:
      "Cedar Fence I combines the nostalgic charm of a traditional picket fence with the practicality of full privacy coverage. Solid cedar privacy boards form the base, and the top edge is cut into a pointed picket profile that gives the fence a character-home feel. This is a distinctively GTA style — often requested for heritage properties in older neighbourhoods like Cabbagetown, Riverdale, and the Annex. Unlike a traditional picket fence, you still get full privacy because the pickets are attached directly to the solid privacy boards rather than spaced apart. It's the best of both worlds — storybook charm with modern function.",
    features: [
      "Pointed picket top profile",
      "Solid cedar privacy base",
      "Heritage character aesthetic",
      "Full privacy — no picket gaps",
      "Premium western red cedar",
      "5-year written warranty included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
];

export default fences;
