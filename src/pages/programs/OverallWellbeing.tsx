import { Link } from "react-router-dom";
import SEO from "@/components/SEOHelmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, Heart, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";

const OverallWellbeing = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "Herbal Aloe Concentrate",
      products: ["Herbal Aloe Concentrate"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Balanced meal with variety of nutrients",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "Herbal Tea or Healthy Snack",
      products: ["Herbal Tea Concentrate"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Healthy, balanced meal",
      products: []
    },
    {
      time: "Before Bed (9-10 PM)",
      meal: "Herbal Aloe Concentrate",
      products: ["Herbal Aloe Concentrate"]
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Initial wellness assessment",
        "Personalized wellbeing plan",
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
        "Personalized holistic health plan",
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
        "Personalized holistic health plan",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Lifestyle optimization guidance",
        "Long-term maintenance plan"
      ]
    }
  ];

  const faqItems = [
    {
      question: "What is overall wellbeing?",
      answer: "Overall wellbeing encompasses physical health, mental wellness, energy levels, sleep quality, stress management, and life satisfaction. Our program addresses all these aspects holistically to help you feel your best in every area of life."
    },
    {
      question: "How is this different from other programs?",
      answer: "This program takes a comprehensive, holistic approach rather than focusing on just one aspect like weight or fitness. We address nutrition, energy, sleep, stress, and overall vitality together, recognizing that all aspects of health are interconnected."
    },
    {
      question: "Do I need to have specific health goals?",
      answer: "Not necessarily! This program is perfect for anyone wanting to feel better overall, have more energy, improve their quality of life, or simply maintain good health. We'll help you identify areas for improvement and create a plan that addresses them."
    },
    {
      question: "How long until I feel better?",
      answer: "Many clients notice increased energy and improved mood within the first week. More significant improvements in overall wellbeing typically become noticeable after 3-4 weeks of consistent use combined with lifestyle changes."
    },
    {
      question: "What aspects of wellbeing does this cover?",
      answer: "Our program addresses nutrition, energy levels, sleep quality, stress management, digestive health, immune function, and overall vitality. We take a holistic approach to help you feel your best in all areas of life."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes Formula 1 Shake Mix, Personalized Protein Powder, Herbal Aloe Concentrate, Herbal Tea Concentrate, and targeted supplements based on your specific needs. Your coach will customize the selection."
    },
    {
      question: "Can this help with stress and energy?",
      answer: "Yes! Proper nutrition supports energy levels and stress management. Our program includes guidance on nutrition, sleep, and lifestyle habits that help manage stress and boost natural energy."
    },
    {
      question: "Is this suitable for all ages?",
      answer: "Yes, our overall wellbeing program can be customized for all ages and life stages. We adjust the plan based on your age, activity level, and specific health needs."
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Overall Wellbeing Program - Holistic Health Plan",
    "description": "Comprehensive overall wellbeing program with personalized nutrition plans, Herbalife products, and expert coaching for optimal health and vitality"
  };

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

  return (
    <>
      <SEO
        title="Overall Wellbeing Program - Holistic Health | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Transform your overall wellbeing with our holistic health program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and proven results. Best wellbeing program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/wellbeing"
        keywords="Wellbeing Program Kolathur, Overall Health Program Chennai, Holistic Wellness Villivakkam, Herbalife Wellbeing Kolathur, Best Wellbeing Program Chennai, Overall Health Centre Villivakkam, Wellbeing Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Overall Wellbeing – Holistic Health Program"
        tagline="Feel your best in every area of life with comprehensive wellness support"
      />

      {/* Who is this for? */}
      <section className="py-16 bg-white relative">
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

        <div className="absolute left-0 w-screen -translate-x-[calc((100vw-100%)/2)] bg-red-600 border-y-4 border-red-800 py-2 overflow-hidden z-20">
          <div className="scroll-track font-extrabold text-white text-base sm:text-lg tracking-wide drop-shadow-lg">
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
            ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp;
          </div>
        </div>

        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Perfect For</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Who is this for?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              This program is perfect for anyone wanting to improve their overall health and wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "People wanting to feel better overall",
              "Those seeking more energy and vitality",
              "Individuals wanting to improve quality of life",
              "People managing stress and fatigue",
              "Those wanting to maintain good health",
              "Anyone seeking a holistic approach to wellness"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Wellbeing Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Modern life can take a toll on your overall wellbeing. You might feel tired, stressed, run down, or just not like yourself. You know you should eat better, sleep more, and take care of yourself, but it feels overwhelming to address everything at once.
            </p>
            <p>
              Many people focus on just one aspect of health - like losing weight or exercising - but neglect other important areas like sleep, stress management, or nutrition. True wellbeing requires a holistic approach that addresses all aspects of your health together.
            </p>
            <p>
              Our overall wellbeing program takes a comprehensive approach, addressing nutrition, energy, sleep, stress, and vitality all together. We help you build sustainable habits that support your health in every area, so you can feel your best and live your best life.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A holistic approach to overall wellbeing</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of all aspects of your wellbeing",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Custom Plan",
                description: "Personalized holistic wellness strategy",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Coaching",
                description: "Start your program with products and comprehensive guidance",
                icon: <Heart className="w-8 h-8" />
              },
              {
                week: "Ongoing",
                title: "Weekly Check-ins",
                description: "Regular progress tracking across all areas",
                icon: <Clock className="w-8 h-8" />
              },
              {
                week: "Week 4/12",
                title: "Review & Adjust",
                description: "Comprehensive review and optimization",
                icon: <Heart className="w-8 h-8" />
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
                  "Increased energy and vitality",
                  "Improved mood and mental wellbeing",
                  "Better sleep quality",
                  "Enhanced stress management",
                  "Improved overall health",
                  "Greater life satisfaction"
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
              How Herbalife products support your overall wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients that support overall health. Ensures you're getting complete nutrition even on busy days, which is fundamental to feeling your best.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete nutrition in every serving",
                    "Supports overall health",
                    "Convenient and balanced",
                    "Essential vitamins and minerals"
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
                <h3 className="text-2xl font-bold mb-4">Herbal Aloe Concentrate</h3>
                <p className="text-muted-foreground mb-4">
                  Supports digestive health, which is closely linked to overall wellbeing. A healthy gut supports better nutrient absorption, energy levels, and even mood.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports digestive health",
                    "Promotes gut wellness",
                    "May improve nutrient absorption",
                    "Supports overall vitality"
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
                  Provides a gentle energy boost and supports hydration. A healthy alternative to sugary drinks that can help maintain steady energy levels throughout the day.
                </p>
                <ul className="space-y-2">
                  {[
                    "Gentle energy support",
                    "Supports hydration",
                    "Low-calorie beverage",
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

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Personalized Protein</h3>
                <p className="text-muted-foreground mb-4">
                  Ensures adequate protein intake, which is essential for energy, muscle maintenance, hormone production, and overall health. Protein supports many functions that contribute to wellbeing.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports energy levels",
                    "Essential for overall health",
                    "Supports muscle and bone health",
                    "High-quality protein source"
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

      {/* Pricing & Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Investment</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Pricing & Packages</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Program Details</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">What's Included</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Comprehensive wellness evaluation",
              "Personalized holistic health plan",
              "Product recommendations for wellbeing",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions and guidance",
              "Lifestyle optimization guidance",
              "Progress tracking tools and resources",
              "Ongoing plan adjustments"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Success Stories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Success Stories</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </div>

          <Card className="border-none shadow-wellness-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Rajesh's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Improve overall energy and wellbeing</p>
                    <p><strong className="text-foreground">Plan:</strong> Premium 3-month overall wellbeing program</p>
                    <p><strong className="text-foreground">Result:</strong> Increased energy, better sleep, improved mood, enhanced quality of life</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started October 2023, noticed improvements within 3 weeks</p>
                  </div>
                  <p className="italic text-foreground">
                    "I didn't realize how much my poor nutrition and lifestyle habits were affecting me until I started this program. The comprehensive approach made all the difference. I have more energy, sleep better, and just feel like myself again. It's not just about one thing - it's about feeling good in every way."
                  </p>
                  <p className="mt-4 font-semibold">— Rajesh K., Chennai</p>
                </div>
                <div className="flex items-center justify-center bg-muted rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p>Before/After Photos</p>
                    <p className="text-sm">(Placeholder for transformation images)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our overall wellbeing program
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-4">
            🎯 Limited Spots Available
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Transform Your Wellbeing?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free wellness evaluation and get a personalized holistic health plan designed just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Wellness Evaluation
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

export default OverallWellbeing;

