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
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import brainHero from "@/assets/hero-banner.jpg";

const BrainHealth = () => {
  const pricingTiers = [
    {
      name: "Mental Clarity Starter",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Cognitive assessment",
        "Basic brain nutrition plan",
        "Focus-enhancing supplement guide",
        "Sleep optimization basics",
        "Stress management intro",
      ],
    },
    {
      name: "Peak Performance Mind",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Comprehensive cognitive evaluation",
        "90-day brain-optimizing nutrition pack",
        "Omega-3, B-complex, antioxidant protocol",
        "Weekly cognitive coaching",
        "Custom mental performance plan",
        "24/7 support access",
        "Sleep & stress mastery program",
        "Brain-boosting recipe collection",
      ],
    },
    {
      name: "Cognitive Excellence",
      duration: "6-12 months",
      price: "Contact for price",
      features: [
        "Long-term neuroprotection strategy",
        "Advanced cognitive optimization",
        "Quarterly brain health assessments",
        "VIP coaching access",
        "Anti-aging brain protocols",
        "Family cognitive health included",
        "Lifetime wellness community",
        "Executive performance support",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Can nutrition really improve my memory and focus?",
      answer: "Absolutely! Studies show proper nutrition dramatically affects cognitive function. Omega-3s, B vitamins, and antioxidants have strong evidence for brain health benefits. Many people notice improved focus within weeks of optimizing nutrition.",
    },
    {
      question: "I'm young. Do I really need to worry about brain health now?",
      answer: "Yes! Brain health habits established in your 20s-30s determine your cognitive function in later decades. Plus, if you're struggling with focus, memory, or brain fog now, nutrition can help immediately.",
    },
    {
      question: "Will this help with my brain fog and lack of focus?",
      answer: "Brain fog is often caused by blood sugar imbalances, inflammation, nutrient deficiencies, poor sleep, or dehydration - all of which we address. Most clients experience significant improvement.",
    },
    {
      question: "Can this prevent Alzheimer's or dementia?",
      answer: "While there's no guarantee, research shows proper nutrition, especially omega-3s and antioxidants, significantly reduces risk. The Mediterranean diet has shown up to 40% reduced Alzheimer's risk.",
    },
    {
      question: "How long before I notice improvements in my mental clarity?",
      answer: "Many people notice reduced brain fog within 1-2 weeks. Memory and focus improvements typically become evident within 4-6 weeks of consistent nutrition.",
    },
    {
      question: "I drink coffee for focus. Is that bad?",
      answer: "Moderate caffeine (200-400mg daily) can enhance focus. However, relying solely on caffeine without proper nutrition leads to crashes and dependency. We optimize both.",
    },
    {
      question: "Can this help with stress and anxiety?",
      answer: "Yes! Omega-3s, B vitamins, and magnesium support neurotransmitter balance and stress resilience. Combined with lifestyle strategies, most people experience significant improvements.",
    },
  ];

  return (
    <>
      <SEO
        title="Brain Health Program - Boost Memory, Focus & Mental Clarity | New Life Wellness Centre Kolathur, Chennai"
        description="Enhance cognitive function, prevent brain aging, and achieve peak mental performance through targeted Herbalife nutrition at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Best brain health program in Kolathur, Chennai."
        canonical="/programs/brain-health"
        keywords="Brain Health Program Kolathur, Memory Improvement Chennai, Focus Enhancement Villivakkam, Cognitive Function Kolathur, Brain Health Chennai, Mental Clarity Villivakkam, Best Brain Health Program Kolathur, Brain Nutrition Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Sharpen Your Mind - Nutrition for Peak Mental Performance"
        tagline="Support memory, focus, clarity, and long-term cognitive health through targeted nutrition"
      />

      {/* Understanding Brain Health - Hero Stats */}
      <section className="py-24 bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 relative overflow-hidden">
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-2xl shadow-purple-500/50 animate-pulse">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Your Brain: Your Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Valuable Asset</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your brain uses <span className="text-purple-400 font-bold">20%</span> of your body's energy despite being only <span className="text-purple-400 font-bold">2%</span> of body weight. What you eat <span className="text-white font-bold">directly impacts</span> how you think, feel, and perform mentally.
            </p>
          </div>

          {/* Power Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Brain className="w-8 h-8" />, stat: "20%", label: "Body Energy Used", gradient: "from-purple-500 to-pink-500" },
              { icon: <Zap className="w-8 h-8" />, stat: "2%", label: "Body Weight", gradient: "from-blue-500 to-cyan-500" },
              { icon: <AlertCircle className="w-8 h-8" />, stat: "30s+", label: "Decline Starts", gradient: "from-orange-500 to-red-500" },
              { icon: <TrendingUp className="w-8 h-8" />, stat: "40%", label: "Risk Reduction Possible", gradient: "from-green-500 to-emerald-500" },
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

      {/* The Brain Drain Crisis */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-6 shadow-xl shadow-red-500/30">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Brain Drain</span> Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Modern life is silently stealing your cognitive power</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Waves className="w-6 h-6" />, text: "Chronic stress damages brain structure", color: "from-red-500 to-orange-500" },
              { icon: <Flame className="w-6 h-6" />, text: "Processed foods lack brain-essential nutrients", color: "from-orange-500 to-yellow-500" },
              { icon: <Activity className="w-6 h-6" />, text: "Sugar and refined carbs cause inflammation", color: "from-yellow-500 to-red-500" },
              { icon: <Eye className="w-6 h-6" />, text: "Screen addiction affects attention span", color: "from-blue-500 to-purple-500" },
              { icon: <Moon className="w-6 h-6" />, text: "Poor sleep prevents brain detoxification", color: "from-purple-500 to-pink-500" },
              { icon: <Timer className="w-6 h-6" />, text: "Multitasking decreases cognitive capacity", color: "from-pink-500 to-red-500" },
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

      {/* Key Aspects of Brain Health */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-2xl shadow-indigo-500/50">
              <BrainCircuit className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">5 Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cognitive Excellence</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Optimize every aspect of your mental performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Memory & Learning",
                icon: <BookOpen className="w-10 h-10" />,
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "shadow-blue-500/50",
                benefits: ["Short & long-term memory", "Information retention", "Learning new skills", "Spatial navigation"],
              },
              {
                title: "Focus & Concentration",
                icon: <Target className="w-10 h-10" />,
                gradient: "from-purple-500 to-pink-500",
                glowColor: "shadow-purple-500/50",
                benefits: ["Sustained attention", "Distraction resistance", "Task completion", "Mental endurance"],
              },
              {
                title: "Mental Clarity",
                icon: <Sparkles className="w-10 h-10" />,
                gradient: "from-yellow-500 to-orange-500",
                glowColor: "shadow-yellow-500/50",
                benefits: ["Quick thinking", "Sharp alertness", "Fast processing", "Verbal fluency"],
              },
              {
                title: "Mood & Emotions",
                icon: <Heart className="w-10 h-10" />,
                gradient: "from-pink-500 to-red-500",
                glowColor: "shadow-pink-500/50",
                benefits: ["Emotional stability", "Stress resilience", "Anxiety prevention", "Mental wellbeing"],
              },
              {
                title: "Neuroprotection",
                icon: <Shield className="w-10 h-10" />,
                gradient: "from-green-500 to-emerald-500",
                glowColor: "shadow-green-500/50",
                benefits: ["Prevent decline", "Alzheimer's protection", "Brain plasticity", "Reduce inflammation"],
              },
            ].map((pillar, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                  <CardContent className="p-8 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white mb-6 shadow-2xl ${pillar.glowColor} group-hover:scale-110 transition-transform`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-6 text-white">{pillar.title}</h3>
                    <ul className="space-y-3">
                      {pillar.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{benefit}</span>
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

      {/* Signs You Need Brain Health Support */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-6 shadow-xl shadow-orange-500/30">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Do You Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">These Warning Signs?</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Your brain is asking for help</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Frequent brain fog or mental cloudiness",
              "Difficulty concentrating or staying focused",
              "Poor memory (forgetting names, misplacing items)",
              "Mental fatigue by afternoon",
              "Difficulty learning new information",
              "Slow mental processing or 'thinking through mud'",
              "Mood swings, anxiety, or low mood",
              "High stress affecting mental performance",
              "Poor sleep affecting daytime cognition",
              "Family history of Alzheimer's or dementia",
              "Over 40 and concerned about cognitive aging",
              "High-pressure job requiring peak performance",
              "Student needing better focus and memory",
              "Recovery from burnout or chronic stress",
            ].map((sign, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                <Card className="relative border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group-hover:scale-105">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 leading-relaxed pt-1">{sign}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Nutrients */}
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">8 Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Brain-Boosting</span> Nutrients</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Fuel your mind for peak performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Omega-3 (DHA/EPA)",
                amount: "2-3g daily",
                icon: <Activity className="w-10 h-10" />,
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "shadow-blue-500/50",
                benefits: ["60% of brain is fat", "Memory & learning", "Reduces inflammation", "Prevents decline"],
              },
              {
                title: "B Vitamins",
                amount: "B6, B9, B12",
                icon: <Zap className="w-10 h-10" />,
                gradient: "from-yellow-500 to-orange-500",
                glowColor: "shadow-yellow-500/50",
                benefits: ["Neurotransmitters", "Energy production", "Reduce homocysteine", "Nerve protection"],
              },
              {
                title: "Antioxidants",
                amount: "Daily intake",
                icon: <Shield className="w-10 h-10" />,
                gradient: "from-purple-500 to-pink-500",
                glowColor: "shadow-purple-500/50",
                benefits: ["Protect from stress", "Reduce inflammation", "Slow aging", "Brain plasticity"],
              },
              {
                title: "Magnesium",
                amount: "300-400mg",
                icon: <Heart className="w-10 h-10" />,
                gradient: "from-green-500 to-emerald-500",
                glowColor: "shadow-green-500/50",
                benefits: ["Learning & memory", "Neurotransmitters", "Reduces stress", "Improves sleep"],
              },
            ].map((nutrient, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${nutrient.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-8 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${nutrient.gradient} text-white mb-6 shadow-2xl ${nutrient.glowColor} group-hover:scale-110 transition-transform`}>
                      {nutrient.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-white">{nutrient.title}</h3>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${nutrient.gradient} text-white text-sm font-bold mb-6 shadow-lg`}>
                      {nutrient.amount}
                    </div>
                    <ul className="space-y-2">
                      {nutrient.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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

      {/* Brain-Boosting Foods */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-xl shadow-green-500/30">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Foods That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Supercharge</span> Your Brain</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Foods That Boost */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Card className="relative border-2 border-green-500/20 shadow-2xl bg-gradient-to-br from-white via-green-50 to-white dark:from-slate-900 dark:via-green-950/30 dark:to-slate-900 backdrop-blur-xl overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-5 shadow-xl shadow-green-500/50">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black">Brain Boosters</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { food: "Fatty Fish", benefit: "Omega-3 DHA for structure" },
                      { food: "Blueberries", benefit: "Antioxidants improve memory" },
                      { food: "Turmeric", benefit: "Curcumin reduces inflammation" },
                      { food: "Broccoli", benefit: "Vitamin K for brain health" },
                      { food: "Pumpkin Seeds", benefit: "Zinc, magnesium, iron" },
                      { food: "Dark Chocolate", benefit: "Flavonoids improve focus" },
                      { food: "Nuts", benefit: "Vitamin E protects decline" },
                      { food: "Eggs", benefit: "Choline for memory" },
                      { food: "Green Tea", benefit: "L-theanine + caffeine = calm focus" },
                      { food: "Leafy Greens", benefit: "Folate, vitamins" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 dark:bg-green-500/30 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-green-500/40 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">{item.food}</span>
                          <span className="text-muted-foreground"> - {item.benefit}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Foods That Harm */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Card className="relative border-2 border-red-500/20 shadow-2xl bg-gradient-to-br from-white via-red-50 to-white dark:from-slate-900 dark:via-red-950/30 dark:to-slate-900 backdrop-blur-xl overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mr-5 shadow-xl shadow-red-500/50">
                      <AlertCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-black">Brain Drainers</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { food: "Refined Sugar", harm: "Inflammation & crashes" },
                      { food: "Trans Fats", harm: "Damage cell membranes" },
                      { food: "Excessive Alcohol", harm: "Neurotoxic effects" },
                      { food: "Processed Foods", harm: "Lack essential nutrients" },
                      { food: "High Sodium", harm: "Affects blood flow to brain" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 dark:bg-red-500/30 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-red-500/40 transition-colors">
                          <span className="text-red-600 dark:text-red-400 font-bold">✕</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">{item.food}</span>
                          <span className="text-muted-foreground"> - {item.harm}</span>
                        </div>
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Mental Transformation</span> Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Watch your cognitive performance soar</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 1-2: Initial Clarity",
                gradient: "from-blue-500 to-cyan-500",
                icon: "🌅",
                benefits: ["Reduced brain fog", "More consistent energy", "Better mood", "Improved sleep quality"],
              },
              {
                timeline: "Week 4-6: Sharp Focus",
                gradient: "from-purple-500 to-pink-500",
                icon: "🎯",
                benefits: ["Noticeably sharper focus", "Enhanced memory recall", "Faster mental processing", "Sustained mental energy"],
              },
              {
                timeline: "Month 3-6: Peak Performance",
                gradient: "from-orange-500 to-red-500",
                icon: "🚀",
                benefits: ["Significant cognitive improvements", "Enhanced creativity", "Better emotional regulation", "Increased mental resilience"],
              },
              {
                timeline: "1+ Year: Long-Term Protection",
                gradient: "from-green-500 to-emerald-500",
                icon: "🛡️",
                benefits: ["Protection against decline", "Sharp mind with aging", "Reduced dementia risk", "Optimal mental performance"],
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
                                <Sparkles className="w-6 h-6 text-white" />
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

      {/* Brain Health by Age */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-xl shadow-indigo-500/30">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Brain Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Across Life Stages</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Tailored strategies for every decade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                age: "20s-30s",
                title: "Peak Performance",
                icon: "🚀",
                gradient: "from-blue-500 to-cyan-500",
                priorities: [
                  "Maximize cognitive potential",
                  "Build cognitive reserve",
                  "Optimize productivity",
                  "Stress management for careers",
                ],
              },
              {
                age: "40s-50s",
                title: "Maintenance & Prevention",
                icon: "🛡️",
                gradient: "from-purple-500 to-pink-500",
                priorities: [
                  "Combat early decline signs",
                  "Protect against memory issues",
                  "Maintain sharpness",
                  "Prevent aging acceleration",
                ],
              },
              {
                age: "60s+",
                title: "Active Neuroprotection",
                icon: "👑",
                gradient: "from-green-500 to-emerald-500",
                priorities: [
                  "Aggressive nutritional support",
                  "Combat age-related decline",
                  "Maintain independence",
                  "Reduce Alzheimer's risk",
                ],
              },
            ].map((stage, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${stage.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-slate-200 dark:border-slate-800 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:scale-105 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.gradient} text-white mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                      <span className="text-5xl">{stage.icon}</span>
                    </div>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${stage.gradient} text-white text-sm font-bold mb-3 shadow-lg`}>
                      {stage.age}
                    </div>
                    <h3 className="text-2xl font-black mb-6">{stage.title}</h3>
                    <ul className="space-y-3">
                      {stage.priorities.map((priority, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground font-semibold">{priority}</span>
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

      {/* Our 5-Phase Approach */}
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">5-Phase</span> Brain Optimization System</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">A comprehensive approach to cognitive excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "1. Cognitive Assessment",
                icon: <Brain className="w-10 h-10" />,
                gradient: "from-blue-500 to-cyan-500",
                items: ["Current cognitive concerns", "Lifestyle factor analysis", "Dietary assessment", "Family history review"],
              },
              {
                phase: "2. Brain Nutrition Plan",
                icon: <Sparkles className="w-10 h-10" />,
                gradient: "from-green-500 to-emerald-500",
                items: ["Omega-3 optimization", "B vitamin complex", "Antioxidant-rich foods", "Blood sugar stabilization"],
              },
              {
                phase: "3. Lifestyle Optimization",
                icon: <Activity className="w-10 h-10" />,
                gradient: "from-purple-500 to-pink-500",
                items: ["Sleep hygiene protocols", "Stress management", "Exercise recommendations", "Mental exercises"],
              },
              {
                phase: "4. Peak Performance",
                icon: <Zap className="w-10 h-10" />,
                gradient: "from-yellow-500 to-orange-500",
                items: ["Nutrition timing for focus", "Pre-exam protocols", "Managing mental slumps", "Enhancing creativity"],
              },
              {
                phase: "5. Long-Term Protection",
                icon: <Shield className="w-10 h-10" />,
                gradient: "from-red-500 to-pink-500",
                items: ["Anti-aging nutrition", "Prevention strategies", "Building cognitive reserve", "Progress monitoring"],
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <Card className="relative border-2 border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-6 text-white">{item.phase}</h3>
                    <ul className="space-y-3">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300 font-semibold leading-relaxed pt-0.5">{point}</span>
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

      {/* Lifestyle Strategies */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-6 shadow-xl shadow-teal-500/30">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Brain-Boosting <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Lifestyle Strategies</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sleep for Brain",
                icon: <Moon className="w-8 h-8" />,
                gradient: "from-indigo-500 to-purple-500",
                tips: ["7-9 hours nightly", "Consistent schedule", "Dark, cool room", "No screens before bed"],
              },
              {
                title: "Exercise Benefits",
                icon: <Activity className="w-8 h-8" />,
                gradient: "from-green-500 to-emerald-500",
                tips: ["Increases BDNF", "30 min daily walking", "Yoga reduces stress", "Strength training helps"],
              },
              {
                title: "Mental Stimulation",
                icon: <BookOpen className="w-8 h-8" />,
                gradient: "from-orange-500 to-red-500",
                tips: ["Learn new skills", "Read regularly", "Puzzles & games", "Social interaction"],
              },
              {
                title: "Stress Management",
                icon: <Heart className="w-8 h-8" />,
                gradient: "from-pink-500 to-red-500",
                tips: ["Meditation practice", "Deep breathing", "Time in nature", "Gratitude practice"],
              },
            ].map((strategy, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${strategy.gradient} rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500`}></div>
                <Card className="relative border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group-hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${strategy.gradient} mb-4 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                      {strategy.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
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

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-6 shadow-xl shadow-yellow-500/30">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Mental Mastery</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the program that fits your cognitive goals</p>
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
                <AccordionTrigger className="text-left font-bold text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 mb-8 shadow-2xl">
            <Brain className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight">
            Ready to Unlock Your<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white">Mental Potential?</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-semibold max-w-4xl mx-auto">
            Book your free Brain Health Consultation and start your journey to peak cognitive performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" asChild className="bg-white text-purple-700 hover:bg-gray-100 shadow-2xl font-black text-lg px-10 py-7 rounded-xl hover:scale-110 transition-all duration-300">
              <Link to="/book-consultation">
                <Calendar className="mr-3 w-6 h-6" />
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 backdrop-blur-xl font-black text-lg px-10 py-7 rounded-xl hover:scale-110 transition-all duration-300 shadow-2xl">
              <Link to="/contact">
                <Brain className="mr-3 w-6 h-6" />
                Learn More
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mr-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Evidence-Based</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mr-3">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Proven Results</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center mr-3">
                <Heart className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">Personalized Care</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrainHealth;