export interface DeckProduct {
  id: string;
  name: string;
  slug: string;
  material: "Pressure Treated" | "Composite" | "Cedar";
  description: string;
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
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
];

export default decks;
