import { useState, useMemo } from "react";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, Image as ImageIcon, Video, TrendingDown, TrendingUp, Sparkles, Filter, Award, Users, Star } from "lucide-react";

type MediaType = "image" | "video";
type Category = "all" | "weightloss" | "weightgain" | "skincare";

interface MediaItem {
  src: string;
  type: MediaType;
  category: Category;
  title: string;
}

const Results = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Define all media items
  const allMedia: MediaItem[] = [
    // Weight Loss Images
    { src: "/results_images/weightloss1.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #1" },
    { src: "/results_images/weightloss2.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #2" },
    { src: "/results_images/weightloss3.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #3" },
    { src: "/results_images/weightloss4.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #4" },
    { src: "/results_images/weightloss5.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #5" },
    { src: "/results_images/weightloss6.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #6" },
    { src: "/results_images/weightloss7.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #7" },
    { src: "/results_images/weightloss8.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #8" },
    { src: "/results_images/weightloss9.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #9" },
    { src: "/results_images/weightloss10.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #10" },
    { src: "/results_images/weightloss11.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #11" },
    { src: "/results_images/weightloss12.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #12" },
    { src: "/results_images/weightloss13.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #13" },
    { src: "/results_images/weightloss14.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #14" },
    { src: "/results_images/weightloss15.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #15" },
    { src: "/results_images/weightloss16.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #16" },
    { src: "/results_images/weightloss17.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #17" },
    { src: "/results_images/weightloss19.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #19" },
    { src: "/results_images/weightloss20.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #20" },
    { src: "/results_images/weightloss21.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #21" },
    { src: "/results_images/weightloss22.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #22" },
    { src: "/results_images/weightloss23.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #23" },
    { src: "/results_images/weightloss24.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #24" },
    { src: "/results_images/weightloss25.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #25" },
    { src: "/results_images/weightloss26.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #26" },
    { src: "/results_images/weightloss27.png", type: "image", category: "weightloss", title: "Weight Loss Transformation #27" },
    // Weight Loss Videos
    { src: "/results_images/weightlossvideo1.mp4", type: "video", category: "weightloss", title: "Weight Loss Video Testimonial #1" },
    { src: "/results_images/weightlossvideo2.mp4", type: "video", category: "weightloss", title: "Weight Loss Video Testimonial #2" },
    // Weight Gain Images
    { src: "/results_images/weightgain1.png", type: "image", category: "weightgain", title: "Weight Gain Transformation #1" },
    // Skin Care Images
    { src: "/results_images/skinresult1.png", type: "image", category: "skincare", title: "Skin Care Transformation #1" },
  ];

  // Filter media based on selected category
  const filteredMedia = useMemo(() => {
    if (selectedCategory === "all") return allMedia;
    return allMedia.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    return {
      all: allMedia.length,
      weightloss: allMedia.filter(m => m.category === "weightloss").length,
      weightgain: allMedia.filter(m => m.category === "weightgain").length,
      skincare: allMedia.filter(m => m.category === "skincare").length,
    };
  }, []);

  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
    if (media.type === "video") {
      setIsVideoPlaying(true);
    }
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setIsVideoPlaying(false);
  };

  const categories = [
    { id: "all" as Category, label: "All Results", icon: <Filter className="w-4 h-4" />, count: categoryCounts.all },
    { id: "weightloss" as Category, label: "Weight Loss", icon: <TrendingDown className="w-4 h-4" />, count: categoryCounts.weightloss },
    { id: "weightgain" as Category, label: "Weight Gain", icon: <TrendingUp className="w-4 h-4" />, count: categoryCounts.weightgain },
    { id: "skincare" as Category, label: "Skin Care", icon: <Sparkles className="w-4 h-4" />, count: categoryCounts.skincare },
  ];

  return (
    <>
      <SEO
        title="Real Results & Transformations - Before & After Proof | New Life Wellness Centre"
        description="See real transformation results with before and after photos and videos. Weight loss, weight gain, and skin care success stories from New Life Wellness Centre clients in Kolathur, Chennai."
        canonical="/results"
        keywords="Before After Results, Weight Loss Proof, Transformation Photos, Success Stories, Real Results, Weight Gain Results, Skin Care Results"
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <Award className="w-8 h-8 mr-3 animate-pulse" />
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-1.5 text-sm font-semibold">
              Real Results • Real People
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Inspiring <span className="text-yellow-300">Transformations</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Witness the incredible journeys of our clients. Real before & after photos and video testimonials that prove our programs work.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: <Users className="w-6 h-6" />, value: "500+", label: "Transformations" },
              { icon: <Star className="w-6 h-6" />, value: "4.9★", label: "Success Rate" },
              { icon: <TrendingDown className="w-6 h-6" />, value: "2000+", label: "Kg Lost" },
              { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                  ${selectedCategory === category.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }
                `}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
                <Badge 
                  variant="secondary" 
                  className={`
                    ml-1 px-2 py-0.5 text-xs
                    ${selectedCategory === category.id 
                      ? "bg-white/20 text-white" 
                      : "bg-gray-200 text-gray-600"
                    }
                  `}
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No results found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredMedia.map((media, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] bg-white"
                  onClick={() => openMedia(media)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {media.type === "image" ? (
                      <>
                        <img
                          src={media.src}
                          alt={media.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                            <ImageIcon className="w-3 h-3 mr-1" />
                            Photo
                          </Badge>
                        </div>
                      </>
                    ) : (
                      <>
                        <video
                          src={media.src}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-red-500/90 text-white backdrop-blur-sm">
                            <Video className="w-3 h-3 mr-1" />
                            Video
                          </Badge>
                        </div>
                      </>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {media.title}
                    </h3>
                    <div className="mt-2 flex items-center space-x-2">
                      <Badge 
                        variant="outline" 
                        className={`
                          text-xs
                          ${media.category === "weightloss" ? "border-red-300 text-red-600" : ""}
                          ${media.category === "weightgain" ? "border-blue-300 text-blue-600" : ""}
                          ${media.category === "skincare" ? "border-pink-300 text-pink-600" : ""}
                        `}
                      >
                        {categories.find(c => c.id === media.category)?.label}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Showing <span className="font-bold text-emerald-600">{filteredMedia.length}</span> result{filteredMedia.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients who've achieved incredible results with our personalized programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-xl"
              onClick={() => window.location.href = "/book-consultation"}
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold"
              onClick={() => window.location.href = "/programs"}
            >
              View Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox/Modal */}
      <Dialog open={selectedMedia !== null} onOpenChange={closeMedia}>
        <DialogContent className="max-w-7xl p-0 bg-black/95 border-none">
          {selectedMedia && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={closeMedia}
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="relative">
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[90vh] object-contain mx-auto"
                  />
                ) : (
                  <div className="relative w-full bg-black">
                    <video
                      src={selectedMedia.src}
                      controls
                      autoPlay={isVideoPlaying}
                      className="w-full h-auto max-h-[90vh] mx-auto"
                      playsInline
                    />
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-black/50 backdrop-blur-sm">
                <h3 className="text-white text-lg font-semibold mb-1">{selectedMedia.title}</h3>
                <Badge 
                  className={`
                    ${selectedMedia.category === "weightloss" ? "bg-red-500" : ""}
                    ${selectedMedia.category === "weightgain" ? "bg-blue-500" : ""}
                    ${selectedMedia.category === "skincare" ? "bg-pink-500" : ""}
                  `}
                >
                  {categories.find(c => c.id === selectedMedia.category)?.label}
                </Badge>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Results;

