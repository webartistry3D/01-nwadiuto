import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import WhyShop from '@/components/WhyShop';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { products } from '@/data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <Hero />

        <section className="mt-4 px-4">
          <Categories
            selectedCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </section>

        <section id="shop" className="mt-4 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-Poppins font-bold mb-4"
              data-testid="text-products-heading"
            >
              Featured Wears
            </motion.h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductGrid key={product.id} products={[product]} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-6 text-center text-muted-foreground">
                No items found in this category.
              </div>
            )}
          </div>
        </section>

        <WhyShop />
        <AboutUs />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
