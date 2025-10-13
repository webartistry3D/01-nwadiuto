import ProductCard from '../ProductCard';
import lipstick1 from '@assets/stock_images/pink_lipstick_beauty_f9a0f605.jpg';

export default function ProductCardExample() {
  const product = {
    id: '1',
    name: 'Rose Velvet Lipstick',
    price: 8500,
    image: lipstick1,
    category: 'Lipsticks',
    stock: 'in-stock' as const,
    colors: ['#FF69B4', '#DC143C', '#C71585'],
    sizes: ['3.5g', '5g'],
  };

  return (
    <div className="max-w-xs p-4">
      <ProductCard product={product} index={0} />
    </div>
  );
}
