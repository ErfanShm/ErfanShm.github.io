import { useState } from 'react';
import { Button } from '@/components/ui/button';

const SkillCategories = {
  AI_ML: 'AI & ML/DL',
  LANGUAGES: 'Languages',
  AUTOMATION_FRAMEWORKS: 'Automation & Frameworks',
  DATABASES: 'Databases & APIs',
  TOOLS_IDES: 'Tools, Platforms & IDEs',
  OTHER: 'Other Key Skills'
};

type SkillCategory = keyof typeof SkillCategories;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('AI_ML');

  const skillsData = {
    AI_ML: [
      { name: "Retrieval-Augmented Generation (RAG)", level: 95 },
      { name: "Large Language Models (LLMs)", level: 90 },
      { name: "AI Agent Architectures", level: 85 },
      { name: "LangChain", level: 90 },
      { name: "LlamaIndex", level: 70 },
      { name: "Hugging Face Ecosystem", level: 80 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 65 },
      { name: "Scikit-learn", level: 85 },
      { name: "Natural Language Processing (NLP)", level: 90 },
      { name: "Generative AI & Prompt Engineering", level: 88 },
      { name: "Deep Learning", level: 75 },
      { name: "Keras", level: 60 },
      { name: "Transformers (BERT, etc.)", level: 80 },
      { name: "Multilingual NLP Applications", level: 78 },
      { name: "Image Prompt Enhancement", level: 70 }
    ],
    LANGUAGES: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 75 },
      { name: "Shell Scripting", level: 60 },
      { name: "SQL", level: 75 },
      { name: "HTML5", level: 80 },
      { name: "CSS3", level: 80 },
      { name: "PHP", level: 50 },
      { name: "C#", level: 55 },
      { name: "Markdown", level: 90 }
    ],
    AUTOMATION_FRAMEWORKS: [
      { name: "n8n", level: 85 },
      { name: "Zapier", level: 70 },
      { name: "FastAPI", level: 85 },
      { name: "Streamlit", level: 90 },
      { name: "Gradio", level: 85 },
      { name: "Bootstrap", level: 60 },
      { name: "WordPress", level: 60 },
      // { name: "React", level: 60 }, // Already in template, can re-add if desired
    ],
    DATABASES: [
      { name: "Vector Databases (General)", level: 85 },
      { name: "FAISS", level: 80 },
      { name: "Pinecone", level: 65 },
      { name: "ChromaDB", level: 70 },
      { name: "Neo4j (Graph Database)", level: 70 },
      { name: "MySQL", level: 60 },
      { name: "MongoDB", level: 55 },
      { name: "Redis", level: 50 },
      { name: "RESTful APIs", level: 80 },
      { name: "WebSocket", level: 60 }
    ],
    TOOLS_IDES: [
      { name: "Git & GitHub", level: 95 },
      { name: "Linux Environment", level: 70 },
      { name: "Docker", level: 70 },
      { name: "Jupyter Notebook / Lab", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "Google Colab", level: 85 },
      { name: "Vim", level: 55 },
      { name: "Cursor IDE", level: 70 },
      { name: "GitLab", level: 70 }
    ],
    OTHER: [
      { name: "Relational Data Modeling", level: 65 },
      { name: "Low-Code Development Platforms", level: 60 },
      { name: "Strong Documentation Skills", level: 90 },
      { name: "Workflow Automation Design", level: 85 },
      { name: "Knowledge Graphs", level: 70 },
      { name: "LLM & Rag Evaluation Frameworks", level: 60 }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-[#121218]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(SkillCategories) as SkillCategory[]).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${activeCategory === category 
                    ? 'bg-tech-cyan text-white hover:bg-tech-cyan-dark'
                    : 'border-tech-cyan/30 text-gray-300 hover:text-tech-cyan hover:border-tech-cyan/50 hover:bg-tech-cyan/10'}
                `}
                onClick={() => setActiveCategory(category)}
              >
                {SkillCategories[category]}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeCategory].map((skill, index) => (
            <div key={index} className="tech-card p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium text-sm sm:text-base">{skill.name}</h3>
                <span className="text-tech-cyan text-xs sm:text-sm font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="skill-bar h-full rounded-full bg-tech-cyan transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
