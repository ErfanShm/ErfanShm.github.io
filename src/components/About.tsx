
import { Brain, Code, Cpu, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm an AI developer with a deep passion for machine learning and NLP, especially when it comes to 
              <span className="highlight-text"> generative AI, LLMs, and RAG systems</span>. 
              Over the years, I've had the opportunity to build and deploy these cutting-edge systems across different platforms, 
              from messengers to web applications and APIs.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              What excites me most is how AI can solve real-world problems, and I'm always looking for new ways to push the limits of what's possible. 
              I'm not just about building models—I'm about making them smarter, more efficient, and impactful. 
              I love exploring the latest AI trends, testing out new ideas, and learning from the challenges that come with each project.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4 mt-8">Here's what I bring to the table:</h3>
            
            <ul className="space-y-4">
              <SkillListItem icon={<Brain size={22} />}>
                Hands-on experience building LLMs and RAG systems that power real-time, intelligent solutions
              </SkillListItem>
              <SkillListItem icon={<Code size={22} />}>
                A strong foundation in machine learning and NLP, with a focus on delivering practical, innovative results
              </SkillListItem>
              <SkillListItem icon={<Rocket size={22} />}>
                A love for continuous learning and exploring the ever-evolving world of AI
              </SkillListItem>
              <SkillListItem icon={<Users size={22} />}>
                A collaborative mindset, always excited to work with teams to bring new ideas to life
              </SkillListItem>
              <SkillListItem icon={<Cpu size={22} />}>
                A passion for creating technology that makes a real difference
              </SkillListItem>
            </ul>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="tech-card w-full max-w-md aspect-square flex flex-col justify-center items-center p-8 rounded-lg">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-tech-purple/30 flex items-center justify-center mb-6">
                {/* Placeholder for profile image */}
                <div className="bg-tech-purple/20 w-full h-full flex items-center justify-center text-tech-purple">
                  <span className="text-4xl font-bold">ES</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center">Erfan Shafiee Moghadam</h3>
              <p className="text-gray-400 text-center mt-2">AI Developer & ML/NLP Specialist</p>
              <p className="text-gray-400 text-center mt-1">SmartEra Organization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillListItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <li className="flex items-start space-x-3 text-gray-300">
      <div className="flex-shrink-0 w-6 h-6 mt-1 text-tech-purple">
        {icon}
      </div>
      <span>{children}</span>
    </li>
  );
};

export default About;
