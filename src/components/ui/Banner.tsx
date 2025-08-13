import React from "react";
import Image from "next/image";

type BannerProps = {
  titleSpans: string[];
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
};

const Banner = ({
  titleSpans,
  subtitle,
  imageSrc,
  imageAlt = "banner image",
}: BannerProps) => {
 return (
  <section className="w-full flex flex-col-reverse md:flex-row h-auto md:h-[600px] overflow-hidden shadow-md">
    
    {/* Partie gauche : fond noir avec texte */}
    <div className="w-full md:w-2/5 bg-black flex flex-col justify-center p-6 md:p-12 text-white break-words">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
        {titleSpans.map((text, index) => (
          <span key={index} className="block">
            {text}
          </span>
        ))}
      </h2>

      <p className="text-xl md:text-2xl">{subtitle}</p>
    </div>

    {/* Partie droite : image */}
    <div className="w-full md:w-3/5 relative h-64 md:h-auto">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        quality={95}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
        priority
      />
    </div>

  </section>
);
};

export default Banner;
