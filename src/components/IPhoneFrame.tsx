import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IPhoneFrameProps {
  scale: number;
  showNavbar: boolean;
}

interface TitleComponentProps {
  label: string;
  textColor: string;
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

const titleConfigs = [
  {
    label: "NIK",
    textColor: "text-white",
  },
  {
    label: "ADAM",
    textColor: "text-[#98c379]",
  },
  {
    label: "DANISH",
    textColor: "text-white",
  },
];

const TitleComponent: React.FC<TitleComponentProps> = ({
  label,
  textColor,
}) => {
  return (
    <p className={`font-brick-sans text-center text-[68px] ${textColor}`}>
      {label}
    </p>
  );
};

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ scale, showNavbar }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-center justify-center"
      animate={{
        y: showNavbar ? 40 : 0, // Moves down with navbar
        scale: scale,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex min-h-screen items-center justify-center">
        {/* iPhone Frame */}
        <div className="relative h-[750px] w-[380px] overflow-hidden rounded-[50px] border-[15px] border-black bg-white shadow-lg">
          {/* Notch */}
          <div className="absolute top-1 left-1/2 z-10 h-[30px] w-[160px] -translate-x-1/2 rounded-full bg-black"></div>
          {/* Content inside the iPhone */}
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            {/* Gradient Background Animation */}
            <div className="bg-gradient-move"></div>
            {/* Grid Background */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] grid-rows-[repeat(auto-fit,minmax(40px,1fr))] gap-[1px] transition-transform duration-1000">
              {[...Array(200)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square h-full w-full bg-[#1e1e1e]"
                ></div>
              ))}
            </div>
            {/* Text Content */}
            <div className="fixed z-10 flex flex-col items-center leading-none">
              {titleConfigs.map((item) => (
                <TitleComponent label={item.label} textColor={item.textColor} />
              ))}
              <p className="font-montserrat relative mt-4 flex h-10 w-80 items-center justify-center overflow-hidden text-center text-[17px] font-semibold tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={index}
                    initial={{ y: "100%", opacity: 0 }} // Start below & invisible
                    animate={{ y: "0%", opacity: 1 }} // Move to center & fade in
                    exit={{ y: "-100%", opacity: 0 }} // Move up & fade out
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IPhoneFrame;
