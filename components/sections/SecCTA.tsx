"use client";

import Section from "../UI/Section";
import CTABtn from "../UI/CTABtn";
import useOnScreen from "@/hooks/useOnScreen";

const SecCTA = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });
  return (
    <Section ref={sectionRef} className="bg-secondary">
      <div className="flex flex-col items-center text-center">
        <div
          className={`transition-opacity duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-center">
            See why 1,000+ patients trust us now it’s your turn
          </h2>
          <p className="section-description">
            Book your free smile consultation today and start your journey with
            BrightSmile.
          </p>
        </div>
        <div
          className={`mt-10 lg:mt-11 transition-opacity duration-700 ${
            isVisible
              ? "animate-fade-in-up animate-delay-200"
              : "opacity-0 translate-y-6"
          }`}
        >
          <CTABtn>Book Your Free Smile Consultation Now</CTABtn>
        </div>
      </div>
    </Section>
  );
};

export default SecCTA;
