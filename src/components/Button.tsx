import { motion } from "framer-motion";

interface AnimatedButtonProps {
  position: string;
  size: string;
  borderSize: string;
  bgColor: string;
  color: string;
  textSize: string;
  child: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  position,
  size,
  borderSize,
  bgColor,
  color,
  textSize,
  child,
}) => (
  <motion.button
    // className={`absolute inline-flex items-center justify-center ${position} ${borderSize} ${size} rounded-3xl ${bgColor} ${color} ${textSize}`}
    className={`absolute inline-flex items-center justify-center ${position} ${borderSize} ${size} rounded-3xl ${bgColor} ${color} ${textSize}`}
    // initial={{ opacity: 0, scale: 0.8 }}
    // animate={{ opacity: 1, scale: 1 }}
    // exit={{ opacity: 0, scale: 0.8 }}
    // transition={{ duration: 0.6, ease: "easeOut" }}
    // whileHover={{ scale: 1.1 }}
  >
    {child}
  </motion.button>
);
