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
          { name: "Earl Grey Pound Cake", price: "$8.50", tags: ["Sweet", "Soft", "Zesty"] },
          { name: "Cookies & Cream Pound Cake", price: "$8.50", tags: ["Sweet", "Dense", "Caramelized"] },
        ],
      },
      {
        title: "Cheesecakes",
        items: [
          { name: "Basque Cheesecake", price: "$12.50", tags: ["Cheesy", "Soft", "Milky"] },
          { name: "Tiramisu Cheesecake", price: "$14.00", tags: ["Soft", "Coffee", "Nutty"] },
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
          { name: "Almond Croissant", price: "$7.50", tags: ["Creamy", "Flaky", "Nutty"] },
          { name: "Triple Cheese Croissant", price: "$9.50", tags: ["Cheesy", "Flaky"] },
        ],
      },
      {
        title: "Specialty",
        items: [
          { name: "Red Velvet Bliss", price: "$11.00", tags: ["Flaky", "Sweet", "Cheesy"] },
          { name: "Crookie", price: "$9.50", tags: ["Caramelized", "Nutty"] },
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
          { name: "Flat White", price: "$6.50", description: "Hot only" },
          { name: "Cafe Latte", price: "$7.00", description: "Hot & Iced" },
        ],
      },
      {
        title: "Matcha Series",
        items: [
          { name: "Dirty Matcha", price: "$12.00" },
          { name: "Ice Matcha Latte", price: "$13.50" },
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
          { name: "Grilled Cheese", price: "$12.00", description: "2 Types of Cheese, Served with Tomato Soup" },
          { name: "English Breakfast", price: "$15.00", description: "Sourdough, Tomato, Spinach, Beans, Mushroom, Sausages, Eggs" },
        ],
      },
      {
        title: "Light Bites",
        items: [
          { name: "Parmesan Truffle French Fries", price: "$13.50", description: "French Fries, Truffle Oil, Parmesan Cheese" },
          { name: "Chicken Popcorn", price: "$9.50", description: "Chicken Thigh, Cherry Tomato, TPC Seasoning" },
        ],
      },
    ],
  },
];
