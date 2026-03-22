import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menuData";

interface MenuItemRowProps {
  item: MenuItem;
  index: number;
  isRevealed: boolean;
}

const MenuItemRow = ({ item, index, isRevealed }: MenuItemRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-border/50 last:border-b-0 hover:bg-card/50 transition-colors duration-300 px-2 md:px-4 rounded-lg -mx-2 md:-mx-4">
      
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
            {item.name}
          </h4>
          <div className="hidden md:block flex-1 border-b border-dotted border-border/40 min-w-[2rem]" />
        </div>
        {item.description &&
        <p className="mt-0.5 text-sm text-muted-foreground font-body line-clamp-1">
            {item.description}
          </p>
        }
        {item.tags && item.tags.length > 0 &&
        <div className="mt-1.5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        }
      </div>
      <div className="flex-shrink-0 text-right">
        <span className="font-display text-xl md:text-2xl font-semibold">
          <span className="text-primary text-sm mr-0.5">Rp</span>
          <span className="text-foreground">{item.price}</span>
          <span className="text-muted-foreground text-xs font-body">K</span>
        </span>
      </div>
    </motion.div>);

};

export default MenuItemRow;