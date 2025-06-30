import { KitaPage as KitaPageComponent } from "@/components/KitaPage";
import { getKitaData, getAllKitaIds } from "@/data/kitas";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const kitaIds = getAllKitaIds();
  
  return kitaIds.map((id) => ({
    slug: id,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const kitaData = getKitaData(slug);
  
  if (!kitaData) {
    return {
      title: "Kita not found",
    };
  }

  return {
    title: kitaData.metadata.title,
    description: kitaData.metadata.description,
    keywords: kitaData.metadata.keywords,
    authors: [{ name: "Stadtküken Natur-Kita" }],
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: kitaData.schemaData.url,
      title: kitaData.metadata.openGraph.title,
      description: kitaData.metadata.openGraph.description,
      images: kitaData.metadata.openGraph.images,
      locale: "de_DE",
      siteName: "Stadtküken Natur-Kita",
    },
    twitter: {
      card: "summary_large_image",
      title: kitaData.metadata.twitter.title,
      description: kitaData.metadata.twitter.description,
      images: kitaData.metadata.twitter.images,
    },
    other: {
      "geo.region": kitaData.metadata.geo.region,
      "geo.placename": kitaData.metadata.geo.placename,
      "geo.position": kitaData.metadata.geo.position,
      "ICBM": kitaData.metadata.geo.icbm,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          url: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          url: "/android-chrome-512x512.png",
        },
      ],
    },
  };
}

export default async function KitaPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const kitaData = getKitaData(slug);
  
  if (!kitaData) {
    return <div>Kita not found</div>;
  }

  return <KitaPageComponent kitaData={kitaData} />;
} 