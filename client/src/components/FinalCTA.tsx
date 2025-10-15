import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {

  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // ✅ If you need to close the mobile menu,
    // this should be handled by the parent and passed as a prop.
    // Example: props.closeMobileMenu?.();
  };

  return (
    <section className="mt-8 px-4 mb-28">
      <div className="max-w-3xl mx-auto bg-foreground text-background rounded-lg p-6 text-center">
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl font-Poppins mb-3"
        >
          Ready to Slay?
        </motion.h4>
        <Button
          onClick={scrollToShop}
          className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20"
          data-testid="button-final-cta"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}
