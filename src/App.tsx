import { Suspense, lazy } from "react";
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
import ScrollToTop from "@/components/ScrollToTop";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const HerbalifeStory = lazy(() => import("./pages/HerbalifeStory"));
const Programs = lazy(() => import("./pages/Programs"));
const WeightManagement = lazy(() => import("./pages/WeightManagement"));
const LoseWeight = lazy(() => import("./pages/programs/LoseWeight"));
const GainWeight = lazy(() => import("./pages/programs/GainWeight"));
const SkinCare = lazy(() => import("./pages/programs/SkinCare"));
const HealthyBreakfast = lazy(() => import("./pages/programs/HealthyBreakfast"));
const HeartHealth = lazy(() => import("./pages/programs/HeartHealth"));
const Products = lazy(() => import("./pages/Products"));
const Transformations = lazy(() => import("./pages/Transformations"));
const Results = lazy(() => import("./pages/Results"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const BookConsultation = lazy(() => import("./pages/BookConsultation"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BoneJointHealth = lazy(() => import("./pages/programs/BoneJointHealth"));
const HealthyActiveLifestyle = lazy(() => import("./pages/programs/HealthyActiveLifestyle"));
const KidsNutrition = lazy(() => import("./pages/programs/KidsNutrition"));
const DigestiveHealth = lazy(() => import("./pages/programs/DigestiveHealth"));
const EyeHealth = lazy(() => import("./pages/programs/EyeHealth"));
const MensHealth = lazy(() => import("./pages/programs/MensHealth"));
const BrainHealth = lazy(() => import("./pages/programs/BrainHealth"));
const SleepStressManagement = lazy(() => import("./pages/programs/SleepStressManagement"));
const GainMuscle = lazy(() => import("./pages/programs/GainMuscle"));
const ImmunitySupport = lazy(() => import("./pages/programs/ImmunitySupport"));
const WomensWellness = lazy(() => import("./pages/programs/WomensWellness"));
const DietPlans = lazy(() => import("./pages/programs/DietPlans"));
const OverallWellbeing = lazy(() => import("./pages/programs/OverallWellbeing"));
const CompleteWellness = lazy(() => import("./pages/programs/CompleteWellness"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center py-20 text-sm text-muted-foreground">
    Loading wellness experience…
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Navigation />
            <main className="min-h-screen pt-16 md:pt-20">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/herbalife-story" element={<HerbalifeStory />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/programs/weight-management" element={<WeightManagement />} />
                  <Route path="/programs/lose-weight" element={<LoseWeight />} />
                  <Route path="/programs/gain-weight" element={<GainWeight />} />
                  <Route path="/programs/gain-muscle" element={<GainMuscle />} />
                  <Route path="/programs/skin-care" element={<SkinCare />} />
                  <Route path="/programs/heart-health" element={<HeartHealth />} />
                  <Route path="/programs/bone-joint" element={<BoneJointHealth />} />
                  <Route path="/programs/healthy-breakfast" element={<HealthyBreakfast />} />
                  <Route path="/programs/healthy-active-lifestyle" element={<HealthyActiveLifestyle />} />
                  <Route path="/programs/diet-plans" element={<DietPlans />} />
                  <Route path="/programs/brain-immune" element={<BrainHealth />} />
                  <Route path="/programs/immunity-support" element={<ImmunitySupport />} />
                  <Route path="/programs/eye-health" element={<EyeHealth />} />
                  <Route path="/programs/gut-health" element={<DigestiveHealth />} />
                  <Route path="/programs/women-wellness" element={<WomensWellness />} />
                  <Route path="/programs/men-wellness" element={<MensHealth />} />
                  <Route path="/programs/active-lifestyle" element={<HealthyActiveLifestyle />} />
                  <Route path="/programs/sleep-stress" element={<SleepStressManagement />} />
                  <Route path="/programs/kids-nutrition" element={<KidsNutrition />} />
                  <Route path="/programs/wellbeing" element={<OverallWellbeing />} />
                  <Route path="/programs/complete-wellness" element={<CompleteWellness />} />
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
              </Suspense>
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
