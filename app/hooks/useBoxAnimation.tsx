import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
interface UseBoxAnimationProps {
    container: React.RefObject<HTMLDivElement | null>;
    x?: number;
    y?: number;
    scale?: number;
    delay?: number;
    ease?: string;
    duration?: number;
    stagger?: number;
    start?: string;
    selector?: string;
}
export const useBoxAnimation = ({
    container,
    x = 0,
    y = 0,
    scale = 1,
    delay = 0,
    ease = "power1.out",
    start,
    selector,
    stagger= 0.2,
    duration = 1.2,
}: UseBoxAnimationProps) => {
    return (
        useGSAP(() => {
            if (container.current) {
                gsap.from(selector ? container.current.querySelectorAll(selector) : container.current, {
                    scrollTrigger: {
                        trigger: container.current,
                        start: start || "top 80%",
                        // markers: true,
                    },
                    x: x,
                    y: y,
                    stagger: stagger,
                    scale: scale,
                    ease: ease,
                    delay: delay,
                    duration: duration,
                });
            }
        })
    );
}