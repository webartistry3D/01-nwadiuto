"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/carousel1.png",
  "/images/carousel2.png",
  "/images/carousel3.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Instantly switch every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[56vh] md:h-[100vh]">
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Instantly switching images */}
        <img
          key={index}
          src={images[index]}
          alt={`hero-${index}`}
          className="absolute inset-0 w-full h-full object-cover md:object-contain"
        />
      </div>
    </section>
  );
}
