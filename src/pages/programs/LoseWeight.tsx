import { Link } from "react-router-dom";
import SEO from "@/components/SEOHelmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, TrendingDown, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";
import aboutHero from "@/assets/about-hero.jpg";
import { generateProgramProductSchema } from "@/lib/structuredData";

const LoseWeight = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "Afresh",
      products: ["Herbalife Tea Concentrate", "Total Control"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Balanced meal with lean protein and vegetables",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "Formula 1 Shake or Healthy Snack",
      products: ["Formula 1 Shake Mix"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Light, balanced meal",
      products: []
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Initial wellness evaluation",
        "Personalized meal plan",
        "21-day product bundle",
        "Email support"
      ]
    },
    {
      name: "Standard",
      duration: "1 month",
      price: "Contact for price",
      features: [
        "Comprehensive wellness evaluation",
        "Personalized meal plan",
        "1-month product pack",
        "2 weekly check-ins",
        "WhatsApp support",
        "Progress tracking"
      ],
      popular: true
    },
    {
      name: "Premium",
      duration: "3 months",
      price: "Contact for price",
      features: [
        "Comprehensive wellness evaluation",
        "Personalized meal plan",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Access to challenges"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients notice increased energy within the first week. Visible weight loss typically becomes noticeable after 2-4 weeks of consistent use combined with coaching and lifestyle changes. Results vary based on individual factors like starting weight, metabolism, and commitment to the program."
    },
    {
      question: "Is this program safe?",
      answer: "Yes, our weight loss program uses science-backed Herbalife products that are manufactured following strict quality control standards. However, we always recommend consulting with your healthcare provider before starting any new nutrition program, especially if you have existing health conditions or are taking medications."
    },
    {
      question: "Do I need to exercise?",
      answer: "While exercise is not mandatory, it significantly enhances results and supports overall health. Our coaches can help you create a simple, sustainable exercise routine that fits your lifestyle and fitness level."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Our coaches work with you to accommodate dietary restrictions, allergies, and preferences. Herbalife offers various product options, and we can customize your meal plan to meet your specific needs."
    },
    {
      question: "Can I continue after the program ends?",
      answer: "Absolutely! Many clients continue with maintenance plans or transition to other wellness programs. Our goal is to help you build sustainable habits for long-term health."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes Formula 1 Shake Mix, Personalized Protein Powder, Herbal Tea Concentrate. Your coach will customize the product selection based on your specific needs and goals."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a satisfaction guarantee. If you're not satisfied with your program, please contact us within the first week to discuss options. Product returns are subject to our return policy."
    },
    {
      question: "How do I track my progress?",
      answer: "Your coach will help you track progress through regular check-ins, measurements, and weight tracking. You'll receive a progress tracking sheet and can communicate with your coach via WhatsApp or scheduled calls."
    }
  ];

  const productSchema = generateProgramProductSchema({
    name: "Lose Weight Program - Personalized Nutrition Plan",
    description: "Comprehensive weight loss program with personalized nutrition plans, Herbalife products, and expert coaching",
    image: "https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Lose Weight Program Process",
    "description": "Step-by-step process for the personalized weight loss program",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Assessment",
        "text": "Comprehensive health and lifestyle evaluation"
      },
      {
        "@type": "HowToStep",
        "name": "Personalized Plan",
        "text": "Receive a customized nutrition and wellness strategy"
      },
      {
        "@type": "HowToStep",
        "name": "Product Selection",
        "text": "Get recommended Herbalife products for your goals"
      },
      {
        "@type": "HowToStep",
        "name": "Weekly Check-ins",
        "text": "Regular progress tracking and plan adjustments"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Weight Loss Program - Lose Weight | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Transform your body with our personalized weight loss program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and sustainable results. Best weight loss program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/lose-weight"
        keywords="Weight Loss Program Kolathur, Lose Weight Chennai, Weight Loss Coaching Villivakkam, Personalized Weight Loss Plan Kolathur, Herbalife Weight Loss Chennai, Best Weight Loss Program Villivakkam, Weight Loss Centre Kolathur, Nutrition Weight Loss Chennai"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Lose Weight – Personalized Program"
        tagline="Transform your body with science-backed nutrition and expert coaching"
      />

      {/* Who is this for? */}
      <section className="py-16 bg-white relative">
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
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Perfect For</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Who is this for?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              This program is perfect for individuals who want to lose weight safely and sustainably
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Busy professionals seeking convenient nutrition solutions",
              "Postpartum mothers looking to regain their pre-pregnancy body",
              "Individuals with 5–20 kg to lose",
              "People who have tried multiple diets without success",
              "Those seeking a sustainable, long-term approach to weight management",
              "Anyone wanting to improve their energy levels and overall health"
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-6 flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">The Challenge</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Weight Loss Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Losing weight can feel overwhelming. You've tried countless diets, spent hours researching, and maybe even lost weight only to gain it back. The cycle of restriction, deprivation, and temporary results leaves you frustrated and discouraged.
            </p>
            <p>
              You're not alone. Many people struggle with weight loss because they lack the right combination of nutrition, support, and sustainable strategies. Quick fixes don't work long-term, and generic plans don't account for your unique body, lifestyle, and goals.
            </p>
            <p>
              The truth is, sustainable weight loss requires a personalized approach that addresses not just what you eat, but how you eat, when you eat, and the support system that keeps you motivated. That's where our program makes the difference.
            </p>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">How We Help</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A structured approach to sustainable weight loss</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of your health, lifestyle, and goals",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Personalized Plan",
                description: "Custom nutrition strategy and product recommendations",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Coaching",
                description: "Start your program with ongoing support and guidance",
                icon: <Users className="w-8 h-8" />
              },
              {
                week: "Ongoing",
                title: "Weekly Check-ins",
                description: "Regular progress tracking and plan adjustments",
                icon: <Clock className="w-8 h-8" />
              },
              {
                week: "Week 4/12",
                title: "Review & Adjust",
                description: "Comprehensive review and optimization of your plan",
                icon: <TrendingDown className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-primary mb-2">{step.week}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <Card className="mt-12 border-none shadow-wellness">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Expected Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Steady, sustainable weight loss (0.5-1 kg per week)",
                  "Increased energy levels",
                  "Improved metabolism",
                  "Better sleep quality",
                  "Enhanced mood and confidence",
                  "Sustainable lifestyle habits"
                ].map((outcome, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Science & Product Role */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Science-Backed</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Science & Product Role</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              How Herbalife products support your weight loss journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients in a convenient meal replacement format. With balanced macronutrients (protein, carbs, healthy fats), it helps you maintain proper nutrition while creating a calorie deficit for weight loss.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete meal replacement with controlled calories",
                    "High-quality protein to preserve muscle mass",
                    "Essential vitamins and minerals",
                    "Convenient and delicious"
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
                <h3 className="text-2xl font-bold mb-4">Personalized Protein</h3>
                <p className="text-muted-foreground mb-4">
                  High-quality protein supplement that helps preserve lean muscle mass during weight loss. This is crucial because maintaining muscle helps keep your metabolism active and prevents the "skinny fat" look.
                </p>
                <ul className="space-y-2">
                  {[
                    "Preserves muscle during calorie deficit",
                    "Supports metabolism",
                    "Helps with satiety and hunger control",
                    "Customizable to your needs"
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
                <h3 className="text-2xl font-bold mb-4"></h3>
                <p className="text-muted-foreground mb-4">
                  Supports healthy metabolism and energy levels. Contains natural ingredients like green tea extract and caffeine to help boost your metabolism and provide sustained energy throughout the day.
                </p>
                <ul className="space-y-2">
                  {[
                    "Metabolism support",
                    "Natural energy boost",
                    "Helps reduce cravings",
                    "Supports focus and mental clarity"
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
                <h3 className="text-2xl font-bold mb-4">Herbal Tea Concentrate</h3>
                <p className="text-muted-foreground mb-4">
                  A refreshing beverage that supports hydration and provides a gentle energy boost. It's a great alternative to sugary drinks and helps maintain your metabolism throughout the day.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports hydration",
                    "Gentle energy boost",
                    "Low-calorie beverage option",
                    "Antioxidant support"
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

     
      

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our weight loss program
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-4">
            🎯 Limited Spots Available
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Start Your Weight Loss Journey?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free wellness evaluation and get a personalized plan designed just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/products">
                View Recommended Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoseWeight;

