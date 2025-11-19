import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, CheckCircle2, Clock, FileText, Heart, TrendingUp, Building2, Newspaper, Calendar, MessageCircle } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import CoachProfile from "@/components/CoachProfile";
import GalleryLightbox from "@/components/GalleryLightbox";

const About = () => {
  // Sample gallery images - replace with actual images
  const galleryImages = [
    aboutHero,
    aboutHero,
    aboutHero,
    aboutHero,
    aboutHero,
    aboutHero,
    aboutHero,
    aboutHero,
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Newlife Wellness Centre",
    "url": "https://newlifewellnesscentre.com",
    "logo": "https://newlifewellnesscentre.com/logo.png",
    "description": "Certified Herbalife nutrition center in Kolathur, Chennai providing personalized wellness coaching and nutrition programs",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolathur",
      "addressRegion": "Chennai",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/newlifewellnesscentre",
      "https://www.instagram.com/newlifewellnesscentre"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Newlife Wellness Coach",
    "jobTitle": "Certified Herbalife Nutrition Coach",
    "worksFor": {
      "@type": "Organization",
      "name": "Newlife Wellness Centre"
    },
    "description": "Certified Herbalife nutrition coach with 10+ years of experience helping clients achieve their wellness goals"
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Newlife Wellness Centre",
    "description": "Learn about our mission to transform lives through Herbalife nutrition and personalized wellness coaching in Chennai",
    "mainEntity": {
      "@type": "Organization",
      "name": "Newlife Wellness Centre"
    }
  };

  return (
    <>
      <SEO
        title="About New Life Wellness Centre - Best Wellness & Nutrition Centre in Kolathur, Chennai, Villivakkam"
        description="New Life Wellness Centre is the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam. Certified Herbalife nutrition coach with 10+ years of experience helping clients achieve their wellness goals. Learn about our mission, vision, and commitment to transforming lives through personalized nutrition."
        canonical="/about"
        schema={aboutPageSchema}
        keywords="About New Life Wellness Centre Kolathur, Best Wellness Centre Chennai, Nutrition Centre Villivakkam, Herbalife Coach Kolathur, Certified Nutrition Coach Chennai, Wellness Centre About, Herbalife Nutrition Centre Villivakkam"
      />
      
      {/* Structured Data for Organization and Person */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutHero})`,
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About New Life Wellness Centre - Best Wellness & Nutrition Centre in Kolathur, Chennai</h1>
          <p className="text-xl">Transforming lives through personalized Herbalife nutrition and wellness in Kolathur, Chennai, and Villivakkam</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Story - New Life Wellness Centre in Kolathur, Chennai</h2>
            <div className="space-y-6 text-lg text-muted-foreground text-left">
              <p>
                New Life Wellness Centre was founded in <strong className="text-foreground">2015</strong> with a simple yet powerful vision: to be the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam, helping people achieve their health and wellness goals through the science-backed nutrition of Herbalife products combined with personalized coaching.
              </p>
              <p>
                What started as a small wellness center in Kolathur, Chennai, has grown into the most trusted wellness and nutrition centre in Kolathur, Chennai, and Villivakkam, serving hundreds of individuals seeking to transform their lives. Our journey began when our founder recognized the need for accessible, science-backed nutrition solutions combined with genuine, personalized support in the Kolathur and Villivakkam areas of Chennai.
              </p>
              <p>
                Over the years, we have helped hundreds of individuals achieve their health goals—from weight management to improved energy, better skin, and overall wellness. Our certified Herbalife coaches bring years of experience and a deep passion for helping others live their best lives.
              </p>
              <p>
                We believe that everyone deserves to feel their best. Whether your goal is weight loss, weight gain, better skin, improved energy, or overall wellness, we're here to guide you every step of the way with personalized nutrition plans tailored to your unique needs.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Why We Chose Herbalife</h3>
                <p className="mb-4">
                  After extensive research and personal experience, we chose to partner with Herbalife Nutrition because of their commitment to science-backed products, rigorous quality control, and 40+ years of global wellness leadership. Herbalife's comprehensive product range allows us to create truly personalized nutrition plans for each client.
                </p>
                <Button asChild variant="outline" className="mt-2">
                  <Link to="/herbalife-story">Learn More About Herbalife →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals in Chennai and beyond to take control of their health through personalized nutrition, expert coaching, and the proven effectiveness of Herbalife products. We are committed to creating lasting transformations that go beyond physical appearance to improve overall quality of life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted wellness center in Chennai, known for delivering exceptional results and fostering a supportive community where everyone feels motivated to achieve their health goals. We envision a healthier, happier community where proper nutrition is accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Coach */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet the Coach</h2>
            <p className="text-xl text-muted-foreground">Your dedicated wellness partner</p>
          </div>
          <CoachProfile
            name="Newlife Wellness Coach"
            certifications={[
              "Certified Herbalife Nutrition Coach",
              "Herbalife Wellness Coach",
              "Nutrition & Wellness Specialist"
            ]}
            yearsOfExperience={10}
            bio="With over 10 years of experience in nutrition and wellness coaching, our certified Herbalife coach has helped hundreds of clients achieve their health goals. Passionate about empowering individuals to take control of their health, our coach combines scientific knowledge with personalized support to create sustainable lifestyle transformations. Whether you're looking to lose weight, gain weight, improve your skin, or enhance your overall wellness, you'll receive expert guidance tailored to your unique needs and goals."
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Approach (Methodology)</h2>
            <p className="text-xl text-muted-foreground">A proven process for lasting results</p>
          </div>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-primary/20" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8" />,
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive health and lifestyle evaluation to understand your unique needs, goals, and challenges",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  step: "02",
                  title: "Personalized Plan",
                  description: "Tailored nutrition and wellness strategy designed specifically for your body and lifestyle",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  step: "03",
                  title: "Product + Coaching",
                  description: "Guided product selection and meal planning combined with ongoing coaching support",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  step: "04",
                  title: "Progress Tracking",
                  description: "Regular check-ins, adjustments, and celebrations of your journey toward better health",
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 p-6 rounded-lg bg-card border border-border hover:shadow-wellness transition-all">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Centre Tour Gallery */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Centre Tour</h2>
            <p className="text-xl text-muted-foreground">Take a virtual tour of our wellness center</p>
          </div>
          <GalleryLightbox images={galleryImages} alt="Newlife Wellness Centre" />
        </div>
      </section>

      {/* Certifications & Press */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certifications & Press</h2>
            <p className="text-xl text-muted-foreground">Recognized excellence in wellness</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                <ul className="space-y-3">
                  {[
                    "Certified Herbalife Nutrition Coach",
                    "Herbalife Wellness Coach Certification",
                    "Nutrition & Wellness Specialist Training",
                    "CPR & First Aid Certified",
                  ].map((cert, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-wellness">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Newspaper className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Press & Recognition</h3>
                <ul className="space-y-3">
                  {[
                    "Featured in Local Health & Wellness Publications",
                    "Community Health Awareness Programs",
                    "Corporate Wellness Partnership Programs",
                    "Client Success Stories & Testimonials",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Logo Placeholders */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <Building2 className="w-16 h-16 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Herbalife Certified</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Certified Coach</p>
            </div>
            <div className="text-center">
              <Newspaper className="w-16 h-16 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Press Featured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">Meet the experts dedicated to your wellness</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Main Coach",
                role: "Certified Herbalife Nutrition Coach",
                description: "Lead wellness coach with 10+ years of experience",
              },
              {
                name: "Nutrition Specialist",
                role: "Nutrition & Wellness Advisor",
                description: "Expert in personalized nutrition planning",
              },
              {
                name: "Support Coach",
                role: "Wellness Support Specialist",
                description: "Dedicated to your ongoing success and motivation",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-wellness text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free consultation today and take the first step toward a healthier, happier you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg"
            >
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-5 h-5" />
                Book a Free Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
