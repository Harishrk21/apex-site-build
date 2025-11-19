import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, TrendingUp, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";
import aboutHero from "@/assets/about-hero.jpg";

const GainWeight = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein + Healthy fats",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder", "Herbalife24"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "High-calorie snack with protein",
      products: ["Herbalife24 Protein Bar"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Calorie-dense meal with lean protein, complex carbs, and healthy fats",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "Formula 1 Shake + Nuts/Dried fruits",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Balanced meal with extra portions",
      products: []
    },
    {
      time: "Before Bed (9-10 PM)",
      meal: "Protein shake or healthy snack",
      products: ["Personalized Protein Powder"]
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Initial wellness evaluation",
        "Personalized meal plan for weight gain",
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
        "Personalized high-calorie meal plan",
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
        "Strength training guidance"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see weight gain results?",
      answer: "Most clients notice increased energy and appetite within the first week. Visible weight gain typically becomes noticeable after 3-4 weeks of consistent use combined with proper nutrition and coaching. Healthy weight gain is gradual, aiming for 0.5-1 kg per week for sustainable results."
    },
    {
      question: "Will I gain fat or muscle?",
      answer: "Our program focuses on healthy weight gain through lean muscle building. Herbalife products provide high-quality protein and balanced nutrition that supports muscle growth rather than fat accumulation. Combined with appropriate exercise guidance, you'll gain healthy, lean weight."
    },
    {
      question: "Do I need to exercise?",
      answer: "While not mandatory, strength training significantly enhances muscle gain and ensures you're building lean mass rather than fat. Our coaches can provide simple strength-building guidance that fits your schedule and fitness level."
    },
    {
      question: "What if I have a fast metabolism?",
      answer: "Our program is specifically designed for individuals with fast metabolisms. We create calorie-dense meal plans using Herbalife products that make it easier to consume more calories without feeling overly full. Formula 1 shakes and protein supplements help you meet your calorie goals efficiently."
    },
    {
      question: "Can I continue after reaching my goal weight?",
      answer: "Absolutely! Many clients transition to maintenance plans or continue with the program to build more muscle. Our goal is to help you achieve and maintain your ideal healthy weight long-term."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes Formula 1 Shake Mix, Personalized Protein Powder, Herbalife24 sports nutrition products, and meal replacement options. Your coach will customize the product selection based on your specific needs and goals."
    },
    {
      question: "Is this safe for teenagers?",
      answer: "Yes, with proper guidance. Herbalife products are safe for teenagers when used appropriately. We recommend consulting with your healthcare provider and our coaches will create age-appropriate plans for younger clients."
    },
    {
      question: "How do I track my progress?",
      answer: "Your coach will help you track progress through regular check-ins, weight tracking, body measurements, and strength assessments. You'll receive a progress tracking sheet and can communicate with your coach via WhatsApp or scheduled calls."
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Gain Weight Program - Personalized Nutrition Plan",
    "description": "Comprehensive weight gain program with personalized nutrition plans, Herbalife products, and expert coaching for healthy muscle building"
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
        title="Weight Gain Program - Healthy Weight Gain | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Build healthy weight and lean muscle with our personalized weight gain program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and sustainable results. Best weight gain program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/gain-weight"
        keywords="Weight Gain Program Kolathur, Gain Weight Chennai, Healthy Weight Gain Villivakkam, Muscle Building Program Kolathur, Herbalife Weight Gain Chennai, Best Weight Gain Program Villivakkam, Weight Gain Centre Kolathur, Nutrition Weight Gain Chennai"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image={aboutHero}
        title="Gain Weight – Healthy Weight Gain Program"
        tagline="Build healthy weight and lean muscle with science-backed nutrition and expert coaching"
      />

      {/* Who is this for? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Perfect For</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Who is this for?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              This program is perfect for individuals who want to gain weight healthily and build lean muscle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Underweight individuals seeking healthy weight gain",
              "Athletes and fitness enthusiasts wanting to build muscle",
              "People with fast metabolism struggling to gain weight",
              "Post-illness recovery requiring weight restoration",
              "Teenagers and young adults needing healthy weight gain",
              "Anyone wanting to build lean muscle mass"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Weight Gain Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Gaining weight can be just as challenging as losing it. If you have a fast metabolism, struggle with appetite, or find it difficult to consume enough calories, you know how frustrating it can be to see the scale barely move despite your efforts.
            </p>
            <p>
              Many people try to gain weight by eating unhealthy, calorie-dense junk food, which leads to fat gain rather than healthy muscle. Others struggle to eat enough due to busy schedules, poor appetite, or feeling full too quickly. This approach doesn't work long-term and can harm your health.
            </p>
            <p>
              The solution is a structured program that provides calorie-dense, nutrient-rich nutrition through Herbalife products combined with personalized meal planning. Our program helps you gain healthy weight by building lean muscle mass while ensuring you get all the essential nutrients your body needs.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A structured approach to healthy weight gain</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of your metabolism, current nutrition, and goals",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Calorie-Dense Plan",
                description: "Custom high-calorie nutrition strategy with product recommendations",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Coaching",
                description: "Start your program with ongoing support and meal planning guidance",
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
                icon: <TrendingUp className="w-8 h-8" />
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
                  "Healthy weight gain (0.5-1 kg per week)",
                  "Increased lean muscle mass",
                  "Improved appetite and eating habits",
                  "Enhanced energy levels",
                  "Better strength and physical performance",
                  "Sustainable healthy weight maintenance"
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
              How Herbalife products support your weight gain journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients in a convenient, calorie-dense format. When combined with Personalized Protein and healthy fats, it becomes an excellent high-calorie meal option that's easy to consume even when you have a poor appetite.
                </p>
                <ul className="space-y-2">
                  {[
                    "Calorie-dense meal replacement option",
                    "Complete nutrition in every serving",
                    "Easy to digest and consume",
                    "Customizable with protein and healthy fats"
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
                  High-quality protein is essential for muscle building. Personalized Protein provides the amino acids your body needs to build and repair muscle tissue, supporting healthy weight gain through lean muscle development.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports muscle growth and repair",
                    "High-quality amino acids",
                    "Helps build lean muscle mass",
                    "Customizable to your protein needs"
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
                <h3 className="text-2xl font-bold mb-4">Herbalife24 Sports Nutrition</h3>
                <p className="text-muted-foreground mb-4">
                  Herbalife24 products support active individuals with additional calories, protein, and performance nutrients. Protein bars, energy drinks, and recovery supplements help you meet your calorie goals while supporting athletic performance.
                </p>
                <ul className="space-y-2">
                  {[
                    "Convenient high-calorie snacks",
                    "Supports athletic performance",
                    "Recovery and muscle support",
                    "Easy to consume on-the-go"
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
                <h3 className="text-2xl font-bold mb-4">Meal Planning Support</h3>
                <p className="text-muted-foreground mb-4">
                  Our coaches create personalized meal plans that combine Herbalife products with calorie-dense whole foods. This approach ensures you're getting enough calories while maintaining balanced nutrition for healthy weight gain.
                </p>
                <ul className="space-y-2">
                  {[
                    "Personalized high-calorie meal plans",
                    "Combines products with whole foods",
                    "Strategies for increased appetite",
                    "Sustainable eating habits"
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

      {/* Sample Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Daily Schedule</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Sample Plan</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              See what a typical day looks like in our weight gain program
            </p>
          </div>
          <PlanAccordion dailyPlan={dailyPlan} title="Daily Meal Schedule" />
          <div className="mt-6 text-center">
            <Button variant="outline" size="lg">
              <Download className="mr-2 w-5 h-5" />
              Download Sample Plan PDF
            </Button>
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
              "Personalized high-calorie meal plan",
              "Product recommendations for weight gain",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions and motivation",
              "Progress tracking tools and resources",
              "Strength training guidance (optional)",
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
                  <h3 className="text-2xl font-bold mb-4">Rahul's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Gain 10 kg of healthy weight</p>
                    <p><strong className="text-foreground">Plan:</strong> Standard 3-month program with Formula 1, Personalized Protein, and Herbalife24</p>
                    <p><strong className="text-foreground">Result:</strong> Gained 12 kg in 3 months, built lean muscle, improved strength and confidence</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started March 2024, achieved goal by June 2024</p>
                  </div>
                  <p className="italic text-foreground">
                    "I always struggled to gain weight due to my fast metabolism. The Herbalife products made it so much easier to consume enough calories, and the personalized meal plan from my coach was a game-changer. I not only gained weight but built real muscle. Highly recommend!"
                  </p>
                  <p className="mt-4 font-semibold">— Rahul K., Chennai</p>
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
              Everything you need to know about our weight gain program
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
            Ready to Start Your Weight Gain Journey?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free wellness evaluation and get a personalized plan designed just for you
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

export default GainWeight;

