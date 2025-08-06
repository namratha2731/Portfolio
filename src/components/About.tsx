import React from 'react';
import { Code, Palette, Globe, Sparkles, Star, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building robust applications with modern technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Solutions",
      description: "Delivering comprehensive digital solutions"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{backgroundColor: '#2D3748'}}>
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Models */}
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
        
        {/* Enhanced Floating Elements */}
        <div className="floating-element crystal" style={{top: '10%', left: '5%', animationDelay: '0s'}}></div>
        <div className="floating-element orb" style={{top: '75%', right: '8%', animationDelay: '2s'}}></div>
        <div className="floating-element sparkle" style={{top: '30%', right: '20%', animationDelay: '1s'}}></div>
        <div className="floating-element crystal" style={{bottom: '15%', left: '10%', animationDelay: '3s'}}></div>
        <div className="floating-element orb" style={{top: '50%', left: '90%', animationDelay: '4s'}}></div>
        <div className="floating-element sparkle" style={{bottom: '35%', right: '25%', animationDelay: '2.5s'}}></div>
        
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
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/4 left-1/6 animate-morph-shape" style={{width: '70px', height: '70px', background: 'linear-gradient(135deg, rgba(212, 165, 192, 0.2), rgba(152, 86, 109, 0.2))'}}></div>
        <div className="absolute bottom-1/3 right-1/4 animate-morph-shape" style={{width: '50px', height: '50px', background: 'linear-gradient(135deg, rgba(232, 224, 229, 0.15), rgba(212, 165, 192, 0.15))', animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
        {/* Enhanced particles */}
        {[...Array(12)].map((_, i) => (
          <div key={`enhanced-${i}`} className={`enhanced-particle ${i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'}`} 
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 8}s`
               }}></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fadeInUp" style={{color: '#E8E0E5'}}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
            Passionate developer creating digital solutions that combine technical excellence with creative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content on the left */}
          <div className="space-y-6 opacity-0 animate-fadeInUp animation-delay-600">
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#E8E0E5'}}>
              Hi there! I'm <span className="text-gradient">Namratha Akshaya</span>
            </h3>
            <p className="text-lg leading-relaxed" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
              A passionate full-stack developer with a strong interest in AI/ML, data science, and cybersecurity. I love building secure, intelligent, and user-focused applications that make a real-world impact. Whether it's designing a quantum-safe authentication system, analyzing customer sentiment with NLP, or crafting responsive web interfaces, I enjoy solving problems that blend creativity with technology.
            </p>
            <p className="text-lg leading-relaxed" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
              Beyond development, I'm always exploring new ways to bridge innovation and impact—be it through research, hands-on experimentation, or collaborative projects. I thrive in environments where learning never stops, and I'm driven by the challenge of turning bold ideas into practical solutions.
            </p>
            
            {/* Three Cards with Enhanced 3D Effects */}
            <div className="grid gap-4 mt-8">
              <div className="enhanced-card group animate-hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                         style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}>
                      <div className="text-white">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{color: '#E8E0E5'}}>
                      Data Science
                    </h4>
                    <p style={{color: 'rgba(232, 224, 229, 0.85)'}}>
                      Extracting meaningful insights from complex datasets using advanced analytics, statistical modeling, and data visualization techniques.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card group animate-hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                         style={{background: 'linear-gradient(135deg, #98566D 0%, #49466D 100%)'}}>
                      <div className="text-white">
                        <Zap className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{color: '#E8E0E5'}}>
                      Machine Learning
                    </h4>
                    <p style={{color: 'rgba(232, 224, 229, 0.85)'}}>
                      Building intelligent systems with deep learning, neural networks, and predictive models to solve real-world problems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card group animate-hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                         style={{background: 'linear-gradient(135deg, #E8E0E5 0%, #D4A5C0 100%)'}}>
                      <div className="text-white">
                        <Star className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{color: '#E8E0E5'}}>
                      Full Stack Developer
                    </h4>
                    <p style={{color: 'rgba(232, 224, 229, 0.85)'}}>
                      Creating end-to-end web applications with modern technologies, from responsive frontends to robust backend systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="tech-badge transform transition-all duration-300 hover:scale-110 hover:rotate-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Photo space on the right with Enhanced 3D Effects */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fadeInUp animation-delay-900">
            <div className="relative group">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 flex items-center justify-center shadow-2xl border-8 border-transparent group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-3xl transition-all duration-500">
                <div className="w-88 h-88 rounded-full bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
                  <img
                    src="/namratha.jpeg"
                    alt="Namratha Akshaya"
                    className="w-full h-full object-cover rounded-full border-4 border-pink-200 shadow-xl animate-pulse-slow"
                    style={{background: 'rgba(232, 224, 229, 0.2)'}}
                  />
                  {/* Glowing animated ring */}
                  <div className="absolute inset-0 rounded-full pointer-events-none animate-spin-slow" style={{boxShadow: '0 0 40px 10px #D4A5C0, 0 0 80px 20px #98566D inset'}}></div>
                </div>
              </div>
              {/* Floating decorative elements around photo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br animate-pulse" 
                   style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-gradient-to-br animate-bounce" 
                   style={{background: 'linear-gradient(135deg, #98566D 0%, #49466D 100%)', animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-5 h-5 rounded-full bg-gradient-to-br animate-pulse" 
                   style={{background: 'linear-gradient(135deg, #E8E0E5 0%, #D4A5C0 100%)', animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;