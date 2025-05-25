import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "MemaranSoft",
      period: "Apr 2025 - Present",
      type: "Full-time",
      location: "Tehran, Tehran Province, Iran",
      workType: "On-site",
      description: [
        "Designing and deploying AI-powered process automation solutions.",
        "Building and fine-tuning Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) systems.",
        "Developing intelligent AI agents and integrating with various platforms and APIs.",
        "Focusing on creating smarter, more efficient, and impactful AI applications."
      ],
      skills: ["AI Development", "Machine Learning", "NLP", "RAG Systems", "LLMs", "Workflow Automation"]
    },
    {
      title: "AI Engineer",
      company: "SmartEra Organization",
      period: "Dec 2024 - Present",
      type: "Freelance",
      location: "Tehran, Tehran Province, Iran",
      workType: "Hybrid",
      description: [
        "Building cutting-edge AI solutions, working with Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and intelligent agents.",
        "Fine-tuning LLMs for specific applications and integrating AI models with automation platforms (n8n/Zapier).",
        "Implementing LangChain frameworks and optimizing model performance.",
        "Designing a system for image prompt enhancement.",
        "Mentoring during a startup weekend.",
        "Designing and deploying AI-powered process automation for enterprise clients."
      ],
      skills: ["Python (Programming Language)", "Retrieval-Augmented Generation (RAG)", "Large Language Models (LLMs)", "AI Agents", "n8n", "Zapier", "LangChain", "Prompt Engineering", "Image Processing"]
    },
    {
      title: "GenAI Intern",
      company: "Asr Gooyesh Pardaz",
      period: "Jul 2024 - Oct 2024",
      type: "Full-time",
      location: "Tehran Province, Iran",
      workType: "On-site",
      description: [
        "Focused on developing advanced Retrieval-Augmented Generation (RAG) chatbots and AI applications.",
        "Designed and implemented RAG-based solutions using LangChain and LlamaIndex.",
        "Built interactive web interfaces with FastAPI, Streamlit, and Gradio.",
        "Integrated robust APIs for real-time data exchange and messaging platform connectivity (Telegram, Bale).",
        "Optimized data retrieval by implementing vector databases like FAISS.",
        "Developed a comprehensive multi-class sentiment analysis tool to enhance chatbot responses.",
        "Maintained professional documentation using GitHub for version control and collaborated with fellow interns."
      ],
      skills: ["Shell Scripting", "Gradio", "Streamlit", "FastAPI", "LangChain", "LlamaIndex", "Retrieval-Augmented Generation (RAG)", "Vector Databases", "FAISS", "NLP", "Sentiment Analysis", "Telegram API", "GitHub", "Python"]
    },
    {
      title: "Junior System Analyst",
      company: "Barsa Novin Ray",
      period: "Nov 2022 - Nov 2023",
      type: "Part-time",
      location: "Tehran Province, Iran",
      workType: "Hybrid",
      description: [
        "Developed tailored software solutions using the سیستم ساز (System Builder), a low-code platform.",
        "Collaborated with teams to analyze business requirements and translate them into functional applications that improved efficiency.",
        "Leveraged the platform's capabilities, including its BPMS, and used C# and JavaScript for more complex customizations.",
        "Utilized SQL for advanced database reports that went beyond the System Builder's standard capabilities."
      ],
      skills: ["C# .NET", "Business Systems Analysis", "JavaScript", "Low-Code Development", "SQL", "BPMS", "Requirements Analysis"]
    },
    {
      title: "Junior Front End Developer",
      company: "Rismun",
      period: "Dec 2021 - Jul 2022",
      type: "Part-time",
      location: "Tehran Province, Iran",
      workType: "Hybrid",
      description: [
        "Focused on building the user interface for web applications.",
        "Utilized HTML, CSS, JavaScript, and Bootstrap to develop responsive layouts and add dynamic features.",
        "Contributed to team projects and solidified foundation in front-end development."
      ],
      skills: ["CSS Flexbox", "Html & CSS", "JavaScript", "Responsive Web Design", "Bootstrap"]
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
                      <p className="text-tech-cyan mt-1">{exp.company}</p>
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
                        className="px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs"
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
