'use client'
import { useRef } from "react"
import useSplitText from "../hooks/useSplitText";
import Container from "../components/Container";

const Banner = () => {
    const containerEl = useRef<HTMLElement>(null);
    useSplitText({
        container: containerEl,
        selector: ".split",
    });
    return (
        <section ref={containerEl} className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/students/ForStudents_Image1.jpeg')]
        bg-cover bg-center bg-no-repeat min-h-screen mx-auto flex items-center justify-center">
            <Container className="py-12 md:py-24">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="split text-[clamp(42px,4vw,78px)] text-white font-semibold tracking-[0.6] leading-12 md:leading-18">Your Future Starts <br/> Here</h1>
                    <span className="split text-[clamp(16px,2vw,18px)] text-white/50 tracking-[0.4]">Explore Opportunities and Shape Your Career</span>
                </div>
            </Container>
        </section>
    )
}

export default Banner
