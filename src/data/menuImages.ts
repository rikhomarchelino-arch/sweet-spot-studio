// Sub-category level image mapping for menu items
import poundCake from "@/assets/menu/pound-cake.jpg";
import cheesecake from "@/assets/menu/cheesecake.jpg";
import wholeCake from "@/assets/menu/whole-cake.jpg";
import croissant from "@/assets/menu/croissant.jpg";
import pastrySpecialty from "@/assets/menu/pastry-specialty.jpg";
import coffee from "@/assets/menu/coffee.jpg";
import matcha from "@/assets/menu/matcha.jpg";
import mocktail from "@/assets/menu/mocktail.jpg";
import tea from "@/assets/menu/tea.jpg";
import blended from "@/assets/menu/blended.jpg";
import coldbrew from "@/assets/menu/coldbrew.jpg";
import hotChocolate from "@/assets/menu/hot-chocolate.jpg";
import breakfast from "@/assets/menu/breakfast.jpg";
import brunch from "@/assets/menu/brunch.jpg";
import sandwich from "@/assets/menu/sandwich.jpg";
import pasta from "@/assets/menu/pasta.jpg";
import chicken from "@/assets/menu/chicken.jpg";
import riceBowl from "@/assets/menu/rice-bowl.jpg";
import frenchToast from "@/assets/menu/french-toast.jpg";
import fries from "@/assets/menu/fries.jpg";

// Maps sub-category title to a representative image
export const subCategoryImages: Record<string, string> = {
  // Cakes
  "Pound Cakes": poundCake,
  "Cheesecakes": cheesecake,
  "Whole Cakes": wholeCake,
  // Pastries
  "Croissants": croissant,
  "Specialty": pastrySpecialty,
  // Drinks
  "Classic Coffee": coffee,
  "Flavoured Latte": coffee,
  "Tea Selection": tea,
  "Matcha Series": matcha,
  "Classic Blended": blended,
  "Mocktail Series": mocktail,
  "Coldbrew Series": coldbrew,
  "Tea Series": tea,
  "Lonely But Famous": hotChocolate,
  // Food
  "The Breakfast Club": breakfast,
  "Light Bites": fries,
  "The Perfect Brunch": brunch,
  "Sandwiches Club": sandwich,
  "Italian Noodles": pasta,
  "The Hunger Solution": sandwich,
  "Main Courses": riceBowl,
  "Flavorful Chicken": chicken,
  "The Toast Section": frenchToast,
  "The Sweets": frenchToast,
};

export function getItemImage(subCategoryTitle: string): string | undefined {
  return subCategoryImages[subCategoryTitle];
}
