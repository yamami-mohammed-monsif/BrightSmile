"use client";

import Section from "../UI/Section";
import { FAQData } from "@/constants";
import FAQItem from "../UI/FAQItem";
import { useState } from "react";
import CTA from "../UI/CTA";

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev: number | null) => (prev === id ? null : id));
  };

  return (
    <Section>
      <div className="mb-6 md:mb-8 lg:mb-10">
        <h2>Got questions? We’ve got answers.</h2>
        <p className="section-description">
          From costs to comfort, here are the most common questions patients ask
          before starting their smile journey.
        </p>
      </div>
      <div>
        {FAQData.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10">
        <h3 className="mb-6">Still have questions?</h3>
        <div>
          <CTA>Book Your Free Smile Consultation Today</CTA>
        </div>
      </div>
    </Section>
  );
};

export default FAQs;
