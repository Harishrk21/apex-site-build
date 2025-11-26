import React, { useState, useEffect } from 'react';
import SEO from "@/components/SEOHelmet";
import { baseSEO, seoPages } from "@/config/seoConfig";
import { organizationSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
import { ArrowRight, Heart, Users, Target, Star, Phone, MessageCircle, MapPin, Award, TrendingUp, Shield, ChevronLeft, ChevronRight, Check, Sparkles, Zap, Calendar, ClipboardCheck, Menu, X } from 'lucide-react';
import heros from '/heros.png';

const homeSEO = seoPages.home;
const homeBreadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: `${baseSEO.baseUrl}/` },
]);
const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTransform, setCurrentTransform] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTransform((prev) => (prev + 1) % transformations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const programs = [
    {
      title: "Weight Loss",
      benefit: "Sustainable transformation",
      image: "https://www.herbalife.com/dmassets/regional-reusable-assets/workflow/emea/india/lifestyle/li-man-drinking-formula-1-shale-kitchen.jpg",
      duration: "12 weeks",
      icon: "🎯"
    },
    {
      title: "Weight Gain",
      benefit: "Healthy muscle building",
      image: "https://www.nutritionleaders.co.uk/cdn/shop/products/IMG_0085_1200x1200.jpg?v=1617878796",
      duration: "16 weeks",
      icon: "💪"
    },
    {
      title: "21-Day Challenge",
      benefit: "Quick start program",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyw6bGlxth9JwNHgj5j1idRBYGnKnW-RG0Pg&s",
      duration: "3 weeks",
      icon: "⚡"
    },
    {
      title: "Skin Wellness",
      benefit: "Radiance from within",
      image: "https://herbalplanet.in/cdn/shop/files/cq5dam.web.800.800_37.jpg?v=1735197980",
      duration: "8 weeks",
      icon: "✨"
    }
  ];

  const stats = [
    { value: '1,500', label: 'Happy Clients', icon: <Users className="w-4 h-4" /> },
    { value: '4.9/5', label: 'Rating', icon: <Star className="w-4 h-4" /> },
    { value: '99.9%', label: 'Success Rate', icon: <TrendingUp className="w-4 h-4" /> },
    { value: '10+', label: 'Years Experience', icon: <Award className="w-4 h-4" /> }
  ];

  const transformations = [
    {
      name: "Priya Sharma",
      result: "Lost 15kg in 4 months",
      quote: "The personalized approach made all the difference!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      result: "Gained 8kg healthy muscle",
      quote: "Finally achieved my fitness goals with expert guidance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      name: "Anjali Reddy",
      result: "Glowing skin transformation",
      quote: "My confidence has skyrocketed, thank you Newlife!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5
    }
  ];

  const products = [
    {
      id: 1,
      name: "Formula 1 Shake",
      description: "Nutritious meal replacement with balanced nutrition",
      // price: "₹2,500",
      image: "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1247-in.png:pdp-w875h783?fmt=webp-alpha"
    },
    {
      id: 2,
      name: "Protein Powder",
      description: "Build & maintain lean muscle mass",
      // price: "₹3,200",
      image: "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1233-in.png:pdp-w875h783?fmt=webp-alpha"
    },
    {
      id: 3,
      name: "Herbal Tea",
      description: "Boost metabolism naturally",
      // price: "₹1,800",
      image: "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/canister/pc-1295-in.png:pdp-w875h783?fmt=webp-alpha"
    }
  ];

  const toggleProduct = (id) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <>
      <SEO
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        canonical="/"
        schema={[organizationSchema, homeBreadcrumbSchema]}
      />
      <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5 text-green-300" />
                <span className="text-xs font-medium text-green-100">Certified Herbalife Nutrition Coach</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Best Wellness Centre in
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent mt-1">
                  Kolathur, Chennai
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your health with personalized Herbalife nutrition plans, expert coaching, and science-backed wellness programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="/book-consultation" className="group bg-white text-green-700 hover:bg-green-50 px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/programs" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 text-center">
                  View Programs
                </a>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-1.5 text-green-300 mb-1">
                      {stat.icon}
                    </div>
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* <p className="text-xl text-gray-350  pt-1">
                 Individual results may vary
              </p> */}
            </div>

            <div className="relative mt-6 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-md">
                <img
                  src={heros}
                  alt="Herbalife wellness transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 rounded-full p-1.5">
                      <Heart className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Success Rate</p>
                      <p className="text-base font-bold text-gray-900">99.9%</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-100 rounded-full p-1.5">
                      <Users className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Happy Clients</p>
                      <p className="text-base font-bold text-gray-900">1,500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50 relative">

  {/* 🔥 Inline CSS */}
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

  {/* 🚨 Full-Width Running Banner */}
  <div className="absolute left-0 w-screen -translate-x-[calc((100vw-100%)/2)] bg-red-600 border-y-4 border-red-800 py-2 overflow-hidden z-20">
    <div className="scroll-track font-extrabold text-white text-base sm:text-lg tracking-wide drop-shadow-lg">
      ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
      ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
      ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp; 
      ⚠️ Results are NotTypical. Individual Results May Vary from person to person. ⚠️ &nbsp;
    </div>
  </div>

  {/* 👇 Increased top padding so nothing overlaps */}
  <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">
        Simple Process
      </p>
      <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
        Your Wellness Journey Starts Here
      </h2>
      <p className="text-base text-gray-600 max-w-2xl mx-auto">
        A proven pathway to lasting wellness results
      </p>
    </div>


          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                step: "01",
                title: "Free Consultation",
                desc: "Share your goals and challenges with our certified coach in a friendly, no-pressure call."
              },
              {
                icon: <ClipboardCheck className="w-6 h-6" />,
                step: "02",
                title: "Custom Plan",
                desc: "Receive your personalized nutrition and wellness plan tailored to your lifestyle."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                step: "03",
                title: "Transform & Thrive",
                desc: "Follow your plan with ongoing support and celebrate your transformation."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="inline-block text-green-600 font-bold text-xs mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Our Programs</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Comprehensive Wellness Programs
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Scientifically designed programs for every wellness goal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                    <span className="text-2xl">{program.icon}</span>
                    <span className="text-xs font-bold text-gray-700">{program.duration}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                    <p className="text-sm text-gray-200">{program.benefit}</p>
                  </div>
                </div>
                <div className="p-4">
                  <a 
                    href="/contact" 
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Built on Trust & Results</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Certified coaches with proven results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Personalized Approach",
                desc: "Every plan is custom-built for your unique metabolism and lifestyle."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Science-Backed",
                desc: "45 years of nutritional research combined with certified coaching."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Ongoing Support",
                desc: "Weekly check-ins, 24/7 WhatsApp access, and community support."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Success Stories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Real People, Real Results</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-1">Hundreds of satisfied clients achieved their wellness goals</p>
            <p className="text-xs text-gray-500 italic">* Individual results may vary</p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={transformations[currentTransform].image} 
                  alt={transformations[currentTransform].name}
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-green-100 shadow-lg flex-shrink-0"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full font-bold text-xs mb-3">
                    {transformations[currentTransform].result}
                  </div>
                  
                  <div className="flex justify-center md:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-gray-700 italic mb-3 font-medium">
                    "{transformations[currentTransform].quote}"
                  </p>
                  
                  <p className="text-base font-bold text-gray-900">
                    — {transformations[currentTransform].name}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTransform(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentTransform ? 'bg-green-600 w-6' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Premium Products</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Herbalife Products Available</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Authentic products with science-backed formulations</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <button 
                      onClick={() => {
                        toggleProduct(product.id);
                        setShowCart(true);
                      }}
                      className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                        selectedProducts.includes(product.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedProducts.includes(product.id) ? 'Added ✓' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="consultation" className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-4">
            🎯 Limited Spots Available
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Transform Your Health?
          </h2>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who achieved their wellness goals with our proven programs.
          </p>

          <a href="/book-consultation" className="bg-white text-green-600 px-8 py-3 rounded-full text-base font-bold shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-xs opacity-75 mt-4">No credit card required • 100% Free • No obligation</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit New Life Wellness Centre</h3>
                <p className="text-sm text-gray-600 mb-6">Connect with the best wellness centre in Kolathur, Chennai.</p>
                
                <div className="space-y-3">
                  {[
                    { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+91 98849 88988", href: "tel:+919884988988" },
                    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Book Your Consultation Via WhatsApp", href: "https://wa.me/919884988988" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Visit Us", value: "22, subramaniyapuram, 1st street, Kolathur, Chennai 600099, Tamil Nadu, India" }
                  ].map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.href || '#'}
                      className={`flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all group ${item.href ? 'cursor-pointer' : ''}`}
                    >
                      <div className="bg-green-100 p-2 rounded-lg text-green-600 group-hover:scale-110 transition-transform flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="font-bold text-base text-gray-900">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-64 md:h-full min-h-[300px] bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.06891495!3d13.047810949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="New Life Wellness Centre Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-10 h-10 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-black mb-3">Join Our Wellness Community</h2>
          <p className="text-base text-gray-300 mb-8">
            Get exclusive wellness tips, recipes, and special offers
          </p>

          <form className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all hover:scale-105 text-sm"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Floating Cart */}
      {showCart && selectedProducts.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-5 w-[calc(100vw-2rem)] sm:w-80 z-50 border border-gray-100 animate-slide-up max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                {selectedProducts.length}
              </div>
              <span className="text-sm">Selected Items</span>
            </h3>
            <button 
              onClick={() => setShowCart(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close cart"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            {products.filter(p => selectedProducts.includes(p.id)).map(product => (
              <div key={product.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                <div className="flex-1">
                  <p className="font-semibold text-sm">{product.name}</p>
                  <p className="text-green-600 font-bold text-sm">{product.price}</p>
                </div>
                <button 
                  onClick={() => toggleProduct(product.id)}
                  className="text-red-500 hover:text-red-700 text-xs font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <a href="https://wa.me/919884988988" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 text-sm text-center block">
            Request Quote on WhatsApp →
          </a>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919884988988"
        className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Chat with us!
        </span>
      </a>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
    </>
  );
};

export default Home;