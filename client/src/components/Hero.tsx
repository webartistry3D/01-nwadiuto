import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full flex items-center h-[56vh] md:h-[80vh]"
        style={{ backgroundColor: '#f7b5c5ff' }} // Background fallback behind image
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero image */}
        <img
  src="/images/hero.png"
  alt="hero"
  className="
    absolute inset-0 w-full h-full
    object-cover
    md:object-contain
    md:h-screen
  "
/>


        {/* Hero content */}
        <div className="relative z-20 max-w-3xl px-6 mx-auto text-center text-white">
          {/*<motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold"
            data-testid="text-hero-title"
          >
            Glam by Amaka
          </motion.h1>*/}

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-3 text-sm sm:text-base md:text-lg"
            data-testid="text-hero-subtitle"
          >
            Luxury. Confidence. Glam.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={scrollToShop}
              variant="outline"
              size="lg"
              className="mt-6 bg-white text-primary border-primary/20 hover:bg-white/90"
              data-testid="button-shop-collection"
            >
              Shop Our Collection
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
