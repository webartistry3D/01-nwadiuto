import { motion } from 'framer-motion';

/*const features = [
  { title: 'Premium Quality', subtitle: 'Handpicked fabrics' },
  { title: 'Exclusive Drops', subtitle: 'Limited runs' },
  { title: 'Fast Delivery', subtitle: 'Lagos same-day' },
  { title: 'Personal Styling', subtitle: 'Chat for suggestions' },
];*/

const features = [
  { title: 'Premium Quality', subtitle: 'Tailored-ready perfection' },
  { title: 'Exclusive Collections', subtitle: 'Limited edition pieces' },
  { title: 'Instant Elegance', subtitle: 'Ready-to-wear, no waiting' },
  { title: 'VIP Styling Support', subtitle: 'Personal style guidance' },
];

export default function WhyShop() {
  return (
    <section className="mt-8 px-4">
      <div className="w-full mx-auto bg-card border border-card-border rounded-lg p-4 shadow-sm">
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-2">
              <div className="text-sm font-semibold">{feature.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{feature.subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
