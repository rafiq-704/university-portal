'use client'
import Image from "next/image"
import Container from "../components/Container"
import Button from "../components/Button"
import { redirectToExternal } from "../components/RedirectToExternal"


const Students = () => {
  const studentRegistrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSccIGOw6OdoFilOep9MpkLOW12cJh_sOf2AVnK7t3102Yanmg/viewform';
  const programUrl = '';
  return (
    <Container>
      <section className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-0">
        <div className="flex-1 flex flex-col items-start gap-4">
          <p className="text-[clamp(24px,4vw,48px)] font-bold tracking-[-0.4] text-primary">Your Future Starts Here</p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[clamp(24px,4vw,32px)] font-bold tracking-[-0.4] text-primary">Who is this for?</p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] text-gray-500">This event is primarily tailored for the BSSE community, but open to all students interested in a career in Life Science.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">	- MSc Students: Find internships and early-career opportunities.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">- PhDs & Postdocs: Connect with R&D departments for your transition into industry.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">
              - Other ETH and external Students: Interested in Life Sciences? You are welcome to join us in Basel!

            </p>

          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[clamp(24px,4vw,32px)] font-bold tracking-[-0.4] text-primary">The Career Fair</p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] text-gray-500">Walk the floor and immerse yourself in the biotech ecosystem.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] text-gray-500">The core of the Career Day is the exhibition area, where you can visit company booths ranging from global pharma giants to agile startups and meet their representatives. This is your chance to:
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">	- Get insights into innovative Life Science R&D and business strategies.

            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">	- Ask questions about workday structure.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">
              - Learn about internships and full-time positions.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">
              - Network directly with recruiters and industry representatives.
            </p>

          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[clamp(24px,4vw,32px)] font-bold tracking-[-0.4] text-primary">Optimize Your Professional Profile</p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">	- CV Checks: Get feedback from pros to make your application stand out.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4] text-gray-500 pl-5">	- Professional Photos: Update your LinkedIn profile with a free headshot.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[clamp(24px,4vw,32px)] font-bold tracking-[-0.4] text-primary">Grand Final</p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] text-gray-500">We are thrilled to announce that the day will conclude with a special Keynote Address from a distinguished Guest Speaker, followed by a networking Apéro.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] text-gray-500">Don't miss this opportunity to hear direct insights from a leader in the field!
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image src='/images/students/ForStudents_Image1.jpeg' alt="Students image" width={400} height={400} className="w-full h-full object-cover shadow-2xl shadow-primary/40" />
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-24 px-4 md:px-0">
        <Button label="CV Check Registration" btnType="secondary" onClick={() => redirectToExternal(studentRegistrationUrl)}/>
        <Button label="See the Program" btnType="accent" onClick={() => redirectToExternal(programUrl)}/>
      </div>
    </Container>
  )
}

export default Students
