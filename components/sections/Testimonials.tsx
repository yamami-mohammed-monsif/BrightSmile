"use client";

import Section from "../UI/Section";
import { TestimonialsData } from "@/constants";
import TestimonialCard from "../UI/TestimonialCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      className="grid grid-cols-1 gap-6 md:gap-10 lg:gap-16"
    >
      <div>
        <h2>Trusted by over 1,000 patients to transform their smiles</h2>
        <p className="section-description max-w-96 md:max-w-[550px]">
          See why patients choose BrightSmile for Invisalign, whitening, and
          stress-free dentistry.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-6">
          <img
            src="/five-stars.png"
            alt="5 stars rating"
            className="w-[105px] h-4"
          />
          <p className="text-xs md:text-base">4.9/5 from 100+ Google reviews</p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
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
              el: ".custom-swiper-pagination", // ← Custom dot container
            }}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
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

          {/* Custom Controls: Dots on LEFT, Arrows on RIGHT */}
          <div className="flex justify-between items-center mt-8">
            {/* Pagination Dots */}
            <div className="custom-swiper-pagination flex space-x-2"></div>

            {/* Navigation Arrows */}
            <div className="flex space-x-3">
              <button
                className="custom-swiper-button-prev flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white border cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="text-text" size={24} />
              </button>
              <button
                className="custom-swiper-button-next flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white border cursor-pointer"
                aria-label="Next testimonial"
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
