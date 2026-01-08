type ChipProps = {
  label: string;
  bgColor?: string; // tailwind classes
};

const Chip = ({ label, bgColor = "bg-primary" }: ChipProps) => {
  return (
    <div
      className={`
        absolute top-4 right-4 z-10
        px-4 py-1 rounded-full text-sm font-semibold text-white
        -translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-out
        ${bgColor}
      `}
    >
      {label}
    </div>
  );
};

export default Chip;
