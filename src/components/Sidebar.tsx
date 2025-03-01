import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <motion.nav
      className="fixed top-0 right-0 z-50 h-full w-60 border border-l-black bg-black/60 p-4 shadow-md shadow-black/20 backdrop-blur-md"
      animate={{
        x: showSidebar ? 0 : 250, // Move navbar off-screen instead of hiding it
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-end">
          <RiMenu3Fill
            className="cursor-pointer text-3xl text-white"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="font-jet-brains text-base text-white">{"<home>"}</div>
          <div className="font-jet-brains text-base text-white">
            {"<background>"}
          </div>
          <div className="font-jet-brains text-base text-white">
            {"<skills>"}
          </div>
          <div className="font-jet-brains text-base text-white">
            {"<contact>"}
          </div>
        </div>
        <div className="flex w-full items-center justify-between p-8">
          <FaGithub className="cursor-pointer text-3xl text-white" />
          <TbMailFilled className="cursor-pointer text-3xl text-white" />
          <FaLinkedinIn className="cursor-pointer text-3xl text-white" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
