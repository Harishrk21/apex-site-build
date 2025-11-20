import { useMemo, useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, SlidersHorizontal, X, Trash2, ShoppingBag, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import productsHero from "@/assets/products-hero.jpg";
import { toast } from "sonner";

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
    image:"https://m.media-amazon.com/images/I/41GFiRzRbYL._SY300_SX300_QL70_FMwebp_.jpg"
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
  const { addToCart, cart, removeFromCart, clearCart, cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFlavours, setSelectedFlavours] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState<string | null>(null);
  
  // Pagination state for mobile
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Show 6 products per page on mobile

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

  const handleBuyNow = async (product: Product) => {
    setIsBuyingNow(product.id);
    try {
      const productName = product.flavour ? `${product.name} - ${product.flavour}` : product.name;
      const response = await fetch("https://formspree.io/f/xzzybgbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Product Enquiry - Buy Now",
          productName: productName,
          productSize: product.size,
          productPrice: priceFormatter.format(product.price),
          message: `I'm interested in purchasing: ${productName} (${product.size}) - ${priceFormatter.format(product.price)}`,
          _formType: "Product Enquiry - Buy Now",
        }),
      });

      if (response.ok) {
        toast.success("Enquiry sent! We'll contact you shortly.");
      } else {
        throw new Error("Failed to send enquiry");
      }
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again.");
      console.error("Buy Now error:", error);
    } finally {
      setIsBuyingNow(null);
    }
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsCheckingOut(true);
    try {
      const productsList = cart
        .map((item) => `${item.name}${item.size ? ` (${item.size})` : ""} - ${item.price ? priceFormatter.format(item.price) : "Price on request"}`)
        .join("\n");
      
      const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);

      const response = await fetch("https://formspree.io/f/xzzybgbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Product Enquiry - Checkout",
          products: productsList,
          totalItems: cart.length,
          totalPrice: priceFormatter.format(totalPrice),
          message: `I'm interested in the following products:\n\n${productsList}\n\nTotal: ${priceFormatter.format(totalPrice)}`,
          _formType: "Product Enquiry - Checkout",
        }),
      });

      if (response.ok) {
        toast.success("Enquiry sent! We'll contact you shortly.");
        clearCart();
        setIsCartOpen(false);
      } else {
        throw new Error("Failed to send enquiry");
      }
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again.");
      console.error("Checkout error:", error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  // Pagination logic
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = isMobile ? sortedProducts.slice(startIndex, endIndex) : sortedProducts;

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedFlavours, selectedSizes, selectedPrice, sortOption]);

  return (
    <main>
      <SEO
        title="Herbalife Products - Premium Nutrition Products in Kolathur, Chennai, Villivakkam | New Life Wellness Centre"
        description="Buy authentic Herbalife nutrition products in Kolathur, Chennai, and Villivakkam at New Life Wellness Centre. Explore our complete range of Herbalife products including Formula 1 shakes, supplements, skin care, vitamins, and targeted nutrition for your wellness goals. Best nutrition centre in Kolathur, Chennai."
        canonical="/products"
        keywords="Herbalife Products Kolathur, Buy Herbalife Chennai, Herbalife Products Villivakkam, Formula 1 Shake Kolathur, Herbalife Supplements Chennai, SKIN Products Villivakkam, Herbalife Nutrition Products Kolathur, Best Herbalife Products Chennai, Herbalife Centre Kolathur, Nutrition Products Villivakkam"
      />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50/30 to-white">
        {/* Hero Section */}
        <section className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url(${productsHero})`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(52,211,153,0.3),_transparent_50%)]" />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
            <p className="text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3 opacity-90">Full product library</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Herbalife Products in Kolathur, Chennai & Villivakkam
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto opacity-90">
              Discover 50+ authentic Herbalife nutrition products at New Life Wellness Centre
            </p>
          </div>
        </section>

        {/* Sticky Category & Cart Bar */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Category Scroll */}
              <div className="flex-1 overflow-x-auto scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
                <div className="flex gap-1.5 sm:gap-2 min-w-max">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                        selectedCategory === category.id
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex-shrink-0 p-2 sm:p-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 md:py-10">
          {/* Filters & Sort Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {sortedProducts.length} of {totalProducts} products
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-1">Our Products</h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="flex-1 sm:flex-none min-w-[160px] px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] gap-6">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? "block" : "hidden"} md:block`}>
              <div className="bg-white rounded-2xl border shadow-lg p-4 sm:p-5 space-y-5 sticky top-24">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold">Filters</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Clear all
                  </button>
                </div>

                {/* Price Filter */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Price Range</p>
                  <div className="space-y-2">
                    {PRICE_FILTERS.map((filter) => (
                      <label key={filter.id} className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-600">
                        <input
                          type="radio"
                          name="price"
                          value={filter.id}
                          checked={selectedPrice === filter.id}
                          onChange={(e) => setSelectedPrice(e.target.value)}
                          className="accent-emerald-600"
                        />
                        {filter.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Flavour Filter */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Flavour</p>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {flavourOptions.map((flavour) => (
                      <label key={flavour} className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-600">
                        <input
                          type="checkbox"
                          checked={selectedFlavours.includes(flavour)}
                          onChange={() => toggleFilterValue(flavour, selectedFlavours, setSelectedFlavours)}
                          className="accent-emerald-600"
                        />
                        {flavour}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Size</p>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {sizeOptions.map((size) => (
                      <label key={size} className="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-600">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => toggleFilterValue(size, selectedSizes, setSelectedSizes)}
                          className="accent-emerald-600"
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="space-y-6">
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-emerald-200">
                    <CardContent className="p-4 space-y-4">
                      {/* Product Image */}
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-6xl"
                            style={{ background: getProductVisual(product).gradient }}
                          >
                            {getProductVisual(product).emoji}
                          </div>
                        )}
                        {product.tag && (
                          <Badge className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-1 text-xs">
                            {product.tag}
                          </Badge>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {CATEGORIES.find((c) => c.id === product.categories[0])?.label}
                        </Badge>
                        
                        <h3 className="font-bold text-base sm:text-lg leading-tight line-clamp-2">
                          {product.flavour ? `${product.flavour} · ${product.name}` : product.name}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                        
                        <p className="text-xs text-gray-500">
                          Size: <span className="font-medium text-gray-700">{product.size}</span>
                          {product.sizeNote && <span className="ml-1">{product.sizeNote}</span>}
                        </p>
                      </div>

                      {/* Price & Actions */}
                      <div className="space-y-3 pt-2 border-t">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <p className="text-xl sm:text-2xl font-bold text-emerald-700">
                              {priceFormatter.format(product.price)}
                            </p>
                            <p className="text-xs text-gray-500">MRP (incl. taxes)</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                            Add
                          </button>
                          <button
                            onClick={() => handleBuyNow(product)}
                            disabled={isBuyingNow === product.id}
                            className="px-3 py-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                          >
                            <Zap className="h-3.5 w-3.5" />
                            {isBuyingNow === product.id ? "Sending..." : "Buy"}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* No Results */}
                {sortedProducts.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed">
                    <p className="text-lg font-semibold mb-2">No products found</p>
                    <p className="text-gray-600 mb-4">Try adjusting your filters</p>
                    <button
                      onClick={clearFilters}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Pagination */}
              {isMobile && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <span className="px-4 py-2 text-sm font-medium">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsCartOpen(false)}
            />
            <div className="relative w-full sm:w-96 bg-white shadow-2xl flex flex-col max-h-screen">
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold">My Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">Your cart is empty</p>
                    <p className="text-sm text-gray-500">Add products to get started</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                        <div className="flex justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm sm:text-base leading-tight break-words">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">Size: {item.size}</p>
                            <p className="text-sm sm:text-base font-bold text-emerald-700 mt-2">
                              {item.price ? priceFormatter.format(item.price) : "Price on request"}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex-shrink-0 p-2 hover:bg-red-50 rounded-lg transition-colors self-start"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t p-4 sm:p-6 bg-white space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        {priceFormatter.format(cart.reduce((sum, item) => sum + (item.price || 0), 0))}
                      </span>
                    </div>
                    <div className="flex justify-between text-base sm:text-lg font-bold">
                      <span>Total</span>
                      <span className="text-emerald-700">
                        {priceFormatter.format(cart.reduce((sum, item) => sum + (item.price || 0), 0))}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      {isCheckingOut ? "Sending Enquiry..." : "Checkout & Send Enquiry"}
                    </button>
                    
                    <button
                      onClick={clearCart}
                      className="w-full py-2.5 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-base sm:text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
              Add products to your cart and send us an enquiry. Our nutrition experts will contact you to create your personalized plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/book-consultation"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Products;
