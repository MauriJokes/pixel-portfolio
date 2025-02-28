import { motion } from "framer-motion";

interface IPhoneFrameProps {
  scale: number;
  showNavbar: boolean;
}

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ scale, showNavbar }) => {
  return (
    <motion.div
      //   className="fixed inset-0 flex items-center justify-center z-10"
      //   style={{
      //     transform: `translateY(${translateY + phoneOffset}px) scale(${scale})`,
      //   }}
      id="phoneFrame"
      className="fixed inset-0 flex items-center justify-center z-10"
      animate={{
        y: showNavbar ? 50 : 0, // Moves down with navbar
        scale: scale,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center min-h-screen">
        {/* iPhone Frame */}
        <div className="relative w-[380px] h-[750px] bg-white rounded-[50px] border-[15px] border-black shadow-lg overflow-hidden">
          {/* Notch */}
          <div className="absolute z-10 top-1 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-black rounded-full"></div>
          {/* Content inside the iPhone */}
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Gradient Background Animation */}
            <div className="bg-gradient-move"></div>
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] grid-rows-[repeat(auto-fit,minmax(40px,1fr))] gap-[1px] transition-transform duration-1000">
              {[...Array(200)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-full aspect-square bg-[#1e1e1e]"
                ></div>
              ))}
            </div>
            {/* Text Content */}
            <div className="fixed z-10 flex flex-col items-center">
              <p className="font-brick-sans text-6xl text-center text-white">
                NIK
              </p>
              <p className="font-brick-sans text-6xl text-center text-[#98c379]">
                ADAM
              </p>
              <p className="font-brick-sans text-6xl text-center text-white">
                DANISH
              </p>
              <p className="font-montserrat font-semibold text-sm text-center text-white tracking-widest mt-3">
                FULL STACK DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IPhoneFrame;
