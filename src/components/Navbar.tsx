import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    let currentSection = 'hero'; // Default to hero

    // Check if scrolled to the bottom of the page
    const bottomOfPage = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10; // 10px buffer

    if (bottomOfPage) {
      currentSection = 'contact'; // Force contact if at the bottom
    } else {
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          // Check if the scroll position is within the element's bounds
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = link.id;
            break;
          }
        }
      }
    }
    setActiveSection(currentSection);

    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = (isScrolled || mobileMenuOpen) && id !== 'hero' ? 80 : 0; // Navbar height is 80px (h-20)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id); 
      if (mobileMenuOpen) {
        setMobileMenuOpen(false); 
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
    exit: { x: "100%", opacity: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.2 } },
  };
  
  const navBarClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled || mobileMenuOpen ? 'bg-card/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`;

  return (
    <nav 
      className={navBarClass}
      style={{ backgroundColor: isScrolled || mobileMenuOpen ? 'hsl(var(--card) / 0.8)' : 'transparent' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => scrollToSection('hero')} 
            className="cursor-pointer text-2xl font-bold transition-colors duration-300 group z-50"
          >
            <span className="text-primary group-hover:text-primary/80 transition-colors duration-300">ErfanShm</span>
            <span className="text-foreground group-hover:text-foreground/80 transition-colors duration-300">.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.slice(1).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`
                  relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                  group
                  ${activeSection === link.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'}
                `}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/5 
                            ${activeSection === link.id ? 'w-3/5' : 'w-0'}`}>
                </span>
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-4 py-2 h-10 transition-colors duration-300 text-sm"
              onClick={() => window.open('/erfanshm-website/Erfan_Shafiee_Resume.pdf', '_blank')}
            >
              My Resume
            </Button>
            <div className="md:hidden ml-3 z-50">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-foreground hover:text-primary focus-visible:ring-1 focus-visible:ring-ring"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 top-20 bg-card/95 backdrop-blur-lg pt-4 overflow-y-auto"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={`mobile-${link.id}`}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`block px-3 py-3 text-base font-semibold rounded-md transition-colors duration-200 
                              ${activeSection === link.id 
                                ? 'text-primary bg-primary/10' 
                                : 'text-foreground hover:text-primary hover:bg-primary/5'}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-4 py-3 h-auto transition-colors duration-300 text-base"
                onClick={() => {
                  window.open('/erfanshm-website/Erfan_Shafiee_Resume.pdf', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                My Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
