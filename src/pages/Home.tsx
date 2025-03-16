import { useState, useEffect } from "react";
import FallingBackground from "../components/FallingBackground";
import IPhoneFrame from "../components/IPhoneFrame";
import LaptopFrame from "../components/LaptopFrame";
import { useLayout } from "../context/LayoutContext";
import React from "react";
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
  const [scrollY, setScrollY] = useState(0);
  const { setShowNavbar, showNavbar } = useLayout();

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents SSR issues

    // check for type of device
    // const scrollFactor = window.matchMedia("(pointer: coarse)").matches ? 3 : 3;

    const handleScroll = () => {
      const newScrollY = window.scrollY * 6;
      setScrollY(newScrollY); // Save scroll position

      const maxScroll = window.innerHeight * 1.5; // Max scroll height before stopping
      const newScale = Math.min(
        Math.max(0.6, 1 - newScrollY / (maxScroll * 0.6)),
        1.2,
      );
      // Clamped between 0.7 and 1.2 for smoother zoom-out

      setScale(newScale);

      setShowNavbar(newScrollY >= maxScroll - 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowNavbar]); // Added `setShowNavbar` dependency

  return (
    <React.Fragment>
      {/* Falling Lines Background */}
      <FallingBackground scrollY={scrollY * 0.5} />

      {/* iPhone Frame (Visible when zooming out) */}
      {/* Hidden by default, only shown on specific breakpoints */}
      <div className="block sm:hidden">
        <IPhoneFrame scale={scale} showNavbar={showNavbar} />
      </div>
      {/* <div className="hidden sm:block lg:hidden">
        <TabletComponent />
      </div> */}
      <div className="hidden lg:block">
        <LaptopFrame scale={scale} showNavbar={showNavbar} />
      </div>
    </React.Fragment>
  );
}
