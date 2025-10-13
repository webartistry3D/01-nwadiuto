import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-[56vh] md:h-[80vh] flex items-center"
      >
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1520975910581-3c8f1b5d0f7a?auto=format&fit=crop&w=1600&q=60"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif font-semibold"
            data-testid="text-hero-title"
          >
            Glam by Amaka
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-3 text-sm md:text-lg"
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
              Shop the Collection
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
