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
            <div className="fixed z-10 flex flex-col items-center">
              <p className="font-brick-sans text-center text-6xl text-white">
                NIK
              </p>
              <p className="font-brick-sans text-center text-6xl text-[#98c379]">
                ADAM
              </p>
              <p className="font-brick-sans text-center text-6xl text-white">
                DANISH
              </p>
              <p className="font-montserrat mt-3 text-center text-sm font-semibold tracking-widest text-white">
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
