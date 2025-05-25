import { GraduationCap, CalendarDays } from 'lucide-react';

const educationData = [
  {
    institution: "Allameh Tabataba\'i University",
    degree: "Bachelor\'s degree, Computer Software Engineering",
    period: "Oct 2020 - Jun 2024",
    skills: ["C", "Linux", "Computer Hardware", "Algorithms", "Data Structures"]
  },
  {
    institution: "Salam High School",
    degree: "High School Diploma, Theoretical and Mathematical Physics",
    period: "Oct 2017 - Jul 2020",
    details: "Grade: 19.5/20"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education</h2>
        <div className="mt-12 space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="tech-card p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="text-tech-cyan mt-1">{edu.degree}</p>
                </div>
                <div className="flex items-center text-gray-400 space-x-1 text-sm whitespace-nowrap">
                  <CalendarDays size={16} />
                  <span>{edu.period}</span>
                </div>
              </div>
              {edu.details && (
                <p className="text-gray-300 text-sm mb-3">{edu.details}</p>
              )}
              {edu.skills && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 