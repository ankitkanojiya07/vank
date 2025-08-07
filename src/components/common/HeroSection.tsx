import React from "react";
interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  height?: string; // e.g. 'h-screen', 'h-[50vh]'
  maxWidth?: string; // e.g. 'max-w-4xl'
  videoSrc?: string; // Optional video background
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, videoSrc }) => {
  return (
    <section
      className={`relative overflow-hidden w-full h-dvh  flex items-center justify-center`}
    >
      <video
        src={videoSrc}
        className="object-cover w-full h-full absolute aspect-video inset-0"
        autoPlay
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        controls={false}
        poster={image}
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noremoteplayback"
      />
    </section>
  );
};

export default HeroSection;
