import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '+2347017188070';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = "Hi Style Plug, your collection is beautiful. I want to make an inquiry.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="fixed bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-primary/80 shadow-xl flex items-center justify-center text-white"
      data-testid="button-floating-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
}
