import { motion } from 'framer-motion';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

//const categories = ['All', 'Workwear', 'Party', 'Casual', 'Native', 'Bridal', 'Luxury', 'Dinner', 'Accessories'];
const categories = ['All', 'Workwear', 'Casual', 'Dinner', 'Luxury'];
export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="max-w-3xl mx-auto"
    >
      <div id="category" className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all ${
              selectedCategory === category
                ? 'bg-primary/20 text-primary border-2 border-primary/30'
                : 'bg-background border-2 border-border text-foreground shadow-sm hover-elevate'
            }`}
            data-testid={`button-category-${category.toLowerCase()}`}
          >
            {category}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
