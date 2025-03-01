import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FilterButtons from "../components/FilterButtons";
import data from "../data/background-info.json";
import TypewriterComponent from "../components/TypwriterComponent";

const ButtonConfigs = [
  {
    label: "bio",
  },
  {
    label: "education",
  },
  {
    label: "experience",
  },
];

export default function Background() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [textColor, setTextColor] = useState<string>("text-[#e06c75]");
  const [textInfo, setTextInfo] = useState<string>(data[0].text);

  // Change text based on active filter
  useEffect(() => {
    switch (active) {
      case 0:
        setTextColor("text-[#e06c75]");
        setTextInfo(data[0].text);
        break;

      case 1:
        setTextColor("text-[#56b6c2]");
        setTextInfo(data[1].text);
        break;

      default:
        setTextColor("text-[#e4c07b]");
        setTextInfo(data[2].text);
        break;
    }
  }, [active]);

  return (
    <div className={`h-screen w-screen bg-[#262626]`}>
      {/* Navbar Component */}
      <Navbar
        showNavbar={true}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      {/* Sidebar Component */}
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        active={1}
      />
      <div className="flex w-full flex-col items-center gap-6 overflow-hidden p-4">
        <div className="flex w-full items-center gap-2 overflow-hidden">
          {/* Filter Component */}
          {ButtonConfigs.map((item, index) => {
            return (
              <FilterButtons
                active={active}
                setActive={setActive}
                label={item.label}
                index={index}
              />
            );
          })}
        </div>

        {/* Textarea Component */}
        <TypewriterComponent
          data={textInfo}
          textColor={textColor}
          active={active}
        />
      </div>
    </div>
  );
}
