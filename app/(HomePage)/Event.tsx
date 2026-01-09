'use client'
import Image from "next/image"
import Container from "../components/Container"
import Button from "../components/Button"
import { redirectToExternal } from "../components/RedirectToExternal";
import Typography from "../components/Typography";
import { useRef } from "react";
import { useBoxAnimation } from "../hooks/useBoxAnimation";

const Event = () => {
    const containerEl = useRef<HTMLDivElement>(null);
    useBoxAnimation({
        container: containerEl,
        selector:'.box-1',
        scale:0.5,
        x:-200
    });
    useBoxAnimation({
        container: containerEl,
        selector:'.box-2',
        scale:0.5,
        x: 200
    });
    const studentRegisterLink = "https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform";
    return (
        <Container className="py-12 md:py-24">
            <section ref={containerEl} className="flex flex-col md:flex-row items-center justify-center gap-10 ">
                <div className="box-1 flex-1 flex flex-col items-start gap-4">
                    {/* <p className="text-[clamp(24px,4vw,48px)] font-bold tracking-[-0.4] ">The Event</p> */}
                    <Typography className="text-[clamp(32px,4vw,72px)]">The Event</Typography>
                    <p className="text-[clamp(16px,2vw,18px)] text-gray-500 leading-relaxed">Situated in Basel, the hub of European Life Sciences, this full-day event connects students with leading innovators in the industry to explore the future of healthcare and technology.
                        Whether you are looking for your next career step or the brightest talents in the field, this is the place to be.
                        Join us at BSSE Career Day, where great connections and collaboration happen!</p>
                    <Button label="For Students" icon="/icons/arrow.svg" onClick={() => redirectToExternal(studentRegisterLink)} />
                </div>
                <div className="box-2 flex-1 flex flex-col items-start justify-center">
                    <div className="flex gap-3 md:gap-6 w-full items-center">
                        <div className="w-full h-65 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 group">
                            <Image
                                src="/images/event-image-1.jpg"
                                alt="Event Image 1"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>

                        <div className="w-full h-85 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 group">
                            <Image
                                src="/images/event-image-2.jpg"
                                alt="Event Image 2"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                    <div className="flex w-full mt-6 gap-3 md:gap-6 items-center">
                        <div className="w-full h-65 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 group">
                            <Image
                                src="/images/event-image-3.jpg"
                                alt="Event Image 3"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>

                        <div className="w-full h-85 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 group">
                            <Image
                                src="/images/event-image-4.jpg"
                                alt="Event Image 4"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>


            </section>
        </Container>
    )
}

export default Event
