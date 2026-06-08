import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MenuItem from './models/MenuItem.js';

dotenv.config();

const menuItems = [
  // --- FOOD (Sandwiches, Burgers, Subs, Breakfast) ---
  {
    name: 'The Dee Signature Sandwich',
    description: 'Our house special sandwich, layered to perfection with premium ingredients.',
    price: 1250,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=600',
    isFeatured: true
  },
  {
    name: 'The Heritage Club Sandwich',
    description: 'A timeless classic layered with premium chicken ham, sliced egg, rich cheese, fresh tomatoes, and crisp greens.',
    price: 1800,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1567234665766-49ad348b6170?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'The Deelectaa Grand Burger',
    description: 'House specialty, stacked high with premium ingredients, melted cheese, and our secret signature sauce. Served with French fries.',
    price: 1850,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    isFeatured: true
  },
  {
    name: 'Dee Smoked Beef Burger',
    description: 'Juicy, smoky beef patty smothered in rich cheese, topped with crisp onions and BBQ glaze. Served with French fries.',
    price: 2250,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Slow-Roasted Beef & Cheese Sub',
    description: 'Tender beef slices with grilled bell peppers, caramelized onions and melted cheddar.',
    price: 2500,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'The Sunrise Breakfast Combo',
    description: 'Golden Waffles or Fluffy Pancakes. Select your base: Chocolate or Honey / fruit / whipped cream.',
    price: 1900,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },

  // --- COFFEE (Warm Brews) ---
  {
    name: 'Velvet Cafe Mocha',
    description: 'Espresso and steamed milk with a rich chocolate blend.',
    price: 950,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Silky Cafe Latte',
    description: 'Smooth espresso blended with gently steamed milk.',
    price: 750,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Velvet Caramel Macchiato',
    description: 'Steamed milk and sweet vanilla, marked with espresso and finished with rich caramel drizzle.',
    price: 550,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600',
    isFeatured: true
  },
  {
    name: 'Classic Vanilla Affogato',
    description: 'Rich, hot espresso poured over vanilla bean ice cream.',
    price: 450,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&q=80&w=600'
  },

  // --- DRINKS (Iced, Boba, Shakes, Juices) ---
  {
    name: 'Iced Caramel Macchiato',
    description: 'Chilled milk and sweet vanilla marked with an espresso shot and caramel drizzle.',
    price: 1000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Strawberry Matcha Pearl',
    description: 'Earthy matcha layered with sweet strawberry and boba.',
    price: 900,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'The Ultimate Chocolate Fudge Shake',
    description: 'Thick, rich chocolate blended with premium ice cream.',
    price: 1300,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Signature Hibiscus Mojito',
    description: 'Floral hibiscus, mint, and lime for a refreshing kick.',
    price: 1050,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'
  },

  // --- DESSERTS ---
  {
    name: 'Classic New York Cheesecake',
    description: 'Dense, creamy, and baked to perfection with a graham cracker crust.',
    price: 700,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Rich Chocolate Lava Cake',
    description: 'Served warm with a molten chocolate center and vanilla ice cream.',
    price: 600,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=600',
    isFeatured: true
  },
  {
    name: 'Signature Tiramisu Cup',
    description: 'Layers of coffee-soaked ladyfingers and light mascarpone cream.',
    price: 600,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Warm Fudgy Walnut Brownie',
    description: 'A decadent, chewy brownie topped with vanilla Ice cream.',
    price: 400,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected to MongoDB Atlas...');
    
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items.');
    
    await MenuItem.insertMany(menuItems);
    console.log(`Successfully seeded ${menuItems.length} menu items!`);
    
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
