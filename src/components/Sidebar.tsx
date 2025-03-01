import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  active: number;
}

interface SidebarNavProps {
  label: string;
  nav: string;
  active: number;
  index: number;
}

const SidebarNavConfigs = [
  {
    label: "<home>",
    nav: "/",
  },
  {
    label: "<background>",
    nav: "/background",
  },
  {
    label: "<skills>",
    nav: "/skills",
  },
  {
    label: "<contact>",
    nav: "/contact",
  },
];

const SidebarNavs: React.FC<SidebarNavProps> = ({
  label,
  nav,
  active,
  index,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`font-jet-brains cursor-pointer text-base transition duration-300 ${active === index ? "text-[#98c379]" : "text-white"} `}
      onClick={() => navigate(nav)}
    >
      {label}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  active,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "nikadamdanish@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // Hide after 1.5s
  };

  return (
    <motion.nav
      className="fixed top-0 right-0 z-50 h-full w-60 border border-l-black bg-black/60 p-4 shadow-md shadow-black/20 backdrop-blur-md"
      animate={{
        x: showSidebar ? 0 : 250, // Move navbar off-screen instead of hiding it
        opacity: showSidebar ? 1 : 0,
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
          {SidebarNavConfigs.map((item, index) => (
            <SidebarNavs
              label={item.label}
              nav={item.nav}
              active={active}
              index={index}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-between p-8">
          <a
            href="https://github.com/MauriJokes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-white transition duration-300 hover:text-gray-600" />
          </a>
          <div className="relative inline-block">
            <TbMailFilled
              className="cursor-pointer text-3xl text-white transition duration-300 hover:text-gray-600"
              onClick={copyToClipboard}
            />

            {showTooltip && (
              <div className="font-montserrat absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-[#98c37980] px-2 py-1 text-xs text-white shadow-md">
                Copied!
              </div>
            )}
          </div>
          <a
            href="https://www.linkedin.com/in/nikadamnikjoharris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-3xl text-white transition duration-300 hover:text-gray-600" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
