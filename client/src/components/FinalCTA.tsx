import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle} from 'lucide-react'; // ✅ import icons
import { SiTiktok, SiX } from 'react-icons/si'; 


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
          className="bg-white/20 text-primary hover:bg-white/60 border-primary/20"
          data-testid="button-final-cta"
        >
          Shop Now
        </Button>

        {/* ✅ Social Media Icons */}
        <div className="mt-5 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/nwadiuto_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform hover:scale-110"
          >
            <Instagram className="w-12 h-12" />
          </a>
          <a
            href="https://wa.me/+23470188070"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform hover:scale-110"
          >
            <MessageCircle className="w-12 h-12" />
          </a>
          <a
            href="https://tiktok.com/@nwadiuto_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform hover:scale-110"
          >
            <SiTiktok  className="w-12 h-12" />
          </a>
          <a
            href="https://twitter.com/nwadiuto_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-transform hover:scale-110"
          >
            <SiX className="w-12 h-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
