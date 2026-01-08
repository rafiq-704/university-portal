'use client'
import Image from "next/image"
import Container from "../components/Container"
import Button from "../components/Button"
import { redirectToExternal } from "../components/RedirectToExternal";

const Event = () => {
    const studentRegisterLink = "https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform";
    return (
        <Container className="">
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0 ">
                <div className="flex-1 flex flex-col items-start gap-4">
                    <p className="text-[clamp(24px,4vw,48px)] font-bold tracking-[-0.4] ">The Event</p>
                    <p className="text-[clamp(16px,2vw,18px)] text-gray-500">Situated in Basel, the hub of European Life Sciences, this full-day event connects students with leading innovators in the industry to explore the future of healthcare and technology.
                        Whether you are looking for your next career step or the brightest talents in the field, this is the place to be.
                        Join us at BSSE Career Day, where great connections and collaboration happen!</p>
                    <Button label="For Students" icon="/icons/arrow.svg" onClick={()=> redirectToExternal(studentRegisterLink)}/>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="flex gap-6 w-full items-center">
                      <Image
                        src="/images/event-image-1.jpg"
                        alt="HomePage Image 2"
                        width={400}
                        height={300}
                        className="object-cover rounded-xl h-65 w-full shadow-2xl shadow-primary/20"
                    />
                    <Image
                        src="/images/event-image-2.jpg"
                        alt="HomePage Image 2"
                        width={400}
                        height={300}
                        className="object-cover rounded-xl h-85 w-full shadow-2xl shadow-primary/20"
                    />
                  </div>
                   <div className="flex w-full mt-6 gap-6 items-center">
                     <Image
                        src="/images/event-image-3.jpg"
                        alt="HomePage Image 2"
                        width={400}
                        height={300}
                        className="object-cover rounded-xl h-65 w-full shadow-2xl shadow-primary/20"
                    />
                    <Image
                        src="/images/event-image-4.jpg"
                        alt="HomePage Image 2"
                        width={400}
                        height={300}
                        className="object-cover rounded-xl h-85 w-full shadow-2xl shadow-primary/20"
                    />
                   </div>
                </div>

            </section>
        </Container>
    )
}

export default Event
