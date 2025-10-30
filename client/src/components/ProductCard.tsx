import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  //stock: 'in-stock' | 'low-stock' | 'out-of-stock';
  stock: 'in-stock' | 'out-of-stock';
  stockCount: string;
  colors: string[];
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const whatsappNumber = '+2347017188070';

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  //const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppOrder = () => {
    const sizePart = product.sizes.length > 0 ? ` Size: ${product.sizes[0]}` : '';
    const message = `Hi, your collection is glam!🤩 I'm interested in the ${product.name} (Price: ₦${product.price.toLocaleString()}).`;
    //const message = `Hi, your collection looks fabulous. I'm interested in the ${product.name} (Price: ₦${product.price.toLocaleString()}) in color ${selectedColor}${sizePart}. Do you have it available?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    console.log(isSaved ? 'Removed from wishlist' : 'Saved to wishlist');
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        className="bg-white w-full max-w-[240px] h-auto rounded-lg overflow-hidden shadow-sm"
      >
        <div className="relative w-full aspect-[3/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover cursor-pointer"
            data-testid={`img-product-${product.id}`}
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
          <div
            className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${
              product.stock === 'out-of-stock' ? 'bg-red-600' : 'bg-black/65'
            }`}
          >
            {product.stock === 'out-of-stock'
              ? 'Out of Stock'
              : product.stockCount === 'Limited'
                ? 'Limited'
                : `In stock ${product.stockCount}`}
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-Poppins text-sm leading-snug" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>

          <div className="mt-1 flex items-center justify-between">
            <div className="text-sm font-medium" data-testid={`text-product-price-${product.id}`}>
              ₦{product.price.toLocaleString()}
            </div>
          </div>

          {/* Color selector */}
          {/*<div className="mt-2 flex items-center gap-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border-2 transition-transform hover:scale-110 ${
                  selectedColor === color ? 'border-primary scale-110' : 'border-border'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>*/}

          <div className="mt-3 text-xs text-muted-foreground">
            Sizes: {product.sizes.length ? product.sizes.join(', ') : 'One size'}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={handleWhatsAppOrder}
              disabled={product.stock === 'out-of-stock'}
              className={`flex-1 text-xs px-3 py-2 rounded-full border-2 font-medium hover-elevate
                ${product.stock === 'out-of-stock'
                  ? 'bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed'
                  : 'border-primary/20 bg-primary/10 text-primary'
                }`}
            >
              {product.stock === 'out-of-stock' ? 'Unavailable' : 'Place Order'}
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image container
          >
            <button
              className="absolute top-2 right-2 text-white p-1 hover:text-primary"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
