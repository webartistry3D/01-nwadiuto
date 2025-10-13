import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { products } from '@/data/products';
import avatar1 from '@assets/stock_images/professional_woman_b_6a146a95.jpg';
import avatar2 from '@assets/stock_images/professional_woman_b_a9d298b8.jpg';
import avatar3 from '@assets/stock_images/professional_woman_b_1d5d74b5.jpg';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      image: avatar1,
      initials: 'SJ',
      text: 'The quality of these products is amazing! My lipstick lasted all day without touch-ups.',
    },
    {
      id: '2',
      name: 'Chioma Eze',
      image: avatar2,
      initials: 'CE',
      text: 'Fast delivery and excellent customer service. The eyeshadow palette is my new favorite!',
    },
    {
      id: '3',
      name: 'Amara Okafor',
      image: avatar3,
      initials: 'AO',
      text: 'Beautiful packaging and premium quality. Worth every naira!',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="products" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-8"
            data-testid="text-products-heading"
          >
            Our Collection
          </motion.h2>

          <div className="mb-8">
            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      <Testimonials testimonials={testimonials} />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
