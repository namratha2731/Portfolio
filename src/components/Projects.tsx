import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and data visualization",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "React", "D3.js", "TensorFlow"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{backgroundColor: '#3A3F5C'}}>
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Models */}
        <div className="floating-3d-model model-1" style={{top: '8%', right: '8%', animationDelay: '1s'}}></div>
        <div className="floating-3d-model model-2" style={{top: '65%', left: '5%', animationDelay: '6s'}}></div>
        <div className="floating-3d-model model-3" style={{bottom: '20%', right: '15%', animationDelay: '11s'}}></div>
        <div className="floating-3d-model model-4" style={{top: '35%', left: '80%', animationDelay: '16s'}}></div>
        <div className="floating-3d-model model-5" style={{top: '15%', left: '20%', animationDelay: '21s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape shape-1" style={{top: '12%', right: '25%', animationDelay: '2s'}}></div>
        <div className="geometric-shape shape-2" style={{top: '75%', left: '12%', animationDelay: '4s'}}></div>
        <div className="geometric-shape shape-3" style={{bottom: '30%', right: '30%', animationDelay: '6s'}}></div>
        <div className="geometric-shape shape-4" style={{top: '55%', left: '65%', animationDelay: '8s'}}></div>
        <div className="geometric-shape shape-5" style={{top: '25%', left: '85%', animationDelay: '10s'}}></div>
        
        {/* Advanced 3D Shapes */}
        <div className="advanced-3d-shape cube" style={{top: '30%', left: '8%', animationDelay: '0s'}}></div>
        <div className="advanced-3d-shape sphere" style={{top: '80%', right: '25%', animationDelay: '4s'}}></div>
        <div className="advanced-3d-shape pyramid" style={{top: '45%', left: '90%', animationDelay: '8s'}}></div>
        <div className="advanced-3d-shape torus" style={{bottom: '35%', left: '25%', animationDelay: '12s'}}></div>
        
        {/* Background Shapes */}
        <div className="projects-bg-shape shape-1"></div>
        <div className="projects-bg-shape shape-2"></div>
        <div className="projects-bg-shape shape-3"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(18)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
        {/* Enhanced particles */}
        {[...Array(14)].map((_, i) => (
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
            A showcase of my recent work, highlighting technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-fadeInUp animation-delay-600">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top, rgba(25, 35, 39, 0.9), transparent)'}}></div>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} className="icon-button">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="icon-button">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3" style={{color: '#E8E0E5'}}>
                {project.title}
              </h3>
              <p className="mb-4 line-clamp-3" style={{color: 'rgba(232, 224, 229, 0.85)'}}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge-small">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;