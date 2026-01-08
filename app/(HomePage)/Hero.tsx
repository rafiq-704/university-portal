'use client'
import { useRef } from "react";
import Container from "../components/Container";
import useSplitText from "../hooks/useSplitText";

const Hero = () => {

  const containerEl =useRef<HTMLElement>(null);
      useSplitText({
          container: containerEl,
          selector: ".split",
      });
  return (
    <Container>
      <section ref={containerEl} className="relative h-[60vh] w-full overflow-hidden
        bg-[url('/images/HomePage_Image1.jpg')]
        bg-center bg-cover bg-no-repeat">

        <svg className="absolute h-0 w-0">
          <defs>
            <clipPath id="arrowClip" clipPathUnits="objectBoundingBox">
              <path
                d="
                  M 0 0
                  L 0.85 0
                  L 1 0.5
                  L 0.85 1
                  L 0 1
                  Z
                "
              />
            </clipPath>
          </defs>
        </svg>

        <div
          className="h-full w-7/12
            backdrop-blur-xl bg-white/40
            flex flex-col justify-center items-start p-12"
          style={{
            clipPath: "url(#arrowClip)",
          }}
        >
          <h1 className="split text-[clamp(32px,4vw,64px)] font-bold tracking-[-0.4]">
            BSSE Career Day 2026
          </h1>

          <p className="mt-4 text-[clamp(16px,2vw,24px)] font-bold leading-8 tracking-[1.5]">
            06 May 2026 | ETH Zürich (Basel)
          </p>
        </div>

      </section>
      <div className="flex items-center justify-center px-8 py-4 text-[clamp(16px,2vw,24px)] font-semibold shadow-lg max-w-5xl mx-auto ">
        <p>Bridging Science & Engineering Talents with Industry
        </p>
      </div>
    </Container>
  );
};

export default Hero;
