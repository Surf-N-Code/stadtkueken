# Reusable Kita Components with Next.js Dynamic Routes

This document explains how to use the new reusable components for creating Kita pages using Next.js dynamic routes with `generateStaticParams` and `generateMetadata`.

## Overview

The new system uses Next.js dynamic routes (`/kita/[slug]`) with `generateStaticParams` for static generation and `generateMetadata` for SEO-optimized metadata. This approach provides better performance and SEO benefits while maintaining the same reusable component structure.

## Architecture

### Dynamic Route Structure

- **`/kita/[slug]/page.tsx`** - Dynamic route that handles all Kita pages
- **`generateStaticParams`** - Generates static paths for all Kita locations at build time
- **`generateMetadata`** - Provides unique metadata for each Kita page
- **Reusable components** - Same component structure for all Kita pages

### Core Components

1. **`KitaPage`** - Main page component that combines all sections
2. **`KitaLayout`** - Handles schema markup (metadata now handled by `generateMetadata`)
3. **`KitaHero`** - Hero section with background image and key information
4. **`KitaInfo`** - Information about the Kita with values and features
5. **`KitaGallery`** - Image gallery with navigation
6. **`KitaTeam`** - Team member information
7. **`KitaGoogleReviews`** - Google reviews display
8. **`KitaMap`** - Location and map information
9. **`KitaContact`** - Contact information and booking

### Data Structure

All Kita data is stored in `src/data/kitas.ts` with the following structure:

```typescript
interface KitaData {
  id: string;           // Used as the slug in the URL
  name: string;
  location: string;
  metadata: KitaMetadata;    // For generateMetadata
  schemaData: KitaSchemaData; // For structured data
  hero: KitaHeroProps;
  info: KitaInfoProps;
  contact: KitaContactProps;
  gallery: KitaGalleryProps;
  team: KitaTeamProps;
  map: KitaMapProps;
  reviews: KitaGoogleReviewsProps;
}
```

## How to Add a New Kita

### 1. Add Data to `src/data/kitas.ts`

Add a new entry to the `kitaData` array with all the required information:

```typescript
{
  id: "new-kita-id",  // This becomes the URL slug: /kita/new-kita-id
  name: "New Kita Name",
  location: "Location Name",
  metadata: {
    title: "SEO Title",
    description: "SEO Description",
    keywords: "SEO Keywords",
    openGraph: {
      title: "Open Graph Title",
      description: "Open Graph Description",
      images: [...]
    },
    twitter: {
      title: "Twitter Title",
      description: "Twitter Description",
      images: [...]
    },
    geo: {
      region: "DE-HH",
      placename: "Hamburg-Location",
      position: "53.550000;9.950000",
      icbm: "53.550000, 9.950000"
    }
  },
  schemaData: {
    name: "Full Kita Name",
    description: "Kita Description",
    url: "https://stadtkueken.de/kita/new-kita-id",
    // ... other schema data
  },
  hero: {
    name: "New Kita Name",
    location: "Location Name",
    subtitle: "Welcome message",
    backgroundImage: "https://example.com/image.jpg",
    childrenCount: 60,
    ageRange: "10 Monate - 6 Jahre",
    // ... other hero props
  },
  // ... other sections
}
```

### 2. The Page is Automatically Generated

Thanks to `generateStaticParams`, the page will be automatically generated at build time. No manual page creation is needed!

### 3. Access the Page

The new Kita page will be available at `/kita/new-kita-id` and will have:
- ✅ Unique SEO metadata
- ✅ Structured data for search engines
- ✅ All the same high-quality components
- ✅ Static generation for optimal performance

## Next.js Functions Used

### generateStaticParams

```typescript
export async function generateStaticParams() {
  const kitaIds = getAllKitaIds();
  
  return kitaIds.map((id) => ({
    slug: id,
  }));
}
```

This function tells Next.js to pre-render pages for all Kita IDs at build time, ensuring optimal performance and SEO.

### generateMetadata

```typescript
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const kitaData = getKitaData(params.slug);
  
  return {
    title: kitaData.metadata.title,
    description: kitaData.metadata.description,
    // ... other metadata
  };
}
```

This function provides unique metadata for each Kita page, including:
- Page title and description
- Open Graph tags for social media
- Twitter Card metadata
- Geographic metadata
- Keywords for SEO

## Benefits of This Approach

1. **Automatic Static Generation** - All pages are pre-rendered at build time
2. **SEO Optimized** - Each page has unique metadata and structured data
3. **Performance** - Static pages load faster and are better for SEO
4. **Scalability** - Add new Kitas by simply adding data
5. **Type Safety** - Full TypeScript support with proper interfaces
6. **Maintainability** - Changes to components affect all pages automatically

## URL Structure

- `/kita/lohbekpark` - Kita Lohbekpark
- `/kita/altona` - Kita Altona
- `/kita/eimsbuettel` - Kita Eimsbüttel
- `/kita/[any-new-kita-id]` - Any new Kita

## File Structure

```
src/
├── app/
│   └── kita/
│       └── [slug]/
│           └── page.tsx          # Dynamic route for all Kita pages
├── components/
│   └── kita/                     # Reusable Kita components
├── data/
│   └── kitas.ts                  # Central data store
├── types/
│   └── kita.ts                   # TypeScript interfaces
└── lib/
    └── generate-kita-pages.ts    # Utility (now simplified)
```

## Usage Example

To create a new Kita page for "Kita Musterstraße":

1. Add the data to `src/data/kitas.ts` with `id: "musterstrasse"`
2. Build the project (`pnpm build`)
3. The page will be available at `/kita/musterstrasse`

The page will automatically include:
- SEO-optimized metadata
- Structured data for search engines
- All sections with the Kita's specific information
- Responsive design
- Accessibility features

## Migration from Static Routes

If you previously had static routes like `/kita-lohbekpark`, you can:

1. Keep the old route for backward compatibility
2. Add a redirect in `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/kita-lohbekpark',
        destination: '/kita/lohbekpark',
        permanent: true,
      },
    ];
  },
};
```

This ensures existing links continue to work while using the new dynamic route structure. 