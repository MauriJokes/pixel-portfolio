// import { CgMaximizeAlt } from "react-icons/cg";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <div className="flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden p-20 px-4">
//       <motion.div
//         layout
//         className={`cursor-pointer rounded-xl p-4 ${
//           expanded ? "bg-red-400" : "bg-blue-400"
//         }`}
//         onClick={() => setExpanded(!expanded)}
//         transition={{ layout: { duration: 0.3, type: "spring" } }}
//       >
//         {/* <div className="flex w-full items-center justify-center rounded-2xl bg-[#61afef] px-4 py-6 text-center">
//           <CgMaximizeAlt className="text-4xl" />
//         </div> */}
//       </motion.div>

//       <div className="flex w-full items-center justify-center rounded-2xl bg-[#e4c07b] px-4 py-6 text-center">
//         <CgMaximizeAlt className="text-4xl" />
//       </div>
//       <div className="flex w-full items-center justify-center rounded-2xl bg-[#e06c75] px-4 py-6 text-center">
//         <CgMaximizeAlt className="text-4xl" />
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgMaximizeAlt } from "react-icons/cg";

const ExpandableCardList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-start overflow-hidden p-20 px-4">
      {["blue", "yellow", "red"].map((color, index) => (
        <motion.div
          key={index}
          layout
          className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-xl text-white bg-${
            color === "blue"
              ? "[#61afef]"
              : color === "yellow"
                ? "[#e4c07b]"
                : "[#e06c75]"
          }`}
          onClick={() => toggleExpand(index)}
          animate={{
            height: expandedIndex === index ? 380 : 80,
            marginTop: expandedIndex === index && index === 0 ? 0 : 10,
            marginBottom: expandedIndex === index && index === 2 ? 0 : 10,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            // damping: 20,
          }}
        >
          {expandedIndex === index ? (
            <React.Fragment>
              <div className="flex h-full w-full flex-col overflow-hidden p-4">
                <img
                  src="/images/aws-cert.jpg"
                  className="h-40 w-full rounded-md object-cover"
                />
                <h2 className="mt-5 text-lg font-bold">Fast API</h2>
                <p className="text-sm text-ellipsis">i love pdf</p>
                <button className="mt-20 rounded-lg bg-white px-4 py-2 font-semibold text-black">
                  SEE DEMO
                </button>
              </div>
            </React.Fragment>
          ) : (
            <CgMaximizeAlt className="text-4xl" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ExpandableCardList;
