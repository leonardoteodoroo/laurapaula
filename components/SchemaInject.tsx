import React from "react";
import {
  FAQS,
  SITE_URL,
  ADDRESS,
  INSTAGRAM_LINK,
  GOOGLE_MAPS_LINK,
  PHONE_NUMBER,
} from "../constants";

const SchemaInject: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Estúdio Laura Paula",
    alternateName: "Laura Paula Manicure e Pedicure",
    image:
      "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/logo_laura_paula.webp?v=1763281302",
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: `+${PHONE_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Santa Luzia, 708, Jardim Coolapa",
      addressLocality: "São Sebastião do Paraíso",
      addressRegion: "MG",
      postalCode: "37955-226",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.9168868,
      longitude: -46.9934676,
    },
    hasMap: GOOGLE_MAPS_LINK,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [INSTAGRAM_LINK],
    description:
      "Estúdio Laura Paula - Especialista em cuidados com os pés, manicure, pedicure, nail design, tratamento de rachaduras e podologia estética em São Sebastião do Paraíso - MG.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Laura Paula",
    url: SITE_URL,
    description:
      "Manicure, pedicure e podologia estética avançada em São Sebastião do Paraíso - MG.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default SchemaInject;
