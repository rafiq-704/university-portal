
const Banner = () => {
    return (
        <section className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/students/student_banner.jpg')]
        bg-cover bg-center bg-no-repeat mt-16 min-h-[40vh] mx-auto flex items-center justify-center">
            <div className="flex flex-col items-center text-center gap-2">
                <h1 className="text-[clamp(24px,4vw,42px)] text-white font-bold tracking-[0.6]">For Students</h1>
                <p className="text-lg text-[#9e9e9e]">Discovering opportunities and resources tailored for your academic and professional growth.</p>
            </div>
        </section>
    )
}

export default Banner
