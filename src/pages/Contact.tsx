import React, { useRef, useState } from "react";
import SEO from "@/components/SEOHelmet";
import { baseSEO, seoPages } from "@/config/seoConfig";
import { organizationSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  User,
  Send,
  Sparkles,
  CheckCircle,
} from "lucide-react";

/**
 * Notes:
 * - This sends form data to FormSubmit (https://formsubmit.co) via fetch using FormData.
 * - Replace RECIPIENT_EMAIL with the Zoho mailbox you want to receive mails to.
 * - First time you submit, FormSubmit will send a verification email to that address — click the confirm link.
 * - FormSubmit accepts form-encoded / multipart posts and will forward email to the recipient.
 */

const RECIPIENT_EMAIL = "info@kolathurwellnesscentre.com"; // ← change if you want another mail
const FORM_SUBMIT_URL = `https://formsubmit.co/${RECIPIENT_EMAIL}`;

const contactSEO = seoPages.contact;
const contactBreadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: `${baseSEO.baseUrl}/` },
  { name: "Contact", url: `${baseSEO.baseUrl}/contact` },
]);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  // Submission state
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: "weight-loss", name: "Lose Weight", icon: "⚖️", duration: "12 weeks", color: "from-green-600 to-yellow-500", description: "Sustainable transformation" },
    { id: "weight-gain", name: "Gain Weight", icon: "💪", duration: "16 weeks", color: "from-emerald-500 to-lime-500", description: "Healthy muscle building" },
    { id: "skin-care", name: "Skin Care", icon: "✨", duration: "8 weeks", color: "from-yellow-400 to-amber-500", description: "Radiance from within" },
    { id: "healthy-breakfast", name: "Healthy Breakfast", icon: "🥗", duration: "Ongoing", color: "from-green-500 to-emerald-500", description: "Start your day right" },
    { id: "bone-joint", name: "Bone & Joint Health", icon: "🦴", duration: "12 weeks", color: "from-yellow-600 to-orange-500", description: "Strength and mobility" },
    { id: "gain-muscle", name: "Gain Muscle", icon: "💪", duration: "16 weeks", color: "from-lime-600 to-green-600", description: "Build lean muscle mass" },
    { id: "heart-health", name: "Heart Health", icon: "❤️", duration: "12 weeks", color: "from-red-500 to-yellow-500", description: "Cardiovascular wellness" },
    { id: "brain-immune", name: "Brain & Immune Health", icon: "🧠", duration: "12 weeks", color: "from-green-700 to-yellow-600", description: "Enhanced cognitive function" },
    { id: "immunity", name: "Immunity Support", icon: "🛡️", duration: "8 weeks", color: "from-emerald-600 to-teal-600", description: "Strengthen immune system" },
    { id: "eye-health", name: "Eye Health", icon: "👁️", duration: "12 weeks", color: "from-lime-500 to-yellow-400", description: "Protect and enhance vision" },
    { id: "digestive", name: "Digestive Health", icon: "🌿", duration: "8 weeks", color: "from-green-700 to-lime-600", description: "Improved gut health" },
    { id: "mens-health", name: "Men's Health", icon: "👨", duration: "12 weeks", color: "from-emerald-700 to-green-700", description: "Tailored wellness support" },
    { id: "womens-health", name: "Women's Health", icon: "👩", duration: "12 weeks", color: "from-yellow-500 to-amber-500", description: "Comprehensive wellness" },
    { id: "active-lifestyle", name: "Active Lifestyle", icon: "⚡", duration: "Ongoing", color: "from-green-500 to-yellow-500", description: "Performance nutrition" },
    { id: "sleep-stress", name: "Sleep & Stress", icon: "😴", duration: "8 weeks", color: "from-emerald-600 to-lime-600", description: "Better rest and calm" },
    { id: "diet-plans", name: "Diet Plans", icon: "🍽️", duration: "Ongoing", color: "from-teal-600 to-green-600", description: "Customized meal plans" },
    { id: "overall-wellbeing", name: "Overall Wellbeing", icon: "🌟", duration: "Ongoing", color: "from-yellow-500 to-amber-400", description: "Holistic health" },
    { id: "complete-wellness", name: "Complete Wellness", icon: "💎", duration: "Ongoing", color: "from-green-800 to-yellow-700", description: "Comprehensive program" },
    { id: "kids-nutrition", name: "Kids Nutrition", icon: "👶", duration: "Ongoing", color: "from-lime-400 to-emerald-400", description: "Healthy growth support" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.service &&
    formData.message;

  // success modal close
  const closeSuccessModal = () => {
    setSubmissionStatus(null);
  };

  // Main submit — uses FormSubmit endpoint via FormData
  const handleSubmit = async () => {
    if (!isFormValid) {
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedService = services.find((s) => s.id === formData.service);
      const serviceName = selectedService ? selectedService.name : formData.service;

      // Build FormData expected by FormSubmit
      const payload = new FormData();
      // Hidden fields for FormSubmit behaviour
      payload.append("_subject", "New Contact Form Message - Website");
      // You can set _next to a URL if you want FormSubmit to redirect (we are using fetch so we won't be redirected)
      // payload.append("_next", "https://yourdomain.com/thank-you");
      payload.append("_captcha", "false");
      payload.append("_template", "table");

      // Add all visible fields
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("service", serviceName);
      payload.append("preferredDate", formData.preferredDate || "Not provided");
      payload.append("message", formData.message);
      payload.append("_formType", "Contact Form");

      // Optional: capture page URL
      if (typeof window !== "undefined") {
        payload.append("page_url", window.location.href);
      }

      // OPTIONAL honeypot field (leave empty for users)
      payload.append("_honey", "");

      // Send via fetch to FormSubmit
      const resp = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        body: payload,
        // Note: do NOT set Content-Type; browser will set multipart/form-data automatically with boundary
      });

      // FormSubmit returns a redirect (303) normally; fetch will follow it and typically return 200/ok.
      if (resp.ok) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          message: "",
        });
      } else {
        // Some hosts return 200 even on errors; handle conservative check
        console.error("Form submit returned non-OK status:", resp.status, await resp.text());
        setSubmissionStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
      // hide error after few seconds automatically
      if (submissionStatus === "error") setTimeout(() => setSubmissionStatus(null), 5000);
    }
  };

  // Success modal
  const SuccessModal = () => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300"
      style={{ animation: "fadeIn 0.3s ease-out" }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Card className="border-none shadow-2xl bg-white max-w-sm w-full text-center transition-transform duration-300 transform scale-100">
        <div className="p-8">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <h3 className="text-3xl font-black mb-2 text-green-800">Success!</h3>
          <p className="text-gray-600 mb-6">
            Your details have been submitted successfully. We will review your request and get back to you within 24 hours.
          </p>
          <Button
            onClick={closeSuccessModal}
            className="w-full h-12 text-lg font-bold shadow-lg transition-all duration-300 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white"
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <>
      <SEO
        title={contactSEO.title}
        description={contactSEO.description}
        keywords={contactSEO.keywords}
        canonical="/contact"
        schema={[organizationSchema, contactBreadcrumbSchema]}
      />
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-lime-50 font-sans">
      {submissionStatus === "success" && <SuccessModal />}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-yellow-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center px-4">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            ✨ Best Wellness Centre in Kolathur, Chennai
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
            Get In Touch With Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Start your wellness journey today with personalized Herbalife nutrition guidance from certified coaches
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards (unchanged) */}
            <div className="space-y-6">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-green-600 to-yellow-500 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        No.22, Subramaniyapuram,<br />
                        1st Street, Kolathur,<br />
                        Chennai 600099,<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Call Us</h3>
                      <a href="tel:+919884988988" className="text-white/90 hover:text-white text-lg font-semibold transition-colors">
                        +91 98849 88988
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email Us</h3>
                      <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-white/90 hover:text-white transition-colors break-all">
                        {RECIPIENT_EMAIL}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl bg-gradient-to-br from-yellow-600 to-orange-500 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Working Hours</h3>
                      <p className="text-white/90 text-sm">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-700 via-emerald-600 to-yellow-600 p-8">
                  <h2 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
                    <Send className="w-10 h-10" />
                    Send Us a Message
                  </h2>
                  <p className="text-white/90">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                <CardContent className="p-8">
                  {submissionStatus === "error" && (
                    <div className="p-4 mb-6 rounded-xl bg-red-100 border border-red-400 text-red-700 font-semibold flex items-center justify-center transition-all duration-300">
                      <span className="text-2xl mr-3">⚠️</span>
                      Please fill out all the required fields and select a service.
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                          <User className="w-4 h-4 text-green-700" />
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="border-2 border-gray-200 focus:border-green-600 transition-all rounded-xl h-12 w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-yellow-600" />
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="border-2 border-gray-200 focus:border-yellow-500 transition-all rounded-xl h-12 w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-emerald-600" />
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98849 88988"
                          className="border-2 border-gray-200 focus:border-emerald-500 transition-all rounded-xl h-12 w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="preferredDate" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-yellow-500" />
                          Preferred Date
                        </label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="border-2 border-gray-200 focus:border-yellow-400 transition-all rounded-xl h-12 w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3 text-gray-700 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-600" />
                        Select Your Service *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: service.id })}
                            className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-300 ${
                              formData.service === service.id
                                ? `bg-gradient-to-br ${service.color} text-white border-transparent shadow-xl scale-105`
                                : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                            }`}
                          >
                            <div className="text-3xl mb-2">{service.icon}</div>
                            <div className={`font-bold text-sm mb-1 ${formData.service === service.id ? "text-white" : "text-gray-800"}`}>
                              {service.name}
                            </div>
                            <div className={`text-xs ${formData.service === service.id ? "text-white/80" : "text-gray-500"}`}>
                              {service.duration}
                            </div>
                            {formData.service === service.id && (
                              <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>

                      <style>{`
                        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
                        .custom-scrollbar::-webkit-scrollbar-thumb { background: #a7f3d0; border-radius: 10px; }
                        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #6ee7b7; }
                      `}</style>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your wellness goals and any specific concerns..."
                        className="border-2 border-gray-200 focus:border-green-600 transition-all rounded-xl resize-none w-full"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      disabled={!isFormValid || isSubmitting}
                      className={`w-full h-14 text-lg font-bold shadow-2xl transition-all duration-300 rounded-xl group ${
                        isFormValid && !isSubmitting
                          ? "bg-gradient-to-r from-green-700 via-emerald-600 to-yellow-600 hover:from-green-800 hover:via-emerald-700 hover:to-yellow-700 hover:shadow-3xl text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-lime-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-green-700 to-yellow-600 text-white rounded-full text-sm font-bold">
              📍 FIND US
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-emerald-600 to-yellow-600">
              Visit Our Wellness Centre
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located in the heart of Kolathur, Chennai - easily accessible from Villivakkam and surrounding areas
            </p>
          </div>
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1875!2d80.2071!3d13.1355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA4JzA3LjgiTiA4MMKwMTInMjUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="New Life Wellness Centre Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gradient-to-br from-green-700 via-emerald-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose New Life Wellness?</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-xl mb-2">Certified Coaches</h3>
              <p className="text-white/80 text-sm">Expert Herbalife nutrition guidance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-xl mb-2">19+ Services</h3>
              <p className="text-white/80 text-sm">Comprehensive wellness programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-bold text-xl mb-2">Personalized Care</h3>
              <p className="text-white/80 text-sm">Tailored to your unique goals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-bold text-xl mb-2">Prime Location</h3>
              <p className="text-white/80 text-sm">Easy access from Kolathur & Villivakkam</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
