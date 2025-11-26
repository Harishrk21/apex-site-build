import { Helmet } from "react-helmet-async";
import { baseSEO } from "@/config/seoConfig";

type SchemaObject = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: SchemaObject | SchemaObject[];
  localBusinessSchema?: SchemaObject | SchemaObject[];
  disableDefaultLocalBusinessSchema?: boolean;
}

const SEO = ({
  title,
  description,
  keywords = baseSEO.defaultKeywords,
  canonical,
  ogImage,
  ogType = "website",
  schema,
  localBusinessSchema,
  disableDefaultLocalBusinessSchema = false,
}: SEOProps) => {
  const siteUrl = baseSEO.baseUrl;
  const fullTitle = title.includes(baseSEO.siteName) ? title : `${title} | ${baseSEO.siteName}`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const resolvedOgImage = ogImage || baseSEO.defaultOgImage;
  const resolvedDescription = description || baseSEO.defaultDescription;
  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  // Default LocalBusiness schema if not provided
  const defaultLocalBusinessSchema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${fullCanonical}#localbusiness`,
    "name": baseSEO.siteName,
    "alternateName": "Newlife Wellness Centre",
    "description": baseSEO.defaultDescription,
    "url": fullCanonical,
    "logo": `${siteUrl}/mylogo.png`,
    "image": resolvedOgImage,
    "telephone": baseSEO.phone,
    "email": baseSEO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": baseSEO.address.street,
      "addressLocality": baseSEO.address.locality,
      "addressRegion": baseSEO.address.region,
      "postalCode": baseSEO.address.postalCode,
      "addressCountry": baseSEO.address.country
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
    "areaServed": baseSEO.areas.map((city) => ({
      "@type": "City",
      "name": city
    })),
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
      baseSEO.socialMedia.facebook,
      baseSEO.socialMedia.instagram,
      baseSEO.socialMedia.youtube
    ]
  };

  const localBusinessSchemas = disableDefaultLocalBusinessSchema
    ? []
    : localBusinessSchema
      ? (Array.isArray(localBusinessSchema) ? localBusinessSchema : [localBusinessSchema])
      : [defaultLocalBusinessSchema];

  const structuredData = [...schemaList, ...localBusinessSchemas];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={keywordContent} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={baseSEO.siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:site" content="@newlifewellness" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={baseSEO.siteName} />
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
      {structuredData.map((schemaObject, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaObject)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
