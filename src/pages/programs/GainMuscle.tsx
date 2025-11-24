import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, TrendingUp, Clock, Users, Star, Dumbbell } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";

const GainMuscle = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein + Healthy fats",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder", "Herbalife24"]
    },
    {
      time: "Pre-Workout (30 min before)",
      meal: "Herbalife24 CR7 Drive or Hydrate",
      products: ["Herbalife24 CR7 Drive", "Herbalife24 Hydrate"]
    },
    {
      time: "Post-Workout (within 30 min)",
      meal: "Herbalife24 Rebuild Strength",
      products: ["Herbalife24 Rebuild Strength"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "High-protein meal with complex carbs and healthy fats",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "Formula 1 Shake + Protein Bar",
      products: ["Formula 1 Shake Mix", "Herbalife24 Protein Bar"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Balanced meal with lean protein and vegetables",
      products: []
    },
    {
      time: "Before Bed (9-10 PM)",
      meal: "Casein protein or slow-digesting protein",
      products: ["Personalized Protein Powder"]
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Initial fitness assessment",
        "Personalized muscle-building meal plan",
        "21-day product bundle",
        "Basic workout guidance",
        "Email support"
      ]
    },
    {
      name: "Standard",
      duration: "1 month",
      price: "Contact for price",
      features: [
        "Comprehensive fitness evaluation",
        "Personalized nutrition & training plan",
        "1-month product pack",
        "2 weekly check-ins",
        "WhatsApp support",
        "Progress tracking",
        "Workout program guidance"
      ],
      popular: true
    },
    {
      name: "Premium",
      duration: "3 months",
      price: "Contact for price",
      features: [
        "Comprehensive fitness evaluation",
        "Personalized nutrition & training plan",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Advanced workout programming",
        "Recovery & supplementation guidance"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see muscle gain results?",
      answer: "Most clients notice increased strength and energy within the first 2-3 weeks. Visible muscle growth typically becomes noticeable after 6-8 weeks of consistent training and nutrition. Significant muscle gains usually occur over 3-6 months with proper dedication."
    },
    {
      question: "Do I need to go to a gym?",
      answer: "While a gym provides more equipment options, you can build muscle at home with bodyweight exercises, resistance bands, or basic weights. Our coaches can create a workout plan that fits your available resources and schedule."
    },
    {
      question: "What if I'm a beginner?",
      answer: "Our program is perfect for beginners! We start with foundational movements and gradually progress. Your coach will ensure proper form and create a plan that matches your current fitness level while challenging you to grow."
    },
    {
      question: "How much protein do I need?",
      answer: "Protein needs vary based on your weight, activity level, and goals. Generally, muscle building requires 1.6-2.2g of protein per kg of body weight. Our coaches will calculate your exact needs and help you meet them through Herbalife products and whole foods."
    },
    {
      question: "Can I build muscle while losing fat?",
      answer: "Yes, especially for beginners or those returning to training. This is called body recomposition. Our program can be tailored to support both goals simultaneously through strategic nutrition and training."
    },
    {
      question: "What products are included?",
      answer: "The program typically includes Formula 1 Shake Mix, Personalized Protein Powder, Herbalife24 sports nutrition products (pre-workout, post-workout recovery), and protein bars. Your coach will customize based on your training schedule and goals."
    },
    {
      question: "How often should I train?",
      answer: "For optimal muscle growth, 3-5 training sessions per week is ideal. Your coach will create a program that fits your schedule while ensuring adequate recovery time between sessions."
    },
    {
      question: "What about rest and recovery?",
      answer: "Recovery is crucial for muscle growth. Our program includes guidance on sleep, rest days, and recovery nutrition. Herbalife24 Rebuild Strength supports post-workout recovery and muscle repair."
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Gain Muscle Program - Muscle Building Nutrition Plan",
    "description": "Comprehensive muscle building program with personalized nutrition plans, Herbalife products, and expert coaching for lean muscle gain"
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
        title="Muscle Building Program - Gain Muscle | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Build lean muscle mass with our personalized muscle building program at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed Herbalife nutrition, expert coaching, and proven results. Best muscle building program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/gain-muscle"
        keywords="Muscle Building Program Kolathur, Gain Muscle Chennai, Muscle Building Coaching Villivakkam, Herbalife Muscle Building Kolathur, Best Muscle Building Program Chennai, Strength Training Program Villivakkam, Muscle Gain Centre Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Gain Muscle – Muscle Building Program"
        tagline="Build lean muscle mass with science-backed nutrition and expert coaching"
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
              This program is perfect for individuals who want to build lean muscle mass and strength
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fitness enthusiasts wanting to build muscle",
              "Athletes seeking performance improvement",
              "Individuals looking to increase strength",
              "People wanting to transform their physique",
              "Beginners starting their fitness journey",
              "Anyone wanting to build lean, functional muscle"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Muscle Building Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Building muscle requires more than just lifting weights. You need the right combination of nutrition, training, recovery, and consistency. Many people struggle because they're not eating enough protein, not training effectively, or not giving their bodies time to recover.
            </p>
            <p>
              Without proper nutrition, your body can't build new muscle tissue. Without the right training stimulus, your muscles won't grow. And without adequate recovery, you'll burn out or get injured. It's a delicate balance that requires expert guidance.
            </p>
            <p>
              Our muscle building program provides the complete solution: personalized nutrition plans with high-quality protein, strategic training guidance, and recovery support through Herbalife products. We help you build lean muscle efficiently and sustainably.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A structured approach to muscle building</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of your fitness level, goals, and nutrition",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Custom Plan",
                description: "Personalized nutrition and training strategy",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Training",
                description: "Start your program with products and workout guidance",
                icon: <Dumbbell className="w-8 h-8" />
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
                  "Increased lean muscle mass",
                  "Improved strength and power",
                  "Enhanced athletic performance",
                  "Better body composition",
                  "Increased metabolism",
                  "Improved confidence and energy"
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
              How Herbalife products support your muscle building journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Personalized Protein</h3>
                <p className="text-muted-foreground mb-4">
                  High-quality protein provides the essential amino acids needed for muscle protein synthesis. Consuming adequate protein throughout the day, especially post-workout, is crucial for muscle growth and recovery.
                </p>
                <ul className="space-y-2">
                  {[
                    "Supports muscle protein synthesis",
                    "High-quality amino acids",
                    "Promotes muscle recovery",
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
                <h3 className="text-2xl font-bold mb-4">Herbalife24 Rebuild Strength</h3>
                <p className="text-muted-foreground mb-4">
                  Post-workout recovery supplement designed to support muscle repair and growth. Contains fast-digesting protein and carbohydrates to replenish glycogen stores and initiate muscle recovery.
                </p>
                <ul className="space-y-2">
                  {[
                    "Post-workout muscle recovery",
                    "Replenishes energy stores",
                    "Supports muscle repair",
                    "Optimizes recovery window"
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
                <h3 className="text-2xl font-bold mb-4">Herbalife24 CR7 Drive</h3>
                <p className="text-muted-foreground mb-4">
                  Pre-workout energy drink that provides sustained energy and focus for your training sessions. Helps you train harder and longer, leading to better muscle-building stimulus.
                </p>
                <ul className="space-y-2">
                  {[
                    "Pre-workout energy boost",
                    "Enhanced focus and performance",
                    "Supports training intensity",
                    "Sustained energy release"
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
                  Complete nutrition meal replacement that ensures you're getting all essential nutrients while meeting your calorie and protein goals. Perfect for busy individuals who need convenient, nutrient-dense meals.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete nutrition in every serving",
                    "Convenient meal replacement",
                    "Supports calorie goals",
                    "114 essential nutrients"
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
              "Comprehensive fitness evaluation",
              "Personalized muscle-building meal plan",
              "Customized training program guidance",
              "Product recommendations for muscle growth",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions and motivation",
              "Progress tracking tools and resources",
              "Recovery and supplementation guidance"
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
                  <h3 className="text-2xl font-bold mb-4">Arjun's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Build 8 kg of lean muscle</p>
                    <p><strong className="text-foreground">Plan:</strong> Premium 3-month program with Herbalife24 products</p>
                    <p><strong className="text-foreground">Result:</strong> Gained 9 kg of lean muscle, increased strength by 40%, improved confidence</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started February 2024, achieved goal by May 2024</p>
                  </div>
                  <p className="italic text-foreground">
                    "The combination of proper nutrition through Herbalife products and the training guidance from my coach was incredible. I not only built muscle but also learned how to maintain it. The post-workout recovery products made a huge difference in my progress."
                  </p>
                  <p className="mt-4 font-semibold">— Arjun M., Chennai</p>
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
              Everything you need to know about our muscle building program
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
            Ready to Build Your Best Body?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free fitness evaluation and get a personalized muscle building plan designed just for you
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

export default GainMuscle;

