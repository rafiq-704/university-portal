'use client'
import Image from "next/image";
import Container from "../components/Container";
import { sectionData } from "./utils";
import Chip from "../components/Chip";
import useSplitText from "../hooks/useSplitText";
import { useRef } from "react";
import Button from "../components/Button";
const Sections = () => {
    const container = useRef<HTMLDivElement>(null)
    useSplitText({
        container: container,
        selector: 'split',
        type: 'lines'
    })
    return (
        <section ref={container} className="flex flex-col items-center justify-center bg-white">
            <Container className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {sectionData.map((item) => (
                        <div
                            key={item.id}
                            className="max-w-xl h-[400px] rounded-xl shadow-2xl shadow-primary/20 overflow-hidden relative group"
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
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                            />
                            <div
                                className="
                  absolute bottom-0 left-0 right-0
                  p-6 text-white
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                            >
                                <h3 className="split text-2xl font-bold">{item.title}</h3>
                                <p className="split text-sm text-white/80 mt-2">
                                    {item.description}
                                </p>
                                {item.btn_label && (
                                    <Button label={item.btn_label} className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/80 transition" />

                                )}
                            </div>
                            <div
                                className="
                  absolute top-0 right-0
                   text-white p-6
                  -translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                            >
                                <Chip
                                    label={item.chip.label}
                                    bgColor={item.chip.color}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Sections;
