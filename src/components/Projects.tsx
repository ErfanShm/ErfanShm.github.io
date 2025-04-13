
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered RAG Chatbot",
      description: "A sophisticated retrieval-augmented generation chatbot built using LangChain and LlamaIndex that provides accurate, context-aware responses based on the user's query and a knowledge base.",
      technologies: ["Python", "LangChain", "LlamaIndex", "FAISS", "FastAPI"],
      image: "/placeholder.svg",
      github: "https://github.com/ErfanShm",
      demo: ""
    },
    {
      title: "Workflow Automation Agent",
      description: "An intelligent agent system that automates complex workflows by understanding natural language instructions and executing appropriate actions across multiple platforms.",
      technologies: ["Python", "LangChain", "AI Agents", "n8n Integration", "NLP"],
      image: "/placeholder.svg",
      github: "https://github.com/ErfanShm",
      demo: ""
    },
    {
      title: "Sentiment Analysis System",
      description: "A multi-class sentiment analysis tool that processes text data to determine emotional tone, useful for customer feedback analysis and social media monitoring.",
      technologies: ["Python", "NLP", "TensorFlow", "Deep Learning", "FastAPI"],
      image: "/placeholder.svg",
      github: "https://github.com/ErfanShm",
      demo: ""
    },
    {
      title: "Hotel Review Sentiment Analysis",
      description: "A sentiment analysis project focused on Persian language hotel reviews, utilizing fastText embeddings for improved accuracy in non-English language processing.",
      technologies: ["Python", "NLTK", "fastText", "Pandas", "Sentiment Analysis"],
      image: "/placeholder.svg",
      github: "https://github.com/ErfanShm",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#121218]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="tech-card">
              <div className="aspect-video mb-4 overflow-hidden rounded-md bg-gray-800 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-tech-purple/10 text-tech-purple rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-tech-purple/50 text-tech-purple hover:bg-tech-purple/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                )}
                
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="bg-tech-purple text-white hover:bg-tech-purple/80"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-tech-purple text-white hover:bg-tech-purple/80"
            onClick={() => window.open("https://github.com/ErfanShm", '_blank')}
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
