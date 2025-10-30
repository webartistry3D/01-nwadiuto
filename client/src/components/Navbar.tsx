import { useState } from 'react';
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const whatsappNumber = '+2347017188070';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-sm bg-background/40 px-4 py-3 shadow-sm border-b border-border/50 relative">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-full hover-elevate z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="w-18 h-12 object-contain"
            />
            {/*<div className="text-2xl font-Poppins font-semibold tracking-wider">NWÁDÌÙTÓ 👗🧥🛒🛍️</div>*/}
          </div>

          <div className="hidden md:flex gap-6 text-sm items-center">
            <button onClick={scrollToShop} className="hover-elevate px-3 py-2 rounded-md" data-testid="link-shop">
              Shop Now
            </button>
            <button onClick={scrollToAbout} className="hover-elevate px-3 py-2 rounded-md" data-testid="link-about">
              About Us
            </button>
            {/*<a href="#contact" className="hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">
              Contact
            </a>*/}
          </div>

          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Nwádìùtó Studio, your collection is beautiful! I would like to make some inquiries.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
              data-testid="link-whatsapp-nav"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* ✅ Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden absolute text-xl top-full left-0 right-0 mt-1 px-2 pb-3 bg-background/90 rounded-lg shadow-lg z-40"
            >
              <div className="flex flex-col gap-2">
                <button
                  onClick={scrollToShop}
                  className="text-left px-3 py-2 rounded hover:bg-white/60"
                >
                  Shop
                </button>
                <a
                  href="#about"
                  onClick={scrollToAbout}
                  className="text-left px-3 py-2 rounded hover:bg-white/60"
                >
                  About
                </a>
                {/*<a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-3 py-2 rounded hover:bg-white/60"
                >
                  Contact
                </a>*/}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Style Plug, your collection is beautiful! I would like to make some inquiries.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-3 py-2 rounded-full bg-gray-300 text-green-900 text-xl"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
