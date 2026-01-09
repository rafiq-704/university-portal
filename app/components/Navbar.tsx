"use client";

import { usePathname } from "next/navigation";
import { navbarData } from "./utils";
import Button from "./Button";
import Container from "./Container";
import { redirectToExternal } from "./RedirectToExternal";
import { useBoxAnimation } from "../hooks/useBoxAnimation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const containerEl = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useBoxAnimation({
    container: containerEl,
    y: -50,
  });
  useEffect(() => {
    const navEl = containerEl.current;
    if (!navEl) return;
    console.log(navEl)
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOpen(false);
      }

    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const studentRegisterLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform";

  return (
    <section
      ref={containerEl}
      className="
        fixed top-0 inset-x-0 z-50
        h-16
        bg-linear-to-r from-white/80 to-white/30 backdrop-blur-xl
        border-b border-white/20 flex items-center shadow-md"
    >
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          <a
            href="/"
            className="font-bold text-[clamp(18px,4vw,32px)] text-primary"
          >
            BSSE Career Day 2026
          </a>

          <div className="flex items-center gap-4 md:gap-10">
            <div className="hidden lg:flex gap-6">
              {navbarData.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className={`text-lg transition-all duration-300 ${pathname === item.link
                    ? "font-bold text-primary underline"
                    : "text-gray-600 hover:text-primary hover:underline"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden relative w-8 h-8"
              aria-label="Toggle menu"
            >
              <Image
                src="/icons/menu.svg"
                alt="menu"
                fill
                className={`absolute transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100"
                  }`}
              />

              <Image
                src="/icons/cross.svg"
                alt="close"
                fill
                className={`absolute transition-all duration-300 ${open ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
              />
            </button>

            <div className="hidden lg:block">
              <Button
                btnType="secondary"
                label="Register Now"
                onClick={() => redirectToExternal(studentRegisterLink)}
              />
            </div>
          </div>

          <div
            // ref={navRef}
            className={`
              lg:hidden absolute top-full flex flex-col items-start left-0 right-0 shadow-lg bg-white transition-all duration-300 ease-out
              ${open
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10 pointer-events-none"
              }
            `}
          >
            <nav className="flex flex-col gap-6 p-6">
              {navbarData.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${pathname === item.link
                    ? "font-bold text-primary underline"
                    : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {item.name}
                </a>
              ))}

              <Button
                btnType="secondary"
                label="Register Now"
                onClick={() => redirectToExternal(studentRegisterLink)}
              />
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
