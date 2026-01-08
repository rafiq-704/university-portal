'use client'
import { useRef } from "react"
import useSplitText from "../hooks/useSplitText";

const Banner = () => {
    const containerEl =useRef<HTMLElement>(null);
    useSplitText({
        container: containerEl,
        selector: ".split",
    });
    return (
        <section ref={containerEl} className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/students/ForStudents_Image1.jpeg')]
        bg-cover bg-center bg-no-repeat min-h-[50vh] mx-auto flex items-center justify-center">
            <div className="flex flex-col items-center text-center gap-2">
                <h1 className="split text-[clamp(24px,4vw,42px)] text-white font-bold tracking-[0.6]">Your Future Starts Here</h1>
            </div>
        </section>
    )
}

export default Banner
