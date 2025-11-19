import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
  localBusinessSchema?: object;
}

const SEO = ({
  title,
  description,
  keywords = "New Life Wellness Centre Kolathur, Best Wellness Centre Chennai, Nutrition Centre Villivakkam, Herbalife Nutrition Kolathur, Weight Loss Centre Chennai, Wellness Coach Villivakkam, Herbalife Products Chennai, Nutrition Consultation Kolathur",
  canonical,
  ogImage = "https://newlifewellnesscentre.com/og-image.jpg",
  ogType = "website",
  schema,
  localBusinessSchema,
}: SEOProps) => {
  const fullTitle = `${title} | New Life Wellness Centre - Best Wellness & Nutrition Centre in Kolathur, Chennai`;
  const siteUrl = "https://newlifewellnesscentre.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default LocalBusiness schema if not provided
  const defaultLocalBusinessSchema = localBusinessSchema || {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}${canonical || ""}`,
    "name": "New Life Wellness Centre",
    "alternateName": "Newlife Wellness Centre",
    "description": "Best wellness centre and nutrition centre in Kolathur, Chennai, Villivakkam. Certified Herbalife nutrition coach providing personalized weight management, nutrition consultation, and wellness programs.",
    "url": fullCanonical,
    "logo": `${siteUrl}/logo.png`,
    "image": ogImage,
    "telephone": "+919876543210",
    "email": "info@newlifewellnesscentre.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolathur",
      "addressLocality": "Kolathur",
      "addressRegion": "Chennai",
      "postalCode": "600099",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.1025",
      "longitude": "80.2000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City",
        "name": "Kolathur"
      },
      {
        "@type": "City",
        "name": "Villivakkam"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wellness Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weight Management Program"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nutrition Consultation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wellness Coaching"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/newlifewellnesscentre",
      "https://www.instagram.com/newlifewellnesscentre"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="New Life Wellness Centre" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@newlifewellness" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="New Life Wellness Centre" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Kolathur, Chennai, Villivakkam" />
      <meta name="geo.position" content="13.1025;80.2000" />
      <meta name="ICBM" content="13.1025, 80.2000" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Business Information */}
      <meta name="business.contact_data.street_address" content="Kolathur" />
      <meta name="business.contact_data.locality" content="Chennai" />
      <meta name="business.contact_data.region" content="Tamil Nadu" />
      <meta name="business.contact_data.postal_code" content="600099" />
      <meta name="business.contact_data.country_name" content="India" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {defaultLocalBusinessSchema && (
        <script type="application/ld+json">{JSON.stringify(defaultLocalBusinessSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
