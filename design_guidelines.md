# Design Guidelines: Glam By Amaka WhatsApp Microsite

## Design Approach
**Reference-Based Approach** drawing from premium beauty e-commerce sites like Glossier, Fenty Beauty, and Rare Beauty, combined with the elegant product showcase style of luxury brands. The pink/rose theme creates a feminine, luxurious aesthetic perfect for beauty products.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- **Primary Pink:** 330 65% 85% (soft rose for backgrounds and accents)
- **Hot Pink:** 330 75% 65% (vibrant rose for CTAs and highlights)
- **Rose Gold:** 15 40% 70% (elegant metallic accent)
- **Neutral Background:** 330 30% 98% (blush white base)
- **Text Primary:** 0 0% 20% (charcoal)
- **Text Secondary:** 0 0% 45% (medium gray)

**Dark Mode Adjustments:**
- **Background:** 330 20% 12% (deep rose-tinted dark)
- **Surface:** 330 15% 18% (elevated cards)
- **Text:** 330 10% 95% (warm white)

**Stock Status Colors:**
- In Stock: 140 70% 45% (emerald green)
- Low Stock: 35 90% 60% (amber warning)
- Out of Stock: 0 0% 60% (neutral gray)

### B. Typography

**Font Families:**
- **Headings:** Playfair Display (700 weight for hero, 600 for sections)
- **Body Text:** Inter (400 regular, 500 medium, 600 semibold)
- **Accent Text:** Playfair Display italic for elegant callouts

**Type Scale:**
- **Hero Title:** text-5xl md:text-7xl (bold, dramatic impact)
- **Section Headings:** text-3xl md:text-4xl (elegant presence)
- **Product Names:** text-lg font-medium (clear hierarchy)
- **Body Text:** text-base (optimal readability)
- **Price:** text-xl font-semibold (prominent display)
- **Small Text:** text-sm (labels, metadata)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Component Padding:** p-6 md:p-8 for cards, p-4 for compact elements
- **Section Spacing:** py-16 md:py-24 between major sections
- **Grid Gaps:** gap-4 md:gap-6 for product grids

**Container Widths:**
- **Full Width:** Hero section spans full viewport
- **Content Container:** max-w-7xl mx-auto px-4 md:px-6
- **Narrow Content:** max-w-4xl for text-heavy sections

**Grid Systems:**
- **Product Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- **Category Pills:** Horizontal scroll on mobile, wrapped on desktop

### D. Component Library

**Navigation:**
- Transparent backdrop blur (backdrop-blur-md bg-white/80) when scrolling
- Sticky positioning with subtle shadow on scroll
- Logo left-aligned, menu items right-aligned
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full-width background image with 60% dark gradient overlay
- Centered content with dramatic typography
- Primary CTA button (Hot Pink) with hover scale effect
- Min height: min-h-[500px] md:min-h-[600px]

**Category Filter Bar:**
- Rounded pill buttons: rounded-full px-6 py-2
- Active state: bg-hot-pink text-white
- Inactive: bg-white border-2 border-gray-200 hover:border-hot-pink
- Horizontal scroll on mobile with snap points

**Product Cards:**
- Image container: aspect-[3/4] with object-cover
- Stock label: Absolute positioned top-2 right-2, rounded-full badge
- Color variants: Circular color dots (w-6 h-6 rounded-full) or text list
- Size options: Small pill badges
- WhatsApp button: Full-width at bottom, bg-green-600 with WhatsApp icon

**Testimonials:**
- Card-based layout with customer photo, quote, and name
- Subtle shadow and rounded corners (rounded-2xl)
- Grid layout: 1 column mobile, 2-3 columns desktop

**Footer:**
- Centered text layout with brand name
- Social media icons in rose gold
- Copyright and links in muted text

**Floating WhatsApp Button:**
- Fixed bottom-right: fixed bottom-6 right-6
- Large circular button: w-16 h-16 rounded-full bg-green-600
- Bounce animation loop using Framer Motion
- Shadow: shadow-xl with green glow

### E. Animations

**Entrance Animations (Framer Motion):**
- Headings: Fade in with slide up (y: 20 → 0) over 0.6s
- Product cards: Stagger fade-in (0.1s delay per card)
- Hero elements: Sequential reveal (title → subtitle → button)

**Interactions:**
- Button hover: scale(1.05) with 0.2s transition
- Product card hover: Subtle lift with shadow increase
- Category pills: Smooth color transition on hover/active

**Scroll Behavior:**
- Smooth scroll for all anchor links
- Navbar background opacity change on scroll

## Images

**Hero Background:**
- Full-width glamorous beauty/makeup scene
- Suggested: Close-up of makeup products with soft bokeh, rose gold accents
- Dark overlay (60% opacity) to ensure text readability
- Image should be high-resolution, 1920x1080 minimum

**Product Images:**
- Clean white or soft pink background
- Consistent lighting and angle across all products
- High-quality product photography showing texture and color
- Aspect ratio: 3:4 (portrait orientation)

**Testimonial Avatars:**
- Circular cropped customer photos
- Size: w-16 h-16 on mobile, w-20 h-20 on desktop
- Soft shadow for depth

## Interaction Patterns

**WhatsApp Integration:**
- "Order on WhatsApp" buttons encode product details in message
- Pre-filled message format: "Hi, I'd like to order [Product Name] in [Color/Size]"
- Opens in new tab/WhatsApp app depending on device

**Product Discovery:**
- Category filter updates grid instantly
- Smooth transitions when filtering (Framer Motion AnimatePresence)
- Loading states show skeleton cards during transitions

**Mobile Experience:**
- Touch-friendly targets (min 44x44px)
- Swipeable category pills with momentum scrolling
- Sticky header for easy navigation
- WhatsApp button always accessible

## Accessibility

- Color contrast ratios meet WCAG AA standards
- Focus states visible on all interactive elements (ring-2 ring-hot-pink)
- Alt text for all product images
- Semantic HTML structure with proper heading hierarchy
- Touch targets minimum 44x44px
- Dark mode respects user system preference