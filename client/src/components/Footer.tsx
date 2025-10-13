import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2
          className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4"
          data-testid="text-footer-brand"
        >
          Glam By Amaka
        </h2>

        <p className="text-muted-foreground mb-6" data-testid="text-footer-description">
          Premium beauty products for the modern woman
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="hover-elevate p-3 rounded-full transition-transform hover:scale-110"
            data-testid="link-instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover-elevate p-3 rounded-full transition-transform hover:scale-110"
            data-testid="link-facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="hover-elevate p-3 rounded-full transition-transform hover:scale-110"
            data-testid="link-twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground" data-testid="text-copyright">
          © {currentYear} Glam By Amaka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
