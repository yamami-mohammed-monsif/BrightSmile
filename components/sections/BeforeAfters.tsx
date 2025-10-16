"use client";

import Section from "../UI/Section";
import { BeforeAfterData } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useOnScreen from "@/hooks/useOnScreen";
import Image from "next/image";
import { useRef } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BeforeAfters = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  const beforeafterPrevRef = useRef(null);
  const beforeafterNextRef = useRef(null);
  const beforeafterPaginationRef = useRef(null);

  return (
    <Section ref={sectionRef}>
      <div>
        <h2
          className={`max-w-xl mb-8 md:mb-11 lg:mb-16 transition-opacity duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Real results from real BrightSmile patients.
        </h2>
      </div>
      <div>
        {/* Swiper Slider */}
        <div
          className={`transition-opacity duration-700 ${
            isVisible
              ? "animate-fade-in-up animate-delay-400"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".beforeafters-pagination",
            }}
            navigation={{
              prevEl: beforeafterPrevRef.current,
              nextEl: beforeafterNextRef.current,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-8"
          >
            {BeforeAfterData.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={img.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between mt-6 md:mt-8">
            <div
              ref={beforeafterPaginationRef}
              className="beforeafters-pagination"
            />
            {/* Navigation Arrows */}
            <div className="flex space-x-3">
              <button
                ref={beforeafterPrevRef}
                className="beforeafter-swiper-button-prev flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white border cursor-pointer"
                aria-label="Previous before/after"
              >
                <ArrowLeft className="text-text" size={24} />
              </button>
              <button
                ref={beforeafterNextRef}
                className="beforeafter-swiper-button-next flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white border cursor-pointer"
                aria-label="Next before/after"
              >
                <ArrowRight className="text-text" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfters;
