interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        px-5 md:px-8 lg:px-16
        py-10 md:py-12 lg:py-16
        ${className}
      `}
    >
      {children}
    </section>
  );
}
