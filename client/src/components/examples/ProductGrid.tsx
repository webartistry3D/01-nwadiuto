import ProductGrid from '../ProductGrid';

export default function ProductGridExample() {
  const products = [
    {
      id: '1',
      name: 'Silk Bodycon Dress',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1520975910581-3c8f1b5d0f7a?auto=format&fit=crop&w=800&q=60',
      category: 'Party',
      stock: 'in-stock' as const,
      stockCount: '5',
      colors: ['Black', 'Champagne'],
      sizes: ['S', 'M', 'L'],
    },
    {
      id: '2',
      name: 'Designer Two-Piece Set',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1520975910581-5f3a6f9c9a2b?auto=format&fit=crop&w=800&q=60',
      category: 'Workwear',
      stock: 'low-stock' as const,
      stockCount: '2',
      colors: ['Rose Gold', 'Ivory'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <ProductGrid products={products} />
    </div>
  );
}
