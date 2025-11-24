import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, Shield, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";

const ImmunitySupport = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein + Vitamin C",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder", "RoseGuard"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "Herbal Aloe Concentrate",
      products: ["Herbal Aloe Concentrate"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Balanced meal rich in antioxidants and nutrients",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "RoseGuard or Immune Support Supplement",
      products: ["RoseGuard"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Healthy meal with immune-supporting foods",
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
        "Initial health assessment",
        "Personalized immunity support plan",
        "21-day product bundle",
        "Email support"
      ]
    },
    {
      name: "Standard",
      duration: "1 month",
      price: "Contact for price",
      features: [
        "Comprehensive health evaluation",
        "Personalized nutrition plan for immunity",
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
        "Comprehensive health evaluation",
        "Personalized immunity support plan",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Lifestyle optimization guidance"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see immune system improvements?",
      answer: "Many clients notice increased energy and overall well-being within 2-3 weeks. More significant immune system improvements typically become noticeable after 4-6 weeks of consistent use. Results vary based on individual health status and lifestyle factors."
    },
    {
      question: "Can this program help prevent illnesses?",
      answer: "While we can't guarantee prevention of specific illnesses, supporting your immune system with proper nutrition, adequate sleep, and healthy lifestyle habits can help your body function optimally and maintain better overall health."
    },
    {
      question: "Is this suitable for people with autoimmune conditions?",
      answer: "If you have an autoimmune condition, it's essential to consult with your healthcare provider before starting any new nutrition program. Our coaches can work with you and your doctor to create a plan that supports your health needs."
    },
    {
      question: "What makes Herbalife products good for immunity?",
      answer: "Herbalife products provide essential vitamins, minerals, and antioxidants that support immune function. Products like RoseGuard contain vitamin C and other immune-supporting nutrients, while Formula 1 ensures you're getting complete nutrition that supports overall health."
    },
    {
      question: "Do I need to take supplements if I eat healthy?",
      answer: "Even with a healthy diet, modern lifestyles, stress, and environmental factors can create gaps in nutrition. Our program helps ensure you're getting optimal levels of immune-supporting nutrients through both whole foods and targeted supplementation."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes Formula 1 Shake Mix, Personalized Protein Powder, RoseGuard (immune support), Herbal Aloe Concentrate, and targeted supplements based on your specific needs. Your coach will customize the selection."
    },
    {
      question: "Can children use this program?",
      answer: "Yes, with proper guidance. Herbalife products are safe for children when used appropriately. We recommend consulting with your healthcare provider and our coaches will create age-appropriate plans for younger clients."
    },
    {
      question: "How does this complement a healthy lifestyle?",
      answer: "Our program works best when combined with adequate sleep, regular exercise, stress management, and good hygiene practices. We provide guidance on all these aspects to support your immune system holistically."
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Immunity Support Program - Immune System Health Plan",
    "description": "Comprehensive immunity support program with personalized nutrition plans, Herbalife products, and expert coaching for optimal immune health"
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
        title="Immunity Support Program - Boost Immune System | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Strengthen your immune system with our personalized immunity support program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and proven results. Best immunity support program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/immunity-support"
        keywords="Immunity Support Program Kolathur, Boost Immune System Chennai, Immune Health Program Villivakkam, Herbalife Immunity Support Kolathur, Best Immunity Program Chennai, Immune System Support Villivakkam, Immunity Centre Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Immunity Support – Immune System Health Program"
        tagline="Strengthen your immune system with science-backed nutrition and expert guidance"
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
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp; 
            ⚠️ Results are Typical. Individual Results May Vary. ⚠️ &nbsp;
          </div>
        </div>

        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Perfect For</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Who is this for?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              This program is perfect for individuals who want to strengthen their immune system and maintain optimal health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "People who frequently get sick or feel run down",
              "Individuals with busy, stressful lifestyles",
              "Those wanting to proactively support their health",
              "People recovering from illness",
              "Individuals with weakened immune systems",
              "Anyone wanting to maintain optimal immune function"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Immune Health Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Your immune system works around the clock to protect you, but modern life can take a toll. Stress, poor nutrition, lack of sleep, and environmental factors can weaken your body's natural defenses, leaving you more susceptible to illness and feeling run down.
            </p>
            <p>
              Many people don't realize their immune system needs support until they're already sick. By then, it's too late. The key is proactive support through proper nutrition, adequate rest, and lifestyle habits that keep your immune system functioning at its best.
            </p>
            <p>
              Our immunity support program provides targeted nutrition through Herbalife products rich in vitamins, minerals, and antioxidants that support immune function. Combined with personalized guidance on sleep, stress management, and healthy habits, we help you build a stronger foundation for health.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A comprehensive approach to immune health</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of your health, lifestyle, and immune concerns",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Custom Plan",
                description: "Personalized nutrition and lifestyle strategy for immune support",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Coaching",
                description: "Start your program with immune-supporting products and guidance",
                icon: <Shield className="w-8 h-8" />
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
                icon: <Shield className="w-8 h-8" />
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
                  "Improved immune function",
                  "Increased energy levels",
                  "Better resistance to common illnesses",
                  "Enhanced overall well-being",
                  "Improved sleep quality",
                  "Reduced frequency of getting sick"
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
              How Herbalife products support your immune health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">RoseGuard</h3>
                <p className="text-muted-foreground mb-4">
                  Specially formulated immune support supplement containing vitamin C and other essential nutrients that help support your body's natural defense system. Vitamin C is a key nutrient for immune function.
                </p>
                <ul className="space-y-2">
                  {[
                    "Contains vitamin C for immune support",
                    "Antioxidant protection",
                    "Supports natural defense system",
                    "Easy to take daily"
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
                  Supports digestive health, which is closely linked to immune function. A healthy gut is essential for a strong immune system, as a significant portion of immune cells are located in the digestive tract.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports digestive health",
                    "Promotes gut health",
                    "Contains aloe vera",
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
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients including vitamins and minerals that support overall health and immune function. Ensuring adequate nutrition is fundamental to maintaining a strong immune system.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete nutrition with essential vitamins",
                    "Supports overall health",
                    "Provides immune-supporting nutrients",
                    "Convenient meal replacement"
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
                  Protein is essential for the production of immune cells and antibodies. Adequate protein intake ensures your body has the building blocks needed to maintain and repair immune system components.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports immune cell production",
                    "Essential for antibody formation",
                    "High-quality protein source",
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
              "Comprehensive health evaluation",
              "Personalized immunity support nutrition plan",
              "Product recommendations for immune health",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions and guidance",
              "Progress tracking tools and resources",
              "Lifestyle optimization guidance",
              "Ongoing plan adjustments based on your progress"
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
                  <h3 className="text-2xl font-bold mb-4">Meera's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Strengthen immune system and reduce frequent illnesses</p>
                    <p><strong className="text-foreground">Plan:</strong> Standard 3-month program with RoseGuard and immune support products</p>
                    <p><strong className="text-foreground">Result:</strong> Significantly reduced frequency of getting sick, increased energy, improved overall health</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started September 2023, noticed improvements within 6 weeks</p>
                  </div>
                  <p className="italic text-foreground">
                    "I used to get sick every few months, especially during season changes. Since starting the immunity support program, I've noticed a huge difference. I feel more energetic, and I haven't been sick in over 6 months. The products are easy to take, and the coaching support has been invaluable."
                  </p>
                  <p className="mt-4 font-semibold">— Meera R., Chennai</p>
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
              Everything you need to know about our immunity support program
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
            Ready to Strengthen Your Immune System?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free health evaluation and get a personalized immunity support plan designed just for you
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

export default ImmunitySupport;

