import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '2347012345678';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-sm bg-background/40 px-4 py-3 shadow-sm border-b border-border/50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-full hover-elevate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="text-lg font-serif tracking-wider">Glam by Amaka</div>
          </div>

          <div className="hidden md:flex gap-6 text-sm items-center">
            <button onClick={scrollToShop} className="hover-elevate px-3 py-2 rounded-md" data-testid="link-shop">
              Shop
            </button>
            <a href="#about" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-about">
              About
            </a>
            <a href="#contact" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">
              Contact
            </a>
          </div>

          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Amaka, I'd like to shop your collection.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
              data-testid="link-whatsapp-nav"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden mt-3 px-2 pb-3"
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={scrollToShop}
                className="text-left px-3 py-2 rounded hover-elevate"
                data-testid="link-mobile-shop"
              >
                Shop
              </button>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-3 py-2 rounded hover-elevate"
                data-testid="link-mobile-about"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-3 py-2 rounded hover-elevate"
                data-testid="link-mobile-contact"
              >
                Contact
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Amaka, I'd like to shop your collection.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-3 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                data-testid="link-mobile-whatsapp"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
