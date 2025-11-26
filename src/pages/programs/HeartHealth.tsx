
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
  Heart,
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
  Coffee,
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import heartHero from "@/assets/hero-banner.jpg"; // change to your image

const HeartHealth = () => {
  const pricingTiers = [
    {
      name: "Heart Start",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Heart health & lifestyle assessment",
        "Personalized nutrition plan",
        "30-day Herbalife heart bundle",
        "Daily WhatsApp support",
        "Basic progress tracking",
      ],
    },
    {
      name: "Heart Mastery",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Comprehensive assessment + blood report review",
        "Custom Herbalife heart program",
        "90-day premium pack (Niteworks + Herbalifeline Max + Beta Heart + Formula 1)",
        "Weekly coaching calls",
        "Family heart guidance",
        "Unlimited WhatsApp support",
        "Cholesterol & BP tracking sheet",
        "Heart-healthy recipe pack",
      ],
    },
    {
      name: "Lifetime Heart Protection",
      duration: "6-12 months",
      price: "Contact for price",
      features: [
        "Full cardiovascular transformation",
        "Advanced product pack + ongoing supply",
        "Monthly doctor-report reviews",
        "Private WhatsApp group access",
        "Entire family included",
        "Lifetime maintenance plan",
        "Annual health check-up guidance",
      ],
    },
  ];

  const faqItems = [
    {
      question: "How do Herbalife products specifically support heart health?",
      answer: "Herbalifeline® Max provides high-potency Omega-3 EPA & DHA proven to maintain healthy cholesterol and triglyceride levels. Niteworks® contains L-Arginine & L-Citrulline that boost Nitric Oxide production for flexible blood vessels and better circulation. Beta Heart® with oat beta-glucan reduces cholesterol absorption. Formula 1 + Protein helps achieve healthy weight — the #1 controllable risk factor for heart disease.",
    },
    {
      question: "Is this safe if I'm already on BP/Cholesterol medication?",
      answer: "Yes — 100% safe and complementary. Thousands of our clients are on medication and use Herbalife alongside it. Many reduce or eliminate medication under doctor's supervision after 3–6 months of consistent use.",
    },
    {
      question: "How soon do people see results in blood reports?",
      answer: "Most clients see blood pressure improvement in 3–4 weeks and significant cholesterol reduction (15–35%) in 8–12 weeks. We have hundreds of before-after reports to prove it.",
    },
    {
      question: "Can the whole family join?",
      answer: "Absolutely! Heart disease runs in families. We create family plans so spouses, parents, and children (12+) protect their hearts together.",
    },
    {
      question: "Do I have to exercise intensely?",
      answer: "No! We start with simple 15–20 min walking or any movement you enjoy. Consistency beats intensity every time.",
    },
    {
      question: "What if I travel a lot or have a busy job?",
      answer: "Our solutions are designed for busy people — portable shakes, no-cook options, hotel-friendly routines, and 24×7 WhatsApp support.",
    },
    {
      question: "I hate fish taste — will Omega-3 capsules be a problem?",
      answer: "Herbalifeline Max is lemon-flavoured and burp-free. 98% of clients say they can't taste any fish.",
    },
  ];

  const mistakesData = [
    { mistake: "High sodium diet", consequence: "Silently raises blood pressure", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "Excess saturated & trans fats", consequence: "Clogs arteries with LDL cholesterol", icon: <Heart className="w-5 h-5" /> },
    { mistake: "Low fiber intake", consequence: "Cholesterol stays in bloodstream", icon: <TrendingUp className="w-5 h-5" /> },
    { mistake: "Sedentary lifestyle", consequence: "Weak heart muscle & poor circulation", icon: <Activity className="w-5 h-5" /> },
    { mistake: "Chronic stress", consequence: "Spikes cortisol & blood pressure", icon: <Brain className="w-5 h-5" /> },
    { mistake: "Insufficient Omega-3s", consequence: "Inflammation & stiff arteries", icon: <Shield className="w-5 h-5" /> },
    { mistake: "Ignoring early warning signs", consequence: "Silent damage becomes irreversible", icon: <AlertCircle className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Heart Health Program - Protect Your Heart | New Life Wellness Centre Kolathur, Chennai"
        description="Proven Herbalife nutrition to lower cholesterol, maintain healthy blood pressure & prevent heart disease at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. 500+ transformed clients. Best heart health program in Kolathur, Chennai."
        canonical="/programs/heart-health"
        keywords="Heart Health Program Kolathur, Reduce Cholesterol Chennai, Lower BP Naturally Villivakkam, Heart Health Kolathur, Niteworks Chennai, Herbalifeline Villivakkam, Best Heart Health Program Kolathur, Heart Nutrition Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Your Path to a Stronger, Healthier Heart"
        tagline="Lower cholesterol · Healthy blood pressure · More energy · Live longer, live better"
      />

      {/* Why Heart Health is Critical */}
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
            <h2 className="text-4xl font-bold mb-4">India's #1 Killer is Completely Preventable</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              1 in 4 deaths in India is due to heart disease. Indians get heart attacks 10 years earlier than the rest of the world. The great news? 80–90% of heart disease is preventable with the right nutrition and lifestyle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What Happens When You Neglect */}
            <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">Silent Damage Happening Right Now</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "High LDL cholesterol silently clogging arteries",
                    "High blood pressure damaging blood vessels daily",
                    "Chronic inflammation attacking your heart",
                    "Oxidative stress creating plaque",
                    "Poor blood circulation → cold hands/feet",
                    "Excess belly fat putting massive strain on heart",
                    "High triglycerides",
                    "Family history waiting to express itself",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                      <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits of Protecting Your Heart */}
            <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Benefits of a Protected Heart</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Boundless energy all day",
                    "Warm hands & feet (better circulation)",
                    "Peace of mind — no fear of sudden heart attack",
                    "Live to see your grandchildren grow",
                    "Reduce or eliminate medication",
                    "Sleep deeply & wake up refreshed",
                    "Look & feel 10 years younger",
                    "Set a powerful example for your family",
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

          {/* Common Mistakes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Common Heart Health Mistakes to Avoid</h3>
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
            <h2 className="text-4xl font-bold mb-4">Signs Your Heart Needs Protection NOW</h2>
            <p className="text-xl text-muted-foreground">If you have even ONE of these — it's time to act</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Total cholesterol > 200 or LDL > 130",
              "Blood pressure > 130/85 anytime",
              "Family history of heart attack/stroke",
              "Age above 40 (men) or 50 (women)",
              "Waist > 90cm (men) or > 80cm (women)",
              "Always feeling tired despite sleeping",
              "Shortness of breath on stairs",
              "Cold hands/feet or leg cramps",
              "Doctor said 'borderline' or 'watch it'",
              "You want to prevent future problems",
              "You have diabetes or PCOS",
              "You smoke or used to smoke",
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all hover:scale-105">
                <CardContent className="p-6 flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Heart Health */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The 5 Pillars of Heart Health</h2>
            <p className="text-xl text-muted-foreground">Everything your heart needs to stay strong for life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Targeted Nutrition",
                icon: <Target className="w-8 h-8" />,
                benefits: [
                  "Omega-3 EPA/DHA (Herbalifeline Max)",
                  "Nitric Oxide support (Niteworks)",
                  "Oat beta-glucan (Beta Heart)",
                  "Antioxidants & plant sterols",
                  "Low sodium, high potassium",
                ],
              },
              {
                title: "Healthy Weight & Waist",
                icon: <Zap className="w-8 h-8" />,
                benefits: [
                  "Every 5kg lost reduces heart strain",
                  "Reduces inflammation dramatically",
                  "Improves all blood markers",
                  "Formula 1 + Protein makes it easy",
                ],
              },
              {
                title: "Daily Movement",
                icon: <Activity className="w-8 h-8" />,
                benefits: [
                  "Strengthens heart muscle",
                  "Improves circulation",
                  "Lowers blood pressure naturally",
                  "Just 20–30 min walking is enough",
                ],
              },
              {
                title: "Stress Mastery",
                icon: <Brain className="w-8 h-8" />,
                benefits: [
                  "Lowers cortisol & adrenaline",
                  "Prevents BP spikes",
                  "Better sleep = heart repair time",
                  "Breathing & mindfulness tools",
                ],
              },
              {
                title: "Regular Monitoring",
                icon: <TrendingUp className="w-8 h-8" />,
                benefits: [
                  "Track BP, weight, waist weekly",
                  "Blood tests every 3 months",
                  "Celebrate progress",
                  "Adjust plan as needed",
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

      {/* Our Approach - 6 Steps */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Proven 6-Step Heart Protection System</h2>
            <p className="text-xl text-muted-foreground">Used by 500+ clients with amazing results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Comprehensive Heart Assessment",
                icon: <Target className="w-8 h-8" />,
                items: ["Latest blood reports review", "Family history deep dive", "Lifestyle & stress audit", "Calculate your real risk score"],
              },
              {
                title: "2. Personalized Nutrition Plan",
                icon: <Coffee className="w-8 h-8" />,
                items: ["Indian meals made heart-friendly", "Delicious replacements you’ll love", "Exact portion guidance", "Weekly meal templates"],
              },
              {
                title: "3. Targeted Herbalife Support",
                icon: <Shield className="w-8 h-8" />,
                items: ["Niteworks® – vessel flexibility", "Herbalifeline® Max – Omega-3", "Beta Heart® – cholesterol trap", "Core nutrition with Formula 1"],
              },
              {
                title: "4. Simple Daily Movement",
                icon: <Activity className="w-8 h-8" />,
                items: ["15–30 min routines you enjoy", "Home workouts, walking plans", "Office desk exercises", "Weekend active ideas"],
              },
              {
                title: "5. Stress & Sleep Mastery",
                icon: <Brain className="w-8 h-8" />,
                items: ["5-minute breathing techniques", "Bedtime routine checklist", "Natural relaxation support", "Emotional eating solutions"],
              },
              {
                title: "6. Ongoing Coaching & Tracking",
                icon: <Users className="w-8 h-8" />,
                items: ["Weekly check-ins", "Monthly report reviews", "24×7 WhatsApp guidance", "Lifetime community access"],
              },
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">What's Included in the Program</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Heart Health Assessment", description: "Complete risk analysis + blood report review", icon: <Target className="w-6 h-6" /> },
              { title: "Personalized Nutrition Plan", description: "Indian meals made heart-safe", icon: <Calendar className="w-6 h-6" /> },
              { title: "50+ Heart-Healthy Recipes", description: "South Indian, North Indian, snacks, sweets", icon: <Coffee className="w-6 h-6" /> },
              { title: "Targeted Product Pack", description: "Niteworks + Herbalifeline + Beta Heart + Formula 1", icon: <Shield className="w-6 h-6" /> },
              { title: "Daily Movement Guide", description: "15–30 min routines for busy people", icon: <Activity className="w-6 h-6" /> },
              { title: "Stress & Sleep Toolkit", description: "Breathing exercises + bedtime routine", icon: <Brain className="w-6 h-6" /> },
              { title: "Progress Tracking Sheets", description: "BP, weight, waist, energy log", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "Family Heart Protection", description: "Guidance for spouse & children", icon: <Users className="w-6 h-6" /> },
              { title: "Shopping Lists", description: "Heart-friendly grocery templates", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "WhatsApp Support", description: "Instant answers anytime", icon: <Users className="w-6 h-6" /> },
              { title: "Weekly Check-ins", description: "Personal coaching calls", icon: <Calendar className="w-6 h-6" /> },
              { title: "Lifetime Access", description: "Updates, new recipes, community", icon: <Trophy className="w-6 h-6" /> },
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

      {/* Heart Solutions for Different Lifestyles */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Heart Solutions for Every Lifestyle</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "For Busy Professionals", icon: "💼", solutions: ["60-second heart shakes", "Desk-friendly snacks", "Travel routines", "Stress-busting hacks"] },
              { title: "For Parents & Homemakers", icon: "👨‍👩‍👧‍👦", solutions: ["Family meals everyone loves", "Kid-friendly heart food", "Quick cooking methods", "Lunchbox ideas"] },
              { title: "For 50+ Adults", icon: "🧘‍♂️", solutions: ["Joint-friendly movement", "Strong bone + heart combo", "Better sleep focus", "Age-defying energy"] },
              { title: "For Those with Family History", icon: "❤️", solutions: ["Break the cycle forever", "Early prevention plan", "Protect children early", "Lifetime protection"] },
              { title: "For Weight Managers", icon: "⚖️", solutions: ["Reduce belly fat fast", "Control cravings", "Portion-perfect meals", "See waist shrink"] },
              { title: "For Frequent Travellers", icon: "✈️", solutions: ["Hotel & flight routines", "Portable nutrition", "Airport food hacks", "Jet lag protection"] },
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Heart Transformation Timeline</h2>
            <p className="text-xl text-muted-foreground">Real results our clients experience</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 1–2",
                benefits: [
                  "More energy throughout the day",
                  "Better, deeper sleep",
                  "Reduced bloating & heaviness",
                  "Warmer hands & feet",
                  "Feeling lighter & hopeful",
                ],
              },
              {
                timeline: "Week 3–8",
                benefits: [
                  "Blood pressure starts dropping",
                  "Better stamina on stairs",
                  "Reduced cravings for salty/oily food",
                  "Visible waist reduction begins",
                  "Doctor notices improvement",
                ],
              },
              {
                timeline: "Month 3–6",
                benefits: [
                  "Cholesterol drops 15–35% (blood report proof)",
                  "Many reduce/eliminate medication (with doctor approval)",
                  "Heart feels stronger & calmer",
                  "Confidence returns — no more fear",
                  "Family inspired to join",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-3 h-full bg-red-500 rounded-full mr-6 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{phase.timeline}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <Heart className="w-5 h-5 text-red-500 mr-3 flex予想-shrink-0 mt-0.5" />
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

      {/* Success Stats */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Join 500+ People Who Transformed Their Hearts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "500+", label: "Hearts Protected", description: "In Chennai alone" },
              { stat: "92%", label: "Reduced Medication", description: "Under doctor's guidance" },
              { stat: "15-35%", label: "Average Cholesterol Drop", description: "In 3-6 months" },
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Heart Protection Package</h2>
          </div>
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
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
          <h2 className="text-4xl font-bold mb-6">Your Heart Can't Wait Another Day</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your FREE Consultation today (includes full blood report review worth ₹1500)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation Now
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
            ❤️ Limited slots this month | Zero commitment | Get your personalized heart rescue plan today
          </p>
        </div>
      </section>
    </>
  );
};

export default HeartHealth;