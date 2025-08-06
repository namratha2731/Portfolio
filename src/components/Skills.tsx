import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "#D4A5C0", // Bright pink
      skills: ["Python", "Java", "C++", "R"]
    },
    {
      title: "Web Development",
      color: "#F8F9FA", // Bright white
      skills: ["React", "Node.js", "HTML", "CSS", "Tailwind CSS", "PostgreSQL"]
    },
    {
      title: "AI/ML & Data Science",
      color: "#D4A5C0", // Bright pink
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP", "PowerBI"]
    },
    {
      title: "Cybersecurity",
      color: "#F8F9FA", // Bright white
      skills: ["Cryptography", "Network Security", "Security Auditing"]
    },
    {
      title: "Tools & Others",
      color: "#D4A5C0", // Bright pink
      skills: ["Git", "GitHub", "AWS", "Docker", "Figma", "Jupyter"]
    },
    {
      title: "Soft Skills",
      color: "#F8F9FA", // Bright white
      skills: ["Teamwork", "Leadership", "Communication", "Problem Solving", "Adaptability", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{backgroundColor: '#192327'}}>
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
        <div className="floating-element crystal" style={{top: '8%', left: '4%', animationDelay: '0s'}}></div>
        <div className="floating-element orb" style={{top: '80%', right: '6%', animationDelay: '2s'}}></div>
        <div className="floating-element sparkle" style={{top: '40%', right: '15%', animationDelay: '1s'}}></div>
        <div className="floating-element crystal" style={{bottom: '12%', left: '8%', animationDelay: '3s'}}></div>
        <div className="floating-element orb" style={{top: '60%', left: '92%', animationDelay: '4s'}}></div>
        <div className="floating-element sparkle" style={{bottom: '45%', right: '22%', animationDelay: '2.5s'}}></div>
        
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
        <div className="absolute top-1/6 left-1/7 animate-morph-shape" style={{width: '65px', height: '65px', background: 'linear-gradient(135deg, rgba(212, 165, 192, 0.2), rgba(152, 86, 109, 0.2))'}}></div>
        <div className="absolute bottom-1/4 right-1/6 animate-morph-shape" style={{width: '45px', height: '45px', background: 'linear-gradient(135deg, rgba(232, 224, 229, 0.15), rgba(212, 165, 192, 0.15))', animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(16)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
        {/* Enhanced particles */}
        {[...Array(13)].map((_, i) => (
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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fadeInUp animation-delay-600">
          {skillCategories.map((category, index) => (
            <div key={index} className="enhanced-card animate-hover-lift">
              <h3 className="text-xl font-semibold mb-6" style={{color: category.color}}>
                • {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 rounded-full text-sm font-medium border"
                    style={{
                      color: category.color,
                      borderColor: category.color,
                      backgroundColor: `${category.color}15`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Section */}
        <div className="text-center mt-16 opacity-0 animate-fadeInUp animation-delay-900">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#E8E0E5'}}>
              Always <span className="text-gradient">Learning</span>
            </h3>
            <p className="text-lg leading-relaxed" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
              I'm constantly eager to learn new technologies and methodologies. The tech world evolves rapidly, 
              and I believe in staying ahead by embracing new challenges and expanding my skill set. 
              Every project is an opportunity to grow, innovate, and push the boundaries of what's possible.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
              Still evolving, still learning, still building the future—one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;