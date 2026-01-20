import { Link } from "react-router-dom";
import SEO from "@/components/SEOHelmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, Heart, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";
import { generateProgramProductSchema } from "@/lib/structuredData";

const WomensWellness = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein + SKIN Collagen",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder", "SKIN Collagen Beauty Booster"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "Herbal Aloe Concentrate",
      products: ["Herbal Aloe Concentrate"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Balanced meal rich in iron, calcium, and nutrients",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "SKIN Collagen Beauty Booster or Healthy Snack",
      products: ["SKIN Collagen Beauty Booster"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Healthy meal with women-specific nutrients",
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
        "Personalized women's wellness plan",
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
        "Personalized nutrition plan for women",
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
        "Personalized women's wellness plan",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Hormonal health guidance",
        "Lifestyle optimization"
      ]
    }
  ];

  const faqItems = [
    {
      question: "What makes this program different for women?",
      answer: "Women have unique nutritional needs that change throughout life stages. Our program addresses iron needs, bone health (calcium), hormonal balance, skin health, and energy management specific to women's physiology and life stages."
    },
    {
      question: "Is this suitable for all life stages?",
      answer: "Yes! Our program can be customized for teenagers, young adults, pregnant/postpartum women, perimenopause, menopause, and seniors. Each stage has specific nutritional needs that we address."
    },
    {
      question: "Can I use this during pregnancy or breastfeeding?",
      answer: "If you're pregnant or breastfeeding, it's essential to consult with your healthcare provider before starting any new nutrition program. We can work with you and your doctor to create a safe, supportive plan."
    },
    {
      question: "How does this help with hormonal balance?",
      answer: "Proper nutrition supports hormonal health. Our program ensures adequate intake of essential nutrients, healthy fats, and protein that support hormone production and balance. We also provide guidance on lifestyle factors that affect hormones."
    },
    {
      question: "What about bone health?",
      answer: "Women are at higher risk for bone density issues. Our program includes guidance on calcium, vitamin D, and other bone-supporting nutrients through both Herbalife products and whole foods to support long-term bone health."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes Formula 1 Shake Mix, Personalized Protein Powder, SKIN Collagen Beauty Booster, Herbal Aloe Concentrate, and targeted supplements based on your specific needs and life stage. Your coach will customize the selection."
    },
    {
      question: "Does this help with skin and hair health?",
      answer: "Yes! Our program includes SKIN Collagen Beauty Booster which supports skin health from within. Combined with proper nutrition, this can help improve skin radiance, hair strength, and overall appearance."
    },
    {
      question: "How long until I see results?",
      answer: "Many women notice increased energy within the first week. Improvements in skin, energy levels, and overall well-being typically become noticeable after 3-4 weeks. Results vary based on individual factors and life stage."
    }
  ];

  const productSchema = generateProgramProductSchema({
    name: "Women's Wellness Program - Complete Health Plan for Women",
    description: "Comprehensive women's wellness program with personalized nutrition plans, Herbalife products, and expert coaching for optimal women's health",
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

  return (
    <>
      <SEO
        title="Women's Wellness Program - Complete Health for Women | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Transform your health with our personalized women's wellness program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and proven results. Best women's wellness program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/women-wellness"
        keywords="Women's Wellness Program Kolathur, Women Health Program Chennai, Women Wellness Villivakkam, Herbalife Women Health Kolathur, Best Women Wellness Program Chennai, Women Health Centre Villivakkam, Women Wellness Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Women's Wellness – Complete Health Program for Women"
        tagline="Nourish your body, mind, and spirit with science-backed nutrition designed for women"
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
              This program is designed specifically for women at all life stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Women wanting to improve overall health and energy",
              "Those seeking hormonal balance support",
              "Women concerned about bone health",
              "Individuals wanting better skin and hair health",
              "Women managing weight and body composition",
              "Those navigating life transitions (menopause, postpartum, etc.)"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Women's Health Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Women face unique health challenges throughout their lives. From hormonal fluctuations to bone health concerns, from skin changes to energy management, women's bodies have specific nutritional needs that often go unmet in busy, modern life.
            </p>
            <p>
              Many women struggle with low energy, hormonal imbalances, skin issues, and weight management while juggling careers, families, and personal responsibilities. Generic nutrition advice doesn't account for the unique needs of women's bodies at different life stages.
            </p>
            <p>
              Our women's wellness program addresses these unique needs through personalized nutrition plans that support hormonal health, bone density, skin radiance, energy levels, and overall well-being. We combine science-backed Herbalife products with expert guidance tailored specifically for women.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A comprehensive approach to women's wellness</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of your health, life stage, and goals",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Custom Plan",
                description: "Personalized nutrition strategy for women's specific needs",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Coaching",
                description: "Start your program with women-focused products and guidance",
                icon: <Heart className="w-8 h-8" />
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
                  "Improved energy levels",
                  "Better hormonal balance",
                  "Enhanced skin and hair health",
                  "Stronger bone health support",
                  "Improved mood and well-being",
                  "Sustainable healthy weight management"
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
              How Herbalife products support women's wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">SKIN Collagen Beauty Booster</h3>
                <p className="text-muted-foreground mb-4">
                  Supports skin health from within with collagen and other beauty-supporting nutrients. Helps maintain skin elasticity, hydration, and radiance - important concerns for many women.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports skin elasticity and hydration",
                    "Contains collagen and beauty nutrients",
                    "Promotes skin radiance",
                    "Supports hair and nail health"
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
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients including iron, calcium, and other minerals crucial for women's health. Ensures you're getting complete nutrition even on busy days.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete nutrition with essential vitamins",
                    "Supports iron and calcium needs",
                    "Convenient meal replacement",
                    "Supports overall health"
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
                  Adequate protein is essential for women's health, supporting muscle mass, bone health, hormone production, and satiety. Especially important as women age and need to preserve muscle and bone density.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports muscle and bone health",
                    "Essential for hormone production",
                    "Promotes satiety and weight management",
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

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Herbal Aloe Concentrate</h3>
                <p className="text-muted-foreground mb-4">
                  Supports digestive health, which is closely linked to hormonal balance and overall wellness. A healthy gut supports better nutrient absorption and can help with bloating and digestive discomfort.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports digestive health",
                    "Promotes gut wellness",
                    "May help with bloating",
                    "Supports nutrient absorption"
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
              "Personalized women's nutrition plan",
              "Product recommendations for women's health",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions and guidance",
              "Hormonal health guidance",
              "Progress tracking tools and resources",
              "Lifestyle optimization for women"
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
                  <h3 className="text-2xl font-bold mb-4">Kavitha's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Improve energy, skin health, and overall wellness</p>
                    <p><strong className="text-foreground">Plan:</strong> Premium 3-month program with SKIN products and women's wellness support</p>
                    <p><strong className="text-foreground">Result:</strong> Increased energy, improved skin radiance, better hormonal balance, improved confidence</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started January 2024, noticed improvements within 4 weeks</p>
                  </div>
                  <p className="italic text-foreground">
                    "As a working mom, I was always tired and my skin looked dull. This program changed everything. The SKIN Collagen products made a huge difference in my skin, and the personalized nutrition plan gave me the energy I needed. I feel like myself again - vibrant and healthy!"
                  </p>
                  <p className="mt-4 font-semibold">— Kavitha P., Chennai</p>
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
              Everything you need to know about our women's wellness program
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
            Ready to Transform Your Health?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free wellness evaluation and get a personalized women's health plan designed just for you
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

export default WomensWellness;

