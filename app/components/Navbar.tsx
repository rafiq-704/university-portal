"use client";

import { usePathname } from "next/navigation";
import { navbarData } from "./utils";
import Button from "./Button";
import Container from "./Container";
import { redirectToExternal } from "./RedirectToExternal";
import { useBoxAnimation } from "../hooks/useBoxAnimation";
import { useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const containerEl = useRef<HTMLDivElement>(null);
  useBoxAnimation({
    container: containerEl,
    // selector:'.nav-box',
    y: -50
  });
  const studentRegisterLink = "https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform";
  return (
    <section ref={containerEl} className="
      fixed top-0 inset-x-0 z-50
      h-16
      bg-white/60
      backdrop-blur-lg
      border-b border-white/20
      shadow-md shadow-black/5
      flex items-center
    ">
      <Container>
        <div className="flex h-full items-center justify-between">
          <a href="/" className="font-bold text-[clamp(24px,4vw,32px)] text-primary">
            BSSE Career Day 2026
          </a>

          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              {navbarData.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className={`text-lg transition-all duration-300border ${pathname === item.link
                    ? "font-bold text-primary underline"
                    : "text-gray-600 hover:text-primary hover:underline"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button btnType="secondary" label="Register Now" onClick={() => redirectToExternal(studentRegisterLink)} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
