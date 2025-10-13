import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: 'in-stock' | 'low-stock' | 'out-of-stock';
  colors?: string[];
  sizes?: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const getStockBadge = () => {
    const variants = {
      'in-stock': { label: 'In Stock', className: 'bg-green-600 text-white' },
      'low-stock': { label: 'Low Stock', className: 'bg-amber-600 text-white' },
      'out-of-stock': { label: 'Out of Stock', className: 'bg-gray-500 text-white' },
    };
    return variants[product.stock];
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order ${product.name} (₦${product.price.toLocaleString()})`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const stockBadge = getStockBadge();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-product-${product.id}`}
        />
        <Badge
          className={`absolute top-2 right-2 ${stockBadge.className}`}
          data-testid={`badge-stock-${product.id}`}
        >
          {stockBadge.label}
        </Badge>
      </div>

      <h3
        className="text-lg font-medium mb-2"
        data-testid={`text-product-name-${product.id}`}
      >
        {product.name}
      </h3>

      <p
        className="text-xl font-semibold text-primary mb-3"
        data-testid={`text-product-price-${product.id}`}
      >
        ₦{product.price.toLocaleString()}
      </p>

      {product.colors && product.colors.length > 0 && (
        <div className="flex gap-2 mb-3">
          {product.colors.map((color, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border-2 border-border"
              style={{ backgroundColor: color }}
              data-testid={`color-${product.id}-${idx}`}
            />
          ))}
        </div>
      )}

      {product.sizes && product.sizes.length > 0 && (
        <div className="flex gap-2 mb-4">
          {product.sizes.map((size, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs"
              data-testid={`size-${product.id}-${idx}`}
            >
              {size}
            </Badge>
          ))}
        </div>
      )}

      <Button
        className="w-full bg-green-600 hover:bg-green-700 text-white"
        onClick={handleWhatsAppOrder}
        disabled={product.stock === 'out-of-stock'}
        data-testid={`button-order-${product.id}`}
      >
        Order on WhatsApp
      </Button>
    </motion.div>
  );
}
