import SEO from "@/components/SEOHelmet";

const Disclaimer = () => {
  return (
    <>
      <SEO
        title="Disclaimer - New Life Wellness Centre | Kolathur, Chennai"
        description="Important disclaimer and health information for New Life Wellness Centre services and Herbalife products. Read our health, medical, and product disclaimers for the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam."
        canonical="/disclaimer"
        keywords="Wellness Centre Disclaimer Kolathur, Health Disclaimer Chennai, Herbalife Products Disclaimer Villivakkam, Medical Disclaimer Kolathur"
      />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Health & Medical Disclaimer</h2>
              <p>
                The information provided by Newlife Wellness Centre is not intended to be a substitute for 
                professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
                or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
              <p>
                Herbalife products are dietary supplements and are not intended to diagnose, treat, cure, or 
                prevent any disease. Individual results may vary based on various factors including adherence 
                to the program, lifestyle, and individual health conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Results Disclaimer</h2>
              <p>
                Testimonials and transformation stories featured on this website represent individual experiences 
                and results may vary. Your results will depend on many factors including your starting point, 
                commitment to the program, and individual circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Independent Distributor</h2>
              <p>
                Newlife Wellness Centre operates as an independent Herbalife distributor. The views and opinions 
                expressed on this website are those of Newlife Wellness Centre and do not necessarily reflect 
                the official policy or position of Herbalife Nutrition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Consultation Requirement</h2>
              <p>
                We strongly recommend booking a consultation with our certified coaches before starting any 
                wellness program. This ensures you receive personalized guidance appropriate for your individual 
                health needs and goals.
              </p>
            </section>

            <p className="text-sm mt-8">Last updated: November 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
