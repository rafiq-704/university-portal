'use client'
import Image from "next/image"
import Container from "../components/Container"
import Button from "../components/Button"
import { redirectToExternal } from "../components/RedirectToExternal"


const Companies = () => {
  const companyRegistrationUrl = 'https://forms.gle/GKHJ9u1uvaA8n9vf6';
  const infoSheetUrl = '';
  return (
    <Container>
      <section className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-0">
        <div className="flex-1 flex flex-col items-start gap-4">
          <p className="text-[clamp(24px,4vw,48px)] font-bold tracking-[-0.4] ">Direct Access to Life Sciences Talents</p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[clamp(24px,4vw,32px)] font-bold tracking-[-0.4] ">Who You Will Meet</p>
            <p className="text-[clamp(16px,4vw,24px)]  tracking-[-0.4] ">The Department of Biosystems Science & Engineering (D-BSSE) is unique within ETH Zurich. Located in Basel, our students, PhDs, and Postdocs are trained on cutting-edge technologies at the intersection of biology, engineering, and data science.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">They are uniquely skilled professionals prepared to meet industry challenges.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">By exhibiting your company, you gain access to a highly specialized talent pool ready to drive innovation in your organization.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">- MSc Students: Specializing in Biotechnology and Computational Biology & Bioinformatics.</p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">- Researchers: PhD students and Postdocs looking to start their career in the industry</p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">- Wider Network: The event is open to the entire ETH Zurich student body as well as external students, attracting engineering and science talents across different fields
              This is your chance to connect with the next generation of researchers and specialists.</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[clamp(24px,4vw,32px)] font-bold tracking-[-0.4] ">Participation Packages</p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">All packages include catering for up to 3 company representatives.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">Standard Package (CHF 1'200.-)
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">- Booth Setup (approx. 4m²): 1 Table, 2 Chairs, and WiFi connection.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">- Branding: Company logo and profile on the event website and on the event booklet distributed to visitors.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">Standard Pro Package (CHF 1'700.-)
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">Includes the Standard Package setup, plus:
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">
              - Prime Location: Choose your spot on the floor plan to ensure maximum visibility and foot traffic.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">Premium Package (CHF 2'500.-)
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">Includes the Standard Pro Package setup, plus:
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">
              - Company Talk: A dedicated spot and time slot to present your company vision and projects to a larger audience (20min presentation + 10min Q&A).
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">
              - Custom Stand: Option to bring your own custom booth setup (space permitting).
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">
              - Featured Branding: Prominent logo placement on all marketing materials.
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">Startup Package (CHF 600.-)
            </p>
            <p className="text-[clamp(16px,4vw,24px)] tracking-[-0.4] ">{`Exclusively for companies <10 employees`}
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">
              - Booth Setup: 1 High-top table and WiFi connection.
            </p>
            <p className="text-[clamp(16px,4vw,22px)] tracking-[-0.4]  pl-5">
              - Branding: Logo on website.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image src='/images/companies/ForCompanies_Image1.jpg' alt="Companies image" width={400} height={400} className="w-full h-full object-cover shadow-2xl shadow-primary/40" />
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-24 px-4 md:px-0">
        <Button label="Register Your Company" btnType="secondary" onClick={() => redirectToExternal(companyRegistrationUrl)} />
        <Button label="Information Sheet" btnType="accent" onClick={() => redirectToExternal(infoSheetUrl)} />
      </div>
    </Container>
  )
}

export default Companies
