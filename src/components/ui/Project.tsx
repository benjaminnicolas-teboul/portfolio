import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  link?: string;
  images?: string[];
};

const Project = ({ title, description, link, images }: ProjectProps) => {
  return (
    <div className="w-full p-6 border rounded-lg shadow-md bg-card text-card-foreground">
      {/* Description */}
      <p className="mb-4">{description}</p>

      {/* Image avec lien */}
      {images && images.length > 0 && (
        <div className="w-full flex justify-center">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden rounded-md shadow-sm w-full h-56 md:w-64 md:h-40">
                <Image
                  src={images[0]}
                  alt={`${title} image`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </Link>
          ) : (
            <div className="relative overflow-hidden rounded-md shadow-sm w-full h-56 md:w-64 md:h-40">
              <Image
                src={images[0]}
                alt={`${title} image`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;