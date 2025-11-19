import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - New Life Wellness Centre | Kolathur, Chennai"
        description="Privacy policy for New Life Wellness Centre - the best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam. Learn how we protect and handle your personal information with strict confidentiality."
        canonical="/privacy-policy"
        keywords="Privacy Policy Wellness Centre Kolathur, Data Protection Chennai, Wellness Centre Privacy Villivakkam"
      />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>
                At Newlife Wellness Centre, we collect information that you provide to us when you book a consultation, 
                contact us, or sign up for our programs. This may include your name, email address, phone number, 
                and health-related information relevant to your wellness goals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide personalized wellness consultations and nutrition guidance</li>
                <li>Communicate with you about your wellness journey</li>
                <li>Send you information about our programs and Herbalife products</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, disclosure, or misuse. Your health information is treated with strict confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about our privacy policy, please contact us at 
                <a href="mailto:info@newlifewellness.com" className="text-primary hover:underline ml-1">
                  info@newlifewellness.com
                </a>
              </p>
            </section>

            <p className="text-sm mt-8">Last updated: November 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
