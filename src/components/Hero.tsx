import React from 'react';
import { Linkedin, Github, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #192327 0%, #49466D 50%, #98566D 100%)'}}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-3d-model model-1"></div>
        <div className="floating-3d-model model-2"></div>
        <div className="floating-3d-model model-3"></div>
        <div className="floating-3d-model model-4"></div>
        <div className="floating-3d-model model-5"></div>
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
        <div className="geometric-shape shape-5"></div>
        {/* Extra 3D and animated elements */}
        <div className="absolute top-10 left-1/4 animate-bounce" style={{animationDelay: '1s'}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#D4A5C0" opacity="0.3"/></svg>
        </div>
        <div className="absolute bottom-10 right-1/4 animate-pulse" style={{animationDelay: '2s'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#98566D" opacity="0.2"/></svg>
        </div>
        <div className="absolute top-1/2 left-10 animate-spin-slow">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,0 40,40 0,40" fill="#E8E0E5" opacity="0.15"/></svg>
        </div>
        <div className="absolute bottom-1/3 right-10 animate-bounce" style={{animationDelay: '3s'}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><ellipse cx="14" cy="14" rx="14" ry="8" fill="#D4A5C0" opacity="0.12"/></svg>
        </div>
        <div className="absolute top-1/4 right-1/3 animate-pulse" style={{animationDelay: '1.5s'}}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#98566D" opacity="0.18"/></svg>
        </div>
        {/* Animated sparkles */}
        <div className="absolute top-16 left-1/2 animate-pulse" style={{animationDelay: '2.5s'}}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 0L12 8H20L13 12L15 20L10 15L5 20L7 12L0 8H8L10 0Z" fill="#F8F9FA" opacity="0.3"/></svg>
        </div>
        
        {/* Advanced 3D Shapes */}
        <div className="advanced-3d-shape cube" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="advanced-3d-shape sphere" style={{top: '60%', right: '15%', animationDelay: '2s'}}></div>
        <div className="advanced-3d-shape pyramid" style={{top: '40%', left: '80%', animationDelay: '4s'}}></div>
        <div className="advanced-3d-shape torus" style={{bottom: '30%', left: '20%', animationDelay: '6s'}}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp" style={{color: '#E8E0E5'}}>
          Hello I'm<br />
          <span className="text-gradient">Namratha Akshaya</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fadeInUp animation-delay-300" style={{color: '#D4A5C0'}}>
          Full-Stack Developer & AI/ML Enthusiast
        </p>
        <p className="text-lg mb-4 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-600" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
          Building future-ready applications by blending full-stack development with intelligent technologies.
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-600" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
          Passionate about data science, AI/ML, and cybersecurity—crafting secure, impactful tech solutions that solve real-world problems through innovation, precision, and creativity.
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8 opacity-0 animate-fadeInUp animation-delay-750">
          <a 
            href="https://www.linkedin.com/in/namratha-akshaya-090817274/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/namratha2731" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp animation-delay-900">
          <button className="cta-button primary">
            View My Work
          </button>
          <a href="/Namratha%20Akshaya%20-%20Resume.pdf" download className="cta-button secondary">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
          <a href="#contact" className="cta-button secondary">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{borderColor: 'rgba(232, 224, 229, 0.6)'}}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{backgroundColor: 'rgba(212, 165, 192, 0.8)'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// ... existing code ...