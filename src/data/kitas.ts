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
    id: "lohbekpark-lokstedt",
    name: "Kita Lohbekpark Lokstedt",
    location: "Lokstedt",
    metadata: {
      title: "Stadtküken Kita Lohbekpark-Lokstedt | Achtsamkeit & Natur",
      description: "Kita Lohbekpark in Hamburg-Lokstedt: Naturnahe Betreuung für 65 Kinder (10 Monate - 6 Jahre). Achtsamkeit, gesunde Ernährung & Partizipation.",
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
        "formattedAddress": "Lohkoppelweg 35b, 22529 Hamburg, Germany",
        "userRatingCount": 7,
        "displayName": {
          "text": "Stadtküken Kita Lohbekpark",
          "languageCode": "de"
        },
        "reviews": [
          {
            "name": "places/ChIJ87PDpomHsUcROSsHEHfOCsg/reviews/Ci9DQUlRQUNvZENodHljRjlvT2tWaFptNUtWR2RrT1RscVN6UkpSMlpmYVV4M1RFRRAB",
            "relativePublishTimeDescription": "a week ago",
            "rating": 5,
            "text": {
              "text": "We are incredibly grateful for this wonderful daycare center. The entire team—from the management to the teachers—is not only professional, but also impressive on a human level. There's a loving, secure atmosphere where you can feel the children's well-being is paramount.\n\nAs a parent, it's not easy to leave your 13-month-old child in the care of strangers—but here, it feels just right. Communication via the CARE app, the whiteboard with information about food, sleep, and the daily routine, as well as the lovingly designed \"Weekly News\" with photos and activities give us a good feeling every day and a real insight into everyday daycare life.\n\nWe particularly enjoy the many moments of nature outside in the garden and sandbox area—where our child discovers the world with joy and curiosity.\n\nConversations with the team are always open, warm, and at eye level. You can feel that the people working here not only do a great job, but are there for the children with optimism, empathy, and genuine warmth.\n\nConclusion: An all-round fantastic facility that we can highly recommend.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Wir sind unglaublich dankbar für diese wunderbare Kita. Das gesamte Team – von der Leitung bis zu den Erzieher*innen – ist nicht nur professionell, sondern auch menschlich beeindruckend. Es herrscht eine liebevolle, geborgene Atmosphäre, in der man spürt, wie sehr das Wohl der Kinder im Mittelpunkt steht.\n\nAls Elternteil ist es nicht leicht, sein 13 Monate altes Kind in fremde Hände zu geben – aber hier fühlt es sich genau richtig an. Die Kommunikation über die CARE-App, das Whiteboard mit Infos zu Essen, Schlaf und Tagesverlauf sowie die liebevoll gestalteten „Week News“ mit Fotos und Aktivitäten geben uns jeden Tag ein gutes Gefühl und einen echten Einblick in den Kita-Alltag.\n\nBesonders schön finden wir die vielen Naturmomente draußen im Garten- und Sandkastenbereich – da entdeckt unser Kind mit Freude und Neugier die Welt.\n\nDie Gespräche mit dem Team sind immer offen, herzlich und auf Augenhöhe. Man spürt, dass hier Menschen arbeiten, die nicht nur einen tollen Job machen, sondern mit Optimismus, Einfühlungsvermögen und echter Herzlichkeit für die Kinder da sind.\n\nFazit: Eine rundum fantastische Einrichtung, die wir wärmstens weiterempfehlen können.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Adria Millas Luque",
              "uri": "https://www.google.com/maps/contrib/116494893067914360685/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjX8a3NfQbWSiPQFKnOQccDt3ui_ybeMR8hcFGc61madEfzylvw=s128-c0x00000000-cc-rp-mo-ba3"
            },
            "publishTime": "2025-06-19T20:23:51.537438413Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2tWaFptNUtWR2RrT1RscVN6UkpSMlpmYVV4M1RFRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tWaFptNUtWR2RrT1RscVN6UkpSMlpmYVV4M1RFRRAB!2m1!1s0x47b18789a6c3b3f3:0xc80ace7710072b39"
          },
          {
            "name": "places/ChIJ87PDpomHsUcROSsHEHfOCsg/reviews/Ci9DQUlRQUNvZENodHljRjlvT2pKR1YzZFFSR1ZGT1haeFdqZzJOa1owVEc5NWFXYxAB",
            "relativePublishTimeDescription": "a week ago",
            "rating": 5,
            "text": {
              "text": "Our child has been attending this daycare for a few months, and we are extremely satisfied. The teachers are warm, dedicated, and create a loving atmosphere.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Unser Kind geht seit einigen Monaten in diese Kita und wir sind super zufrieden. Die Erzieherinnen sind herzlich, engagiert und schaffen eine liebevolle Atmosphäre",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Julius Ihle",
              "uri": "https://www.google.com/maps/contrib/117206028104202558662/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLoeEdcEcPmaQynv54vxI8_s9aMdYmtzoZnv5OlD9SASgCGPQ=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-06-17T16:04:05.487643679Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2pKR1YzZFFSR1ZGT1haeFdqZzJOa1owVEc5NWFXYxAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pKR1YzZFFSR1ZGT1haeFdqZzJOa1owVEc5NWFXYxAB!2m1!1s0x47b18789a6c3b3f3:0xc80ace7710072b39"
          },
          {
            "name": "places/ChIJ87PDpomHsUcROSsHEHfOCsg/reviews/Ci9DQUlRQUNvZENodHljRjlvT2tzMU0wRlRNalJZVDFOMmFIWmxjRzVVUkdkSllXYxAB",
            "relativePublishTimeDescription": "a week ago",
            "rating": 5,
            "text": {
              "text": "A very dedicated team, a great atmosphere, and a well-thought-out concept. Highly recommended!",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Sehr engagiertes Team, tolle Atmosphäre und gut durchdachtes Konzept. Absolut empfehlenswert!",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "roonstar23",
              "uri": "https://www.google.com/maps/contrib/110694832662461925436/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocKn7NutLDF1zd5DYARzm0Tn0KOqsfkIImNFAQxUSNDKO5jsLg=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-06-17T18:07:07.053708562Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2tzMU0wRlRNalJZVDFOMmFIWmxjRzVVUkdkSllXYxAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tzMU0wRlRNalJZVDFOMmFIWmxjRzVVUkdkSllXYxAB!2m1!1s0x47b18789a6c3b3f3:0xc80ace7710072b39"
          },
          {
            "name": "places/ChIJ87PDpomHsUcROSsHEHfOCsg/reviews/Ci9DQUlRQUNvZENodHljRjlvT201Wk5EVnRjbXB6WTNGUldVaFRhMlZsU0RGNmRtYxAB",
            "relativePublishTimeDescription": "a week ago",
            "rating": 5,
            "text": {
              "text": "A truly great team! I felt at home right away 😊",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Ein wirklich tolles Team! Habe mich direkt wohl gefühlt 😊",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Kornelia Krupka",
              "uri": "https://www.google.com/maps/contrib/107450096262631954480/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVst6LIPk6uIa0frhfI8DdyttmEAjI3i5Fqm6LylwhgNmCmeGGOug=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-06-20T02:55:15.095395421Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT201Wk5EVnRjbXB6WTNGUldVaFRhMlZsU0RGNmRtYxAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT201Wk5EVnRjbXB6WTNGUldVaFRhMlZsU0RGNmRtYxAB!2m1!1s0x47b18789a6c3b3f3:0xc80ace7710072b39"
          },
          {
            "name": "places/ChIJ87PDpomHsUcROSsHEHfOCsg/reviews/Ci9DQUlRQUNvZENodHljRjlvT25sQmJXZDJTa28xZEhOQmMyMU5MVTFEU25CamVWRRAB",
            "relativePublishTimeDescription": "a week ago",
            "rating": 5,
            "text": {
              "text": "Loving care, great educational concept!",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Liebevolle Betreuung, tolles pädagogisches Konzept!",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Anne",
              "uri": "https://www.google.com/maps/contrib/103856141342291087138/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocINXeiKrHRRD9htnfcbWFNA5h_P6pw33DpFbVVpRJf7om7qpQ=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-06-17T09:33:05.975162428Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT25sQmJXZDJTa28xZEhOQmMyMU5MVTFEU25CamVWRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25sQmJXZDJTa28xZEhOQmMyMU5MVTFEU25CamVWRRAB!2m1!1s0x47b18789a6c3b3f3:0xc80ace7710072b39"
          }
        ]
      }      
    }
  },
  // Example Kita 2 - Altona
  {
    "id": "baumpieper",
    "name": "Kita Baumpieper Neugraben-Fischbek",
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
        "userRatingCount": 14,
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
  },
  {
    "id": "villa-blumenfeld",
    "name": "Kita Villa Blumenfeld",
    "location": "Blankenese",
    "metadata": {
      "title": "Kita Villa Blumenfeld Blankenese | Stadtküken Natur-Kita | Achtsamkeit & Natur",
      "description": "Kita Villa Blumenfeld in Hamburg-Blankenese: Naturnahe Betreuung für 90 Kinder (10 Monate – 6 Jahre) in einer stilvollen Jugendstil-Villa mit großem Außenbereich. Jetzt Kitaplatz anfragen!",
      "keywords": "Kita Villa Blumenfeld, Kita Blankenese, Natur-Kita Hamburg, Stadtküken, Kitaplatz Blankenese, Achtsamkeit Kinder, Naturpädagogik, Kita-Gutschein Hamburg, Kinderbetreuung Blankenese",
      "openGraph": {
        "title": "Kita Villa Blumenfeld Blankenese | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung für 90 Kinder in der Jugendstil-Villa am Erik-Blumenfeld-Platz. Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen!",
        "images": [
          {
            "url": "https://stadtkueken.de/wp-content/uploads/5F9A6116.jpg",
            "width": 1200,
            "height": 630,
            "alt": "Kita Villa Blumenfeld Blankenese"
          }
        ]
      },
      "twitter": {
        "title": "Kita Villa Blumenfeld Blankenese | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung für 90 Kinder in unserer stilvollen Jugendstil-Villa. Jetzt Kitaplatz sichern!",
        "images": [
          "https://stadtkueken.de/wp-content/uploads/5F9A6116.jpg"
        ]
      },
      "geo": {
        "region": "DE-HH",
        "placename": "Hamburg-Blankenese",
        "position": "53.552100;9.868200",
        "icbm": "53.552100, 9.868200"
      }
    },
    "schemaData": {
      "name": "Stadtküken Kita Villa Blumenfeld",
      "description": "Natur-Kita in Hamburg-Blankenese in einer sanierten Jugendstil-Villa mit großem naturnahen Außenbereich",
      "url": "https://stadtkueken.de/standorte/kita-blumenfeld-blankenese/",
      "telephone": "+49-40-328901213",
      "email": "villa-blumenfeld@stadtkueken.de",
      "address": {
        "streetAddress": "Erik-Blumenfeld-Platz 13",
        "addressLocality": "Hamburg",
        "addressRegion": "Hamburg",
        "postalCode": "22587",
        "addressCountry": "DE"
      },
      "geo": {
        "latitude": 53.552100,
        "longitude": 9.868200
      },
      "openingHours": "Mo-Fr 07:00-17:00",
      "priceRange": "Kita-Gutschein akzeptiert",
      "image": "https://stadtkueken.de/wp-content/uploads/5F9A6116.jpg"
    },
    "hero": {
      "name": "Villa Blumenfeld",
      "location": "Blankenese",
      "subtitle": "Willkommen in der Kita Villa Blumenfeld",
      "backgroundImage": "https://stadtkueken.de/wp-content/uploads/5F9A6116.jpg",
      "childrenCount": 90,
      "ageRange": "10 Monate – 6 Jahre",
      "address": "Erik-Blumenfeld-Platz 13",
      "postalCode": "22587",
      "city": "Hamburg",
      "openingHours": "Mo – Fr 07:00 – 17:00",
      "sinceDate": "August 2021",
      "phoneNumber": "040 3289 012 - 13"
    },
    "info": {
      "name": "Villa Blumenfeld",
      "location": "Blankenese",
      "description": "Unsere Stadtküken Natur-Kita Villa Blumenfeld in Blankenese befindet sich in einer liebevoll sanierten Jugendstil-Villa am Erik-Blumenfeld-Platz. Mit großem, naturnah gestalteten Außenbereich und altem Baumbestand ist sie ein grünes Inselparadies mitten im Stadtzentrum.",
      "paragraph1": "Die hellen, historischen Räume vereinen Gemütlichkeit mit nachhaltiger Modernisierung. Viel Raum zum Spielen, Lesen und Entspannen lädt Kinder zum Wohlfühlen ein.",
      "paragraph2": "Unser pädagogisches Team fördert individuell und achtsam – mit Achtsamkeitsübungen, Naturprojekten im eigenen Garten und partizipativer Tagesgestaltung.",
      "quote": "Deine individuellen Nuancen bringen Vielfalt in diese Welt und unsere Einrichtungen. Wir sehen dich und schätzen dich so wie du bist!",
      "imageUrl": "https://stadtkueken.de/wp-content/uploads/5F9A6034.jpg",
      "imageAlt": "Innenraum Kita Villa Blumenfeld",
      "activities": {
        "title": "Aktivitäten",
        "description": "Naturbezogene Projekte in der Villa und im Garten fördern Forschergeist und Kreativität."
      },
      "nutrition": {
        "title": "Ernährung",
        "description": "Täglich frische, nährstoffreiche Mahlzeiten mit Bio-Produkten nach DGE-Standard."
      },
      "garden": {
        "title": "Ackerracker",
        "description": "Im eigenen Garten erleben Kinder, wie Gemüse wächst und lernen nachhaltiges Gärtnern."
      },
      "values": {
        "mindfulness": "Achtsamkeit und individuelle Wahrnehmung jedes Kindes",
        "nature": "Die Villa und ihr Garten sind unser natürlicher Lern- und Spielort",
        "participation": "Kinder gestalten mit und übernehmen Verantwortung"
      }
    },
    "contact": {
      "name": "Villa Blumenfeld",
      "location": "Blankenese",
      "address": "Erik-Blumenfeld-Platz 13",
      "postalCode": "22587",
      "city": "Hamburg",
      "openingHours": "Montag – Freitag\n07:00 – 17:00 Uhr",
      "groups": "2 Krippen-Gruppen (ca. 30 Kinder)\n3 Elementar-Gruppen (ca. 60 Kinder)",
      "phoneNumber": "040 3289 012 - 13",
      "email": "villa-blumenfeld@stadtkueken.de",
      "contactPerson": "Sara Jakimovski"
    },
    "gallery": {
      "title": "Unsere Einrichtung",
      "subtitle": "Bilder aus der Villa und dem naturnahen Außenbereich",
      "images": [
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A6116.jpg",
          "alt": "Fassade der Kita Villa Blumenfeld"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A6034.jpg",
          "alt": "Gruppenraum in der Villa Blumenfeld"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A6187.jpg",
          "alt": "Kinderbereich innen"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A5980.jpg",
          "alt": "Spielbereich im Außenbereich"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A5962.jpg",
          "alt": "Naturnaher Garten der Kita"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A5893.jpg",
          "alt": "Terrasse unter altem Baumbestand"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/5F9A6200-2.jpg",
          "alt": "Leseecke im Gruppenraum"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-19.jpg",
          "alt": "Kinder bewirtschaften den Ackerracker"
        }
      ],
      "roomsTitle": "Unsere Räume",
      "roomsDescription": "Helle, historische Räume kombiniert mit natürlicher Möblierung schaffen einen geschützten Wohlfühlort.",
      "outdoorTitle": "Außenbereich",
      "outdoorDescription": "Der große, naturnahe Garten mit altem Baumbestand und Spielgeräten lädt zu fantasievollem Spiel ein."
    },
    "team": {
      "title": "Unsere Leitung",
      "subtitle": "Engagierte Pädagogin, die Ihr Kind begleitet",
      "teamMember": {
        "name": "Sara Jakimovski",
        "title": "Leitung Kita Villa Blumenfeld",
        "imageUrl": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Leitung-Villa-Blumenfeld-Sara.jpg",
        "phoneNumber": "040 3289 012 - 13",
        "email": "villa-blumenfeld@stadtkueken.de",
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
          "formattedAddress": "Erik-Blumenfeld-Platz 13, 22587 Hamburg, Germany",
          "displayName": {
            "text": "Stadtküken Villa Blumenfeld",
            "languageCode": "de"
          },
          "userRatingCount": 2,
          "reviews": [
            {
              "name": "places/ChIJzduXAtiDsUcReqlsSC1WVpk/reviews/ChdDSUhNMG9nS0VJQ0FnSUN4dzZ5dGtRRRAB",
              "relativePublishTimeDescription": "2 years ago",
              "rating": 5,
              "text": {
                "text": "Great daycare with great teachers! Very lovingly and service-oriented management, uncomplicated and friendly parenting.",
                "languageCode": "en-US"
              },
              "originalText": {
                "text": "Tolle Kita mit super Erziehern/Erzieherinnen! Sehr liebevoll und serviceorientiert geführt, unkomplizierte und freundliche Elternschaft.",
                "languageCode": "de"
              },
              "authorAttribution": {
                "displayName": "Janis Meyer-Plath",
                "uri": "https://www.google.com/maps/contrib/114013914939588334855/reviews",
                "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocKh9S_UsvpfmmK2G6PVAKuRVl92ZjhTZcpKVosCJEm26ToEgw=s128-c0x00000000-cc-rp-mo"
              },
              "publishTime": "2023-05-24T16:12:14.393357Z",
              "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnSUN4dzZ5dGtRRRAB&d=17924085&t=1",
              "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUN4dzZ5dGtRRRAB!2m1!1s0x47b183d80297dbcd:0x9956562d486ca97a"
            },
            {
              "name": "places/ChIJzduXAtiDsUcReqlsSC1WVpk/reviews/ChdDSUhNMG9nS0VJQ0FnSUR4b0tmYm5BRRAB",
              "relativePublishTimeDescription": "2 years ago",
              "rating": 5,
              "authorAttribution": {
                "displayName": "Kev Hee",
                "uri": "https://www.google.com/maps/contrib/118339019710721738331/reviews",
                "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWudO-G6aZ-7ygjPKMASRgGlv8oaCNTaqeXzwi_wzNaTyb_wiub=s128-c0x00000000-cc-rp-mo"
              },
              "publishTime": "2023-05-30T14:04:52.004999Z",
              "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnSUR4b0tmYm5BRRAB&d=17924085&t=1",
              "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUR4b0tmYm5BRRAB!2m1!1s0x47b183d80297dbcd:0x9956562d486ca97a"
            }
          ]
        }
      }
  },
  {
    "id": "johanns-garten",
    "name": "Kita Johann’s Garten Groß Borstel",
    "location": "Groß Borstel",
    "metadata": {
      "title": "Kita Johann’s Garten Groß Borstel | Stadtküken Natur-Kita | Achtsamkeit & Natur",
      "description": "Seit Februar 2025 heißen wir Kinder von 10 Monaten bis 6 Jahren in unserer Stadtküken Natur-Kita Johann’s Garten im Brödermannsweg in Groß Borstel willkommen. Jetzt unverbindlich Kitaplatz vormerken!",
      "keywords": "Kita Johann’s Garten, Kita Groß Borstel, Natur-Kita Hamburg, Stadtküken, Kitaplatz Groß Borstel, Achtsamkeit Kinder, Naturpädagogik, Kita-Gutschein Hamburg, Kinderbetreuung Groß Borstel",
      "openGraph": {
        "title": "Kita Johann’s Garten Groß Borstel | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung für Kinder von 10 Monaten bis 6 Jahren in Groß Borstel. Jetzt Kitaplatz vormerken!",
        "images": [
          {
            "url": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-28.jpg",
            "width": 1200,
            "height": 630,
            "alt": "Kinder toben im Wald in der Kita Johann’s Garten"
          }
        ]
      },
      "twitter": {
        "title": "Kita Johann’s Garten Groß Borstel | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung in Groß Borstel. Jetzt unverbindlich Kitaplatz vormerken!",
        "images": [
          "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-28.jpg"
        ]
      },
      "geo": {
        "region": "DE-HH",
        "placename": "Hamburg-Groß Borstel",
        "position": "53.616700;9.983300",
        "icbm": "53.616700, 9.983300"
      }
    },
    "schemaData": {
      "name": "Stadtküken Kita Johann’s Garten",
      "description": "Natur-Kita in Hamburg-Groß Borstel mit achtsamer Betreuung für Kinder von 10 Monaten bis 6 Jahren",
      "url": "https://stadtkueken.de/standorte/kita-johannsgarten-grossborstel/",
      "telephone": "+49-40-328901219",
      "email": "johanns-garten@stadtkueken.de",
      "address": {
        "streetAddress": "Brödermannsweg 42",
        "addressLocality": "Hamburg",
        "addressRegion": "Hamburg",
        "postalCode": "22453",
        "addressCountry": "DE"
      },
      "geo": {
        "latitude": 53.616700,
        "longitude": 9.983300
      },
      "openingHours": "Mo-Fr 07:00-17:00",
      "priceRange": "Kita-Gutschein akzeptiert",
      "image": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-28.jpg"
    },
    "hero": {
      "name": "Johann’s Garten",
      "location": "Groß Borstel",
      "subtitle": "Willkommen in der Kita Johann’s Garten",
      "backgroundImage": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-28.jpg",
      "childrenCount": 95,
      "ageRange": "10 Monate – 6 Jahre",
      "address": "Brödermannsweg 42",
      "postalCode": "22453",
      "city": "Hamburg",
      "openingHours": "Mo – Fr 07:00 – 17:00",
      "sinceDate": "Februar 2025",
      "phoneNumber": "040 3289 012 - 19"
    },
    "info": {
      "name": "Johann’s Garten",
      "location": "Groß Borstel",
      "description": "Seit Februar 2025 begrüßen wir Kinder in unserer liebevoll sanierten Stadtküken Natur-Kita Johann’s Garten im Brödermannsweg. Zwischen altem Baumbestand, Sträuchern und naturbezogenen Spielgeräten erleben unsere Küken tägliche Auszeiten in der Natur.",
      "paragraph1": "Das Gebäude und der neu gestaltete Außenbereich bieten Raum zum Entdecken, Spielen und Ausruhen. Die hellen, offenen Räume laden zum Wohlfühlen ein und schaffen Geborgenheit.",
      "paragraph2": "Unser pädagogisches Team begleitet jedes Kind achtsam und individuell. Mit Naturprojekten, Achtsamkeitsübungen und partizipativer Tagesgestaltung fördern wir Selbstbewusstsein und Kreativität.",
      "quote": "Wir ermutigen unsere Kinder dazu, ihre Gefühle aktiv wahrzunehmen, zu benennen und einzuordnen.",
      "imageUrl": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Kita-Broedermanssweg_Exterior_Final-2560x1600px_Perspektive03.jpg",
      "imageAlt": "Außenansicht Kita Johann’s Garten",
      "activities": {
        "title": "Aktivitäten",
        "description": "Waldabenteuer, Gartenprojekte und Achtsamkeitsspiele fördern Forschergeist und Zusammenhalt."
      },
      "nutrition": {
        "title": "Ernährung",
        "description": "Frische, ausgewogene Mahlzeiten nach DGE-Standard – gemeinsam zubereitet und genossen."
      },
      "garden": {
        "title": "Ackerracker",
        "description": "Unsere eigene kleinen Gärtnerei zeigt Kindern, wo Gemüse herkommt und wie es wächst."
      },
      "values": {
        "mindfulness": "Achtsamkeit und individuelle Wahrnehmung jedes Kindes",
        "nature": "Die Natur als zentraler Lern- und Spielort",
        "participation": "Kinder gestalten ihren Kita-Alltag aktiv mit"
      }
    },
    "contact": {
      "name": "Johann’s Garten",
      "location": "Groß Borstel",
      "address": "Brödermannsweg 42",
      "postalCode": "22453",
      "city": "Hamburg",
      "openingHours": "Montag – Freitag\n07:00 – 17:00 Uhr",
      "groups": "6 Krippen-Gruppen\n6 Elementar-Gruppen\nVorschulegruppe",
      "phoneNumber": "040 3289 012 - 19",
      "email": "johanns-garten@stadtkueken.de",
      "contactPerson": "Susi Benthin"
    },
    "gallery": {
      "title": "Unsere Einrichtung",
      "subtitle": "Bilder aus Kita und naturnahem Außenbereich",
      "images": [
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-28.jpg",
          "alt": "Kinder toben im Wald"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Kita-Broedermanssweg_Exterior_Final-2560x1600px_Perspektive03.jpg",
          "alt": "Außenansicht Kita Johann’s Garten – Perspektive 1"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Kita-Broedermanssweg_Exterior_Final-2560x1600px_Perspektive02.jpg",
          "alt": "Außenansicht Kita Johann’s Garten – Perspektive 2"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueknen-Kita-Broedermanssweg_Exterior_Final-2560x1600px_Perspektive01.jpg",
          "alt": "Außenansicht Kita Johann’s Garten – Perspektive 3"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/24_Stadtkueken-baumpieper-5.jpg",
          "alt": "Einblick in den Gruppenraum"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-7.jpg",
          "alt": "Elementarbereich"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-5.jpg",
          "alt": "Waschraum"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-6.jpg",
          "alt": "Waschraum mit Kindersink"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkeken-kita-hamburg-image-48.jpg",
          "alt": "Gemeinsames Mittagessen"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-1.jpg",
          "alt": "Naturpädagogik im Garten"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-13.jpg",
          "alt": "Projekt gesunde Ernährung"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-18.jpg",
          "alt": "Kinder entdecken neues Gemüse"
        }
      ],
      "roomsTitle": "Unsere Räume",
      "roomsDescription": "Helle, moderne Gruppenräume mit viel Platz zum Spielen und Rückzug.",
      "outdoorTitle": "Außenbereich",
      "outdoorDescription": "Naturnaher Garten mit altem Baumbestand, Beerensträuchern und Spielgeräten."
    },
    "team": {
      "title": "Unsere Leitung",
      "subtitle": "Engagierte Pädagogin, die Ihr Kind begleitet",
      "teamMember": {
        "name": "Susi Benthin",
        "title": "Leitung Kita Johann’s Garten",
        "imageUrl": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Website-Bilder-Portraet-Susi-Johanns-Garten-600x600.png",
        "phoneNumber": "040 3289 012 - 19",
        "email": "johanns-garten@stadtkueken.de",
        "quote": "Die partnerschaftliche und enge Zusammenarbeit zwischen den Eltern und unserer Kita ist die Grundlage für das Wohlbefinden und die Entwicklung unserer Kinder."
      }
    },
    "map": {
      "name": "Johann’s Garten",
      "location": "Groß Borstel",
      "address": "Brödermannsweg 42",
      "postalCode": "22453",
      "city": "Hamburg",
      "district": "Groß Borstel",
      "description": "Besuchen Sie uns im Brödermannsweg 42, 22453 Hamburg.",
      "publicTransport": "Gut erreichbar mit Bus und S-Bahn; Haltestellen in unmittelbarer Nähe.",
      "parking": "Öffentliche Parkplätze in der Umgebung vorhanden.",
      "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.9966194930016!2d9.971610212709503!3d53.60622877225064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1894c9cec80d5%3A0x48ba4fc4079bef2f!2sStadtk%C3%BCken%20Kita%20Johann&#39;s%20Garten!5e1!3m2!1sen!2sde!4v1751235858453!5m2!1sen!2sde"
    },
    "reviews": {
      "title": "Was Eltern über uns sagen",
      "subtitle": "Echte Bewertungen von Eltern aus unserer Kita-Gemeinschaft",
      "reviewData": {
        "formattedAddress": "Brödermannsweg 42, 22453 Hamburg, Germany",
        "userRatingCount": 12,
        "displayName": {
          "text": "Stadtküken Kita Johann's Garten",
          "languageCode": "de"
        },
        "reviews": [
          {
            "name": "places/ChIJ1YDsnEyJsUcRL--bB8RPukg/reviews/ChZDSUhNMG9nS0VJQ0FnTURJc3BybElREAE",
            "relativePublishTimeDescription": "2 months ago",
            "rating": 5,
            "text": {
              "text": "Our son has been visiting the crèche area since it opened and you can tell that he feels very comfortable.\nGetting used to it worked without any problems. All the teachers are very competent, loving, treat the children at eye level and are simply great.\nThe rooms and the outdoor area are very lovingly designed and not too overloaded.\nWe simply couldn't have made a better choice and are looking forward to watching our little city chick grow with you. We can wholeheartedly recommend the Kita Johann's Garten.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Unser Sohn besucht seit der Eröffnung den Krippenbereich und man merkt, dass er sich sehr wohl fühlt.\nDie Eingewöhnung hat ohne Probleme funktioniert. Alle Erzieherinnen sind sehr kompetent, liebevoll, begegnen den Kindern auf Augenhöhe und sind einfach nur großartig.\nDie Räumlichkeiten und der Außenbereich sind sehr liebevoll gestaltet und nicht zu überladen.\nWir hätten einfach keine bessere Wahl treffen können und freuen uns unser kleines Stadtküken bei euch wachsen zu sehen. Die Kita Johann's Garten können wir von ganzem Herzen empfehlen.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Mirko Schroeder",
              "uri": "https://www.google.com/maps/contrib/118427398742953941266/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocKCQVv2Xm73hU5rScZfEKgDLyDk0O3OqdbIu6LFVB6hhLI7=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-04-08T15:18:30.657105Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChZDSUhNMG9nS0VJQ0FnTURJc3BybElREAE&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnTURJc3BybElREAE!2m1!1s0x47b1894c9cec80d5:0x48ba4fc4079bef2f"
          },
          {
            "name": "places/ChIJ1YDsnEyJsUcRL--bB8RPukg/reviews/ChdDSUhNMG9nS0VJQ0FnTUR3amFyNnZRRRAB",
            "relativePublishTimeDescription": "3 months ago",
            "rating": 5,
            "text": {
              "text": "Wonderful daycare center – our daughter feels completely at home!\n\nSince our daughter started going to the newly opened daycare center, we have only had positive experiences! The decor is modern, bright and inviting. We are particularly enthusiastic about the warm and loving atmosphere that radiates from the entire, albeit young, team. The teachers are not only professional, but also very warm and respond individually to the needs of each child. Our daughter feels very comfortable here and it's nice to see her go to daycare with a smile every day. We are happy to have found the facility in the immediate vicinity of our home.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Wundervolle Kita – Unsere Tochter fühlt sich rundum wohl!\n\nSeitdem unsere Tochter in die neu eröffnete Kita geht, haben wir nur positive Erfahrungen gemacht! Die Einrichtung ist modern, hell und einladend. Besonders begeistert sind wir von der warmen und liebevollen Atmosphäre, die vom gesamten wenngleich jungen Team ausgestrahlt wird. Die Erzieherinnen sind nicht nur professionell, sondern auch sehr herzlich und gehen individuell auf die Bedürfnisse jedes Kindes ein. Unsere Tochter fühlt sich hier sehr wohl, und es ist schön zu sehen, wie sie jeden Tag mit einem Lächeln in die Kita geht. Wir sind glücklich, die Einrichtung in direkter Nachbarschaft zu unserem Zuhause, gefunden zu haben.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Frank Gebhardt",
              "uri": "https://www.google.com/maps/contrib/112349519358003178741/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocIN8BbICIyVyfOGi9J0WsJlwyCREMWuV5VSs0nlehfYzE3gbw=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-03-27T12:57:14.213646Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnTUR3amFyNnZRRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTUR3amFyNnZRRRAB!2m1!1s0x47b1894c9cec80d5:0x48ba4fc4079bef2f"
          },
          {
            "name": "places/ChIJ1YDsnEyJsUcRL--bB8RPukg/reviews/ChdDSUhNMG9nS0VJQ0FnTURJNXVyYXNRRRAB",
            "relativePublishTimeDescription": "2 months ago",
            "rating": 5,
            "text": {
              "text": "Our son has been attending the Stadtküken Kita Johanns on Brödermannsweg for 10 days and we are completely satisfied. The teachers are very warm, attentive and take loving care of the children. What's particularly nice is how quickly our son settled in - it shows how comfortable he feels there. We had the feeling from the start that he was in good hands there.\nMany thanks to the whole team for the great work!",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Unser Sohn besucht seit 10 Tage die Stadtküken Kita Johanns am Brödermannsweg  und wir sind rundum zufrieden. Die Erzieherinnen sind sehr herzlich, aufmerksam und kümmern sich liebevoll um die Kinder. Besonders schön ist, wie schnell sich unser Sohn eingewöhnt hat – das zeigt, wie wohl er sich dort fühlt. Wir haben von Anfang an das Gefühl gehabt, dass er dort gut aufgehoben ist.\nVielen Dank an das ganze Team für die tolle Arbeit!",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Atiq Salehi",
              "uri": "https://www.google.com/maps/contrib/107296335347303973970/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocJQDj0mMVVjEzQkQHt9qwJwB5OiLySsroRLKriNWm2fcJK3hQ=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-04-09T11:11:56.515987Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChdDSUhNMG9nS0VJQ0FnTURJNXVyYXNRRRAB&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTURJNXVyYXNRRRAB!2m1!1s0x47b1894c9cec80d5:0x48ba4fc4079bef2f"
          },
          {
            "name": "places/ChIJ1YDsnEyJsUcRL--bB8RPukg/reviews/ChZDSUhNMG9nS0VJQ0FnTUNJdWVLX2RnEAE",
            "relativePublishTimeDescription": "2 months ago",
            "rating": 5,
            "text": {
              "text": "We couldn't feel more comfortable choosing this daycare center! Our two children started in the elementary and daycare areas and have had a lot of fun since the beginning and feel very comfortable.\n\nAll employees (from management to educators to caretakers) radiate incredible warmth, work at eye level and the children are always the focus.\n\nWe are particularly enthusiastic about the focus on nature education, which not only gives children a deep understanding of the environment, but also enables them to come into contact with nature in a playful way.\n\nParticular emphasis is also placed on participation. The children are actively involved in decisions, be it in choosing activities or in organizing everyday life. Their opinions and wishes are listened to, which strengthens their self-confidence and personal responsibility. The educators create an atmosphere of trust and respect in which the children can develop freely.\n\nThis facility is more than recommended because it is a great enrichment for children and their parents. A daycare center that not only imparts knowledge, but also values \u200b\u200bfor a mindful life with nature!",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Wohler könnten wir uns  mit der Wahl dieser Kita nicht fühlen! Unsere beiden Kinder sind jeweils im Elementar- sowie Krippenbereich gestartet, haben seit Beginn riesigen Spaß und fühlen sich sehr wohl.\n\nAlle Mitarbeitenden (von der Leitung über Erzieher:innen bis Hausmeister) strahlen eine wahnsinnige Herzlichkeit aus, arbeiten auf Augenhöhe und die Kinder stehen zu jeder Zeit im Mittelpunkt.\n\nBesonders begeistert uns der naturpädagogische Schwerpunkt, der den Kindern nicht nur ein tiefes Verständnis für die Umwelt vermittelt, sondern ihnen auch ermöglicht, auf spielerische Weise mit der Natur in Kontakt zu kommen.\n\nZudem wird besonders viel Wert auf Partizipation gelegt. Die Kinder werden aktiv in Entscheidungen einbezogen, sei es bei der Auswahl von Aktivitäten oder bei der Gestaltung des Alltags. Es wird auf ihre Meinungen und Wünsche gehört, was ihr Selbstbewusstsein und ihre Eigenverantwortung stärkt. Die Erzieher:innen schaffen eine Atmosphäre des Vertrauens und Respekts, in der die Kinder sich frei entfalten können.\n\nDiese Einrichtung ist mehr als empfehlenswert, denn sie ist für Kinder als auch ihre Eltern eine große Bereicherung. Eine Kita, die nicht nur Wissen vermittelt, sondern auch Werte für ein achtsames Leben mit der Natur!",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Dorothee Schubert",
              "uri": "https://www.google.com/maps/contrib/105752073557927247270/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocKNvbol2hApzgRFfG7eAhileJlRY8TQbnnHKcMyFLkUNn9xeg=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-04-04T10:10:28.807097Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChZDSUhNMG9nS0VJQ0FnTUNJdWVLX2RnEAE&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnTUNJdWVLX2RnEAE!2m1!1s0x47b1894c9cec80d5:0x48ba4fc4079bef2f"
          },
          {
            "name": "places/ChIJ1YDsnEyJsUcRL--bB8RPukg/reviews/ChZDSUhNMG9nS0VJQ0FnTURJMDRpUldnEAE",
            "relativePublishTimeDescription": "2 months ago",
            "rating": 5,
            "text": {
              "text": "We waited a year for the Stadtküken kindergarten to open and my daughter is now very happy. Cleanliness, humanity and willingness to help are important to us; all of this and more is available in City Chicks.\nI like taking my daughter there and know that she is in good hands. Very friendly staff and parents. Not only the children but also the parents feel welcome.\n\nI would be happy to recommend the daycare center to our friends.",
              "languageCode": "en-US"
            },
            "originalText": {
              "text": "Wir haben ein Jahr auf die Eröffnung des Stadtküken Kindergartens gewartet und  meine  Tochter ist jetzt sehr glücklich. Wichtig sind uns Sauberkeit, Menschlichkeit, Hilfsbereitschaft; all dies und mehr ist in Stadtküken verfügbar.\nIch bringe meineTochter gern hin und weiß, dass sie in guten Händen ist . Sehr freundliche Personal und Elternschaft. Nicht nur die Kinder, auch die Eltern fühlen sich willkommen.\n\nGerne empfehle ich die Kita an unsere Freunde weiter.",
              "languageCode": "de"
            },
            "authorAttribution": {
              "displayName": "Aysel",
              "uri": "https://www.google.com/maps/contrib/112963029494502070701/reviews",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLabfppaq1DGYDLt6axasxgLU1dFkQzd2PaFsF-9D2hFElyqA=s128-c0x00000000-cc-rp-mo"
            },
            "publishTime": "2025-04-12T20:20:11.337233Z",
            "flagContentUri": "https://www.google.com/local/review/rap/report?postId=ChZDSUhNMG9nS0VJQ0FnTURJMDRpUldnEAE&d=17924085&t=1",
            "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnTURJMDRpUldnEAE!2m1!1s0x47b1894c9cec80d5:0x48ba4fc4079bef2f"
          }
        ]
      }
    },
  },
  {
    "id": "muehle",
    "name": "Kita Mühle Wandsbek",
    "location": "Wandsbek",
    "metadata": {
      "title": "Kita Mühle Wandsbek | Stadtküken Natur-Kita | Achtsamkeit & Natur",
      "description": "Idyllisch gelegenes Fachwerkhaus im Ölmühlenweg: In der Stadtküken Natur-Kita Mühle Wandsbek betreuen wir rund 95 Kinder (3 – 6 Jahre) in fünf Elementar-Gruppen. Großer Garten, achtsame Pädagogik & gesunde Ernährung. Jetzt Kitaplatz sichern!",
      "keywords": "Kita Mühle, Kita Wandsbek, Natur-Kita Hamburg, Stadtküken, Kitaplatz Wandsbek, Achtsamkeit Kinder, Naturpädagogik, Kita-Gutschein Hamburg, Kinderbetreuung Wandsbek",
      "openGraph": {
        "title": "Kita Mühle Wandsbek | Stadtküken Natur-Kita",
        "description": "Naturnahe Betreuung für Elementarkinder in der historischen Ölmühle am Eichtalpark. Jetzt Kitaplatz anfragen!",
        "images": [
          {
            "url": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-6.jpg",
            "width": 1200,
            "height": 630,
            "alt": "Außenansicht der Fachwerk-Kita Mühle Wandsbek"
          }
        ]
      },
      "twitter": {
        "title": "Kita Mühle Wandsbek | Stadtküken Natur-Kita",
        "description": "Großer Garten & achtsame Pädagogik im historischen Fachwerkhaus am Ölmühlenweg. Jetzt Kitaplatz sichern!",
        "images": [
          "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-6.jpg"
        ]
      },
      "geo": {
        "region": "DE-HH",
        "placename": "Hamburg-Wandsbek",
        "position": "53.578000;10.091000",
        "icbm": "53.578000, 10.091000"
      }
    },
    "schemaData": {
      "@context": "https://schema.org",
      "@type": "Preschool",
      "name": "Stadtküken Kita Mühle",
      "description": "Natur-Kita in Hamburg-Wandsbek mit achtsamer Betreuung für Kinder von 3 bis 6 Jahren",
      "url": "https://stadtkueken.de/standorte/kita-muehle-wandsbek/",
      "telephone": "+49-40-328901212",
      "email": "muehle@stadtkueken.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ölmühlenweg 33B",
        "addressLocality": "Hamburg",
        "addressRegion": "Hamburg",
        "postalCode": "22047",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.578000,
        "longitude": 10.091000
      },
      "openingHours": "Mo-Fr 07:00-17:00",
      "priceRange": "Kita-Gutschein akzeptiert",
      "image": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-6.jpg"
    },
    "hero": {
      "name": "Mühle",
      "location": "Wandsbek",
      "subtitle": "Willkommen in der Kita Mühle",
      "backgroundImage": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-6.jpg",
      "childrenCount": 95,
      "ageRange": "3 – 6 Jahre",
      "address": "Ölmühlenweg 33B",
      "postalCode": "22047",
      "city": "Hamburg",
      "openingHours": "Mo – Fr 07:00 – 17:00",
      "sinceDate": "2019",
      "phoneNumber": "040 3289 012 - 12"
    },
    "info": {
      "name": "Mühle",
      "location": "Wandsbek",
      "description": "Unsere Stadtküken Natur-Kita Mühle verbindet einen denkmalgeschützten Fachwerkcharme mit moderner, nachhaltiger Ausstattung. Im großen, naturnahen Garten an der Wandse können Kinder toben, forschen und die Natur erleben.",
      "paragraph1": "Die hellen Gruppenräume im historischen Gebäude bieten viel Platz zum Spielen sowie gemütliche Rückzugsorte zum Lesen und Entspannen. Altes Gebälk trifft dabei auf kindgerechte, moderne Materialien.",
      "paragraph2": "Achtsamkeit, Partizipation und Naturpädagogik prägen unseren Alltag. Projekte wie unser ‚Ackerracker‘-Gemüsegarten vermitteln den Kindern, woher ihr Essen kommt, und stärken ihr Umweltbewusstsein.",
      "quote": "Ausgangspunkt unseres Handelns ist stets der Respekt vor der Persönlichkeit eines jeden Menschen.",
      "imageUrl": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-10.jpg",
      "imageAlt": "Spielende Kinder vor der Mühle",
      "activities": {
        "title": "Aktivitäten",
        "description": "Waldtage, Bewegungsspiele und kreative Werkstätten wecken Forschergeist und Fantasie."
      },
      "nutrition": {
        "title": "Ernährung",
        "description": "Frische, regionale Zutaten nach DGE-Standard – gekocht in unserer eigenen Küche."
      },
      "garden": {
        "title": "Ackerracker",
        "description": "Eigener Gemüseacker: säen, pflegen, ernten – und anschließend genießen."
      },
      "values": {
        "mindfulness": "Achtsamkeit & individuelle Begleitung",
        "nature": "Die Natur als Lernraum",
        "participation": "Kinder gestalten ihren Alltag mit"
      }
    },
    "contact": {
      "name": "Mühle",
      "location": "Wandsbek",
      "address": "Ölmühlenweg 33B",
      "postalCode": "22047",
      "city": "Hamburg",
      "openingHours": "Montag – Freitag\n07:00 – 17:00 Uhr",
      "groups": "5 Elementar-Gruppen (ca. 95 Kinder)",
      "phoneNumber": "040 3289 012 - 12",
      "email": "muehle@stadtkueken.de",
      "contactPerson": "Henrik Depenbrock"
    },
    "gallery": {
      "title": "Unsere Einrichtung",
      "subtitle": "Entdecke Haus, Räume und Garten der Kita Mühle",
      "images": [
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-18.jpg",
          "alt": "Kinder entdecken Gemüse"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-6.jpg",
          "alt": "Außenansicht Fachwerkhaus – Perspektive 1"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-9.jpg",
          "alt": "Außenansicht Fachwerkhaus – Perspektive 2"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-3.jpg",
          "alt": "Gruppenraum 1"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-4.jpg",
          "alt": "Gruppenraum 2"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-muehle-10.jpg",
          "alt": "Spielplatz mit Fachwerkhaus"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-24.jpg",
          "alt": "Kinder ernten Gemüse"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-25.jpg",
          "alt": "Gemüse anbauen in der Kita"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-35.jpg",
          "alt": "Kindergarten-Gruppe in der Natur"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-17.jpg",
          "alt": "Mädchen schaukelt vor der Mühle"
        },
        {
          "src": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-27.jpg",
          "alt": "Kinder ernten auf dem Kita-Acker"
        }
      ],
      "roomsTitle": "Unsere Räume",
      "roomsDescription": "Helle Fachwerk-Räume mit modernem Spiel- und Lernmaterial, gemütlichen Leseecken & Kreativbereichen.",
      "outdoorTitle": "Außenbereich",
      "outdoorDescription": "Großer, naturnaher Garten mit Tipis, Weidentunneln, Baumstammpfaden und Zugang zur Wandse."
    },
    "team": {
      "title": "Unsere Leitung",
      "subtitle": "Engagierter Pädagoge, der Ihr Kind begleitet",
      "teamMember": {
        "name": "Henrik Depenbrock",
        "title": "Leitung Kita Mühle",
        "imageUrl": "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Website-Bilder-Portraet-Henrik-Depenbrock.png",
        "phoneNumber": "040 3289 012 - 12",
        "email": "muehle@stadtkueken.de",
        "quote": "Gemeinsam wachsen – wo geht das besser als an so einem idyllischen Ort wie unserer alten Mühle direkt an der Wandse?"
      }
    },
    "map": {
      "name": "Mühle",
      "location": "Wandsbek",
      "address": "Ölmühlenweg 33B",
      "postalCode": "22047",
      "city": "Hamburg",
      "district": "Wandsbek",
      "description": "Besuchen Sie uns im Ölmühlenweg 33B, 22047 Hamburg. Wir freuen uns auf Ihren Besuch!",
      "publicTransport": "U1 Wandsbek Markt & Buslinien fußläufig erreichbar.",
      "parking": "Begrenzte Parkmöglichkeiten direkt auf dem Gelände.",
      "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.5427867683843!2d10.097679912708271!3d53.5826346722435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18b8a5b7966a5%3A0xeea7de9868651ec9!2sStadtk%C3%BCken%20Kita%20M%C3%BChle!5e1!3m2!1sen!2sde!4v1751236220563!5m2!1sen!2sde"
    },
    "reviews": {
      "title": "Was Eltern über uns sagen",
      "subtitle": "Echte Stimmen aus unserer Kita-Gemeinschaft",
      "reviewData": {
        "formattedAddress": "Ölmühlenweg 33B, 22047 Hamburg, Germany",
        "displayName": {
          "text": "Stadtküken Kita Mühle",
          "languageCode": "de"
        },
        "userRatingCount": 0,
        "reviews": [
          
        ]
      }
    }
  }
];

export const getKitaData = (id: string): KitaData | undefined => {
  return kitaData.find(kita => kita.id === id);
};

export const getAllKitaIds = (): string[] => {
  return kitaData.map(kita => kita.id);
}; 