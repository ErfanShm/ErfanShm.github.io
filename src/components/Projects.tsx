import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const allProjects = [
    {
      title: "Dynamic KG to Variable-Complexity QA via Fact-Augmented Synthesis (EMNLP Submission - Results Pending)",
      description: "This project, submitted to EMNLP (results pending), implements a system that dynamically constructs a Knowledge Graph (KG) from conversational interactions and LLM outputs. It then generates Question/Answer pairs of varying complexity from this KG, augmented by external factual information (e.g., Wikipedia). Features dual agent implementations (GPT & REBEL) for knowledge extraction, Wikipedia integration for node descriptions with ambiguity resolution, and robust Neo4j storage. The system also includes automated QA generation from graph paths.",
      technologies: ["RAG", "Knowledge Graphs", "Fact-Checking", "Neo4j", "Python", "NLP", "LLMs", "GPT", "REBEL Model", "LangChain", "Wikipedia API"],
      image: "/erfanshm-website/images/projects/kg-qa-synthesis.webp",
      alt: "Icon representing knowledge graph processing: a question mark transforms into a lightbulb, illustrating 'KG to QA'.",
      github: "",
      demo: ""
    },
    {
      title: "Document Chatbot with Retrieval Augmented Generation (RAG)",
      description: "An interactive document retrieval system using RAG and a Streamlit interface. Supports multiple document formats (PDF, TXT, CSV, DOCX), AI-powered chat for natural language queries, document summarization, prompt refinement, and conversation history.",
      technologies: ["Python", "Streamlit", "RAG", "LangChain", "OpenAI (GPT-4o mini, Embeddings)", "Hugging Face (BART summarizer)", "FAISS"],
      image: "/erfanshm-website/images/projects/doc-chat-rag.webp",
      alt: "Icon for Document Chatbot: stacked documents with a chat bubble and magnifying glass, labeled 'ChatDocs'.",
      github: "https://github.com/ErfanShm/ChatDoc",
      demo: ""
    },
    {
      title: "Hooshews (هوشیوز) - AI Reference",
      description: "Hooshews is a Persian-language reference for Artificial Intelligence, covering the latest news, practical tutorials (from basic to advanced), introductions to AI tools, and reviews of its applications. The goal is to provide AI knowledge accurately, up-to-date, and understandably for Persian speakers. Content includes daily AI news, prompt engineering, AI tool reviews, and practical AI applications.",
      technologies: ["WordPress", "Content Creation", "SEO", "UI/UX Design", "Persian Language", "Graphic Design", "Social Media Marketing"],
      image: "/erfanshm-website/images/projects/hooshews-ai-reference.webp", 
      alt: "Hooshews AI Reference logo: 'هوشیوز AI' in stylized typography, symbolizing an AI knowledge resource.",
      github: "",
      demo: "https://hooshews.com/"
    },
    {
      title: "Custom Excel Data Processing & Comparison Tool",
      description: "Developed a Python application with an intuitive Tkinter GUI to compare planned and historical shipping data from Excel files. The tool features smart header detection, flexible data preprocessing (cleaning, validation, aggregation), multi-file merging, and generates a professionally styled, multi-sheet Excel output. Output includes a main comparison sheet and diagnostic sheets for bad part numbers and duplicates, ensuring data transparency. Designed for robust, repeatable workflows for business users and analysts.",
      technologies: ["Python", "Tkinter", "Pandas", "Openpyxl", "Data Cleaning", "Data Validation", "Excel Automation", "GUI Design"],
      image: "/erfanshm-website/images/projects/excel-data-processor.webp",
      alt: "Icon for Excel Data Processor: a messy Excel sheet transforms into a clean, organized one, labeled 'Excel Simplified'.",
      github: "",
      demo: ""
    },
    {
      title: "Artify-AI: Artistic Image Representor",
      description: "An artistic image representation tool using Streamlit. It integrates BLIP Image Captioning for generating captions, ChatGPT 3.5 Turbo for refining them, and Stable Diffusion (v1.5) for generating new images based on the enhanced captions. Users can upload an image, generate/enhance captions, create new images, and download results.",
      technologies: ["Python", "Streamlit", "BLIP Image Captioning", "ChatGPT 3.5 Turbo", "Stable Diffusion"],
      image: "/erfanshm-website/images/projects/artify-ai-representor.webp", 
      alt: "Artify-AI icon: a split image showing a simple sketch transforming into a colorful artistic rendering.",
      github: "https://github.com/SyydMR/Artify-AI",
      demo: ""
    },
    {
      title: "Sentiment and Emotion Analysis Application",
      description: "A practical tool leveraging DistilBERT for sentiment analysis (positive, negative, neutral) and RoBERTa for emotion detection (top six emotions). Offers both Streamlit and Gradio interfaces with features like theme selection, history, tutorials (Streamlit), and text suggestions (Gradio).",
      technologies: ["Python", "Streamlit", "Gradio", "DistilBERT", "RoBERTa", "Hugging Face Transformers", "NLP"],
      image: "/erfanshm-website/images/projects/sentiment-emotion-analysis.webp", 
      alt: "Sentiment AI icon: text with positive, negative, and neutral emotion icons, labeled 'Sentiment AI'.",
      github: "https://github.com/ErfanShm/sentiment-emotion-analysis-app",
      demo: ""
    },
    {
      title: "Undergraduate Projects (Supervised by Dr. Mohammad Bahrani)",
      description: {
        intro: "Associated with Allameh Tabataba\'i University (Mar 2023 - Mar 2024). Supervised by Dr. Mohammad Bahrani.",
        subProjects: [
          {
            title: "1. The Iris Classic Project:",
            details: [
              "Data analysis and modeling using Logistic Regression and MLP.",
              "Introduction to neural network concepts."
            ]
          },
          {
            title: "2. Apple Stock Prediction Project:",
            details: ["Predicting Apple stock prices using RNN and LSTM."]
          },
          {
            title: "3. Next Word Prediction Project:",
            details: ["Predicting the next word, exploring NLTK, GloVe, and BERT."]
          },
          {
            title: "4. Movie Sentiment Analysis Project:",
            details: ["Sentiment analysis of movie reviews in English."]
          },
          {
            title: "5. Hotel Review Sentiment Analysis Project:",
            details: ["Sentiment analysis of hotel reviews in Persian, using fastText."]
          }
        ]
      },
      technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "RNN/LSTM", "Transformers", "TensorFlow", "NLTK", "fastText"],
      image: "/erfanshm-website/images/projects/atu-ml-dl-capstones.webp",
      alt: "Allameh Tabataba\'i University (ATU) logo with text 'ML & DL Capstones', representing undergraduate AI research projects.",
      github: "https://github.com/ErfanShm",
      demo: ""
    }
  ];

  const projects = allProjects;

  const needsStringTruncation = (description: string) => {
    const avgCharsPerLine = 70; // Adjust as needed, or find a better way to estimate lines
    const estimatedLines = description.length / avgCharsPerLine;
    return estimatedLines > 3; // Changed from 4 to 3
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="tech-card flex flex-col">
              <div className="aspect-video mb-4 overflow-hidden rounded-md flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex flex-col flex-grow mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                
                {typeof project.description === 'string' ? (
                  <div className="relative">
                    <p 
                      className={`text-gray-300 text-sm flex-grow ${
                        !expandedDescriptions[index] && needsStringTruncation(project.description) ? 'line-clamp-3' : ''
                      }`}
                    >
                      {project.description}
                    </p>
                    {needsStringTruncation(project.description) && (
                      <button 
                        onClick={() => toggleDescription(index)}
                        className="text-tech-cyan hover:text-tech-cyan-dark text-xs font-semibold mt-1 cursor-pointer"
                      >
                        {expandedDescriptions[index] ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="text-gray-300 text-sm flex-grow">
                    <p className="mb-2">{project.description.intro}</p>
                    {expandedDescriptions[index] && project.description.subProjects.map((sub, subIndex) => (
                      <div key={subIndex} className="mb-1">
                        <p className="font-medium text-gray-200 text-sm">{sub.title}</p>
                        <ul className="list-disc list-inside pl-4">
                          {sub.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-xs">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <button 
                      onClick={() => toggleDescription(index)}
                      className="text-tech-cyan hover:text-tech-cyan-dark text-xs font-semibold mt-1 cursor-pointer"
                    >
                      {expandedDescriptions[index] ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-tech-cyan/50 text-tech-cyan hover:bg-tech-cyan/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                )}
                
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="bg-tech-cyan text-white hover:bg-tech-cyan-dark"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.github ? 'Live Demo' : 'Visit Website'}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-tech-cyan text-white hover:bg-tech-cyan-dark px-8 py-3 text-base"
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
