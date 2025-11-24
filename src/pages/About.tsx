import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, CheckCircle2, FileText, Heart, TrendingUp, Building2, Newspaper, Calendar, MessageCircle, Sparkles, Trophy, Star } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import GalleryLightbox from "@/components/GalleryLightbox";

const About = () => {
  const galleryImages = [
    "/ce1.jpeg",
    "/ce2.jpeg",
    "/ce3.jpeg",
    "/ce4.jpeg",
    "/ce5.jpeg",
    "/ce6.jpeg",
    "/centre1.jpeg",
    "/acheive.jpeg"
  ];
  

  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Newlife Wellness Centre",
      "url": "https://newlifewellnesscentre.com",
      "logo": "https://newlifewellnesscentre.com/logo.png",
      "description": "Certified Herbalife nutrition center in Kolathur, Chennai providing personalized wellness coaching",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolathur",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Avinash & Mahak",
      "jobTitle": "Certified Herbalife Wellness Coach",
      "worksFor": { "@type": "Organization", "name": "Newlife Wellness Centre" }
    }
  };

  const missionVisionData = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      content: "Empowering individuals across Chennai to transform their health through personalized nutrition, expert coaching, and Herbalife's proven effectiveness. We create lasting transformations that enhance overall quality of life."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      content: "To be Chennai's most trusted wellness center, delivering exceptional results and fostering a supportive community where proper nutrition and wellness are accessible to all."
    }
  ];

  const approachSteps = [
    { icon: <FileText className="w-8 h-8" />, step: "01", title: "Assessment", desc: "Comprehensive health evaluation to understand your unique needs and goals" },
    { icon: <Target className="w-8 h-8" />, step: "02", title: "Personalized Plan", desc: "Tailored nutrition strategy designed specifically for your lifestyle" },
    { icon: <Heart className="w-8 h-8" />, step: "03", title: "Coaching & Support", desc: "Guided product selection with ongoing personalized coaching" },
    { icon: <TrendingUp className="w-8 h-8" />, step: "04", title: "Progress Tracking", desc: "Regular check-ins and celebrating your wellness journey" }
  ];

  const certifications = [
    "Certified Herbalife Wellness Coach",
    "Nutrition & Lifestyle Specialist",
    "10 Years Professional Experience",
    "1500+ Families Transformed"
  ];

  const recognitions = [
    "Ranked Among India's Leading Wellness Coaches",
    "Featured in Health & Wellness Publications",
    "Corporate Wellness Programs",
    "Community Health Champion"
  ];

  return (
    <>
      <SEO
        title="About New Life Wellness Centre - Best Wellness & Nutrition Centre in Kolathur, Chennai"
        description="Led by Avinash & Mahak, certified Herbalife coaches with 10 years experience. 1500+ families transformed. Best wellness centre in Kolathur, Chennai."
        canonical="/about"
        keywords="About New Life Wellness Centre, Best Wellness Coach Chennai, Avinash Mahak Herbalife, Nutrition Centre Kolathur"
      />
      
      <script type="application/ld+json">{JSON.stringify(schemas.organization)}</script>
      <script type="application/ld+json">{JSON.stringify(schemas.person)}</script>

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://herbalnutri.co.in/wp-content/uploads/2025/08/Herbalife-Nutrition-Products-for-Wellness-scaled.jpg')`,
  }}
/>
        <div className="relative z-10 text-center text-white max-w-5xl px-4 sm:px-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-semibold">Transforming Lives Since 2015</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
            Your Wellness Journey<br />Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 px-2">Best Wellness & Nutrition Centre in Kolathur, Chennai</p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-2xl text-sm sm:text-base">
            <Link to="/book-consultation">Start Your Transformation</Link>
          </Button>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-600 mx-auto rounded-full" />
          </div>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground">
              Founded in <strong className="text-primary">2015</strong>, New Life Wellness Centre has grown from a vision to become Kolathur's most trusted wellness destination.
            </p>
            <p>
              What began as a passion to help people achieve their health goals has blossomed into a thriving community of wellness. We've proudly served hundreds of individuals in Kolathur, Chennai, and Villivakkam, transforming lives through science-backed Herbalife nutrition and personalized coaching.
            </p>
            <p>
              Our journey is powered by a simple belief: <strong>everyone deserves to feel their absolute best</strong>. From weight management to radiant skin, sustained energy to complete wellness – we're with you every step of the way.
            </p>
            <Card className="mt-10 border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-green-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Why Herbalife?</h3>
                    <p className="text-muted-foreground mb-4">
                      After extensive research and transformative personal results, we partnered with Herbalife Nutrition for their 45 years of global leadership, rigorous science-backed formulations, and comprehensive product range that enables truly personalized wellness solutions.
                    </p>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Link to="/herbalife-story">Discover Herbalife's Legacy →</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-green-50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {missionVisionData.map((item, idx) => (
              <Card key={idx} className="border-none shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 bg-white">
                <CardContent className="p-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-green-600 text-white mb-6 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold mb-5 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Coach - ENHANCED */}
      <section className="py-24 bg-gradient-to-b from-white via-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary">Meet Your Wellness Partners</span>
            </div>
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Avinash & Mahak
            </h2>
            <p className="text-2xl text-muted-foreground">Certified Herbalife Wellness Coaches Since 2015</p>
          </div>

          <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-primary/5">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 lg:items-stretch">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:min-h-full">
                  <div className="relative w-full max-w-md flex items-center justify-center">
                    <img 
                      src="/mentor.jpeg" 
                      alt="Avinash & Mahak - Wellness Coaches" 
                      className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 shadow-xl">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base md:text-lg font-bold text-foreground">India's Leading Wellness Coaches</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span>1500+ Families</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span>10 Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    <p className="text-lg sm:text-xl font-semibold text-foreground">
                      💚 Changing Lives Through Health, Wealth & Happiness
                    </p>
                    <p>
                      Avinash & Mahak are dedicated weight loss mentors with extensive expertise in helping individuals achieve their fitness dreams. They understand that <strong className="text-foreground">every person is unique</strong>, which is why they offer personalized guidance tailored to each client's specific needs and goals.
                    </p>
                    <p>
                      With a <strong className="text-foreground">holistic approach</strong>, they empower clients to make lasting lifestyle changes that transcend weight loss. Their focus is on promoting complete well-being, helping clients transform their health for the long term.
                    </p>
                    <p className="text-primary font-semibold italic text-sm sm:text-base md:text-lg">
                      "We've personally achieved incredible results through Herbalife Nutrition, and our entire family has embraced this healthy lifestyle since 2015. With over 1500 families transformed, our mission is to help many more achieve their best health and wellness! ✨"
                    </p>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
                      {[
                        { label: "Years Experience", value: "10", icon: <Award className="w-5 h-5" /> },
                        { label: "Families Helped", value: "1500+", icon: <Users className="w-5 h-5" /> },
                        { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-5 h-5" /> },
                        { label: "Active Clients", value: "1500+", icon: <Heart className="w-5 h-5" /> }
                      ].map((stat, i) => (
                        <div key={i} className="bg-primary/5 rounded-xl p-3 sm:p-4 text-center border border-primary/10">
                          <div className="flex justify-center mb-1.5 sm:mb-2 text-primary">{stat.icon}</div>
                          <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                          <div className="text-xs sm:text-xs text-muted-foreground leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-4 sm:p-5 md:p-6 text-white mt-6 sm:mt-8">
                      <p className="text-center font-bold text-sm sm:text-base md:text-lg">
                        🎯 Dedicated to helping every Indian achieve complete 360° fitness
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-muted-foreground">A systematic approach to lasting transformation</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-green-500 to-primary rounded-full" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="relative z-10 p-8 rounded-2xl bg-white border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-green-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-4xl font-black text-primary/20 mb-3">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Centre Tour */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Meet Our Mentors & Wellness Centre
            </h2>
            <p className="text-xl text-muted-foreground">Experience our welcoming wellness space</p>
          </div>
          <GalleryLightbox 
          images={galleryImages} 
          alt="Newlife Wellness Centre"
        />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Excellence & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Certifications", items: certifications },
              { icon: <Newspaper className="w-8 h-8" />, title: "Recognition", items: recognitions }
            ].map((section, idx) => (
              <Card key={idx} className="border-none shadow-2xl hover:shadow-primary/20 transition-all">
                <CardContent className="p-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-green-600 text-white mb-6 shadow-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-green-600 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-extrabold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
            Join 1500+ families who've already started their wellness journey. Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-8 py-6">
              <Link to="/book-consultation">
                <Calendar className="mr-2 w-6 h-6" />
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6">
              <a href="https://wa.me/919884988988" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-6 h-6" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;