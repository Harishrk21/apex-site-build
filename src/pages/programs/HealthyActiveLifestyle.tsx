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
  Bone,
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import healthyActiveHero from "@/assets/hero-banner.jpg"; // change to your image

const HealthyActiveLifestyle = () => {
  const pricingTiers = [
    {
      name: "Energy Kickstart",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Lifestyle & energy assessment",
        "Basic fueling plan (pre/post workout)",
        "21-day core product bundle (Formula 1, Tea, Aloe)",
        "Daily accountability check-ins",
        "Simple habit tracker",
      ],
    },
    {
      name: "Active Mastery",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Comprehensive fitness & nutrition assessment",
        "Custom Herbalife performance protocol (H24/Protein integration)",
        "90-day premium product pack",
        "Weekly 1:1 strategy calls",
        "Custom workout planning (home/gym)",
        "Unlimited WhatsApp support",
        "Injury prevention & recovery guide",
        "Mindset coaching for consistency",
      ],
    },
    {
      name: "Total Lifestyle Transformation",
      duration: "6 months",
      price: "Contact for price",
      features: [
        "Full metabolic and energy optimization",
        "Long-term maintenance supply guidance",
        "Bi-weekly personalized workout routines",
        "Private community access",
        "Family wellness plan included",
        "Advanced recovery techniques (sleep/stress)",
        "Annual performance review",
        "Goal setting for extreme results",
      ],
    },
  ];

  const faqItems = [
    {
      question: "I'm exhausted all the time. Will this program actually give me energy?",
      answer: "Absolutely. Chronic exhaustion is usually due to nutrient deficiency and poor blood sugar control. Our program focuses on balanced fueling (Formula 1) and natural energy support (Herbal Tea Concentrate, Liftoff) to provide sustained, crash-free energy, typically within the first week.",
    },
    {
      question: "I hate going to the gym. Do I have to become a bodybuilder?",
      answer: "No! We promote movement that fits your life. Whether it's 20 minutes of walking, yoga, dancing, or home exercises—consistency is key. We integrate activity seamlessly into your routine, not force you into a painful gym schedule.",
    },
    {
      question: "How does Herbalife support being active?",
      answer: "Herbalife provides the complete spectrum: Sustained energy before activity (Tea, Liftoff), optimal hydration during (CR7 Drive, Hydrate), and superior recovery after (Protein Drink Mix, H24 Rebuild Strength). This cycle maximizes performance and minimizes muscle soreness.",
    },
    {
      question: "I constantly hit plateaus. How do you help me break them?",
      answer: "Plateaus are usually solved by adjusting macro ratios, optimizing recovery, or changing the stimulus. We continuously monitor your results and adjust your protein intake, carb timing, and exercise intensity every 2-3 weeks to keep your body guessing and progressing.",
    },
    {
      question: "I travel a lot. Can I maintain the program on the road?",
      answer: "Yes, our system is travel-proof. Herbalife products are highly portable (shakes, bars, tablets). We provide hotel room workout guides and airport/restaurant nutrition hacks so you never lose momentum.",
    },
    {
      question: "How long until the results become permanent habits?",
      answer: "We focus on building one habit at a time, making the change sustainable. Most clients find the core routines (morning nutrition, hydration) feel natural and automatic within 60-90 days, leading to permanent lifestyle change.",
    },
  ];

  const mistakesData = [
    { mistake: "Skipping pre/post nutrition", consequence: "Leads to muscle loss and extreme fatigue", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "Poor hydration", consequence: "Decreases energy, causes muscle cramps and headaches", icon: <Coffee className="w-5 h-5" /> },
    { mistake: "Setting vague goals", consequence: "No clear path leads to rapid inconsistency", icon: <Target className="w-5 h-5" /> },
    { mistake: "Under-fueling (low calorie)", consequence: "Slows metabolism and leads to burnout", icon: <Zap className="w-5 h-5" /> },
    { mistake: "Poor sleep/recovery", consequence: "Body can't repair muscles or burn fat effectively", icon: <Clock className="w-5 h-5" /> },
    { mistake: "Over-relying on quick fixes", consequence: "Leads to yo-yo activity and motivation crashes", icon: <TrendingUp className="w-5 h-5" /> },
    { mistake: "Lack of accountability", consequence: "Easily falls off the wagon after 2 weeks", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Healthy Active Lifestyle Program - Energy, Fitness & Consistency | New Life Wellness Centre Kolathur, Chennai"
        description="Transform your energy levels, achieve fitness goals, and build sustainable healthy habits with personalized Herbalife nutrition and coaching at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Best active lifestyle program in Kolathur, Chennai."
        canonical="/programs/healthy-active-lifestyle"
        keywords="Healthy Active Lifestyle Program Kolathur, Sustained Energy Solutions Chennai, Fitness Coaching Villivakkam, Herbalife Active Kolathur, H24 Performance Chennai, Best Active Lifestyle Program Villivakkam, Energy & Fitness Kolathur, Active Lifestyle Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Ignite Your Potential: Healthy, Active Lifestyle"
        tagline="Fuel sustained energy, achieve fitness goals, and build lifelong habits that keep you thriving"
      />

      {/* Why HAL is Critical */}
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
            <h2 className="text-4xl font-bold mb-4">The Secret to Sustained Energy and Vitality</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              An Active Lifestyle isn't just about gym hours; it's about having the energy to live your best life every day. We close the gap between wanting to be active and actually thriving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* The Pain of Inactivity */}
            <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">The Fatigue Trap</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Constant need for caffeine to function",
                    "Mid-afternoon energy crashes",
                    "Lack of motivation for exercise",
                    "Poor recovery and constant muscle soreness",
                    "Weak immune system leading to frequent illness",
                    "Feeling overwhelmed and stressed easily",
                    "Weight plateau despite trying to exercise",
                    "Inconsistency—starting and stopping exercise constantly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                      <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* The Benefits of HAL */}
            <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Life with Unstoppable Energy</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Sustained, natural energy without crashes",
                    "Faster metabolism and easier weight control",
                    "Waking up refreshed and motivated",
                    "Rapid muscle recovery and less soreness",
                    "Stronger mental focus and clarity",
                    "Reduced stress and better emotional health",
                    "Increased strength and physical capability",
                    "Building consistent, effortless habits for life",
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
            <h3 className="text-3xl font-bold mb-8 text-center">7 Critical Mistakes Sabotaging Your Active Goals</h3>
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
            <h2 className="text-4xl font-bold mb-4">Signs You Are Not Living Your Healthiest Life</h2>
            <p className="text-xl text-muted-foreground">If you nod yes to any of these, this program is your solution:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "You hit the 3 PM slump hard every day",
              "You struggle to stay active 3 days a week",
              "You get sore easily after light exercise",
              "Your weight loss has plateaued despite exercising",
              "You feel sluggish and unmotivated to start your day",
              "You rely on sugary drinks or excess caffeine",
              "You want to build muscle but lack the proper fueling knowledge",
              "You feel overwhelmed by fitness influencers and complex diets",
              "You need accountability to stay consistent long-term",
              "You want energy to keep up with your kids/work/hobbies",
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

      {/* The 5 Pillars of HAL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The 5 Pillars of Healthy, Active Living</h2>
            <p className="text-xl text-muted-foreground">We optimize these fundamental areas for explosive results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Cellular Fueling",
                icon: <Zap className="w-8 h-8" />,
                benefits: [
                  "Balanced Macronutrient Intake",
                  "Micronutrient Density (Formula 1)",
                  "Optimal Fiber for Gut Health",
                  "Clean Energy Sources (Tea, Liftoff)",
                ],
              },
              {
                title: "Hydration & Performance",
                icon: <Activity className="w-8 h-8" />,
                benefits: [
                  "Electrolyte Balance (CR7, Hydrate)",
                  "Improved stamina during workouts",
                  "Reduced muscle cramps",
                  "Optimal water intake strategies",
                ],
              },
              {
                title: "Protein for Recovery",
                icon: <Shield className="w-8 h-8" />,
                benefits: [
                  "25-30g post-workout protein (H24)",
                  "Muscle repair and growth",
                  "Reduced soreness and fatigue",
                  "Metabolism maintenance",
                ],
              },
              {
                title: "Rest & Repair",
                icon: <Clock className="w-8 h-8" />,
                benefits: [
                  "Deep sleep optimization",
                  "Stress management techniques",
                  "Cortisol control through nutrition",
                  "Injury prevention",
                ],
              },
              {
                title: "Consistent Movement",
                icon: <Target className="w-8 h-8" />,
                benefits: [
                  "Finding enjoyable activities",
                  "Setting realistic weekly goals",
                  "Non-exercise activity thermogenesis (NEAT)",
                  "Building sustainable routine",
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
            <h2 className="text-4xl font-bold mb-4">Our 6-Step Healthy Active System</h2>
            <p className="text-xl text-muted-foreground">Turning intentions into effortless results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "1. Baseline Assessment", icon: <Target className="w-8 h-8" />, items: ["Energy level audit", "Current fitness analysis", "Goal setting (SMART goals)", "Identifying core barriers"] },
              { title: "2. Customized Fueling Protocol", icon: <Coffee className="w-8 h-8" />, items: ["Optimized macro timing", "Pre-workout energy plans", "Post-workout recovery shakes", "Daily calorie target calculation"] },
              { title: "3. Movement Integration", icon: <Activity className="w-8 h-8" />, items: ["Finding enjoyable activities", "Creating flexible schedules", "Tracking progress beyond weight", "Injury prevention guidance"] },
              { title: "4. Recovery & Sleep Deep Dive", icon: <Clock className="w-8 h-8" />, items: ["Nutrition for muscle repair", "Sleep hygiene habits", "Stress reduction techniques", "Herbalife rest support"] },
              { title: "5. Mindset & Consistency", icon: <Brain className="w-8 h-8" />, items: ["Overcoming motivation dips", "Building discipline", "Habit stacking strategies", "Visualization for success"] },
              { title: "6. Accountability & Evolution", icon: <Users className="w-8 h-8" />, items: ["Weekly check-in calls", "Data-driven adjustments", "Troubleshooting plateaus", "Long-term maintenance strategy"] }
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
          <h2 className="text-4xl font-bold mb-12 text-center">Your Active Lifestyle Success Toolkit</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Energy & Fitness Assessment", description: "Pinpointing bottlenecks in your routine", icon: <Target className="w-6 h-6" /> },
              { title: "Customized Fueling Guide", description: "What to eat before, during, and after activity", icon: <Zap className="w-6 h-6" /> },
              { title: "Herbalife Performance Protocol", description: "Integration of H24, Hydrate, and Core Nutrition", icon: <Trophy className="w-6 h-6" /> },
              { title: "Movement Strategy Plan", description: "Tailored activities for your current fitness level", icon: <Activity className="w-6 h-6" /> },
              { title: "Recovery & Sleep Schedule", description: "Optimizing repair to prevent burnout and soreness", icon: <Clock className="w-6 h-6" /> },
              { title: "30-Day Recipe E-Book", description: "High-protein, quick, healthy active meals", icon: <Coffee className="w-6 h-6" /> },
              { title: "Mindset & Habit Builder", description: "Strategies for breaking inconsistency and procrastination", icon: <Brain className="w-6 h-6" /> },
              { title: "Progress & Strength Tracking", description: "Measuring non-scale victories (strength, endurance, energy)", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "24×7 WhatsApp Support", description: "Immediate coaching and motivation when you need it most", icon: <Users className="w-6 h-6" /> },
              { title: "Weekly Strategy Calls", description: "Personalized accountability and adjustments", icon: <Calendar className="w-6 h-6" /> },
              { title: "Family Activity Ideas", description: "Solutions to get the whole family moving", icon: <Users className="w-6 h-6" /> },
              { title: "Travel & Road Warrior Guide", description: "How to stay on track while traveling or commuting", icon: <Shield className="w-6 h-6" /> },
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

      {/* Solutions for Lifestyles */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Active Solutions for Every Stage of Life</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "The Beginner/Sedentary Starter", icon: "🌱", solutions: ["Zero-pressure movement plans", "Energy optimization first", "Simple hydration routines", "21-day consistency challenge"] },
              { title: "The Busy Parent/Professional", icon: "💼", solutions: ["5-minute high-impact workouts", "Meal prep hacks for active families", "Stress-reducing afternoon rituals", "Maximizing NEAT (non-exercise activity)"] },
              { title: "The Weight Loss Plateau Breaker", icon: "🔥", solutions: ["Targeted fat-burning nutrition", "Strategic carb cycling", "Optimized post-workout protein for lean muscle", "Metabolic rate acceleration"] },
              { title: "The Athlete/Fitness Enthusiast", icon: "🏆", solutions: ["H24 performance nutrition protocols", "Advanced recovery strategies", "High-protein fueling for muscle synthesis", "Endurance and strength optimization"] },
              { title: "The Senior/Joint-Conscious", icon: "🧘‍♂️", solutions: ["Low-impact movement plans (swimming, yoga)", "Bone density support (Xtra-Cal)", "Joint protection through flexible routines", "Balance and stability exercises"] },
              { title: "The Student/Traveler", icon: "📚", solutions: ["Brain-boosting energy and focus", "Portable nutrition for hostels/dorms", "Study break movement hacks", "Budget-conscious fueling strategies"] },
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
            <h2 className="text-4xl font-bold mb-4">Your Active Transformation Timeline</h2>
            <p className="text-xl text-muted-foreground">Feel the difference almost immediately</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 1–2 (The Energy Boost)",
                color: "bg-green-500",
                benefits: [
                  "Elimination of the 3 PM crash",
                  "Waking up feeling lighter and more rested",
                  "Better focus and mental clarity",
                  "Hydration habits are established",
                ],
              },
              {
                timeline: "Week 3–8 (The Strength Phase)",
                color: "bg-blue-500",
                benefits: [
                  "Increased endurance and stamina in daily tasks",
                  "Muscle recovery speeds up significantly",
                  "Noticeable strength and tone improvements",
                  "Cravings for unhealthy snacks diminish",
                ],
              },
              {
                timeline: "Month 3+ (The Lifestyle Freedom)",
                color: "bg-purple-500",
                benefits: [
                  "Exercise becomes a pleasurable habit, not a chore",
                  "Sustained, effortless weight maintenance",
                  "Breaking through stubborn plateaus",
                  "Feeling confident, vibrant, and highly capable",
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
                            <Zap className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Achieving Active Results That Stick</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "95%", label: "Report Increased Energy", description: "Within the first 14 days" },
              { stat: "75%", label: "Maintain Consistency", description: "Beyond the initial 90 days" },
              { stat: "10x", label: "Better Recovery", description: "Reduced muscle soreness and fatigue" },
              { stat: "15%", label: "Average Fat Loss", description: "When combined with Formula 1 program" },
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
            <h2 className="text-4xl font-bold mb-4">Choose Your Healthy Active Journey</h2>
            <p className="text-xl text-muted-foreground">Find the level of support that fuels your biggest goals</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Experience True Energy?</h2>
          <p className="text-xl text-white/90 mb-8">
            Stop starting over and start moving forward. Book your free Consultation today!
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
            ⚡ Limited spots this month | 💯 Get your personalized fueling plan blueprint | Achieve lasting consistency
          </p>
        </div>
      </section>
    </>
  );
};

export default HealthyActiveLifestyle;