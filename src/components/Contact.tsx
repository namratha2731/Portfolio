import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "namrathaakshaya31@gmail.com",
      href: "mailto:namrathaakshaya31@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+91 9886538242",
      href: "tel:+919886538242",
      description: "Let's have a chat"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
      description: "Based in the tech hub"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{backgroundColor: '#192327'}}>
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Models */}
        <div className="floating-3d-model model-1" style={{top: '15%', right: '6%', animationDelay: '4s'}}></div>
        <div className="floating-3d-model model-2" style={{top: '72%', left: '4%', animationDelay: '9s'}}></div>
        <div className="floating-3d-model model-3" style={{bottom: '22%', right: '22%', animationDelay: '14s'}}></div>
        <div className="floating-3d-model model-4" style={{top: '42%', left: '82%', animationDelay: '19s'}}></div>
        <div className="floating-3d-model model-5" style={{top: '18%', left: '32%', animationDelay: '24s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="geometric-shape shape-1" style={{top: '20%', right: '18%', animationDelay: '3s'}}></div>
        <div className="geometric-shape shape-2" style={{top: '85%', left: '14%', animationDelay: '5s'}}></div>
        <div className="geometric-shape shape-3" style={{bottom: '32%', right: '32%', animationDelay: '7s'}}></div>
        <div className="geometric-shape shape-4" style={{top: '62%', left: '72%', animationDelay: '9s'}}></div>
        <div className="geometric-shape shape-5" style={{top: '28%', left: '88%', animationDelay: '11s'}}></div>
        
        {/* Advanced 3D Shapes */}
        <div className="advanced-3d-shape cube" style={{top: '32%', left: '14%', animationDelay: '2s'}}></div>
        <div className="advanced-3d-shape sphere" style={{top: '82%', right: '18%', animationDelay: '6s'}}></div>
        <div className="advanced-3d-shape pyramid" style={{top: '52%', left: '92%', animationDelay: '10s'}}></div>
        <div className="advanced-3d-shape torus" style={{bottom: '38%', left: '22%', animationDelay: '14s'}}></div>
        
        {/* Background Shapes */}
        <div className="contact-bg-shape shape-1"></div>
        <div className="contact-bg-shape shape-2"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(17)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
        {/* Enhanced particles */}
        {[...Array(11)].map((_, i) => (
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
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
            Got a brilliant idea brewing? Let's transform your vision into reality and craft something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 opacity-0 animate-fadeInUp animation-delay-600">
          {/* Contact Info with 3D Cards */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4" style={{color: '#E8E0E5'}}>
                <Sparkles className="inline-block w-8 h-8 mr-3" />
                Ready to Connect?
              </h3>
              <p className="text-lg mb-8" style={{color: 'rgba(232, 224, 229, 0.9)'}}>
                I thrive on discovering groundbreaking opportunities and revolutionary projects. 
                Whether you have an innovative concept to explore or just want to spark a conversation, 
                I'm excited to hear your thoughts!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="feature-card transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                             style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}>
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1" style={{color: '#E8E0E5'}}>{info.title}</h4>
                        <p className="text-lg font-medium mb-1" style={{color: '#D4A5C0'}}>{info.value}</p>
                        <p className="text-sm" style={{color: 'rgba(232, 224, 229, 0.7)'}}>{info.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <a 
                          href={info.href}
                          className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 opacity-0 group-hover:opacity-100"
                          style={{background: 'linear-gradient(135deg, #98566D 0%, #49466D 100%)'}}
                        >
                          <MessageCircle className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form with 3D Effects */}
          <div className="relative">
            <div className="contact-form-card transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center animate-pulse" 
                   style={{background: 'linear-gradient(135deg, #D4A5C0 0%, #98566D 100%)'}}>
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#E8E0E5'}}>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label htmlFor="name" className="block font-medium mb-2 transition-colors duration-300 group-focus-within:text-pink-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input transform transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    placeholder="What should I call you?"
                  />
                </div>
                
                <div className="relative group">
                  <label htmlFor="email" className="block font-medium mb-2 transition-colors duration-300 group-focus-within:text-pink-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input transform transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="relative group">
                  <label htmlFor="message" className="block font-medium mb-2 transition-colors duration-300 group-focus-within:text-pink-300" style={{color: 'rgba(232, 224, 229, 0.95)'}}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input resize-none transform transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    placeholder="Tell me about your amazing project..."
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;