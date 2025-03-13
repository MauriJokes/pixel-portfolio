import { useEffect, useState } from "react";
import FilterButtons from "../components/FilterButtons";
import data from "../data/background-info.json";
import BackgroundAudioPlayer from "../components/BackgroundAudioPlayer";

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
    <div className="flex h-screen w-full flex-col items-center justify-start gap-6 overflow-hidden p-20 px-4">
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

      {/* Background Audio Player Component */}
      <BackgroundAudioPlayer
        data={textInfo}
        textColor={textColor}
        active={active}
      />
    </div>
  );
}
