
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
  Eye,
  Monitor,
  Sun,
  Smartphone,
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import eyeHero from "@/assets/products-hero.jpg"; // change to your image

const EyeHealth = () => {
  const pricingTiers = [
    {
      name: "Vision Starter",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Eye health assessment",
        "Digital eye strain analysis",
        "30-day vision support pack",
        "Blue light protection guide",
        "Eye exercise routine",
      ],
    },
    {
      name: "Complete Vision Care",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Comprehensive eye & lifestyle assessment",
        "90-day premium pack (Ocular Defense Formula, Omega-3, Multivitamins)",
        "Personalized nutrition plan for eyes",
        "Weekly coaching calls",
        "Digital detox strategies",
        "Unlimited WhatsApp support",
        "Eye-healthy recipe collection",
        "Family eye care guidance",
      ],
    },
    {
      name: "Lifetime Vision Protection",
      duration: "6-12 months",
      price: "Contact for price",
      features: [
        "Full vision optimization protocol",
        "Long-term supplement supply",
        "Quarterly eye health reviews",
        "Private support group",
        "Age-specific prevention strategies",
        "Annual eye exam reminders",
        "Advanced blue light solutions",
        "Lifetime vision maintenance plan",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Can nutrition really improve my eyesight?",
      answer: "While nutrition won't correct refractive errors (needing glasses), it can significantly support eye health, reduce strain, prevent age-related decline, and in some cases, improve visual function. Herbalife's Ocular Defense Formula contains lutein, zeaxanthin, and other proven nutrients that protect the macula and reduce blue light damage.",
    },
    {
      question: "I already wear glasses. Is eye nutrition still beneficial?",
      answer: "Absolutely! Glasses correct vision but don't protect against eye diseases or age-related decline. Nutrition supports overall eye health regardless of whether you wear corrective lenses. In fact, proper nutrition can prevent your prescription from worsening rapidly.",
    },
    {
      question: "How long before I notice improvements?",
      answer: "Digital eye strain relief can occur within 2-4 weeks with proper nutrition and habits. Reduced dryness and fatigue are often the first improvements. Long-term protective benefits (preventing AMD, cataracts) build over months and years of consistent nutrition.",
    },
    {
      question: "I'm young. Do I need to worry about eye health now?",
      answer: "Yes! Prevention is key. The habits and nutrition you establish now determine your vision quality in later decades. Plus, if you use screens heavily, protection is needed at any age. Starting early means you'll maintain sharp vision longer.",
    },
    {
      question: "Can this prevent cataracts and macular degeneration?",
      answer: "Studies show proper nutrition can reduce AMD risk by up to 25% and significantly slow cataract progression. While genetics play a role, the right nutrients (lutein, zeaxanthin, vitamins C & E, omega-3) provide powerful protection.",
    },
    {
      question: "What specific Herbalife products help with eye health?",
      answer: "Herbalife's Ocular Defense Formula is specifically designed for eye health with lutein and zeaxanthin. Herbalifeline Max provides omega-3 DHA crucial for retinal health. Formula 1 provides vitamins A, C, E for overall eye protection. The combination creates comprehensive eye support.",
    },
    {
      question: "My eyes are always dry from computer work. Can this help?",
      answer: "Yes! Omega-3 fatty acids (from Herbalifeline Max) significantly improve tear production and quality. Combined with proper hydration, blinking exercises, and the 20-20-20 rule, most clients see dramatic improvement in dry eye symptoms within 3-4 weeks.",
    },
  ];

  const mistakesData = [
    { mistake: "Ignoring screen time limits", consequence: "Digital eye strain, dry eyes, blurred vision", icon: <Monitor className="w-5 h-5" /> },
    { mistake: "Not wearing UV protection", consequence: "Cataract formation, macular damage", icon: <Sun className="w-5 h-5" /> },
    { mistake: "Poor lighting while reading", consequence: "Eye fatigue, headaches, vision deterioration", icon: <Clock className="w-5 h-5" /> },
    { mistake: "Rubbing eyes frequently", consequence: "Spreads bacteria, damages cornea", icon: <Eye className="w-5 h-5" /> },
    { mistake: "Skipping eye nutrients", consequence: "Accelerated age-related decline", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "Using devices in bed", consequence: "Blue light disrupts sleep, eye strain", icon: <Smartphone className="w-5 h-5" /> },
    { mistake: "Ignoring vision changes", consequence: "Missing early warning signs", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Eye Health Program - Protect Your Vision | New Life Wellness Centre Kolathur, Chennai"
        description="Combat digital eye strain, prevent age-related vision decline with Herbalife's targeted eye nutrition at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Proven solutions for computer vision syndrome. Best eye health program in Kolathur, Chennai."
        canonical="/programs/eye-health"
        keywords="Eye Health Program Kolathur, Digital Eye Strain Relief Chennai, Macular Degeneration Prevention Villivakkam, Herbalife Ocular Defense Kolathur, Computer Vision Syndrome Chennai, Best Eye Health Program Villivakkam, Eye Nutrition Kolathur, Vision Health Chennai"
      />

      <ProgramHero
        image={eyeHero}
        title="Protect Your Vision – Nourish Your Eyes from Within"
        tagline="Support healthy eyesight with targeted nutrition and lifestyle strategies"
      />

      {/* Understanding Eye Health */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Eyes Are Under Attack Every Day</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              7-10 hours of screen time. UV radiation. Processed foods lacking nutrients. Your eyes are fighting a losing battle — unless you actively protect them. Vision loss isn't inevitable; it's preventable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* The Modern Eye Crisis */}
            <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">The Modern Eye Health Crisis</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Digital eye strain affecting 65% of adults",
                    "Blue light damaging retinal cells",
                    "Dry, irritated eyes from reduced blinking",
                    "Premature presbyopia (can't focus up close)",
                    "Rising rates of myopia in children",
                    "Earlier onset of cataracts",
                    "Macular degeneration risk increasing",
                    "Night vision deteriorating faster",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                      <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits of Eye Protection */}
            <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Life with Protected Vision</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Clear, sharp vision throughout the day",
                    "No more eye strain or fatigue",
                    "Better night vision and contrast",
                    "Reduced headaches from eye stress",
                    "Protected against future vision loss",
                    "Comfortable screen time without pain",
                    "Moist, healthy eyes naturally",
                    "Confidence in your vision's future",
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
            <h3 className="text-3xl font-bold mb-8 text-center">7 Vision-Destroying Mistakes You're Making</h3>
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

      {/* Signs You Need Eye Health Support */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Warning Signs Your Eyes Need Help NOW</h2>
            <p className="text-xl text-muted-foreground">If you experience any of these, immediate action is crucial:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "You spend 4+ hours daily on screens",
              "Your eyes feel tired by afternoon",
              "You experience frequent headaches",
              "Your eyes feel dry, gritty, or irritated",
              "You have difficulty seeing at night",
              "You're over 40 years old",
              "Family history of eye conditions",
              "Vision becomes blurry after screen work",
              "You see halos around lights",
              "Light sensitivity has increased",
              "You're diabetic or pre-diabetic",
              "You squint frequently to see clearly",
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all hover:scale-105">
                <CardContent className="p-6 flex items-start">
                  <AlertCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Nutrients for Eye Health */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The 7 Essential Nutrients Your Eyes Are Starving For</h2>
            <p className="text-xl text-muted-foreground">Science-backed nutrients that protect and preserve vision</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lutein & Zeaxanthin",
                icon: <Shield className="w-8 h-8" />,
                benefits: [
                  "Filter harmful blue light",
                  "Protect macula from damage",
                  "Reduce AMD risk by 25%",
                  "Improve visual acuity",
                ],
              },
              {
                title: "Vitamin A & Beta-Carotene",
                icon: <Eye className="w-8 h-8" />,
                benefits: [
                  "Essential for night vision",
                  "Protects cornea surface",
                  "Prevents dry eyes",
                  "Maintains eye moisture",
                ],
              },
              {
                title: "Omega-3 Fatty Acids",
                icon: <Activity className="w-8 h-8" />,
                benefits: [
                  "Critical for retinal health",
                  "Reduces dry eye syndrome",
                  "Lowers inflammation",
                  "Improves tear quality",
                ],
              },
              {
                title: "Vitamin C",
                icon: <Zap className="w-8 h-8" />,
                benefits: [
                  "Powerful antioxidant protection",
                  "Reduces cataract risk",
                  "Supports eye blood vessels",
                  "Slows AMD progression",
                ],
              },
              {
                title: "Vitamin E",
                icon: <Trophy className="w-8 h-8" />,
                benefits: [
                  "Protects cells from damage",
                  "Works with vitamin C",
                  "Prevents oxidative stress",
                  "Maintains lens clarity",
                ],
              },
              {
                title: "Zinc",
                icon: <Target className="w-8 h-8" />,
                benefits: [
                  "Helps create eye pigment",
                  "Supports night vision",
                  "Transports vitamin A",
                  "Protects against AMD",
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

      {/* Why Herbalife for Eye Health */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Eye Protection with Herbalife</h2>
            <p className="text-xl text-muted-foreground">Scientifically formulated nutrition for optimal vision health</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ocular Defense Formula</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced eye protection with clinically proven ingredients for macular health and blue light defense.
                </p>
                <ul className="space-y-2">
                  {[
                    "10mg Lutein + 2mg Zeaxanthin (optimal ratio)",
                    "Bilberry extract for night vision",
                    "Vitamin A for corneal health",
                    "Protects against screen damage",
                    "Reduces risk of AMD by up to 25%",
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
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Herbalifeline Max (Omega-3)</h3>
                <p className="text-muted-foreground mb-4">
                  Essential fatty acids for retinal health and dry eye prevention.
                </p>
                <ul className="space-y-2">
                  {[
                    "High DHA content for retinal cells",
                    "Reduces dry eye symptoms by 60%",
                    "Anti-inflammatory action",
                    "Improves tear production",
                    "Supports overall eye moisture",
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
                <h3 className="text-2xl font-bold mb-4">Formula 2 Multivitamin</h3>
                <p className="text-muted-foreground mb-4">
                  Complete vitamin and mineral support including all eye-essential nutrients.
                </p>
                <ul className="space-y-2">
                  {[
                    "Vitamins A, C, E for antioxidant protection",
                    "B-complex for optic nerve health",
                    "Zinc for night vision",
                    "Selenium for lens protection",
                    "Complete daily eye nutrition",
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
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Complete System Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Not just supplements — a comprehensive vision protection program.
                </p>
                <ul className="space-y-2">
                  {[
                    "Digital eye strain solutions",
                    "Blue light protection strategies",
                    "Eye exercise routines",
                    "Lifestyle modifications",
                    "Long-term vision preservation",
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

      {/* Our 4-Phase Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our 4-Phase Eye Health System</h2>
            <p className="text-xl text-muted-foreground">From strain to clarity in 90 days</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Phase 1: Assessment",
                icon: <Target className="w-8 h-8" />,
                items: ["Vision status evaluation", "Digital habits analysis", "Nutrient deficiency check", "Risk factor identification"],
              },
              {
                title: "Phase 2: Nutrition Plan",
                icon: <Zap className="w-8 h-8" />,
                items: ["Targeted supplementation", "Eye-healthy meal plans", "Hydration optimization", "Nutrient timing"],
              },
              {
                title: "Phase 3: Lifestyle Mods",
                icon: <Monitor className="w-8 h-8" />,
                items: ["20-20-20 rule implementation", "Blue light protection", "Eye exercise routine", "Sleep optimization"],
              },
              {
                title: "Phase 4: Monitoring",
                icon: <TrendingUp className="w-8 h-8" />,
                items: ["Symptom tracking", "Vision improvements", "Plan adjustments", "Long-term strategies"],
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

      {/* Digital Eye Strain Solutions */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Beat Digital Eye Strain Once and For All</h2>
            <p className="text-xl text-muted-foreground">Practical strategies for the digital age</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The 20-20-20 Rule",
                description: "Every 20 minutes, look at something 20 feet away for 20 seconds",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                title: "Optimal Screen Position",
                description: "20-26 inches away, slightly below eye level",
                icon: <Monitor className="w-6 h-6" />,
              },
              {
                title: "Blink Consciously",
                description: "We blink 66% less on screens — practice blinking exercises",
                icon: <Eye className="w-6 h-6" />,
              },
              {
                title: "Adjust Brightness",
                description: "Match screen brightness to surrounding environment",
                icon: <Sun className="w-6 h-6" />,
              },
              {
                title: "Use Blue Light Filters",
                description: "Software filters or blue light glasses after sunset",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                title: "Increase Text Size",
                description: "Reduce strain by making text comfortably readable",
                icon: <Zap className="w-6 h-6" />,
              },
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

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">What's Included in the Program</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Complete Eye Health Assessment", description: "Current status and risk factors", icon: <Target className="w-6 h-6" /> },
              { title: "Personalized Nutrition Plan", description: "Foods and supplements for eye protection", icon: <Calendar className="w-6 h-6" /> },
              { title: "Digital Eye Strain Guide", description: "Practical tips for screen users", icon: <Monitor className="w-6 h-6" /> },
              { title: "Eye Exercise Routine", description: "Simple exercises to reduce fatigue", icon: <Eye className="w-6 h-6" /> },
              { title: "Blue Light Protection Strategies", description: "Minimize digital damage", icon: <Shield className="w-6 h-6" /> },
              { title: "Recipe Collection", description: "Eye-healthy, nutrient-rich meals", icon: <Brain className="w-6 h-6" /> },
              { title: "Product Recommendations", description: "Targeted nutritional support", icon: <Trophy className="w-6 h-6" /> },
              { title: "Lifestyle Modification Plan", description: "Habits to protect your vision", icon: <Activity className="w-6 h-6" /> },
              { title: "Monthly Progress Reviews", description: "Track improvements and adjust plan", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "Educational Resources", description: "Understanding eye health", icon: <Brain className="w-6 h-6" /> },
              { title: "WhatsApp Support", description: "Quick answers to vision questions", icon: <Users className="w-6 h-6" /> },
              { title: "Family Eye Care Guidance", description: "Protect everyone's vision", icon: <Users className="w-6 h-6" /> },
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

      {/* Eye Health Across Life Stages */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Eye Protection for Every Age</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "20s-30s: Prevention Focus",
                icon: "👁️",
                solutions: ["Protect against digital eye strain", "Build nutrient reserves", "Establish protective habits", "UV protection commitment"],
              },
              {
                title: "40s-50s: Early Intervention",
                icon: "🔍",
                solutions: ["Address presbyopia naturally", "Increase antioxidant intake", "Monitor for early AMD signs", "Strengthen eye health foundation"],
              },
              {
                title: "60s+: Active Protection",
                icon: "👓",
                solutions: ["Aggressive nutritional support", "Regular professional monitoring", "Cataract and glaucoma prevention", "Maintain independence through vision"],
              },
              {
                title: "Screen Workers",
                icon: "💻",
                solutions: ["Blue light defense protocol", "Hourly eye breaks", "Optimal workspace setup", "Dry eye prevention"],
              },
              {
                title: "Outdoor Workers",
                icon: "☀️",
                solutions: ["UV protection strategies", "Antioxidant loading", "Hydration focus", "Protective eyewear guidance"],
              },
              {
                title: "Students",
                icon: "📚",
                solutions: ["Study lighting optimization", "Reading posture correction", "Screen time management", "Focus enhancement nutrition"],
              },
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
            <h2 className="text-4xl font-bold mb-4">Your Vision Improvement Timeline</h2>
            <p className="text-xl text-muted-foreground">Progressive improvements you'll experience</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 2-4",
                color: "bg-blue-500",
                benefits: ["Reduced eye strain and fatigue", "Less dryness and irritation", "Fewer headaches", "Better sleep quality"],
              },
              {
                timeline: "Month 2-3",
                color: "bg-green-500",
                benefits: ["Noticeably less eye fatigue", "Improved night vision", "Reduced light sensitivity", "Better focus and concentration"],
              },
              {
                timeline: "Month 6+",
                color: "bg-purple-500",
                benefits: ["Protection against age-related decline", "Reduced risk of macular degeneration", "Lower cataract risk", "Maintained visual acuity"],
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
                            <Eye className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
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

      {/* Warning Signs */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⚠️ When to See an Eye Doctor Immediately</h2>
            <p className="text-xl text-muted-foreground">These symptoms require professional medical attention</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sudden vision loss or changes",
              "Flashes of light or floating spots",
              "Eye pain or severe redness",
              "Double vision",
              "Halos around lights",
              "Difficulty seeing in low light",
              "Loss of peripheral vision",
              "Sudden increase in floaters",
              "Curtain-like shadow over vision",
            ].map((warning, index) => (
              <Card key={index} className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
                <CardContent className="p-6 flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-red-800 dark:text-red-200 font-semibold">{warning}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center mt-8 text-muted-foreground italic">
            Note: Nutritional support complements, but does not replace, regular eye exams. Adults should see an eye doctor every 1-2 years.
          </p>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results for Vision Protection</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "87%", label: "Less Eye Strain", description: "Within 30 days" },
              { stat: "25%", label: "AMD Risk Reduction", description: "With proper nutrition" },
              { stat: "92%", label: "Improved Comfort", description: "During screen time" },
              { stat: "78%", label: "Better Night Vision", description: "After 90 days" },
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
            <h2 className="text-4xl font-bold mb-4">Choose Your Vision Protection Plan</h2>
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
          <h2 className="text-4xl font-bold mb-6">Your Vision is Too Precious to Risk</h2>
          <p className="text-xl text-white/90 mb-8">
            Start protecting your eyes today. Book your FREE Eye Health Consultation and discover how to preserve your vision for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Eye Health Consultation
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
            👁️ Limited spots this month | 💯 No commitment required | 🎁 Get free blue light protection guide
          </p>
        </div>
      </section>
    </>
  );
};

export default EyeHealth;