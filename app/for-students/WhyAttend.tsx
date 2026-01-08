'use client'
import Container from "../components/Container"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText";
import Typography from "../components/Typography"


gsap.registerPlugin(SplitText);
const WhyAttend = () => {
    return (
        <section className="flex items-center justify-center">
            <Container className="flex md:flex-row items-center justify-center gap-10">
                <div className="flex-1 flex flex-col items-center gap-6 max-w-3xl">
                    {/* <h2 className="split text-[clamp(32px,4vw,48px)] font-bold text-center">Why Attend BSSE Career Day?</h2> */}
                    <Typography className="text-[clamp(32px,4vw,72px)]">Why Attend BSSE Career Day?</Typography>
                    <p className="split text-gray-500 text-[clamp(16px,2vw,18px)] text-center">BSSE Career Day offers a unique opportunity for students to connect with leading companies in the life sciences and technology sectors. Attendees can explore potential career paths, network with industry professionals, and gain insights into the latest trends and innovations shaping the future of healthcare and technology.</p>
                </div>
            </Container>
        </section>
    )
}

export default WhyAttend
