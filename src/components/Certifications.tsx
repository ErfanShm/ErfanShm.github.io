import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificationsData = [
  {
    name: "Python",
    issuer: "Kaggle",
    date: "Issued Feb 2025",
    credentialUrl: "", // Add URL if available
    skills: ["Python (Programming Language)"]
  },
  {
    name: "Fundamentals of Agents",
    issuer: "Hugging Face",
    date: "Issued Feb 2025",
    credentialUrl: "", // Add URL if available
    skills: ["LangChain", "LangGraph", "AI Agents"]
  },
  {
    name: "Retrieval Augmented Generation (RAG) with LangChain",
    issuer: "DataCamp",
    date: "Feb 2024 - Mar 2024", // From CV
    credentialUrl: "",
    skills: ["RAG", "LangChain", "Vector Databases"]
  },
  {
    name: "AI Agents Course",
    issuer: "Hugging Face",
    date: "Feb 2024 - Mar 2024", // From CV
    credentialUrl: "",
    skills: ["AI Agents", "LLMs", "Prompt Engineering"]
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Udacity",
    date: "Jun 2023 - Sep 2023", // From CV
    credentialUrl: "",
    skills: ["Machine Learning", "Python", "Data Analysis"]
  },
  {
    name: "Python for Everybody Specialization",
    issuer: "Coursera",
    date: "Sep 2022 - Nov 2022", // From CV
    credentialUrl: "",
    skills: ["Python", "Data Structures", "Web Scraping", "SQL"]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-[#121218]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Licenses & Certifications</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div key={index} className="tech-card p-6 flex flex-col">
              <div className="flex-grow">
                <div className="flex items-start mb-3">
                  <Award size={28} className="text-tech-cyan mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-sm text-gray-400">Issued by {cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {cert.credentialUrl && (
                <Button 
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full border-tech-cyan/50 text-tech-cyan hover:bg-tech-cyan/10"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Show Credential
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 