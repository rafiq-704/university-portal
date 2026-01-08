'use client'
import Image from "next/image";

type ButtonProps = {
  btnType?: "secondary" | "accent";
  className?: string;
  label: string;
  onClick?: () => void;
  icon?: string;
};
const Button = ({ btnType, className, label, onClick, icon }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
         px-4 py-2 relative cursor-pointer transition font-semibold inline-flex items-center gap-2 overflow-hidden group
        ${btnType === "secondary" ? "bg-[#ec3523] hover:bg-[#ec3523]/80 text-white " : btnType === "accent" ? "bg-accent hover:bg-accent/80" : "border border-gray-300"}
        ${className}
      `}
    >
      <div className="flex flex-col">
        <span className="group-hover:-translate-y-10 transition-transform duration-500 ease-in-out">{label}</span>
        <span className="translate-y-10 absolute group-hover:translate-y-0 transition-transform duration-800 ease-in-out">{label}</span>
      </div>
      {icon && (
        <Image src={icon} alt="button icon" width={20} height={20} className={`group-hover:-rotate-45 transition-transform duration-500 ease-in-out ${className}`} />
      )}
    </button>
  );
};

export default Button;
