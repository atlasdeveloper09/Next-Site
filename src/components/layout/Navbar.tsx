import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/components/theme-provider';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/plans', label: 'Planos' },
    { path: '/commands', label: 'Comandos' },
    { path: '/webhook', label: 'Webhook' },
    { path: '/rules', label: 'Regras' },
    { path: '/team', label: 'Equipe' },
  ];

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
            }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="border-b border-border/40 backdrop-blur-xl sticky top-0 z-50 w-full bg-background/95 supports-[backdrop-filter]:bg-background/60 bg-white dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#02040d] dark:to-[#000000]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 relative flex-shrink-0">
                {/* 
    {theme === 'dark' ? (
      <img
        src="./photo/dark.png"
        alt="next-dark"
        className="w-full h-full object-contain"
        loading="eager"
      />
    ) : (
      <img
        src="./photo/dark.png"
        alt="next-light"
        className="w-full h-full object-contain"
        loading="eager"
      />
    )}
    */}
              </div>
              <span className="font-bold text-xl hidden sm:inline">Next Bots</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 justify-center items-center">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}