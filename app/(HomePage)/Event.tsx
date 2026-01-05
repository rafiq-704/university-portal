import Image from "next/image"
import Container from "../components/Container"

const Event = () => {
    return (
        <Container>
            <section className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-0">
                <div className="flex-1 flex items-start justify-center">
                    <Image
                        src="/images/HomePage_Image2.jpg"
                        alt="HomePage Image 2"
                        width={400}
                        height={300}
                        className="object-contain w-full h-full shadow-2xl shadow-primary/40"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <p className="text-[clamp(24px,4vw,48px)] font-bold tracking-[-0.4] ">The Event</p>
                    <p className="text-[clamp(16px,2vw,18px)] font-bold leading-8 tracking-[1.5] ">Situated in Basel, the hub of European Life Sciences, this full-day event connects students with leading innovators in the industry to explore the future of healthcare and technology.
                        Whether you are looking for your next career step or the brightest talents in the field, this is the place to be.
                        Join us at BSSE Career Day, where great connections and collaboration happen!</p>
                </div>
            </section>
        </Container>
    )
}

export default Event
