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
} from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PricingTable from "@/components/PricingTable";
import kidsHero from "@/assets/products-hero.jpg"; // change to your image

const KidsNutrition = () => {
  const pricingTiers = [
    {
      name: "Healthy Start",
      duration: "30 days",
      price: "Contact for price",
      features: [
        "Child nutrition & eating habits assessment",
        "Personalized meal plan for 1 child",
        "30-day Herbalife Kids Pack",
        "Parent coaching sessions",
        "Healthy snack guide",
      ],
    },
    {
      name: "Family Nutrition Mastery",
      duration: "90 days",
      price: "Contact for price",
      popular: true,
      features: [
        "Comprehensive family nutrition audit",
        "Custom meal plans for 2–3 children",
        "90-day premium pack (Formula 1, Kids Chewables, Herbalifeline Jr)",
        "Weekly parent coaching calls",
        "School lunchbox & party solutions",
        "Unlimited WhatsApp support",
        "Picky eater breakthrough guide",
        "Homework energy & focus plan",
      ],
    },
    {
      name: "Lifetime Healthy Family",
      duration: "6–12 months",
      price: "Contact for price",
      features: [
        "Full family lifestyle transformation",
        "Ongoing supply of core products",
        "Bi-weekly strategy calls",
        "Private family wellness group",
        "Grandparents included",
        "Annual health & growth review",
        "Access to kids' cooking workshops",
        "Lifelong nutrition guidance",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Is Herbalife safe for children?",
      answer: "Yes! Herbalife has a dedicated line for children aged 4+ that's scientifically formulated to be safe and effective. Kids Chewables provide essential vitamins and minerals without excess sugar or artificial ingredients. Formula 1 shakes are safe for children 4+ when portion-controlled and used as part of a balanced diet. We always tailor dosages to age and weight.",
    },
    {
      question: "My child is a picky eater. Will this help?",
      answer: "Absolutely. This is one of our most requested programs. We teach parents how to make nutritious food irresistible using flavor combinations, textures, and fun presentation. Herbalife shakes can be customized into delicious treats like chocolate banana, cookies & cream, or strawberry cream that kids love — while getting 114 essential nutrients in one glass.",
    },
    {
      question: "Can Herbalife help with my child's focus and energy at school?",
      answer: "Yes. Proper nutrition is directly linked to cognitive function. Our program ensures consistent blood sugar levels, provides key brain nutrients (Omega-3s from Herbalifeline Jr, B-vitamins, iron), and eliminates energy crashes from sugary breakfasts. Most parents report improved concentration, better grades, and fewer afternoon meltdowns within 2–3 weeks.",
    },
    {
      question: "My child is overweight. Is this suitable?",
      answer: "Yes. We focus on balanced nutrition, not calorie restriction. Formula 1 shakes provide complete nutrition in a controlled portion, helping regulate appetite and reduce cravings for junk food. Combined with education for the whole family, this creates sustainable weight management without deprivation or stigma.",
    },
    {
      question: "What if my child is underweight or not growing properly?",
      answer: "We help underweight children gain healthy weight through nutrient-dense shakes and meals. Formula 1 + Protein + healthy fats ensure they get enough calories with complete nutrition. We also address underlying issues like poor appetite or digestive problems.",
    },
    {
      question: "Can I use this for twins or multiple children?",
      answer: "Yes! Our Family Nutrition Mastery and Lifetime Healthy Family plans are designed for multiple children. We create customized plans for each child based on age, growth stage, and dietary needs, while simplifying meal prep for parents.",
    },
    {
      question: "How do I get my child to drink the shake?",
      answer: "Make it fun! Let your child help make it, choose the flavor, pick the fruit, and add healthy toppings like berries, granola, or chia seeds. Use colorful straws and fun glasses. Start with sweeter flavors like chocolate or vanilla, then gradually introduce others. 95% of children love their Herbalife shake once they try it.",
    },
  ];

  const mistakesData = [
    { mistake: "Skipping breakfast", consequence: "Poor focus, low energy, overeating later", icon: <AlertCircle className="w-5 h-5" /> },
    { mistake: "High-sugar breakfasts", consequence: "Energy crash by 10 AM, poor concentration", icon: <TrendingUp className="w-5 h-5" /> },
    { mistake: "Processed lunchbox items", consequence: "Low nutrition, high preservatives", icon: <Coffee className="w-5 h-5" /> },
    { mistake: "Only eating 'safe' foods", consequence: "Nutrient deficiencies from limited diet", icon: <Target className="w-5 h-5" /> },
    { mistake: "Using food as reward/punishment", consequence: "Creates unhealthy emotional relationship", icon: <Brain className="w-5 h-5" /> },
    { mistake: "Forcing or pressuring", consequence: "Creates food battles and resentment", icon: <Users className="w-5 h-5" /> },
    { mistake: "Inconsistent routines", consequence: "Confuses appetite regulation", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <>
      <SEO
        title="Kids Nutrition Program - Healthy, Happy, Focused Children | New Life Wellness Centre Kolathur, Chennai"
        description="Solve picky eating, boost focus, and build lifelong healthy habits for your children with Herbalife's science-backed nutrition at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Trusted by 300+ families. Best kids nutrition program in Kolathur, Chennai."
        canonical="/programs/kids-nutrition"
        keywords="Kids Nutrition Program Kolathur, Herbalife for Children Chennai, Picky Eater Solutions Villivakkam, Healthy Lunchbox Ideas Kolathur, Children's Vitamins Chennai, Best Kids Nutrition Program Villivakkam, Kids Health Kolathur, Children's Nutrition Chennai"
      />

      <ProgramHero
        image={kidsHero}
        title="Raise Healthy, Happy, Focused Kids"
        tagline="End picky eating, boost school performance, and build lifelong healthy habits — naturally"
      />

      {/* Why Kids Nutrition is Critical */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Foundation for a Lifetime of Health Starts Now</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The first 8 years are crucial for brain development, immune strength, and establishing lifelong eating habits. What your child eats today shapes their health, learning, and happiness for decades.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* The Hidden Risks */}
            <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">What Poor Nutrition Does to Children</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Poor concentration and learning difficulties",
                    "Frequent colds and weak immunity",
                    "Energy crashes and afternoon meltdowns",
                    "Increased risk of childhood obesity",
                    "Deficiencies in iron, vitamin D, Omega-3",
                    "Picky eating becoming a permanent habit",
                    "Low self-esteem from weight or health issues",
                    "Setting the stage for adult diseases",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                      <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* The Benefits of Good Nutrition */}
            <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Life with Optimal Child Nutrition</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Steady energy and focus throughout the school day",
                    "Strong immune system — fewer sick days",
                    "Healthy weight and strong bones",
                    "Joyful relationship with food",
                    "Improved mood and reduced tantrums",
                    "Academic performance improvement",
                    "Lifelong healthy eating habits",
                    "Confident, vibrant, happy children",
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
            <h3 className="text-3xl font-bold mb-8 text-center">7 Common Mistakes Parents Make with Kids' Nutrition</h3>
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
            <h2 className="text-4xl font-bold mb-4">Signs Your Child Needs Better Nutrition</h2>
            <p className="text-xl text-muted-foreground">If you see any of these, it's time for a change:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Child is a picky eater (eats < 5 foods)",
              "Struggles to focus at school",
              "Gets sick frequently",
              "Has afternoon energy crashes or tantrums",
              "Relies on processed/junk food",
              "Avoids vegetables and fruits",
              "Is overweight or underweight",
              "You worry about their growth",
              "They skip breakfast regularly",
              "You feel guilty about their diet",
              "School reports mention low concentration",
              "They crave sugar constantly",
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

      {/* The 5 Pillars of Kids Nutrition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The 5 Pillars of Optimal Kids Nutrition</h2>
            <p className="text-xl text-muted-foreground">Science-backed approach for thriving children</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Daily Nutrition",
                icon: <Target className="w-8 h-8" />,
                benefits: [
                  "114 essential nutrients in one shake",
                  "Vitamins A, C, D, E, B-complex",
                  "Calcium & iron for growth",
                  "Balanced protein, carbs, healthy fats",
                ],
              },
              {
                title: "Brain-Boosting Focus",
                icon: <Brain className="w-8 h-8" />,
                benefits: [
                  "Omega-3 DHA for brain development",
                  "B-vitamins for energy metabolism",
                  "Iron to prevent anemia & fatigue",
                  "Stable blood sugar = better concentration",
                ],
              },
              {
                title: "Immune Strength",
                icon: <Shield className="w-8 h-8" />,
                benefits: [
                  "Vitamin C & E for antioxidant defense",
                  "Zinc for immune cell function",
                  "Gut health support (fiber, probiotics)",
                  "Reduced inflammation",
                ],
              },
              {
                title: "Healthy Weight Management",
                icon: <Zap className="w-8 h-8" />,
                benefits: [
                  "Portion-controlled complete meals",
                  "Reduces junk food cravings",
                  "Supports healthy growth patterns",
                  "Builds metabolism-supporting muscle",
                ],
              },
              {
                title: "Joyful Eating Habits",
                icon: <Heart className="w-8 h-8" />,
                benefits: [
                  "Making healthy food delicious",
                  "No forcing or pressure",
                  "Fun food experiences",
                  "Lifelong positive relationship",
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

      {/* Why Herbalife for Kids */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Herbalife is the Smart Choice for Kids</h2>
            <p className="text-xl text-muted-foreground">Safe, effective, and loved by children</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Formula 1 For Kids</h3>
                <p className="text-muted-foreground mb-4">
                  Complete meal nutrition in a delicious shake. 114 essential nutrients, perfect for breakfast or after-school fuel.
                </p>
                <ul className="space-y-2">
                  {[
                    "Safe for children 4+",
                    "No artificial colors or sweeteners",
                    "15–20g high-quality protein",
                    "Fortified with brain & immune nutrients",
                    "Tastes like a treat, not medicine",
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
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Kids Chewable Vitamins</h3>
                <p className="text-muted-foreground mb-4">
                  Delicious, fun-to-take multivitamins that ensure no gaps in nutrition.
                </p>
                <ul className="space-y-2">
                  {[
                    "25 essential nutrients",
                    "Great-tasting chewable tablets",
                    "No added sugar",
                    "Supports immunity & growth",
                    "Perfect for picky eaters",
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
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Herbalifeline Jr (Omega-3)</h3>
                <p className="text-muted-foreground mb-4">
                  Essential for brain development, focus, and healthy growth.
                </p>
                <ul className="space-y-2">
                  {[
                    "DHA & EPA for brain health",
                    "Supports cognitive development",
                    "Liquid form with berry flavor",
                    "No fishy aftertaste",
                    "Crucial for school performance",
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
                <h3 className="text-2xl font-bold mb-4">Complete System Approach</h3>
                <p className="text-muted-foreground mb-4">
                  Not just products — a complete nutrition transformation for your family.
                </p>
                <ul className="space-y-2">
                  {[
                    "Parent coaching included",
                    "Fun recipes kids love",
                    "School lunchbox solutions",
                    "Party & birthday guidance",
                    "Lifelong healthy habits",
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
            <h2 className="text-4xl font-bold mb-4">Our 6-Step Kids Nutrition System</h2>
            <p className="text-xl text-muted-foreground">From picky eater to healthy, happy child</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "1. Child Nutrition Assessment", icon: <Target className="w-8 h-8" />, items: ["Current eating habits", "Growth & development check", "School performance", "Identify nutrient gaps"] },
              { title: "2. Personalized Meal Plans", icon: <Calendar className="w-8 h-8" />, items: ["Age-appropriate portions", "Flavor preferences", "Allergy-safe options", "Family-friendly meals"] },
              { title: "3. Shake & Snack Solutions", icon: <Coffee className="w-8 h-8" />, items: ["Delicious shake recipes", "Healthy lunchbox ideas", "After-school snacks", "Party food alternatives"] },
              { title: "4. Picky Eater Breakthrough", icon: <Brain className="w-8 h-8" />, items: ["No pressure techniques", "Food exposure strategies", "Fun food experiences", "Gradual expansion"] },
              { title: "5. Focus & Immunity Boost", icon: <Shield className="w-8 h-8" />, items: ["Brain-boosting nutrition", "Immune-supporting foods", "Reducing sugar crashes", "Stable energy all day"] },
              { title: "6. Family Support & Tracking", icon: <Users className="w-8 h-8" />, items: ["Parent coaching", "Progress tracking", "WhatsApp guidance", "Celebrating wins together"] }
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
              { title: "Child Nutrition Assessment", description: "Complete eating habits analysis", icon: <Target className="w-6 h-6" /> },
              { title: "Personalized Meal Plan", description: "Customized for age, taste, and needs", icon: <Calendar className="w-6 h-6" /> },
              { title: "30+ Kid-Friendly Recipes", description: "Shakes, snacks, lunches, desserts", icon: <Coffee className="w-6 h-6" /> },
              { title: "Herbalife Kids Product Pack", description: "Formula 1, Chewables, Herbalifeline Jr", icon: <Trophy className="w-6 h-6" /> },
              { title: "Picky Eater Breakthrough Guide", description: "Proven techniques to expand diet", icon: <Brain className="w-6 h-6" /> },
              { title: "School Lunchbox Solutions", description: "Healthy, non-boring lunch ideas", icon: <Shield className="w-6 h-6" /> },
              { title: "Focus & Immunity Plan", description: "For better grades and fewer sick days", icon: <Zap className="w-6 h-6" /> },
              { title: "Family Nutrition Coaching", description: "Guidance for parents and siblings", icon: <Users className="w-6 h-6" /> },
              { title: "Shopping Lists", description: "Kid-approved healthy grocery lists", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Progress Tracking", description: "Growth, energy, focus, eating habits", icon: <TrendingUp className="w-6 h-6" /> },
              { title: "WhatsApp Support", description: "Quick answers to parenting questions", icon: <Users className="w-6 h-6" /> },
              { title: "Weekly Check-ins", description: "Personal coaching for parents", icon: <Calendar className="w-6 h-6" /> },
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

      {/* Expected Benefits Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Child's Transformation Timeline</h2>
            <p className="text-xl text-muted-foreground">Real results parents see</p>
          </div>

          <div className="space-y-8">
            {[
              {
                timeline: "Week 1–2",
                color: "bg-blue-500",
                benefits: [
                  "Morning shake becomes a favorite",
                  "Fewer afternoon meltdowns",
                  "Better focus at school",
                  "Parents feel more confident",
                ],
              },
              {
                timeline: "Week 3–8",
                color: "bg-green-500",
                benefits: [
                  "Trying 1–2 new healthy foods",
                  "Improved immunity (fewer colds)",
                  "Stable energy throughout the day",
                  "Healthier lunchbox eating",
                ],
              },
              {
                timeline: "Month 3+",
                color: "bg-purple-500",
                benefits: [
                  "Joyful relationship with food",
                  "Significant expansion of food variety",
                  "Report cards show improved focus",
                  "Healthy weight management",
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
                            <Heart className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-4xl font-bold mb-4">300+ Families Transformed</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "300+", label: "Happy Families", description: "Children thriving on nutrition" },
              { stat: "92%", label: "Love the Shake", description: "Children enjoy their Formula 1" },
              { stat: "70%", label: "Fewer Sick Days", description: "Stronger immunity in 3 months" },
              { stat: "85%", label: "Improved Focus", description: "Better school performance reported" },
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
            <h2 className="text-4xl font-bold mb-4">Choose Your Family's Nutrition Journey</h2>
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
          <h2 className="text-4xl font-bold mb-6">Give Your Child the Gift of Lifelong Health</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your FREE Kids Nutrition Assessment today and discover how easy healthy eating can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Kids Nutrition Assessment
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
            👨‍👩‍👧‍👦 Limited spots | 💯 Zero commitment | 🎁 Get free healthy lunchbox recipe guide
          </p>
        </div>
      </section>
    </>
  );
};

export default KidsNutrition;