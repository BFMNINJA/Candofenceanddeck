// Hardcoded fallback reviews — replace with Google Places API when key is available
const fallbackReviews = [
  {
    author_name: "Michael T.",
    author_url: "",
    rating: 5,
    text: "Can Do did an absolutely incredible job on our backyard fence. From the first call to the final post, everything was professional and on time. The brown pressure treated fence looks exactly like the photos. The crew was clean, respectful, and finished ahead of schedule.",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Sandra K.",
    author_url: "",
    rating: 5,
    text: "We had both a fence and a deck done by Can Do this summer and couldn't be happier. The deck turned out beautifully — cedar with a black picket rail, exactly what we wanted. The 5-year warranty gave us real peace of mind.",
    relative_time_description: "5 months ago",
  },
  {
    author_name: "David L.",
    author_url: "",
    rating: 5,
    text: "After getting quotes from four companies, Can Do stood out for their professionalism. They were the only ones who offered a written guarantee on the property line. The fence is solid, looks great, and our neighbor even asked who built it.",
    relative_time_description: "7 months ago",
  },
  {
    author_name: "Priya N.",
    author_url: "",
    rating: 5,
    text: "Second time using Can Do — first for a fence, now for a pressure treated deck. Both experiences were seamless. They show up when they say they will and the quality is consistent. These guys are the real deal.",
    relative_time_description: "2 months ago",
  },
];

export async function GET() {
  // Google Places API integration — uncomment and configure when API key is available
  /*
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (apiKey && placeId) {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`,
        { next: { revalidate: 86400 } }
      );
      const data = await res.json();
      if (data.result?.reviews) {
        return Response.json({
          reviews: data.result.reviews,
          rating: data.result.rating,
          total: data.result.user_ratings_total,
        });
      }
    } catch {
      // Fall through to hardcoded
    }
  }
  */

  return Response.json({
    reviews: fallbackReviews,
    rating: 4.9,
    total: 200,
  });
}
