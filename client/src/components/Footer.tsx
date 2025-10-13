export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 py-6 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 text-center text-sm text-muted-foreground" data-testid="text-copyright">
        © {currentYear} Glam by Amaka • Crafted with love
      </div>
    </footer>
  );
}
