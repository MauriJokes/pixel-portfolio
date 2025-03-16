import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ChevronAnimation: React.FC = () => {
  const chevronVariants = {
    initial: { opacity: 0, scale: 0.3, y: 0 },
    animate: (delay: number) => ({
      opacity: [0, 1, 1, 1, 0],
      y: [0, 24, 36, 56],
      scale: [0.3, 1, 1, 0.5],
      transition: {
        duration: 3,
        ease: "easeOut",
        repeat: Infinity,
        delay,
      },
    }),
  };

  return (
    <div className="fixed bottom-20 left-1/2 flex -translate-x-1/2 transform items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          initial="initial"
          animate="animate"
          variants={chevronVariants}
          className="absolute text-white"
        >
          <FaChevronDown size={24} />
        </motion.div>
      ))}
    </div>
  );
};

export default ChevronAnimation;
