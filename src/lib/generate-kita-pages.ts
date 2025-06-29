import { getAllKitaIds } from "@/data/kitas";
import fs from "fs";
import path from "path";

export async function generateKitaPages() {
  const kitaIds = getAllKitaIds();
  
  // Create the dynamic route directory if it doesn't exist
  const dynamicRouteDir = path.join(process.cwd(), "src", "app", "kita", "[slug]");
  if (!fs.existsSync(dynamicRouteDir)) {
    fs.mkdirSync(dynamicRouteDir, { recursive: true });
  }
  
  // The dynamic route page is already created, so we just need to ensure it exists
  const pageFile = path.join(dynamicRouteDir, "page.tsx");
  
  if (!fs.existsSync(pageFile)) {
    const pageContent = `import { KitaPage as KitaPageComponent } from "@/components/kita/KitaPage";
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
  params: { slug: string } 
}): Promise<Metadata> {
  const kitaData = getKitaData(params.slug);
  
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
  };
}

export default function KitaPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const kitaData = getKitaData(params.slug);
  
  if (!kitaData) {
    return <div>Kita not found</div>;
  }

  return <KitaPageComponent kitaData={kitaData} />;
}
`;
    
    // Write the dynamic route page file
    fs.writeFileSync(pageFile, pageContent);
    console.log(`Generated dynamic route page at ${pageFile}`);
  }
  
  console.log(`Dynamic route ready for ${kitaIds.length} Kita pages:`);
  kitaIds.forEach(id => {
    console.log(`  - /kita/${id}`);
  });
}

// Run the generation if this file is executed directly
if (require.main === module) {
  generateKitaPages().catch(console.error);
} 