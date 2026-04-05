import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MenuItem } from "@/data/menuData";
import { useIsMobile } from "@/hooks/use-mobile";
import MenuItemLightbox from "@/components/MenuItemLightbox";

interface MenuItemRowProps {
  item: MenuItem;
  index: number;
  isRevealed: boolean;
  image?: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const MenuItemRow = ({ item, index, isRevealed, image, isExpanded, onToggleExpand }: MenuItemRowProps) => {
  const isMobile = useIsMobile();
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !image) return;
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHoverPos({
      x: e.clientX - rect.left + 16,
      y: e.clientY - rect.top - 80,
    });
  };

  const handleMouseEnter = () => {
    if (!isMobile && image) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    if (isMobile && image && onToggleExpand) {
      onToggleExpand();
    }
  };

  return (
    <>
      <motion.div
        ref={rowRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className={`group relative flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-border/50 last:border-b-0 hover:bg-card/50 transition-colors duration-300 px-2 md:px-4 rounded-lg -mx-2 md:-mx-4 ${isMobile && image ? "cursor-pointer" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3">
            <h4 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
              {item.name}
            </h4>
            <div className="hidden md:block flex-1 border-b border-dotted border-border/40 min-w-[2rem]" />
          </div>
          {item.description && (
            <p className="mt-0.5 text-sm text-muted-foreground font-body line-clamp-1">
              {item.description}
            </p>
          )}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-shrink-0 text-right">
          <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
            {item.price}
          </span>
        </div>

        {/* Desktop: cursor-following hover image */}
        {!isMobile && image && (
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-none absolute z-50"
                style={{
                  left: hoverPos.x,
                  top: hoverPos.y,
                }}
              >
                <img
                  src={image}
                  alt={item.name}
                  className="w-40 h-40 rounded-xl object-cover shadow-2xl border border-border/30"
                  loading="lazy"
                  width={160}
                  height={160}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Mobile: expandable accordion image */}
      {isMobile && image && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-2 pb-4 pt-1">
                <motion.img
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  src={image}
                  alt={item.name}
                  className="w-full aspect-square rounded-xl object-cover border border-border/30 cursor-pointer"
                  loading="lazy"
                  width={640}
                  height={640}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <MenuItemLightbox
        image={image || ""}
        alt={item.name}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default MenuItemRow;
