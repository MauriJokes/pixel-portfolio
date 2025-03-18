import { useState, useEffect } from "react";
import FallingBackground from "../components/FallingBackground";
import IPhoneFrame from "../components/IPhoneFrame";
import LaptopFrame from "../components/LaptopFrame";
import { useLayout } from "../context/LayoutContext";
import React from "react";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const { setShowNavbar, showNavbar } = useLayout();

  // useEffect(() => {
  //   if (typeof window === "undefined") return; // Prevents SSR issues

  //   // check for type of device
  //   // const scrollFactor = window.matchMedia("(pointer: coarse)").matches ? 3 : 3;

  //   const handleScroll = () => {
  //     const newScrollY = window.scrollY * 6;
  //     setScrollY(newScrollY); // Save scroll position

  //     const maxScroll = window.innerHeight * 1.5; // Max scroll height before stopping
  //     const newScale = Math.min(
  //       Math.max(0.6, 1 - newScrollY / (maxScroll * 0.6)),
  //       1.2,
  //     );
  //     // Clamped between 0.7 and 1.2 for smoother zoom-out

  //     setScale(newScale);

  //     setShowNavbar(newScrollY >= maxScroll - 900);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [setShowNavbar]); // Added `setShowNavbar` dependency

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

  console.log("🚀 ~ Home ~ scale:", scale);
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
