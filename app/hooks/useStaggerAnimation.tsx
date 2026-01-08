
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useStaggerAnimation = ({
  container,
  selector,
  y = 40,
  duration = 0.8,
  ease = "power1.out",
}: {
  container: React.RefObject<HTMLDivElement | null>;
  selector?: string | undefined;
  y?: number;
  duration?: number;
  ease?: string;
}) => {
  useGSAP(() => {
    if (!container.current) return;
if(!selector) return;
    const elements = container.current.querySelectorAll(selector);

    elements.forEach((el) => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: el,         
          start: "top 80%",
          // markers: true
        },
      });
    });
  });
};
