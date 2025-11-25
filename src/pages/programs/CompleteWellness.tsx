import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, Sparkles, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";

const CompleteWellness = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein + Multivitamin",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder", "Multivitamin"]
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
        "Initial comprehensive assessment",
        "Personalized complete wellness plan",
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
        "Personalized complete wellness plan",
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
        "Personalized complete wellness plan",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Complete lifestyle optimization",
        "Long-term maintenance plan"
      ]
    }
  ];

  const faqItems = [
    {
      question: "What is complete wellness?",
      answer: "Complete wellness is a comprehensive approach that addresses all aspects of health: physical, mental, emotional, and social wellbeing. Our program integrates nutrition, fitness, stress management, sleep, and lifestyle habits to help you achieve optimal health in every area of life."
    },
    {
      question: "How is this different from other wellness programs?",
      answer: "This is our most comprehensive program, addressing all aspects of wellness together. Rather than focusing on one area, we create an integrated plan that optimizes nutrition, energy, sleep, stress, fitness, and overall vitality simultaneously."
    },
    {
      question: "What does the program include?",
      answer: "The complete wellness program includes personalized nutrition plans, product recommendations, fitness guidance, stress management strategies, sleep optimization tips, and lifestyle coaching. We address every aspect of your health holistically."
    },
    {
      question: "How long until I see comprehensive results?",
      answer: "Many clients notice improvements in energy and mood within the first week. More comprehensive results across all areas of wellness typically become noticeable after 4-6 weeks of consistent use combined with lifestyle changes."
    },
    {
      question: "Do I need to follow everything strictly?",
      answer: "We work with you to create a plan that fits your lifestyle. While consistency is important, we understand that life happens. Our approach is flexible and focuses on building sustainable habits rather than perfection."
    },
    {
      question: "What products are included?",
      answer: "The program includes a comprehensive selection of Herbalife products: Formula 1 Shake Mix, Personalized Protein Powder, Herbal Aloe Concentrate, Herbal Tea Concentrate, targeted supplements, and other products based on your specific needs. Your coach will customize the selection."
    },
    {
      question: "Can this help with multiple health goals?",
      answer: "Absolutely! The complete wellness program is designed to address multiple goals simultaneously - whether that's weight management, energy improvement, better sleep, stress reduction, or overall health optimization. We create an integrated plan."
    },
    {
      question: "Is this suitable for all fitness levels?",
      answer: "Yes! The program can be customized for all fitness levels, from beginners to advanced. We adjust the fitness component based on your current level, goals, and any limitations you may have."
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Complete Wellness Program - Comprehensive Health Plan",
    "description": "Comprehensive complete wellness program with personalized nutrition plans, Herbalife products, and expert coaching for optimal health in all areas of life"
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
        title="Complete Wellness Program - Comprehensive Health | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Achieve complete wellness with our comprehensive health program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and proven results. Best complete wellness program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/complete-wellness"
        keywords="Complete Wellness Program Kolathur, Comprehensive Health Program Chennai, Complete Wellness Villivakkam, Herbalife Complete Wellness Kolathur, Best Wellness Program Chennai, Complete Health Centre Villivakkam, Complete Wellness Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Complete Wellness – Comprehensive Health Program"
        tagline="Achieve optimal health in every area of life with our most comprehensive program"
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
              This program is perfect for anyone wanting comprehensive, complete wellness transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "People wanting to transform their entire health",
              "Those seeking comprehensive lifestyle change",
              "Individuals with multiple health goals",
              "People wanting the most complete program",
              "Those ready for full wellness commitment",
              "Anyone seeking optimal health in all areas"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Complete Wellness Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              True wellness isn't just about one thing - it's about everything working together. You might eat well but sleep poorly. You might exercise but feel stressed. You might manage stress but lack energy. True health requires all these pieces to work in harmony.
            </p>
            <p>
              Many wellness programs focus on just one aspect - weight loss, fitness, or nutrition - but neglect the bigger picture. Your health is interconnected. Poor sleep affects your energy and food choices. Stress impacts your digestion and immunity. Nutrition affects your mood and performance.
            </p>
            <p>
              Our complete wellness program addresses all these aspects together, creating an integrated approach that optimizes every area of your health. We help you build a foundation of wellness that supports you in every aspect of life, so you can feel your absolute best.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A comprehensive, integrated approach to complete wellness</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Comprehensive Assessment",
                description: "Complete evaluation of all aspects of your health and wellness",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Integrated Plan",
                description: "Personalized complete wellness strategy addressing all areas",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Complete Coaching",
                description: "Start your program with products and comprehensive guidance",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                week: "Ongoing",
                title: "Weekly Check-ins",
                description: "Regular progress tracking across all wellness areas",
                icon: <Clock className="w-8 h-8" />
              },
              {
                week: "Week 4/12",
                title: "Review & Optimize",
                description: "Comprehensive review and optimization of all areas",
                icon: <Sparkles className="w-8 h-8" />
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
                  "Optimal health in all areas",
                  "Increased energy and vitality",
                  "Improved physical fitness",
                  "Better stress management",
                  "Enhanced sleep quality",
                  "Greater life satisfaction and wellbeing"
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
              How Herbalife products support your complete wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Complete Nutrition Foundation</h3>
                <p className="text-muted-foreground mb-4">
                  Formula 1 Shake provides 114 essential nutrients that form the foundation of complete wellness. Proper nutrition supports every aspect of health - energy, immunity, mood, sleep, and physical performance.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete nutrition in every serving",
                    "Supports all aspects of health",
                    "Foundation for wellness",
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
                <h3 className="text-2xl font-bold mb-4">Digestive & Gut Health</h3>
                <p className="text-muted-foreground mb-4">
                  Herbal Aloe Concentrate supports digestive health, which is central to overall wellness. A healthy gut supports immunity, mood, energy, and nutrient absorption - all crucial for complete wellness.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports digestive health",
                    "Promotes gut wellness",
                    "Supports immune function",
                    "Enhances nutrient absorption"
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
                <h3 className="text-2xl font-bold mb-4">Energy & Performance</h3>
                <p className="text-muted-foreground mb-4">
                  Herbal Tea Concentrate and Personalized Protein support sustained energy and physical performance. Adequate energy and protein are essential for fitness, recovery, and overall vitality.
                </p>
                <ul className="space-y-2">
                  {[
                    "Sustained energy support",
                    "Supports physical performance",
                    "Promotes recovery",
                    "Essential for fitness goals"
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
                <h3 className="text-2xl font-bold mb-4">Comprehensive Lifestyle Support</h3>
                <p className="text-muted-foreground mb-4">
                  Our complete wellness program includes guidance on nutrition, fitness, sleep, stress management, and lifestyle habits. We help you build sustainable habits that support optimal health in every area.
                </p>
                <ul className="space-y-2">
                  {[
                    "Integrated wellness approach",
                    "Lifestyle optimization",
                    "Sustainable habit building",
                    "Comprehensive health support"
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
              "Personalized complete wellness plan",
              "Product recommendations for all areas",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions and guidance",
              "Fitness and exercise guidance",
              "Stress management strategies",
              "Sleep optimization tips",
              "Lifestyle optimization guidance",
              "Progress tracking across all areas",
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
                  <h3 className="text-2xl font-bold mb-4">Anita's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Complete health transformation</p>
                    <p><strong className="text-foreground">Plan:</strong> Premium 3-month complete wellness program</p>
                    <p><strong className="text-foreground">Result:</strong> Lost 15 kg, improved energy, better sleep, reduced stress, enhanced fitness, improved confidence</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started January 2024, comprehensive results by April 2024</p>
                  </div>
                  <p className="italic text-foreground">
                    "I wanted to transform my entire life, not just lose weight. The complete wellness program addressed everything - nutrition, fitness, sleep, stress. The integrated approach made all the difference. I don't just look better, I feel better in every way. This program changed my life completely."
                  </p>
                  <p className="mt-4 font-semibold">— Anita D., Chennai</p>
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
              Everything you need to know about our complete wellness program
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
            Ready to Achieve Complete Wellness?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free comprehensive wellness evaluation and get a personalized complete health plan designed just for you
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

export default CompleteWellness;

