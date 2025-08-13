export interface Testimonial {
  name: string;
  country?: string;
  text: string;
  visitedCities?: string;
  remark?: string;
  transport?: string;
  reps?: string;
  hotels?: string;
  date?: string;
  stars?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Enric cantal de Grino",
    country: "SPAIN",
    text: "We take great memories of this trip and the organization. We have been very calm, enjoyed the trip. Thanks to the entire Services International team",
    stars: 5,
  },
  {
    name: "Harjinder S",
    country: "India",
    text: "A very upmarket, nice and friendly resort with very well kept rooms and villas with tasty food and awesome service at both the F&B as well as the House keeping fronts.",
    stars: 5,
  },
  {
    name: "Vidur V",
    country: "India",
    text: "It is a great resort in the midst of nature, with birds of various types visible all across. The food is also delicious. Stay at the Luxury Villa was great. Must stay place when you are in Sariska.",
    stars: 5,
  },
  {
    name: "Nimish Agarwal",
    country: "India",
    text: "We had a great stay at Vanaashrya Resort. The rooms are very spacious and well maintained. The food quality is top notch and the spa service is also good.",
    stars: 5,
  },
];
