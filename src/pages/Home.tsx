import { useState, useEffect } from "react";
import FallingBackground from "../components/FallingBackground";
import IPhoneFrame from "../components/IPhoneFrame";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import { AnimatePresence } from "framer-motion";
// import { AnimatedButton } from "../components/Button";

// const buttonConfig = [
//   {
//     position: "top-[-200px] left-[-100px]",
//     size: "w-60 h-30",
//     borderSize: "p-[2px]",
//     bgColor:
//       "bg-[linear-gradient(to_right,#d86871_0%,#98c379_20%,#d86871_40%,#98c379_80%,#d86871_100%)]",
//     color: "text-[#e06c75]",
//     textSize: "text-[32px]",
//     label: "<background>",
//     child: (
//       <span className="w-full h-full flex items-center justify-center bg-[#1e1e1e] rounded-3xl">
//         {"<background>"}
//       </span>
//     ),
//   },
//   {
//     position: "top-[-200px] right-[-100px]",
//     size: "w-60 h-30",
//     borderSize: "p-[2px]",
//     bgColor:
//       "bg-[linear-gradient(to_right,#61afef_0%,#98c379_20%,#61afef_40%,#98c379_80%,#61afef_100%)]",
//     color: "text-[#61afef]",
//     textSize: "text-[32px]",
//     child: (
//       <span className="w-full h-full flex items-center justify-center bg-[#2e2e2e] rounded-3xl">
//         {"<skills>"}
//       </span>
//     ),
//   },
//   {
//     position: "bottom-[-200px] left-[-100px]",
//     size: "w-60 h-30",
//     borderSize: "p-[2px]",
//     bgColor:
//       "bg-[linear-gradient(to_right,#58b6c2_0%,#98c379_20%,#58b6c2_40%,#98c379_80%,#58b6c2_100%)]",
//     color: "text-[#56b6c2]",
//     textSize: "text-[32px]",
//     child: (
//       <span className="w-full h-full flex items-center justify-center bg-[#2e2e2e] rounded-3xl">
//         {"<projects>"}
//       </span>
//     ),
//   },
//   {
//     position: "bottom-[-200px] right-[-100px]",
//     size: "w-60 h-30",
//     borderSize: "p-[2px]",
//     bgColor:
//       "bg-[linear-gradient(to_right,#c678dd_0%,#98c379_20%,#c678dd_40%,#98c379_80%,#c678dd_100%)]",
//     color: "text-[#e06c75]",
//     textSize: "text-[32px]",
//     child: (
//       <span className="w-full h-full flex items-center justify-center bg-[#2e2e2e] rounded-3xl">
//         {"<contact>"}
//       </span>
//     ),
//   },
// ];
{
  /* Buttons (Appear when scrolled) */
}
{
  /* <AnimatePresence>
          {showButtons &&
            buttonConfig.map((btn) => (
              <AnimatedButton key={btn.label} {...btn} />
            ))}
        </AnimatePresence> */
}

export default function Home() {
  const [scale, setScale] = useState(1);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // check for type of device
  let scrollFactor = window.matchMedia("(pointer: coarse)").matches ? 3 : 1;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY * scrollFactor;
      const maxScroll = window.innerHeight * 1.5; // Max scroll height before stopping
      // Scale (Zoom-out effect, shrinks more now)
      const newScale = Math.max(0.3, 1 - scrollY / (maxScroll * 0.7));

      setScale(newScale);

      // Show navbar when max scroll is reached
      if (scrollY >= maxScroll - 800) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative min-h-[110vh] w-screen bg-[#262626]`}>
      {/* Navbar Component */}
      <Navbar
        showNavbar={showNavbar}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        active={0}
      />
      {/* Falling Lines Background */}
      <FallingBackground scrollY={scrollY * 0.5} />
      {/* iPhone Frame (Visible when zooming out) */}
      <IPhoneFrame scale={scale} showNavbar={showNavbar} />
    </div>
  );
}
