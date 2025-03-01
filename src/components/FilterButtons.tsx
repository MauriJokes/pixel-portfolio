interface FitlerButtonsProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  label: string;
  index: number;
}

const FilterButtons: React.FC<FitlerButtonsProps> = ({
  active,
  setActive,
  label,
  index,
}) => {
  return (
    <button
      className={`mont-montserrat h-10 w-28 flex-1 rounded-lg text-sm shadow-lg shadow-gray-800/40 ${active === index ? "border border-white/50 bg-black text-white transition duration-300" : "bg-[#2e2e2e] text-[#969696]"}`}
      onClick={() => setActive(index)}
    >
      {label}
    </button>
  );
};

export default FilterButtons;
