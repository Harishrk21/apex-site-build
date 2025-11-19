import { Button } from "@/components/ui/button";
import { Calendar, Download, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProgramHeroProps {
  image: string;
  title: string;
  tagline: string;
  onBookClick?: () => void;
  onDownloadClick?: () => void;
}

const ProgramHero = ({ image, title, tagline, onBookClick, onDownloadClick }: ProgramHeroProps) => {
  const navigate = useNavigate();

  const handleBook = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      navigate("/book-consultation");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5 text-green-300" />
            <span className="text-xs font-medium text-green-100">Certified Herbalife Nutrition Coach</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-sm sm:text-base text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            {tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={handleBook}
              className="bg-white text-green-700 hover:bg-green-50 px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Start Free Consultation
            </Button>
            {onDownloadClick && (
              <Button
                size="lg"
                variant="outline"
                onClick={onDownloadClick}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Sample Plan
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;

