"use client"

import { usePathname } from "next/navigation";
import { navbarData } from "./utils"

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <section className="flex items-center justify-center w-full pt-8">
      <div className="navbar max-w-7xl mx-auto w-full rounded-xl bg-primary h-18 flex items-center justify-start px-12 shadow-lg shadow-primary/20">
        <div className="flex items-center justify-start gap-6">
          {navbarData.map((item) => (
            <a key={item.id} href={item.link} className={`text-white text-xl ${pathname === item.link ? "font-bold" : ""}`}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Navbar
