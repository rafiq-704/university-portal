'use client'
import { useRef } from "react"
import Container from "../components/Container"
import useSplitText from "../hooks/useSplitText"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);
const WhyAttend = () => {
    const container = useRef<HTMLDivElement>(null)
    // useSplitText({
    //     container: container,
    //     selector: '.split',
    //     type: 'chars'
    // })
    useGSAP(() => {
        const split = SplitText.create('.split', { type: 'lines' })
        const tl= gsap.timeline({
            scrollTrigger:{
                trigger: container.current,
                start:'top 75%',
                markers: true
            }
        })
        tl.from(split.lines, {
            opacity:0,
            x: -100,
            stagger:0.08,
            duration: 0.8,
            ease:'sine.inOut'
        })
    }, { scope: container })
    return (
        <section ref={container} className="flex items-center justify-center">
            <Container className="flex md:flex-row items-center justify-center gap-10">
                <div className="flex-1 flex flex-col items-center gap-6 max-w-2xl">
                    <h2 className="split text-[clamp(32px,4vw,48px)] font-bold text-center">Why Attend BSSE Career Day?</h2>
                    <p className="split text-gray-500 text-[clamp(16px,2vw,18px)] text-center">BSSE Career Day offers a unique opportunity for students to connect with leading companies in the life sciences and technology sectors. Attendees can explore potential career paths, network with industry professionals, and gain insights into the latest trends and innovations shaping the future of healthcare and technology.</p>
                </div>
            </Container>
        </section>
    )
}

export default WhyAttend
