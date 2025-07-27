import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section with improved logic
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      
      let currentSection = 'home';
      
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    // Initial call to set correct active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const getNavItemClass = (item: string) => {
    const itemId = item.toLowerCase();
    const isActive = activeSection === itemId;
    
    return `transition-colors duration-300 relative group hover:opacity-80 ${
      isActive ? 'opacity-100' : 'opacity-70'
    }`;
  };

  const getActiveIndicatorClass = (item: string) => {
    const itemId = item.toLowerCase();
    const isActive = activeSection === itemId;
    
    return `absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
    }`} style={isScrolled ? {backgroundColor: 'rgba(25, 35, 39, 0.9)'} : {}}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl" style={{color: '#E8E0E5'}}>Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}
                className={getNavItemClass(item)}
                style={{color: 'rgba(232, 224, 229, 0.9)'}}
              >
                {item}
                <span className={getActiveIndicatorClass(item)} style={{backgroundColor: '#D4A5C0'}}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{color: '#E8E0E5'}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => {
              const itemId = item.toLowerCase();
              const isActive = activeSection === itemId;
              
              return (
                <a
                  key={item}
                  href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}
                  className={`block py-2 transition-colors duration-300 hover:opacity-80 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}
                  style={{color: 'rgba(232, 224, 229, 0.9)'}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;