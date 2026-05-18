export interface DeckProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated" | "Composite";
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
      "Our most popular deck style. Pressure-treated lumber delivers durability and value in one package. Resistant to rot, decay, and insects - built to handle Canadian winters and summers with ease. Pairs with any railing style.",
    fullDescription:
      "The Pressure Treated Deck is our most-requested deck build - and for good reason. Pressure-treated lumber is affordable, incredibly durable, and rated for ground contact which means it stands up to Canadian weather year after year. The wood is treated to resist rot, decay, and insect damage, giving you a deck that lasts decades with basic maintenance. We build on a properly engineered frame with concrete-set footings at code-compliant depth, so the deck stays level and stable through frost heave and settlement. Pairs seamlessly with any of our railing styles - pressure-treated pickets, black aluminum, cable, or glass - to match your home's aesthetic.",
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
      "A sophisticated two-tone Trex composite deck combining two complementary colour boards for a striking, modern look. Low-maintenance composite won't warp, splinter, or fade - and the visual contrast creates a truly premium finish.",
    fullDescription:
      "The Trex Two-Tone Composite deck uses two complementary Trex colours - typically a lighter main field with darker border boards - to create a designer-quality finish that looks custom-built every time. Trex composite boards are engineered from recycled wood and plastic, so they don't warp, splinter, rot, or fade under UV exposure. Unlike wood decks, you'll never need to stain or seal them - just a periodic wash with soap and water. The two-tone design adds visual depth that a single-colour deck can't match, making it the go-to choice for homeowners who want a showpiece deck that's also easy to live with. Pairs beautifully with glass or black aluminum railings.",
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
      "The PT Upper + Transition Rail is a multi-level pressure-treated deck designed for properties with elevation changes or homeowners who want distinct outdoor zones. An upper deck - typically off a walkout or main-floor patio door - steps down to a lower deck area via a carefully detailed transition rail. The transition rail serves as both a safety barrier and a visual element that defines the two zones. This layout works beautifully for splitting a dining area from a lounging area, or for landscaping that steps down a slope. Built with kiln-dried pressure-treated lumber on a properly engineered frame with code-compliant footings.",
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
    id: "deck-pt-upper-privacy-screen",
    name: "PT Upper + Privacy Screen",
    slug: "pt-upper-privacy-screen",
    material: "Pressure Treated",
    description:
      "A raised pressure-treated deck with an integrated privacy screen along one or more sides. The screen creates a secluded outdoor sanctuary - perfect for urban lots or properties with close neighbours.",
    fullDescription:
      "The PT Upper + Privacy Screen deck is designed for homeowners who want an outdoor sanctuary despite living on a tight urban lot. A raised pressure-treated deck - typically off a walkout or second-floor door - is paired with an integrated privacy screen along one, two, or three sides. The screen can be slatted, latticed, or solid-panel depending on your preference, and it blocks sight lines from close neighbours without sacrificing airflow or light. The result is an outdoor space that feels genuinely private and intentional, even in tight quarters. This is a popular build for Toronto semi-detached and townhouse properties where yards are compact.",
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
      "The PT + Custom Walkout deck is purpose-built for homes with walkout basements or lower-level doors that open to the backyard. Rather than a generic deck dropped onto a walkout, this build is designed specifically for the transition - custom steps, landing areas, and frame heights are all engineered to match your exact grade, door height, and property layout. The result is a seamless flow from your lower-level living space out to the yard, with code-compliant step heights, proper drainage, and a frame that accounts for the unique load requirements of a walkout build. Every PT Walkout is designed from scratch based on the property.",
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
];

export default decks;
