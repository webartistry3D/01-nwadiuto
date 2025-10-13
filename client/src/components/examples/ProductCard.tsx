import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  const product = {
    id: '1',
    name: 'Silk Bodycon Dress',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1520975910581-3c8f1b5d0f7a?auto=format&fit=crop&w=800&q=60',
    category: 'Party',
    stock: 'in-stock' as const,
    stockCount: '5',
    colors: ['Black', 'Champagne'],
    sizes: ['S', 'M', 'L'],
  };

  return (
    <div className="max-w-xs p-4">
      <ProductCard product={product} index={0} />
    </div>
  );
}
