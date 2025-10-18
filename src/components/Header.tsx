import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Development", href: "#development" },
  { name: "Career", href: "#career" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">ALGON</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full border-2 border-current" />
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
