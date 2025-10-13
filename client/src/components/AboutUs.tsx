import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="mt-8 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-serif mb-4"
          data-testid="text-about-heading"
        >
          About Glam by Amaka
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-card-border rounded-lg p-6 shadow-sm space-y-4"
        >
          <p className="text-sm md:text-base leading-relaxed">
            Welcome to <strong>Glam by Amaka</strong>, your destination for luxury fashion that celebrates confidence, elegance, and individuality. We curate exclusive collections of premium clothing, accessories, and footwear designed to make you stand out at every occasion.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            From stunning party dresses and sophisticated workwear to traditional native attire and bridal pieces, each item in our collection is handpicked with attention to detail and quality. We believe every woman deserves to feel glamorous and empowered in what she wears.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Based in Lagos, we offer same-day delivery and personalized styling assistance to ensure you find the perfect piece for your unique style. Our limited-run collections mean you'll always wear something special and exclusive.
          </p>

          <div className="pt-2">
            <p className="text-sm font-medium text-primary">
              Let's help you discover your glam. Shop with us today!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
