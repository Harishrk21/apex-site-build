import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to backend
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Newlife Wellness Centre",
    "description": "Get in touch with Newlife Wellness Centre in Kolathur, Chennai for wellness consultation and Herbalife nutrition guidance"
  };

  return (
    <>
      <SEO
        title="Contact New Life Wellness Centre - Best Wellness & Nutrition Centre in Kolathur, Chennai, Villivakkam"
        description="Contact New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam. Visit us, call us, or send a message for personalized wellness consultation and Herbalife nutrition guidance. Certified Herbalife nutrition coaches ready to help you achieve your health goals."
        canonical="/contact"
        schema={schema}
        keywords="Contact Wellness Centre Kolathur, Contact Nutrition Centre Chennai, Wellness Centre Contact Villivakkam, Herbalife Coach Contact Kolathur, Nutrition Consultation Chennai, Wellness Centre Phone Villivakkam, Visit Wellness Centre Kolathur, Best Wellness Centre Contact Chennai"
      />

      {/* Hero */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact New Life Wellness Centre in Kolathur, Chennai</h1>
          <p className="text-xl text-white/90">
            Get in touch with the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam. We're here to help you start your wellness journey with personalized Herbalife nutrition guidance.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Visit New Life Wellness Centre in Kolathur, Chennai</h2>
              <p className="text-muted-foreground mb-6">Best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam. Certified Herbalife nutrition coaches ready to help you achieve your health goals.</p>
              
              <div className="space-y-6">
                <Card className="border-none shadow-wellness">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Kolathur, Chennai<br />
                          Villivakkam, Chennai<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-wellness">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+919876543210" className="text-primary hover:underline">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-wellness">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@newlifewellness.com" className="text-primary hover:underline">
                          info@newlifewellness.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-wellness">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Hours</h3>
                        <p className="text-muted-foreground">
                          Mon - Sat: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-none shadow-wellness-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your wellness goals..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-wellness">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Visit New Life Wellness Centre - Best Wellness & Nutrition Centre in Kolathur, Chennai</h2>
            <p className="text-muted-foreground">Find the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam. Visit us for personalized Herbalife nutrition consultation and wellness programs.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-wellness-lg h-[400px] bg-muted-foreground/10 flex items-center justify-center">
            <p className="text-muted-foreground">
              Google Maps integration would be placed here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
