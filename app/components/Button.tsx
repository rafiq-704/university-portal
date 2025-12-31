type ButtonProps = {
  btnType: "secondary" | "accent";
  className?: string;
  label: string;
  onClick?: () => void;
};

const Button = ({ btnType, className, label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        text-lg md:text-2xl max-w-lg w-full px-16 py-4 rounded-lg cursor-pointer transition shadow-md 
        ${btnType === "secondary" ? "bg-[#ec3523] hover:bg-[#ec3523]/80" : "bg-accent hover:bg-accent/80"}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
