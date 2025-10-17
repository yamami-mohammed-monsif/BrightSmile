interface StepProps {
  id: number;
  title: string;
  description: string;
}

const Step = ({ id, title, description }: StepProps) => {
  return (
    <div className="max-w-md">
      <div className="relative mb-4 md:mb-6 lg:mb-8 aspect-square w-10 md:w-14 lg:w-20 rounded-full bg-accent">
        <h2 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {id}
        </h2>
      </div>
      <h3 className="mb-3 md:mb-4 lg:mb-6">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
