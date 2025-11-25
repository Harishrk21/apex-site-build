
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Calendar,
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
  Brain,
  Trophy,
  Activity,
  Shield,
  Target,
  Clock,
  Heart,
  Coffee,
  Waves,
  Leaf,
  Utensils,
  Smile,
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import digestiveHero from "@/assets/products-hero.jpg"; // change to your image

const DigestiveHealth = () => {
  const pricingTiers = [
    {
      name: "7-Day Gut Reset",
      duration: "7 days",
      price: "Contact for price",
      features: [
        "Digestive health assessment",
        "7-day Aloe & Probiotic trial pack",
        "Gut-friendly meal plan",
        "Hydration guide",
        "Daily checking for bloating relief",
      ],
    },
    {
      name: "Total Gut Restoration",
      duration: "30 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Deep-dive microbiome analysis",
        "30-day Core Pack (Aloe, Fiber, Probiotic, Shake)",
        "Anti-inflammatory diet protocol",
        "Weekly gut-brain coaching calls",
        "Elimination diet guidance",
        "Unlimited WhatsApp support",
        "Stress management toolkit",
        "Digestive enzyme education",
      ],
    },
    {
      name: "Microbiome Mastery",
      duration: "90 days",
      price: "Contact for price",
      features: [
        "Full digestive system overhaul",
        "90-day advanced product supply",
        "Food sensitivity re-introduction plan",
        "Private wellness community",
        "Advanced gut-healing recipes",
        "Skin-Gut connection protocol",
        "Lifetime maintenance strategy",
        "Family digestive health plan",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Why is Herbal Aloe Concentrate better than store-bought juice?",
      answer: "Store-bought aloe juice often contains 'aloin,' a laxative that causes cramping and bitterness. Herbalife Aloe Concentrate is premium quality, aloin-free, and cold-processed to retain enzymes. It's essentially a 'shower for your insides'—soothing inflammation and improving nutrient absorption by up to 40%.",
    },
    {
      question: "I eat yogurt. Do I still need Simply Probiotic?",
      answer: "Yes. Most bacteria in yogurt die in your stomach acid before reaching the intestines. Herbalife Simply Probiotic uses a patented strain (GanedenBC30) designed to survive the acidic stomach environment and germinate exactly where needed. Plus, it has zero calories and no added sugar, unlike most yogurts.",
    },
    {
      question: "Will taking fiber make me more bloated?",
      answer: "If you increase fiber too fast, yes. That's why our program creates a 'ramp-up' schedule. We start slow with Active Fiber Complex (which is a balanced blend of soluble and insoluble fiber) to gently train your gut, ensuring regular movements without gas or discomfort.",
    },
    {
      question: "Can this help with acid reflux and heartburn?",
      answer: "Absolutely. Our protocol focuses on soothing the esophageal lining (using Aloe), neutralizing acidity through alkaline nutrition (Formula 1), and identifying trigger foods. Many clients reduce their reliance on antacids within 2–4 weeks.",
    },
    {
      question: "Is there a connection between my gut and my mood/anxiety?",
      answer: "100%. The gut is called the 'Second Brain' because it produces 90% of your serotonin (the happiness hormone). By healing your gut microbiome, you often experience better mood, reduced anxiety, and sharper mental clarity. We address this Gut-Brain Axis directly.",
    },
    {
      question: "Can I eat normal food on this plan?",
      answer: "Yes! We advocate for a 'clean gut' diet. We will teach you which foods cause inflammation (sugar, processed gluten, bad fats) and how to replace them with delicious, gut-healing whole foods. You won't starve; you'll just eat smarter.",
    },
    {
      question: "I have constipation issues. How fast will this work?",
      answer: "Hydration (Aloe) + Fiber is the magic combination for motility. Most clients experience significant relief and regularity within 3 to 7 days of following the protocol consistently.",
    },
  ];

  const mistakesData = [
    { mistake: "Overusing antacids", consequence: "Reduces stomach acid needed for digestion, worsening issues long-term", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "Ignoring fiber intake", consequence: "Constipation, toxin buildup, and poor gut bacteria feed", icon: <Leaf className="w-5 h-5" /> },
    { mistake: "Eating too fast", consequence: "Swallowing air and skipping the 'chewing' digestion phase", icon: <Clock className="w-5 h-5" /> },
    { mistake: "Drinking water with meals", consequence: "Dilutes digestive enzymes (we teach proper timing)", icon: <Waves className="w-5 h-5" /> },
    { mistake: "High sugar consumption", consequence: "Feeds bad bacteria (Candida) causing bloating and brain fog", icon: <Zap className="w-5 h-5" /> },
    { mistake: "Chronic stress", consequence: "Shuts down digestion via the vagus nerve", icon: <Brain className="w-5 h-5" /> },
    { mistake: "Self-diagnosing", consequence: "Cutting out random food groups without a strategy", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Digestive Health Program - Heal Your Gut | New Life Wellness Centre Kolathur, Chennai"
        description="Stop bloating, acidity, and fatigue. Restore your microbiome with Herbalife Aloe, Probiotics, and Fiber at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. The ultimate gut reset program. Best digestive health program in Kolathur, Chennai."
        canonical="/programs/digestive-health"
        keywords="Digestive Health Program Kolathur, Gut Health Chennai, Bloating Relief Villivakkam, Acid Reflux Natural Cure Kolathur, Herbal Aloe Concentrate Chennai, Probiotics Villivakkam, Best Digestive Health Program Kolathur, Gut Health Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Heal Your Gut, Transform Your Life"
        tagline="Banishing bloating, acidity, and fatigue by restoring your body's 'Second Brain'"
      />

      {/* The Silent Epidemic */}
      <section className="py-20 relative">
        {/* 🔥 Inline CSS */}
        <style>
          {`
            .scroll-track {
              display: flex;
              width: max-content;
              animation: scroll-left 28s linear infinite;
              white-space: nowrap;
            }

            @keyframes scroll-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}
        </style>

        {/* 🚨 Full-Width Running Banner */}
        <div className="absolute left-0 w-screen -translate-x-[calc((100vw-100%)/2)] bg-red-600 border-y-4 border-red-800 py-2 overflow-hidden z-20">
          <div className="scroll-track font-extrabold text-white text-base sm:text-lg tracking-wide drop-shadow-lg">
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp;
          </div>
        </div>

        {/* 👇 Increased top padding so nothing overlaps */}
        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Disease Begins in the Gut</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your gut is the gateway to health. It controls your immunity, your mood, your skin, and your energy. Yet, modern diets and stress are destroying our microbiome. It's time to rebuild.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* The Toxic Gut */}
            <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">Signs of a Toxic Gut</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Chronic bloating after meals (looking 'pregnant')",
                    "Acid reflux, heartburn, or GERD",
                    "Irregularity (Constipation or Diarrhea)",
                    "Brain fog, anxiety, and mood swings",
                    "Adult acne, eczema, or skin rashes",
                    "Constant sugar and carb cravings",
                    "Low immunity (getting sick often)",
                    "Food sensitivities developing suddenly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                      <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* The Healed Gut */}
            <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Life with a Balanced Microbiome</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Flat tummy and no discomfort after eating",
                    "Regular, healthy bowel movements daily",
                    "Clear, glowing skin from the inside out",
                    "Sharp mental focus and positive mood",
                    "Robust immune system",
                    "Natural energy that lasts all day",
                    "Better nutrient absorption from food",
                    "Deep, restorative sleep",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-green-800 dark:text-green-200">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Common Mistakes Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">7 Ways You Might Be Destroying Your Gut</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mistakesData.map((item, i) => (
                <Card key={i} className="border-none shadow-wellness hover:shadow-wellness-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-orange-900 dark:text-orange-100">❌ {item.mistake}</h4>
                        <p className="text-sm text-muted-foreground">{item.consequence}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need This Program */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Is Your Gut Crying for Help?</h2>
            <p className="text-xl text-muted-foreground">Listen to your body. Do you experience any of these?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "You rely on coffee to 'go' in the morning",
              "You feel sleepy immediately after lunch",
              "You carry antacids/ENO in your bag/car",
              "Your stomach feels heavy for hours after eating",
              "You have unexplained skin breakouts",
              "You wake up with a white coating on your tongue",
              "You feel bloated even when you drink water",
              "You struggle to lose weight despite dieting",
              "You have bad breath (halitosis) despite brushing",
              "You feel anxious or 'butterflies' in stomach often",
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all hover:scale-105">
                <CardContent className="p-6 flex items-start">
                  <Activity className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The 5 Pillars of Gut Health */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The 5 Pillars of Digestive Restoration</h2>
            <p className="text-xl text-muted-foreground">We don't just treat symptoms; we rebuild the ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Soothe & Cleanse",
                icon: <Waves className="w-8 h-8" />,
                benefits: [
                  "Heal the intestinal lining (Aloe)",
                  "Reduce inflammation and heat",
                  "Improve nutrient absorption villi",
                  "Gentle internal shower",
                ],
              },
              {
                title: "Inoculate (Probiotics)",
                icon: <Shield className="w-8 h-8" />,
                benefits: [
                  "Repopulate good bacteria",
                  "Crowd out bad bacteria/yeast",
                  "Boost immune response",
                  "Produce serotonin (mood)",
                ],
              },
              {
                title: "Feed (Prebiotics/Fiber)",
                icon: <Leaf className="w-8 h-8" />,
                benefits: [
                  "Food for the good bacteria",
                  "Scrub toxins from colon walls",
                  "Regulate blood sugar",
                  "Ensure regular elimination",
                ],
              },
              {
                title: "Gut Rest (Liquid Nutrition)",
                icon: <Coffee className="w-8 h-8" />,
                benefits: [
                  "Easy-to-digest meals (Formula 1)",
                  "Reducing digestive workload",
                  "Allowing energy for repair",
                  "Complete nutrient density",
                ],
              },
              {
                title: "Gut-Brain Connection",
                icon: <Brain className="w-8 h-8" />,
                benefits: [
                  "Managing stress triggers",
                  "Mindful eating practices",
                  "Vagus nerve activation",
                  "Better sleep hygiene",
                ],
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Herbalife for Gut Health */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The "Golden Trio" for Gut Health</h2>
            <p className="text-xl text-muted-foreground">Herbalife's science-backed products work synergistically to heal, seal, and protect.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Waves className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Herbal Aloe Concentrate</h3>
                <p className="text-muted-foreground mb-4">
                  The "healer." Premium quality aloe vera that soothes the stomach, relieves indigestion, and supports nutrient absorption.
                </p>
                <ul className="space-y-2">
                  {[
                    "Removes aloin (bitter laxative component)",
                    "Soothes stomach lining instantly",
                    "Improves water absorption",
                    "Great alternative to sugary sodas/juices",
                    "Supports self-cleaning of the gut",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Simply Probiotic</h3>
                <p className="text-muted-foreground mb-4">
                  The "protector." Contains GanedenBC30, a patented strain designed to survive stomach acid and reach the gut alive.
                </p>
                <ul className="space-y-2">
                  {[
                    "Survives gastric acidity (unlike many yogurts)",
                    "1 billion active cultures per serving",
                    "No refrigeration required (travel friendly)",
                    "Mixes easily with hot or cold drinks",
                    "Zero calories, no added sugar",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Active Fiber Complex</h3>
                <p className="text-muted-foreground mb-4">
                  The "scrubber." A balanced blend of soluble and insoluble fiber to promote regularity and feed good bacteria.
                </p>
                <ul className="space-y-2">
                  {[
                    "5g of fiber per serving",
                    "Soluble fiber to lower cholesterol/sugar",
                    "Insoluble fiber to move waste out",
                    "Promotes regularity without harsh laxatives",
                    "Delicious apple flavor",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Utensils className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  The "foundation." Easy-to-digest liquid nutrition that gives your digestive system a break while providing complete nourishment.
                </p>
                <ul className="space-y-2">
                  {[
                    "Pre-digested proteins for easy absorption",
                    "High fiber content",
                    "Low Glycemic Index (GI)",
                    "Gentle on sensitive stomachs",
                    "Perfect elimination diet base",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our 6-Step System */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our 6-Step Gut Reset System</h2>
            <p className="text-xl text-muted-foreground">A proven protocol to restore balance from the inside out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "1. Gut Assessment", icon: <Target className="w-8 h-8" />, items: ["Symptom analysis", "Dietary trigger identification", "Lifestyle audit", "Stress level check"] },
              { title: "2. Soothe & Hydrate", icon: <Waves className="w-8 h-8" />, items: ["Introduction of Aloe concentrate", "Proper hydration protocols", "Eliminating acidic beverages", "Morning cleansing routine"] },
              { title: "3. Rebalance Microbiome", icon: <Shield className="w-8 h-8" />, items: ["Daily probiotic inoculation", "Removing sugar (bacteria food)", "Introducing fermented foods", "Gut-friendly meal timing"] },
              { title: "4. Optimize Elimination", icon: <Leaf className="w-8 h-8" />, items: ["Fiber ramp-up schedule", "Movement for motility", "Toilet posture guidance", "Regularity tracking"] },
              { title: "5. Healing Nutrition", icon: <Utensils className="w-8 h-8" />, items: ["Anti-inflammatory meal plan", "Liquid nutrition (Shakes)", "Mindful chewing practices", "Digestive enzymes support"] },
              { title: "6. Maintenance Lifestyle", icon: <Smile className="w-8 h-8" />, items: ["80/20 balance rule", "Managing travel/parties", "Long-term gut protection", "Intuitive eating"] }
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">What's Included in the Program</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Gut Health Assessment", description: "Pinpoint your specific digestive issues", icon: <Target className="w-6 h-6" /> },
              { title: "Personalized Gut Plan", description: "Customized for acid, bloating, or constipation", icon: <Calendar className="w-6 h-6" /> },
              { title: "Anti-Inflammatory Recipes", description: "Delicious meals that heal your gut", icon: <Coffee className="w-6 h-6" /> },
              { title: "The Golden Trio Pack", description: "Aloe, Fiber, and Probiotics bundle", icon: <Shield className="w-6 h-6" /> },
              { title: "Elimination Diet Guide", description: "How to identify food sensitivities safely", icon: <Utensils className="w-6 h-6" /> },
              { title: "Stress Management Audio", description: "Relaxation tools for the gut-brain axis", icon: <Brain className="w-6 h-6" /> },
              { title: "Poop Tracker/Log", description: "Monitor your progress toward regularity", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "Travel Gut Guide", description: "Avoid stomach issues while traveling", icon: <Waves className="w-6 h-6" /> },
              { title: "Shopping Lists", description: "Gut-friendly grocery templates", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "WhatsApp Support", description: "Ask questions about symptoms anytime", icon: <Users className="w-6 h-6" /> },
              { title: "Weekly Check-ins", description: "Adjusting the plan as you heal", icon: <Calendar className="w-6 h-6" /> },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Gut Health Solutions for Everyone</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "For the 'Bloated' Professional", icon: "👔", solutions: ["Morning Aloe ritual to de-puff", "Stress-busting breathing techniques", "Easy-to-digest lunch options", "Avoiding coffee on empty stomach"] },
              { title: "For Acid Reflux Sufferers", icon: "🔥", solutions: ["Alkalizing nutrition plan", "Aloe to soothe esophagus", "Food timing strategies", "Identifying trigger foods"] },
              { title: "For Constipation Relief", icon: "🐢", solutions: ["Fiber ramp-up protocol", "Specific hydration targets", "Motility exercises", "Natural rhythm establishment"] },
              { title: "For Skin Issues (Acne/Eczema)", icon: "✨", solutions: ["Gut-skin axis detox", "Probiotic loading", "Removing inflammatory sugar/dairy", "Nutrient absorption boost"] },
              { title: "For Antibiotic Recovery", icon: "💊", solutions: ["Intensive probiotic repopulation", "Prebiotic feeding schedule", "Gut lining repair support", "Immune system rebuilding"] },
              { title: "For Weight Loss Plateaus", icon: "⚖️", solutions: ["Microbiome metabolic reset", "Reducing inflammation water weight", "Improving insulin sensitivity", "Curbing sugar cravings"] },
            ].map((category, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Benefits Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Gut Healing Timeline</h2>
            <p className="text-xl text-muted-foreground">Consistency is the key to rebuilding your microbiome</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 1 (The Relief Phase)",
                color: "bg-blue-500",
                benefits: [
                  "Reduced bloating and gas",
                  "Heartburn/acidity significantly calms down",
                  "Better hydration feeling",
                  "Initial weight drop (water retention)",
                ],
              },
              {
                timeline: "Week 2–4 (The Regularity Phase)",
                color: "bg-green-500",
                benefits: [
                  "Consistent, easy bowel movements",
                  "Increased energy levels",
                  "Sugar cravings start to diminish",
                  "Clearer thinking (less brain fog)",
                ],
              },
              {
                timeline: "Month 2–3 (The Transformation Phase)",
                color: "bg-purple-500",
                benefits: [
                  "Skin clears up and glows",
                  "Immune system strengthens",
                  "Mood stabilizes (Serotonin boost)",
                  "Food sensitivities decrease",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className={`w-3 ${phase.color} rounded-full mr-6 flex-shrink-0`} style={{ minHeight: "100%" }} />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{phase.timeline}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <Smile className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real Results from Gut Healing</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "90%", label: "Less Bloating", description: "Reported within 7 days" },
              { stat: "85%", label: "Better Energy", description: "Due to improved absorption" },
              { stat: "75%", label: "Skin Improvement", description: "Clearer complexion in 60 days" },
              { stat: "95%", label: "More Regular", description: "Consistent digestion patterns" },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-2">{item.stat}</div>
                  <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Start Your Gut Reset Journey</h2>
          </div>
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Trust Your Gut – It Wants to Heal</h2>
          <p className="text-xl text-white/90 mb-8">
            Stop living with discomfort. Book your free Digestive Health Assessment and start feeling lighter, cleaner, and more energetic today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/contact">
                <Users className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-white/80 text-sm">
            🌿 7-Day Reset Kits available | 💯 Zero commitment assessment | 📋 Includes gut-healing meal guide
          </p>
        </div>
      </section>
    </>
  );
};

export default DigestiveHealth;