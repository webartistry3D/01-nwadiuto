import { useState } from 'react';
import Categories from '../Categories';

export default function CategoriesExample() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="p-4">
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </div>
  );
}
