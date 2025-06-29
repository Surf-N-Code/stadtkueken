import type { KitaSchemaData } from "@/types/kita";
import type { KitaHeroProps } from "@/components/kita/Hero";
import type { KitaInfoProps } from "@/components/kita/KitaInfo";
import type { KitaContactProps } from "@/components/kita/Contact";
import type { KitaGalleryProps, GalleryImage } from "@/components/kita/Gallery";
import type { KitaTeamProps, TeamMember } from "@/components/kita/Team";
import type { KitaMapProps } from "@/components/kita/Map";
import type { KitaGoogleReviewsProps, ReviewData } from "@/components/kita/GoogleReviews";

export interface KitaMetadata {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    title: string;
    description: string;
    images: string[];
  };
  geo: {
    region: string;
    placename: string;
    position: string;
    icbm: string;
  };
}

export interface KitaData {
  id: string;
  name: string;
  location: string;
  metadata: KitaMetadata;
  schemaData: KitaSchemaData;
  hero: KitaHeroProps;
  info: KitaInfoProps;
  contact: KitaContactProps;
  gallery: KitaGalleryProps;
  team: KitaTeamProps;
  map: KitaMapProps;
  reviews: KitaGoogleReviewsProps;
}

export const kitaData: KitaData[] = [
  {
    id: "lohbekpark",
    name: "Lohbekpark",
    location: "Lokstedt",
    metadata: {
      title: "Kita Lohbekpark Hamburg-Lokstedt | Stadtküken Natur-Kita | Achtsamkeit & Natur",
      description: "Kita Lohbekpark in Hamburg-Lokstedt: Naturnahe Betreuung für 65 Kinder (10 Monate - 6 Jahre). Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen! ☎ 040/3289012-18",
      keywords: "Kita Lohbekpark, Kita Hamburg Lokstedt, Natur-Kita Hamburg, Stadtküken, Kitaplatz Hamburg, Achtsamkeit Kinder, Naturpädagogik, Kita Gutschein Hamburg, Kinderbetreuung Lokstedt, Lohkoppelweg",
      openGraph: {
        title: "Kita Lohbekpark Hamburg-Lokstedt | Stadtküken Natur-Kita",
        description: "Naturnahe Betreuung für 65 Kinder in Hamburg-Lokstedt. Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen!",
        images: [
          {
            url: "https://stadtkueken.de/wp-content/uploads/Favicon-150x150.png",
            width: 600,
            height: 600,
            alt: "Kita Lohbekpark Hamburg-Lokstedt",
          },
        ],
      },
      twitter: {
        title: "Kita Lohbekpark Hamburg-Lokstedt | Stadtküken Natur-Kita",
        description: "Naturnahe Betreuung für 65 Kinder in Hamburg-Lokstedt. Achtsamkeit, gesunde Ernährung & Partizipation.",
        images: ["https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg"],
      },
      geo: {
        region: "DE-HH",
        placename: "Hamburg-Lokstedt",
        position: "53.598765;9.923456",
        icbm: "53.598765, 9.923456",
      },
    },
    schemaData: {
      name: "Stadtküken Kita Lohbekpark",
      description: "Natur-Kita in Hamburg-Lokstedt mit achtsamer Betreuung für Kinder von 10 Monaten bis 6 Jahren",
      url: "https://stadtkueken.de/kita-lohbekpark",
      telephone: "+49-40-3289012-18",
      email: "lohbekpark@stadtkueken.de",
      address: {
        streetAddress: "Lohkoppelweg 35b",
        addressLocality: "Hamburg",
        addressRegion: "Hamburg",
        postalCode: "22529",
        addressCountry: "DE"
      },
      geo: {
        latitude: 53.598765,
        longitude: 9.923456
      },
      openingHours: "Mo-Fr 07:00-17:00",
      priceRange: "Kita-Gutschein akzeptiert",
      image: "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg"
    },
    hero: {
      name: "Lohbekpark",
      location: "Lokstedt",
      subtitle: "Willkommen in der Kita Lohbekpark in Lokstedt",
      backgroundImage: "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg",
      childrenCount: 65,
      ageRange: "10 Monate - 6 Jahre",
      address: "Lohkoppelweg 35b",
      postalCode: "22529",
      city: "Hamburg",
      openingHours: "Mo-Fr 07:00-17:00",
      sinceDate: "November 2024",
      phoneNumber: "04032890118"
    },
    info: {
      name: "Lohbekpark",
      location: "Lokstedt",
      description: "Seit November 2024 heißen wir in unserer neuen Kita in Hamburg-Lokstedt rund 65 kleine Küken im Alter von einem bis sechs Jahren willkommen. Unser einzigartiges Konzept verbindet Natur, Achtsamkeit und Partizipation zu einem Ort, an dem Kinder in einer warmen, wertschätzenden Atmosphäre spielen, lernen und wachsen können.",
      paragraph1: "Die hellen, neu gestalteten Räume laden zum Wohlfühlen ein, während der liebevoll angelegte naturnahe Außenbereich den perfekten Rückzugsort mitten in der Stadt bietet. Hier können Kinder die Natur entdecken, Abenteuer erleben und einfach Kind sein.",
      paragraph2: "Unser engagiertes pädagogisches Team begleitet jedes Kind individuell und mit Herz. Mit einem achtsamen Blick auf die Bedürfnisse der Kinder schaffen wir Raum für Entfaltung und stärken sie auf ihrem Weg zu selbstbewussten und kreativen Persönlichkeiten.",
      quote: "Wir ermutigen unsere Kinder dazu in sich hineinzuhören, Gefühle nicht zu verdrängen, sondern aktiv wahrzunehmen, zu benennen und sie einzusortieren.",
      imageUrl: "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg",
      imageAlt: "Außenansicht Kita Lohbekpark",
      activities: {
        title: "Aktivitäten",
        description: "Vielfältige Aktivitäten in der Natur fördern die Kreativität und das Bewusstsein für die Umwelt unserer Kinder."
      },
      nutrition: {
        title: "Ernährung",
        description: "Frische, gesunde Mahlzeiten nach DGE-Standard fördern eine bewusste Ernährung von klein auf."
      },
      garden: {
        title: "Ackerracker",
        description: "Unser eigener Gemüsegarten lehrt Kinder, woher das Essen kommt und wie es wächst."
      },
      values: {
        mindfulness: "Wir achten auf jedes Kind und seine individuellen Bedürfnisse",
        nature: "Die Natur ist unser wichtigster Lernort und Spielplatz",
        participation: "Kinder gestalten ihren Kita-Alltag aktiv mit"
      }
    },
    contact: {
      name: "Lohbekpark",
      location: "Lokstedt",
      address: "Lohkoppelweg 35b",
      postalCode: "22529",
      city: "Hamburg",
      openingHours: "Montag – Freitag\n07:00 – 17:00 Uhr",
      groups: "1 Krippen-Gruppe (15 Kinder)\n2 Elementar-Gruppen (ca. 50 Kinder)",
      phoneNumber: "040 3289 012 - 18",
      email: "info@stadtkueken.de",
      contactPerson: "Judith Müller"
    },
    gallery: {
      title: "Unsere Einrichtung",
      subtitle: "Entdecke unsere liebevoll gestalteten Räume und den wunderschönen naturnahen Außenbereich in der Kita Lohbekpark",
      images: [
        {
          src: "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg",
          alt: "Außenansicht Kita Lohbekpark"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-7.jpg",
          alt: "Elementarbereich"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-4.jpg",
          alt: "Garderobe"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-9.jpg",
          alt: "Krippenbereich"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-6.jpg",
          alt: "Waschraum"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-47.jpg",
          alt: "Kinder spielen an der Matschküche"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-25.jpg",
          alt: "Gemüse anbauen und ernten in der Kita"
        },
        {
          src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-13.jpg",
          alt: "Kinder lernen gesunde Ernährung"
        }
      ],
      roomsTitle: "Unsere Räume",
      roomsDescription: "In unseren kindgerechten, hellen Räumen finden unsere Küken den perfekten Wohlfühlort zum Spielen mit vielen gemütlichen Rückzugsorten zum Ausruhen, Lesen & Kuscheln.",
      outdoorTitle: "Außenbereich",
      outdoorDescription: "Unser Außenbereich bietet viel Platz für abwechslungsreiches und kreatives Spielen unter freiem Himmel & Auszeiten vom Stadtleben in der Natur."
    },
    team: {
      title: "Unsere Leitung",
      subtitle: "Leidenschaftliche Pädagogin, die Ihr Kind auf seinem Weg begleitet",
      teamMember: {
        name: "Judith Müller",
        title: "Leitung Kita Lohbekpark",
        imageUrl: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Website-Bilder-Portraet-Judith-Lohbekpark-600x600.png",
        phoneNumber: "040 3289 012 - 18",
        email: "lohbekpark@stadtkueken.de",
        quote: "Die partnerschaftliche und enge Zusammenarbeit zwischen den Eltern und unserer Kita stellt eine Voraussetzung für das Wohlbefinden und die Entwicklung unserer Kinder dar."
      }
    },
    map: {
      name: "Lohbekpark",
      location: "Lokstedt",
      address: "Lohkoppelweg 35b",
      postalCode: "22529",
      city: "Hamburg",
      district: "Lokstedt",
      description: "Besuchen Sie uns in der Lohkoppelweg 35b, 22529 Hamburg. Wir freuen uns auf Ihren Besuch!",
      publicTransport: "Gut erreichbar mit Bus und Bahn. Haltestellen in der Nähe.",
      parking: "Parkplätze in der Umgebung verfügbar.",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.1234567890123!2d9.9234567890123456!3d53.5987654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f5a1b2c3d4e%3A0x1234567890abcdef!2sLohkoppelweg%2035B%2C%2022529%20Hamburg!5e0!3m2!1sde!2sde!4v1234567890123"
    },
    reviews: {
      title: "Was Eltern über uns sagen",
      subtitle: "Echte Bewertungen von Eltern aus unserer Kita-Gemeinschaft",
      reviewData: {
        "formattedAddress": "Lokstedter Steindamm 51, 22529 Hamburg, Germany",
        "displayName": {
          "text": "Kinderstadt Kita Lokstedt",
          "languageCode": "de"
        },
        "reviews": [
          {
            "name": "places/ChIJvx6dfqWIsUcR2kaTyyToP8U/reviews/ChdDSUhNMG9nS0VJQ0FnSUNHbTktZW5RRRAB",
            "relativePublishTimeDescription": "3 years ago",
            "rating": 5,
            "text": {
              "text": "We changed our kita when our son was almost 2 years old and its been a good 9 months he has learned a lot of things and he loves to go to the kita 😊. Kita Leitung is really nice and all the people here are wonderful .",
              "languageCode": "en"
            },
            "originalText": {
              "text": "We changed our kita when our son was almost 2 years old and its been a good 9 months he has learned a lot of things and he loves to go to the kita 😊. Kita Leitung is really nice and all the people here are wonderful .",
              "languageCode": "en"
            },
            "authorAttribution": {
              "displayName": "Nitin Bhatia",
              "uri": "https://www.google.com/maps/contrib/102426340739658140203/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocIf9rbLzmVLRHKi6aPhvq7kse6v0xNvnFhLzSqkT4_r6cAutNg=s128-c0x00000000-cc-rp-mo-ba4"
            },
            "publishTime": "2021-11-10T07:57:40.937705Z",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNHbTktZW5RRRAB!2m1!1s0x47b188a57e9d1ebf:0xc53fe824cb9346da"
          },
          {
            "name": "places/ChIJvx6dfqWIsUcR2kaTyyToP8U/reviews/ChZDSUhNMG9nS0VJQ0FnSUNual82bE1REAE",
            "relativePublishTimeDescription": "9 months ago",
            "rating": 5,
            "text": {
              "text": "Our child has loved going to daycare here for 2 1/2 years. We started in the crèche and have now been in elementary school for a year. The familiarization takes place between the groups by the educators. They are very warm and attentive both in the crèche area and with the Ele children. In addition, the teachers are very consistent at the daycare, which is great for the children.\n\nI would particularly like to emphasize the commitment of the educators when it comes to offering excursions and events. Every week is an excursion day and no effort is spared here. More distant adventure playgrounds, farms, puppet theaters, circuses, zoos, miniature wonderlands and much more have already been done. There are also always festivals or daycare overnight stays.\n\nThe lunch offered is varied and balanced. The popular children's classics can also be found on the menu every now and then.\n\nWe are very satisfied and therefore give it 5 stars.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Unser Kind geht seit 2 1/2 Jahren hier sehr gerne zur Kita. Wir sind in der Krippe gestartet und inzwischen seit einem Jahr im Elementarbereich. Die Eingewöhnung geschieht hier zwischen den Gruppen durch die Erzieher. Diese sind sowohl im Krippenbereich, als auch bei den Ele-Kindern sehr herzlich und zugewandt. Zudem sind die Erzieher sehr beständig in der Kita, was für die Kinder toll ist.\n\nBesonders hervorheben möchte ich das Engagement der Erzieher was das Angebot an Ausflügen und Veranstaltungen angeht. Jede Woche ist Ausflugstag und hier werden keine Mühen gescheut. Weiter entfernte Abenteuerspielplätze, Bauernhof, Puppentheater, Zirkus, Tierpark, Miniaturwunderland und vieles mehr wurde schon gemacht. Zudem finden auch immer wieder Feste oder Kita-Übernachtungen statt.\n\nDas angebotene Mittagessen ist abwechslungsreich und ausgewogen. Die beliebten Kinderklassiker finden sich aber dann und wann auch im Menü wieder.\n\nWir sind sehr zufrieden und somit gibt es 5 Sterne.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Julia Zeppenfeld",
              "uri": "https://www.google.com/maps/contrib/103445186435877312814/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUzfOOgYj_OXF-wvzRrQ1_wGM-YubbuooX1IMhN6rQunWO0YeE=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2024-10-01T07:19:39.605536Z",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNual82bE1REAE!2m1!1s0x47b188a57e9d1ebf:0xc53fe824cb9346da"
          }
        ]
      }
    }
  },
  // Example Kita 2 - Altona
  {
    "id": "baumpieper",
    "name": "Baumpieper",
    "location": "Neugraben-Fischbek",
    "metadata": {
      "title": "Kita Baumpieper Neugraben-Fischbek | Stadtküken Natur-Kita | Achtsamkeit & Natur",
      "description": "Kita Baumpieper im Fischbeker Heidbrook (Neugraben-Fischbek): Naturnahe Betreuung für 95 Kinder (10 Monate – 6 Jahre). Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen!",
      "keywords": "Kita Baumpieper, Kita Neugraben-Fischbek, Natur-Kita Hamburg, Stadtküken, Kitaplatz Hamburg, Achtsamkeit Kinder, Naturpädagogik, Kita-Gutschein Hamburg, Kinderbetreuung Neugraben-Fischbek",
      "openGraph": {
        "title": "Kita Baumpieper Neugraben-Fischbek | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung für 95 Kinder im Fischbeker Heidbrook. Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen!",
        "images": [
          {
            "url": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-1.jpg",
            "width": 1200,
            "height": 630,
            "alt": "Kita Baumpieper Neugraben-Fischbek"
          }
        ]
      },
      "twitter": {
        "title": "Kita Baumpieper Neugraben-Fischbek | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung für 95 Kinder im Fischbeker Heidbrook. Achtsamkeit, gesunde Ernährung & Partizipation.",
        "images": [
          "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-1.jpg"
        ]
      },
      "geo": {
        "region": "DE-HH",
        "placename": "Hamburg-Neugraben-Fischbek",
        "position": "53.455000;9.806000",
        "icbm": "53.455000, 9.806000"
      }
    },
    "schemaData": {
      "name": "Stadtküken Kita Baumpieper",
      "description": "Natur-Kita in Hamburg-Neugraben-Fischbek mit achtsamer Betreuung für Kinder von 10 Monaten bis 6 Jahren",
      "url": "https://stadtkueken.de/standorte/kita-baumpieper-neugraben-fischbek/",
      "telephone": "+49-40-328901217",
      "email": "baumpieper@stadtkueken.de",
      "address": {
        "streetAddress": "Baumpieperweg 5",
        "addressLocality": "Hamburg",
        "addressRegion": "Hamburg",
        "postalCode": "21149",
        "addressCountry": "DE"
      },
      "geo": {
        "latitude": 53.455000,
        "longitude": 9.806000
      },
      "openingHours": "Mo-Fr 07:00-17:00",
      "priceRange": "Kita-Gutschein akzeptiert",
      "image": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-1.jpg"
    },
    "hero": {
      "name": "Baumpieper",
      "location": "Neugraben-Fischbek",
      "subtitle": "Willkommen in der Kita Baumpieper",
      "backgroundImage": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-1.jpg",
      "childrenCount": 95,
      "ageRange": "10 Monate – 6 Jahre",
      "address": "Baumpieperweg 5",
      "postalCode": "21149",
      "city": "Hamburg",
      "openingHours": "Mo-Fr 07:00-17:00",
      "sinceDate": "April 2024",
      "phoneNumber": "040 3289 012 - 17"
    },
    "info": {
      "name": "Baumpieper",
      "location": "Neugraben-Fischbek",
      "description": "Im April 2024 eröffnete unsere Stadtküken Natur-Kita Baumpieper im Fischbeker Heidbrook. Direkt am Naturschutzgebiet Fischbeker Heide ist sie der ideale Ort für kleine Entdecker, die Auszeiten in der Natur lieben.",
      "paragraph1": "Die hellen, neu entstandenen Räume laden zum Wohlfühlen ein, während der naturnahe Außenbereich mitten in der Stadt Kindern viel Platz zum Forschen, Spielen und Entspannen bietet.",
      "paragraph2": "Unser engagiertes pädagogisches Team begleitet jedes Kind individuell und mit Herz. Mit einem achtsamen Blick auf Bedürfnisse schaffen wir Raum für Entfaltung und fördern selbstbewusste, kreative Persönlichkeiten.",
      "quote": "Wir ermutigen unsere Kinder dazu, in sich hineinzuhören, Gefühle wahrzunehmen, zu benennen und zu verstehen.",
      "imageUrl": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-2.jpg",
      "imageAlt": "Außenbereich Kita Baumpieper",
      "activities": {
        "title": "Aktivitäten",
        "description": "Vielfältige Natur-Projekte und Forscher-Abenteuer fördern Kreativität und Umweltbewusstsein."
      },
      "nutrition": {
        "title": "Ernährung",
        "description": "Frische, gesunde Mahlzeiten nach DGE-Standard legen den Grundstein für bewusste Essgewohnheiten."
      },
      "garden": {
        "title": "Ackerracker",
        "description": "Unser eigener Gemüsegarten zeigt Kindern, woher ihr Essen kommt und wie es wächst."
      },
      "values": {
        "mindfulness": "Achtsamkeit für jedes Kind und seine Bedürfnisse",
        "nature": "Die Natur ist unser größter Lernort",
        "participation": "Kinder gestalten ihren Kita-Alltag aktiv mit"
      }
    },
    "contact": {
      "name": "Baumpieper",
      "location": "Neugraben-Fischbek",
      "address": "Baumpieperweg 5",
      "postalCode": "21149",
      "city": "Hamburg",
      "openingHours": "Montag – Freitag\n07:00 – 17:00 Uhr",
      "groups": "3 Krippen-Gruppen (45 Kinder)\n2 Elementar-Gruppen (ca. 50 Kinder)",
      "phoneNumber": "040 3289 012 - 17",
      "email": "baumpieper@stadtkueken.de",
      "contactPerson": "Cagla Budak"
    },
    "gallery": {
      "title": "Unsere Einrichtung",
      "subtitle": "Entdecke liebevoll gestaltete Räume und unseren naturnahen Außenbereich",
      "images": [
        {
          "src": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-1.jpg",
          "alt": "Außenansicht Kita Baumpieper"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-2.jpg",
          "alt": "Sandkasten und Sonnensegel Kita Baumpieper"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-3.jpg",
          "alt": "Außenbereich Kita Baumpieper"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-4.jpg",
          "alt": "Innenraum Kita Baumpieper"
        }
      ],
      "roomsTitle": "Unsere Räume",
      "roomsDescription": "Helle, kindgerechte Räume mit vielen Rückzugsorten zum Spielen, Lesen und Kuscheln.",
      "outdoorTitle": "Außenbereich",
      "outdoorDescription": "Großzügiger, naturnaher Außenbereich für kreatives und freies Spiel unter freiem Himmel."
    },
    "team": {
      "title": "Unsere Leitung",
      "subtitle": "Leidenschaftliche Pädagogin, die Ihr Kind begleitet",
      "teamMember": {
        "name": "Cagla Budak",
        "title": "Leitung Kita Baumpieper",
        "imageUrl": "https://stadtkueken.de/wp-content/uploads/2021/09/Stadtku%CC%88ken-Kitaleitung-600x400.png",
        "phoneNumber": "040 3289 012 - 17",
        "email": "baumpieper@stadtkueken.de",
        "quote": "Partnerschaftliche Zusammenarbeit mit Eltern ist die Grundlage für das Wohlbefinden und die Entwicklung unserer Kinder."
      }
    },
    "map": {
      "name": "Baumpieper",
      "location": "Neugraben-Fischbek",
      "address": "Baumpieperweg 5",
      "postalCode": "21149",
      "city": "Hamburg",
      "district": "Neugraben-Fischbek",
      "description": "Besuchen Sie uns im Fischbeker Heidbrook – Baumpieperweg 5, 21149 Hamburg.",
      "publicTransport": "Gut erreichbar mit Bus und S-Bahn; Haltestellen in unmittelbarer Nähe.",
      "parking": "Öffentliche Parkplätze in der Umgebung vorhanden.",
      "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.0899691103486!2d9.808310612702217!3d53.46736357220925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b19b6d28479edb%3A0x1209301e6c1d1080!2sStadtk%C3%BCken%20Kita%20Baumpieper!5e1!3m2!1sen!2sde!4v1751233338198!5m2!1sen!2sde"
    },
    "reviews": {
      "title": "Was Eltern über uns sagen",
      "subtitle": "Echte Bewertungen von Eltern aus unserer Kita-Gemeinschaft",
      "reviewData": {
        "formattedAddress": "Baumpieperweg 5, 21149 Hamburg, Germany",
        "displayName": {
          "text": "Stadtküken Kita Baumpieper",
          "languageCode": "de"
        },
        "reviews": [
          {
            "name": "places/ChIJ255HKG2bsUcRgBAdbB4wCRI/reviews/ChdDSUhNMG9nS0VJQ0FnTUNBcHRUaTRnRRAB",
            "relativePublishTimeDescription": "4 months ago",
            "rating": 5,
            "text": {
              "text": "Hello everyone,\n\nThe Baumpieperweg daycare center and its team of educators and management welcomed us and our children very warmly and professionally. We think the facility is great and very well set up - you absolutely don't have the feeling that the teachers are overloaded or overwhelmed. Our children feel very comfortable there.\nThe daycare center is very well positioned in terms of information and digitalization; there is no \"business\" here like we see in other facilities.\nThe teachers and the daycare management are always super friendly and always have an open ear for the concerns and suggestions from us parents.\nThe rooms are bright and not so cluttered. The outside area is also well designed and what we really appreciate is that it is protected from view from the outside.\nWe are very happy to have finally found a daycare center and a team where we, especially our two children, feel comfortable and understood.\nI would like to thank the teachers and also the daycare management very much for this.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Hallo zusammen,\n\nDie Kita Baumpieperweg und ihr Team von Erzieherinnen und ihre Leitung haben uns und unsere Kinder sehr Herzlich und professionell aufgenommen. Wir finden die Einrichtung super und sehr gut aufgestellt man hat absolut nicht das Gefühl das die Erzieherinnen überladen oder überfordert sind. Unsere Kinder fühlen sich sehr wohl dort.\nDie Kita ist sehr gut aufgestellt bezüglich Information und Digitalisierung, man hat hier keine Zettel Wirtschaft wie man es von anderen Einrichtungen kennt.\nDie Erzieherinnen sowohl auch die Kita Leitung sind immer super freundlich und haben immer ein offenes Ohr für die sorgen und Anregungen von uns Eltern.\nDie Räume sind Hell und nicht so überladen. Auch der Aussenbereich ist gut gestaltet und was wir sehr schätzen nach außen Sichtgeschützt.\nWir sind sehr froh darüber endlich eine Kita und ein Team gefunden zu haben wo wir uns das vorallem unsere zwei Kinder sich wohl und verstanden fühlen.\nDafür möchte ich mich bei den Erzieherinnen und auch bei der Kita Leitung sehr Herzlich bedanken.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Kadir Balat",
              "uri": "https://www.google.com/maps/contrib/117352205458837092180/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLci1ayYFLqBQxUjB9spwJd3mwlRHZ3HuhknzxcqAwKUZVVVQ=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-01-31T11:20:10.772357Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnTUNBcHRUaTRnRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTUNBcHRUaTRnRRAB!2m1!1s0x47b19b6d28479edb:0x1209301e6c1d1080"
          },
          {
            "name": "places/ChIJ255HKG2bsUcRgBAdbB4wCRI/reviews/ChZDSUhNMG9nS0VJQ0FnTUNBOHZ6ZGJnEAE",
            "relativePublishTimeDescription": "5 months ago",
            "rating": 5,
            "text": {
              "text": "A great and loving team,\nwho, despite a thin cast, overcome all hurdles and give their best every day. The teachers are very direct in their communication and still remain very loving. Great daycare",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Ein tolles und liebevolles Team,\ndie trotz dünner Besetzung alle Hürden nehmen und jeden Tag ihr Bestes geben. Die Erzieherinnen sind sehr direkt in der Kommunikation und bleiben dabei trozdem sehr liebevoll. Tolle Kita",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Daniel Petrulat",
              "uri": "https://www.google.com/maps/contrib/113733054822656244497/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLZTE0_wUd1V_PBmvPgPx43CbCjoKj5xk08wlqyptnvcpFDVA=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-01-30T17:37:31.927346Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChZDSUhNMG9nS0VJQ0FnTUNBOHZ6ZGJnEAE&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnTUNBOHZ6ZGJnEAE!2m1!1s0x47b19b6d28479edb:0x1209301e6c1d1080"
          },
          {
            "name": "places/ChIJ255HKG2bsUcRgBAdbB4wCRI/reviews/ChZDSUhNMG9nS0VJQ0FnTUNBeHR1ZEtREAE",
            "relativePublishTimeDescription": "4 months ago",
            "rating": 5,
            "text": {
              "text": "Hello everyone,\nThe Baumpieper daycare center is extremely well positioned when it comes to administration. Modern digital contract design and contract management. Top! Both contracts and feedback are requested continuously (digitally). After the first parents' evening and 2 digital parents' or theme evenings (yes, that's welcome, because other facilities don't have that!), the daycare center is super flexible and digitally set up. Digital app for important information, absences, sick notes etc., no paperwork at the entrance and the compartments, especially no calls for important information such as: Annual planning.\n\nEverything is ordered, collected and structured. Menus are made available digitally, as are annual plans and links, and group and educator communication also takes place via the app. Any changes are communicated quickly and directly.\n\nThe admission interview, the tour and the introduction of the teachers were competent, professional and very open-minded. I saw cultural competencies in all employees without exception. Wow!  A dream for multilingual children!\n\nEvery day I see a well-groomed, appropriate appearance of the educators, highly committed, competent educators and a good selection of personnel management. Not a bad Monday mood, but rather Motivational Monday - I also get some of this positive energy :-) Thank you for that! The teachers give me daily, detailed feedback about my children and the events of the day. I see my children happy, playing and feeling understood. The children are included, emotionally absorbed, treated and educated in a needs-oriented manner and supported.\n\nMy respect to the educators!\nThis is what I want for every parent if they have a genuine interest in their children. I wish the educators more support, as they are currently a bit thin on staff (this should change). Competent, very sensitive teachers who also keep an eye on the concept.\n\nThe rooms are wonderfully designed. My impression was that feng shui was used here. It motivated me and inspired me at the same time. Overloaded and cluttered rooms or walls cannot be found here. This creates clarity and for newcomers like us, it was a good concept as we also don't want to be overstimulated.\n\nWe look forward to the future with you, thank you very much",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Hallo zusammen,\nDie Kita Baumpieper ist was die Verwaltung betrifft, super gut aufgestellt. Moderne digitale Vertragsgestaltung und Vertragsverwaltung. Top! Sowohl Verträge als auch Feedback werden kontinuirlich (digital) eingefordert. Nach dem ersten Elternabend und 2 digitalen Eltern bzw. Themenabenden ( ja, das darf gerne bewundert werden, denn andere Einrichtungen haben das gar nicht!), ist die Kita super flexibel und digital aufgestellt. Digitale App für wichtige Informationen, Abwesenheiten, Krankmeldungen und Co. , keine Zettelarie am Eingang und den Fächern, vor allem keine Zurufe von wichtigen Infos wie z.b. Jahresplanung.\n\nAlles ist geordnet, gesammelt und strukturiert. Speisepläne werden digital zur Verfügung gestellt, Jahrespläne und Links ebenfalls und die Gruppen bzw. Erzieherkommunikation läuft auch über die App. Etwaige Änderungen werden schnell und direkt kommuniziert.\n\nDas Aufnahmegespräch, die Führung und die Vorstellung der Erzieherinnen war kompetent, professionell aufgestellt und sehr aufgeschlossen. Kulturelle Kompetenzen habe ich ausnahmslos bei allen Mitarbeitern gesehen. Wow!  Für mehrsprachige-  Kinder ein Traum!\n\nIch sehe täglich ein gepflegtes, angemessenes Erscheinungsbild der Erzieherinnen, hochgradig engagierte, kompetente Erzieherinnen und eine gute Auswahl der Personalführung. Keine miese Montagsstimmung sondern eher Motivations Monday- von dieser positiven  Energie bekomme ich auch was ab :-) Dankeschön dafür! Die Erzieherinnen geben mir ein tägliches, ausführliches Feedback zu meinen Kindern und den Geschehnissen des Tages. Ich sehe, dass meine Kinder fröhlich, spielend und sich verstanden fühlen. Die Kinder werden einbezogen, emotional aufgefangen, bedürfnisorientiert behandelt und erzogen, sowie gestützt.\n\nMeine Hochachtung an die Erzieherinnen!\nDas wünsche ich mir für jedes Elternteil, wenn sie ein echtes Interesse an ihren Kindern haben. Ich wünsche den Erzieherinnen mehr Unterstützung, da sie aktuell (soll sich ändern) personell etwas dünn aufgestellt sind. Kompetente, sehr einfühlsame Erzieherinnen,  die ebenfalls das Konzept im Auge behalten.\n\nDie Räume sind wundervoll gestaltet. Mein Eindruck war, dass hier mit feng shui gearbeitet worden ist. Es hat mich motiviert und zugleich inspiriert. Überfrachtet und überladene Räume bzw. Wände sind hier nicht zu finden. Das schafft Klarheit und für Neuankömmlinge, wie wir es waren, war es ein gutes Konzept, da wir uns ebenfalls nicht wünschen, überreizt zu sein.\n\nWir freuen uns auf die Zukunft mit euch, vielen Dank",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Anna Deren",
              "uri": "https://www.google.com/maps/contrib/105851650262407477668/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLsvGLF5_yPwogRlHXKLg9tj0u97CQcbeLbaq84emJHb3L0Tg=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-01-31T10:50:48.777186Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChZDSUhNMG9nS0VJQ0FnTUNBeHR1ZEtREAE&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnTUNBeHR1ZEtREAE!2m1!1s0x47b19b6d28479edb:0x1209301e6c1d1080"
          },
          {
            "name": "places/ChIJ255HKG2bsUcRgBAdbB4wCRI/reviews/ChdDSUhNMG9nS0VJQ0FnTUNBMG9uQXZnRRAB",
            "relativePublishTimeDescription": "5 months ago",
            "rating": 5,
            "text": {
              "text": "My child comes home beaming with joy every day and tells me about the great things they have experienced. Great teachers, keep it up.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Mein Kind kommt jeden Tag freudestrahlend nachhause und erzählt mir was sie tolles erlebt haben. Super Erzieherinnen, weiter so.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Chris XXX",
              "uri": "https://www.google.com/maps/contrib/105299643296276338073/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocIpUzu7tSWn8_HqBxqYUqvraQwQyAzIS1ct9o_ibGFVPV6a0Q=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-01-30T14:46:07.167824Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnTUNBMG9uQXZnRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTUNBMG9uQXZnRRAB!2m1!1s0x47b19b6d28479edb:0x1209301e6c1d1080"
          },
          {
            "name": "places/ChIJ255HKG2bsUcRgBAdbB4wCRI/reviews/ChdDSUhNMG9nS0VJQ0FnSUNyaF9hcDRBRRAB",
            "relativePublishTimeDescription": "11 months ago",
            "rating": 5,
            "text": {
              "text": "Our daughter has been attending the Baumpieper daycare center since it reopened and we have been really happy ever since. It was important to us that our daughter did not attend a sensory-overloaded facility with far too many children in a small space. The teachers are all passionate about what they do and think every day about how they can make each day more beautiful than the last. Great care is taken to be out in the fresh air at every opportunity that arises and to bring the children closer to nature in keeping with the concept. For every life situation within every family, a solution is found together so that the balance between the daycare center and the parents' home is harmonious. We take a detour every day, even though we have facilities nearby, and we don't regret it for a day.\nRegarding a previous speaker, I would like to add:\nExpecting a daycare center that has only existed for 3 months to be able to keep every promise immediately and on opening day and for everything to run smoothly shows signs of a clear loss of touch with reality. To pillory an educator for the way she greets her is also very weak. They are still educators and not butlers who have to court everyone who crosses their path. We are happy that our daughter is not overwhelmed with stimuli and therefore has plenty of space for her creativity, which is encouraged here every day. Our daughter is currently the child who is cared for the longest each day - so if anyone can evaluate the daycare comprehensively and truthfully, it would be us and not someone who has only looked at the facility for half an hour. With this in mind, THANK YOU for existing and for creating a safe space for our daughter outside of her home every day.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Unsere Tochter besucht seit der Neueröffnung nun schon die Kita Baumpieper und wir sind wirklich glücklich seither. Uns war es wichtig, dass unsere Tochter keine reizüberflutete Einrichtung mit viel zu vielen Kindern auf engstem Raum besucht. Die Erzieherinnen sind alle mit Herzblut bei der Sache und überlegen täglich, wie sie jeden Tag schöner als den vorherigen gestalten können. Es wird sehr darauf geachtet bei jeder sich ergebenden Gelegenheit an der frischen Luft zu sein und konzeptgetreu den Kindern die Natur näher zu bringen. Für jede Lebenssituation innerhalb einer jeden Familie wird gemeinsam eine Lösung gefunden, damit die Balance zwischen der Kita und dem Elternhaus stimmig ist. Wir fahren täglich einen Umweg, obwohl wir auch Einrichtungen in unserer Nähe hätten und wir bereuen es keinen Tag.\nBezogen auf eine Vorrednerin möchte ich noch ergänzen:\nVon einer Kita, die erst seit 3 Monaten existiert zu erwarten, dass jedes Versprechen auf der Stelle und zum Tag der Eröffnung eingehalten werden kann und alles reibungslos läuft, weist Anzeichen  eines klaren Realitätsverlustes auf. Eine Erzieherin für ihre Art der Begrüßung hier an den Pranger zu stellen ist ebenfalls ganz schwach. Es sind immer noch Erzieher und keine Butler, die jedem den Hof machen müssen, der ihnen über den Weg läuft. Wir sind glücklich, dass unsere Tochter nicht mit Reizen überschüttet wird und somit viel Platz für ihre Kreativität bleibt, die hier Tag für Tag gefördert wird. Unsere Tochter ist aktuell das Kind, was täglich am längsten betreut wird - wenn jemand die Kita daher umfangreich und wahrheitsgemäß bewerten kann, dann sind wir das und niemand, der sich die Einrichtung nur eine halbe Stunde angeschaut hat. In diesem Sinne, DANKE, dass es euch gibt und, dass ihr für unsere Tochter täglich ein Safespace, außerhalb ihres Zuhauses schafft.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Aylin Fetai",
              "uri": "https://www.google.com/maps/contrib/114666695029502627226/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUb5ch-qwXA9B1QrPnosJ2MeFmfY_zCatH1Z8C0YoXsQJJqW6g=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2024-07-11T17:30:21.404185Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnSUNyaF9hcDRBRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNyaF9hcDRBRRAB!2m1!1s0x47b19b6d28479edb:0x1209301e6c1d1080"
          }
        ]
      }
    },
  }
];

export const getKitaData = (id: string): KitaData | undefined => {
  return kitaData.find(kita => kita.id === id);
};

export const getAllKitaIds = (): string[] => {
  return kitaData.map(kita => kita.id);
}; 