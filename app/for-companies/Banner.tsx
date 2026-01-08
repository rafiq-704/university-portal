'use client'
'use client'
import { useRef } from "react";
import useSplitText from "../hooks/useSplitText";
const Banner = () => {
    const containerEl = useRef<HTMLElement>(null);
    useSplitText({
        container: containerEl,
        selector: ".split",
    });
    return (
        <section ref={containerEl} className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/companies/ForCompanies_Image1.jpg')]
        bg-cover bg-center bg-no-repeat min-h-[50vh] mx-auto flex items-center justify-center">
            <div className="flex flex-col items-center text-center gap-2">
                <h1 className="split text-[clamp(24px,4vw,52px)] text-white font-bold tracking-[0.6]">Direct Access to Life Sciences Talents</h1>
                {/* <p className="text-lg text-white/70 max-w-3xl leading-tight text-center">The Department of Biosystems Science & Engineering (D-BSSE) is unique within ETH Zurich. Located in Basel, our students, PhDs, and Postdocs are trained on cutting-edge technologies at the intersection of biology, engineering, and data science.
                    They are uniquely skilled professionals prepared to meet industry challenges.
                </p> */}
            </div>
        </section>
    )
}

export default Banner

