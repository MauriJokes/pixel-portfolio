import { motion } from "framer-motion";

interface NavbarProps {
  showNavbar: boolean;
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ showNavbar, scrollY }) => {
  return (
    <nav className="sticky top-0 left-0 w-full h-[70px] bg-black text-white  z-50">
      {/* <p className="text-xl font-semibold tracking-wider">MY PORTFOLIO</p> */}
    </nav>
  );
};

export default Navbar;
