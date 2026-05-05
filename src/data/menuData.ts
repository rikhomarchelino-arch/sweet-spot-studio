import categoryCakes from "@/assets/category-cakes.jpg";
import categoryPastries from "@/assets/category-pastries.jpg";
import categoryDrinks from "@/assets/category-drinks.jpg";
import categoryFood from "@/assets/category-food.jpg";

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags?: string[];
}

export interface MenuSubCategory {
  title: string;
  tagline?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  subCategories: MenuSubCategory[];
}

export const menuCategories: MenuCategory[] = [
  {
    slug: "cakes",
    name: "Cakes",
    description: "Indulge in our handcrafted cakes and cheesecakes, where each slice melts with rich, premium flavor.",
    image: categoryCakes,
    subCategories: [
      {
        title: "Pound Cakes",
        items: [
          { name: "Earl Grey Pound Cake", price: "Rp 136.000", tags: ["Sweet", "Soft", "Zesty"] },
          { name: "Cookies & Cream Pound Cake", price: "Rp 136.000", tags: ["Sweet", "Dense", "Caramelized"] },
          { name: "Matcha Pound Cake", price: "Rp 145.000", tags: ["Earthy", "Soft", "Sweet"] },
          { name: "Lemon Pound Cake", price: "Rp 130.000", tags: ["Zesty", "Soft", "Bright"] },
        ],
      },
      {
        title: "Cheesecakes",
        items: [
          { name: "Basque Cheesecake", price: "Rp 200.000", tags: ["Cheesy", "Soft", "Milky"] },
          { name: "Tiramisu Cheesecake", price: "Rp 224.000", tags: ["Soft", "Coffee", "Nutty"] },
          { name: "Strawberry Cheesecake", price: "Rp 220.000", tags: ["Fruity", "Creamy", "Sweet"] },
          { name: "Chocolate Cheesecake", price: "Rp 210.000", tags: ["Rich", "Cocoa", "Decadent"] },
        ],
      },
    ],
  },
  {
    slug: "pastries",
    name: "Pastries",
    description: "Fun fact! All of our Pastries were made with special recipes by our Master Patissier with comfort and taste as a priority.",
    image: categoryPastries,
    subCategories: [
      {
        title: "Croissants",
        items: [
          { name: "Almond Croissant", price: "Rp 120.000", tags: ["Creamy", "Flaky", "Nutty"] },
          { name: "Triple Cheese Croissant", price: "Rp 152.000", tags: ["Cheesy", "Flaky"] },
          { name: "Chocolate Croissant", price: "Rp 130.000", tags: ["Flaky", "Rich", "Sweet"] },
          { name: "Butter Croissant", price: "Rp 95.000", tags: ["Buttery", "Flaky", "Classic"] },
          { name: "Pistachio Croissant", price: "Rp 165.000", tags: ["Nutty", "Creamy", "Flaky"] },
        ],
      },
      {
        title: "Specialty",
        items: [
          { name: "Red Velvet Bliss", price: "Rp 176.000", tags: ["Flaky", "Sweet", "Cheesy"] },
          { name: "Crookie", price: "Rp 152.000", tags: ["Caramelized", "Nutty"] },
          { name: "Pain au Chocolat", price: "Rp 125.000", tags: ["Flaky", "Chocolate"] },
          { name: "Kouign-Amann", price: "Rp 140.000", tags: ["Caramelized", "Buttery", "Crisp"] },
        ],
      },
    ],
  },
  {
    slug: "drinks",
    name: "Drinks",
    description: "Refresh yourself with our handcrafted beverages, from classic coffee to artisanal blends designed to brighten your day.",
    image: categoryDrinks,
    subCategories: [
      {
        title: "Classic Coffee",
        items: [
          { name: "Flat White", price: "Rp 104.000", description: "Hot only" },
          { name: "Cafe Latte", price: "Rp 112.000", description: "Hot & Iced" },
          { name: "Espresso", price: "Rp 55.000", description: "Hot only" },
          { name: "Cappuccino", price: "Rp 75.000", description: "Hot only" },
          { name: "Americano", price: "Rp 60.000", description: "Hot & Iced" },
          { name: "Mocha", price: "Rp 95.000", description: "Hot & Iced" },
        ],
      },
      {
        title: "Matcha & Tea Series",
        items: [
          { name: "Dirty Matcha", price: "Rp 192.000" },
          { name: "Ice Matcha Latte", price: "Rp 216.000" },
          { name: "Hojicha Latte", price: "Rp 95.000", description: "Hot & Iced" },
          { name: "Strawberry Matcha", price: "Rp 110.000", description: "Iced only" },
          { name: "Matcha Espresso", price: "Rp 105.000", description: "Iced only" },
          { name: "Yuzu Matcha", price: "Rp 115.000", description: "Iced only" },
        ],
      },
    ],
  },
  {
    slug: "food",
    name: "Food",
    description: "From hearty breakfasts to satisfying mains, all crafted by our Master Patissier with comfort and taste as a priority.",
    image: categoryFood,
    subCategories: [
      {
        title: "The Breakfast Club",
        tagline: "Good morning! Are you ready to start your day?",
        items: [
          { name: "Grilled Cheese", price: "Rp 192.000", description: "2 Types of Cheese, Served with Tomato Soup" },
          { name: "English Breakfast", price: "Rp 240.000", description: "Sourdough, Tomato, Spinach, Beans, Mushroom, Sausages, Eggs" },
        ],
      },
      {
        title: "Light Bites",
        items: [
          { name: "Parmesan Truffle French Fries", price: "Rp 216.000", description: "French Fries, Truffle Oil, Parmesan Cheese" },
          { name: "Chicken Popcorn", price: "Rp 152.000", description: "Chicken Thigh, Cherry Tomato, TPC Seasoning" },
        ],
      },
    ],
  },
];
