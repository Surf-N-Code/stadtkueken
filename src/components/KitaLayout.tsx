import type { KitaSchemaData } from "@/types/kita";

export interface KitaLayoutProps {
  schemaData: KitaSchemaData;
  children: React.ReactNode;
}

export const KitaLayout = ({
  schemaData,
  children
}: KitaLayoutProps) => {
  return (
    <>
      {/* Local Business Schema for this specific page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChildCare",
            "name": schemaData.name,
            "description": schemaData.description,
            "url": schemaData.url,
            "telephone": schemaData.telephone,
            "email": schemaData.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": schemaData.address.streetAddress,
              "addressLocality": schemaData.address.addressLocality,
              "addressRegion": schemaData.address.addressRegion,
              "postalCode": schemaData.address.postalCode,
              "addressCountry": schemaData.address.addressCountry
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": schemaData.geo.latitude,
              "longitude": schemaData.geo.longitude
            },
            "openingHours": schemaData.openingHours,
            "priceRange": schemaData.priceRange,
            "image": schemaData.image
          })
        }}
      />
      {children}
    </>
  );
}; 