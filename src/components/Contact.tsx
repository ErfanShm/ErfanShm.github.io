import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Github, Linkedin, Send, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import KaggleIcon from '@/assets/icons/kaggle.svg?react';
import HuggingFaceIcon from '@/assets/icons/huggingface.svg?react';
import MediumIcon from '@/assets/icons/medium.svg?react';
import DiscordIcon from '@/assets/icons/discord.svg?react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tech-purple/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="tech-card">
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tech-cyan text-white hover:bg-tech-cyan-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactItem icon={<Mail />}>
                <h4 className="text-gray-300 font-medium">Email</h4>
                <a href="mailto:erfanshm12@gmail.com" className="text-tech-cyan hover:underline">
                  erfanshm12@gmail.com
                </a>
              </ContactItem>
              
              <ContactItem icon={<MapPin />}>
                <h4 className="text-gray-300 font-medium">Location</h4>
                <p className="text-white">Tehran, Iran</p>
              </ContactItem>
              
              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-gray-300 font-medium mb-4">Find me on</h4>
                
                <div className="flex flex-wrap gap-3">
                  <SocialButton 
                    icon={<Github size={20} />} 
                    href="https://github.com/ErfanShm"
                    label="GitHub"
                  />
                  <SocialButton 
                    icon={<Linkedin size={20} />} 
                    href="https://www.linkedin.com/in/erfan-shafiee-moghadam/"
                    label="LinkedIn"
                  />
                  <SocialButton 
                    icon={<KaggleIcon width={20} height={20} fill="currentColor" />}
                    href="https://www.kaggle.com/erfanshafieeaa"
                    label="Kaggle"
                  />
                  <SocialButton 
                    icon={<HuggingFaceIcon width={20} height={20} fill="currentColor" />}
                    href="https://huggingface.co/ErfanShm"
                    label="Hugging Face"
                  />
                  <SocialButton 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>}
                    href="https://x.com/ErfaanAm"
                    label="X / Twitter"
                  />
                  <SocialButton 
                    icon={<MediumIcon width={20} height={20} fill="currentColor" />}
                    href="https://medium.com/@erfanshm12"
                    label="Medium"
                  />
                  <SocialButton 
                    icon={<Instagram size={20} />}
                    href="https://www.instagram.com/erfanshafiee__"
                    label="Instagram"
                  />
                  <SocialButton 
                    icon={<DiscordIcon width={20} height={20} fill="currentColor" />}
                    href="https://discord.com/users/494862010488717322"
                    label="Discord"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-tech-cyan/10 flex items-center justify-center text-tech-cyan">
        {icon}
      </div>
      <div className="ml-4">
        {children}
      </div>
    </div>
  );
};

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-tech-cyan/10 flex items-center justify-center text-tech-cyan hover:bg-tech-cyan hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Contact;
