import ProductGrid from '../ProductGrid';
import lipstick1 from '@assets/stock_images/pink_lipstick_beauty_f9a0f605.jpg';
import lipstick2 from '@assets/stock_images/pink_lipstick_beauty_3a790ece.jpg';
import eyeshadow1 from '@assets/stock_images/eyeshadow_palette_ma_c39bcbad.jpg';

export default function ProductGridExample() {
  const products = [
    {
      id: '1',
      name: 'Rose Velvet Lipstick',
      price: 8500,
      image: lipstick1,
      category: 'Lipsticks',
      stock: 'in-stock' as const,
      colors: ['#FF69B4', '#DC143C'],
    },
    {
      id: '2',
      name: 'Coral Dream Lipstick',
      price: 7500,
      image: lipstick2,
      category: 'Lipsticks',
      stock: 'low-stock' as const,
    },
    {
      id: '3',
      name: 'Sunset Glow Palette',
      price: 15000,
      image: eyeshadow1,
      category: 'Eyeshadows',
      stock: 'in-stock' as const,
    },
  ];

  return (
    <div className="p-4">
      <ProductGrid products={products} />
    </div>
  );
}
