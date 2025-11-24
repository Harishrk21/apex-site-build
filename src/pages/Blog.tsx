import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Search,
  TrendingUp,
  Heart,
  Sparkles,
  Brain,
  Activity,
  Coffee,
  Star,
  ChevronRight,
  Mail,
  ExternalLink
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "4 Key Nutrition Trends for 2024 & Whether They Live Up to the Hype",
      excerpt: "A dietitian's take on today's hottest nutrition crazes including high-protein diets, magnesium supplementation, and intermittent fasting.",
      category: "Nutrition Science",
      date: "March 2024",
      author: "Houston Methodist",
      readTime: "6 min read",
      url: "https://www.houstonmethodist.org/blog/articles/2024/mar/4-key-nutrition-trends-for-2024-whether-they-live-up-to-the-hype/",
      icon: <Brain className="w-6 h-6" />,
      featured: true,
      source: "Houston Methodist Health"
    },
    {
      id: 2,
      title: "Nutrition for Healthspan Initiative Trends for 2024",
      excerpt: "Unveiling the 2024 food trends addressing healthspan, including longevity-inspired diets, protein-focused snacking, and the gut-skin connection.",
      category: "Healthy Living",
      date: "April 2024",
      author: "Global Wellness Institute",
      readTime: "8 min read",
      url: "https://globalwellnessinstitute.org/global-wellness-institute-blog/2024/04/30/nutrition-for-healthspan-initiative/",
      icon: <Coffee className="w-6 h-6" />,
      featured: false,
      source: "Global Wellness Institute"
    },
    {
      id: 3,
      title: "Nourish Your Skin from Within: The 2024 Guide to Diet and Skin Health",
      excerpt: "Discover how antioxidant-rich fruits, healthy fats, and hydration heroes like cucumbers can transform your skin from the inside out.",
      category: "Skin Health",
      date: "January 2024",
      author: "New River Dermatology",
      readTime: "5 min read",
      url: "https://www.newriverdermatology.com/blog/nourish-your-skin-from-within-the-2024-guide-to-diet-and-skin-health",
      icon: <Sparkles className="w-6 h-6" />,
      featured: true,
      source: "New River Dermatology"
    },
    {
      id: 4,
      title: "The Levels Guide to Metabolic Health",
      excerpt: "Learn how metabolism works, why it matters for brain function, energy, and overall health, and practical strategies to improve metabolic fitness.",
      category: "Weight Management",
      date: "2024",
      author: "Levels Health",
      readTime: "10 min read",
      url: "https://www.levels.com/blog/the-ultimate-guide-to-metabolic-health",
      icon: <TrendingUp className="w-6 h-6" />,
      featured: true,
      source: "Levels Health Tech"
    },
    {
      id: 5,
      title: "5 Of The Biggest Wellness Trends For 2024",
      excerpt: "From preventive self-care to gut microbiome health and bodycare evolution, explore the wellness trends shaping 2024.",
      category: "Lifestyle",
      date: "July 2024",
      author: "Lucy Miller",
      readTime: "7 min read",
      url: "https://sheerluxe.com/life/health-wellness/lucy-miller-nutrition",
      icon: <Activity className="w-6 h-6" />,
      featured: false,
      source: "SheerLuxe"
    },
    {
      id: 6,
      title: "12 Nutrition Trends for 2024 and What the Hype Is All About",
      excerpt: "Stay up-to-date with sustainable nutrition, microbiome health, plant-based proteins, and personalized wellness plans.",
      category: "Nutrition Science",
      date: "October 2024",
      author: "MyFitnessPal",
      readTime: "6 min read",
      url: "https://blog.myfitnesspal.com/nutrition-trends/",
      icon: <Brain className="w-6 h-6" />,
      featured: false,
      source: "MyFitnessPal Blog"
    },
    {
      id: 7,
      title: "Living Your Best Life in 2024 with Your Wellness Wheel",
      excerpt: "Discover the six essential lifestyle strategies that contribute to well-being through the science-backed Wellness Wheel approach.",
      category: "Lifestyle",
      date: "January 2024",
      author: "Lee Health",
      readTime: "5 min read",
      url: "https://www.leehealth.org/health-and-wellness/healthy-news-blog/exercise-and-nutrition/living-your-best-life-in-2024-with-your-wellness-w",
      icon: <Activity className="w-6 h-6" />,
      featured: true,
      source: "Lee Health"
    },
    {
      id: 8,
      title: "Harvard Health Blog: Latest Wellness & Nutrition Insights",
      excerpt: "Evidence-based health advice on nutrition, exercise, mental health, and preventive care from Harvard Medical School experts.",
      category: "Healthy Living",
      date: "2024",
      author: "Harvard Medical School",
      readTime: "Various",
      url: "https://www.health.harvard.edu/blog",
      icon: <Heart className="w-6 h-6" />,
      featured: false,
      source: "Harvard Health Publishing"
    },
    {
      id: 9,
      title: "Aesthetic Health Initiative Trends for 2024",
      excerpt: "Explore how skin health, gut-brain connection, and holistic wellness approaches are transforming aesthetic health in 2024.",
      category: "Skin Health",
      date: "April 2024",
      author: "Global Wellness Institute",
      readTime: "8 min read",
      url: "https://globalwellnessinstitute.org/global-wellness-institute-blog/2024/04/30/aesthetic-health-inititiative-2024/",
      icon: <Sparkles className="w-6 h-6" />,
      featured: false,
      source: "Global Wellness Institute"
    },
    {
      id: 10,
      title: "Health & Wellness Trends That Ruled 2024",
      excerpt: "From IV therapy and infrared saunas to sustainable beauty practices and mental wellness integration in health routines.",
      category: "Lifestyle",
      date: "2024",
      author: "The Curee",
      readTime: "6 min read",
      url: "https://thecuree.com/health-wellness-trends-that-dominated-2024/",
      icon: <Activity className="w-6 h-6" />,
      featured: false,
      source: "The Curee"
    },
    {
      id: 11,
      title: "A Look at 2024 Nutrition Trends",
      excerpt: "Nutrition experts highlight longevity, sustainability, gut health, personalized nutrition, and plant-based proteins for overall wellness.",
      category: "Nutrition Science",
      date: "2024",
      author: "Abbott Nutrition",
      readTime: "7 min read",
      url: "https://www.nutritionnews.abbott/healthy-living/diet-wellness/a-look-at-2024-nutrition-trends/",
      icon: <Brain className="w-6 h-6" />,
      featured: false,
      source: "Abbott Nutrition News"
    },
    {
      id: 12,
      title: "Your Skin Has a Metabolism Too",
      excerpt: "Understanding skin metabolism and how cell turnover, free radicals, and nutrition affect your skin's health and appearance.",
      category: "Skin Health",
      date: "2024",
      author: "Xtendlife",
      readTime: "5 min read",
      url: "https://www.xtend-life.com/blogs/health-articles/your-skin-has-a-metabolism-too",
      icon: <Sparkles className="w-6 h-6" />,
      featured: false,
      source: "Xtendlife Wellness"
    }
  ];

  const categories = ["All", "Nutrition Science", "Weight Management", "Skin Health", "Healthy Living", "Lifestyle"];

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      {/* Hero Section with Search */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Curated Health & Wellness Insights
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Wellness Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Expert health tips from leading wellness authorities worldwide
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background sticky top-0 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`cursor-pointer transition-all transform hover:scale-105 ${
                  selectedCategory === cat 
                    ? "bg-emerald-600 text-white shadow-lg" 
                    : "hover:bg-emerald-50"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Featured Articles</h2>
                <p className="text-muted-foreground mt-2">Top health insights from trusted sources</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 border-none bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-yellow-500/20 text-yellow-700">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      <div className="p-2 rounded-full bg-emerald-100 text-emerald-600">
                        {post.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-muted-foreground mb-3">
                      <span className="font-medium">{post.source}</span>
                    </div>
                    <a 
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      Read Article
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-none bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder with Icon */}
                <div className="relative aspect-video bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      {post.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-muted-foreground">{post.source}</span>
                    </div>
                    <a 
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      Read
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or browse all categories
                </p>
                <Button 
                  onClick={() => {setSelectedCategory("All"); setSearchTerm("");}} 
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700"
                >
                  View All Articles
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-600/10 mb-6">
            <Mail className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Wellness Tips</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Get the latest health insights, nutrition tips, and exclusive offers delivered weekly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-2 border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
            <Button size="lg" className="rounded-full px-8 bg-emerald-600 hover:bg-emerald-700">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Blog;