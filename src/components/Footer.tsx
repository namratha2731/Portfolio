import React from 'react';
import { Github, Linkedin, Mail, Palette, Plane, Music, Heart, Film, Coffee, Utensils } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/namratha2731", 
      label: "GitHub" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/namratha-akshaya-090817274/", 
      label: "LinkedIn" 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:namrathaakshaya31@gmail.com", 
      label: "Email" 
    }
  ];

  const interests = [
    { icon: "🎨", label: "Artist", desc: "Sketching characters" },
    { icon: "✈️", label: "Wanderer", desc: "Always planning adventures" },
    { icon: "💃", label: "Dancer", desc: "Robot-jealous moves" },
    { icon: "🏃‍♀️", label: "Sports Lover", desc: "Bug-chasing cardio" },
    { icon: "🎬", label: "Cinephile", desc: "Movie buff extraordinaire" },
    { icon: "🎵", label: "Melophile", desc: "Music in my veins" },
    { icon: "🍕", label: "Foodie", desc: "Culinary explorer" },
    { icon: "💻", label: "Coder", desc: "Bug whisperer" }
  ];

  return (
    <footer className="py-16 border-t relative overflow-hidden" style={{backgroundColor: '#49466D', borderColor: 'rgba(152, 135, 143, 0.2)'}}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D shapes */}
        <div className="absolute top-8 left-8 w-4 h-4 transform rotate-45 opacity-20" style={{backgroundColor: '#D4A5C0'}}></div>
        <div className="absolute top-16 right-16 w-6 h-6 rounded-full opacity-15" style={{backgroundColor: '#98566D'}}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 transform rotate-12 opacity-25" style={{backgroundColor: '#E8E0E5'}}></div>
        <div className="absolute bottom-8 right-8 w-5 h-5 transform rotate-45 opacity-20" style={{backgroundColor: '#D4A5C0'}}></div>
        
        {/* Animated dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#D4A5C0'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full animate-pulse" style={{backgroundColor: '#98566D', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#E8E0E5', animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4" style={{color: '#E8E0E5'}}>Namratha Akshaya</h3>
          <p className="text-xl mb-2" style={{color: 'rgba(232, 224, 229, 0.85)'}}>
            Full-Stack Developer & AI/ML Enthusiast
          </p>
          <p className="text-lg" style={{color: '#D4A5C0'}}>
            Also a <span className="font-semibold">Cinephile</span> 🎬 • <span className="font-semibold">Melophile</span> 🎵 • <span className="font-semibold">Foodie</span> 🍕
          </p>
        </div>

        {/* Creative Interests Grid */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-center mb-8" style={{color: '#D4A5C0'}}>
            <span className="inline-block transform hover:rotate-12 transition-transform duration-300">✨</span>
            The Many Faces of Me 
            <span className="inline-block transform hover:-rotate-12 transition-transform duration-300">✨</span>
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="feature-card transform transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl text-center p-4">
                  <div className="text-4xl mb-2 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {interest.icon}
                  </div>
                  <h5 className="font-semibold mb-1" style={{color: '#E8E0E5'}}>{interest.label}</h5>
                  <p className="text-xs" style={{color: 'rgba(232, 224, 229, 0.7)'}}>{interest.desc}</p>
                  
                  {/* 3D Pop-up effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                       style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links with 3D Effects */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6" style={{color: '#D4A5C0'}}>
              Let's Connect & Create Magic ✨
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="relative group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl"
                       style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}>
                    <div className="text-white">
                      {link.icon}
                    </div>
                  </div>
                  
                  {/* 3D glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
                       style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}></div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Creative Copyright */}
        <div className="border-t pt-8 text-center" style={{borderColor: 'rgba(212, 165, 192, 0.3)'}}>
          <div className="space-y-2">
            <p className="text-lg font-medium" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
              Made with <span className="inline-block transform hover:scale-110 transition-transform duration-300">💜</span>, 
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">☕</span>, and 
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">✨</span> 
              by Namratha Akshaya
            </p>
            <p className="text-sm" style={{color: 'rgba(232, 224, 229, 0.7)'}}>
              © {new Date().getFullYear()} - No bugs were harmed in the making of this portfolio 
              <span className="inline-block transform hover:rotate-12 transition-transform duration-300 ml-2">🐛</span>
            </p>
            <p className="text-xs" style={{color: 'rgba(232, 224, 229, 0.5)'}}>
              Powered by caffeine, creativity, and questionable dance moves
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;