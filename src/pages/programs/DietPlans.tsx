import { Link } from "react-router-dom";
import SEO from "@/components/SEOHelmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Calendar, Download, FileText, Target, UtensilsCrossed, Clock, Users, Star } from "lucide-react";
import ProgramHero from "@/components/ProgramHero";
import PlanAccordion from "@/components/PlanAccordion";
import PricingTable from "@/components/PricingTable";
import { generateProgramProductSchema } from "@/lib/structuredData";

const DietPlans = () => {
  const dailyPlan = [
    {
      time: "Morning (7-8 AM)",
      meal: "Formula 1 Shake with Personalized Protein",
      products: ["Formula 1 Shake Mix", "Personalized Protein Powder"]
    },
    {
      time: "Mid-Morning (10-11 AM)",
      meal: "Healthy snack or Herbal Tea",
      products: ["Herbal Tea Concentrate"]
    },
    {
      time: "Lunch (1-2 PM)",
      meal: "Balanced meal following your personalized plan",
      products: []
    },
    {
      time: "Afternoon (4-5 PM)",
      meal: "Formula 1 Shake or Healthy Snack",
      products: ["Formula 1 Shake Mix"]
    },
    {
      time: "Dinner (7-8 PM)",
      meal: "Light, balanced meal per your plan",
      products: []
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      duration: "21 days",
      price: "Contact for price",
      features: [
        "Initial nutrition assessment",
        "Personalized diet plan",
        "21-day product bundle",
        "Email support"
      ]
    },
    {
      name: "Standard",
      duration: "1 month",
      price: "Contact for price",
      features: [
        "Comprehensive nutrition evaluation",
        "Personalized meal plan",
        "1-month product pack",
        "2 weekly check-ins",
        "WhatsApp support",
        "Progress tracking",
        "Meal plan adjustments"
      ],
      popular: true
    },
    {
      name: "Premium",
      duration: "3 months",
      price: "Contact for price",
      features: [
        "Comprehensive nutrition evaluation",
        "Personalized meal plan with variations",
        "3-month product pack",
        "Daily check-ins",
        "WhatsApp group access",
        "Weekly coaching calls",
        "Progress tracking & adjustments",
        "Recipe suggestions and meal prep guidance",
        "Long-term maintenance plan"
      ]
    }
  ];

  const faqItems = [
    {
      question: "What types of diet plans do you offer?",
      answer: "We offer personalized diet plans tailored to your goals, preferences, and lifestyle. Whether you want to lose weight, gain weight, build muscle, manage health conditions, or simply eat healthier, we create a custom plan that works for you."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We work with vegetarian, vegan, gluten-free, dairy-free, and other dietary restrictions. Our coaches will create a plan that meets your nutritional needs while respecting your dietary preferences and restrictions."
    },
    {
      question: "Do I have to follow the plan strictly?",
      answer: "While consistency is important for results, we understand life happens. Our plans are flexible and include guidance for dining out, special occasions, and making adjustments when needed. The goal is sustainable habits, not perfection."
    },
    {
      question: "How are the meal plans personalized?",
      answer: "We consider your age, gender, activity level, health goals, food preferences, cooking skills, schedule, and any health conditions. Your coach creates a plan that fits your unique situation and lifestyle."
    },
    {
      question: "What if I don't like certain foods?",
      answer: "We customize your plan based on your food preferences. If you don't like something, we'll find alternatives that provide similar nutritional benefits. Your plan should include foods you enjoy!"
    },
    {
      question: "Do I need to buy special foods?",
      answer: "Our plans primarily use common, accessible foods. Herbalife products complement your meals but aren't required for every meal. We focus on whole foods that are easy to find and prepare."
    },
    {
      question: "Can I get recipes with my plan?",
      answer: "Yes! Premium plans include recipe suggestions and meal prep guidance. We can also provide simple, quick recipes that fit your cooking skills and time constraints."
    },
    {
      question: "How often can I adjust my plan?",
      answer: "Your plan can be adjusted as needed based on your progress, changing goals, or lifestyle changes. Standard and Premium plans include regular check-ins where we review and adjust your plan."
    }
  ];

  const productSchema = generateProgramProductSchema({
    name: "Personalized Diet Plans - Custom Nutrition Program",
    description: "Comprehensive personalized diet plan program with custom meal plans, Herbalife products, and expert nutrition coaching",
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
        title="Personalized Diet Plans - Custom Meal Plans | New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Get a personalized diet plan tailored to your goals and lifestyle at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Expert nutrition coaching, custom meal plans, and proven results. Best diet plan program in Kolathur, Chennai. Book your free evaluation today."
        canonical="/programs/diet-plans"
        keywords="Diet Plans Kolathur, Personalized Meal Plans Chennai, Custom Diet Plan Villivakkam, Herbalife Diet Plans Kolathur, Best Diet Plan Program Chennai, Nutrition Plans Villivakkam, Diet Plan Centre Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <ProgramHero
        image="https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg"
        title="Diet Plans – Personalized Nutrition Program"
        tagline="Get a custom meal plan designed specifically for your goals, preferences, and lifestyle"
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
              This program is perfect for anyone wanting a personalized nutrition plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "People wanting to improve their eating habits",
              "Individuals with specific health goals",
              "Those with dietary restrictions or preferences",
              "People confused about what to eat",
              "Busy professionals needing meal planning",
              "Anyone wanting sustainable nutrition guidance"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">The Nutrition Planning Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              With so much conflicting nutrition information available, it's hard to know what to eat. Generic meal plans don't account for your unique preferences, schedule, cooking skills, or health goals. You end up confused, frustrated, and falling back into old habits.
            </p>
            <p>
              Many people struggle with meal planning because they don't know what foods to choose, how much to eat, or how to balance their meals. They try fad diets that don't fit their lifestyle, or they give up because the plan is too complicated or restrictive.
            </p>
            <p>
              Our personalized diet plan program solves this by creating a custom nutrition strategy that fits YOUR life. We consider your goals, preferences, schedule, and lifestyle to design a plan you can actually follow long-term. Combined with Herbalife products for convenience and complete nutrition, you get a sustainable approach to healthy eating.
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
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A personalized approach to nutrition planning</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                week: "Week 0",
                title: "Assessment",
                description: "Comprehensive evaluation of your goals, preferences, and lifestyle",
                icon: <FileText className="w-8 h-8" />
              },
              {
                week: "Week 1",
                title: "Custom Plan",
                description: "Personalized meal plan designed just for you",
                icon: <Target className="w-8 h-8" />
              },
              {
                week: "Week 1-4",
                title: "Product + Coaching",
                description: "Start your plan with products and ongoing guidance",
                icon: <UtensilsCrossed className="w-8 h-8" />
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
                icon: <UtensilsCrossed className="w-8 h-8" />
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
                  "Clear understanding of what to eat",
                  "Sustainable healthy eating habits",
                  "Achievement of your health goals",
                  "Improved energy and well-being",
                  "Better relationship with food",
                  "Long-term nutrition knowledge"
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
              How Herbalife products complement your personalized diet plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Formula 1 Shake</h3>
                <p className="text-muted-foreground mb-4">
                  Provides 114 essential nutrients in a convenient meal replacement format. Perfect for busy days when you need a quick, balanced meal that fits your calorie and nutrition goals.
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete nutrition in every serving",
                    "Convenient meal replacement option",
                    "Fits into your personalized plan",
                    "Controlled calories and nutrients"
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
                  Ensures you meet your protein needs even on busy days. Protein is essential for satiety, muscle maintenance, and overall health, and this makes it easy to hit your targets.
                </p>
                <ul className="space-y-2">
                  {[
                    "Helps meet daily protein goals",
                    "Supports satiety and fullness",
                    "High-quality protein source",
                    "Easy to add to meals or shakes"
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
                  A healthy beverage option that fits into your plan. Provides hydration and a gentle energy boost without the calories and sugar of many other drinks.
                </p>
                <ul className="space-y-2">
                  {[
                    "Low-calorie beverage option",
                    "Supports hydration goals",
                    "Gentle energy boost",
                    "Fits into your meal plan"
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
                  Our coaches provide guidance on meal prep, recipe selection, dining out strategies, and how to make your plan work in real life. We help you build sustainable habits that last.
                </p>
                <ul className="space-y-2">
                  {[
                    "Personalized meal suggestions",
                    "Meal prep guidance",
                    "Dining out strategies",
                    "Sustainable habit building"
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
              "Comprehensive nutrition evaluation",
              "Personalized meal plan tailored to you",
              "Product recommendations",
              "Weekly check-ins with your coach",
              "WhatsApp support for questions",
              "Recipe suggestions and meal prep tips",
              "Progress tracking tools",
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
                  <h3 className="text-2xl font-bold mb-4">Suresh's Transformation</h3>
                  <div className="space-y-3 text-muted-foreground mb-6">
                    <p><strong className="text-foreground">Goal:</strong> Learn to eat healthy and lose weight</p>
                    <p><strong className="text-foreground">Plan:</strong> Standard 3-month program with personalized meal plan</p>
                    <p><strong className="text-foreground">Result:</strong> Lost 12 kg, learned sustainable eating habits, improved energy</p>
                    <p><strong className="text-foreground">Timeline:</strong> Started March 2024, achieved goal by June 2024</p>
                  </div>
                  <p className="italic text-foreground">
                    "I was always confused about what to eat. The personalized meal plan made everything clear. My coach created a plan that fit my busy schedule and food preferences. The Herbalife products made it easy to stay on track even on hectic days. I've learned so much about nutrition and feel confident I can maintain this long-term."
                  </p>
                  <p className="mt-4 font-semibold">— Suresh T., Chennai</p>
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
              Everything you need to know about our personalized diet plan program
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
            Ready to Get Your Personalized Diet Plan?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free nutrition evaluation and get a custom meal plan designed just for you
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

export default DietPlans;

