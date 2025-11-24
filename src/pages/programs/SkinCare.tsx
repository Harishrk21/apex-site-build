import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Sparkles, FileText, Target, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";
import aboutHero from "@/assets/about-hero.jpg";

const SkinCare = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with SKIN Collagen Beauty Booster",
      products: ["Formula 1 Shake Mix", "SKIN Collagen Beauty Booster"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "Herbal Aloe Concentrate",
      products: ["Herbal Aloe Concentrate"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Balanced meal rich in antioxidants",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "SKIN Collagen Beauty Booster",
      products: ["SKIN Collagen Beauty Booster"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Healthy meal with skin-supporting nutrients",
      products: []
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Initial skin assessment",
        "Personalized nutrition plan",
        "21-day SKIN product bundle",
        "Email support"
      ]
    },
    {
      name: "Standard",
      duration: "1 month",
      price: "Contact for price",
      features: [
        "Comprehensive skin assessment",
        "Personalized inner & outer nutrition plan",
        "1-month SKIN product pack",
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
        "Comprehensive skin assessment",
        "Personalized nutrition plan",
        "3-month SKIN product pack",
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
      question: "How long does it take to see skin improvements?",
      answer: "Many clients notice improved skin texture and radiance within 2-3 weeks. More significant improvements like reduced fine lines, improved elasticity, and clearer skin typically become noticeable after 4-6 weeks of consistent use. Results vary based on individual skin type and concerns."
    },
    {
      question: "Do I need to use external skincare products too?",
      answer: "While Herbalife SKIN products work from within to nourish your skin, combining them with a good external skincare routine enhances results. Our coaches can provide guidance on both inner and outer nutrition for optimal skin health."
    },
    {
      question: "Is this suitable for all skin types?",
      answer: "Yes, Herbalife SKIN products are designed to support all skin types. The program can be customized based on your specific skin concerns - whether you have dry, oily, combination, or sensitive skin."
    },
    {
      question: "What makes this different from regular skincare?",
      answer: "Herbalife SKIN products work from within, providing essential nutrients that support collagen production, hydration, and skin health at the cellular level. This inner nutrition approach complements external skincare for comprehensive results."
    },
    {
      question: "Can men use this program?",
      answer: "Absolutely! Skin health is important for everyone. The program is suitable for both men and women, and can be customized based on individual skin concerns and goals."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes SKIN Collagen Beauty Booster, Formula 1 Shake (for complete nutrition), Herbal Aloe Concentrate (for hydration), and other targeted nutrition products. Your coach will customize based on your specific skin needs."
    },
    {
      question: "Will this help with acne?",
      answer: "Yes, the program can help with acne by supporting overall skin health, reducing inflammation, and providing essential nutrients. However, severe acne should also be addressed with a dermatologist. Our coaches can work alongside your healthcare provider."
    },
    {
      question: "How do I track my progress?",
      answer: "Your coach will help you track progress through regular check-ins, skin condition assessments, before/after photos, and monitoring improvements in texture, tone, and overall appearance. You'll receive tracking tools and can communicate via WhatsApp or scheduled calls."
    }
  ];

  return (
    <>
      <SEO
        title="Skin Care Program - Radiant Skin (Outer & Inner) | New Life Wellness Centre Kolathur, Chennai"
        description="Achieve radiant, glowing skin with our comprehensive inner and outer nutrition program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Herbalife SKIN products, collagen support, and expert coaching for healthy skin. Best skin care program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/skin-care"
        keywords="Skin Care Program Kolathur, Herbalife SKIN Products Chennai, Inner Nutrition for Skin Villivakkam, Collagen Beauty Booster Kolathur, Skin Health Program Chennai, Best Skin Care Program Villivakkam, Radiant Skin Program Kolathur, Skin Nutrition Chennai"
      />

      <ProgramHero
        image='https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg'
        title="Skin Care (Outer & Inner) – Radiant Skin Program"
        tagline="Nourish your skin from within with science-backed nutrition and expert guidance"
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
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp;
          </div>
        </div>

        {/* 👇 Increased top padding so nothing overlaps */}
        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Perfect For</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Who is this for?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              This program is perfect for anyone wanting to improve their skin health and appearance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Individuals wanting radiant, glowing skin",
              "People concerned about premature aging",
              "Those with dull, tired-looking skin",
              "Anyone wanting to reduce fine lines and wrinkles",
              "People with uneven skin tone or texture",
              "Individuals seeking comprehensive skin health"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Skin Health Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Your skin is a reflection of your inner health. Despite using expensive creams and treatments, you may still struggle with dull skin, premature aging, or skin concerns. This is because true skin health starts from within.
            </p>
            <p>
              External skincare products can only do so much. Your skin needs essential nutrients like collagen, antioxidants, vitamins, and minerals to maintain its health, elasticity, and radiance. Without proper inner nutrition, even the best external products have limited effectiveness.
            </p>
            <p>
              Herbalife SKIN products work from within to nourish your skin at the cellular level. Combined with a balanced nutrition plan, this inner nutrition approach provides the foundation for healthy, radiant skin that glows from the inside out.
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
            <p className="text-xl text-muted-foreground">A comprehensive approach to skin health</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Assessment",
                description: "Comprehensive skin evaluation and nutrition analysis",
                icon: <FileText className="w-8 h-8" />
              },
              {
                title: "Personalized Plan",
                description: "Custom inner and outer nutrition strategy",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Product + Coaching",
                description: "SKIN products with ongoing support and guidance",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Progress Tracking",
                description: "Regular check-ins and skin condition monitoring",
                icon: <Clock className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                  {step.icon}
                </div>
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
                  "Improved skin radiance and glow",
                  "Reduced fine lines and wrinkles",
                  "Better skin texture and elasticity",
                  "More even skin tone",
                  "Enhanced skin hydration",
                  "Overall healthier, younger-looking skin"
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
            <p className="text-xl text-muted-foreground">
              How Herbalife SKIN products support your skin health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">SKIN Collagen Beauty Booster</h3>
                <p className="text-muted-foreground mb-4">
                  Provides key nutrients that support collagen production, which is essential for skin elasticity and firmness. Contains collagen peptides, hyaluronic acid, and antioxidants that work together to promote healthy, youthful-looking skin.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports collagen production",
                    "Enhances skin elasticity",
                    "Provides hydration support",
                    "Antioxidant protection"
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
                <h3 className="text-2xl font-bold mb-4">Formula 1 Complete Nutrition</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients including vitamins A, C, E, and zinc - all crucial for skin health. Complete nutrition ensures your skin gets the building blocks it needs for repair and maintenance.
                </p>
                <ul className="space-y-2">
                  {[
                    "114 essential nutrients",
                    "Vitamins A, C, E for skin health",
                    "Zinc for skin repair",
                    "Complete balanced nutrition"
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
                  Supports hydration and digestive health, which are both important for clear, healthy skin. Proper hydration and gut health directly impact your skin's appearance and health.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports skin hydration",
                    "Promotes digestive wellness",
                    "Natural anti-inflammatory",
                    "Supports overall wellness"
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
                <h3 className="text-2xl font-bold mb-4">Targeted Antioxidants</h3>
                <p className="text-muted-foreground mb-4">
                  Additional antioxidant support helps protect your skin from environmental damage and oxidative stress, which can cause premature aging and skin concerns.
                </p>
                <ul className="space-y-2">
                  {[
                    "Protects against free radicals",
                    "Reduces oxidative stress",
                    "Supports skin repair",
                    "Anti-aging benefits"
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
            <p className="text-xl text-muted-foreground">
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
              "Comprehensive skin assessment",
              "Personalized inner & outer nutrition plan",
              "SKIN product recommendations",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions",
              "Progress tracking with before/after photos",
              "Skin health education and tips",
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Got Questions?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our skin care program
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-4">
            🎯 Limited Spots Available
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your free skin assessment and get a personalized plan for radiant, healthy skin
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
                View SKIN Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkinCare;

