// Per-item image mapping for unique hover images
import earlGreyPoundCake from "@/assets/menu/items/earl-grey-pound-cake.jpg";
import cookiesCreamPoundCake from "@/assets/menu/items/cookies-cream-pound-cake.jpg";
import matchaPoundCake from "@/assets/menu/items/matcha-pound-cake.jpg";
import lemonPoundCake from "@/assets/menu/items/lemon-pound-cake.jpg";
import basqueCheesecake from "@/assets/menu/items/basque-cheesecake.jpg";
import tiramisuCheesecake from "@/assets/menu/items/tiramisu-cheesecake.jpg";
import strawberryCheesecake from "@/assets/menu/items/strawberry-cheesecake.jpg";
import chocolateCheesecake from "@/assets/menu/items/chocolate-cheesecake.jpg";
import almondCroissant from "@/assets/menu/items/almond-croissant.jpg";
import tripleCheeseCroissant from "@/assets/menu/items/triple-cheese-croissant.jpg";
import chocolateCroissant from "@/assets/menu/items/chocolate-croissant.jpg";
import butterCroissant from "@/assets/menu/items/butter-croissant.jpg";
import pistachioCroissant from "@/assets/menu/items/pistachio-croissant.jpg";
import redVelvetBliss from "@/assets/menu/items/red-velvet-bliss.jpg";
import crookie from "@/assets/menu/items/crookie.jpg";
import painAuChocolat from "@/assets/menu/items/pain-au-chocolat.jpg";
import kouignAmann from "@/assets/menu/items/kouign-amann.jpg";
import flatWhite from "@/assets/menu/items/flat-white.jpg";
import cafeLatte from "@/assets/menu/items/cafe-latte.jpg";
import espresso from "@/assets/menu/items/espresso.jpg";
import cappuccino from "@/assets/menu/items/cappuccino.jpg";
import americano from "@/assets/menu/items/americano.jpg";
import mocha from "@/assets/menu/items/mocha.jpg";
import dirtyMatcha from "@/assets/menu/items/dirty-matcha.jpg";
import iceMatchaLatte from "@/assets/menu/items/ice-matcha-latte.jpg";
import hojichaLatte from "@/assets/menu/items/hojicha-latte.jpg";
import strawberryMatcha from "@/assets/menu/items/strawberry-matcha.jpg";
import matchaEspresso from "@/assets/menu/items/matcha-espresso.jpg";
import yuzuMatcha from "@/assets/menu/items/yuzu-matcha.jpg";
import grilledCheese from "@/assets/menu/items/grilled-cheese.jpg";
import englishBreakfast from "@/assets/menu/items/english-breakfast.jpg";
import truffleFries from "@/assets/menu/items/truffle-fries.jpg";
import chickenPopcorn from "@/assets/menu/items/chicken-popcorn.jpg";

export const itemImages: Record<string, string> = {
  "Earl Grey Pound Cake": earlGreyPoundCake,
  "Cookies & Cream Pound Cake": cookiesCreamPoundCake,
  "Matcha Pound Cake": matchaPoundCake,
  "Lemon Pound Cake": lemonPoundCake,
  "Basque Cheesecake": basqueCheesecake,
  "Tiramisu Cheesecake": tiramisuCheesecake,
  "Strawberry Cheesecake": strawberryCheesecake,
  "Chocolate Cheesecake": chocolateCheesecake,
  "Almond Croissant": almondCroissant,
  "Triple Cheese Croissant": tripleCheeseCroissant,
  "Chocolate Croissant": chocolateCroissant,
  "Butter Croissant": butterCroissant,
  "Pistachio Croissant": pistachioCroissant,
  "Red Velvet Bliss": redVelvetBliss,
  "Crookie": crookie,
  "Pain au Chocolat": painAuChocolat,
  "Kouign-Amann": kouignAmann,
  "Flat White": flatWhite,
  "Cafe Latte": cafeLatte,
  "Espresso": espresso,
  "Cappuccino": cappuccino,
  "Americano": americano,
  "Mocha": mocha,
  "Dirty Matcha": dirtyMatcha,
  "Ice Matcha Latte": iceMatchaLatte,
  "Hojicha Latte": hojichaLatte,
  "Strawberry Matcha": strawberryMatcha,
  "Matcha Espresso": matchaEspresso,
  "Yuzu Matcha": yuzuMatcha,
  "Grilled Cheese": grilledCheese,
  "English Breakfast": englishBreakfast,
  "Parmesan Truffle French Fries": truffleFries,
  "Chicken Popcorn": chickenPopcorn,
};

export function getItemImage(itemName: string): string | undefined {
  return itemImages[itemName];
}
