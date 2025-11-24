import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";


// Detect File Type
const getMediaType = (src) => {
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".mov") || lower.endsWith(".webm")
    ? "video"
    : "image";
};

// ---- 🖼 Add/Remove Files Here ----
const FILES = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.mp4",
  "/gallery6.jpeg",
  "/ce1.jpeg",
  "/ce2.jpeg",
  "/ce3.jpeg",
  "/ce4.jpeg",
  "/ce5.jpeg",
  "/ce6.jpeg",
  "/ce7.jpeg",
  "/col1.jpeg",
  "/col2.jpeg",
  "/col3.jpeg",
  "/col4.jpeg",
  "/col5.jpeg",
  "/acheive.jpeg",
  "/e8.jpeg",
  "/centre1.jpeg",
  "/centreee.jpeg"

];

const GALLERY_ITEMS = FILES.map((src, index) => ({
  id: index + 1,
  src,
  type: getMediaType(src),
}));


// LIGHTBOX COMPONENT
const Lightbox = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-red-400 transition"
      >
        <X size={42} />
      </button>

      <div className="relative max-w-5xl w-full flex flex-col items-center">

        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            loop
            controls
            className="max-h-[80vh] rounded-xl shadow-2xl"
          />
        ) : (
          <img
            src={item.src}
            className="max-h-[80vh] rounded-xl shadow-2xl"
          />
        )}

        <p className="text-white/80 text-md mt-3">
          {item.type === "video" ? "Video" : "Photo"} • New Life Wellness Centre
        </p>

        {/* Navigation */}
        <button
          onClick={() => onNavigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronLeft size={50} />
        </button>

        <button
          onClick={() => onNavigate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronRight size={50} />
        </button>
      </div>
    </div>
  );
};


// MAIN PAGE
export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState(null);

  const open = useCallback((item) => setLightboxItem(item), []);
  const close = useCallback(() => setLightboxItem(null), []);

  const navigate = useCallback(
    (step) => {
      const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === lightboxItem.id);
      const nextIndex = (currentIndex + step + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setLightboxItem(GALLERY_ITEMS[nextIndex]);
    },
    [lightboxItem]
  );

  return (
    <>
      <SEO
        title="Gallery - New Life Wellness Centre"
        description="Explore a visual showcase of centre interiors, community events, client successes, team excellence and wellness memories."
        canonical="/gallery"
      />

      {/* Modern Hero */}
      <section className="relative h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-gallery-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="relative text-center max-w-3xl px-4">
          <h1 className="text-white text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Our Journey in Frames
          </h1>
          <p className="text-white/90 text-lg mt-4 leading-relaxed">
            Centre Interiors • Community Events • Client Success • Team Moments & More  
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

          {GALLERY_ITEMS.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              onClick={() => open(item)}
            >
              <div className="relative aspect-[3/2] bg-gray-200 overflow-hidden">

                {item.type === "video" ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <Play size={60} className="text-white opacity-70 group-hover:opacity-100 transition" />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                )}

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
            </Card>
          ))}

        </div>
      </section>

      {/* Lightbox */}
      <Lightbox item={lightboxItem} items={GALLERY_ITEMS} onClose={close} onNavigate={navigate} />

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Visit Us in Person</h2>
        <p className="text-lg opacity-90 mb-6">Experience the atmosphere, energy and support firsthand.</p>
        <a href="/contact">
          <Button size="lg" variant="secondary" className="text-lg px-10 py-4 shadow-xl">
            Get Directions
          </Button>
        </a>
      </section>
    </>
  );
}
