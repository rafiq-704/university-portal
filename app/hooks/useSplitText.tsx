import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { RefObject } from "react";


interface useSpliteTextProps {
    selector: string;
    container: RefObject<HTMLDivElement | null>;
    x?: number;
    y?: number;
    type: "lines" | "words" | "chars";
    stagger?: number,
    duration?: number;
    ease?: string;
    start?: string
}
gsap.registerPlugin(SplitText);

export default function useSplitText({
    selector,
    container,
    x,
    y,
    type,
    stagger = 0.08,
    duration,
    ease = 'linear',
    start = 'top 65%'
}: useSpliteTextProps) {

    useGSAP(() => {
        if (!selector || !container) return;
        const split = SplitText.create(selector, { type: type })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start,
                markers: true
            }
        })
        const targetType = type === 'lines' ? split.lines : type === 'words' ? split.words : split.chars
        tl.from(targetType, {
            x, y, autoAlpha: 0, stagger, duration, ease
        })
    }, { scope: container })
}
