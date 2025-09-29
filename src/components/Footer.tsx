import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-[#0C0C10] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">
              <span className="text-tech-cyan">ErfanShm</span>
              <span className="text-white">.com</span>
            </span>
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-400">
            <p className="flex items-center justify-center md:justify-end">
              Crafted with React & Tailwind CSS.
            </p>
            <p>© {currentYear} Erfan Shafiee Moghadam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
