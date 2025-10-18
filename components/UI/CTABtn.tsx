import { ArrowRight } from "lucide-react";

interface CTAProps {
  children: React.ReactNode;
  className?: string;
}

const CTABtn = ({ children, className }: CTAProps) => {
  return (
    <div className="flex items-center group hover:scale-105 transition-transform duration-300 ease-in-out">
      <button
        className={`${className} hero-cta flex items-center px-5 lg:px-6 py-3 rounded-full cursor-pointer`}
      >
        {children}
      </button>
      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full hero-cta-arrow -ml-1 cursor-pointer">
        <ArrowRight size={20} className="text-text hero-cta-arrow-icon" />
      </div>
    </div>
  );
};

export default CTABtn;
