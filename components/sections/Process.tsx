"use client";

import Section from "../UI/Section";
import Step from "../UI/Step";
import { Steps } from "@/constants";
import CTABtn from "../UI/CTABtn";
import useOnScreen from "@/hooks/useOnScreen";

const Process = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  const getDelayClass = (index: number) => {
    if (index === 0) return "animate-delay-100";
    if (index === 1) return "animate-delay-250";
    if (index === 2) return "animate-delay-400";
    return "animate-delay-400"; // for 4th+
  };

  return (
    <Section ref={sectionRef}>
      <div
        className={`mb-6 md:mb-8 lg:mb-10 transition-opacity duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
        }`}
      >
        <h2>From Booking to Bright Smile. Simple Stress Free Steps</h2>
        <p className="section-description">
          No complicated process. Just three clear steps to get the smile you
          deserve.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-7 md:gap-9 lg:gap-12">
        {Steps.map((step, index) => {
          return (
            <div
              key={step.id}
              className={`transition-opacity duration-700 ${
                isVisible
                  ? `animate-fade-in-up ${getDelayClass(index)}`
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Step
                id={step.id}
                title={step.title}
                description={step.description}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`flex items-center justify-center mt-8 md:mt-12 lg:mt-14 transition-opacity duration-700 ${
          isVisible
            ? "animate-fade-in-up animate-delay-400"
            : "opacity-0 translate-y-6"
        }`}
      >
        <CTABtn>Book Your Free Smile Consultation Now</CTABtn>
      </div>
    </Section>
  );
};

export default Process;
