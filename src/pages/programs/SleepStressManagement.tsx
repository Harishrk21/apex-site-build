
import { Link } from "react-router-dom";
import SEO from "@/components/SEOHelmet";
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
  Brain,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Activity,
  Heart,
  Lightbulb,
  Sparkles,
  Eye,
  Headphones,
  Coffee,
  Moon,
  Sun,
  Users,
  BookOpen,
  Flame,
  Award,
  AlertCircle,
  BrainCircuit,
  Waves,
  Timer,
  Cloud,
  Wind,
  Droplets,
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import sleepHero from "@/assets/hero-banner.jpg"; // Replace with your actual sleep hero image

const SleepStressManagement = () => {
  const pricingTiers = [
    {
      name: "Restful Nights Starter",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Sleep & stress assessment",
        "Basic nutrition plan for sleep",
        "Magnesium & herbal protocol",
        "Sleep hygiene fundamentals",
        "Stress relief introduction",
      ],
    },
    {
      name: "Deep Sleep & Calm Mind",
      duration: "90 days",
      popular: true,
      price: "Contact for price",
      features: [
        "Comprehensive sleep & stress evaluation",
        "90-day personalized nutrition pack",
        "Magnesium, B-complex, adaptogen protocol",
        "Weekly coaching sessions",
        "Custom sleep & stress mastery plan",
        "24/7 support access",
        "Evening routine + breathing toolkit",
        "Sleep-promoting recipe collection",
      ],
    },
    {
      name: "Lifetime Calm & Restoration",
      duration: "6-12 months",
      price: "Contact for price",
      features: [
        "Long-term resilience building",
        "Advanced neuro-endocrine support",
        "Quarterly reassessments",
        "VIP coaching access",
        "Family sleep/stress protocols",
        "Lifetime wellness community",
        "Executive calm & recovery system",
      ],
    },
  ];

  const faqItems = [
    {
      question: "I've had insomnia for years. Can nutrition really help?",
      answer: "While chronic insomnia may require medical evaluation, many cases improve dramatically with proper nutrition, supplementation (especially magnesium), and sleep hygiene. Many of our clients experience significant improvements.",
    },
    {
      question: "How long before I notice better sleep?",
      answer: "Some people notice improvements within days (especially with magnesium), while others need 2-4 weeks as they adjust habits and nutrition.",
    },
    {
      question: "Can this help with anxiety that keeps me awake?",
      answer: "Yes! We address both the nutritional factors (B vitamins, magnesium, omega-3s) and provide practical anxiety-management techniques specifically for bedtime.",
    },
    {
      question: "Will I need to take sleeping pills?",
      answer: "Our approach focuses on natural solutions. Many clients who were taking sleep medications work with their doctors to reduce or eliminate them as their sleep improves naturally.",
    },
    {
      question: "I'm stressed about work. How can nutrition help?",
      answer: "Nutrition provides the raw materials for stress resilience (B vitamins, magnesium, adaptogens) and stabilizes body systems (blood sugar, inflammation) that affect stress response. Combined with practical stress management techniques, it's highly effective.",
    },
    {
      question: "I can only sleep 5-6 hours due to my schedule. What can I do?",
      answer: "While 7-9 hours is ideal, we can optimize the quality of sleep you do get and help you manage energy throughout the day. However, chronic sleep deprivation has serious health consequences, so we'll also discuss schedule adjustments.",
    },
    {
      question: "Can this help with snoring or sleep apnea?",
      answer: "Weight loss often reduces snoring and mild sleep apnea. However, significant sleep apnea requires medical evaluation and treatment (CPAP). We can support your overall health and weight management.",
    },
  ];

  return (
    <>
      <SEO
        title="Sleep & Stress Management Program - Better Sleep & Less Stress | New Life Wellness Centre Kolathur, Chennai"
        description="Reclaim restful nights and lasting calm through personalized Herbalife nutrition, sleep hygiene, and proven stress management strategies at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Break the vicious cycle naturally. Best sleep & stress management program in Kolathur, Chennai."
        canonical="/programs/sleep-stress-management"
        keywords="Sleep & Stress Management Program Kolathur, Better Sleep Chennai, Stress Management Villivakkam, Insomnia Help Kolathur, Natural Sleep Aid Chennai, Deep Sleep Villivakkam, Sleep Hygiene Kolathur, Stress Relief Chennai, Best Sleep Program Villivakkam"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Sleep Better, Stress Less - Reclaim Your Peace & Energy"
        tagline="Natural solutions for quality sleep and effective stress management through nutrition and lifestyle"
      />

      {/* Understanding Sleep & Stress Connection */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 relative overflow-hidden">
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
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-2xl shadow-indigo-500/50 animate-pulse">
              <Moon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Sleep & Stress: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Vicious Cycle</span> That Steals Your Life
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Poor sleep fuels stress. High stress destroys sleep. Together they damage every system in your body — weight, mood, immunity, hormones, brain health, and longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Moon className="w-8 h-8" />, stat: "35%", label: "Adults Sleep <7h", gradient: "from-indigo-500 to-purple-500" },
              { icon: <Flame className="w-8 h-8" />, stat: "77%", label: "Chronic Stress", gradient: "from-purple-500 to-pink-500" },
              { icon: <Heart className="w-8 h-8" />, stat: "75-90%", label: "Doctor Visits Stress-Related", gradient: "from-pink-500 to-red-500" },
              { icon: <Brain className="w-8 h-8" />, stat: "Equal to Alcohol", label: "Sleep Deprivation = Cognitive Impairment", gradient: "from-red-500 to-orange-500" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 shadow-2xl`}>
                      {item.icon}
                    </div>
                    <div className={`text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                      {item.stat}
                    </div>
                    <p className="text-gray-300 font-semibold">{item.label}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Modern Sleep & Stress Crisis */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-6 shadow-xl shadow-red-500/30">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">The Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Sleep & Stress</span> Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Our "always-on" world is destroying our ability to rest and recover</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-6 h-6" />, text: "Blue light disrupts melatonin production", color: "from-blue-500 to-cyan-500" },
              { icon: <Coffee className="w-6 h-6" />, text: "Caffeine dependence masks fatigue", color: "from-orange-500 to-yellow-500" },
              { icon: <Timer className="w-6 h-6" />, text: '"Always-on" culture prevents recovery', color: "from-purple-500 to-pink-500" },
              { icon: <Waves className="w-6 h-6" />, text: "Chronic stress depletes magnesium & B-vitamins", color: "from-pink-500 to-red-500" },
              { icon: <Activity className="w-6 h-6" />, text: "Poor nutrition worsens both problems", color: "from-red-500 to-orange-500" },
              { icon: <Moon className="w-6 h-6" />, text: "Most adults lack proper sleep hygiene", color: "from-indigo-500 to-purple-500" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500`}></div>
                <Card className="relative border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group-hover:scale-105 h-full">
                  <CardContent className="p-6 flex items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                      {item.icon}
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 leading-relaxed pt-2">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Help */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-6 shadow-xl shadow-orange-500/30">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Signs Your Body Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Begging for Help</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-black mb-6 text-orange-600 flex items-center"><Moon className="w-8 h-8 mr-3" /> Sleep Warning Signs</h3>
              <div className="grid gap-4">
                {[
                  "Difficulty falling asleep (lying awake 30+ minutes)",
                  "Waking frequently during the night",
                  "Waking too early and can't fall back asleep",
                  "Unrefreshing sleep despite 7-8 hours",
                  "Daytime fatigue and need caffeine to function",
                  "Racing mind at bedtime",
                  "Partner complains of snoring",
                ].map((sign, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 text-red-600 flex items-center"><Flame className="w-8 h-8 mr-3" /> Stress Warning Signs</h3>
              <div className="grid gap-4">
                {[
                  "Constantly feeling overwhelmed or anxious",
                  "Irritability and short temper",
                  "Physical tension (neck, shoulders, jaw)",
                  "Stress eating or loss of appetite",
                  "Frequent headaches or digestive issues",
                  "Difficulty concentrating",
                  "Using alcohol/food to cope",
                  "Feeling burnt out",
                ].map((sign, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Nutrients */}
      <section className="py-24 bg-gradient-to-br from-cyan-950 via-blue-950 to-cyan-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-2xl shadow-cyan-500/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Most Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Sleep & Stress</span> Nutrients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Magnesium", subtitle: "Nature's Relaxant", gradient: "from-emerald-500 to-teal-500", benefits: ["Relaxes muscles & nervous system", "Converts tryptophan → melatonin", "Calms racing thoughts", "Most people deficient"] },
              { title: "B-Complex", subtitle: "Anti-Stress Vitamins", gradient: "from-yellow-500 to-orange-500", benefits: ["Depleted rapidly by stress", "Support adrenals", "Produce calming neurotransmitters", "Improve energy"] },
              { title: "Adaptogens", subtitle: "Ashwagandha, Rhodiola, Holy Basil", gradient: "from-purple-500 to-pink-500", benefits: ["Balance cortisol levels", "Increase stress resilience", "Reduce fatigue", "Protect brain & body"] },
              { title: "Omega-3 DHA/EPA", subtitle: "", gradient: "from-blue-500 to-cyan-500", benefits: ["Reduce inflammation from stress", "Support mood regulation", "Improve sleep quality", "Protect brain"] },
              { title: "L-Theanine", subtitle: "Found in green tea", gradient: "from-green-500 to-emerald-500", benefits: ["Promotes relaxed alertness", "Reduces anxiety without drowsiness", "Improves focus under stress"] },
              { title: "Glycine", subtitle: "Bone broth, gelatin", gradient: "from-indigo-500 to-purple-500", benefits: ["Lowers body temperature for sleep", "Improves deep sleep quality", "Calms nervous system"] },
            ].map((nutrient, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${nutrient.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${nutrient.gradient} text-white mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-white">{nutrient.title}</h3>
                    {nutrient.subtitle && <p className="text-gray-400 mb-4">{nutrient.subtitle}</p>}
                    <ul className="space-y-2">
                      {nutrient.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
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

      {/* Foods That Help vs Harm */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-xl shadow-green-500/30">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Foods That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Heal</span> or <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Harm</span> Your Sleep & Stress</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Card className="relative border-2 border-green-500/20 shadow-2xl bg-gradient-to-br from-white via-green-50 to-white dark:from-slate-900 dark:via-green-950/30 dark:to-slate-900 backdrop-blur-xl overflow-hidden h-full">
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-5 shadow-xl shadow-green-500/50">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black">Sleep & Calm Boosters</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Kiwi · Tart cherry · Fatty fish · Almonds/walnuts",
                      "Turkey · Banana · Whole grains · Dark leafy greens",
                      "Dark chocolate (70%+) · Avocados · Oats · Green tea",
                      "Fermented foods · Chamomile · Passionflower tea",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-green-500/40 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Card className="relative border-2 border-red-500/20 shadow-2xl bg-gradient-to-br from-white via-red-50 to-white dark:from-slate-900 dark:via-red-950/30 dark:to-slate-900 backdrop-blur-xl overflow-hidden h-full">
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mr-5 shadow-xl shadow-red-500/50">
                      <AlertCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black">Sleep & Stress Killers</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Caffeine after 2 PM", "Alcohol", "Large/spicy meals before bed",
                      "Refined sugar", "Excessive blue light", "Work emails at night",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-red-500/40 transition-colors">
                          <span className="text-red-600 font-bold">✕</span>
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Benefits Timeline */}
      <section className="py-24 bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6 shadow-2xl shadow-emerald-500/50">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Transformation</span> Timeline</h2>
          </div>

          <div className="space-y-8">
            {[
              { timeline: "Within 1 Week", benefits: ["Fall asleep faster", "Fewer night wakings", "Reduced physical tension", "Better morning mood"], gradient: "from-blue-500 to-cyan-500" },
              { timeline: "Within 2-4 Weeks", benefits: ["Deep, restorative sleep", "Consistent sleep schedule", "Reduced daytime fatigue", "Better stress coping"], gradient: "from-purple-500 to-pink-500" },
              { timeline: "Within 2-3 Months", benefits: ["Strong stress resilience", "Emotional stability", "Improved relationships", "Enhanced overall health"], gradient: "from-green-500 to-emerald-500" },
              { timeline: "Long-Term", benefits: ["Sustained high-quality sleep", "Robust stress resilience", "Reduced disease risk", "Increased longevity"], gradient: "from-teal-500 to-emerald-500" },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${phase.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className={`w-full md:w-4 bg-gradient-to-br ${phase.gradient} h-2 md:h-full`} />
                      <div className="flex-1 p-10">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-8">{phase.timeline}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {phase.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                                <Sparkles className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-200 font-bold text-lg pt-3">{benefit}</span>
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

      {/* Our 6-Phase Approach */}
      <section className="py-24 bg-gradient-to-br from-violet-950 via-purple-950 to-violet-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-6 shadow-2xl shadow-violet-500/50">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">6-Phase</span> Sleep & Stress Mastery System</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { phase: "1. Comprehensive Assessment", items: ["Sleep quality analysis", "Stress sources identification", "Lifestyle factors", "Current habits review"] },
              { phase: "2. Personalized Nutrition Plan", items: ["Sleep-supporting nutrients", "Blood sugar stabilization", "Caffeine optimization", "Targeted supplementation"] },
              { phase: "3. Sleep Hygiene Optimization", items: ["Bedroom environment", "Pre-sleep routine", "Light & temperature", "Screen boundaries"] },
              { phase: "4. Stress Management Strategies", items: ["Breathing techniques", "Mindfulness training", "Cognitive reframing", "Boundary setting"] },
              { phase: "5. Lifestyle Integration", items: ["Exercise timing", "Morning/evening rituals", "Nature exposure", "Digital detox"] },
              { phase: "6. Ongoing Support", items: ["Sleep & stress tracking", "Plan adjustments", "Long-term resilience", "24/7 guidance"] },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 text-white mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                      <Moon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black mb-6 text-white">{item.phase}</h3>
                    <ul className="space-y-3">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-semibold">{point}</span>
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

      {/* What's Included */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-6 shadow-xl shadow-teal-500/30">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Everything Included in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Sleep & Stress Program</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Comprehensive Sleep & Stress Assessment",
              "Personalized Nutrition Plan",
              "Sleep Hygiene Guide",
              "Stress Management Toolkit",
              "Evening Wind-Down Protocol",
              "Supplement Recommendations",
              "Caffeine Optimization Guide",
              "Relaxation Techniques (Meditation, PMR)",
              "Sleep & Stress Tracking Tools",
              "Recipe Collection",
              "24/7 Support Access",
              "Lifetime Access to Updates",
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle2 className="w-8 h-8 text-teal-500 mr-4 flex-shrink-0 mt-0.5" />
                <span className="text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-6 shadow-xl shadow-yellow-500/30">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Peace & Energy</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the transformation level that feels right for you</p>
          </div>
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-xl shadow-blue-500/30">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Your Questions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Answered</span></h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 px-6 shadow-lg">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 mb-8 shadow-2xl">
            <Moon className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight">
            Ready to Finally<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Sleep Deeply & Live Calmly?</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-semibold max-w-4xl mx-auto">
            Book your free consultation today and discover exactly what's disrupting your sleep and stressing you out.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="bg-white text-indigo-700 hover:bg-gray-100 shadow-2xl font-black text-lg px-10 py-7 rounded-xl hover:scale-110 transition-all duration-300">
              <Link to="/book-consultation">
                <Calendar className="mr-3 w-6 h-6" />
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 backdrop-blur-xl font-black text-lg px-10 py-7 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl">
              <Link to="/contact">
                <Headphones className="mr-3 w-6 h-6" />
                Speak to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SleepStressManagement;
