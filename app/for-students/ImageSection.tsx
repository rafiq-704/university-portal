'use client';
import Image from "next/image";
import Container from "../components/Container";
import { textSections } from "./utils";
import Chip from "../components/Chip";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";
import { useRef } from "react";

const ImageSection = () => {
    const containerEl = useRef<HTMLDivElement>(null);
    useStaggerAnimation({
        selector: '.stagger',
        container: containerEl,
        duration: 0.6,
        y: 100
    })
    return (
        <section className="flex flex-col items-center justify-center bg-white">
            <Container className="flex flex-col items-center justify-center py-12 md:">
                <div ref={containerEl} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {textSections.map((item) => (
                        <div
                            key={item.id}
                            className="stagger max-w-xl h-100 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden relative group"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div
                                className="
                  absolute inset-0
                  bg-linear-to-t from-black/80 via-black/50 to-transparent
                  opacity-100 md:group-hover:opacity-100
                  transition-opacity duration-300
                "
                            />
                            <Chip label={item.chipLabel} bgColor={item.chipBg} />

                            <div
                                className="
                  absolute bottom-0 left-0 right-0
                  p-6 text-white
                  translate-y-0 md:translate-y-full md:group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                            >

                                {item.intro?.map((text, i) => (
                                    <p key={i} className="text-[clamp(1rem,2vw,1.5rem)] font-bold text-white leading-5 md:leading-7">
                                        {text}
                                    </p>
                                ))}
                                <ul className="mt-4">
                                    {item.list?.map((listItem, index) => (
                                        <li key={index} className="text-sm text-white/80 mt-1">
                                            <Image src="/icons/check_arrow.svg" alt="icon" width={16} height={16} className="inline-block mr-2" />
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ImageSection;
