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
  Bone,
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
import boneJointHero from "@/assets/products-hero.jpg"; // change to your image

const BoneJointHealth = () => {
  const pricingTiers = [
    {
      name: "Joint Relief Start",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Bone & joint assessment",
        "Personalized nutrition plan",
        "30-day Herbalife joint bundle",
        "Daily WhatsApp support",
        "Pain & mobility tracking",
      ],
    },
    {
      name: "Complete Joint Recovery",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Comprehensive assessment + X-ray/scan review",
        "Custom Herbalife bone & joint protocol",
        "90-day premium pack (Joint Support  + Formula 1 + Protein)",
        "Weekly coaching calls",
        "Physiotherapy guidance integration",
        "Unlimited WhatsApp support",
        "Inflammation diet plan",
        "50+ joint-friendly recipes",
      ],
    },
    {
      name: "Lifetime Mobility Freedom",
      duration: "6-12 months",
      price: "Contact for price",
      features: [
        "Full musculoskeletal transformation",
        "Advanced supplement pack + ongoing supply",
        "Monthly doctor report reviews",
        "Private WhatsApp group",
        "Family joint health included",
        "Lifetime maintenance protocol",
        "Annual bone density guidance",
        "Personal exercise videos",
      ],
    },
  ];

  const faqItems = [
    {
      question: "How do Herbalife products help with joint pain and bone health?",
      answer: "Herbalife Joint Support Advanced contains Glucosamine, Chondroitin, and MSM — clinically proven to rebuild cartilage, reduce inflammation, and improve flexibility. Cal  provides highly absorbable calcium, magnesium, and Vitamin D3 for strong bones. Our protein products help maintain muscle mass that protects joints. Together, they provide complete musculoskeletal support.",
    },
    {
      question: "Can this help with arthritis, knee pain, and back pain?",
      answer: "Absolutely! 85% of our clients with arthritis report significant pain reduction in 60-90 days. Knee pain improves as we reduce inflammation and rebuild cartilage. Back pain often stems from weak core muscles and poor bone density — both addressed in our program.",
    },
    {
      question: "I'm already taking calcium. Why isn't it working?",
      answer: "Most calcium supplements have poor absorption (only 10-20%). Cal uses calcium citrate with Vitamin D3, K2, and magnesium for 70%+ absorption. Plus, we address the complete picture — not just calcium but also protein, anti-inflammatory nutrition, and weight management.",
    },
    {
      question: "Will I need to stop my pain medication?",
      answer: "Never stop medication without doctor approval. Our nutrition works alongside your current treatment. Most clients naturally reduce pain medication after 2-3 months as inflammation decreases and joints heal.",
    },
    {
      question: "Is this safe for osteoporosis/osteopenia?",
      answer: "100% safe and highly recommended! Our protocol is specifically designed to increase bone density. Many clients improve their DEXA scan scores within 6-12 months.",
    },
    {
      question: "Can young people (20-30s) benefit from this?",
      answer: "Yes! Peak bone mass is built before age 30. Starting early prevents future problems. If you have joint pain from sports, gym, or desk jobs, our program provides relief and long-term protection.",
    },
    {
      question: "Do I need to exercise? My joints hurt too much.",
      answer: "We start with gentle, joint-friendly movements — even chair exercises if needed. As nutrition reduces inflammation and pain, we gradually increase activity. Movement is medicine, but we make it painless.",
    },
    {
      question: "How fast will I see results?",
      answer: "Most clients feel reduced stiffness in 7-14 days. Significant pain reduction in 30-45 days. Major improvement in mobility and strength by 90 days. Bone density improvements visible in 6-12 months.",
    },
  ];

  const mistakesData = [
    { mistake: "Taking only calcium", consequence: "Without D3, K2, magnesium = poor absorption", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "Avoiding all exercise", consequence: "Joints stiffen, muscles weaken, bones deteriorate", icon: <Activity className="w-5 h-5" /> },
    { mistake: "High inflammatory diet", consequence: "Sugar, processed foods worsen joint pain", icon: <TrendingUp className="w-5 h-5" /> },
    { mistake: "Insufficient protein", consequence: "Muscle loss = unprotected joints", icon: <Shield className="w-5 h-5" /> },
    { mistake: "Excess weight", consequence: "Every 1kg = 4kg pressure on knees", icon: <Bone className="w-5 h-5" /> },
    { mistake: "Ignoring Vitamin D", consequence: "90% Indians deficient = weak bones", icon: <Brain className="w-5 h-5" /> },
    { mistake: "Only treating symptoms", consequence: "Pain relief without healing = damage continues", icon: <AlertCircle className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Bone & Joint Health Program - Live Pain-Free | New Life Wellness Centre Kolathur, Chennai"
        description="Proven Herbalife nutrition to strengthen bones, rebuild cartilage, reduce joint pain & improve mobility at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Trusted by 400+ arthritis & osteoporosis clients. Best bone & joint health program in Kolathur, Chennai."
        canonical="/programs/bone-joint-health"
        keywords="Joint Pain Relief Kolathur, Arthritis Treatment Chennai, Bone Health Villivakkam, Knee Pain Kolathur, Back Pain Chennai, Osteoporosis Villivakkam, Best Bone Joint Health Program Kolathur, Joint Health Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Move Freely, Live Fully – Strong Bones & Healthy Joints"
        tagline="Reduce pain · Rebuild cartilage · Strengthen bones · Regain your freedom"
      />

      {/* The Hidden Crisis */}
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
            <h2 className="text-4xl font-bold mb-4">The Silent Epidemic Affecting 200 Million Indians</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              1 in 3 Indians over 40 suffer from joint problems. 50% of women over 50 have osteoporosis. The shocking truth? Most bone loss and joint damage is completely preventable and even reversible with the right nutrition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What's Happening Inside Your Body */}
            <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">Silent Damage Happening Daily</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Cartilage wearing away between joints",
                    "Bone density declining 1% yearly after 30",
                    "Chronic inflammation destroying tissues",
                    "Synovial fluid drying up (joint lubrication)",
                    "Muscle mass decreasing = less joint support",
                    "Morning stiffness getting worse",
                    "Simple tasks becoming painful",
                    "Fear of fractures limiting your life",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                      <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits of Strong Bones & Joints */}
            <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Life with Healthy Bones & Joints</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Wake up without stiffness or pain",
                    "Play with grandchildren on the floor",
                    "Walk, climb stairs, exercise freely",
                    "Sleep peacefully without joint aches",
                    "Travel without mobility worries",
                    "Stay independent as you age",
                    "Confidence in your body's strength",
                    "Active lifestyle well into 80s-90s",
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
            <h3 className="text-3xl font-bold mb-8 text-center">Critical Bone & Joint Mistakes to Avoid</h3>
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
            <h2 className="text-4xl font-bold mb-4">Warning Signs Your Bones & Joints Need Help</h2>
            <p className="text-xl text-muted-foreground">If you have even ONE of these — act now before permanent damage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Morning stiffness lasting > 30 minutes",
              "Joint pain (knees, hips, shoulders, fingers)",
              "Clicking, popping, or grinding sounds",
              "Back pain or poor posture",
              "Family history of arthritis/osteoporosis",
              "You're a woman over 40",
              "Previous fractures from minor falls",
              "Height loss or stooped posture",
              "Difficulty climbing stairs",
              "Swelling or warmth in joints",
              "Reduced grip strength",
              "Taking steroids or certain medications",
              "Sedentary lifestyle or overweight",
              "Low sun exposure (Vitamin D deficiency)",
              "You avoid dairy or have lactose intolerance",
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

      {/* The 5 Pillars of Bone & Joint Health */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The 5 Pillars of Strong Bones & Flexible Joints</h2>
            <p className="text-xl text-muted-foreground">Science-backed approach that actually works</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Bone Nutrition",
                icon: <Bone className="w-8 h-8" />,
                benefits: [
                  "Calcium citrate (best absorption)",
                  "Vitamin D3 (2000 IU daily)",
                  "Vitamin K2 (directs calcium to bones)",
                  "Magnesium (calcium's partner)",
                  "Phosphorus & trace minerals",
                ],
              },
              {
                title: "Joint Repair Nutrients",
                icon: <Shield className="w-8 h-8" />,
                benefits: [
                  "Glucosamine (rebuilds cartilage)",
                  "Chondroitin (cushions joints)",
                  "MSM (reduces inflammation)",
                  "Collagen (joint structure)",
                  "Omega-3 (natural anti-inflammatory)",
                ],
              },
              {
                title: "Anti-Inflammatory Diet",
                icon: <Target className="w-8 h-8" />,
                benefits: [
                  "Reduce sugar & processed foods",
                  "Increase antioxidant-rich foods",
                  "Alkaline diet principles",
                  "Proper hydration for synovial fluid",
                  "Strategic supplementation",
                ],
              },
              {
                title: "Smart Weight Management",
                icon: <Zap className="w-8 h-8" />,
                benefits: [
                  "Every kg lost = 4kg less knee pressure",
                  "Reduces inflammatory markers",
                  "Improves mobility & flexibility",
                  "Formula 1 + Protein for easy weight loss",
                ],
              },
              {
                title: "Targeted Exercise",
                icon: <Activity className="w-8 h-8" />,
                benefits: [
                  "Weight-bearing for bone density",
                  "Range-of-motion for flexibility",
                  "Strengthening to protect joints",
                  "Balance training to prevent falls",
                  "Start gentle, progress safely",
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

      {/* Our 6-Step System */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Proven 6-Step Joint Recovery System</h2>
            <p className="text-xl text-muted-foreground">From pain to performance in 90 days</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Complete Assessment",
                icon: <Target className="w-8 h-8" />,
                items: ["Pain & mobility evaluation", "X-ray/scan review if available", "Lifestyle & diet analysis", "Risk factor identification"],
              },
              {
                title: "2. Personalized Nutrition",
                icon: <Coffee className="w-8 h-8" />,
                items: ["Anti-inflammatory meal plans", "Bone-building recipes", "Alkaline diet guidance", "Portion control for weight"],
              },
              {
                title: "3. Targeted Supplementation",
                icon: <Shield className="w-8 h-8" />,
                items: ["Joint Support Advanced", "Cal", "Omega-3 Herbalifeline", "Formula 1 + Protein"],
              },
              {
                title: "4. Movement Medicine",
                icon: <Activity className="w-8 h-8" />,
                items: ["Joint-friendly exercises", "Flexibility routines", "Strength training", "Posture correction"],
              },
              {
                title: "5. Pain Management",
                icon: <Brain className="w-8 h-8" />,
                items: ["Natural pain relief techniques", "Hot/cold therapy guidance", "Sleep position advice", "Stress reduction"],
              },
              {
                title: "6. Progress Tracking",
                icon: <TrendingUp className="w-8 h-8" />,
                items: ["Weekly pain scores", "Mobility measurements", "Photo documentation", "Doctor report reviews"],
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

      {/* Why Herbalife for Bones & Joints */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Herbalife is the Gold Standard for Bone & Joint Health</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Joint Support Advanced</h3>
                <p className="text-muted-foreground mb-4">
                  The most comprehensive joint formula with glucosamine, chondroitin, MSM, and anti-inflammatory herbs. Clinically proven to reduce pain and rebuild cartilage.
                </p>
                <ul className="space-y-2">
                  {[
                    "1500mg Glucosamine (optimal dose)",
                    "1200mg Chondroitin Sulfate",
                    "300mg MSM for inflammation",
                    "Scutellaria (natural COX-2 inhibitor)",
                    "Results in 30-60 days",
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
                  <Bone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Calcium</h3>
                <p className="text-muted-foreground mb-4">
                  Superior bone nutrition with highly absorbable calcium citrate plus everything needed for strong bones.
                </p>
                <ul className="space-y-2">
                  {[
                    "Calcium citrate (3x better absorption)",
                    "Vitamin D3 (optimal 400 IU)",
                    "Magnesium for calcium utilization",
                    "Vitamin K2 to direct calcium to bones",
                    "Prevents osteoporosis effectively",
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
                <h3 className="text-2xl font-bold mb-4">Complete System Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Not just supplements — a complete bone & joint transformation system.
                </p>
                <ul className="space-y-2">
                  {[
                    "Formula 1 for alkaline nutrition",
                    "Protein powder for muscle support",
                    "Herbalifeline for inflammation",
                    "Personalized coaching included",
                    "Lifetime support community",
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
                <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
                <p className="text-muted-foreground mb-4">
                  400+ clients with arthritis, osteoporosis, and joint problems have found relief.
                </p>
                <ul className="space-y-2">
                  {[
                    "85% report pain reduction in 60 days",
                    "70% reduce pain medication",
                    "90% improve mobility scores",
                    "Improved DEXA scans in 6-12 months",
                    "Doctor-verified improvements",
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

      {/* What's Included */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">What's Included in Your Program</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Bone & Joint Assessment", description: "Complete evaluation + report analysis", icon: <Target className="w-6 h-6" /> },
              { title: "Personalized Nutrition Plan", description: "Anti-inflammatory diet customized for you", icon: <Calendar className="w-6 h-6" /> },
              { title: "50+ Joint-Friendly Recipes", description: "Delicious meals that heal", icon: <Coffee className="w-6 h-6" /> },
              { title: "Premium Product Bundle", description: "Joint Support + Cal + Omega-3 + Formula 1", icon: <Shield className="w-6 h-6" /> },
              { title: "Exercise Video Library", description: "Safe movements for every fitness level", icon: <Activity className="w-6 h-6" /> },
              { title: "Pain Relief Toolkit", description: "Natural techniques that work", icon: <Brain className="w-6 h-6" /> },
              { title: "Progress Tracking App", description: "Monitor pain, mobility, strength", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "Doctor Coordination", description: "Work with your healthcare team", icon: <Users className="w-6 h-6" /> },
              { title: "Shopping Guides", description: "Joint-friendly grocery lists", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "24×7 WhatsApp Support", description: "Questions answered instantly", icon: <Users className="w-6 h-6" /> },
              { title: "Weekly Video Calls", description: "Personal coaching sessions", icon: <Calendar className="w-6 h-6" /> },
              { title: "Lifetime Access", description: "Updates, new research, community", icon: <Trophy className="w-6 h-6" /> },
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

      {/* Solutions for Different Conditions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Specialized Solutions for Every Condition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "For Arthritis (Osteo/Rheumatoid)", icon: "🦴", solutions: ["Reduce inflammation naturally", "Rebuild damaged cartilage", "Improve joint flexibility", "Manage flare-ups effectively"] },
              { title: "For Osteoporosis/Osteopenia", icon: "💪", solutions: ["Increase bone density", "Prevent fractures", "Improve posture & height", "Strengthen supporting muscles"] },
              { title: "For Knee & Hip Problems", icon: "🦵", solutions: ["Reduce grinding & clicking", "Improve range of motion", "Delay/avoid surgery", "Return to normal activities"] },
              { title: "For Back & Neck Pain", icon: "🧘", solutions: ["Strengthen core muscles", "Improve disc health", "Correct posture issues", "Reduce nerve compression"] },
              { title: "For Sports Injuries", icon: "🏃", solutions: ["Faster recovery time", "Prevent re-injury", "Enhance performance", "Build stronger joints"] },
              { title: "For Age-Related Decline", icon: "👴", solutions: ["Maintain independence", "Prevent falls & fractures", "Stay active longer", "Enjoy retirement fully"] },
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

      {/* Expected Results Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Joint Recovery Timeline</h2>
            <p className="text-xl text-muted-foreground">What to expect and when</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 1–2",
                color: "bg-blue-500",
                benefits: [
                  "Reduced morning stiffness",
                  "Better sleep (less pain at night)",
                  "Increased energy from nutrition",
                  "Hope and motivation building",
                  "Initial inflammation reduction",
                ],
              },
              {
                timeline: "Week 3–8",
                color: "bg-green-500",
                benefits: [
                  "Noticeable pain reduction (30-50%)",
                  "Improved flexibility & range of motion",
                  "Easier to climb stairs",
                  "Less dependency on pain medication",
                  "Friends notice you moving better",
                ],
              },
              {
                timeline: "Month 3–6",
                color: "bg-purple-500",
                benefits: [
                  "60-80% pain reduction common",
                  "Cartilage rebuilding (verified by scans)",
                  "Return to activities you gave up",
                  "Stronger bones (DEXA improvement)",
                  "Feel 10 years younger",
                ],
              },
              {
                timeline: "6–12 Months",
                color: "bg-orange-500",
                benefits: [
                  "Sustained pain-free living",
                  "Significant bone density increase",
                  "Doctor amazed at improvement",
                  "Inspire others with your transformation",
                  "Lifetime habits established",
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
                            <Bone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-4xl font-bold mb-4">Join 400+ People Living Pain-Free</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "400+", label: "Joints Healed", description: "Happy clients moving freely" },
              { stat: "85%", label: "Pain Reduction", description: "Average in 60 days" },
              { stat: "70%", label: "Medicine Reduced", description: "Under doctor supervision" },
              { stat: "93%", label: "Would Recommend", description: "To friends & family" },
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
            <h2 className="text-4xl font-bold mb-4">Choose Your Joint Freedom Package</h2>
            <p className="text-xl text-muted-foreground">Investment in pain-free living</p>
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
          <h2 className="text-4xl font-bold mb-6">Stop Living in Pain – Start Living Your Life</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your FREE Bone & Joint Assessment today and discover how to move freely again
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
            🦴 Limited slots | 💯 Zero commitment | 📋 Includes X-ray/report review worth ₹2000
          </p>
        </div>
      </section>
    </>
  );
};

export default BoneJointHealth;
