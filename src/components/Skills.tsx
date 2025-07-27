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
        <div className="floating-3d-model model-1" style={{top: '12%', right: '10%', animationDelay: '3s'}}></div>
        <div className="floating-3d-model model-2" style={{top: '68%', left: '6%', animationDelay: '8s'}}></div>
        <div className="floating-3d-model model-3" style={{bottom: '18%', right: '18%', animationDelay: '13s'}}></div>
        <div className="floating-3d-model model-4" style={{top: '38%', left: '78%', animationDelay: '18s'}}></div>
        <div className="floating-3d-model model-5" style={{top: '22%', left: '28%', animationDelay: '23s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape shape-1" style={{top: '18%', right: '22%', animationDelay: '2s'}}></div>
        <div className="geometric-shape shape-2" style={{top: '82%', left: '18%', animationDelay: '4s'}}></div>
        <div className="geometric-shape shape-3" style={{bottom: '28%', right: '28%', animationDelay: '6s'}}></div>
        <div className="geometric-shape shape-4" style={{top: '58%', left: '68%', animationDelay: '8s'}}></div>
        <div className="geometric-shape shape-5" style={{top: '32%', left: '82%', animationDelay: '10s'}}></div>
        
        {/* Advanced 3D Shapes */}
        <div className="advanced-3d-shape cube" style={{top: '28%', left: '12%', animationDelay: '1s'}}></div>
        <div className="advanced-3d-shape sphere" style={{top: '78%', right: '22%', animationDelay: '5s'}}></div>
        <div className="advanced-3d-shape pyramid" style={{top: '48%', left: '88%', animationDelay: '9s'}}></div>
        <div className="advanced-3d-shape torus" style={{bottom: '42%', left: '28%', animationDelay: '13s'}}></div>
        
        {/* Background Shapes */}
        <div className="skills-bg-shape shape-1"></div>
        <div className="skills-bg-shape shape-2"></div>
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
            <div key={index} className="skills-card">
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