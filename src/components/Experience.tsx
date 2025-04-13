
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "SmartEra Organization",
      period: "Dec 2024 - Present",
      type: "Freelance",
      location: "Tehran, Tehran Province, Iran",
      workType: "Hybrid",
      description: [
        "Developing and fine-tuning Large Language Models (LLMs) for Persian language applications",
        "Architecting Retrieval-Augmented Generation (RAG) systems integrated with AI automation platforms",
        "Building intelligent agent systems for autonomous workflow execution",
        "Implementing LangChain frameworks with low-code automation tool integration",
        "Designing AI-powered process automation solutions for enterprise operations",
        "Optimizing neural networks for enhanced inference speed and accuracy"
      ],
      skills: ["Python", "Retrieval-Augmented Generation (RAG)", "LangChain", "Deep Learning", "LLM"]
    },
    {
      title: "GenAI Intern",
      company: "Asr Gooyesh Pardaz",
      period: "Jul 2024 - Oct 2024",
      type: "Full-time",
      location: "Tehran Province, Iran",
      workType: "On-site",
      description: [
        "Led the design and implementation of RAG-based chatbots using LangChain and LlamaIndex",
        "Developed user-friendly GUIs with Streamlit and Gradio for improved user engagement",
        "Implemented APIs for real-time data exchange with popular messaging platforms",
        "Utilized vector databases like FAISS for efficient data retrieval and management",
        "Developed a comprehensive sentiment analysis tool with multi-class support"
      ],
      skills: ["Shell Scripting", "Gradio", "Streamlit", "LangChain", "LlamaIndex", "FAISS"]
    },
    {
      title: "Junior System Analyst",
      company: "Barsa Novin Ray",
      period: "Nov 2022 - Nov 2023",
      type: "Part-time",
      location: "Tehran Province, Iran",
      workType: "Hybrid",
      description: [
        "Used the System Builder Barsa low-code platform to create custom applications",
        "Worked with teams to understand requirements and translate into functional software",
        "Developed custom solutions using C# and JavaScript for complex requirements",
        "Gained insights into business processes to design efficient workflows",
        "Collaborated with various departments to gather feedback and enhance project outcomes"
      ],
      skills: ["C# .NET", "Business Systems Analysis", "JavaScript", "Low-Code Development"]
    },
    {
      title: "Junior Front End Developer",
      company: "Rismun",
      period: "Dec 2021 - Jul 2022",
      type: "Part-time",
      location: "Tehran Province, Iran",
      workType: "Hybrid",
      description: [
        "Developed web pages using HTML, CSS, and JavaScript",
        "Created responsive layouts with CSS Flexbox",
        "Implemented responsive web design for various screen sizes",
        "Used Bootstrap for streamlined component development"
      ],
      skills: ["CSS Flexbox", "HTML & CSS", "JavaScript", "Responsive Web Design", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#121218]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800 ml-1.5 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="md:pl-12 experience-timeline-item relative">
                <div className="tech-card">
                  <div className="flex flex-wrap justify-between items-start gap-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-tech-purple mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 space-x-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap text-sm text-gray-400 mt-2 gap-x-6">
                    <div className="flex items-center">
                      <Briefcase size={14} className="mr-1" />
                      <span>{exp.type}</span>
                    </div>
                    <div>{exp.location}</div>
                    <div>{exp.workType}</div>
                  </div>
                  
                  <div className="mt-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm sm:text-base">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-tech-purple/10 text-tech-purple rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
