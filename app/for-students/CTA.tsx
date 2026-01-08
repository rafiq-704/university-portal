'use client'
import Button from "../components/Button"
import Container from "../components/Container"
import { redirectToExternal } from "../components/RedirectToExternal"

const CTA = () => {
    const studentRegisterLink = "https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform";
  return (
    <Container>
        <section className="bg-linear-to-r from-primary/30 to-secondary/80 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-8 md:py-12">
            <div className="flex-1 flex gap-2 flex-col text-center md:text-left">
                <h2 className="text-[clamp(24px,4vw,32px)] font-bold">Ready to Elevate Your Career?</h2>
                <p className="text-gray-500 text-md">Download the program guide or register your interest early.</p>
            </div>
            <div className="flex items-center gap-4">
                <Button label="Download Program PDF" icon="/icons/download.svg" className="group-hover:rotate-0 text-white"/>
                <Button label="Register via Google Form" btnType="secondary" icon="/icons/share.svg" className="group-hover:rotate-0 text-white border" onClick={()=> redirectToExternal(studentRegisterLink)}/>
            </div>
        </section>
    </Container>
  )
}

export default CTA
