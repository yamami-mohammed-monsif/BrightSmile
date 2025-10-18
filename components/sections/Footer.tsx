import Section from "../UI/Section";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <Section className="bg-text text-white">
      <div className="border border-soft-white grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 p-5 md:p-8 lg:p-12 mb-8">
        <div>
          <Link href="/" className="block mb-8">
            <Image
              src="/logo.png"
              alt="BrightSmile Dental Logo"
              width={80}
              height={80}
              className="w-20 h-20"
              loading="lazy" // Footer loads last
              quality={85}
            />
          </Link>
          <div className="mb-6">
            <p className="font-bold text-lg mb-1">Address</p>
            <p className="text-sm">Level 1, 12 Sample St, Sydney NSW 2000</p>
          </div>
          <div className="mb-8">
            <p className="font-bold text-lg mb-1">Contact</p>
            <p className="text-sm">1800 123 4567</p>
            <p className="text-sm">info@yourclinic.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              loading="lazy"
            />
            <Image
              src="/Instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              loading="lazy"
            />
            <Image src="/X.svg" alt="X" width={24} height={24} loading="lazy" />
            <Image
              src="/LinkedIn.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Testimonials</Link>
          <Link href="/">FAQs</Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm">
          © 2025 Your Dental Clinic. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs md:text-sm">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>
          <Link href="/" className="underline">
            Terms of Service
          </Link>
          <Link href="/" className="underline">
            Cookies Settings
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
