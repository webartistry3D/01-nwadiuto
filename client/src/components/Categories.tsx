import { motion } from 'framer-motion';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = ['All', 'Lipsticks', 'Eyeshadows', 'Blush', 'Foundation', 'Highlighters'];

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`flex-shrink-0 px-6 py-2 rounded-full font-medium transition-all snap-start ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-background border-2 border-border hover-elevate'
          }`}
          data-testid={`button-category-${category.toLowerCase()}`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
