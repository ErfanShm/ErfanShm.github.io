
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-xl cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-tech-purple">Erfan</span>
              <span className="text-white">.dev</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavItem onClick={() => scrollToSection('about')}>About</NavItem>
              <NavItem onClick={() => scrollToSection('experience')}>Experience</NavItem>
              <NavItem onClick={() => scrollToSection('skills')}>Skills</NavItem>
              <NavItem onClick={() => scrollToSection('projects')}>Projects</NavItem>
              <NavItem onClick={() => scrollToSection('contact')}>Contact</NavItem>
              <Button 
                className="ml-4 bg-tech-purple text-white hover:bg-tech-purple/80"
                onClick={() => window.open('#', '_blank')}
              >
                Resume
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem onClick={() => scrollToSection('about')}>About</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('experience')}>Experience</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('skills')}>Skills</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('projects')}>Projects</MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('contact')}>Contact</MobileNavItem>
            <div className="pt-2">
              <Button 
                className="w-full bg-tech-purple text-white hover:bg-tech-purple/80"
                onClick={() => window.open('#', '_blank')}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button 
    className="text-gray-300 hover:text-tech-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
    onClick={onClick}
  >
    {children}
  </button>
);

const MobileNavItem = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    className="text-gray-300 hover:text-tech-purple block px-3 py-2 rounded-md text-base font-medium w-full text-left"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Navbar;
