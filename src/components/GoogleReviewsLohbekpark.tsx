import { Star, User, ExternalLink } from "lucide-react";

interface Review {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri?: string;
  };
  publishTime: string;
  googleMapsUri: string;
}

interface ReviewData {
  formattedAddress: string;
  displayName: {
    text: string;
    languageCode: string;
  };
  reviews: Review[];
}

export const GoogleReviewsLohbekpark = () => {
  const reviewData: ReviewData = {
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
      },
      {
        "name": "places/ChIJvx6dfqWIsUcR2kaTyyToP8U/reviews/ChdDSUhNMG9nS0VJQ0FnSUNucklMR3B3RRAB",
        "relativePublishTimeDescription": "9 months ago",
        "rating": 5,
        "text": {
          "text": "Great daycare!\nOur son feels very comfortable here\nand always likes to go to you.\nThe excursion day in particular is his weekly highlight.\nThank you for your loving and warm support!!!\nWe are happy to have found such a great daycare center!",
          "languageCode": "en-US"
        },
        "originalText": {
          "text": "Super Kita!\nUnser Sohn fühlt sich hier sehr wohl\nund geht immer gerne zu euch.\nBesonders der Ausflugstag ist sein wöchentliches Highlight.\nDanke für eure liebevolle und herzliche Betreuung!!!\nWir sind froh, so eine tolle Kita gefunden zu haben!",
          "languageCode": "de"
        },
        "authorAttribution": {
          "displayName": "Dennis Ihns",
          "uri": "https://www.google.com/maps/contrib/118028053560245616369/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLLyLgkNt-CsHa63tpPCNT-w3p8RMTZjW6SQEjpz5oKZB0bUQ=s128-c0x00000000-cc-rp-mo"
        },
        "publishTime": "2024-09-23T14:51:25.022570Z",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNucklMR3B3RRAB!2m1!1s0x47b188a57e9d1ebf:0xc53fe824cb9346da"
      },
      {
        "name": "places/ChIJvx6dfqWIsUcR2kaTyyToP8U/reviews/ChZDSUhNMG9nS0VJQ0FnSURzb04tb2F3EAE",
        "relativePublishTimeDescription": "5 years ago",
        "rating": 5,
        "text": {
          "text": "The team at Kinderstadt Kita Lokstedt ensures good, holistic care for the children.\n\nIn addition to nice projects and additional offers (e.g. being able to stay overnight at daycare) for the little ones, there are also great activities for parents and a living educational partnership on an equal footing.",
          "languageCode": "en-US"
        },
        "originalText": {
          "text": "Das Team der Kinderstadt Kita Lokstedt sorgt für eine gute und ganzheitliche Betreuung der Kinder.\n\nNeben schönen Projekten und zusätzlichen Angeboten (z.B. in der Kita übernachten zu können) für die Kleinen, gibt es auch tolle Aktionen für die Eltern und eine gelebte Erziehungspartnerschaft auf Augenhöhe.",
          "languageCode": "de"
        },
        "authorAttribution": {
          "displayName": "Taka Tukaland",
          "uri": "https://www.google.com/maps/contrib/113448249175995886750/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjW3FtDO6aHaWlwWDhW8T_s3ZNzmTcsZAErIsJKERLhZ77H7WkWQ=s128-c0x00000000-cc-rp-mo-ba3"
        },
        "publishTime": "2020-02-20T16:47:59.131779Z",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURzb04tb2F3EAE!2m1!1s0x47b188a57e9d1ebf:0xc53fe824cb9346da"
      },
      {
        "name": "places/ChIJvx6dfqWIsUcR2kaTyyToP8U/reviews/ChdDSUhNMG9nS0VJQ0FnSUQtd3BMYm5BRRAB",
        "relativePublishTimeDescription": "2 years ago",
        "rating": 5,
        "text": {
          "text": "I look forward to entrusting my child to you! Many daycare visits and none of them presented themselves as authentically. We feel in good hands here.",
          "languageCode": "en-US"
        },
        "originalText": {
          "text": "Ich freue mich darauf euch mein Kind anzuvertrauen! Viele Kitabesichtigungen und keine hat sich so authentisch präsentiert. Wir fühlen uns hier gut aufgehoben.",
          "languageCode": "de"
        },
        "authorAttribution": {
          "displayName": "Baristahaus GmbH",
          "uri": "https://www.google.com/maps/contrib/105566609081475960543/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocKskp3xQ3W-K_Mu2eko9uPklrVWYnacPI17gKH5DIO4CiEZVQ=s128-c0x00000000-cc-rp-mo"
        },
        "publishTime": "2022-11-24T19:26:19.279221Z",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUQtd3BMYm5BRRAB!2m1!1s0x47b188a57e9d1ebf:0xc53fe824cb9346da"
      }
    ]
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviewData.reviews.reduce((sum, review) => sum + review.rating, 0) / reviewData.reviews.length;

  return (
    <section className="py-20 bg-stadtkueken-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Was Eltern über uns sagen
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold text-stadtkueken-brown">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-gray-600">
              ({reviewData.reviews.length} Bewertungen)
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Echte Bewertungen von Eltern aus unserer Kita-Gemeinschaft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewData.reviews.map((review, index) => (
            review.googleMapsUri ? (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <a
                  href={review.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      {review.authorAttribution.photoUri ? (
                        <img
                          src={review.authorAttribution.photoUri}
                          alt={review.authorAttribution.displayName}
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-stadtkueken-brown">
                          {review.authorAttribution.displayName}
                        </h4>
                        <ExternalLink className="h-4 w-4 text-stadtkueken-orange" />
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-600">
                          {review.relativePublishTimeDescription}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {/* Prefer German text if available, otherwise use English */}
                    {review.originalText.languageCode === 'de' 
                      ? (review.originalText.text.length > 200
                          ? `${review.originalText.text.substring(0, 200)}...`
                          : review.originalText.text)
                      : (review.text.text.length > 200
                          ? `${review.text.text.substring(0, 200)}...`
                          : review.text.text)
                    }
                  </p>
                </a>
              </div>
            ) : (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {review.authorAttribution.photoUri ? (
                      <img
                        src={review.authorAttribution.photoUri}
                        alt={review.authorAttribution.displayName}
                        className="w-12 h-12 rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-stadtkueken-brown">
                        {review.authorAttribution.displayName}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-600">
                        {review.relativePublishTimeDescription}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {/* Prefer German text if available, otherwise use English */}
                  {review.originalText.languageCode === 'de' 
                    ? (review.originalText.text.length > 200
                        ? `${review.originalText.text.substring(0, 200)}...`
                        : review.originalText.text)
                    : (review.text.text.length > 200
                        ? `${review.text.text.substring(0, 200)}...`
                        : review.text.text)
                  }
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};
