"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuButton from "../UI/MenuButton";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { CalendarDays } from "lucide-react";
import { useCalendly } from "../CalendlyProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCalendly } = useCalendly();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Escape key support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);
  return (
    <>
      <MobileNav isMenuOpen={isMenuOpen} onToggle={handleToggleMenu} />

      <header className="font-nunito-sans animate-fade-in">
        <div className="flex items-center justify-between px-5 md:px-8 lg:px-[100px] pt-4">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="BrightSmile Dental Logo"
                width={80}
                height={80}
                className="aspect-square w-11 md:w-14 lg:w-20"
                priority
                quality={90}
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6">
            <DesktopNav />
            <button
              onClick={openCalendly}
              className="border flex items-center gap-2 ml-8 px-6 py-3 rounded-full header-cta"
            >
              <CalendarDays strokeWidth={1.5} />
              <Link href="">Book Free Consultation</Link>
            </button>
          </div>

          <div className="lg:hidden">
            <MenuButton
              isOpen={isMenuOpen}
              onToggle={handleToggleMenu}
              ariaLabel="Navigation Menu"
              size="default"
              className="text-text focus:outline-none"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
