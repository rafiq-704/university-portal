'use client'
import Button from "../components/Button";
import Container from "../components/Container";
import { redirectToExternal } from "../components/RedirectToExternal";

const NewHero = () => {
    const companyRegisterLink = "https://forms.gle/GKHJ9u1uvaA8n9vf6";
    return (
        <section
            className="
        w-full min-h-[80vh] mt-16
        flex items-center justify-center
        bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/HomePage_Image2.jpg')]
        bg-cover bg-center bg-no-repeat
        px-4 md:px-0
      "
        >
            <Container className="flex flex-col gap-6 items-center text-center">
                <h1 className="text-[clamp(48px,4vw,78px)] text-white font-bold">
                    BSSE Career Day 2026
                </h1>

                <p className="text-[clamp(16px,2vw,18px)] text-white">
                    06 May 2026 | ETH Zürich (Basel)
                </p>
                <Button btnType="secondary" label="Register Your Company" className="rounded-full border border-white py-4 px-6 text-lg" onClick={()=> redirectToExternal(companyRegisterLink)}/>
            </Container>
        </section>
    );
};

export default NewHero;
