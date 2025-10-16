"use client";

import Section from "../UI/Section";
import { TestimonialsData } from "@/constants";
import TestimonialCard from "../UI/TestimonialCard";
import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <Section
      id="testimonials"
      ref={sectionRef}
      className="grid grid-cols-1 gap-6 md:gap-10 lg:gap-16"
    >
      <div
        className={`transition-opacity duration-700 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2>Trusted by over 1,000 patients to transform their smiles</h2>
        <p className="section-description max-w-96 md:max-w-[550px]">
          See why patients choose BrightSmile for Invisalign, whitening, and
          stress-free dentistry.
        </p>
      </div>

      <div>
        <div
          className={`flex items-center gap-1.5 mb-6 transition-opacity duration-700 ${
            isVisible
              ? "animate-fade-in-up animate-delay-200"
              : "opacity-0 translate-y-6"
          }`}
        >
          <img
            src="/five-stars.png"
            alt="5 stars rating"
            className="w-[105px] h-4"
          />
          <p className="text-xs md:text-base">4.9/5 from 100+ Google reviews</p>
        </div>

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
              el: ".testimonials-pagination", // Use a class selector instead
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
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
            {TestimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between mt-6 md:mt-8">
            <div ref={paginationRef} className="testimonials-pagination" />
            {/* Navigation Arrows */}
            <div className="flex space-x-3">
              <button
                ref={prevRef}
                className="testimonials-swiper-button-prev flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white border cursor-pointer"
                aria-label="Previous before/after"
              >
                <ArrowLeft className="text-text" size={24} />
              </button>
              <button
                ref={nextRef}
                className="testimonials-swiper-button-next flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white border cursor-pointer"
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

export default Testimonials;
