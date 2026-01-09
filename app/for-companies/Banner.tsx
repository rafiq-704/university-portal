'use client'
'use client'
import { useRef } from "react";
import useSplitText from "../hooks/useSplitText";
import Container from "../components/Container";
const Banner = () => {
    const containerEl = useRef<HTMLElement>(null);
    useSplitText({
        container: containerEl,
        selector: ".split",
    });
    return (
        <section ref={containerEl} className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/companies/ForCompanies_Image1.jpg')]
        bg-cover bg-center bg-no-repeat min-h-screen mx-auto flex items-center justify-center">
            <Container className="py-12 md:py-24">
            <div className="flex flex-col items-center text-center gap-2">
                <h1 className="split text-[clamp(44px,4vw,78px)] text-white font-semibold tracking-[0.6] leading-12 md:leading-18">Direct Access to <br/>  Life Sciences Talents</h1>
                <p className="split text-[clamp(16px,2vw,18px)] text-white/50 tracking-[0.4]">Connect with the Brightest Minds and Future Leaders in Life Sciences
                </p>
            </div>
            </Container>
        </section>
    )
}

export default Banner

