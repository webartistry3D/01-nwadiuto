"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/carousel1.png",
  "/images/carousel2.png",
  "/images/carousel3.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Slide animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[56vh] md:h-[100vh] bg-black">
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* AnimatePresence handles exit + enter */}
        <AnimatePresence custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: "linear", // no smooth easing, just linear motion
            }}
            className="absolute inset-0 w-full h-full object-cover md:object-contain"
          />
        </AnimatePresence>

        {/* Arrows 
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white"
        >
          <ChevronRight size={36} />
        </button>*/}

        {/* Dots 
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>*/}
      </div>
    </section>
  );
}
