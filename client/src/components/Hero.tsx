import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/hero.png",
  "/images/hero1.png",
  "/images/hero2.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // 🕒 Auto-switch every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative w-full h-[56vh] md:h-[100vh]"
        style={{ backgroundColor: "#fff" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* ⚡ Instant image switch */}
        <img
          key={index}
          src={images[index]}
          alt={`hero-${index}`}
          className="absolute inset-0 w-full h-full object-cover md:object-contain transition-none"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition"
        >
          {/*<ChevronLeft size={36} />*/}
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/80 hover:text-white transition"
        >
          {/*<ChevronRight size={36} />*/}
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
