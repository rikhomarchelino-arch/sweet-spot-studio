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
          { name: "Earl Grey Pound Cake", price: "30", tags: ["Sweet", "Soft", "Zesty"] },
          { name: "Cookies & Cream Pound Cake", price: "30", tags: ["Sweet", "Dense", "Caramelized"] },
          { name: "Chocolate Pound Cake", price: "30", tags: ["Rich", "Moist", "Comforting"] },
          { name: "Biscoff Pound Cake", price: "30", tags: ["Sweet", "Dense", "Caramelized"] },
        ],
      },
      {
        title: "Cheesecakes",
        items: [
          { name: "Basque Cheesecake", price: "45", tags: ["Cheesy", "Soft", "Milky"] },
          { name: "Tiramisu Cheesecake", price: "50", tags: ["Soft", "Coffee", "Nutty"] },
          { name: "Matcha Melt Cheesecake", price: "65", tags: ["Soft", "Creamy", "Bitter"] },
        ],
      },
      {
        title: "Whole Cakes",
        items: [
          { name: "Lychee Strawberry Shortcake", price: "255/40", description: "Whole Cake/Sliced" },
          { name: "Earl Grey", price: "315/40", description: "Whole Cake/Sliced" },
          { name: "Lemon Mandarin", price: "235/40", description: "Whole Cake/Sliced" },
          { name: "Jasmine", price: "315", description: "Whole Cake" },
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
          { name: "Almond Croissant", price: "28", tags: ["Creamy", "Flaky", "Nutty"] },
          { name: "Triple Cheese Croissant", price: "35", tags: ["Cheesy", "Flaky"] },
          { name: "Pistachio Kunafe Croissant", price: "40", tags: ["Flaky", "Nutty", "Sweet", "Crunchy"] },
          { name: "Korean Garlic Croissant", price: "35", tags: ["Garlic", "Flaky", "Creamy"] },
          { name: "Butter Croissant", price: "20", tags: ["Buttery", "Flaky", "The O.G"] },
          { name: "Ham & Cheese Croissant", price: "32.5", tags: ["Cheesy", "Meaty", "Flaky"] },
        ],
      },
      {
        title: "Specialty",
        items: [
          { name: "Red Velvet Bliss", price: "40", tags: ["Flaky", "Sweet", "Cheesy"] },
          { name: "Crookie", price: "35", tags: ["Caramelized", "Nutty"] },
          { name: "Ferrero Forest", price: "40", tags: ["Sweet", "Bitter", "Chocolaty"] },
          { name: "Dochi", price: "32", tags: ["Sweet", "Soft", "Chewy"] },
          { name: "Kouign Amann", price: "20", tags: ["Buttery", "Flaky", "Sweet"] },
          { name: "Yuzu Madeleine", price: "17.5", tags: ["Sweet Sour", "Soft", "Refreshing"] },
          { name: "Cinnamon Monkey Bread", price: "25", tags: ["Sweet", "Spices", "Flaky"] },
          { name: "Rusty Mochi Brownchiz", price: "50", tags: ["Stretchy", "Cheesy", "Fudgy"] },
          { name: "Pain Au Chocolate", price: "25", tags: ["Buttery", "Flaky", "Chocolaty"] },
          { name: "Original Canelé", price: "25", tags: ["Caramelized", "Soft", "O.G Taste"] },
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
          { name: "Flat White", price: "25", description: "Hot only" },
          { name: "Espresso", price: "22", description: "Hot only" },
          { name: "Americano", price: "25", description: "Hot & Iced" },
          { name: "Cappuccino", price: "25", description: "Hot & Iced" },
          { name: "Cafe Latte", price: "25.5", description: "Hot & Iced" },
          { name: "Magic", price: "32", description: "Hot only" },
          { name: "Cafe Mocha", price: "32", description: "Hot & Iced" },
          { name: "Shaken Espresso", price: "32.5", description: "Iced only" },
        ],
      },
      {
        title: "Flavoured Latte",
        items: [
          { name: "Downtown", price: "32", description: "Arabica, Secret Milk, Cookies" },
          { name: "Ratatouille", price: "32", description: "Arabica, Secret Milk, Cream Cheese, Berry, Cookies" },
          { name: "Pistachio Latte", price: "32", description: "Arabica, Secret Milk, Pistachio, Pandan, Cookies" },
          { name: "Butterscotch Latte", price: "32", description: "Arabica, Secret Milk, Butterscotch, Cookies" },
          { name: "Cola de Mono", price: "33", description: "Arabica, Secret Milk, Cinnamon, Palm Sugar, Vanilla Creme" },
        ],
      },
      {
        title: "Tea Selection",
        items: [
          { name: "Rose French Vanilla", price: "35" },
          { name: "Chamomile", price: "35" },
          { name: "Earl Grey", price: "35" },
          { name: "Iced Tea", price: "23" },
        ],
      },
      {
        title: "Matcha Series",
        items: [
          { name: "Dirty Matcha", price: "45" },
          { name: "Ice Matcha Latte", price: "50" },
          { name: "Hot Matcha Latte", price: "50" },
          { name: "Matcha Blossom", price: "45" },
          { name: "Matcha Parfait", price: "45" },
          { name: "Matcha Pistachio", price: "45" },
          
        ],
      },
      {
        title: "Classic Blended",
        items: [
          { name: "Cendol Chocomalt", price: "35", description: "Pandan, Premium Chocolate, Secret Milk, Ice Cream, Traditional Cendol" },
          { name: "Amarena Cherry", price: "35", description: "Amarena Cherry, Secret Milk, Ice Cream" },
          
          { name: "Delimington", price: "38.5", description: "Espresso, Premium Chocolate, Almond Milk, Ice Cream" },
          { name: "Ube & Cheese", price: "35", description: "Homemade Ube, Cream Cheese, Secret Milk, Ice Cream" },
          { name: "Strawberry Shortcake", price: "35", description: "Strawberry, Lychee, Peanut, Cheese, Skimmed Milk, Ice Cream" },
        ],
      },
      {
        title: "Mocktail Series",
        items: [
          { name: "Butter Beer", price: "32", description: "Butterscotch, Homemade Cola, Carbonated Malt, Vanilla Creme" },
          { name: "Osmanthus Guava", price: "28", description: "Osmanthus, Red Apple Cider, Guava, Lemon" },
          { name: "P & P", price: "28", description: "Pandan, Jasmine Tea, Pineapple Juice, Coconut Seltzer" },
          { name: "Peach & Passion", price: "30", description: "Peach, Passionfruit, Lemonade, Rosemary, Soda Water" },
          { name: "Matcha Yuzu", price: "45", description: "Matcha, Lemonade, Yuzu, Soda Water" },
        ],
      },
      {
        title: "Coldbrew Series",
        items: [
          { name: "Caffeinated", price: "30", description: "Coldbrew, Sweet Herb, Jasmine, Carbonated Malt, Bitter Chocolate" },
          { name: "Melbourne", price: "25", description: "Coldbrew, Orange Peels" },
          { name: "Mango Sticky Rice", price: "32", description: "Coldbrew, Mango, Coconut Flakes, Vanilla Creme" },
          { name: "Dream Cotton", price: "32", description: "Coldbrew, Caramel, Peach, Pineapple, Orange" },
          { name: "Cofee Blossom", price: "30", description: "Coldbrew, Rose, Palm, Apple Syrup" },
        ],
      },
      {
        title: "Tea Series",
        items: [
          { name: "Apple Chai", price: "25", description: "Red Apple Cider, Staranise, Assamica Black Tea" },
          { name: "Lychee Tea", price: "25", description: "Jasmine, Lychee, Assamica Black Tea" },
          { name: "Lazy Lemon", price: "25", description: "Jasmine Green Tea, Lemonade, Peach, Passionfruit" },
          { name: "Osmanthus Milk Tea", price: "28", description: "Osmanthus, Premium Black Tea, Secret Milk" },
        ],
      },
      {
        title: "Lonely But Famous",
        items: [
          { name: "Hot Chocolate", price: "30" },
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
          { name: "Grilled Cheese", price: "45", description: "2 Types of Cheese (Chedar & Mozarela), Served with Tomato Soup" },
          { name: "English Breakfast", price: "55", description: "Sourdough, Pan Seared Tomato, Spinach, Baked Beans, Sauteed Mushroom, Beef Ham, Chicken Sausages, Eggs" },
        ],
      },
      {
        title: "Light Bites",
        items: [
          { name: "Parmesan Truffle French Fries", price: "50", description: "French Fries, Truffle Oil, Parmesan Cheese" },
          { name: "Chicken Popcorn", price: "35", description: "Chicken Thigh, Cherry Tomato, TPC Seasoning" },
          { name: "Corn Ribs", price: "30", description: "Fried Corn Ribs, Cocktail Mayo, Hot Sauce, Parmesan Cheese" },
        ],
      },
      {
        title: "The Perfect Brunch",
        items: [
          { name: "Salmon Truffle Scramble", price: "55", description: "Homemade Sourdough, Smoked Salmon, Truffle Oil, Scrambled Egg" },
          { name: "Avocado Toast", price: "55", description: "Homemade Sourdough, Guacamole, Ham, Mushroom, Poached Egg" },
          { name: "Smoothie Bowl", price: "40", description: "Dragon Fruit Yogurt Blend, Berries, Banana, Kiwi, Granola" },
        ],
      },
      {
        title: "Sandwiches Club",
        items: [
          { name: "Katsu Sando", price: "45", description: "Homemade Brioche, Chicken Breast, Katsu Sauce, Coleslaw" },
          { name: "Philly Cheese Steak", price: "55", description: "Homemade Ciabatta, Sliced Beef, Cajun Spice, Cheese Sauce, Sauteed Onion Paprika" },
          { name: "Club Sandwich", price: "50", description: "Homemade Brioche, Katsu Chicken Breast, Egg, Veggies" },
        ],
      },
      {
        title: "Italian Noodles",
        items: [
          { name: "Creamy Basil Pesto Pasta", price: "45", description: "Spaghetti, Basil Pesto, Parmesan Cheese" },
          { name: "Creamy Gochujang Pasta", price: "45", description: "Spaghetti, Prawn, Gochujang, Parmesan Cheese" },
          { name: "Prawn Aglio Olio", price: "45", description: "Spaghetti, Prawn, Chilli, Parmesan Cheese" },
          { name: "Katsu Carbonara", price: "55", description: "Spaghetti, Chicken Katsu, Creamy Onion, Parmesan Cheese" },
        ],
      },
      {
        title: "The Hunger Solution",
        items: [
          { name: "Kimchi Reuben Sandwich", price: "55", description: "Sourdough, Beef Shortplate, Kimchi, Kimchi Mayo, Mozzarella Cheese" },
          { name: "Chicken Parmigiana", price: "55", description: "Breaded Chicken, Mashed Potato, Mozzarella & Parmesan Cheese" },
          { name: "Chickencado", price: "50", description: "Ciabatta, Basil Pesto, Chicken, Avocado, Mozzarella Cheese" },
        ],
      },
      {
        title: "Main Courses",
        items: [
          { name: "Balinese Fried Rice", price: "42.5", description: "Basegenap Fried Rice, Serai Limo Chicken, Kecombrang, Sunny Side Up" },
          { name: "Ayam Betutu", price: "47.5", description: "Betutu Fried Chicken, Urap, Rice, Sambal Matah, Sambal Mbe" },
          { name: "Korean Beef Bowl", price: "60", description: "Beef Short Plate, Rice, Korean Sauce, Mushroom, Poached Egg" },
        ],
      },
      {
        title: "Flavorful Chicken",
        items: [
          { name: "Korean Chicken Wings", price: "35" },
          { name: "Ayam Woku", price: "40" },
          { name: "Honey Garlic Wings", price: "32" },
          { name: "Cajun Chicken Wings", price: "32" },
          { name: "Chicken Salted Egg", price: "40" },
          { name: "Grilled Chicken Thai", price: "40" },
          { name: "Chicken Katsu Curry", price: "40" },
          { name: "Creamy Chicken Mushroom", price: "50" },
          { name: "Omurice", price: "40" },
        ],
      },
      {
        title: "The Toast Section",
        tagline: "Need something sweet to boost your day?",
        items: [
          { name: "Milo Dino", price: "35", description: "French Toast with Milo Bath" },
          { name: "Cream Cheese Brulee", price: "38", description: "French Toast with Cream Cheese Brulee Bath" },
          { name: "Tiramisu", price: "40", description: "French Toast with Tiramisu Bath" },
          { name: "Matcha", price: "40", description: "French Toast with Matcha Bath" },
        ],
      },
      {
        title: "The Sweets",
        items: [
          { name: "French Toast", price: "55", description: "Homemade Brioche, Granola, Berries, Banana, Soft Served Ice Cream" },
        ],
      },
    ],
  },
];
