import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingDown, TrendingUp, Sparkles } from "lucide-react";

const Transformations = () => {
  const transformations = [
    {
      name: "Priya Sharma",
      age: 32,
      goal: "Weight Loss",
      result: "Lost 15 kg in 4 months",
      quote: "I never thought I could achieve this! The personalized plan and constant support from the team made all the difference.",
      beforeAfter: { before: "72 kg", after: "57 kg" },
      icon: <TrendingDown className="w-5 h-5" />,
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      age: 28,
      goal: "Weight Gain",
      result: "Gained 8 kg healthy muscle",
      quote: "Finally found a sustainable way to gain weight. The nutrition plan was perfect for my body type.",
      beforeAfter: { before: "58 kg", after: "66 kg" },
      icon: <TrendingUp className="w-5 h-5" />,
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      age: 35,
      goal: "Skin Health",
      result: "Glowing skin transformation",
      quote: "The combination of SKIN products and proper nutrition gave me the radiant skin I always wanted.",
      beforeAfter: { before: "Dull skin", after: "Glowing skin" },
      icon: <Sparkles className="w-5 h-5" />,
      rating: 5,
    },
    {
      name: "Vikram Patel",
      age: 42,
      goal: "Overall Wellness",
      result: "Lost 12 kg, improved energy",
      quote: "Not just weight loss, my energy levels are through the roof! I feel 10 years younger.",
      beforeAfter: { before: "88 kg", after: "76 kg" },
      icon: <TrendingDown className="w-5 h-5" />,
      rating: 5,
    },
    {
      name: "Deepa Singh",
      age: 29,
      goal: "Postpartum Weight Loss",
      result: "Lost 18 kg post-pregnancy",
      quote: "After my baby, I struggled with weight. The team helped me safely lose weight while breastfeeding.",
      beforeAfter: { before: "78 kg", after: "60 kg" },
      icon: <TrendingDown className="w-5 h-5" />,
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      age: 24,
      goal: "Muscle Building",
      result: "Gained 10 kg lean muscle",
      quote: "Perfect for my fitness goals. The protein supplements and meal plan helped me bulk up the right way.",
      beforeAfter: { before: "65 kg", after: "75 kg" },
      icon: <TrendingUp className="w-5 h-5" />,
      rating: 5,
    },
  ];

  return (
    <>
      <SEO
        title="Success Stories & Transformations - Real Results | New Life Wellness Centre Kolathur, Chennai"
        description="See real transformation results from New Life Wellness Centre clients in Kolathur, Chennai, and Villivakkam. Weight loss, muscle gain, skin health, and overall wellness success stories with Herbalife nutrition. Best wellness centre success stories in Kolathur, Chennai."
        canonical="/transformations"
        keywords="Weight Loss Success Stories Kolathur, Herbalife Results Chennai, Before After Transformation Villivakkam, Wellness Success Kolathur, Transformation Stories Chennai, Weight Loss Results Villivakkam, Success Stories Kolathur, Herbalife Transformations Chennai"
      />

      {/* Hero */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Results, Real People at New Life Wellness Centre</h1>
          <p className="text-xl text-white/90">
            Be inspired by the transformations of our community members from Kolathur, Chennai, and Villivakkam at the best wellness centre and nutrition centre
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "2000+", label: "Kg Lost Combined" },
              { number: "98%", label: "Success Rate" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Every transformation starts with a decision to change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((story, index) => (
              <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Before/After Visual */}
                  <div className="mb-4 p-6 rounded-lg bg-gradient-to-r from-muted to-secondary/20 text-center">
                    <div className="flex justify-around items-center">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Before</p>
                        <p className="text-2xl font-bold">{story.beforeAfter.before}</p>
                      </div>
                      <div className="text-primary">→</div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">After</p>
                        <p className="text-2xl font-bold text-primary">{story.beforeAfter.after}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                      <span className="mr-1">{story.icon}</span>
                      {story.goal}
                    </Badge>
                    <div className="flex">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Age: {story.age}</p>

                  <div className="mb-4 p-3 rounded-lg bg-primary/10">
                    <p className="text-sm font-semibold text-primary">{story.result}</p>
                  </div>

                  <p className="text-muted-foreground text-sm italic">
                    "{story.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Your Story Starts Here</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of satisfied clients who've transformed their lives with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-consultation" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
              Start Your Transformation
            </a>
            <a href="/programs" className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-border hover:bg-muted-foreground/10 font-medium transition-colors">
              View Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transformations;
