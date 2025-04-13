
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const SkillCategories = {
  AI: 'AI & Machine Learning',
  DEV: 'Development',
  DATA: 'Data Science',
  TOOLS: 'Tools & Platforms'
};

type SkillCategory = keyof typeof SkillCategories;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('AI');

  const skills = {
    AI: [
      { name: "LLMs (Large Language Models)", level: 90 },
      { name: "RAG Systems", level: 95 },
      { name: "AI Agents", level: 85 },
      { name: "NLP Techniques", level: 85 },
      { name: "LangChain", level: 90 },
      { name: "LlamaIndex", level: 80 },
      { name: "Deep Learning", level: 75 },
      { name: "GenAI Applications", level: 85 },
    ],
    DEV: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "C#", level: 65 },
      { name: "HTML & CSS", level: 80 },
      { name: "React", level: 60 },
      { name: "FastAPI", level: 85 },
      { name: "RESTful APIs", level: 80 },
    ],
    DATA: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "Data Visualization", level: 70 },
      { name: "Vector Databases", level: 80 },
      { name: "FAISS", level: 75 },
    ],
    TOOLS: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Streamlit", level: 85 },
      { name: "Gradio", level: 80 },
      { name: "n8n/Zapier", level: 75 },
    ]
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(SkillCategories) as SkillCategory[]).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  ${activeCategory === category 
                    ? 'bg-tech-purple text-white' 
                    : 'border-tech-purple/30 text-gray-300 hover:text-tech-purple hover:border-tech-purple/50'}
                `}
                onClick={() => setActiveCategory(category)}
              >
                {SkillCategories[category]}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <div key={index} className="tech-card">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-tech-purple text-sm font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="skill-bar"
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
