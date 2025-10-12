import Section from "../UI/Section";
import CTA from "../UI/CTA";
import Image from "next/image";

const Hero = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center lg:pb-[100px] lg:pt-10">
      <div>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center testimonial-images">
            <div className="testimonial-image">
              <Image
                src="/testimonial1.jpg"
                alt="Happy patient 1"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <div className="testimonial-image">
              <Image
                src="/testimonial2.jpg"
                alt="Happy patient 2"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <div className="testimonial-image">
              <Image
                src="/testimonial3.jpg"
                alt="Happy patient 3"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <div className="testimonial-image">
              <Image
                src="/testimonial4.jpg"
                alt="Happy patient 4"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <div className="testimonial-image">
              <Image
                src="/testimonial5.jpg"
                alt="Happy patient 5"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
          </div>
          <p className="text-xs leading-4 md:text-sm md:leading-5">
            +500 Satisfied Patients
          </p>
        </div>
        <div>
          <h1 className="animate-fade-in-up">
            Transform Your Smile Without Fear or Stress
          </h1>
          <p className="section-description max-w-96 md:max-w-[550px] lg:max-w-2xl animate-fade-in-up animate-delay-100">
            At BrightSmile Dental, we make cosmetic dentistry comfortable,
            affordable, and effective with Invisalign, whitening, and a spa-like
            experience.
          </p>
        </div>
        <div className="mt-8 animate-fade-in-up animate-delay-200">
          <CTA>Book Your Free Smile Consultation Today</CTA>
          <div className="flex items-center justify-between mt-4 md:mt-6 lg:mt-12 max-w-2xl animate-fade-in-up animate-delay-300">
            <div className="w-[100px] h-10 lg:w-[150px] lg:h-14">
              <Image
                src="/invisalign-provider.png"
                alt="Certified Invisalign Provider"
                width={150}
                height={56}
                className="w-full h-full object-contain"
                priority={false}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-3">
                <img src="/five-stars.png" alt="five stars rating" />
              </div>
              <p className="text-xs md:text-sm lg:text-base">
                100+ google reviews
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base leading-4 font-semibold">1000+</span>
              <span className="text-xs md:text-sm lg:text-base">
                Lives changed
              </span>
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-base leading-4 font-semibold">10+</span>
              <span className="text-xs md:text-sm lg:text-base">
                years of practice
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/hero-image.png"
          alt="Dr. Sarah smiling"
          width={600}
          height={700}
          className="w-full max-w-lg h-auto"
          priority
        />
      </div>
    </Section>
  );
};

export default Hero;
