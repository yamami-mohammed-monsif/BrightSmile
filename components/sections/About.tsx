import Section from "../UI/Section";
import Image from "next/image";

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 items-start">
        <div className="relative md:w-[90%] md:row-span-2 md:h-full">
          <Image
            src="/about-img1.webp"
            alt="Dr sarah image standing and looking at the camera"
            width={500}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="hidden md:block absolute -top-8 -right-8 rounded-lg -z-10 w-full h-full bg-secondary" />
        </div>
        <div>
          <h2 className="mb-6 md:mb-8">
            Meet Dr. Sarah Your Smile’s Biggest Advocate
          </h2>
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-2">
              <img src="/checkmark.png" alt="checkmark" className="w-6 h-6" />
              <p>10+ years helping patients feel confident</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/checkmark.png" alt="checkmark" className="w-6 h-6" />
              <p>Gentle care with modern dentistry</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/checkmark.png" alt="checkmark" className="w-6 h-6" />
              <p>Hundreds of smiles transformed</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-10">
            <p className="text-xl italic">
              "I believe dentistry should never feel scary. My goal is to make
              every patient feel comfortable, informed, and cared for." –{" "}
              <span className="font-bold text-2xl font-cormorant-garamond not-italic">
                Dr. Sarah
              </span>
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-auto">
          <Image
            src="/about-img2.webp"
            alt="Dr sarah image"
            width={440}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
