import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="mt-8 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
      {/*<div className="w-full">*/}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-Poppins font-bold mb-4"
          data-testid="text-about-heading"
        >
          About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-card-border rounded-lg overflow-hidden shadow-sm"
        >
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src="/images/about.jpg"
              alt="Luxury fashion boutique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Nwádìùtó Studio</strong> is your destination for luxury fashion that celebrates confidence, elegance, and individuality. We curate exclusive collections of premium clothing designed to make you stand out at every occasion.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              From stunning party dresses and sophisticated  casual outfits, each item in our collection is handpicked with attention to detail and quality. We believe every woman deserves to feel glamorous and empowered in what she wears.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              We offer same-day delivery and personalized styling assistance to ensure you find the perfect piece for your unique style. Our limited-run collections mean you will always wear something special and exclusive.
            </p>

            <div className="pt-2">
              <p className="text-sm font-medium text-primary">
                Shop with us. Let's join you in discovering your glam.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
