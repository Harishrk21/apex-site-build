import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Target, TrendingDown, TrendingUp } from "lucide-react";

const WeightManagement = () => {
  return (
    <>
      <SEO
        title="Weight Management Program - Weight Loss & Weight Gain | New Life Wellness Centre Kolathur, Chennai"
        description="Personalized weight loss and weight gain programs with Herbalife nutrition at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Science-backed metabolism support for sustainable results. Best weight management program in Kolathur, Chennai."
        canonical="/weight-management"
        keywords="Weight Loss Program Kolathur, Weight Gain Program Chennai, Weight Management Villivakkam, Metabolism Support Kolathur, Herbalife Weight Loss Chennai, Weight Loss Centre Villivakkam, Best Weight Management Kolathur, Nutrition Weight Loss Chennai"
      />

      {/* Hero */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Scale className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Weight Management Program - Kolathur, Chennai</h1>
          <p className="text-xl text-white/90">
            Achieve your ideal weight with personalized Herbalife nutrition and expert support at New Life Wellness Centre - the best wellness centre in Kolathur, Chennai, and Villivakkam
          </p>
        </div>
      </section>

      {/* Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Weight Loss</h2>
                <p className="text-muted-foreground mb-6">
                  Safely and effectively lose weight with our science-backed nutrition plans. Focus on fat loss while maintaining muscle mass for sustainable, long-term results.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Personalized calorie deficit plan",
                    "High-quality protein to preserve muscle",
                    "Metabolism-boosting supplements",
                    "Weekly progress tracking",
                    "Before/after measurements",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness-lg">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Weight Gain</h2>
                <p className="text-muted-foreground mb-6">
                  Build healthy muscle mass and achieve your ideal weight through proper nutrition and targeted supplementation designed for lean muscle growth.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Calorie-dense meal planning",
                    "High-protein formulas for muscle",
                    "Strength-building guidance",
                    "Regular progress monitoring",
                    "Healthy weight gain tracking",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Science of Metabolism</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your metabolism is the key to effective weight management. We help you optimize it naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nutrition Balance",
                description: "Right balance of macronutrients (protein, carbs, fats) customized for your metabolic type",
              },
              {
                title: "Meal Timing",
                description: "Strategic meal frequency and timing to keep your metabolism active throughout the day",
              },
              {
                title: "Quality Supplementation",
                description: "Herbalife products designed to support your metabolism and provide complete nutrition",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-wellness text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-3">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recommended Products</h2>
            <p className="text-xl text-muted-foreground">
              Scientifically formulated for weight management success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Formula 1 Shake",
                benefit: "Complete meal replacement",
              },
              {
                name: "Personalized Protein",
                benefit: "Muscle preservation & growth",
              },
              {
                name: "Total Control",
                benefit: "Metabolism support",
              },
            ].map((product, index) => (
              <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.benefit}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/products">View Product</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Body?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your free consultation and get a personalized weight management plan
          </p>
          <Button size="lg" asChild className="gradient-wellness shadow-wellness-lg">
            <Link to="/book-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default WeightManagement;
