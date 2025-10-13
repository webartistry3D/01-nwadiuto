import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/stock_images/luxury_makeup_produc_5344decb.jpg';

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          data-testid="text-hero-title"
        >
          Discover Your Beauty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          Premium makeup products curated for the modern woman. Shop our exclusive collection and order directly on WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="hover:scale-105 transition-transform"
            data-testid="button-shop-collection"
          >
            Shop the Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
