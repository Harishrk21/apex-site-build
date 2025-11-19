import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import HerbalifeStory from "./pages/HerbalifeStory";
import Programs from "./pages/Programs";
import WeightManagement from "./pages/WeightManagement";
import LoseWeight from "./pages/programs/LoseWeight";
import GainWeight from "./pages/programs/GainWeight";
import SkinCare from "./pages/programs/SkinCare";
import HealthyBreakfast from "./pages/programs/HealthyBreakfast";
import HeartHealth from "./pages/programs/HeartHealth";
import Products from "./pages/Products";
import Transformations from "./pages/Transformations";
import Results from "./pages/Results";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import BoneJointHealth from "./pages/programs/BoneJointHealth";
import HealthyActiveLifestyle from "./pages/programs/HealthyActiveLifestyle";
import KidsNutrition from "./pages/programs/KidsNutrition";
import DigestiveHealth from "./pages/programs/DigestiveHealth";
import EyeHealth from "./pages/programs/EyeHealth";
import MensHealth from "./pages/programs/MensHealth";
import BrainHealth from "./pages/programs/BrainHealth";
import SleepStressManagement from "./pages/programs/SleepStressManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/herbalife-story" element={<HerbalifeStory />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/weight-management" element={<WeightManagement />} />
                <Route path="/programs/lose-weight" element={<LoseWeight />} />
                <Route path="/programs/gain-weight" element={<GainWeight />} />
                <Route path="/programs/gain-muscle" element={<WeightManagement />} />
                <Route path="/programs/skin-care" element={<SkinCare />} />
                <Route path="/programs/heart-health" element={<HeartHealth />} />
                <Route path="/programs/bone-joint" element={<BoneJointHealth />} />
                <Route path="/programs/healthy-breakfast" element={<HealthyBreakfast />} />
                <Route path="/programs/active-lifestyle" element={<HealthyActiveLifestyle />} />
                <Route path="/programs/healthy-breakfast" element={<WeightManagement />} />
                <Route path="/programs/diet-plans" element={<WeightManagement />} />
                <Route path="/programs/bone-joint" element={<WeightManagement />} />
                <Route path="/programs/heart-health" element={<WeightManagement />} />
                <Route path="/programs/brain-immune" element={<BrainHealth />} />
                <Route path="/programs/immunity-support" element={<WeightManagement />} />
                <Route path="/programs/eye-health" element={<EyeHealth />} />
                <Route path="/programs/gut-health" element={<DigestiveHealth />} />
                <Route path="/programs/women-wellness" element={<WeightManagement />} />
                <Route path="/programs/men-wellness" element={<MensHealth />} />
                <Route path="/programs/active-lifestyle" element={<WeightManagement />} />
                <Route path="/programs/sleep-stress" element={<SleepStressManagement />} />
                <Route path="/programs/kids-nutrition" element={<KidsNutrition />} />
                <Route path="/programs/wellbeing" element={<WeightManagement />} />
                <Route path="/programs/complete-wellness" element={<WeightManagement />} />
                <Route path="/products" element={<Products />} />
                <Route path="/transformations" element={<Transformations />} />
                <Route path="/results" element={<Results />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-consultation" element={<BookConsultation />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
