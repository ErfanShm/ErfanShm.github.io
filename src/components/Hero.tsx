import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-gradient"></div>
      <div className="absolute inset-0 bg-gradient-radial from-tech-cyan/10 via-transparent to-transparent"></div>
      
      {/* Animated particles or grid (decorative) */}
      <div className="absolute inset-0 opacity-20">
        {/* This would be replaced with an actual particle effect in production */}
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tech-cyan/5 via-transparent to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center pt-20">
          <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Erfan Shafiee Moghadam
          </h1>
          
          <h2 className="animate-fade-in text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto">
            <span className="text-tech-cyan font-medium">AI Developer</span> & ML/NLP Specialist | Workflow Automation Engineer | AI Agent & RAG Systems Architect
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              className="bg-tech-cyan hover:bg-tech-cyan-dark text-white font-medium px-6 py-4 h-12"
              onClick={() => window.open('/erfanshm-website/Erfan_Shafiee_Resume.pdf', '_blank')}
            >
              View Resume / CV
            </Button>
            <Button 
              variant="outline" 
              className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 font-medium px-6 py-4 h-12"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white hover:text-tech-cyan transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
