import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarNavProps {
  label: string;
  nav: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
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
    label: "<projects>",
    nav: "/projects",
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
  setActive,
  index,
  setShowSidebar,
  setShowNavbar,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className={`font-jet-brains cursor-pointer text-base transition duration-300 ${active === index ? "text-[#98c379]" : "text-white"} `}
      onClick={() => {
        navigate(nav),
          setShowSidebar(false),
          setShowNavbar(index === 0 ? false : true),
          setActive(index);
      }}
    >
      {label}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { showSidebar, setShowSidebar, setShowNavbar, setActive, active } =
    useLayout();
  const email = "nikadamdanish@gmail.com";

  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      });
    } else {
      // Fallback for iOS / unsupported browsers
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px"; // Move it off-screen
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };
  return (
    <motion.aside
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
              setActive={setActive}
              index={index}
              setShowSidebar={setShowSidebar}
              setShowNavbar={setShowNavbar}
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
    </motion.aside>
  );
};

export default Sidebar;
