import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Use - New Life Wellness Centre | Kolathur, Chennai"
        description="Terms and conditions for using New Life Wellness Centre services and website. Read our terms of use for the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam."
        canonical="/terms"
        keywords="Terms of Use Wellness Centre Kolathur, Service Terms Chennai, Wellness Centre Terms Villivakkam"
      />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the Newlife Wellness Centre website and services, you agree to be bound 
                by these Terms of Use. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services</h2>
              <p>
                Newlife Wellness Centre provides wellness consultation services and distributes Herbalife nutrition 
                products. Our coaches offer personalized guidance to help you achieve your health goals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p>
                The information provided on this website is for educational purposes only and is not intended as 
                medical advice. Always consult with a healthcare professional before starting any nutrition or 
                wellness program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, images, and logos, is the property of Newlife 
                Wellness Centre or Herbalife Nutrition and is protected by copyright laws.
              </p>
            </section>

            <p className="text-sm mt-8">Last updated: November 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
