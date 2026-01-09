'use client'
import { useRef } from "react";
import Container from "../components/Container";
import useSplitText from "../hooks/useSplitText";
import { redirectToExternal } from "../components/RedirectToExternal";
import Button from "../components/Button";

const NewHero = () => {
    const containerEl = useRef<HTMLDivElement>(null);
    useSplitText({
        container: containerEl,
        selector: ".split",
    });
    // useBoxAimation({
    //     container: containerEl,
    //     scale: 1,
    // });
    const companyRegisterLink = "https://forms.gle/GKHJ9u1uvaA8n9vf6";
    return (
        <section
            ref={containerEl}
            className="
        w-full min-h-screen
        flex items-center justify-center
        bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/HomePage_Image2.jpg')]
        bg-cover bg-center bg-no-repeat
        px-4 md:px-0
      "
        >
            <Container className="flex flex-col gap-6 items-center text-center py-12 md:py-24">
                <h1 className="split text-[clamp(42px,4vw,78px)] text-white font-semibold leading-12 md:leading-18">
                    BSSE Career Day <br/> 2026
                </h1>

                <p className="text-[clamp(16px,2vw,24px)] text-white/70">
                    06 May 2026 | ETH Zürich (Basel)
                </p>
                <Button btnType="secondary" label="Register Your Company" className="rounded-full border border-white py-4 px-6 text-lg" onClick={() => redirectToExternal(companyRegisterLink)} />
            </Container>
        </section>
    );
};

export default NewHero;
