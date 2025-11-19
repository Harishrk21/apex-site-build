import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, SlidersHorizontal } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import productsHero from "@/assets/products-hero.jpg";

type ProductCategory =
  | "vitamins-supplements"
  | "teas-beverages"
  | "shakes"
  | "skin-body"
  | "skin-body-care"
  | "targeted-health"
  | "daily-nutrition"
  | "healthy-weight"
  | "fitness"
  | "performance";

type ProductTag = "Featured" | "New" | "Best Seller";

type Product = {
  id: string;
  name: string;
  flavour?: string;
  size: string;
  price: number;
  categories: ProductCategory[];
  description: string;
  tag?: ProductTag;
  flavourNote?: string;
  sizeNote?: string;
  image?: string;
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

type CategoryVisual = {
  gradient: string;
  accent: string;
  emoji: string;
};

const CATEGORY_VISUALS: Record<ProductCategory, CategoryVisual> = {
  "vitamins-supplements": {
    gradient: "linear-gradient(135deg, #f7fee7, #d9f99d)",
    accent: "#bef264",
    emoji: "💊",
  },
  "teas-beverages": {
    gradient: "linear-gradient(135deg, #ecfccb, #bbf7d0)",
    accent: "#4ade80",
    emoji: "🍵",
  },
  shakes: {
    gradient: "linear-gradient(135deg, #fef9c3, #fde68a)",
    accent: "#facc15",
    emoji: "🥤",
  },
  "skin-body": {
    gradient: "linear-gradient(135deg, #fee2e2, #fecaca)",
    accent: "#fb7185",
    emoji: "💮",
  },
  "skin-body-care": {
    gradient: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
    accent: "#a78bfa",
    emoji: "🧴",
  },
  "targeted-health": {
    gradient: "linear-gradient(135deg, #fef3c7, #fcd34d)",
    accent: "#fb923c",
    emoji: "🎯",
  },
  "daily-nutrition": {
    gradient: "linear-gradient(135deg, #cffafe, #a5f3fc)",
    accent: "#22d3ee",
    emoji: "🥗",
  },
  "healthy-weight": {
    gradient: "linear-gradient(135deg, #ede9fe, #c4b5fd)",
    accent: "#8b5cf6",
    emoji: "⚖️",
  },
  fitness: {
    gradient: "linear-gradient(135deg, #fee2e2, #fecdd3)",
    accent: "#fb7185",
    emoji: "💪",
  },
  performance: {
    gradient: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
    accent: "#60a5fa",
    emoji: "⚡",
  },
};

const getProductVisual = (product: Product) => {
  const primaryCategory = product.categories[0] ?? "healthy-weight";
  return CATEGORY_VISUALS[primaryCategory];
};

const CATEGORIES = [
  { id: "all", label: "All products" },
  { id: "vitamins-supplements", label: "Vitamins & Supplements" },
  { id: "teas-beverages", label: "Teas & Beverages" },
  { id: "shakes", label: "Shakes" },
  { id: "skin-body", label: "Skin & Body" },
  { id: "skin-body-care", label: "Skin & Body Care" },
  { id: "targeted-health", label: "Targeted Health" },
  { id: "daily-nutrition", label: "Daily Nutrition" },
  { id: "healthy-weight", label: "Healthy Weight" },
  { id: "fitness", label: "Fitness" },
  { id: "performance", label: "Performance" },
];

const PRODUCT_LIST: Product[] = [
  {
    id: "sleep-enhance",
    name: "Sleep Enhance™",
    flavour: "Hibiscus",
    size: "30 g",
    price: 1697,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Night-time herbal blend with hibiscus notes to support quality rest.",
    tag: "Featured",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-426k-in.png?fmt=webp-alpha",
  },
  {
    id: "dinoshake-chocolicious",
    name: "Dinoshake",
    flavour: "Chocolicious",
    size: "200 g",
    price: 1115,
    categories: ["shakes", "healthy-weight", "daily-nutrition"],
    description: "Kids' nutrition shake packed with vitamins, minerals and protein.",
    tag: "Featured",
    flavourNote: "2 flavour(s)",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1279-in.png?fmt=webp-alpha",
  },
  {
    id: "vritilife-triphala",
    name: "Vritilife® Triphala",
    size: "60 Tablets",
    price: 1089,
    categories: ["vitamins-supplements", "targeted-health", "daily-nutrition"],
    description: "Ayurvedic triphala tablets crafted for digestive wellness.",
    tag: "Featured",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-186k-in.png?fmt=webp-alpha",
  },
  {
    id: "male-factor",
    name: "Male Factor +",
    size: "60 Tablets",
    price: 3410,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Men's health supplement with targeted botanicals and micronutrients.",
    tag: "Featured",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-175k-in.png?fmt=webp-alpha",
  },
  {
    id: "shakemate",
    name: "ShakeMate®",
    size: "500 g",
    price: 653,
    categories: ["shakes", "healthy-weight"],
    description: "Add-on blend that enhances texture and nutrition in your shakes.",
    tag: "Featured",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-183k-in.png?fmt=webp-alpha",
  },
  {
    id: "womans-choice",
    name: "Woman's Choice",
    size: "30 Tablets",
    price: 1245,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Soy isoflavone-based tablets to support women's wellness.",
    tag: "Featured",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-127k-in.png?fmt=webp-alpha",
  },
  {
    id: "afresh-lemon",
    name: "Afresh Energy Drink Mix",
    flavour: "Lemon",
    size: "50 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Instant energy drink mix with refreshing lemon zest.",
    tag: "Featured",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1295-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "vritilife-brain",
    name: "Vritilife® Brain Health",
    size: "60 Tablets",
    price: 1464,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Ayurvedic actives that focus on cognitive support.",
    tag: "Featured",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-109k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "vritilife-immune",
    name: "Vritilife® Immune Health",
    size: "60 Tablets",
    price: 1528,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Herbal blend formulated to bolster immune defences.",
    tag: "Featured",
    image:"https://rukminim2.flixcart.com/image/480/640/kruyw7k0/vitamin-supplement/f/a/c/90-women-choice-tablet-with-vritilife-immune-health-set-of-2-original-imag5jz8ztwhuhgh.jpeg?q=90"
  },
  {
    id: "f1-dutch-chocolate-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Dutch Chocolate",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Protein-rich meal replacement shake in a classic chocolate profile.",
    tag: "Featured",
    flavourNote: "9 flavour(s)",
    image:"https://m.media-amazon.com/images/I/61UK9HYQEUL._SX569_.jpg"
  },
  {
    id: "f1-vanilla-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Vanilla",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Silky vanilla shake with balanced macro and micronutrients.",
    tag: "Featured",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/619R-XpbkhL._SX569_.jpg"
  },
  {
    id: "dinoshake-strawberry",
    name: "Dinoshake",
    flavour: "Strawberry",
    size: "200 g",
    price: 1115,
    categories: ["shakes", "daily-nutrition", "healthy-weight"],
    description: "Strawberry-flavoured kids' shake brimming with nutrients.",
    tag: "Featured",
    flavourNote: "2 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1236-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "skin-booster-30",
    name: "HN - Skin Booster",
    flavour: "Orange",
    size: "30 Sachets",
    price: 3910,
    categories: ["skin-body-care", "skin-body"],
    description: "Collagen drink mix with orange zing to nourish skin from within.",
    tag: "Featured",
    sizeNote: "+1 size(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-316k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "f1-strawberry-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Strawberry",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Bright strawberry shake for satiating meal replacement.",
    tag: "Featured",
    flavourNote: "9 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1239-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "h24-rebuild-strength",
    name: "Herbalife24® Rebuild Strength",
    flavour: "Chocolate",
    size: "10 Sachets",
    price: 2616,
    categories: ["fitness", "performance", "shakes"],
    description: "Post-workout protein shake crafted for muscle recovery.",
    tag: "Featured",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-031k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "f1-vanilla-750",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Vanilla",
    size: "750 g",
    price: 3227,
    categories: ["shakes", "healthy-weight"],
    description: "Supersized vanilla meal replacement to support weight goals.",
    tag: "New",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1247-in.png:pdp-w875h783?fmt=webp-alpha"
    
  },
  {
    id: "f1-mango-750",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Mango",
    size: "750 g",
    price: 3227,
    categories: ["shakes", "healthy-weight"],
    description: "Tropical mango shake delivering balanced nutrition.",
    tag: "New",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1249-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "f1-kulfi-750",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Kulfi",
    size: "750 g",
    price: 3227,
    categories: ["shakes", "healthy-weight"],
    description: "Indian dessert-inspired kulfi shake for indulgent nutrition.",
    tag: "New",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-409k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "f1-rose-750",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Rose Kheer",
    size: "750 g",
    price: 3227,
    categories: ["shakes", "healthy-weight"],
    description: "Fragrant rose kheer shake to satisfy sweet cravings.",
    tag: "New",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/61EFToMR5uL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: "skin-booster-300",
    name: "HN - Skin Booster",
    flavour: "Orange",
    size: "300 g",
    price: 3910,
    categories: ["skin-body-care", "skin-body"],
    description: "Larger pack of collagen-rich orange skin booster drink.",
    tag: "New",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/41QDCHi1-xL._SY300_SX300_QL70_FMwebp_.jpg"
  },

  {
    id: "vritilife-serum",
    name: "Vritilife® Facial Serum (Deep Nourishment)",
    size: "30 ml",
    price: 3022,
    categories: ["skin-body", "skin-body-care"],
    description: "Ayurveda-inspired serum for deep skin nourishment.",
    tag: "New",
    image:"data:image/webp;base64,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"
  },
  {
    id: "vritilife-cleanser",
    name: "Vritilife® Facial Cleanser (All skin types*)",
    size: "100 ml",
    price: 1165,
    categories: ["skin-body", "skin-body-care"],
    description: "Gentle Ayurvedic cleanser suited for every skin type.",
    tag: "New",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-275k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "vritilife-moisturizer",
    name: "Vritilife® Moisturizer (All skin types*)",
    size: "100 ml",
    price: 1473,
    categories: ["skin-body", "skin-body-care"],
    description: "Hydrating Ayurvedic moisturizer to lock in softness.",
    tag: "New",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-277k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "vritilife-toner",
    name: "Vritilife® Facial Toner (All skin types*)",
    size: "100 ml",
    price: 1322,
    categories: ["skin-body", "skin-body-care"],
    description: "Refreshing toner formulated with age-honoured botanicals.",
    tag: "New",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-315k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "afresh-kashmiri",
    name: "Afresh Energy Drink Mix",
    flavour: "Kashmiri Kahwa",
    size: "40 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Spiced kahwa-inspired instant energy mix.",
    tag: "Best Seller",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-230k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "f1-kulfi-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Kulfi",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Kulfi flavoured shake delivering 9g protein per serving.",
    tag: "Best Seller",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/41ee3Hx-x7L._SX342_SY445_QL70_FMwebp_.jpg"
  },
  {
    id: "ppp-400",
    name: "Personalized Protein Powder",
    size: "400 g",
    price: 2485,
    categories: ["shakes", "daily-nutrition", "healthy-weight"],
    description: "Unflavoured protein boost to customise any meal or shake.",
    tag: "Best Seller",
    sizeNote: "+1 size(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1233-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "afresh-ginger",
    name: "Afresh Energy Drink Mix",
    flavour: "Ginger",
    size: "50 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Zesty ginger tea mix for a quick lift.",
    tag: "Best Seller",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1291-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "f1-rose-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Rose Kheer",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Rose kheer inspired meal replacement shake.",
    tag: "Best Seller",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/41RHtK3J4EL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "afresh-elaichi",
    name: "Afresh Energy Drink Mix",
    flavour: "Elaichi",
    size: "50 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Cardamom flavoured instant energy drink.",
    tag: "Best Seller",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1294-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "afresh-tulsi",
    name: "Afresh Energy Drink Mix",
    flavour: "Natural Tulsi",
    size: "50 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Tulsi infused instant energy beverage.",
    tag: "Best Seller",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-080k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "formula2",
    name: "Formula 2 Multivitamin Mineral & Herbal Tablets Plus",
    size: "90 Tablets",
    price: 2004,
    categories: ["vitamins-supplements", "daily-nutrition"],
    description: "Daily multivitamin blend for foundational nutrition.",
    tag: "Best Seller",
    image:"https://rukminim2.flixcart.com/image/832/832/xif0q/vitamin-supplement/c/x/x/90-formula-2-multivitamin-mineral-and-herbal-tablets-90-tablets-original-imahfnff8nnsgsmt.jpeg?q=70&crop=false"
  },
  {
    id: "cell-u-loss",
    name: "Cell-U-Loss",
    size: "90 Tablets",
    price: 1705,
    categories: ["targeted-health", "healthy-weight"],
    description: "Herbal tablets supporting healthy fluid balance.",
    tag: "Best Seller",
    image:"https://m.media-amazon.com/images/I/41CEItAZllL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "ppp-200",
    name: "Personalized Protein Powder",
    size: "200 g",
    price: 1295,
    categories: ["shakes", "healthy-weight", "daily-nutrition"],
    description: "Smaller pack of versatile protein powder.",
    tag: "Best Seller",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/41bL-LzhROL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "f1-mango-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Mango",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Mango flavoured shake with 9 flavour options overall.",
    tag: "Best Seller",
    flavourNote: "9 flavour(s)",
    sizeNote: "+1 size(s)",
    image:"https://m.media-amazon.com/images/I/71RnQOG3pVL._SL1500_.jpg"
  },
  {
    id: "liftoff-watermelon",
    name: "Liftoff®",
    flavour: "Watermelon",
    size: "5 g x 30",
    price: 4119,
    categories: ["teas-beverages", "daily-nutrition", "fitness"],
    description: "Effervescent energy tablets with watermelon punch.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-507k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "niteworks-lemon",
    name: "Niteworks®",
    flavour: "Lemon",
    size: "300 g",
    price: 7128,
    categories: ["teas-beverages", "performance"],
    description: "Lemon flavoured supplement with L-Arginine for night-time support.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-2637-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "activated-fibre",
    name: "Activated Fibre",
    size: "90 Tablets",
    price: 1636,
    categories: ["daily-nutrition", "targeted-health"],
    description: "Tablets offering a blend of soluble and insoluble fibre.",
    image:"https://m.media-amazon.com/images/I/31mbRkDxugL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "cell-activator",
    name: "Cell Activator",
    size: "60 Tablets",
    price: 2215,
    categories: ["targeted-health", "daily-nutrition"],
    description: "Cellular nutrition support with B vitamins and botanicals.",
    image:"https://m.media-amazon.com/images/I/41UTNDnCL0L._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "f1-paan-500",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Paan",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Paan flavoured complete meal replacement shake.",
    flavourNote: "9 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-287k-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "active-fiber",
    name: "Active Fiber Complex",
    size: "200 g",
    price: 2559,
    categories: ["daily-nutrition", "targeted-health"],
    description: "Fibre blend that supports digestive wellness.",
    image:"https://m.media-amazon.com/images/I/41FO8636XEL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "h24-hydrate",
    name: "Herbalife24® Hydrate",
    flavour: "Orange",
    size: "20 Sachets",
    price: 1636,
    categories: ["fitness", "performance", "teas-beverages"],
    description: "Electrolyte drink mix for rapid hydration.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1458-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "afresh-peach",
    name: "Afresh Energy Drink Mix",
    flavour: "Peach",
    size: "50 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Peach flavoured low-calorie energy beverage.",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1296-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "aloe-plus",
    name: "Aloe Plus",
    size: "60 Capsules",
    price: 1059,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Aloe-enriched capsules for digestive comfort.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1293-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "joint-support",
    name: "Joint Support",
    size: "90 Tablets",
    price: 2455,
    categories: ["targeted-health", "daily-nutrition"],
    description: "Glucosamine, MSM and botanicals for joint mobility.",
    image:"https://m.media-amazon.com/images/I/21epHsKNjiL.jpg"
  },
  {
    id: "f1-banana-caramel",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Banana Caramel",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Dessert-inspired banana caramel shake.",
    flavourNote: "9 flavour(s)",
    image:"https://m.media-amazon.com/images/I/41JEEIX1PwL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "herbalifeline",
    name: "Herbalifeline®",
    size: "60 Capsules",
    price: 2667,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Omega-3 supplement for heart health support.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-0065-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "ocular-defense",
    name: "Ocular Defense",
    size: "30 Capsules",
    price: 1927,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Lutein and antioxidant-rich eye health capsules.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-0064-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "herbal-control",
    name: "Herbal Control",
    size: "90 Tablets",
    price: 3433,
    categories: ["healthy-weight", "targeted-health"],
    description: "Metabolism-support tablets with green and black tea extracts.",
    image:"https://m.media-amazon.com/images/I/41OsO0wieGL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "beta-heart",
    name: "Beta Heart",
    flavour: "Vanilla",
    size: "15 Sachets",
    price: 2242,
    categories: ["daily-nutrition", "targeted-health"],
    description: "Vanilla beta-glucan drink to help maintain cholesterol.",
    image:"https://m.media-amazon.com/images/I/51O9zKeYODL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "f1-orange-cream",
    name: "Formula 1 Nutritional Shake Mix",
    flavour: "Orange Cream",
    size: "500 g",
    price: 2179,
    categories: ["shakes", "healthy-weight"],
    description: "Orange cream shake for balanced nutrition.",
    flavourNote: "9 flavour(s)",
    image:"https://m.media-amazon.com/images/I/41eX-p50GEL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    id: "afresh-cinnamon",
    name: "Afresh Energy Drink Mix",
    flavour: "Cinnamon",
    size: "50 g",
    price: 812,
    categories: ["teas-beverages", "daily-nutrition"],
    description: "Cinnamon infused energy beverage mix.",
    flavourNote: "7 flavour(s)",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1238-in.png:pdp-w875h783?fmt=webp-alpha"
  },
  {
    id: "simply-probiotic",
    name: "Simply Probiotic",
    size: "30 Sachets",
    price: 2209,
    categories: ["daily-nutrition", "targeted-health"],
    description: "Single-serve sachets delivering GanedenBC30® probiotic.",
    image:"https://m.media-amazon.com/images/I/41V6v-5rDhL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    id: "herbal-calcium",
    name: "Herbalife Calcium Tablets",
    size: "60 Tablets",
    price: 1203,
    categories: ["vitamins-supplements", "targeted-health"],
    description: "Calcium and vitamin D tablets for bone health.",
    image:"data:image/webp;base64,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"
  },
  {
    id: "herbal-aloe",
    name: "Herbal Aloe Concentrate",
    size: "500 ml",
    price: 2696,
    categories: ["daily-nutrition", "teas-beverages"],
    description: "Concentrated aloe drink for soothing digestion.",
    image:"https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-0006-in.png:pdp-w875h783?fmt=webp-alpha"
  },
];

const PRICE_FILTERS = [
  { id: "under-1000", label: "Below ₹1,000", predicate: (price: number) => price < 1000 },
  { id: "1000-2000", label: "₹1,000 - ₹2,000", predicate: (price: number) => price >= 1000 && price <= 2000 },
  { id: "2000-4000", label: "₹2,000 - ₹4,000", predicate: (price: number) => price > 2000 && price <= 4000 },
  { id: "4000-plus", label: "Above ₹4,000", predicate: (price: number) => price > 4000 },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-low-high", label: "Price (low to high)" },
  { id: "price-high-low", label: "Price (high to low)" },
  { id: "name-az", label: "Name (A-Z)" },
];

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFlavours, setSelectedFlavours] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const flavourOptions = useMemo(() => {
    const flavours = PRODUCT_LIST.map((product) => product.flavour).filter(Boolean) as string[];
    return Array.from(new Set(flavours)).sort((a, b) => a.localeCompare(b));
  }, []);

  const sizeOptions = useMemo(() => {
    const sizes = PRODUCT_LIST.map((product) => product.size);
    return Array.from(new Set(sizes)).sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCT_LIST.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categories.includes(selectedCategory as ProductCategory);

      const flavourValue = product.flavour ?? "Unflavoured";
      const matchesFlavour =
        selectedFlavours.length === 0 || selectedFlavours.includes(flavourValue);

      const matchesSize =
        selectedSizes.length === 0 || selectedSizes.includes(product.size);

      const priceFilter = PRICE_FILTERS.find((filter) => filter.id === selectedPrice);
      const matchesPrice = !priceFilter || priceFilter.predicate(product.price);

      return matchesCategory && matchesFlavour && matchesSize && matchesPrice;
    });
  }, [selectedCategory, selectedFlavours, selectedSizes, selectedPrice]);

  const sortedProducts = useMemo(() => {
    if (sortOption === "featured") {
      return filteredProducts;
    }

    const cloned = [...filteredProducts];
    switch (sortOption) {
      case "price-low-high":
        return cloned.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return cloned.sort((a, b) => b.price - a.price);
      case "name-az":
        return cloned.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return cloned;
    }
  }, [filteredProducts, sortOption]);

  const totalProducts = PRODUCT_LIST.length;

  const toggleFilterValue = (
    value: string,
    selectedValues: string[],
    setter: (values: string[]) => void
  ) => {
    if (selectedValues.includes(value)) {
      setter(selectedValues.filter((item) => item !== value));
    } else {
      setter([...selectedValues, value]);
    }
  };

  const clearFilters = () => {
    setSelectedFlavours([]);
    setSelectedSizes([]);
    setSelectedPrice("");
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.flavour ? `${product.name} - ${product.flavour}` : product.name,
      price: product.price,
      size: product.size,
    });
  };

  return (
    <>
      <SEO
        title="Herbalife Products - Premium Nutrition Products in Kolathur, Chennai, Villivakkam | New Life Wellness Centre"
        description="Buy authentic Herbalife nutrition products in Kolathur, Chennai, and Villivakkam at New Life Wellness Centre. Explore our complete range of Herbalife products including Formula 1 shakes, supplements, skin care, vitamins, and targeted nutrition for your wellness goals. Best nutrition centre in Kolathur, Chennai."
        canonical="/products"
        keywords="Herbalife Products Kolathur, Buy Herbalife Chennai, Herbalife Products Villivakkam, Formula 1 Shake Kolathur, Herbalife Supplements Chennai, SKIN Products Villivakkam, Herbalife Nutrition Products Kolathur, Best Herbalife Products Chennai, Herbalife Centre Kolathur, Nutrition Products Villivakkam"
      />

      <div className="bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_55%),_radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.15),_transparent_40%),_linear-gradient(to_bottom,_#f8fff1,_#ffffff)]">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(6,78,59,0.75), rgba(6,95,70,0.75)), url(${productsHero})`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,_211,_153,_0.3),_transparent_55%)]" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-sm uppercase tracking-[0.3em] mb-4">Full product library</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Herbalife Products in Kolathur, Chennai & Villivakkam</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              New Life Wellness Centre offers 55+ curated Herbalife nutrition products in Kolathur, Chennai, and Villivakkam. Discover authentic Herbalife products spanning nutrition, performance, and self-care—filter by category, flavour, size, and price to find your perfect match at the best nutrition centre in Kolathur, Chennai.
            </p>
          </div>
        </section>

        {/* Category Rail */}
        <section className="py-6 backdrop-blur sticky top-16 z-30 border-y border-white/50 bg-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={
                    selectedCategory === category.id
                      ? "gradient-wellness border-none shadow-lg shadow-emerald-200"
                      : "bg-white/70 backdrop-blur"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Filters, Sorting, Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Showing {sortedProducts.length} of {totalProducts} result(s)
                </p>
                <h2 className="text-2xl font-semibold">Filters &amp; sorting</h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <label className="text-sm font-medium text-muted-foreground" htmlFor="sort-select">
                  Sort by
                </label>
                <select
                  id="sort-select"
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setShowFilters((prev) => !prev)}
                  aria-label="Toggle filters"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-[300px_1fr]">
              <aside className={`${showFilters ? "block" : "hidden"} md:block`}>
                <div className="rounded-3xl border border-white/60 bg-white/80 p-6 space-y-6 shadow-xl shadow-emerald-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Filter products</h3>
                    <button
                      type="button"
                      className="text-sm font-medium text-primary"
                      onClick={clearFilters}
                    >
                      Clear all
                    </button>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Flavour</p>
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                      {flavourOptions.map((flavour) => (
                        <label key={flavour} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={selectedFlavours.includes(flavour)}
                            onChange={() => toggleFilterValue(flavour, selectedFlavours, setSelectedFlavours)}
                            className="h-4 w-4 rounded border-muted-foreground/30"
                          />
                          {flavour}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Price</p>
                    <div className="space-y-2">
                      {PRICE_FILTERS.map((filter) => (
                        <label key={filter.id} className="flex items-center gap-2 text-sm">
                          <input
                            type="radio"
                            name="price-range"
                            value={filter.id}
                            checked={selectedPrice === filter.id}
                            onChange={(event) => setSelectedPrice(event.target.value)}
                            className="h-4 w-4"
                          />
                          {filter.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Size</p>
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                      {sizeOptions.map((size) => (
                        <label key={size} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={selectedSizes.includes(size)}
                            onChange={() => toggleFilterValue(size, selectedSizes, setSelectedSizes)}
                            className="h-4 w-4 rounded border-muted-foreground/30"
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sortedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="border border-white/60 shadow-2xl shadow-emerald-50/70 transition hover:-translate-y-1 hover:shadow-emerald-200/80 rounded-3xl bg-white/90 backdrop-blur"
                  >
                    <CardContent className="p-6 space-y-5">
                      <div className="relative h-52 rounded-2xl overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain bg-white"
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className="h-full w-full flex items-center justify-center text-6xl"
                            style={{ background: getProductVisual(product).gradient }}
                          >
                            {getProductVisual(product).emoji}
                          </div>
                        )}
                        <span
                          className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full opacity-70"
                          style={{ backgroundColor: getProductVisual(product).accent }}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline">
                          {product.categories
                            .map((categoryId) => CATEGORIES.find((cat) => cat.id === categoryId)?.label)
                            .filter(Boolean)
                            .slice(0, 1)
                            .join("")}
                        </Badge>
                        {product.tag && (
                          <Badge className="bg-primary/15 text-primary px-3 py-1 rounded-full">
                            {product.tag}
                          </Badge>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          {product.flavour ? (
                            <span>
                              {product.flavour}
                              <span className="text-muted-foreground font-normal"> · {product.name}</span>
                            </span>
                          ) : (
                            product.name
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                      </div>

                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          Size: <span className="font-medium text-foreground">{product.size}</span>
                          {product.sizeNote && <span className="text-xs text-muted-foreground"> {product.sizeNote}</span>}
                        </p>
                        {product.flavourNote && <p>{product.flavourNote}</p>}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-emerald-700">
                            {priceFormatter.format(product.price)}
                          </p>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            MRP (incl. of all taxes)
                          </p>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {sortedProducts.indexOf(product) + 1}/{sortedProducts.length}
                        </span>
                      </div>

                      <Button
                        className="w-full gradient-wellness shadow-lg shadow-emerald-200"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to My List
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                {sortedProducts.length === 0 && (
                  <div className="col-span-full rounded-2xl border border-dashed p-10 text-center">
                    <p className="text-lg font-semibold">No results match the selected filters.</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Try clearing some filters or choosing a different category.
                    </p>
                    <Button className="mt-4" variant="outline" onClick={clearFilters}>
                      Reset filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white/80">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">How to Order</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Select the products you're interested in and add them to your list.
              We'll contact you to discuss your personalized nutrition plan and complete your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-wellness">
                <a href="/book-consultation">Book Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Products;
