export interface HeroSectionData {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  height?: string;
  maxWidth?: string;
}

export const heroSections: Record<string, HeroSectionData & { videoSrc?: string }> = {
  home: {
    image: '/final/gallery/herobackground.webp',
    title: 'Where Luxury Intertwines with Nature',
    subtitle: 'A Boutique Bespoke Iconic Resort',
    description: 'Near Sariska Tiger Reserve, Rajasthan',
    height: 'h-screen',
    maxWidth: 'max-w-2xl',
    videoSrc: '/final/gallery/sariska.webm',
  },
  accommodations: {
    image: '/final/gallery/herobackground.webp',
    title: 'The Stay',
    subtitle: 'Luxury Accommodations in the Heart of Nature',
    height: 'h-screen',
    maxWidth: 'max-w-3xl',
    videoSrc: '/final/gallery/sariska.webm',
  },
  amenities: {
    image: '/final/gallery/herobackground.webp',
    title: 'World-Class Amenities',
    subtitle: undefined,
    description: 'Experience luxury and comfort with our premium amenities designed for your ultimate relaxation',
    height: 'h-screen',
    maxWidth: 'max-w-4xl',
    videoSrc: '/final/gallery/sariska.webm',
  },
  gallery: {
    image: '/final/gallery/herobackground.webp',
    title: 'Our Gallery',
    subtitle: undefined,
    description: 'Explore the beauty and luxury of Vanaashrya through our curated collection of images',
    height: 'h-screen',
    maxWidth: 'max-w-4xl',
    videoSrc: '/final/gallery/sariska.webm',
  },
  testimonials: {
    image: '/final/gallery/herobackground.webp',
    title: 'Guest Testimonials',
    subtitle: undefined,
    description: 'Real stories from our guests about their unforgettable experiences at Vanaashrya.',
    height: 'h-screen', // Full viewport
    maxWidth: 'max-w-2xl',
    videoSrc: '/final/gallery/sariska.webm',
  },
  contact: {
    image: "/final/gallery/herobackground.webp", // Use a professional/welcoming background image
    title: "Get In Touch",
    subtitle: "We'd Love to Hear From You",

    maxWidth: "max-w-4xl",
    videoSrc: '/final/final/gallery/sariska.webm',
  },
  about: {
    image: "/final/gallery/herobackground.webp", // Use a professional/welcoming background image
    title: "About Us",
    subtitle: "",
    height: "h-screen",
    maxWidth: "max-w-4xl",
    videoSrc: '/final/final/gallery/sariska.webm',
  },
  excursions: {
    image: "/final/gallery/herobackground.webp", // Use a professional/welcoming background image
    title: "Excursions",
    subtitle: "Excursions that create life-lasting Memories",
    height: "h-screen",
    maxWidth: "max-w-4xl",
    videoSrc: '/final/final/gallery/sariska.webm',
  },
  blog: {
    image: "/final/gallery/herobackground.webp", // Use a professional/welcoming background image
    title: "Blogs",
    subtitle: "",
    description: "",
    height: "h-screen",
    maxWidth: "max-w-4xl",
    videoSrc: '/final/final/gallery/sariska.webm',
  },
}; 