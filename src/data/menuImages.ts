// Per-item image mapping for unique hover images
import earlGreyPoundCake from "@/assets/menu/items/earl-grey-pound-cake.jpg";
import cookiesCreamPoundCake from "@/assets/menu/items/cookies-cream-pound-cake.jpg";
import basqueCheesecake from "@/assets/menu/items/basque-cheesecake.jpg";
import tiramisuCheesecake from "@/assets/menu/items/tiramisu-cheesecake.jpg";
import almondCroissant from "@/assets/menu/items/almond-croissant.jpg";
import tripleCheeseCroissant from "@/assets/menu/items/triple-cheese-croissant.jpg";
import redVelvetBliss from "@/assets/menu/items/red-velvet-bliss.jpg";
import crookie from "@/assets/menu/items/crookie.jpg";
import flatWhite from "@/assets/menu/items/flat-white.jpg";
import cafeLatte from "@/assets/menu/items/cafe-latte.jpg";
import dirtyMatcha from "@/assets/menu/items/dirty-matcha.jpg";
import iceMatchaLatte from "@/assets/menu/items/ice-matcha-latte.jpg";
import grilledCheese from "@/assets/menu/items/grilled-cheese.jpg";
import englishBreakfast from "@/assets/menu/items/english-breakfast.jpg";
import truffleFries from "@/assets/menu/items/truffle-fries.jpg";
import chickenPopcorn from "@/assets/menu/items/chicken-popcorn.jpg";

// Maps item name to its unique image
export const itemImages: Record<string, string> = {
  "Earl Grey Pound Cake": earlGreyPoundCake,
  "Cookies & Cream Pound Cake": cookiesCreamPoundCake,
  "Basque Cheesecake": basqueCheesecake,
  "Tiramisu Cheesecake": tiramisuCheesecake,
  "Almond Croissant": almondCroissant,
  "Triple Cheese Croissant": tripleCheeseCroissant,
  "Red Velvet Bliss": redVelvetBliss,
  "Crookie": crookie,
  "Flat White": flatWhite,
  "Cafe Latte": cafeLatte,
  "Dirty Matcha": dirtyMatcha,
  "Ice Matcha Latte": iceMatchaLatte,
  "Grilled Cheese": grilledCheese,
  "English Breakfast": englishBreakfast,
  "Parmesan Truffle French Fries": truffleFries,
  "Chicken Popcorn": chickenPopcorn,
};

export function getItemImage(itemName: string): string | undefined {
  return itemImages[itemName];
}
