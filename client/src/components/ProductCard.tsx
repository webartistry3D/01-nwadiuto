import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: 'in-stock' | 'low-stock' | 'out-of-stock';
  stockCount: string;
  colors: string[];
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const whatsappNumber = '2347012345678';

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleWhatsAppOrder = () => {
    const sizePart = product.sizes.length > 0 ? ` Size: ${product.sizes[0]}` : '';
    const message = `Hi Amaka, I'm interested in the ${product.name} (Price: ₦${product.price.toLocaleString()})${sizePart}. Do you have it available?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    console.log(isSaved ? 'Removed from wishlist' : 'Saved to wishlist');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover"
          data-testid={`img-product-${product.id}`}
        />
        <div
          className="absolute top-2 left-2 bg-black/65 text-white text-xs px-2 py-1 rounded"
          data-testid={`badge-stock-${product.id}`}
        >
          {product.stockCount === 'Limited' ? 'Limited' : `In stock: ${product.stockCount}`}
        </div>
      </div>

      <div className="p-3">
        <h3
          className="font-serif text-sm leading-snug"
          data-testid={`text-product-name-${product.id}`}
        >
          {product.name}
        </h3>

        <div className="mt-1 flex items-center justify-between">
          <div
            className="text-sm font-medium"
            data-testid={`text-product-price-${product.id}`}
          >
            ₦{product.price.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            {product.colors.slice(0, 2).join(' • ')}
          </div>
        </div>

        <div className="mt-3 text-xs text-muted-foreground">
          Sizes: {product.sizes.length ? product.sizes.join(', ') : 'One size'}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleWhatsAppOrder}
            className="flex-1 text-xs px-3 py-2 rounded-full border-2 border-primary/20 bg-primary/10 text-primary font-medium hover-elevate"
            data-testid={`button-order-${product.id}`}
          >
            Order on WhatsApp
          </button>
          <button
            onClick={handleSave}
            className={`w-9 h-9 rounded-full border-2 border-border flex items-center justify-center transition-colors hover-elevate ${
              isSaved ? 'text-primary' : 'text-muted-foreground'
            }`}
            aria-label="Save item"
            data-testid={`button-save-${product.id}`}
          >
            <Heart className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
