
const Footer = () => {
  return (
    <footer className="w-full bg-primary ">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="email flex items-center justify-center py-6 text-xl">
          <a href="mailto:careerday@bsse.ethz.ch" className="hover:underline">careerday@bsse.ethz.ch</a>
        </div>
        {/* <div className="email flex items-center justify-end w-full text-xl p-4">
          <a href="mailto:careerday@bsse.ethz.ch">Website By: </a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
