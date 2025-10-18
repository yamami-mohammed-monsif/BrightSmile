"use client";

import Section from "../UI/Section";
import { BenefitsData } from "@/constants";
import Benefit from "../UI/Benefit";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const Benefits = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  const getDelayClass = (index: number) => {
    if (index === 0) return "animate-delay-100";
    if (index === 1) return "animate-delay-250";
    if (index === 2) return "animate-delay-400";
    return "animate-delay-400"; // for 4th+
  };

  return (
    <Section ref={sectionRef}>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div
            className={`mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="max-w-lg">A brighter smile means a brighter life</h2>
            <p className="section-description mt-4 md:mt-6 max-w-md">
              Here’s what our patients say they’ve gained beyond just
              straighter, whiter teeth
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
            {BenefitsData.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`transition-opacity duration-700 ${
                  isVisible
                    ? `animate-fade-in-up ${getDelayClass(index)}`
                    : "opacity-0 translate-y-6"
                }`}
              >
                <Benefit
                  id={benefit.id}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="md:row-span-2 lg:w-full">
            <Image
              src="/benefitimg1.webp"
              alt="Benefits of choosing our dental clinic"
              width={335}
              height={335}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-full lg:h-[270px]">
            <Image
              src="/benefitimg2.webp"
              alt="Benefits of choosing our dental clinic"
              width={335}
              height={335}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-full lg:h-[188px]">
            <Image
              src="/benefitimg3.webp"
              alt="Benefits of choosing our dental clinic"
              width={335}
              height={335}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <Image
              src="/benefitimg4.png"
              alt="Benefits of choosing our dental clinic"
              width={335}
              height={335}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
