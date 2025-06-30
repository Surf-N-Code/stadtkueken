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
  flagContentUri: string;
}

export interface ReviewData {
  formattedAddress: string;
  displayName: {
    text: string;
    languageCode: string;
  };
  reviews: Review[];
  userRatingCount: number;
}

export interface KitaGoogleReviewsProps {
  title: string;
  subtitle: string;
  reviewData: ReviewData;
}

export const KitaGoogleReviews = ({
  title,
  subtitle,
  reviewData,
}: KitaGoogleReviewsProps) => {
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
            {title}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold text-stadtkueken-brown">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-gray-600">
              ({reviewData.userRatingCount} Bewertungen)
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
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
                    <div className="flex-1 min-w-0">
                      <p className="font-amatic text-lg font-semibold text-stadtkueken-brown truncate">
                        {review.authorAttribution.displayName}
                      </p>
                      <div className="flex items-center space-x-2 mb-1">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">
                          {review.relativePublishTimeDescription}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-stadtkueken-orange flex-shrink-0" />
                  </div>
                  {review?.originalText?.text && (
                    <p className="text-gray-700 text-sm line-clamp-4">
                      {review.originalText.text}
                    </p>
                  )}
                </a>
              </div>
            ) : (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
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
                  <div className="flex-1 min-w-0">
                    <p className="font-amatic text-lg font-semibold text-stadtkueken-brown truncate">
                      {review.authorAttribution.displayName}
                    </p>
                    <div className="flex items-center space-x-2 mb-1">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">
                        {review.relativePublishTimeDescription}
                      </span>
                    </div>
                  </div>
                </div>
                {review?.originalText?.text && (
                  <p className="text-gray-700 text-sm line-clamp-4">
                    {review.originalText.text}
                  </p>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}; 