import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, Target, Star, Phone, MessageCircle, MapPin, Award, TrendingUp, Shield, ChevronLeft, ChevronRight, Check, Sparkles, Zap, Calendar, ClipboardCheck, Menu, X } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop",
      color: "from-green-600 to-emerald-700",
      duration: "12 weeks",
      icon: "🎯"
    },
    {
      title: "Weight Gain",
      benefit: "Healthy muscle building",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop",
      color: "from-orange-500 to-red-600",
      duration: "16 weeks",
      icon: "💪"
    },
    {
      title: "21-Day Challenge",
      benefit: "Quick start program",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=1000&fit=crop",
      color: "from-purple-600 to-pink-600",
      duration: "3 weeks",
      icon: "⚡"
    },
    {
      title: "Skin Wellness",
      benefit: "Radiance from within",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop",
      color: "from-pink-500 to-rose-600",
      duration: "8 weeks",
      icon: "✨"
    }
  ];

  const stats = [
    { value: '1,200+', label: 'Happy Clients', icon: <Users className="w-4 h-4" /> },
    { value: '4.9/5', label: 'Rating', icon: <Star className="w-4 h-4" /> },
    { value: '98%', label: 'Success Rate', icon: <TrendingUp className="w-4 h-4" /> },
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
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      name: "Protein Powder",
      description: "Build & maintain lean muscle mass",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop"
    },
    {
      id: 3,
      name: "Herbal Tea",
      description: "Boost metabolism naturally",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop"
    }
  ];

  const toggleProduct = (id) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Navbar Placeholder - Add margin to prevent content overlap */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="consultation" className="group bg-white text-green-700 hover:bg-green-50 px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  Start Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="programs" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 text-center">
                  View Programs
                </a>
              </div>

              {/* Stats */}
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

              <p className="text-xs text-gray-300 italic pt-1">
                * Individual results may vary
              </p>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
                  alt="Wellness transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                
                {/* Floating Cards */}
                <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 rounded-full p-1.5">
                      <Heart className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Success Rate</p>
                      <p className="text-base font-bold text-gray-900">98%</p>
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
                      <p className="text-base font-bold text-gray-900">1,200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Your Wellness Journey Starts Here</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">A proven pathway to lasting wellness results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                step: "01",
                title: "Free Consultation",
                desc: "Share your goals and challenges with our certified coach in a friendly, no-pressure call.",
                color: "green"
              },
              {
                icon: <ClipboardCheck className="w-6 h-6" />,
                step: "02",
                title: "Custom Plan",
                desc: "Receive your personalized nutrition and wellness plan tailored to your lifestyle.",
                color: "orange"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                step: "03",
                title: "Transform & Thrive",
                desc: "Follow your plan with ongoing support and celebrate your transformation.",
                color: "emerald"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${item.color}-100 text-${item.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className={`inline-block text-${item.color}-600 font-bold text-xs mb-2`}>STEP {item.step}</div>
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

      {/* Programs */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Wellness Programs</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Comprehensive Wellness Programs</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Scientifically designed programs for every wellness goal</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((program, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative aspect-[3/4]">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>
                </div>
                
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold mb-2">
                      <span className="text-base">{program.icon}</span>
                      <span>{program.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                    <p className="text-xs opacity-90 mb-3">{program.benefit}</p>
                    <button className="inline-flex items-center gap-1.5 bg-white text-gray-900 px-4 py-1.5 rounded-full font-semibold text-xs hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
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
                desc: "Every plan is custom-built for your unique metabolism and lifestyle.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Science-Backed",
                desc: "40+ years of nutritional research combined with certified coaching.",
                gradient: "from-orange-500 to-red-600"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Ongoing Support",
                desc: "Weekly check-ins, 24/7 WhatsApp access, and community support.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
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
      </section>

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

          <a href="tel:+919876543210" className="bg-white text-green-600 px-8 py-3 rounded-full text-base font-bold shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
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
                    { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+91 98765 43210", color: "green", href: "tel:+919876543210" },
                    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Chat instantly", color: "green", href: "https://wa.me/919876543210" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Visit Us", value: "Kolathur, Chennai", color: "blue" }
                  ].map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.href || '#'}
                      className={`flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all group ${item.href ? 'cursor-pointer' : ''}`}
                    >
                      <div className={`bg-${item.color}-100 p-2 rounded-lg text-${item.color}-600 group-hover:scale-110 transition-transform flex-shrink-0`}>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-white text-xl font-black mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                New Life Wellness Centre
              </h3>
              <p className="text-xs leading-relaxed mb-3">
                Best wellness centre in Kolathur, Chennai. Your trusted partner in achieving optimal health.
              </p>
              <div className="flex gap-2">
                {['F', 'I', 'Y', 'T'].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors font-bold text-sm"
                    aria-label={`Social link ${social}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-sm">Programs</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="programs" className="hover:text-green-400 transition-colors">Weight Loss</a></li>
                <li><a href="programs" className="hover:text-green-400 transition-colors">Weight Gain</a></li>
                <li><a href="programs" className="hover:text-green-400 transition-colors">21-Day Challenge</a></li>
                <li><a href="programs" className="hover:text-green-400 transition-colors">Skin Wellness</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-sm">Contact</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <a href="tel:+919876543210" className="hover:text-green-400">+91 98765 43210</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Kolathur, Chennai, Villivakkam</span>
                </li>
                <li>
                  <p className="text-xs text-gray-500 mt-3">
                    <strong>Hours:</strong><br />
                    Mon-Sat: 9AM - 8PM<br />
                    Sun: 10AM - 6PM
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p className="text-gray-500 mb-2">
              &copy; 2025 New Life Wellness Centre. All rights reserved. | Best Wellness Centre in Kolathur, Chennai
            </p>
            <p className="text-xs text-gray-600">
              <a href="#" className="hover:text-green-400">Privacy Policy</a> · 
              <a href="#" className="hover:text-green-400 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

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

          <a href="https://wa.me/919876543210" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 text-sm text-center block">
            Request Quote on WhatsApp →
          </a>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
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
  );
};

export default Home;