import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";

interface NavbarProps {
  showNavbar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  showNavbar,
  setShowSidebar,
  showSidebar,
}) => {
  return (
    <motion.nav
      className="sticky top-0 left-0 z-40 flex h-[70px] w-full bg-[linear-gradient(to_bottom_right,#e06c75,#e5c07b,#98c379,#61afef,#c678dd,#e06c75)] shadow-md shadow-black/20 backdrop-blur-md"
      animate={{
        y: showNavbar ? 0 : -100, // Move navbar off-screen instead of hiding it
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
        {!showSidebar && (
          <RiMenu3Fill
            className="cursor-pointer text-3xl text-white"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
