import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Herbalife Formula 1 Shake",
      excerpt: "Discover how 24 vitamins and minerals work together to support your nutrition goals and overall wellness.",
      category: "Nutrition Science",
      date: "November 10, 2025",
      author: "Dr. Wellness",
      slug: "science-behind-formula-1",
    },
    {
      id: 2,
      title: "Change Your Breakfast, Change Your Life",
      excerpt: "Learn why breakfast is the most important meal and how Herbalife shakes provide complete nutrition in minutes.",
      category: "Healthy Living",
      date: "November 8, 2025",
      author: "Nutrition Coach",
      slug: "change-your-breakfast",
    },
    {
      id: 3,
      title: "5 Tips for Glowing Skin from Within",
      excerpt: "Nutrition plays a crucial role in skin health. Discover the connection between what you eat and how you glow.",
      category: "Skin Health",
      date: "November 5, 2025",
      author: "Beauty Expert",
      slug: "glowing-skin-tips",
    },
    {
      id: 4,
      title: "Understanding Your Metabolism",
      excerpt: "Learn how metabolism works and practical tips to boost it naturally for better weight management.",
      category: "Weight Management",
      date: "November 3, 2025",
      author: "Fitness Coach",
      slug: "understanding-metabolism",
    },
    {
      id: 5,
      title: "Heart Health: The Omega-3 Connection",
      excerpt: "Essential fatty acids and their role in cardiovascular health, brain function, and inflammation reduction.",
      category: "Heart Health",
      date: "November 1, 2025",
      author: "Health Specialist",
      slug: "omega-3-heart-health",
    },
    {
      id: 6,
      title: "Building Healthy Habits That Last",
      excerpt: "Sustainable wellness isn't about quick fixes. Learn how to create lasting lifestyle changes for long-term success.",
      category: "Lifestyle",
      date: "October 28, 2025",
      author: "Wellness Coach",
      slug: "building-healthy-habits",
    },
  ];

  const categories = ["All", "Nutrition Science", "Weight Management", "Skin Health", "Healthy Living", "Heart Health", "Lifestyle"];

  return (
    <>
      <SEO
        title="Wellness Blog - Health Tips & Nutrition Guides | New Life Wellness Centre Kolathur, Chennai"
        description="Expert health tips, nutrition guides, Herbalife diet advice, and wellness insights from certified coaches at New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam. Get science-backed nutrition tips, weight management advice, and healthy living strategies."
        canonical="/blog"
        keywords="Wellness Blog Kolathur, Health Tips Chennai, Nutrition Guides Villivakkam, Herbalife Diet Tips Kolathur, Wellness Blog Chennai, Healthy Recipes Villivakkam, Nutrition Advice Kolathur, Health & Wellness Blog Chennai, Wellness Tips Villivakkam"
      />

      {/* Hero */}
      <section className="py-20 gradient-wellness text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Wellness Blog - Health Tips from New Life Wellness Centre</h1>
          <p className="text-xl text-white/90">
            Expert tips, guides, and insights for your health journey from the best wellness centre and nutrition centre in Kolathur, Chennai, and Villivakkam
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted sticky top-20 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                  📝
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-secondary/20 text-secondary hover:bg-secondary/30">
                    {post.category}
                  </Badge>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest wellness tips and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
