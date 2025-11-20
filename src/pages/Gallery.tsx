import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useCallback } from "react";
// Assuming you have Lucide icons available
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'; 

// --- UTILITY FUNCTION: Determine Media Type from file path ---
const getMediaType = (src) => {
    if (src && typeof src === 'string') {
        const lowerSrc = src.toLowerCase();
        if (lowerSrc.endsWith('.mp4') || lowerSrc.endsWith('.mov') || lowerSrc.endsWith('.webm')) {
            return 'video';
        }
    }
    return 'image';
};
// --- END UTILITY FUNCTION ---


// Define the raw data. We will process this data to add the 'type'.
const GALLERY_ITEMS_RAW_DATA = [
  // IMPORTANT: The 'imageSrc' path should point to your actual images in the /public folder.
  { id: 1, category: "Centre Interior", description: "Our welcoming consultation area", imageSrc: "/gallery1.jpeg" },
  { id: 2, category: "Community Events", description: "Monthly wellness workshop", imageSrc: "/gallery2.jpeg" },
  { id: 3, category: "Success Celebration", description: "Client milestone celebration", imageSrc: "/gallery3.jpeg" },
  { id: 4, category: "Centre Interior", description: "Product display area", imageSrc: "/gallery4.jpeg" }, // Note: check 'jepg' spelling
  { id: 5, category: "Team", description: "Our certified coaches (Video)", imageSrc: "/gallery5.mp4" }, // VIDEO
  { id: 6, category: "Community Events", description: "Group fitness session", imageSrc: "/gallery6.jpeg" },
  { id: 7, category: "Centre Interior", description: "Private consultation room", imageSrc: "/gallery7.jpeg" }, // Note: check 'jepg' spelling
  { id: 8, category: "Community Events", description: "Nutrition workshop", imageSrc: "/gallery1.jpeg" },
  { id: 9, category: "Success Celebration", description: "Transformation ceremony", imageSrc: "/gallery4.jpeg "},
  { id: 10, category: "Team", description: "Team training day", imageSrc: "/gallery2.jpeg" },
  { id: 11, category: "Community Events", description: "Outdoor team activity", imageSrc: "/gallery6.jpeg" },
];

// Processed Data Array (Used inside the Gallery component)
const GALLERY_ITEMS_DATA = GALLERY_ITEMS_RAW_DATA.map(item => ({
    ...item,
    type: getMediaType(item.imageSrc),
}));


/**
 * Lightbox Component: Handles the full-screen zoomed view and navigation for both images and videos.
 */
const Lightbox = ({ currentItem, items, onClose, onNavigate }) => {
    if (!currentItem) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
            
            {/* Close Button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-red-400 z-50 p-2"
            >
                <X className="w-8 h-8" />
            </Button>

            {/* Content Container */}
            <div className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col justify-center items-center">
                
                {/* Media Element (Image or Video) */}
                {currentItem.type === 'video' ? (
                    <video 
                        key={currentItem.id} // Key ensures video remounts when navigating
                        src={currentItem.imageSrc} 
                        controls
                        autoPlay // Start playing immediately
                        loop
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                    />
                ) : (
                    <img 
                        src={currentItem.imageSrc} 
                        alt={currentItem.description} 
                        className="max-w-full max-h-full object-contain shadow-2xl rounded-lg" 
                    />
                )}
                
                {/* Description */}
                <div className="mt-4 text-center text-white/90">
                    <p className="text-lg font-semibold text-green-400">{currentItem.category} ({currentItem.type === 'video' ? 'Video' : 'Photo'})</p>
                    <p className="text-sm">{currentItem.description}</p>
                </div>
                
                {/* Navigation Buttons (Left/Right) */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => onNavigate(-1)} 
                    className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 z-40 p-3"
                >
                    <ChevronLeft className="w-10 h-10" />
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => onNavigate(1)} 
                    className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 z-40 p-3"
                >
                    <ChevronRight className="w-10 h-10" />
                </Button>
            </div>
        </div>
    );
};


const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null); 
  
  // 1. Image Data and Filtering Logic 
  const categories = useMemo(() => [
    "All", 
    ...new Set(GALLERY_ITEMS_DATA.map(item => item.category))
  ], []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return GALLERY_ITEMS_DATA;
    }
    return GALLERY_ITEMS_DATA.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  // 2. Lightbox Handlers
  const handleOpenLightbox = useCallback((item) => {
    setLightboxItem(item);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxItem(null);
  }, []);

  const handleNavigate = useCallback((direction) => {
    if (!lightboxItem || filteredItems.length === 0) return;

    const currentIndex = filteredItems.findIndex(item => item.id === lightboxItem.id);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
      nextIndex = filteredItems.length - 1;
    } else if (nextIndex >= filteredItems.length) {
      nextIndex = 0;
    }

    setLightboxItem(filteredItems[nextIndex]);
  }, [lightboxItem, filteredItems]);


  return (
    <>
      <SEO
        title="Gallery & Videos - New Life Wellness Centre | Kolathur, Chennai" // Updated SEO
        description="View stunning photos and motivational videos of New Life Wellness Centre's facilities, vibrant community events, successful client transformations, and professional team. Your best nutrition and wellness centre in Kolathur, Chennai."
        canonical="/gallery"
        keywords="Wellness Centre Photos Kolathur, Herbalife Centre Chennai, Community Events Villivakkam, Client Success Stories, Centre Interior Chennai, Wellness Centre Gallery Villivakkam, Nutrition Centre Photos Kolathur, Wellness Events Chennai, Wellness Videos Chennai, Fitness Videos Kolathur"
      />

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/hero-gallery-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-10"></div>
        <div className="max-w-6xl mx-auto text-center px-4 relative z-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Our <span className="text-green-400">Visual</span> Journey
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Explore photos and videos showcasing our facilities, events, and inspiring transformations at New Life Wellness Centre.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Filtering */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtering Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${activeFilter === category ? 'bg-primary hover:bg-primary/90 text-white shadow-lg' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden p-0 border-none shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer"
                onClick={() => handleOpenLightbox(item)} 
              >
                <div className="relative w-full aspect-[3/2] bg-gray-100 overflow-hidden">
                    {item.type === 'video' ? (
                        // Display a placeholder with a prominent play button for videos
                        <div className="w-full h-full object-cover bg-gray-900 flex items-center justify-center">
                            <Play className="w-16 h-16 text-white/70 group-hover:text-green-400 transition-colors duration-300" fill="currentColor"/>
                            <span className="sr-only">Play Video</span>
                        </div>
                    ) : (
                        // Display the image
                        <img
                            src={item.imageSrc} 
                            alt={`${item.category}: ${item.description}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy" 
                        />
                    )}

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-end">
                        <div className="p-4 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
                            <p className="text-xs font-semibold text-green-400 mb-1 tracking-wider uppercase">{item.category}</p>
                            <p className="text-sm font-medium">{item.description}</p>
                        </div>
                    </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Fallback for no results */}
          {filteredItems.length === 0 && (
             <div className="text-center py-10">
                <p className="text-xl text-muted-foreground">No media found in the "{activeFilter}" category yet.</p>
             </div>
          )}

        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox 
        currentItem={lightboxItem} 
        items={filteredItems} 
        onClose={handleCloseLightbox} 
        onNavigate={handleNavigate} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            The best way to experience the energy of New Life Wellness Centre is to visit us! Meet our coaches and feel the community vibe.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-green-600 hover:bg-gray-100 text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get Directions & Visit Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;