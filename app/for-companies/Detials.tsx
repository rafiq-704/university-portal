import Image from "next/image";
import Container from "../components/Container"
import { packagesData } from "./utils";
import { useRef } from "react";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";

// data/textListOne.ts
export const textListOne = [
    "MSc students specializing in Biotechnology, Computational Biology, and Bioinformatics.",
    "Researchers including PhD candidates and postdoctoral fellows preparing for careers in industry.",
    "Open to the entire ETH Zurich student body and external students from engineering and science disciplines.",
    "Connect with the next generation of researchers, innovators, and industry-ready specialists.",
];


const Detials = () => {
    const contaier = useRef<HTMLDivElement>(null);
     useStaggerAnimation({
            container: contaier,
            selector: ".box",
            y: 60,
        });
    return (
        <section ref={contaier}>
            <Container>
                <div className=" flex flex-col gap-8">
                    <p className="text-xl font-bold text-primary">The Department of Biosystems Science & Engineering (D-BSSE) is unique within ETH Zurich. Located in Basel, our students, PhDs, and Postdocs are trained on cutting-edge technologies at the intersection of biology, engineering, and data science.
                        They are uniquely skilled professionals prepared to meet industry challenges.
                    </p>
                    <ul className="">
                        {textListOne.map((item, index) => (
                            <div className="box flex items-center gap-4  mb-4" key={index}>
                                <Image src="/icons/check_arrow.svg" alt="icon" width={24} height={24} />
                                <li key={index} className="text-lg text-gray-500">{item}</li>
                            </div>
                        ))}
                    </ul>
                    <p className="text-xl font-bold text-primary">All packages include catering for up to 3 company representatives.</p>
                    <ul className="space-y-8">
                        {packagesData.map((pkg, index) => (
                            <li key={index} className="box border border-white/90 bg-primary/5 hover:scale-105 transform-transition duration-500 ease-in shadow-lg rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-primary">
                                    {pkg.title} <span className="text-primary">({pkg.price})</span>
                                </h3>

                                {pkg.note && (
                                    <p className="text-md text-gray-500 mt-2">{pkg.note}</p>
                                )}
                                <ul className="mt-4 space-y-2">
                                    {pkg.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 mb-4">
                                            <Image src="/icons/check_arrow.svg" alt="icon" width={24} height={24} />
                                            <span className="text-lg text-gray-500">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                </div>
            </Container>
        </section>
    )
}

export default Detials
