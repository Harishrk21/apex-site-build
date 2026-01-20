// src/lib/structuredData.tsx
// Schema.org JSON-LD structured data for rich snippets

import { baseSEO } from '@/config/seoConfig';

const siteUrl = baseSEO.baseUrl;
const logoUrl = `${siteUrl}/mylogo.png`;

// Organization Schema - Use on ALL pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  "name": "New Life Wellness Centre",
  "alternateName": ["New Life Wellness", "New Life Herbalife"],
  "description": "Premier Herbalife Nutrition Coach Centre in Kolathur, Chennai. Expert weight loss, weight gain, wellness programs, and nutrition coaching.",
  "url": siteUrl,
  "logo": logoUrl,
  "image": [
    baseSEO.defaultOgImage,
    `${siteUrl}/gallery1.jpeg`
  ],
  "telephone": baseSEO.phone,
  "email": baseSEO.email,
  "priceRange": "$$",
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
    "latitude": "13.1318",
    "longitude": "80.2081"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Chennai"
    },
    {
      "@type": "Place",
      "name": "Kolathur"
    },
    {
      "@type": "Place",
      "name": "Villivakkam"
    },
    {
      "@type": "Place",
      "name": "Perambur"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    baseSEO.socialMedia.facebook,
    baseSEO.socialMedia.instagram,
    baseSEO.socialMedia.youtube
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wellness Programs",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weight Loss Program"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weight Gain Program"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nutrition Coaching"
        }
      }
    ]
  }
};

// Local Business Schema - Use on Contact & Home pages
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "NutritionistCoach",
  "@id": `${siteUrl}/#localbusiness`,
  "name": "New Life Wellness Centre",
  "image": `${siteUrl}/heros.png`,
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
    "latitude": 13.1318,
    "longitude": 80.2081
  },
  "url": siteUrl,
  "telephone": baseSEO.phone,
  "email": baseSEO.email,
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "UPI", "Net Banking"],
  "currenciesAccepted": "INR",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Lost 15kg in 3 months with New Life Wellness! Excellent coaching and support."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Best wellness centre in Kolathur. Professional guidance and genuine Herbalife products."
    }
  ]
};

// Weight Loss Service Schema
export const weightLossServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Weight Loss Program",
  "provider": {
    "@type": "Organization",
    "name": "New Life Wellness Centre",
    "url": siteUrl
  },
  "areaServed": {
    "@type": "City",
    "name": "Chennai"
  },
  "description": "Proven weight loss program with Herbalife nutrition and expert coaching in Kolathur, Chennai",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
};

// FAQ Schema Generator
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Product Schema for Herbalife products
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "Herbalife Nutrition"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 year from now
    "seller": {
      "@type": "Organization",
      "name": "New Life Wellness Centre"
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 7,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 3,
          "maxValue": 7,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287",
    "bestRating": "5",
    "worstRating": "1"
  }
});

// Program/Service Product Schema (for program pages that need Product schema)
export const generateProgramProductSchema = (program: {
  name: string;
  description: string;
  image?: string; // Optional image URL
  price?: number; // Optional, defaults to 0 if not provided (for "Contact for price")
}) => {
  // Calculate priceValidUntil (1 year from now)
  const priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  // Default image if not provided
  const defaultImage = `${baseSEO.baseUrl}/heros.png`;
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": program.name,
    "description": program.description,
    "image": program.image || defaultImage,
    "brand": {
      "@type": "Brand",
      "name": "New Life Wellness Centre"
    },
    "offers": {
      "@type": "Offer",
      "price": program.price ?? 0, // Use 0 as placeholder for "Contact for price"
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": priceValidUntil,
      "seller": {
        "@type": "Organization",
        "name": "New Life Wellness Centre"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 7,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Course/Program Schema
export const generateProgramSchema = (program: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": program.name,
  "description": program.description,
  "provider": {
    "@type": "Organization",
    "name": "New Life Wellness Centre",
    "url": siteUrl
  },
  "url": program.url,
  "educationalLevel": "All Levels",
  "availableLanguage": ["English", "Tamil", "Hindi"],
  "offers": {
    "@type": "Offer",
    "category": "Health & Wellness",
    "availability": "https://schema.org/InStock"
  }
});

// Blog Article Schema
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "url": article.url,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "New Life Wellness Centre",
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl
    }
  }
});

// Video Schema (for transformation videos)
export const generateVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "duration": video.duration,
  "contentUrl": `${siteUrl}/videos/${video.name}`,
  "embedUrl": `${siteUrl}/embed/${video.name}`
});

// Component to inject structured data
export const StructuredData = ({ data }: { data: object | object[] }) => {
  const jsonLd = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;