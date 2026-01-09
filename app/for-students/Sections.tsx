'use client'
import Image from "next/image";
import Container from "../components/Container";
import { useRef } from "react";
import { textSections } from "./utils";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";


const Sections = () => {
    const container = useRef<HTMLDivElement>(null);

    useStaggerAnimation({
        container,
        selector: ".box",
        y: 60,
    });
    return (
        <section ref={container} className="flex flex-col items-center justify-center">
            <Container className="flex flex-col items-center justify-center py-12 md:py-24">
                <div className="split flex flex-col gap-20">
                    {textSections.map((section) => (
                        <div key={section.id} className="box flex flex-col">
                            <div className="flex flex-col gap-2">
                                {section.intro?.map((text, i) => (
                                    <p key={i} className="text-xl font-bold text-primary">
                                        {text}
                                    </p>
                                ))}
                            </div>

                            {section.list && (
                                <ul className="mt-4 space-y-2 border border-white/90 bg-primary/5 hover:scale-105 transform-transition duration-500 ease-in shadow-lg rounded-xl p-6">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 mb-4">
                                            <Image src="/icons/check_arrow.svg" alt="icon" width={24} height={24} />
                                            <span className="text-lg text-gray-500">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default Sections;
