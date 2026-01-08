'use client'
import Image from "next/image"
import Button from "../components/Button"

const CTA = () => {
    return (
        <section className="flex items-center justify-center px-4 md:px-0 bg-primary/10">
            <div className="flex items-center justify-between w-full max-w-7xl py-10 flex-col md:flex-row gap-20">
                <div className="flex flex-col items-start gap-10">
                    <div className="flex gap-4 items-center">
                        <div className="h-10 w-10 p-2 bg-white flex items-center rounded-full"><Image src='/icons/calender_icon.svg' alt="date-icon" width={64} height={64} className="object-cover" /></div>
                        <div className="flex flex-col items-start">
                            <p className="uppercase text-md font-semibold">Date & time</p>
                            <p className="uppercase text-lg text-gray-500">May 06, 2026, 10:00am - 7:00pm</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="h-10 w-10 p-2 bg-white flex items-center rounded-full"><Image src='/icons/location_icon.svg' alt="date-icon" width={64} height={64} className="object-cover" /></div>
                        <div className="flex flex-col items-start">
                            <p className="uppercase text-md font-semibold">Location</p>
                            <p className="uppercase text-lg text-gray-500">ETH Zurich (BSS), klingelbergstrasse 48, Basel</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center shadow-2xl shadow-primary/40 w-full h-80 md:h-96 rounded-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.267822520539!2d7.578352976227734!3d47.56257727118585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9bed18b4859%3A0xf7fa0dc146af7e93!2sBSS!5e0!3m2!1sen!2s!4v1767162022902!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full rounded-xl"></iframe>
                </div>
                {/* <Button label="View Map" className="bg-gray-200 w-60 h-20 rounded-md border-none shadow-sm flex items-center justify-center text-[#9e9e9e] flex-row-reverse" icon="/icons/location_gray_icon.svg"/> */}
                {/* <Button label="Register Your Company" onClick={() => redirectToExternal("https://forms.gle/GKHJ9u1uvaA8n9vf6")} /> */}
            </div>
        </section>
    )
}

export default CTA
