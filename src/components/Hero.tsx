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
        
        {/* Advanced 3D Shapes */}
        <div className="advanced-3d-shape cube" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="advanced-3d-shape sphere" style={{top: '60%', right: '15%', animationDelay: '2s'}}></div>
        <div className="advanced-3d-shape pyramid" style={{top: '40%', left: '80%', animationDelay: '4s'}}></div>
        <div className="advanced-3d-shape torus" style={{bottom: '30%', left: '20%', animationDelay: '6s'}}></div>
      </div>

      {/* Restore original heading */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp" style={{color: '#E8E0E5'}}>
          Namratha <span className="text-gradient">Akshaya</span>
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
          <a href="#about" className="cta-button primary">
            View My Work
          </a>
          <button className="cta-button secondary">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </button>
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