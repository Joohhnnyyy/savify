export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">ALGON</div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
          </div>
          
          <p className="text-sm text-primary-foreground/80">
            © 2025 ALGON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
