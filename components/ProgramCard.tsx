"use client";

import Image from "next/image";
import { useState } from "react";

export type Program = {
  name: string;
  description: string;
  grades?: string;
  image: string;
  features?: string[];
};

export default function ProgramCard({ program, index }: { program: Program; index: number }) {
  const [imgSrc, setImgSrc] = useState(program.image);
  return (
    <div id={`program-${index}`} className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 group border">
      <div className="relative overflow-hidden">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={program.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            onError={() => setImgSrc('/homeace.jpeg')}
          />
        </div>
        {program.grades ? (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            Grades {program.grades}
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.name}</h3>
        <p className="text-foreground/70 mb-4 leading-relaxed">{program.description}</p>

        {Array.isArray(program.features) && program.features.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="space-y-1">
              {program.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-foreground/70">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


