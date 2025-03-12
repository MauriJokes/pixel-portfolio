import React from "react";
import { useState } from "react";
import { motion, DragHandlers } from "framer-motion";
import {
  FaJava,
  FaGitAlt,
  FaPython,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaJs,
  FaHtml5,
} from "react-icons/fa";
import {
  SiKoa,
  SiCplusplus,
  SiSqlite,
  SiTypescript,
  SiFastapi,
  SiArangodb,
} from "react-icons/si";

interface AppIconSliderProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalState: React.Dispatch<React.SetStateAction<any>>;
}

const appIcons = [
  {
    icon: <FaJs className="text-[#F7DF1E]" />,
    title: "javascript",
    proficiency: 5,
    description: "i love js",
  },
  {
    icon: <SiTypescript className="text-[#3178C6]" />,
    title: "typescript",
    proficiency: 4,
    description: "i love ts",
  },
  {
    icon: <FaHtml5 className="text-[#E34F26]" />,
    title: "html",
    proficiency: 3,
    description: "i love html",
  },
  {
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    title: "css",
    proficiency: 3,
    description: "i love css",
  },
  {
    icon: <FaPython className="text-[#3776AB]" />,
    title: "python",
    proficiency: 3,
    description: "i love python",
  },
  {
    icon: <FaJava className="text-[#007396]" />,
    title: "java",
    proficiency: 2,
    description: "i love java",
  },
  {
    icon: <SiCplusplus className="text-[#00599C]" />,
    title: "c++",
    proficiency: 2,
    description: "i love c++",
  },
  {
    icon: <FaNodeJs className="text-[#83cd29]" />,
    title: "node.js",
    proficiency: 4,
    description: "i love node.js",
  },
  {
    icon: <SiKoa className="text-white" />,
    title: "koa.js",
    proficiency: 4,
    description: "i love koa.js",
  },
  {
    icon: <SiFastapi className="text-[#009688]" />,
    title: "fastapi",
    proficiency: 2,
    description: "i love fastapi",
  },
  {
    icon: <FaReact className="text-[#61DAFB]" />,
    title: "react.js",
    proficiency: 4,
    description: "i love react.js",
  },
  {
    icon: <FaGitAlt className="text-[#F05032]" />,
    title: "git",
    proficiency: 4,
    description: "i love git",
  },
  {
    icon: <SiArangodb className="text-[#DDE074]" />,
    title: "arangodb",
    proficiency: 4,
    description: "i love arangodb",
  },
  {
    icon: <SiSqlite className="text-[#003B57]" />,
    title: "sqlite",
    proficiency: 3,
    description: "i love sqlite",
  },
];

const ITEMS_PER_PAGE = 12; // 3x4 grid

const AppIconSlider: React.FC<AppIconSliderProps> = ({
  setIsModalOpen,
  setModalState,
}) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(appIcons.length / ITEMS_PER_PAGE);

  const handleDragEnd: DragHandlers["onDragEnd"] = (_, info) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;

    if (swipe < -50 || velocity < -500) {
      setPage((prev) => Math.min(prev + 1, totalPages - 1));
    } else if (swipe > 50 || velocity > 500) {
      setPage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <React.Fragment>
      <div className="relative w-full overflow-hidden rounded-2xl bg-[#2e2e2e] pt-8 pb-8 shadow-lg">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
          animate={{ x: -page * window.innerWidth }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex"
          style={{ width: totalPages * window.innerWidth }} // Ensure proper spacing
        >
          {Array.from({ length: totalPages }).map((_, index) => {
            const iconsForPage = appIcons.slice(
              index * ITEMS_PER_PAGE,
              (index + 1) * ITEMS_PER_PAGE,
            );
            const emptySlots = ITEMS_PER_PAGE - iconsForPage.length;

            return (
              <div
                key={index}
                className="flex items-center justify-center"
                style={{ minWidth: window.innerWidth, minHeight: "100%" }} // Ensure each page is full size
              >
                <div className="grid w-[min(90%,36rem)] grid-cols-3 grid-rows-4 justify-center gap-4">
                  {iconsForPage.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#3e3e42] text-5xl shadow-md"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        setIsModalOpen(true);
                        setModalState({
                          title: item.title,
                          proficiency: item.proficiency,
                          description: item.description,
                        });
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                  {/* Render empty slots to maintain grid alignment */}
                  {Array.from({ length: emptySlots }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-20 w-20" />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-3 flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === page ? "w-3 scale-125 bg-white" : "bg-gray-600"
            }`}
            animate={{ scale: index === page ? 1.2 : 1 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default AppIconSlider;
