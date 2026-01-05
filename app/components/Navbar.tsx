"use client"

import { usePathname } from "next/navigation";
import { navbarData } from "./utils"

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <section className="flex items-center justify-center w-full mx-auto pt-4 md:pt-8 px-4 md:px-0">
      <div className="navbar max-w-7xl mx-auto w-full rounded-xl bg-primary h-18 flex items-center justify-start px-12 shadow-lg shadow-primary/20">
        <div className="flex items-center justify-start gap-6">
          {navbarData.map((item) => (
            <a key={item.id} href={item.link} className={`text-lg md:text-xl ${pathname === item.link ? "font-bold" : ""}`}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Navbar
