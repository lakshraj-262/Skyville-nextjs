import RestaurantContent from "./RestaurantContent";

export const metadata = {
  title: "Flavours by Skyville - Restaurant in Udaipur",
  description:
    "Discover Flavours by Skyville, the in-house restaurant at Skyville Udaipur. Enjoy vibrant interiors, family-friendly dining, and delicious food after your playtime and events.",
  keywords:
    "Flavours by Skyville, restaurant in Udaipur, family restaurant Udaipur, Skyville restaurant, food at Skyville",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/restaurant",
    title: "Flavours by Skyville - Restaurant in Udaipur",
    description:
      "A warm, modern dining experience inside Skyville Udaipur with great food, lively ambience, and a perfect setting for families and celebrations.",
    images: [
      {
        url: "/assets/Flavours by Skyville.JPG.jpeg",
        width: 1254,
        height: 1254,
        alt: "Flavours by Skyville restaurant logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavours by Skyville",
    description:
      "Explore the restaurant experience at Skyville Udaipur with signature dishes, stylish ambience, and family-friendly dining.",
    images: ["/assets/Flavours by Skyville.JPG.jpeg"],
  },
};

export default function RestaurantPage() {
  return <RestaurantContent />;
}
