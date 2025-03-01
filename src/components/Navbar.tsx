import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";

interface NavbarProps {
  showNavbar: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showNavbar }) => {
  return (
    <motion.nav
      className="sticky top-0 left-0 z-40 flex h-[70px] w-full bg-[linear-gradient(to_bottom_right,#e06c75,#e5c07b,#98c379,#61afef,#c678dd,#e06c75)] shadow-md shadow-black/20 backdrop-blur-md"
      animate={{
        // y: showNavbar ? 25 : 0, // Moves down with navbar
        opacity: showNavbar ? 1 : 0, // Fade in when needed
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: showNavbar ? 0.7 : 0,
      }}
    >
      <div className="z-50 flex w-full items-center justify-between bg-black/90 p-4">
        <div className="flex flex-col items-start leading-none">
          <div className="flex items-center gap-2">
            <p className="font-brick-sans text-center text-white">NIK</p>
            <p className="font-brick-sans text-center text-[#98c379]">ADAM</p>
          </div>
          <p className="font-brick-sans text-center text-white">DANISH</p>
          <p className="font-montserrat mt-2 text-[5px] font-semibold tracking-widest text-white">
            FULL STACK DEVELOPER
          </p>
        </div>
        <RiMenu3Fill className="text-3xl text-white" />
      </div>
      {/* <p className="text-xl font-semibold tracking-wider">MY PORTFOLIO</p> */}
    </motion.nav>
  );
};

export default Navbar;
