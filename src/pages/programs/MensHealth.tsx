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
  Dumbbell,
  Flame,
  Battery,
  TrendingDown,
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import mensHero from "@/assets/hero-banner.jpg";

const MensHealth = () => {
  const pricingTiers = [
    {
      name: "Performance Starter",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Body composition analysis",
        "Testosterone support protocol",
        "30-day high-protein nutrition pack",
        "Energy optimization guide",
        "Basic workout guidance",
      ],
    },
    {
      name: "Alpha Transformation",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Complete hormone & metabolism assessment",
        "90-day premium pack (Protein, Niteworks, Multivitamin, CR7)",
        "Muscle building or fat loss protocol",
        "Weekly performance coaching",
        "Custom workout programming",
        "24/7 WhatsApp support",
        "Heart & prostate health plan",
        "Stress & sleep optimization",
      ],
    },
    {
      name: "Peak Performance Elite",
      duration: "6-12 months",
      price: "Contact for price",
      features: [
        "Executive health optimization",
        "Long-term supplement strategy",
        "Quarterly health reviews",
        "VIP coaching access",
        "Advanced biohacking strategies",
        "Age-defying protocol",
        "Family health included",
        "Lifetime brotherhood access",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Can nutrition really improve my testosterone levels?",
      answer: "Absolutely! Proper nutrition (especially adequate healthy fats, zinc, magnesium, vitamin D) combined with strength training and quality sleep can increase testosterone by 20-30% naturally. Herbalife's Formula 1 Sport, Rebuild Strength, and targeted supplements provide the exact nutrients needed for optimal hormone production.",
    },
    {
      question: "I'm over 40 and losing muscle. Is this inevitable?",
      answer: "No! Muscle loss (sarcopenia) can be prevented and even reversed. With adequate protein intake (we recommend 1.6-2.2g per kg body weight using Herbalife Protein Drink Mix and H24 Rebuild), resistance training, and proper recovery, men can gain muscle well into their 60s and beyond.",
    },
    {
      question: "Will this help with energy? I'm exhausted all the time.",
      answer: "100%. Chronic fatigue in men often stems from low testosterone, poor nutrition, inadequate sleep, and stress. Our program addresses all factors using Herbalife's Liftoff for clean energy, CR7 Drive for hydration, and nutritional optimization for sustained vitality.",
    },
    {
      question: "Can this help with belly fat? I've tried everything.",
      answer: "Visceral belly fat is linked to low testosterone, high cortisol, and insulin resistance. Our protocol uses Herbalife's Prolessa Duo (where available) or targeted fat-burning nutrition to specifically address stubborn belly fat while preserving muscle mass.",
    },
    {
      question: "What specific Herbalife products are best for men?",
      answer: "Formula 1 Sport (higher protein), H24 Rebuild Strength (muscle recovery), Niteworks (circulation and performance), Herbalifeline Max (omega-3 for heart/brain), and Male Factor (prostate support). We customize based on your goals.",
    },
    {
      question: "I don't have time for complicated meal prep. Will this work?",
      answer: "Perfect! Herbalife is designed for busy men. Formula 1 shakes take 60 seconds. H24 products are grab-and-go. We provide simple, man-friendly meal solutions that fit your schedule.",
    },
    {
      question: "Will this improve my sexual health and performance?",
      answer: "Yes. By optimizing testosterone, improving circulation (Niteworks contains L-arginine for blood flow), reducing stress, and enhancing overall vitality, most men experience significant improvements in libido and performance.",
    },
  ];

  const mistakesData = [
    { mistake: "Ignoring protein needs", consequence: "Muscle loss, low testosterone, slow metabolism", icon: <Dumbbell className="w-5 h-5" /> },
    { mistake: "Chronic sleep deprivation", consequence: "Testosterone drops 15% per hour lost", icon: <Clock className="w-5 h-5" /> },
    { mistake: "Excess alcohol", consequence: "Converts testosterone to estrogen", icon: <TrendingDown className="w-5 h-5" /> },
    { mistake: "Skipping strength training", consequence: "Accelerated muscle loss after 30", icon: <Activity className="w-5 h-5" /> },
    { mistake: "High stress, no recovery", consequence: "Cortisol destroys testosterone", icon: <Brain className="w-5 h-5" /> },
    { mistake: "Ignoring warning signs", consequence: "Missing early disease markers", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "Poor fat intake", consequence: "Testosterone needs cholesterol", icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Men's Health Program - Optimize Performance, Vitality & Longevity | New Life Wellness Centre Kolathur, Chennai"
        description="Boost testosterone naturally, build muscle, lose belly fat, and maximize energy with Herbalife's targeted men's nutrition at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Trusted by 500+ men. Best men's health program in Kolathur, Chennai."
        canonical="/programs/mens-health"
        keywords="Men's Health Program Kolathur, Testosterone Boost Chennai, Muscle Building Villivakkam, Belly Fat Loss Kolathur, Men's Fitness Nutrition Chennai, Prostate Health Villivakkam, Best Men's Health Program Kolathur, Men's Wellness Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Optimize Your Health – Performance, Vitality, Longevity"
        tagline="Targeted nutrition and lifestyle strategies for men's unique health needs"
      />

      {/* The Modern Man's Challenge - God Level Design */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 relative overflow-hidden">
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
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp;
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mb-6 shadow-2xl shadow-red-500/50">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              The Modern Man is in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Crisis</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Testosterone levels have dropped <span className="text-red-400 font-bold">50%</span> in the last 50 years. <span className="text-red-400 font-bold">70%</span> of men are overweight. Heart disease kills more men than anything else. <span className="text-white font-bold">It's time to fight back.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* What's Killing Your Performance */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Card className="relative border-2 border-red-500/20 shadow-2xl bg-gradient-to-br from-slate-900 via-red-950/30 to-slate-900 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mr-5 shadow-xl shadow-red-500/50">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">What's Destroying<br/>Men's Health</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Low testosterone epidemic (drops 1% yearly after 30)",
                      "Sedentary lifestyle destroying muscle mass",
                      "Chronic stress crushing hormone production",
                      "Poor sleep quality (< 6 hours = 15% less testosterone)",
                      "Visceral belly fat converting testosterone to estrogen",
                      "Processed foods disrupting metabolism",
                      "Environmental toxins affecting hormones",
                      "Ignoring symptoms until crisis hits",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-gray-200 group/item hover:text-white transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-red-500/40 transition-colors">
                          <span className="text-red-400 font-bold">⚠️</span>
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* The Optimized Man */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Card className="relative border-2 border-green-500/20 shadow-2xl bg-gradient-to-br from-slate-900 via-green-950/30 to-slate-900 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-5 shadow-xl shadow-green-500/50">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white">The Peak<br/>Performance Man</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "High energy from morning to night",
                      "Lean, muscular physique at any age",
                      "Sharp mental clarity and focus",
                      "Strong libido and sexual vitality",
                      "Deep, restorative sleep every night",
                      "Stress resilience and emotional control",
                      "Disease-proof cardiovascular system",
                      "Confidence that commands respect",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-gray-200 group/item hover:text-white transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-green-500/40 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Common Mistakes Grid with Gradient Cards */}
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-4 text-center text-white">7 Testosterone-Killing Mistakes</h3>
            <p className="text-center text-gray-400 mb-12 text-lg">Every one of these is stealing your vitality</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mistakesData.map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                  <Card className="relative border-none shadow-xl bg-gradient-to-br from-slate-900 to-orange-950/30 backdrop-blur-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
                    <CardContent className="p-6 relative">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold mb-2 text-orange-300 text-lg flex items-center">
                            <span className="mr-2">❌</span> {item.mistake}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed">{item.consequence}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need This - Masculine Design */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 mb-6 shadow-xl shadow-red-500/30">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Red Flags You <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Can't Ignore</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Every checked box is a call to action. Your body is sending you signals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Decreased energy and constant fatigue", icon: <Battery className="w-6 h-6" />, color: "from-red-500 to-orange-500" },
              { text: "Unwanted weight gain (especially belly)", icon: <TrendingDown className="w-6 h-6" />, color: "from-orange-500 to-yellow-500" },
              { text: "Loss of muscle despite exercise", icon: <Dumbbell className="w-6 h-6" />, color: "from-yellow-500 to-red-500" },
              { text: "Reduced libido or ED issues", icon: <Heart className="w-6 h-6" />, color: "from-red-500 to-pink-500" },
              { text: "Poor sleep or waking tired", icon: <Clock className="w-6 h-6" />, color: "from-blue-500 to-purple-500" },
              { text: "Brain fog and poor concentration", icon: <Brain className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
              { text: "Mood swings or irritability", icon: <Activity className="w-6 h-6" />, color: "from-pink-500 to-red-500" },
              { text: "Decreased athletic performance", icon: <Trophy className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
              { text: "High stress affecting health", icon: <Flame className="w-6 h-6" />, color: "from-red-500 to-red-600" },
              { text: "Family history of heart disease", icon: <Shield className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
              { text: "Over 40 with no health strategy", icon: <Target className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
              { text: "Want to dominate your prime years", icon: <Zap className="w-6 h-6" />, color: "from-purple-500 to-indigo-500" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500`}></div>
                <Card className="relative border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group-hover:scale-105">
                  <CardContent className="p-6 flex items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                      {item.icon}
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Nutritional Needs - Power Design */}
      <section className="py-24 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-2xl shadow-green-500/50">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">The 8 Power Nutrients <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Every Man Needs</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Fuel your body like a high-performance machine</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "High-Quality Protein",
                amount: "2g per kg",
                icon: <Dumbbell className="w-10 h-10" />,
                benefits: ["Builds muscle", "Boosts testosterone", "Burns fat", "Increases metabolism"],
                color: "from-red-500 to-red-600",
                glowColor: "shadow-red-500/50",
              },
              {
                title: "Omega-3 Fats",
                amount: "2-3g daily",
                icon: <Heart className="w-10 h-10" />,
                benefits: ["Heart protection", "Brain function", "Reduces inflammation", "Hormone balance"],
                color: "from-blue-500 to-blue-600",
                glowColor: "shadow-blue-500/50",
              },
              {
                title: "Zinc",
                amount: "15mg daily",
                icon: <Shield className="w-10 h-10" />,
                benefits: ["Testosterone production", "Immune power", "Prostate health", "Recovery"],
                color: "from-green-500 to-emerald-600",
                glowColor: "shadow-green-500/50",
              },
              {
                title: "Vitamin D",
                amount: "2000 IU",
                icon: <Zap className="w-10 h-10" />,
                benefits: ["Testosterone boost", "Bone strength", "Mood regulation", "Immunity"],
                color: "from-yellow-500 to-orange-500",
                glowColor: "shadow-yellow-500/50",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br opacity-10 rounded-full blur-2xl" style={{background: `linear-gradient(to bottom right, ${item.color})`}}></div>
                  <CardContent className="p-8 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-6 shadow-xl ${item.glowColor} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-white">{item.title}</h3>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-6 shadow-lg`}>
                      {item.amount}
                    </div>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-300 flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Men's Health by Age - Timeline Design */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-6 shadow-xl shadow-purple-500/30">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Your Health Roadmap <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">by Age</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Strategic priorities for every decade of your life</p>
          </div>

          <div className="space-y-8">
            {[
              {
                age: "20s-30s: Foundation Phase",
                color: "from-blue-500 to-cyan-500",
                icon: "🚀",
                bgColor: "bg-blue-500",
                priorities: [
                  "Build maximum muscle mass (peaks at 30)",
                  "Establish exercise habits for life",
                  "Optimize natural testosterone",
                  "Create metabolic resilience",
                  "Athletic performance maximization",
                ],
              },
              {
                age: "40s-50s: Defense Phase",
                color: "from-green-500 to-emerald-500",
                icon: "🛡️",
                bgColor: "bg-green-500",
                priorities: [
                  "Prevent muscle loss (sarcopenia)",
                  "Combat testosterone decline",
                  "Heart disease prevention",
                  "Prostate health awareness",
                  "Maintain energy and vitality",
                ],
              },
              {
                age: "60s+: Longevity Phase",
                color: "from-purple-500 to-pink-500",
                icon: "👑",
                bgColor: "bg-purple-500",
                priorities: [
                  "Preserve muscle and strength",
                  "Maintain cognitive function",
                  "Bone density protection",
                  "Independence and mobility",
                  "Disease prevention and management",
                ],
              },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${phase.color} rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-none shadow-2xl overflow-hidden bg-white dark:bg-slate-900">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className={`w-full md:w-3 ${phase.bgColor} h-2 md:h-full`} />
                      <div className="flex-1 p-10">
                        <div className="flex items-center mb-8">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mr-6 shadow-2xl`}>
                            <span className="text-5xl">{phase.icon}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black">{phase.age}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {phase.priorities.map((priority, i) => (
                            <div key={i} className="flex items-start group/item">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform`}>
                                <Target className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-muted-foreground font-semibold leading-relaxed pt-2">{priority}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herbalife Men's Stack - Product Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6 shadow-2xl shadow-blue-500/50">
              <Dumbbell className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Men's Performance Stack</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Herbalife products engineered for male optimization</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Formula 1 Sport",
                subtitle: "Muscle Building Foundation",
                icon: <Dumbbell className="w-10 h-10" />,
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "shadow-blue-500/50",
                description: "Higher protein formula specifically for active men. 18g protein per serving for muscle support.",
                points: [
                  "18g whey protein per serving",
                  "Enhanced with L-glutamine",
                  "Supports lean muscle growth",
                  "Perfect post-workout meal",
                  "Boosts metabolism all day",
                ],
              },
              {
                title: "H24 Rebuild Strength",
                subtitle: "Advanced Recovery Formula",
                icon: <Flame className="w-10 h-10" />,
                gradient: "from-red-500 to-orange-500",
                glowColor: "shadow-red-500/50",
                description: "Advanced recovery formula to maximize muscle gains and reduce soreness.",
                points: [
                  "25g protein per serving",
                  "Added BCAAs for recovery",
                  "Iron for oxygen transport",
                  "Reduces muscle breakdown",
                  "Take within 30 min post-workout",
                ],
              },
              {
                title: "Niteworks®",
                subtitle: "Performance & Circulation",
                icon: <Zap className="w-10 h-10" />,
                gradient: "from-purple-500 to-pink-500",
                glowColor: "shadow-purple-500/50",
                description: "L-arginine and L-citrulline for nitric oxide production, circulation, and performance.",
                points: [
                  "Improves blood flow naturally",
                  "Enhances workout performance",
                  "Supports cardiovascular health",
                  "May improve sexual function",
                  "Take before bed for recovery",
                ],
              },
              {
                title: "Male Factor",
                subtitle: "Prostate & Hormone Support",
                icon: <Shield className="w-10 h-10" />,
                gradient: "from-green-500 to-emerald-500",
                glowColor: "shadow-green-500/50",
                description: "Targeted prostate and male health support with saw palmetto and lycopene.",
                points: [
                  "Saw palmetto for prostate health",
                  "Lycopene antioxidant protection",
                  "Supports urinary function",
                  "Natural hormone balance",
                  "Essential after age 40",
                ],
              },
            ].map((product, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <CardContent className="p-10 relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${product.gradient} text-white mb-6 shadow-2xl ${product.glowColor} group-hover:scale-110 transition-transform`}>
                      {product.icon}
                    </div>
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-bold mb-3 shadow-lg`}>
                      {product.subtitle}
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-white">{product.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Phase System */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-xl shadow-indigo-500/30">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">The 5-Phase <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Alpha System</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Your complete transformation roadmap</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                phase: "1. Assessment", 
                icon: <Target className="w-10 h-10" />, 
                tasks: ["Body composition scan", "Hormone evaluation", "Strength baseline", "Goal setting"],
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "shadow-blue-500/50",
              },
              { 
                phase: "2. Nutrition Strategy", 
                icon: <Flame className="w-10 h-10" />, 
                tasks: ["Macro calculation", "Meal timing", "Supplement protocol", "Hydration plan"],
                gradient: "from-orange-500 to-red-500",
                glowColor: "shadow-orange-500/50",
              },
              { 
                phase: "3. Training Optimization", 
                icon: <Dumbbell className="w-10 h-10" />, 
                tasks: ["Custom workout plan", "Progressive overload", "Recovery protocols", "Form coaching"],
                gradient: "from-red-500 to-pink-500",
                glowColor: "shadow-red-500/50",
              },
              { 
                phase: "4. Lifestyle Enhancement", 
                icon: <Battery className="w-10 h-10" />, 
                tasks: ["Sleep optimization", "Stress management", "Habit formation", "Time efficiency"],
                gradient: "from-green-500 to-emerald-500",
                glowColor: "shadow-green-500/50",
              },
              { 
                phase: "5. Performance Tracking", 
                icon: <TrendingUp className="w-10 h-10" />, 
                tasks: ["Weekly measurements", "Strength gains", "Energy levels", "Adjustments"],
                gradient: "from-purple-500 to-indigo-500",
                glowColor: "shadow-purple-500/50",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-slate-200 dark:border-slate-800 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:scale-105 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-2xl ${item.glowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-6">{item.phase}</h3>
                    <ul className="space-y-3">
                      {item.tasks.map((task, i) => (
                        <li key={i} className="flex items-start text-sm group/item">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground font-semibold leading-relaxed pt-0.5">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-6 shadow-2xl shadow-yellow-500/50">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Transformation Timeline</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Real results from real men who took action</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 2-4: The Awakening",
                gradient: "from-orange-500 to-red-500",
                icon: "⚡",
                bgGradient: "from-orange-500/20 to-red-500/20",
                benefits: ["Energy surge throughout day", "Better sleep quality", "Improved workout performance", "Mental clarity returns"],
              },
              {
                timeline: "Month 2-3: The Transformation",
                gradient: "from-red-500 to-pink-500",
                icon: "🔥",
                bgGradient: "from-red-500/20 to-pink-500/20",
                benefits: ["Visible muscle gain/fat loss", "Strength increases weekly", "Libido improvement", "Confidence soars"],
              },
              {
                timeline: "Month 6+: The New You",
                gradient: "from-green-500 to-emerald-500",
                icon: "👑",
                bgGradient: "from-green-500/20 to-emerald-500/20",
                benefits: ["Body composition optimized", "Peak performance state", "Disease markers improved", "Living at full potential"],
              },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${phase.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className={`w-full md:w-4 bg-gradient-to-br ${phase.gradient} h-2 md:h-full`} />
                      <div className="flex-1 p-10">
                        <div className="flex items-center mb-8">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center mr-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                            <span className="text-5xl">{phase.icon}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-white">{phase.timeline}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {phase.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start group/item">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform`}>
                                <Trophy className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-200 font-bold leading-relaxed text-lg pt-3">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats - Power Numbers */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-2xl shadow-purple-500/50 animate-pulse">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Results That Speak <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Louder Than Words</span></h2>
            <p className="text-xl text-gray-300">Join hundreds of men transforming their lives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                stat: "500+", 
                label: "Men Transformed", 
                description: "Living at peak performance",
                icon: <Users className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500",
              },
              { 
                stat: "73%", 
                label: "More Energy", 
                description: "Within first 30 days",
                icon: <Zap className="w-8 h-8" />,
                gradient: "from-yellow-500 to-orange-500",
              },
              { 
                stat: "8.5kg", 
                label: "Avg Fat Loss", 
                description: "In 90-day program",
                icon: <Flame className="w-8 h-8" />,
                gradient: "from-red-500 to-pink-500",
              },
              { 
                stat: "35%", 
                label: "Strength Gains", 
                description: "Average increase",
                icon: <TrendingUp className="w-8 h-8" />,
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl text-center hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br opacity-5 rounded-3xl" style={{background: `linear-gradient(to bottom right, ${item.gradient})`}}></div>
                  <CardContent className="p-10 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div className={`text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                      {item.stat}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.label}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-xl shadow-green-500/30">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Performance Level</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Investment in your prime years</p>
          </div>
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-xl shadow-blue-500/30">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Men Ask, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">We Answer</span></h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-white/10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl px-6 shadow-xl">
                <AccordionTrigger className="text-left font-bold text-lg text-white hover:text-blue-400 transition-colors">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Masculine Energy */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 mb-8 shadow-2xl">
            <Flame className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight">
            Stop Surviving.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">Start Dominating.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-semibold max-w-4xl mx-auto">
            Your best years are ahead. Book your free Men's Health Assessment and reclaim your edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" asChild className="bg-white text-red-700 hover:bg-gray-100 shadow-2xl font-black text-lg px-10 py-7 rounded-xl hover:scale-110 transition-all duration-300">
              <Link to="/book-consultation">
                <Calendar className="mr-3 w-6 h-6" />
                Book Your Power Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 backdrop-blur-xl font-black text-lg px-10 py-7 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl">
              <Link to="/contact">
                <Users className="mr-3 w-6 h-6" />
                Join The Brotherhood
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mr-3">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Limited Spots</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mr-3">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">No BS Approach</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mr-3">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Results Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MensHealth;