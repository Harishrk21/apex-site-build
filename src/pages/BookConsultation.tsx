import { useState } from "react";
import SEO from "@/components/SEOHelmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle, User, Mail, Phone, Target, MessageSquare, Sparkles } from "lucide-react";

/**
 * Notes:
 * - This sends form data to FormSubmit (https://formsubmit.co) via fetch using FormData.
 * - Replace RECIPIENT_EMAIL with the Zoho mailbox you want to receive mails to.
 * - First time you submit, FormSubmit will send a verification email to that address — click the confirm link.
 * - FormSubmit accepts form-encoded / multipart posts and will forward email to the recipient.
 */

const RECIPIENT_EMAIL = "info@kolathurwellnesscentre.com"; // ← change if you want another mail
const FORM_SUBMIT_URL = `https://formsubmit.co/${RECIPIENT_EMAIL}`;

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    preferredTime: "",
    message: "",
  });
  // Submission state
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.goal &&
    formData.preferredTime;

  // success modal close
  const closeSuccessModal = () => {
    setSubmissionStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Build FormData expected by FormSubmit
      const payload = new FormData();
      // Hidden fields for FormSubmit behaviour
      payload.append("_subject", "New Consultation Booking Request - Website");
      payload.append("_captcha", "false");
      payload.append("_template", "table");

      // Add all visible fields
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("goal", formData.goal);
      payload.append("preferredTime", formData.preferredTime);
      payload.append("message", formData.message || "Not provided");
      payload.append("_formType", "Consultation Booking");

      // Optional: capture page URL
      if (typeof window !== "undefined") {
        payload.append("page_url", window.location.href);
      }

      // OPTIONAL honeypot field (leave empty for users)
      payload.append("_honey", "");

      // Send via fetch to FormSubmit
      const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        body: payload,
        // Note: do NOT set Content-Type; browser will set multipart/form-data automatically with boundary
      });

      // FormSubmit returns a redirect (303) normally; fetch will follow it and typically return 200/ok.
      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          goal: "",
          preferredTime: "",
          message: "",
        });
      } else {
        // Some hosts return 200 even on errors; handle conservative check
        console.error("Form submit returned non-OK status:", response.status, await response.text());
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
            Your consultation has been booked successfully! We will contact you shortly to confirm your appointment.
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
        title="Book Free Wellness Consultation - New Life Wellness Centre Kolathur, Chennai, Villivakkam"
        description="Book your free wellness consultation with certified Herbalife nutrition coaches at New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam. Get personalized nutrition guidance, wellness evaluation, and transformation support. No obligation, 100% free consultation."
        canonical="/book-consultation"
        keywords="Book Consultation Kolathur, Free Wellness Check Chennai, Herbalife Coach Consultation Villivakkam, Weight Loss Consultation Kolathur, Nutrition Consultation Chennai, Wellness Consultation Villivakkam, Free Consultation Kolathur, Best Wellness Centre Consultation Chennai"
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
              ✨ 100% Free Consultation - No Obligation
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              Book Your Free Consultation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards your wellness goals with personalized Herbalife nutrition guidance from certified coaches
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 -mt-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Benefits Sidebar */}
              <div className="space-y-6">
                <Card className="border-none shadow-2xl bg-gradient-to-br from-green-600 to-yellow-500 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Calendar className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">100% Free</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          No obligation, just expert guidance for your wellness journey
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-black mb-6 text-gray-800 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-green-700" />
                      What to Expect
                    </h2>
                    <div className="space-y-4">
                      {[
                        { text: "Comprehensive health assessment", icon: "📋" },
                        { text: "Personalized nutrition strategy", icon: "🎯" },
                        { text: "Product recommendations", icon: "💊" },
                        { text: "Goal setting & timeline", icon: "📅" },
                        { text: "Ongoing support plan", icon: "🤝" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <span className="text-gray-700 font-medium pt-1">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          We'll get back to you within 24 hours to confirm your appointment
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Consultation Form */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-700 via-emerald-600 to-yellow-600 p-8">
                    <h2 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
                      <Calendar className="w-10 h-10" />
                      Book Your Consultation
                    </h2>
                    <p className="text-white/90">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>
                  <CardContent className="p-8">
                    {submissionStatus === "error" && (
                      <div className="p-4 mb-6 rounded-xl bg-red-100 border border-red-400 text-red-700 font-semibold flex items-center justify-center transition-all duration-300">
                        <span className="text-2xl mr-3">⚠️</span>
                        Please fill out all the required fields.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                          <User className="w-4 h-4 text-green-700" />
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="border-2 border-gray-200 focus:border-green-600 transition-all rounded-xl h-12 w-full"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                            <Mail className="w-4 h-4 text-yellow-600" />
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="border-2 border-gray-200 focus:border-yellow-500 transition-all rounded-xl h-12 w-full"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                            <Phone className="w-4 h-4 text-emerald-600" />
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98849 88988"
                            className="border-2 border-gray-200 focus:border-emerald-500 transition-all rounded-xl h-12 w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="goal" className="block text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-orange-600" />
                          Primary Wellness Goal *
                        </label>
                        <Select required value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-green-600 transition-all rounded-xl h-12">
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
                        <label htmlFor="time" className="block text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          Preferred Time *
                        </label>
                        <Select required value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-yellow-400 transition-all rounded-xl h-12">
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
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-teal-600" />
                          Additional Information (Optional)
                        </label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us more about your health goals, current challenges, or any questions..."
                          className="border-2 border-gray-200 focus:border-green-600 transition-all rounded-xl resize-none w-full"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={!isFormValid || isSubmitting}
                        className={`w-full h-14 text-lg font-bold shadow-2xl transition-all duration-300 rounded-xl group ${
                          isFormValid && !isSubmitting
                            ? "bg-gradient-to-r from-green-700 via-emerald-600 to-yellow-600 hover:from-green-800 hover:via-emerald-700 hover:to-yellow-700 hover:shadow-3xl text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <Calendar className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform inline" />
                        {isSubmitting ? "Submitting..." : "Book My Free Consultation"}
                      </Button>

                      <p className="text-xs text-center text-gray-500">
                        By booking, you agree to receive communication from New Life Wellness Centre
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookConsultation;
