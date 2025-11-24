import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Brain, Eye, Shield, Zap, Moon, Baby, Users, Activity, Apple, Dumbbell, TrendingUp } from "lucide-react";

const Programs = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Lose Weight",
      benefit: "Sustainable transformation",
      image: "https://www.herbalife.com/dmassets/regional-reusable-assets/amer/images/lifestyle/li-woman-making-vanilla-shake.png",
      color: "from-green-600 to-emerald-700",
      duration: "12 weeks",
      icon: "⚖️",
      href: "/programs/lose-weight",
      category: "Weight Management"
    },
    {
      title: "Gain Weight",
      benefit: "Healthy muscle building",
      image: "https://www.nutritionleaders.co.uk/cdn/shop/products/IMG_0085_1200x1200.jpg?v=1617878796",
      color: "from-orange-500 to-red-600",
      duration: "16 weeks",
      icon: "💪",
      href: "/programs/gain-weight",
      category: "Weight Management"
    },
    {
      title: "Skin Care",
      benefit: "Radiance from within",
      image: "https://rukminim2.flixcart.com/image/480/640/xif0q/facial-kit/2/f/a/330-herbalife-skincare-product-kit-facial-cleanser-moisturiser-original-imahdwrhnh42z4e2.jpeg?q=90",
      color: "from-pink-500 to-rose-600",
      duration: "8 weeks",
      icon: "✨",
      href: "/programs/skin-care",
      category: "Beauty & Wellness"
    },
    {
      title: "Healthy Breakfast",
      benefit: "Start your day right",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZot033DnUIcMnI8LjKSqkyse7ul2wLDmFQ&s",
      color: "from-yellow-500 to-orange-500",
      duration: "Ongoing",
      icon: "🥗",
      href: "/programs/healthy-breakfast",
      category: "Nutrition"
    },
    {
      title: "Bone & Joint Health",
      benefit: "Strength and mobility",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJrGTOKanBenhD9oqd04e6t_z4nynfofzMg&s",
      color: "from-gray-600 to-slate-700",
      duration: "12 weeks",
      icon: "🦴",
      href: "/programs/bone-joint",
      category: "Health & Wellness"
    },
    {
      title: "Gain Muscle",
      benefit: "Build lean muscle mass",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU_-noqtm4soNrUd785V2iMWHNyj9H55gew&s",
      color: "from-blue-500 to-indigo-600",
      duration: "16 weeks",
      icon: "💪",
      href: "/programs/gain-muscle",
      category: "Fitness"
    },
    {
      title: "Heart Health",
      benefit: "Cardiovascular wellness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUdEXb8X3ZHiYrfpg8Jv_mRSPQnwHE3fJnw&s",
      color: "from-red-500 to-rose-600",
      duration: "12 weeks",
      icon: "❤️",
      href: "/programs/heart-health",
      category: "Health & Wellness"
    },
    {
      title: "Brain & Immune Health",
      benefit: "Enhanced cognitive function",
      image: "https://pbs.twimg.com/media/E92CqwkWEAElpvb.jpg",
      color: "from-indigo-500 to-purple-600",
      duration: "12 weeks",
      icon: "🧠",
      href: "/programs/brain-immune",
      category: "Health & Wellness"
    },
    {
      title: "Immunity Support",
      benefit: "Strengthen your immune system",
      image: "https://www.herbalife.com/dmassets/regional-reusable-assets/apac/images/li-herbalife-nutrition-products-healthy-meal-apac.jpg",
      color: "from-teal-500 to-cyan-600",
      duration: "8 weeks",
      icon: "🛡️",
      href: "/programs/immunity-support",
      category: "Health & Wellness"
    },
    {
      title: "Eye Health",
      benefit: "Protect and enhance vision",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIxobSzmmNEp-1W8X-wRAjA43BIktP4AEMg&s",
      color: "from-cyan-500 to-blue-600",
      duration: "12 weeks",
      icon: "👁️",
      href: "/programs/eye-health",
      category: "Health & Wellness"
    },
    {
      title: "Digestive Health",
      benefit: "Improved gut health",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1000&fit=crop",
      color: "from-green-500 to-emerald-600",
      duration: "8 weeks",
      icon: "🌿",
      href: "/programs/gut-health",
      category: "Health & Wellness"
    },
    {
      title: "Men's Health",
      benefit: "Tailored wellness support",
      image: "https://www.nutritionleaders.co.uk/cdn/shop/products/F2_Flyer_Men-A5_UK_Web_1000x1000.jpg?v=1604113225",
      color: "from-blue-600 to-indigo-700",
      duration: "12 weeks",
      icon: "👨",
      href: "/programs/men-wellness",
      category: "Specialized"
    },
    {
      title: "Women's Health",
      benefit: "Comprehensive wellness support",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_Y7HJLly3sylxsBfEYgxjuZN1NTkDL9qpw&s",
      color: "from-fuchsia-500 to-pink-600",
      duration: "12 weeks",
      icon: "👩",
      href: "/programs/women-wellness",
      category: "Specialized"
    },
    {
      title: "Active Lifestyle",
      benefit: "Performance-focused nutrition",
      image: "https://i.pinimg.com/736x/b0/91/29/b0912988ea64a2745807056b41cd67c7.jpg",
      color: "from-amber-500 to-yellow-600",
      duration: "Ongoing",
      icon: "⚡",
      href: "/programs/healthy-active-lifestyle",
      category: "Fitness"
    },
    {
      title: "Sleep & Stress",
      benefit: "Better rest and calm",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iBnAZC2zkx5eAIqHy0dZqwSOUZhoVQoWcQ&s",
      color: "from-violet-500 to-purple-600",
      duration: "8 weeks",
      icon: "😴",
      href: "/programs/sleep-stress",
      category: "Health & Wellness"
    },
    {
      title: "Diet Plans",
      benefit: "Customized meal plans",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV-vlGr9CjKdz-0FOQZwloy5kHE3vb9KudA&s",
      color: "from-purple-500 to-violet-600",
      duration: "Ongoing",
      icon: "🍽️",
      href: "/programs/diet-plans",
      category: "Nutrition"
    },
    {
      title: "Overall Wellbeing",
      benefit: "Holistic health and vitality",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oUt5zyGHcH0mMOeRiWj30G9zYFNuTiOadA&s",
      color: "from-emerald-600 to-teal-700",
      duration: "Ongoing",
      icon: "🌟",
      href: "/programs/wellbeing",
      category: "Health & Wellness"
    },
    {
      title: "Complete Wellness",
      benefit: "Comprehensive wellness program",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbR4SXLUZeM69iiQhTZz3hin-LCAJWZ--i6g&s",
      color: "from-teal-600 to-cyan-700",
      duration: "Ongoing",
      icon: "💎",
      href: "/programs/complete-wellness",
      category: "Health & Wellness"
    },
    {
      title: "Kids Nutrition",
      benefit: "Healthy growth support",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
      color: "from-rose-500 to-pink-600",
      duration: "Ongoing",
      icon: "👶",
      href: "/programs/kids-nutrition",
      category: "Specialized"
    }
  ];

  const categories = [
    { name: "All Programs", icon: Sparkles, count: programs.length },
    { name: "Weight Management", icon: TrendingUp, count: programs.filter(p => p.category === "Weight Management").length },
    { name: "Health & Wellness", icon: Heart, count: programs.filter(p => p.category === "Health & Wellness").length },
    { name: "Fitness", icon: Activity, count: programs.filter(p => p.category === "Fitness").length },
    { name: "Nutrition", icon: Apple, count: programs.filter(p => p.category === "Nutrition").length },
    { name: "Specialized", icon: Users, count: programs.filter(p => p.category === "Specialized").length },
    { name: "Beauty & Wellness", icon: Sparkles, count: programs.filter(p => p.category === "Beauty & Wellness").length },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Programs");

  const filteredPrograms = selectedCategory === "All Programs" 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Our Programs | New Life Wellness Centre"
        description="Explore our comprehensive range of wellness programs including weight management, health & wellness, fitness, nutrition, and specialized programs."
        keywords="wellness programs, weight loss, weight gain, health programs, nutrition plans, fitness programs"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full mb-6">
              {/* <Sparkles className="w-3.5 h-3.5 text-green-300" /> */}
              {/* <span className="text-xs font-medium text-green-100">Comprehensive Wellness Solutions</span> */}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Our Wellness Programs
            </h1>
            
            <p className="text-sm sm:text-base text-gray-100 mb-8 leading-relaxed">
              Discover personalized nutrition and wellness programs designed to help you achieve your health goals. 
              Each program is tailored to your unique needs with expert guidance and support.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all">
                <span className="font-bold text-white">{programs.length}+</span>
                <p className="text-xs text-gray-300">Programs Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all">
                <span className="font-bold text-white">Expert</span>
                <p className="text-xs text-gray-300">Guidance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all">
                <span className="font-bold text-white">Personalized</span>
                <p className="text-xs text-gray-300">Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 md:flex-wrap md:justify-center md:overflow-x-visible md:pb-0">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap flex-shrink-0
                    ${selectedCategory === category.name
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs
                    ${selectedCategory === category.name
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-600"
                    }
                  `}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid - Matching Home.tsx style */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No programs found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredPrograms.map((program, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => navigate(program.href)}
                >
                  <div className="relative aspect-[3/4]">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
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
                      <button 
                        className="inline-flex items-center gap-1.5 bg-white text-gray-900 px-4 py-1.5 rounded-full font-semibold text-xs hover:gap-2 transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(program.href);
                        }}
                      >
                        Learn More <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/book-consultation")}
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>

          <p className="text-xs opacity-75 mt-4">No credit card required • 100% Free • No obligation</p>
        </div>
      </section>
    </>
  );
};

export default Programs;
