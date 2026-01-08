import Image from "next/image"
import Container from "../components/Container"
import { useRef } from "react";
import { useBoxAnimation } from "../hooks/useBoxAnimation";

const Map = () => {
    const containerEl = useRef<HTMLDivElement>(null);
    useBoxAnimation({
        container: containerEl,
        x: 100,
        selector: ".container-1",
    });
    useBoxAnimation({
        container: containerEl,
        x: -100,
        selector: ".container-2",
    });
    return (
        <Container>
            <section ref={containerEl} className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-0">
                <div className="container-1 flex-1 flex flex-col gap-4 items-start justify-start ">
                    <div className="flex items-center justify-center gap-2 ">
                        <p className="text-[clamp(18px,2vw,24px)] font-bold tracking-[-0.4] ">When:</p>
                        <p className="text-[clamp(18px,2vw,24px)]">06 May 2026, 10:00 - 19:00</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 ">
                        <p className="text-[clamp(18px,2vw,24px)] font-bold tracking-[-0.4] ">Where:</p>
                        <p className="text-[clamp(18px,2vw,24px)]">ETH Zürich (BSS), Klingelbergstrasse 48, 4056 Basel</p>
                    </div>
                </div>
                <div className="container-2 flex-1 flex items-center justify-center shadow-2xl shadow-primary/40 w-full h-80 md:h-96">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.267822520539!2d7.578352976227734!3d47.56257727118585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9bed18b4859%3A0xf7fa0dc146af7e93!2sBSS!5e0!3m2!1sen!2s!4v1767162022902!5m2!1sen!2s"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                </div>
            </section>
        </Container>
    )
}

export default Map
