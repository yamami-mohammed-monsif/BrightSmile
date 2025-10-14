interface TestimonialData {
  id: number;
  name: string;
  position: string;
  img: string;
  content: string;
}

const TestimonialCard = ({
  id,
  name,
  position,
  img,
  content,
}: TestimonialData) => {
  return (
    <div
      key={id}
      className="flex flex-col gap-4 leading-5 bg-light-grey p-8 rounded-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <img
        src="/five-stars.png"
        alt="five stars rating"
        className="w-[101px] h-4"
      />
      <p>{content}</p>
      <div className="flex items-center gap-4">
        <div className="aspect-square w-12 rounded-full overflow-hidden">
          <img src={img} alt={name} className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-lg leading-6 tracking-wide">{name}</p>
          <p className="text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
