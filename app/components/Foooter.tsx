'use client';
import Image from "next/image"
import Container from "./Container"
import {  useRef } from "react"
import { useBoxAnimation } from "../hooks/useBoxAnimation";

const Footer = () => {
  const containerEl = useRef<HTMLDivElement>(null);
  useBoxAnimation({
      container: containerEl,
      selector:".box",
      y: 100
  });
  return (
    <footer ref={containerEl} className="w-full bg-primary">
      <Container className="py-6 md:py-12">
        <div className="box grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="email w-full flex-1 flex flex-col items-start gap-3 text-xl h-full">
            <p className="text-2xl text-white font-semibold">Contact us</p>
            <div className="flex items-center gap-2">
              <Image src="/icons/email_icon.svg" alt="email-icon" width={24} height={24} className="opacity-60" />
              <a href="mailto:careerday@bsse.ethz.ch" className="hover:underline text-white/60 text-[16px] md:text-xl">careerday@bsse.ethz.ch</a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/location-white.svg" alt="location-icon" width={24} height={24} className="opacity-60" />
              <a href="" className="text-white/60 text-[16px] md:text-xl">ETH Zurich (BSS), klingelbergstrasse 48, Basel</a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Image src="/icons/linkedin.svg" alt="linkedin-icon" width={24} height={24} className=" hover:brightness-0 hover:invert cursor-pointer" />
              <Image src="/icons/instagram.svg" alt="instagram-icon" width={24} height={24} className=" hover:text-white cursor-pointer" />
            </div>
          </div>
          <div className="email flex-1 flex flex-col items-end h-full gap-17 text-[16px] md:text-xl">
            <div className="flex flex-col gap-2 items-end">
              <p className="text-white/60">© 2026 BSSE Career Day.</p>
              <p className="text-white/60">Organized by the Student Organization</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white/60">Designed By: Ebrima Tunkara</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
