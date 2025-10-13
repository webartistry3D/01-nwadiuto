import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const whatsappNumber = '2347012345678';

export default function FinalCTA() {
  const handleClick = () => {
    const message = "Hi Amaka, I'd like to shop your collection. Please assist.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="mt-8 px-4 mb-28">
      <div className="max-w-3xl mx-auto bg-foreground text-background rounded-lg p-6 text-center">
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl font-serif mb-3"
        >
          Ready to Slay?
        </motion.h4>
        <Button
          onClick={handleClick}
          className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20"
          data-testid="button-final-cta"
        >
          Shop on WhatsApp
        </Button>
      </div>
    </section>
  );
}
