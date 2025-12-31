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
        text-2xl px-16 py-4 rounded-lg cursor-pointer transition shadow-md
        ${btnType === "secondary" ? "bg-[#ec3523]" : "bg-accent"}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
