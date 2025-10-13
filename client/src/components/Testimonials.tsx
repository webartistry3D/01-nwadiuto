import { motion } from 'framer-motion';

const testimonials = [
  {
    id: '1',
    text: 'Absolutely in love with my dress! Fits perfectly.',
    author: '@beauty_by_toke',
  },
  {
    id: '2',
    text: 'Quick delivery and excellent quality. Will buy again.',
    author: '@chicamaka',
  },
];

export default function Testimonials() {
  return (
    <section className="mt-8 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-lg mb-4"
          data-testid="text-testimonials-heading"
        >
          What Customers Say
        </motion.h3>
        <div className="space-y-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-card-border rounded-lg p-3 shadow-sm"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="text-sm font-medium">"{testimonial.text}"</div>
              <div className="text-xs text-muted-foreground mt-2">— {testimonial.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
