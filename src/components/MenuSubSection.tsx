import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MenuItemRow from "@/components/MenuItemRow";
import type { MenuSubCategory } from "@/data/menuData";
import { getItemImage } from "@/data/menuImages";

interface MenuSubSectionProps {
  subCategory: MenuSubCategory;
}

const MenuSubSection = ({ subCategory }: MenuSubSectionProps) => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.05 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const image = getItemImage(subCategory.title);

  const handleToggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div ref={ref} className="mb-10 last:mb-0">
      <div className="mb-4">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          {subCategory.title}
        </h3>
        {subCategory.tagline && (
          <p className="mt-1 text-sm text-muted-foreground font-body italic">
            {subCategory.tagline}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        {subCategory.items.map((item, i) => (
          <MenuItemRow
            key={item.name}
            item={item}
            index={i}
            isRevealed={isRevealed}
            image={image}
            isExpanded={expandedIndex === i}
            onToggleExpand={() => handleToggleExpand(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSubSection;
