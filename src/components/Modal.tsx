import { useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
//
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handles closing of modal when clicking outside of it
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }} // Fade-in effect
          animate={{ opacity: 1 }} // Full opacity when open
          exit={{ opacity: 0 }} // Fade-out effect
          onClick={handleOverlayClick}
        >
          <motion.div
            className="w-[90%] max-w-md rounded-2xl bg-[#262626] p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }} // Pop-out effect
            animate={{ opacity: 1, scale: 1 }} // Full visibility & normal scale
            exit={{ opacity: 0, scale: 0.8 }} // Shrink & fade-out
            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
