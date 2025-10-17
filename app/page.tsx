import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfters from "@/components/sections/BeforeAfters";
import SecCTA from "@/components/sections/SecCTA";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <BeforeAfters />
      <SecCTA />
      <Benefits />
      <Process />
      <About />
    </>
  );
}
