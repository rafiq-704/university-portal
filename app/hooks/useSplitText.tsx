import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface UseSplitTextProps {
    selector: string;
    container: RefObject<HTMLElement | null>;
    type?: "chars" | "words" | "lines";
    stagger?: number;
    duration?: number;
    ease?: string;
    start?: string;
}

export default function useSplitText({
    selector,
    container,
    type = "chars",
    stagger = 0.04,
    duration = 0.12,
    ease = "none",
    start = "top 70%",
}: UseSplitTextProps) {
    useGSAP(
        () => {
            if (!container.current) return;

            const split = new SplitText(selector, {
                type,
                charsClass: "char",
            });
            const targets =
                type === "lines"
                    ? split.lines
                    : type === "words"
                        ? split.words
                        : split.chars;

            gsap.fromTo(
                targets,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    stagger,
                    duration,
                    ease,
                    scrollTrigger: {
                        trigger: container.current,
                        start,
                        once: true,
                    },
                }
            );
        },
        { scope: container }
    );
}
