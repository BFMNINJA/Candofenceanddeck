export interface DeckProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated" | "Composite" | "Cedar";
  description: string;
  fullDescription: string;
  features: string[];
  badge?: string;
  imageUrl: string;
}

const decks: DeckProduct[] = [
  {
    id: "deck-pt-most-popular",
    name: "Pressure Treated Deck",
    slug: "pressure-treated-deck",
    material: "Pressure Treated",
    description:
      "Our most popular deck style. Pressure-treated lumber delivers durability and value in one package. Resistant to rot, decay, and insects — built to handle Canadian winters and summers with ease. Pairs with any railing style.",
    fullDescription:
      "The Pressure Treated Deck is our most-requested deck build — and for good reason. Pressure-treated lumber is affordable, incredibly durable, and rated for ground contact which means it stands up to Canadian weather year after year. The wood is treated to resist rot, decay, and insect damage, giving you a deck that lasts decades with basic maintenance. We build on a properly engineered frame with concrete-set footings at code-compliant depth, so the deck stays level and stable through frost heave and settlement. Pairs seamlessly with any of our railing styles — pressure-treated pickets, black aluminum, cable, or glass — to match your home's aesthetic.",
    features: [
      "Kiln-dried pressure-treated lumber",
      "Ground-contact rated for longevity",
      "Code-compliant concrete footings",
      "Frame engineered for frost and settlement",
      "Pairs with any railing style",
      "5-year written warranty included",
    ],
    badge: "Most Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "deck-trex-two-tone",
    name: "Trex Two-Tone Composite",
    slug: "trex-two-tone",
    material: "Composite",
    description:
      "A sophisticated two-tone Trex composite deck combining two complementary colour boards for a striking, modern look. Low-maintenance composite won't warp, splinter, or fade — and the visual contrast creates a truly premium finish.",
    fullDescription:
      "The Trex Two-Tone Composite deck uses two complementary Trex colours — typically a lighter main field with darker border boards — to create a designer-quality finish that looks custom-built every time. Trex composite boards are engineered from recycled wood and plastic, so they don't warp, splinter, rot, or fade under UV exposure. Unlike wood decks, you'll never need to stain or seal them — just a periodic wash with soap and water. The two-tone design adds visual depth that a single-colour deck can't match, making it the go-to choice for homeowners who want a showpiece deck that's also easy to live with. Pairs beautifully with glass or black aluminum railings.",
    features: [
      "Premium Trex composite decking",
      "Two complementary colour boards",
      "Won't warp, splinter, rot, or fade",
      "Never needs staining or sealing",
      "Made from recycled materials",
      "25-year Trex manufacturer warranty",
    ],
    badge: "Premium",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
  },
  {
    id: "deck-pt-upper-transition-rail",
    name: "PT Upper + Transition Rail",
    slug: "pt-upper-transition-rail",
    material: "Pressure Treated",
    description:
      "A multi-level pressure-treated deck design with a beautifully detailed transition rail between levels. The transition rail adds architectural definition while providing safety and visual separation between the upper and lower areas.",
    fullDescription:
      "The PT Upper + Transition Rail is a multi-level pressure-treated deck designed for properties with elevation changes or homeowners who want distinct outdoor zones. An upper deck — typically off a walkout or main-floor patio door — steps down to a lower deck area via a carefully detailed transition rail. The transition rail serves as both a safety barrier and a visual element that defines the two zones. This layout works beautifully for splitting a dining area from a lounging area, or for landscaping that steps down a slope. Built with kiln-dried pressure-treated lumber on a properly engineered frame with code-compliant footings.",
    features: [
      "Two-level deck design",
      "Detailed transition railing between levels",
      "Defines separate outdoor zones",
      "Kiln-dried pressure-treated lumber",
      "Concrete-set footings at code depth",
      "5-year written warranty included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "deck-brown-treated-cedar-privacy",
    name: "Brown Treated + Cedar Privacy Shutters",
    slug: "brown-treated-cedar-privacy-shutters",
    material: "Pressure Treated",
    description:
      "Brown pressure-treated decking complemented by cedar privacy shutters along the sides. The shutters create an enclosed, intimate outdoor living space while the warm cedar tones add natural beauty.",
    fullDescription:
      "This deck pairs our brown pressure-treated decking with cedar privacy shutters along one or more sides of the deck perimeter. The shutters transform an ordinary deck into a private outdoor room — ideal for urban lots, side-yard decks, or anywhere you want to block sight lines from neighbours. The warm honey tones of cedar against the rich brown of pressure-treated decking creates a beautiful two-material contrast that elevates the entire build. The shutters can be installed full-height for complete enclosure or partial-height for selective privacy. A truly custom feel at a practical price point.",
    features: [
      "Brown pressure-treated decking",
      "Cedar privacy shutters along sides",
      "Creates an outdoor 'room' feel",
      "Blocks sight lines from neighbours",
      "Two-material design for visual depth",
      "5-year written warranty included",
    ],
    badge: "Unique",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "deck-cedar-black-picket-rail",
    name: "Cedar + Black Picket Rail",
    slug: "cedar-black-picket-rail",
    material: "Cedar",
    description:
      "Natural cedar decking with a striking black metal picket railing system. The contrast of warm cedar tones against crisp black metalwork creates a contemporary yet timeless aesthetic that elevates any backyard.",
    fullDescription:
      "The Cedar + Black Picket Rail combines natural western red cedar decking with a powder-coated black aluminum picket railing system. The contrast between warm cedar tones and crisp black metalwork is striking — it looks contemporary without being trendy, and it complements both modern and traditional homes. The black aluminum railings are virtually maintenance-free — no rust, no paint touch-ups, no seasonal care. The cedar decking is left natural to develop its beautiful silver-grey patina, or can be sealed to preserve the original warm tones. A designer-grade combination at a mid-tier price point.",
    features: [
      "Premium western red cedar decking",
      "Powder-coated black aluminum railings",
      "Maintenance-free railing system",
      "Contemporary yet timeless aesthetic",
      "Cedar ages naturally or can be sealed",
      "5-year written warranty included",
    ],
    badge: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "deck-trex-cedar-trim",
    name: "Trex + Cedar Trim",
    slug: "trex-cedar-trim",
    material: "Composite",
    description:
      "Low-maintenance Trex composite decking with natural cedar trim boards for a warm, organic border. This hybrid approach gives you the best of both worlds — composite durability with the beauty of real wood accents.",
    fullDescription:
      "The Trex + Cedar Trim deck combines the practicality of Trex composite decking with the natural beauty of cedar accents. The main deck surface uses Trex composite boards — meaning no staining, sealing, or warping to worry about — while cedar trim boards frame the perimeter and step edges to add warmth and organic texture. It's a hybrid approach that gives you the best of both materials: the low-maintenance performance of composite where it matters most (the walking surface) with the unmistakable beauty of real wood where you see it most (the edges and details). A smart choice for homeowners who love cedar but don't want the maintenance commitment.",
    features: [
      "Trex composite main decking",
      "Cedar trim along edges and steps",
      "Low-maintenance walking surface",
      "Natural wood visual accents",
      "No warping or fading of main boards",
      "25-year Trex + 5-year overall warranty",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "deck-pt-upper-privacy-screen",
    name: "PT Upper + Privacy Screen",
    slug: "pt-upper-privacy-screen",
    material: "Pressure Treated",
    description:
      "A raised pressure-treated deck with an integrated privacy screen along one or more sides. The screen creates a secluded outdoor sanctuary — perfect for urban lots or properties with close neighbours.",
    fullDescription:
      "The PT Upper + Privacy Screen deck is designed for homeowners who want an outdoor sanctuary despite living on a tight urban lot. A raised pressure-treated deck — typically off a walkout or second-floor door — is paired with an integrated privacy screen along one, two, or three sides. The screen can be slatted, latticed, or solid-panel depending on your preference, and it blocks sight lines from close neighbours without sacrificing airflow or light. The result is an outdoor space that feels genuinely private and intentional, even in tight quarters. This is a popular build for Toronto semi-detached and townhouse properties where yards are compact.",
    features: [
      "Raised pressure-treated deck",
      "Integrated privacy screen on sides",
      "Ideal for urban and tight lots",
      "Screen styles: slat, lattice, or solid",
      "Blocks sight lines without losing airflow",
      "5-year written warranty included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&q=80",
  },
  {
    id: "deck-pt-custom-walkout",
    name: "PT + Custom Walkout",
    slug: "pt-custom-walkout",
    material: "Pressure Treated",
    description:
      "A custom-designed walkout deck built to transition seamlessly from your home's lower level to grade. Engineered specifically for walkout basement properties, with integrated steps and landing areas.",
    fullDescription:
      "The PT + Custom Walkout deck is purpose-built for homes with walkout basements or lower-level doors that open to the backyard. Rather than a generic deck dropped onto a walkout, this build is designed specifically for the transition — custom steps, landing areas, and frame heights are all engineered to match your exact grade, door height, and property layout. The result is a seamless flow from your lower-level living space out to the yard, with code-compliant step heights, proper drainage, and a frame that accounts for the unique load requirements of a walkout build. Every PT Walkout is designed from scratch based on the property.",
    features: [
      "Purpose-built for walkout basements",
      "Custom steps and landing design",
      "Engineered for your exact grade and doors",
      "Code-compliant riser and tread heights",
      "Proper drainage integration",
      "5-year written warranty included",
    ],
    badge: "Custom",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca0d8d?w=800&q=80",
  },
  {
    id: "deck-cedar-natural",
    name: "Cedar Natural",
    slug: "cedar-natural",
    material: "Cedar",
    description:
      "Pure western red cedar decking left to age naturally or finished with a clear sealer. The rich, warm tones of natural cedar create an unmatched organic beauty. Lightweight, naturally resistant, and incredibly inviting.",
    fullDescription:
      "The Cedar Natural deck is pure western red cedar from the decking surface to the railing. Cedar is the gold standard of residential deck materials — lightweight, naturally resistant to rot and insects, dimensionally stable, and possessing a warmth and beauty that no other material can match. Fresh cedar has a rich honey-brown tone that slowly weathers into an elegant silver-grey patina if left untreated, or can be maintained with a clear sealer to preserve the original colour. This is the deck for homeowners who love natural materials and don't mind a small maintenance commitment for the reward of an outdoor space that feels genuinely premium.",
    features: [
      "100% premium western red cedar",
      "Naturally rot and insect resistant",
      "Lightweight and dimensionally stable",
      "Ages to silver-grey or seal to preserve",
      "Cedar decking, railing, and trim",
      "5-year written warranty included",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
];

export default decks;
