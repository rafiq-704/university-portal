'use client'
import { useRef } from "react"
import { useBoxAnimation } from "../hooks/useBoxAnimation"
import Button from "./Button"
import Container from "./Container"
import { redirectToExternal } from "./RedirectToExternal"
import Typography from "./Typography"

const CTA = () => {
    const studentRegisterLink = "https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform";
    const containerEl = useRef<HTMLDivElement>(null);
    useBoxAnimation({
            container: containerEl,
            y: 50
        });
  return (
    <Container className="pb-12 pt-0 md:pt-0">
        <section ref={containerEl} className="bg-linear-to-r from-primary/70 to-accent/60 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-8 md:py-12">
            <div className="box flex gap-2 flex-col text-center md:text-left">
                <Typography className="text-[clamp(32px,4vw,32px)] leading-9">Ready to Elevate Your Career?</Typography>
                <p className="text-gray-500 text-md">Download the program guide or register your interest early.</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <Button label="Download Program PDF" icon="/icons/download.svg" className="group-hover:rotate-0 text-white"/>
                <Button label="Register via Google Form" btnType="secondary" icon="/icons/share.svg" className="group-hover:rotate-0 text-white border" onClick={()=> redirectToExternal(studentRegisterLink)}/>
            </div>
        </section>
    </Container>
  )
}

export default CTA
