import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
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
      {/* Layout responsive */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Colonne gauche : texte */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="mb-4">{description}</p>

          {link && (
            <Button asChild className="w-full md:w-auto">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le site
              </Link>
            </Button>
          )}
        </div>

        {/* Colonne droite : image */}
        {images && images.length > 0 && (
          <div className="w-full md:w-1/2 md:flex md:justify-end">
            <div
              className="
                relative overflow-hidden rounded-md shadow-sm
                w-full h-56
                md:w-64 md:h-40
              "
            >
              <Image
                src={images[0]}
                alt={`${title} image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Project;