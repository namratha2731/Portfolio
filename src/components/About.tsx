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
        <div className="floating-3d-model model-1" style={{top: '10%', right: '5%', animationDelay: '2s'}}></div>
        <div className="floating-3d-model model-2" style={{top: '70%', left: '8%', animationDelay: '7s'}}></div>
        <div className="floating-3d-model model-3" style={{bottom: '15%', right: '12%', animationDelay: '12s'}}></div>
        <div className="floating-3d-model model-4" style={{top: '40%', left: '75%', animationDelay: '17s'}}></div>
        <div className="floating-3d-model model-5" style={{top: '20%', left: '25%', animationDelay: '22s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape shape-1" style={{top: '15%', right: '20%', animationDelay: '1s'}}></div>
        <div className="geometric-shape shape-2" style={{top: '80%', left: '15%', animationDelay: '3s'}}></div>
        <div className="geometric-shape shape-3" style={{bottom: '25%', right: '25%', animationDelay: '5s'}}></div>
        <div className="geometric-shape shape-4" style={{top: '60%', left: '60%', animationDelay: '7s'}}></div>
        <div className="geometric-shape shape-5" style={{top: '30%', left: '80%', animationDelay: '9s'}}></div>
        
        {/* Advanced 3D Shapes */}
        <div className="advanced-3d-shape cube" style={{top: '25%', left: '10%', animationDelay: '0s'}}></div>
        <div className="advanced-3d-shape sphere" style={{top: '75%', right: '20%', animationDelay: '3s'}}></div>
        <div className="advanced-3d-shape pyramid" style={{top: '50%', left: '85%', animationDelay: '6s'}}></div>
        <div className="advanced-3d-shape torus" style={{bottom: '40%', left: '30%', animationDelay: '9s'}}></div>
        
        {/* Background Shapes */}
        <div className="about-bg-shape shape-1"></div>
        <div className="about-bg-shape shape-2"></div>

        {/* Creative Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{animationDelay: '1s'}}>
          <Sparkles className="w-6 h-6" style={{color: '#D4A5C0'}} />
        </div>
        <div className="absolute top-32 right-20 animate-pulse" style={{animationDelay: '2s'}}>
          <Star className="w-4 h-4" style={{color: '#98566D'}} />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce" style={{animationDelay: '3s'}}>
          <Zap className="w-5 h-5" style={{color: '#E8E0E5'}} />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse" style={{animationDelay: '4s'}}>
          <Sparkles className="w-4 h-4" style={{color: '#D4A5C0'}} />
        </div>
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
              <div className="feature-card group transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
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
              
              <div className="feature-card group transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
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
              
              <div className="feature-card group transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
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
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-3xl" 
                   style={{background: 'linear-gradient(135deg, rgba(232, 224, 229, 0.1) 0%, rgba(212, 165, 192, 0.1) 100%)', borderColor: 'rgba(212, 165, 192, 0.3)'}}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                       style={{background: 'linear-gradient(135deg, rgba(212, 165, 192, 0.2) 0%, rgba(152, 86, 109, 0.2) 100%)'}}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" style={{color: 'rgba(232, 224, 229, 0.6)'}}>
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm" style={{color: 'rgba(232, 224, 229, 0.7)'}}>Photo Coming Soon</p>
                </div>
              </div>
              
              {/* Floating decorative elements around photo */}
              <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br animate-pulse" 
                   style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 rounded-full bg-gradient-to-br animate-bounce" 
                   style={{background: 'linear-gradient(135deg, #98566D 0%, #49466D 100%)', animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-gradient-to-br animate-pulse" 
                   style={{background: 'linear-gradient(135deg, #E8E0E5 0%, #D4A5C0 100%)', animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;