// src/config/seoConfig.ts
// Complete SEO Configuration for New Life Wellness Centre

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface AddressConfig {
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface BaseSEOConfig {
  siteName: string;
  tagline: string;
  baseUrl: string;
  defaultDescription: string;
  defaultKeywords: string[];
  defaultOgImage: string;
  location: string;
  areas: string[];
  phone: string;
  whatsapp: string;
  email: string;
  address: AddressConfig;
  socialMedia: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export const baseSEO: BaseSEOConfig = {
  siteName: "New Life Wellness Centre",
  tagline: "Herbalife Nutrition Coach Centre",
  baseUrl: "https://www.kolathurwellnesscentre.com",
  defaultDescription:
    "New Life Wellness Centre is Kolathur's trusted Herbalife nutrition hub serving Villivakkam, Perambur, and Chennai with personalized weight loss, gain, and lifestyle programs from certified coaches.",
  defaultKeywords: [
    "Herbalife Kolathur",
    "Wellness Centre Chennai",
    "Nutrition Coach Villivakkam",
    "Weight Loss Kolathur",
    "Wellness Programs Chennai",
    "Perambur Wellness Coach",
    "Kolathur Wellness Centre",
    "Villivakkam Nutritionist"
  ],
  defaultOgImage: "https://www.kolathurwellnesscentre.com/heros.png",
  location: "Kolathur, Chennai",
  areas: [
    "Kolathur",
    "Villivakkam",
    "Korattur",
    "Perambur",
    "Madhavaram",
    "Thirumangalam",
    "Anna Nagar",
    "Ambattur",
    "Chennai"
  ],
  phone: "+91 98849 88988",
  whatsapp: "+91 98849 88988",
  email: "info@kolathurwellnesscentre.com",
  address: {
    street: "New Life Wellness Centre, Kolathur",
    locality: "Kolathur",
    region: "Tamil Nadu",
    postalCode: "600099",
    country: "IN"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/newlifewellnesscentre",
    instagram: "https://www.instagram.com/newlifewellnesscentre",
    youtube: "https://youtube.com/@newlifewellness"
  }
};
  
  export const seoPages: Record<string, SEOConfig> = {
    home: {
      title: "New Life Wellness Centre - Herbalife Nutrition Coach in Kolathur, Chennai | Weight Loss & Wellness",
    description: "Transform your life at New Life Wellness Centre—Kolathur, Villivakkam, Perambur, and greater Chennai's premier Herbalife Nutrition Coach hub. Expert weight loss, weight gain, and wellness programs from certified local coaches. Book your free consultation today!",
      keywords: [
        "herbalife in Kolathur",
        "wellness centre in Kolathur",
        "herbalife nutrition Chennai",
        "weight loss centre Kolathur",
        "herbalife coach Kolathur",
        "nutrition centre Chennai",
        "New Life Wellness Centre",
        "weight management Kolathur",
        "herbalife products Chennai",
        "wellness coach near me",
        "fitness centre Kolathur",
        "diet consultant Chennai",
        "health transformation Kolathur"
      ],
    },
  
    about: {
      title: "About New Life Wellness Centre | Herbalife Coach Centre in Kolathur, Chennai",
      description: "Meet the certified Herbalife nutrition coaches at New Life Wellness Centre in Kolathur. Our story, mission, and commitment to transforming lives through nutrition and wellness in Chennai.",
      keywords: [
        "about New Life Wellness",
        "herbalife coach Kolathur",
        "certified nutrition coach Chennai",
        "wellness centre story",
        "herbalife distributor Kolathur"
      ],
    },
  
    herbalifeStory: {
      title: "Herbalife Story | Premium Nutrition Products | New Life Wellness Kolathur",
      description: "Discover Herbalife's 40+ year legacy of science-backed nutrition. Learn why New Life Wellness Centre in Kolathur, Chennai trusts Herbalife products for health transformation.",
      keywords: [
        "herbalife story",
        "herbalife history",
        "herbalife products Chennai",
        "nutrition science",
        "herbalife india Kolathur"
      ],
    },
  
    programs: {
      title: "Wellness Programs | Herbalife Nutrition Plans in Kolathur, Chennai",
    description: "Explore personalized wellness programs at New Life Wellness Centre for Kolathur, Villivakkam, Perambur, and all of Chennai. Weight loss, weight gain, muscle building, heart health, immunity, and complete wellness solutions tailored to every neighbourhood.",
      keywords: [
        "wellness programs Kolathur",
        "herbalife programs Chennai",
        "weight loss program Kolathur",
        "nutrition plans Chennai",
        "health programs near me"
      ],
    },
  
    weightManagement: {
      title: "Weight Management Program in Kolathur | Herbalife Weight Loss & Gain - New Life",
      description: "Professional weight management solutions in Kolathur, Chennai. Lose weight, gain weight, or maintain healthy weight with Herbalife nutrition and expert coaching at New Life Wellness Centre.",
      keywords: [
        "weight management Kolathur",
        "weight loss program Chennai",
        "weight gain program Kolathur",
        "herbalife weight loss",
        "diet plan Kolathur",
        "weight management near me"
      ],
    },
  
    loseWeight: {
      title: "Weight Loss Program in Kolathur | Herbalife Fat Loss Plan - New Life Wellness",
      description: "Proven weight loss program in Kolathur, Chennai. Lose weight safely with Herbalife nutrition, personalized diet plans, and expert coaching. Real results. Book free consultation at New Life Wellness Centre!",
      keywords: [
        "weight loss in Kolathur",
        "fat loss program Chennai",
        "herbalife weight loss Kolathur",
        "lose weight fast Chennai",
        "weight reduction Kolathur",
        "slimming centre Kolathur",
        "diet for weight loss Chennai",
        "weight loss coach near me",
        "best weight loss program Kolathur"
      ],
    },
  
    gainWeight: {
      title: "Weight Gain Program in Kolathur | Herbalife Mass Gainer - New Life Wellness Chennai",
      description: "Healthy weight gain program in Kolathur, Chennai. Build mass, gain weight naturally with Herbalife nutrition and personalized plans. Expert guidance at New Life Wellness Centre.",
      keywords: [
        "weight gain program Kolathur",
        "mass gainer Chennai",
        "herbalife weight gain",
        "gain weight naturally Kolathur",
        "weight gain diet Chennai",
        "underweight solution Kolathur"
      ],
    },
  
    gainMuscle: {
      title: "Muscle Building Program in Kolathur | Herbalife Protein & Fitness - New Life",
      description: "Build lean muscle with Herbalife sports nutrition in Kolathur. Muscle gain program, protein supplements, workout nutrition. Professional guidance at New Life Wellness Centre, Chennai.",
      keywords: [
        "muscle building Kolathur",
        "protein supplements Chennai",
        "herbalife sports nutrition",
        "gain muscle mass Kolathur",
        "fitness nutrition Chennai",
        "bodybuilding supplements Kolathur"
      ],
    },
  
    skinCare: {
      title: "Skin Care Program in Kolathur | Herbalife Skin Products - New Life Wellness Chennai",
      description: "Radiant skin from within. Herbalife SKIN products and nutrition-based skin care solutions in Kolathur, Chennai. Achieve glowing, healthy skin at New Life Wellness Centre.",
      keywords: [
        "skin care Kolathur",
        "herbalife skin products Chennai",
        "skin nutrition Kolathur",
        "anti-aging Chennai",
        "glowing skin program Kolathur"
      ],
    },
  
    heartHealth: {
      title: "Heart Health Program in Kolathur | Cardiovascular Wellness - New Life Chennai",
      description: "Support heart health with Herbalife nutrition in Kolathur. Cardiovascular wellness program, cholesterol management, heart-healthy diet plans at New Life Wellness Centre, Chennai.",
      keywords: [
        "heart health Kolathur",
        "cardiovascular wellness Chennai",
        "cholesterol management Kolathur",
        "heart healthy diet Chennai",
        "cardiac nutrition program"
      ],
    },
  
    boneJoint: {
      title: "Bone & Joint Health Program in Kolathur | Herbalife - New Life Wellness Chennai",
      description: "Strengthen bones and joints with targeted nutrition in Kolathur. Herbalife bone health supplements, joint support program at New Life Wellness Centre, Chennai.",
      keywords: [
        "bone health Kolathur",
        "joint health Chennai",
        "calcium supplements Kolathur",
        "arthritis nutrition Chennai",
        "bone strength program Kolathur"
      ],
    },
  
    digestiveHealth: {
      title: "Digestive Health Program in Kolathur | Gut Health - New Life Wellness Chennai",
      description: "Improve digestive health with Herbalife nutrition in Kolathur. Gut health program, probiotics, digestive support at New Life Wellness Centre, Chennai.",
      keywords: [
        "digestive health Kolathur",
        "gut health Chennai",
        "probiotics Kolathur",
        "digestion problems Chennai",
        "digestive wellness program"
      ],
    },
  
    immunitySupport: {
      title: "Immunity Boosting Program in Kolathur | Herbalife - New Life Wellness Chennai",
      description: "Strengthen your immune system with Herbalife nutrition in Kolathur. Immunity support program, vitamin supplements at New Life Wellness Centre, Chennai.",
      keywords: [
        "immunity booster Kolathur",
        "immune system Chennai",
        "vitamin supplements Kolathur",
        "immunity program Chennai",
        "health defense Kolathur"
      ],
    },
  
    brainHealth: {
      title: "Brain Health Program in Kolathur | Cognitive Wellness - New Life Chennai",
      description: "Enhance brain function and mental clarity with Herbalife nutrition in Kolathur. Brain health supplements, cognitive support at New Life Wellness Centre, Chennai.",
      keywords: [
        "brain health Kolathur",
        "cognitive wellness Chennai",
        "memory support Kolathur",
        "brain nutrition Chennai",
        "mental clarity program"
      ],
    },
  
    eyeHealth: {
      title: "Eye Health Program in Kolathur | Vision Support - New Life Wellness Chennai",
      description: "Support eye health with targeted nutrition in Kolathur. Herbalife vision supplements, eye care program at New Life Wellness Centre, Chennai.",
      keywords: [
        "eye health Kolathur",
        "vision support Chennai",
        "eye nutrition Kolathur",
        "vision care program Chennai"
      ],
    },
  
    sleepStress: {
      title: "Sleep & Stress Management in Kolathur | Relaxation Program - New Life Chennai",
      description: "Better sleep, less stress. Natural stress management and sleep support with Herbalife nutrition in Kolathur. Wellness coaching at New Life Wellness Centre, Chennai.",
      keywords: [
        "stress management Kolathur",
        "sleep problems Chennai",
        "relaxation program Kolathur",
        "stress relief Chennai",
        "better sleep Kolathur"
      ],
    },
  
    womensWellness: {
      title: "Women's Wellness Program in Kolathur | Herbalife for Women - New Life Chennai",
      description: "Complete women's wellness solutions in Kolathur. Hormonal balance, pregnancy nutrition, women's health with Herbalife at New Life Wellness Centre, Chennai.",
      keywords: [
        "women's wellness Kolathur",
        "women's health Chennai",
        "female nutrition Kolathur",
        "hormonal balance Chennai",
        "pregnancy nutrition Kolathur"
      ],
    },
  
    mensHealth: {
      title: "Men's Wellness Program in Kolathur | Herbalife for Men - New Life Chennai",
      description: "Men's health and fitness solutions in Kolathur. Energy, vitality, performance nutrition with Herbalife at New Life Wellness Centre, Chennai.",
      keywords: [
        "men's wellness Kolathur",
        "men's health Chennai",
        "male fitness Kolathur",
        "energy supplements Chennai",
        "men's nutrition program"
      ],
    },
  
    kidsNutrition: {
      title: "Kids Nutrition Program in Kolathur | Children's Health - New Life Wellness Chennai",
      description: "Healthy nutrition for growing kids in Kolathur. Children's wellness program, balanced nutrition with Herbalife at New Life Wellness Centre, Chennai.",
      keywords: [
        "kids nutrition Kolathur",
        "children's health Chennai",
        "child wellness Kolathur",
        "kids supplements Chennai",
        "children nutrition program"
      ],
    },
  
    healthyBreakfast: {
      title: "Healthy Breakfast Program in Kolathur | Herbalife Shakes - New Life Chennai",
      description: "Start your day right with Herbalife healthy breakfast in Kolathur. Nutritious breakfast shakes, energy boost at New Life Wellness Centre, Chennai.",
      keywords: [
        "healthy breakfast Kolathur",
        "herbalife shake Chennai",
        "breakfast nutrition Kolathur",
        "morning shake Chennai",
        "nutritious breakfast program"
      ],
    },
  
    healthyActiveLifestyle: {
      title: "Active Lifestyle Program in Kolathur | Fitness & Nutrition - New Life Chennai",
      description: "Fuel your active lifestyle with Herbalife nutrition in Kolathur. Energy, stamina, fitness nutrition at New Life Wellness Centre, Chennai.",
      keywords: [
        "active lifestyle Kolathur",
        "fitness nutrition Chennai",
        "energy supplements Kolathur",
        "sports nutrition Chennai",
        "active living program"
      ],
    },
  
    dietPlans: {
      title: "Personalized Diet Plans in Kolathur | Herbalife Nutrition - New Life Chennai",
      description: "Custom diet plans in Kolathur, Chennai. Personalized nutrition coaching with Herbalife. Weight loss, weight gain, wellness diets at New Life Wellness Centre.",
      keywords: [
        "diet plan Kolathur",
        "personalized diet Chennai",
        "nutrition coaching Kolathur",
        "custom diet plan Chennai",
        "meal plan Kolathur",
        "diet chart Chennai"
      ],
    },
  
    overallWellbeing: {
      title: "Overall Wellbeing Program in Kolathur | Complete Health - New Life Chennai",
      description: "Holistic health and wellbeing with Herbalife nutrition in Kolathur. Mind, body, and soul wellness at New Life Wellness Centre, Chennai.",
      keywords: [
        "overall wellbeing Kolathur",
        "holistic health Chennai",
        "total wellness Kolathur",
        "complete health Chennai",
        "wellbeing program"
      ],
    },
  
    completeWellness: {
      title: "Complete Wellness Program in Kolathur | 360° Health - New Life Chennai",
      description: "Comprehensive 360° wellness program in Kolathur. Complete health transformation with Herbalife nutrition and expert coaching at New Life Wellness Centre, Chennai.",
      keywords: [
        "complete wellness Kolathur",
        "360 health Chennai",
        "comprehensive wellness Kolathur",
        "total health program Chennai"
      ],
    },
  
    products: {
      title: "Herbalife Products in Kolathur | Nutrition Supplements - New Life Wellness Chennai",
    description: "Authentic Herbalife products for Kolathur, Villivakkam, Perambur, Ambattur, and Chennai. Shakes, supplements, vitamins, protein, and skin care with expert guidance from New Life Wellness Centre.",
      keywords: [
        "herbalife products Kolathur",
        "herbalife shake Chennai",
        "nutrition supplements Kolathur",
        "protein powder Chennai",
        "herbalife distributor Kolathur",
        "buy herbalife Chennai",
        "herbalife shop near me"
      ],
    },
  
    transformations: {
      title: "Success Stories | Weight Loss Transformations in Kolathur - New Life Wellness",
      description: "Real transformation stories from Kolathur, Chennai. See amazing before-after results with Herbalife nutrition at New Life Wellness Centre. Your success starts here!",
      keywords: [
        "weight loss transformation Kolathur",
        "success stories Chennai",
        "before after Kolathur",
        "herbalife results Chennai",
        "transformation journey"
      ],
    },
  
    results: {
      title: "Real Results | Client Success in Kolathur - New Life Wellness Centre Chennai",
      description: "Proven results from New Life Wellness Centre in Kolathur. Real people, real transformations with Herbalife nutrition coaching in Chennai.",
      keywords: [
        "weight loss results Kolathur",
        "client success Chennai",
        "herbalife results Kolathur",
        "wellness success stories"
      ],
    },
  
    gallery: {
      title: "Gallery | New Life Wellness Centre Photos - Kolathur, Chennai",
      description: "Explore New Life Wellness Centre in Kolathur. Photos of our facility, events, transformations, and happy clients in Chennai.",
      keywords: [
        "wellness centre photos Kolathur",
        "herbalife events Chennai",
        "gallery Kolathur",
        "wellness centre images"
      ],
    },
  
    blog: {
      title: "Health & Wellness Blog | Nutrition Tips from Kolathur - New Life Wellness",
      description: "Expert health, nutrition, and wellness tips from certified Herbalife coaches in Kolathur, Chennai. Stay updated with New Life Wellness Centre blog.",
      keywords: [
        "health blog Kolathur",
        "nutrition tips Chennai",
        "wellness articles Kolathur",
        "herbalife blog Chennai"
      ],
    },
  
    contact: {
      title: "Contact New Life Wellness Centre | Herbalife Coach in Kolathur, Chennai",
    description: "Get in touch with New Life Wellness Centre serving Kolathur, Villivakkam, Perambur, Korattur, and Chennai. Visit us, call, or WhatsApp for a free consultation. Find directions, timings, and contact details.",
      keywords: [
        "contact wellness centre Kolathur",
        "herbalife coach contact Chennai",
        "wellness centre location Kolathur",
        "New Life Wellness address"
      ],
    },
  
    bookConsultation: {
      title: "Book Free Consultation | New Life Wellness Centre Kolathur, Chennai",
    description: "Schedule your FREE nutrition consultation for Kolathur, Villivakkam, Perambur, Ambattur, and Chennai. Meet certified Herbalife coaches and get a personalized wellness plan at New Life Wellness Centre.",
      keywords: [
        "free consultation Kolathur",
        "book appointment Chennai",
        "nutrition consultation Kolathur",
        "wellness consultation Chennai",
        "free health checkup Kolathur"
      ],
    },
  
    privacyPolicy: {
      title: "Privacy Policy | New Life Wellness Centre Kolathur",
      description: "Privacy policy for New Life Wellness Centre. How we protect your personal information and data.",
      keywords: ["privacy policy", "data protection", "New Life Wellness privacy"],
    },
  
    terms: {
      title: "Terms & Conditions | New Life Wellness Centre Kolathur",
      description: "Terms and conditions for services at New Life Wellness Centre, Kolathur, Chennai.",
      keywords: ["terms and conditions", "service terms", "New Life Wellness terms"],
    },
  
    disclaimer: {
      title: "Disclaimer | New Life Wellness Centre Kolathur",
      description: "Important disclaimer about services and products offered at New Life Wellness Centre, Kolathur, Chennai.",
      keywords: ["disclaimer", "legal notice", "New Life Wellness disclaimer"],
    },
  };
  
  // Helper function for route to SEO key mapping
  export const routeToSEOKey = (pathname: string): keyof typeof seoPages => {
    const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '');
    
    const mapping: Record<string, keyof typeof seoPages> = {
      '': 'home',
      'about': 'about',
      'herbalife-story': 'herbalifeStory',
      'programs': 'programs',
      'programs/weight-management': 'weightManagement',
      'programs/lose-weight': 'loseWeight',
      'programs/gain-weight': 'gainWeight',
      'programs/gain-muscle': 'gainMuscle',
      'programs/skin-care': 'skinCare',
      'programs/heart-health': 'heartHealth',
      'programs/bone-joint': 'boneJoint',
      'programs/gut-health': 'digestiveHealth',
      'programs/immunity-support': 'immunitySupport',
      'programs/brain-immune': 'brainHealth',
      'programs/eye-health': 'eyeHealth',
      'programs/sleep-stress': 'sleepStress',
      'programs/women-wellness': 'womensWellness',
      'programs/men-wellness': 'mensHealth',
      'programs/kids-nutrition': 'kidsNutrition',
      'programs/healthy-breakfast': 'healthyBreakfast',
      'programs/healthy-active-lifestyle': 'healthyActiveLifestyle',
      'programs/active-lifestyle': 'healthyActiveLifestyle',
      'programs/diet-plans': 'dietPlans',
      'programs/wellbeing': 'overallWellbeing',
      'programs/complete-wellness': 'completeWellness',
      'products': 'products',
      'transformations': 'transformations',
      'results': 'results',
      'gallery': 'gallery',
      'blog': 'blog',
      'contact': 'contact',
      'book-consultation': 'bookConsultation',
      'privacy-policy': 'privacyPolicy',
      'terms': 'terms',
      'disclaimer': 'disclaimer',
    };
  
    return mapping[cleanPath] || 'home';
  };