type ChipProps = {
  label: string;
  bgColor?: string; // tailwind classes
};

const Chip = ({ label, bgColor = "bg-primary" }: ChipProps) => {
  return (
    <div
      className={`
        absolute top-5 right-4 z-10
        px-4 py-1 rounded-full text-sm font-semibold text-white opacity-100 translate-y-0
        md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
        transition-transform duration-500 ease-out
        ${bgColor}
      `}
    >
      {label}
    </div>
  );
};

export default Chip;
