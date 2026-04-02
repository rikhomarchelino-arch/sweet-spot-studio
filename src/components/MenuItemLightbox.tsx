import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuItemLightboxProps {
  image: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemLightbox = ({ image, alt, isOpen, onClose }: MenuItemLightboxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-6 right-6 z-[101] p-2 rounded-full bg-card/80 border border-border/50 text-foreground hover:bg-card transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            src={image}
            alt={alt}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl object-cover shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuItemLightbox;
