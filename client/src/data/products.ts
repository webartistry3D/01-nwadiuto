import { type Product } from '@/components/ProductCard';
import lipstick1 from '@assets/stock_images/pink_lipstick_beauty_f9a0f605.jpg';
import lipstick2 from '@assets/stock_images/pink_lipstick_beauty_3a790ece.jpg';
import lipstick3 from '@assets/stock_images/pink_lipstick_beauty_8f38d4e4.jpg';
import eyeshadow1 from '@assets/stock_images/eyeshadow_palette_ma_c39bcbad.jpg';
import eyeshadow2 from '@assets/stock_images/eyeshadow_palette_ma_8f9cb1d0.jpg';
import eyeshadow3 from '@assets/stock_images/eyeshadow_palette_ma_a79f9f34.jpg';
import blush1 from '@assets/stock_images/blush_makeup_compact_f15213e5.jpg';
import blush2 from '@assets/stock_images/blush_makeup_compact_7f960b55.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rose Velvet Lipstick',
    price: 8500,
    image: lipstick1,
    category: 'Lipsticks',
    stock: 'in-stock',
    colors: ['#FF69B4', '#DC143C', '#C71585'],
    sizes: ['3.5g', '5g'],
  },
  {
    id: '2',
    name: 'Coral Dream Lipstick',
    price: 7500,
    image: lipstick2,
    category: 'Lipsticks',
    stock: 'low-stock',
    colors: ['#FF7F50', '#FF6347'],
    sizes: ['3.5g'],
  },
  {
    id: '3',
    name: 'Ruby Red Lipstick',
    price: 9000,
    image: lipstick3,
    category: 'Lipsticks',
    stock: 'in-stock',
    colors: ['#8B0000', '#DC143C'],
    sizes: ['3.5g', '5g'],
  },
  {
    id: '4',
    name: 'Sunset Glow Palette',
    price: 15000,
    image: eyeshadow1,
    category: 'Eyeshadows',
    stock: 'in-stock',
  },
  {
    id: '5',
    name: 'Nude Elegance Palette',
    price: 18000,
    image: eyeshadow2,
    category: 'Eyeshadows',
    stock: 'in-stock',
  },
  {
    id: '6',
    name: 'Glam Night Palette',
    price: 16500,
    image: eyeshadow3,
    category: 'Eyeshadows',
    stock: 'low-stock',
  },
  {
    id: '7',
    name: 'Peach Blossom Blush',
    price: 6500,
    image: blush1,
    category: 'Blush',
    stock: 'in-stock',
    sizes: ['8g', '12g'],
  },
  {
    id: '8',
    name: 'Rose Glow Blush',
    price: 7000,
    image: blush2,
    category: 'Blush',
    stock: 'in-stock',
    sizes: ['8g'],
  },
];
