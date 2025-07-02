
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navClasses = cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-cyber-purple/20' : 'bg-transparent'
  );

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mobileNavClasses = cn(
    'fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center z-50 transition-opacity duration-300',
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-cyber-cyan hover:text-cyber-magenta transition-colors duration-300"
          >
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold font-space tracking-wider">Ritwik Raj</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-300 px-3 py-2',
                  isActive(link.path)
                    ? 'text-cyber-magenta glow-text'
                    : 'text-gray-300 hover:text-cyber-cyan'
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-magenta animate-pulse" />
                )}
              </Link>
            ))}
            <Button asChild className="neon-button neon-button--purple">
              <a 
                href="https://www.fiverr.com/users/god_dev456" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-cyber-purple"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={mobileNavClasses}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-2xl font-medium transition-colors duration-300',
                isActive(link.path)
                  ? 'text-cyber-magenta glow-text'
                  : 'text-gray-300 hover:text-cyber-cyan'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="neon-button neon-button--purple mt-4">
            <a 
              href="https://www.fiverr.com/users/god_dev456" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
