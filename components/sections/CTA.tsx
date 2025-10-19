"use client";

import Section from "../UI/Section";
import CTABtn from "../UI/CTABtn";
import Image from "next/image";
import { useCalendly } from "../CalendlyProvider";

const CTA = () => {
  const { openCalendly } = useCalendly();
  return (
    <Section className="bg-primary max-w-7xl mx-auto md:rounded-4xl relative md:mb-20 lg:mb-[100px]">
      <div className="flex flex-col gap-3 md:flex-row items-center">
        <div>
          <h2 className="mb-4 max-w-lg text-center md:text-left">
            Your dream smile is just one click away
          </h2>
          <p className="section-description max-w-md text-center md:text-left">
            Join 1,000+ happy patients who trusted BrightSmile and start your
            journey today.
          </p>
          <div className="mt-8">
            <CTABtn onClick={openCalendly}>
              Book Your Free Smile Consultation Now
            </CTABtn>
          </div>
        </div>
        <div className="max-w-[400px] md:absolute right-0 bottom-0 lg:right-20 md:w-[320px] md:h-[380px] lg:w-[433px] lg:h-[487px]">
          <Image
            src="/cta-img.webp"
            alt="Happy patient with a bright smile"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default CTA;
