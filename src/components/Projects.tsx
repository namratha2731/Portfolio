import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Interview Preparation Platform",
      description: "Dynamic web application designed to help users effectively practice and refine their interview skills. The platform offers comprehensive mock interview scenarios, instant feedback, and performance tracking to empower users to build confidence and improve their readiness for real job interviews.",
      image: "/jobpilot.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      github: "http://github.com/namratha2731/Interactive-Interview-Preparation-Platform",
      live: "https://job-pilot-ai-powered-interview-preparation-system.vercel.app/",
      year: 2025 // Added year property
    },
    {
      title: "Quantum Safe Distributed Authentication System",
      description: "Designed to protect against future quantum attacks. It ensures secure and reliable authentication in distributed networks by integrating quantum-resistant algorithms and leveraging blockchain technology for a transparent and immutable ledger of authentication events.",
      image: "/qsds.png",
      tech: ["Python", "Blockchain", "Post-Quantum Crypto", "Flask"],
      github: "https://github.com/namratha2731/Quantum-Safe-Distributed-Authentication-System",
      live: undefined,
      year: 2025 // Added year property
    },
    {
      title: "Energy Efficient Scheduling and Power Control in 5G V2X Networks",
      description: "Foundational simulation framework built around SUMO (Simulation of Urban MObility), designed to model and analyze traffic dynamics within urban environments. While primarily a mobility simulator, this project serves as a crucial underlying platform for investigating advanced topics such as Energy-Efficient Scheduling and Power Control in future 5G Vehicle-to-Everything (V2X) Networks.",
      image: "/5g.png",
      tech: ["V2X (Vehicle-to-Everything)", "Scheduling algorithms", "SUMO", "5G"],
      github: "https://github.com/namratha2731/-Energy-Efficient-Scheduling-and-Power-Control-in-5G-V2X-Networks",
      live: undefined,
      year: 2024
    },
    {
      title: "Music Harmony App",
      description: "Music Harmony App is a feature-rich desktop application developed with Java and JavaFX to showcase the real-world utility of classic data structures—primarily Binary Search Trees (BSTs)—through a robust music management platform. Users can authenticate, manage playlists, play music, and experience efficient data handling, with all information persistently stored in an SQLite database.",
      image: "/music.png",
      tech: ["JavaFX", "SQLite", "Data Structures", "GUI"],
      github: "https://github.com/namratha2731/Music-Harmony-App-A-Java-Application-Demonstrating-Data-Structures",
      live: undefined,
      year: 2024
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#3A3F5C' }}>
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
        <div className="floating-element crystal" style={{top: '12%', left: '6%', animationDelay: '0s'}}></div>
        <div className="floating-element orb" style={{top: '78%', right: '10%', animationDelay: '2s'}}></div>
        <div className="floating-element sparkle" style={{top: '35%', right: '18%', animationDelay: '1s'}}></div>
        <div className="floating-element crystal" style={{bottom: '18%', left: '12%', animationDelay: '3s'}}></div>
        <div className="floating-element orb" style={{top: '55%', left: '88%', animationDelay: '4s'}}></div>
        <div className="floating-element sparkle" style={{bottom: '38%', right: '28%', animationDelay: '2.5s'}}></div>
        
        {/* Extra 3D and animated elements */}
        <div className="absolute top-10 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#D4A5C0" opacity="0.3" /></svg>
        </div>
        <div className="absolute bottom-10 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#98566D" opacity="0.2" /></svg>
        </div>
        <div className="absolute top-1/2 left-10 animate-spin-slow">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,0 40,40 0,40" fill="#E8E0E5" opacity="0.15" /></svg>
        </div>
        <div className="absolute bottom-1/3 right-10 animate-bounce" style={{ animationDelay: '3s' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><ellipse cx="14" cy="14" rx="14" ry="8" fill="#D4A5C0" opacity="0.12" /></svg>
        </div>
        <div className="absolute top-1/4 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#98566D" opacity="0.18" /></svg>
        </div>
        {/* Animated sparkles */}
        <div className="absolute top-16 left-1/2 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 0L12 8H20L13 12L15 20L10 15L5 20L7 12L0 8H8L10 0Z" fill="#F8F9FA" opacity="0.3" /></svg>
        </div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-1/5 left-1/5 animate-morph-shape" style={{width: '75px', height: '75px', background: 'linear-gradient(135deg, rgba(212, 165, 192, 0.2), rgba(152, 86, 109, 0.2))'}}></div>
        <div className="absolute bottom-1/3 right-1/5 animate-morph-shape" style={{width: '55px', height: '55px', background: 'linear-gradient(135deg, rgba(232, 224, 229, 0.15), rgba(212, 165, 192, 0.15))', animationDelay: '4s'}}></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fadeInUp" style={{ color: '#E8E0E5' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-300" style={{ color: 'rgba(232, 224, 229, 0.95)' }}>
            A showcase of my recent work, highlighting technical skills and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 opacity-0 animate-fadeInUp animation-delay-600">
          {projects.map((project, index) => (
            <div key={index} className="enhanced-card group w-full max-w-3xl mx-auto animate-hover-lift">
              <div className="relative overflow-hidden rounded-lg mb-6">
                {/* Year label with calendar icon for all projects that have a year */}
                {(index === 0 || index === 1 || index === 2 || index === 3) && ( // MODIFIED CONDITION
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-gradient-to-br from-pink-300 to-purple-400 px-3 py-1 rounded-full shadow text-xs font-bold text-white z-10">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" fill="#fff" stroke="#D4A5C0" /><path d="M8 2v4M16 2v4M3 10h18" stroke="#98566D" strokeWidth="2" /></svg>
                    {project.year || 2025} {/* MODIFIED to dynamically get year from project data */}
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay for icons and labels for first project */}
                {index === 0 && (
                  <div className="absolute inset-0 flex flex-col justify-end items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10">
                    <div className="flex gap-2 mb-2 items-center">
                      <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                      </a>
                      {project.live && ( // Added conditional check for live link
                        <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                          <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                {/* Hover overlay for second project (QSDA) */}
                {index === 1 && (
                  <div className="absolute inset-0 flex flex-col justify-end items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10">
                    <div className="flex gap-2 mb-2 items-center">
                      <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                      </a>
                      {project.live && ( // Added conditional check for live link
                        <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                          <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                {/* Hover overlay for third project (5G V2X) */}
                {index === 2 && (
                  <div className="absolute inset-0 flex flex-col justify-end items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10">
                    <div className="flex gap-2 mb-2 items-center">
                      <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                        <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                      </a>
                      {project.live && ( // Added conditional check for live link
                        <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                          <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                {/* NEW: Hover overlay for fourth project (Music Harmony App) */}
                {index === 3 && (
                  <div className="absolute inset-0 flex flex-col justify-end items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10">
                    <div className="flex gap-2 mb-2 items-center">
                      {project.github && (
                        <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <Github size={20} />
                          <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} />
                          <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-3" style={{ color: '#E8E0E5' }}>
                {project.title}
              </h3>
              <p className="mb-4" style={{ color: 'rgba(232, 224, 229, 0.85)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge-small">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Show icons below tech bubbles for the first project */}
              {index === 0 && (
                <div className="flex gap-2 mb-2 items-center">
                  <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                  </a>
                  {project.live && ( // Added conditional check for live link
                    <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
              {/* Show icons below tech bubbles for the second project (QSDA) */}
              {index === 1 && (
                <div className="flex gap-2 mb-2 items-center">
                  <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                  </a>
                  {project.live && ( // Added conditional check for live link
                    <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
              {/* Show icons below tech bubbles for the third project (5G V2X) */}
              {index === 2 && (
                <div className="flex gap-2 mb-2 items-center">
                  <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                  </a>
                  {project.live && ( // Added conditional check for live link
                    <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
              {/* NEW: Show icons below tech bubbles for the fourth project (Music Harmony App) */}
              {index === 3 && (
                <div className="flex gap-2 mb-2 items-center">
                  {project.github && (
                    <a href={project.github} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="icon-button flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span className="text-xs font-semibold" style={{ color: '#D4A5C0' }}>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;