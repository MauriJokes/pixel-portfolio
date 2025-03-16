import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GridOverlay from "./GridOverlay";
import ChevronAnimation from "./ChevronAnimation";

interface LaptopFrameProps {
  scale: number;
  showNavbar: boolean;
}

interface TitleComponentProps {
  label: string;
  textColor: string;
  index: number;
}

const words = [
  "FULL STACK DEVELOPER",
  "SOFTWARE ENGINEER",
  "SOLUTION ARCHITECT",
  "CLOUD EXPLORER",
  "DEVOPS LEARNER",
  "SYSTEM BUILDER",
  "API SPECIALIST",
  "CODE OPTIMIZER",
  "CODE CRAFTSMAN",
  "VISIONARY CODER",
  "DEBUGGER",
  "PROBLEM SOLVER",
  "TECH ENTHUSIAST",
  "PERFORMANCE TWEAKER",
  "TECH STORYTELLER",
  "CONTINUOUS LEARNER",
];

// const titleConfigs = [
//   { label: "NIK", textColor: "text-white" },
//   { label: "ADAM", textColor: "text-[#98c379]" },
//   { label: "DANISH", textColor: "text-white" },
// ];

// const TitleComponent: React.FC<TitleComponentProps> = ({
//   label,
//   textColor,
//   index,
// }) => {
//   return (
//     <p
//       key={`p${index}`}
//       className={`font-brick-sans text-center text-[140px] ${textColor}`}
//     >
//       {label}
//     </p>
//   );
// };

const LaptopFrame: React.FC<LaptopFrameProps> = ({ scale, showNavbar }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-center justify-center"
      animate={{
        y: showNavbar ? 40 : 0,
        scale: scale,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Outer Frame with Silver Border */}
        <div className="relative rounded-t-3xl border-[4px] border-[#A7A8AA] border-b-black">
          {/* Laptop Frame */}
          <div className="relative h-[110vh] w-[110vw] overflow-hidden rounded-t-3xl border-[30px] border-b-[50px] border-black bg-gray-900 shadow-xl">
            {/* Screen Content */}
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-black">
              {/* Gradient Background Animation */}
              <div className="bg-gradient-move"></div>
              {/* Grid Background */}
              <GridOverlay />
              {/* Text Content */}
              <div className="fixed z-10 flex flex-col items-center leading-none">
                <span className="flex gap-4">
                  <p
                    className={`font-brick-sans text-center text-[140px] text-white`}
                  >
                    NIK
                  </p>
                  <p
                    className={`font-brick-sans text-center text-[140px] text-[#98c379]`}
                  >
                    ADAM{" "}
                  </p>
                </span>
                <p
                  className={`font-brick-sans $text-white text-center text-[140px] text-white`}
                >
                  DANISH
                </p>
                {/* {titleConfigs.map((item, index) => (
                  <TitleComponent
                    key={index}
                    label={item.label}
                    textColor={item.textColor}
                    index={index}
                  />
                ))} */}
                <span className="font-montserrat relative mt-4 flex h-10 w-80 items-center justify-center overflow-hidden text-center text-[17px] font-semibold tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="absolute w-full"
                    >
                      {words[index]}
                    </motion.div>
                  </AnimatePresence>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down Chevron Animation */}
        <ChevronAnimation />
        {/* Laptop Base */}
        <div className="flex h-20 w-[130vw] flex-col items-center rounded-b-3xl bg-[#A7A8AA] shadow-md">
          <div className="flex h-10 w-70 rounded-b-3xl bg-[#858585]" />
        </div>
        <div className="flex h-1.5 w-[120vw] flex-col items-center rounded-b-3xl bg-[#858585] shadow-md">
          {/* <div className="flex h-10 w-70 rounded-b-3xl bg-[#858585]" /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default LaptopFrame;
