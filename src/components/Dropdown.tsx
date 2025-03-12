import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  label: string;
  onSelect: React.Dispatch<React.SetStateAction<any>>;
  options: { label: string; icon?: React.ReactNode; value: any }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking/tapping outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Listen for both mouse & touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full text-left" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative flex w-full items-center justify-center bg-[#2e2e2e] py-2 shadow-lg focus:outline-none ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <p className="font-montserrat text-center text-lg tracking-widest text-white/60">
          {label}
        </p>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute right-3"
        >
          <FaChevronDown className="h-5 w-5 text-right text-white/60" />
        </motion.div>
      </button>

      {/* Dropdown Menu with Animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 z-50 w-full overflow-hidden rounded-b-lg bg-white shadow-lg"
        >
          <ul className="divide-y divide-gray-100">
            {options?.map((item, index) => (
              <li
                key={index}
                className="flex cursor-pointer items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  onSelect(item.value);
                  setIsOpen(false);
                }}
              >
                {item?.icon}
                <span className="text-[#2e2e2e]">{item.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
