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
    <section className="w-full flex h-96 md:h-[400px] overflow-hidden shadow-md">
      {/* Partie gauche : fond noir avec texte (40%) */}
      <div className="w-2/5 bg-black flex flex-col justify-center p-6 md:p-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {titleSpans.map((text, index) => (
            <span key={index} className="block">
              {text}
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl">{subtitle}</p>
      </div>

      {/* Partie droite : image (60%) */}
      <div className="w-3/5 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={95}
          className="object-cover"
          sizes="(max-width: 768px) 60vw, 60vw"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
