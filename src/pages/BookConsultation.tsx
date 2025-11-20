import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzybgbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "New Consultation Booking Request",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          goal: formData.goal,
          preferredTime: formData.preferredTime,
          message: formData.message,
          _formType: "Consultation Booking",
        }),
      });

      if (response.ok) {
        toast.success("Consultation booked! We'll contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          goal: "",
          preferredTime: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Failed to submit. Please try again or contact us directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Book Free Wellness Consultation - New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Book your free wellness consultation with certified Herbalife nutrition coaches at New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam. Get personalized nutrition guidance, wellness evaluation, and transformation support. No obligation, 100% free consultation."
        canonical="/book-consultation"
        keywords="Book Consultation Kolathur, Free Wellness Check Chennai, Herbalife Coach Consultation Villivakkam, Weight Loss Consultation Kolathur, Nutrition Consultation Chennai, Wellness Consultation Villivakkam, Free Consultation Kolathur, Best Wellness Centre Consultation Chennai"
      />

      {/* Hero */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Free Consultation</h1>
          <p className="text-xl text-white/90">
            Take the first step towards your wellness goals
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-4">
                {[
                  "Comprehensive health assessment",
                  "Personalized nutrition strategy",
                  "Product recommendations",
                  "Goal setting & timeline",
                  "Ongoing support plan",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8 border-none shadow-wellness">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold">100% Free</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No obligation, just expert guidance for your wellness journey
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-wellness-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="mt-2"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98849 88988"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="goal">Primary Wellness Goal *</Label>
                      <Select required value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weight-loss">Weight Loss</SelectItem>
                          <SelectItem value="weight-gain">Weight Gain / Muscle Building</SelectItem>
                          <SelectItem value="skin-care">Skin Health & Beauty</SelectItem>
                          <SelectItem value="energy">Energy & Vitality</SelectItem>
                          <SelectItem value="general-wellness">General Wellness</SelectItem>
                          <SelectItem value="sports-nutrition">Sports Nutrition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select required value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                          <SelectItem value="weekend">Weekend</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information (Optional)</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your health goals, current challenges, or any questions..."
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-wellness" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Book My Free Consultation"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By booking, you agree to receive communication from Newlife Wellness Centre
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookConsultation;
