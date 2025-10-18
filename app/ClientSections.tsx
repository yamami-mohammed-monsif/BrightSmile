"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-60"></div>
  </div>
);

const Testimonials = dynamic(
  () => import("../components/sections/Testimonials"),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  }
);

const BeforeAfters = dynamic(
  () => import("../components/sections/BeforeAfters"),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  }
);

const SecCTA = dynamic(() => import("../components/sections/SecCTA"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const Benefits = dynamic(() => import("../components/sections/Benefits"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const Process = dynamic(() => import("../components/sections/Process"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const About = dynamic(() => import("../components/sections/About"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const FAQs = dynamic(() => import("../components/sections/FAQs"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const CTA = dynamic(() => import("../components/sections/CTA"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const Footer = dynamic(() => import("../components/sections/Footer"), {
  ssr: false,
  loading: () => <SectionLoader />,
});

const ClientSections = () => {
  return (
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
      <BeforeAfters />
      <SecCTA />
      <Benefits />
      <Process />
      <About />
      <FAQs />
      <CTA />
      <Footer />
    </Suspense>
  );
};

export default ClientSections;
