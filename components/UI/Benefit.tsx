interface BenefitProps {
  id: number;
  title: string;
  description: string;
}

const Benefit = ({ id, title, description }: BenefitProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
        <img
          src="/checkmark.png"
          alt="checkmark icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Benefit;
