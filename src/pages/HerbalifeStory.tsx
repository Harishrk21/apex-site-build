import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, Award, Users, Microscope, CheckCircle2, Leaf, FlaskConical, Shield, ShoppingBag, Sparkles, Coffee, Heart, Brain, Eye, Bone, Target } from "lucide-react";
import ProductTypeBlock from "@/components/ProductTypeBlock";
import productsHero from "@/assets/products-hero.jpg";

const HerbalifeStory = () => {
  const productTypes = [
    {
      name: "Formula 1 Shakes",
      benefits: [
        "Complete meal replacement with 114 essential nutrients",
        "Supports healthy weight management",
        "High-quality protein for muscle maintenance",
        "Convenient and delicious meal option"
      ],
      icon: <Coffee className="w-8 h-8" />
    },
    {
      name: "Personalized Protein",
      benefits: [
        "Supports muscle growth and recovery",
        "Helps maintain lean muscle during weight loss",
        "High-quality protein source",
        "Customizable to your needs"
      ],
      icon: <Leaf className="w-8 h-8" />
    },
    {
      name: "Aloe Products",
      benefits: [
        "Supports digestive health",
        "Natural hydration support",
        "Helps maintain healthy gut function",
        "Soothes digestive discomfort"
      ],
      icon: <Leaf className="w-8 h-8" />
    },
    {
      name: "SKIN Care",
      benefits: [
        "Nourishes skin from within",
        "Supports collagen production",
        "Antioxidant protection",
        "Promotes healthy, glowing skin"
      ],
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      name: "Targeted Nutrition",
      benefits: [
        "Heart health support (Omega-3)",
        "Brain & immune support",
        "Eye health nutrients",
        "Bone & joint support"
      ],
      icon: <Target className="w-8 h-8" />
    }
  ];

  const faqItems = [
    {
      question: "Are Herbalife products safe?",
      answer: "Yes, Herbalife products are manufactured following strict quality control standards and Good Manufacturing Practices (GMP). All products undergo rigorous testing for purity, potency, and safety. However, we always recommend consulting with your healthcare provider before starting any new nutrition program, especially if you have existing health conditions or are taking medications."
    },
    {
      question: "Are Herbalife products a magic pill?",
      answer: "No, Herbalife products are not magic pills. They are scientifically formulated nutrition supplements designed to support a healthy lifestyle when combined with proper diet, exercise, and coaching. Success comes from the combination of quality products, personalized coaching, and your commitment to making healthy lifestyle changes. Our coaches work with you to create sustainable habits for long-term results."
    },
    {
      question: "Do I need to follow a specific diet with Herbalife products?",
      answer: "Herbalife products work best when integrated into a balanced nutrition plan. Our coaches will help you create a personalized meal plan that includes Herbalife products alongside healthy whole foods. The products are designed to complement your diet, not replace all food, though meal replacement shakes can be used for specific meals as part of a structured plan."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on individual goals, commitment, and starting point. Many clients notice increased energy within the first week. Visible changes like weight loss or improved skin typically become noticeable after 2-4 weeks of consistent use combined with coaching and lifestyle changes. Our coaches provide regular check-ins to track progress and adjust your plan as needed."
    },
    {
      question: "Are Herbalife products suitable for vegetarians?",
      answer: "Many Herbalife products are suitable for vegetarians, and some are vegan-friendly. Formula 1 shakes, for example, are vegetarian. Our coaches can help you select products that align with your dietary preferences and restrictions. Always check product labels and consult with your coach for specific dietary needs."
    },
    {
      question: "Can I use Herbalife products if I have medical conditions?",
      answer: "If you have existing medical conditions or are taking medications, it's essential to consult with your healthcare provider before starting any new nutrition program. Our coaches can work with you and your healthcare team to create a plan that supports your health goals while respecting any medical considerations."
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Herbalife Nutrition",
    "description": "Global nutrition company founded in 1980, making the world healthier and happier through science-backed nutritional products",
    "foundingDate": "1980",
    "founder": {
      "@type": "Person",
      "name": "Mark R. Hughes"
    }
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

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "The Story Behind Our Nutrition — Herbalife",
    "description": "Learn about Herbalife Nutrition's history, founder Mark R. Hughes, product philosophy, manufacturing standards, and why you can trust Herbalife products",
    "mainEntity": {
      "@type": "Organization",
      "name": "Herbalife Nutrition"
    }
  };

  return (
    <>
      <SEO
        title="Herbalife Story - 40+ Years of Nutrition Excellence | New Life Wellness Centre Kolathur, Chennai"
        description="Learn about Herbalife Nutrition's 40+ year legacy, founder Mark R. Hughes, product philosophy, manufacturing standards, and why you can trust Herbalife products for your wellness journey at New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam."
        canonical="/herbalife-story"
        keywords="Herbalife History Kolathur, Mark Hughes Chennai, Herbalife Nutrition Villivakkam, Herbalife Products Science Kolathur, Global Wellness Chennai, Herbalife Manufacturing Villivakkam, Herbalife Story Kolathur, Herbalife Products Chennai"
      />
      
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(aboutPageSchema)}</script>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg')`,
  }}
/>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Story Behind Our Nutrition — Herbalife</h1>
          <p className="text-xl text-white/90">
            Making the world healthier and happier since 1980
          </p>
        </div>
      </section>

      {/* Founder & Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Founder & Mission</h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">Mark R. Hughes</strong> founded Herbalife Nutrition in <strong className="text-foreground">1980</strong> with a revolutionary vision: to make the world healthier and happier by providing excellent nutrition products and a rewarding business opportunity. Mark's personal journey with nutrition and his passion for helping others achieve better health laid the foundation for what would become a global wellness movement.
            </p>
            <p>
              Mark believed that everyone deserves access to quality nutrition and the opportunity to improve their lives. This belief drove him to create products backed by science and a business model that empowers independent distributors to help others while building their own success.
            </p>
            <p>
              Today, Herbalife Nutrition operates in more than 90 countries with over 4.5 million independent distributors. The company's mission remains true to Mark's original vision: to make the world healthier and happier through excellent nutrition products and meaningful business opportunities.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
              <h3 className="text-xl font-bold mb-3 text-foreground">Herbalife's Mission Statement</h3>
              <p className="text-lg italic text-foreground">
                "To make the world healthier and happier by providing excellent nutrition products and a rewarding business opportunity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                number: "90+",
                label: "Countries Worldwide",
              },
              {
                icon: <Users className="w-8 h-8" />,
                number: "4.5M+",
                label: "Independent Distributors",
              },
              {
                icon: <Award className="w-8 h-8" />,
                number: "40+",
                label: "Years of Excellence",
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                number: "300+",
                label: "Scientists & Experts",
              },
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-wellness text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Product Philosophy</h2>
            <p className="text-xl text-muted-foreground">
              Science-backed nutrition designed for real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Meal Replacement & Balanced Nutrition</h3>
                <p className="text-muted-foreground mb-4">
                  Herbalife products are designed to provide balanced nutrition that supports your body's needs. Formula 1 shakes, for example, offer 114 essential nutrients in a convenient meal replacement format, making it easier to maintain proper nutrition even with busy lifestyles.
                </p>
                <p className="text-muted-foreground">
                  The philosophy centers on providing complete nutrition that helps you achieve your goals—whether that's weight management, increased energy, or overall wellness—while maintaining a balanced approach to eating.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ingredients Sourcing & Quality Controls</h3>
                <p className="text-muted-foreground mb-4">
                  Herbalife sources ingredients from trusted suppliers worldwide, prioritizing quality and sustainability. Every ingredient is carefully selected and tested before being approved for use in products.
                </p>
                <p className="text-muted-foreground">
                  The company maintains strict quality control standards throughout the supply chain, from raw material sourcing to final product delivery, ensuring consistency and safety in every batch.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-wellness">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing Standards</h3>
              <p className="text-muted-foreground mb-4">
                Herbalife products are manufactured in state-of-the-art facilities that follow Good Manufacturing Practices (GMP) and international quality standards. The manufacturing process includes:
              </p>
              <ul className="space-y-3">
                {[
                  "Rigorous quality testing at multiple stages",
                  "GMP-certified manufacturing facilities",
                  "Third-party verification and testing",
                  "Traceability from source to consumer",
                  "Regular audits and quality assurance checks"
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clinical Research & Community */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Clinical Research & Community</h2>
            <p className="text-xl text-muted-foreground">
              Science-backed products supported by research and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Clinical Research</h3>
                <p className="text-muted-foreground mb-4">
                  Herbalife invests in scientific research and clinical studies to validate the effectiveness of their products. The company's Nutrition Advisory Board, comprised of leading health and nutrition experts, guides product development and research initiatives.
                </p>
                <p className="text-muted-foreground">
                  Research findings are published in peer-reviewed journals, and the company maintains partnerships with top universities and research institutions worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
                <p className="text-muted-foreground mb-4">
                  Through the Herbalife Nutrition Foundation (HNF), the company supports programs that provide good nutrition to children in need. The foundation works with local partners to address malnutrition and promote healthy lifestyles in communities around the world.
                </p>
                <p className="text-muted-foreground">
                  Herbalife distributors and employees actively participate in community service and wellness education programs, creating a global network of support for better health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Products Are Made */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Science-Backed Quality</h2>
            <p className="text-xl text-muted-foreground">
              Every Herbalife product goes through rigorous quality control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Research & Development",
                description: "300+ scientists and nutrition experts develop formulas based on cutting-edge research and nutritional science.",
              },
              {
                title: "Quality Testing",
                description: "Every batch undergoes over 300 quality tests to ensure purity, potency, and safety before reaching consumers.",
              },
              {
                title: "Manufacturing Excellence",
                description: "State-of-the-art facilities following Good Manufacturing Practices (GMP) and international quality standards.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-4">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductTypeBlock types={productTypes} title="Product Categories & How They Help" />

      {/* Safety & Quality */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Safety & Quality</h2>
            <p className="text-xl text-muted-foreground">
              Your trust is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Certifications & Standards</h3>
                <ul className="space-y-3">
                  {[
                    "GMP (Good Manufacturing Practices) certified facilities",
                    "ISO quality management standards",
                    "Third-party testing and verification",
                    "FDA-registered manufacturing facilities (where applicable)",
                    "Regular quality audits and inspections"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <FlaskConical className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Third-Party Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Herbalife products undergo extensive third-party testing to verify purity, potency, and safety. These independent tests ensure that products meet or exceed quality standards before reaching consumers.
                </p>
                <p className="text-muted-foreground">
                  Test results and quality documentation are available through authorized distributors and coaches, providing transparency and building trust in the products.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-wellness">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Quality Assurance Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Ingredient Testing", desc: "Raw materials tested for purity" },
                  { step: "02", title: "Formulation", desc: "Scientific formulation development" },
                  { step: "03", title: "Production Testing", desc: "Batch testing during manufacturing" },
                  { step: "04", title: "Final Verification", desc: "Third-party verification before release" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Newlife Uses Them */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Newlife Uses Herbalife Products</h2>
            <p className="text-xl text-muted-foreground">
              Personalized product combinations for your unique goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                program: "Weight Loss Program",
                products: ["Formula 1 Shake", "Personalized Protein", "Total Control"],
                description: "Formula 1 provides balanced meal replacement, Personalized Protein preserves muscle during weight loss, and Total Control supports healthy metabolism."
              },
              {
                program: "Weight Gain Program",
                products: ["Formula 1 Shake", "Personalized Protein", "Herbalife24"],
                description: "Calorie-dense Formula 1 shakes combined with high-quality protein support healthy muscle gain and weight increase."
              },
              {
                program: "Skin Care Program",
                products: ["SKIN Collagen Beauty Booster", "Formula 1", "Herbal Aloe"],
                description: "SKIN products nourish from within, Formula 1 provides essential nutrients for healthy skin, and Aloe supports overall wellness."
              },
              {
                program: "Heart Health Program",
                products: ["Active Fiber Complex", "Herbalife24", "Omega-3"],
                description: "Targeted nutrition products support cardiovascular health through fiber, omega-3 fatty acids, and comprehensive nutrition."
              }
            ].map((plan, index) => (
              <Card key={index} className="border-none shadow-wellness">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{plan.program}</h3>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Products Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.products.map((product, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Myth-busting FAQ */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Myth-Busting FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about Herbalife products
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Herbalife Products?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a consultation to discover which products are right for your wellness goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gradient-wellness shadow-wellness-lg">
              <Link to="/products">
                <ShoppingBag className="mr-2 w-5 h-5" />
                View Product Catalogue
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/book-consultation">
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HerbalifeStory;
