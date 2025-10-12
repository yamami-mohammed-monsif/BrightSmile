import { ArrowRight } from "lucide-react";

interface CTAProps {
  children: React.ReactNode;
  className?: string;
}

const CTA = ({ children, className }: CTAProps) => {
  return (
    <div className="flex items-center group">
      {" "}
      <button
        className={`${className} flex items-center bg-cta text-text px-5 lg:px-6 py-3 rounded-full cursor-pointer group-hover:bg-cta-hover transition-colors`}
      >
        {children}
      </button>
      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-cta group-hover:bg-cta-hover transition-colors -ml-1 cursor-pointer">
        <ArrowRight
          size={20}
          className="text-text transition-transform duration-300 group-hover:-rotate-45"
        />
      </div>
    </div>
  );
};

export default CTA;
