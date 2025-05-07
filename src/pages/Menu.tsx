import React from "react";
import MenuCategory from "@/components/MenuCategory";

const Menu = () => {
  // Teas
  const teas = [
    { name: "Chai Tea", description: "Classic masala-spiced brew", price: "₹10/₹15", tags: ["spicy", "hot"] },
    { name: "Elaichi Tea", description: "Fragrant cardamom infusion", price: "₹15/₹20", tags: ["aromatic", "hot"] },
    { name: "Masala Tea", description: "Bold spice blend", price: "₹15/₹20", tags: ["bold", "hot"] },
    { name: "Ginger Tea", description: "Zingy ginger kick", price: "₹15/₹20", tags: ["ginger", "hot"] },
    { name: "Lemon Tea", description: "Bright citrus notes", price: "₹15/₹20", tags: ["citrus", "hot"] },
    { name: "Black Tea", description: "Robust, straight-up black", price: "₹15", tags: ["strong", "hot"] },
    { name: "Green Tea", description: "Light and refreshing", price: "₹15", tags: ["light", "hot"] },
    { name: "Kulhad Tea", description: "Earthy clay-cup flavor", price: "₹30", tags: ["traditional", "hot"] },
    { name: "Kashmiri Kahwah", description: "Saffron & nut infusion", price: "₹30", tags: ["luxury", "hot"] },
    { name: "Kesar Elaichi", description: "Saffron-cardamom blend", price: "₹30", tags: ["premium", "hot"] },
  ];

  // Coffees
  const coffees = [
    { name: "Instant Coffee", description: "Quick & easy", price: "₹15/₹20", tags: ["hot"] },
    { name: "Filter Coffee", description: "South Indian kappi", price: "₹15/₹20", tags: ["hot", "strong"] },
    { name: "Black Coffee", description: "Pure, no milk", price: "₹15", tags: ["hot", "strong"] },
  ];

  // Snacks
  const snacks = [
    { name: "Biscuit", description: "Buttery tea-time nibble", price: "₹5", tags: ["veg"] },
    { name: "Bread Butter", description: "Creamy buttery toast", price: "₹30", tags: ["veg"] },
    { name: "Bread Jam", description: "Sweet fruit spread", price: "₹30", tags: ["veg"] },
    { name: "Bread Omelette", description: "Eggy goodness", price: "₹60", tags: ["egg"] },
    { name: "Bun Masala Omelette", description: "Spiced egg bun", price: "₹75", tags: ["egg","spicy"] },
    { name: "Bun Maska", description: "Soft bun & butter", price: "₹45", tags: ["veg"] },
    { name: "French Fries", description: "Golden potato fries", price: "₹70", tags: ["veg","fried"] },
    { name: "Peri Peri Fries", description: "Spicy chilli fries", price: "₹80", tags: ["veg","spicy","fried"] },
    { name: "Garlic Pops", description: "Crispy garlic bites", price: "₹90", tags: ["veg","fried"] },
  ];

  // Sandwiches
  const sandwiches = [
    { name: "Veg Grill Sandwich", description: "Mixed veggies & cheese", price: "₹60", tags: ["veg"] },
    { name: "Egg Grill Sandwich", description: "Grilled egg & mayo", price: "₹70", tags: ["egg"] },
    { name: "Schezwan Grill Sandwich", description: "Fiery Indo-Chinese", price: "₹70", tags: ["veg","spicy"] },
    { name: "Peri Peri Grill Sandwich", description: "Chilli-lime punch", price: "₹70", tags: ["veg","spicy"] },
    { name: "Cheese Chilli Grill", description: "Cheesy heat", price: "₹80", tags: ["veg","spicy"] },
    { name: "Paneer Grill Sandwich", description: "Cottage cheese delight", price: "₹80", tags: ["veg"] },
    { name: "Corn & Cheese Grill", description: "Sweet & cheesy", price: "₹80", tags: ["veg"] },
  ];

  // Hot Milk & Shakes
  const hotMilk = [
    { name: "Plain Milk", description: "Steamed to order", price: "₹5/₹10", tags: ["hot"] },
    { name: "Turmeric Milk", description: "Golden health tonic", price: "₹15", tags: ["healthy"] },
    { name: "Badam Milk", description: "Almond-scented", price: "₹20", tags: ["nutty"] },
    { name: "Bournvita/Horlicks", description: "Chocolate malt", price: "₹20", tags: ["kids"] },
    { name: "Hot Chocolate", description: "Classic cocoa", price: "₹30", tags: ["chocolate"] },
  ];
  const milkShakes = [
    { name: "Vanilla Shake", description: "Creamy vanilla", price: "₹60", tags: ["cold"] },
    { name: "Banana Shake", description: "Ripe banana blend", price: "₹60", tags: ["cold"] },
    { name: "Strawberry Shake", description: "Fresh berries", price: "₹60", tags: ["cold"] },
    { name: "Belgian Chocolate", description: "Rich cocoa blast", price: "₹70", tags: ["cold","chocolate"] },
    { name: "Oreo Shake", description: "Cookie crunch", price: "₹70", tags: ["cold","dessert"] },
    { name: "Mango Shake", description: "Peak-season mango", price: "₹70", tags: ["cold","seasonal"] },
    { name: "Butterscotch Shake", description: "Caramel notes", price: "₹80", tags: ["cold"] },
    { name: "Dry Fruit Shake", description: "Nutty medley", price: "₹90", tags: ["cold","premium"] },
    { name: "Brownie Shake", description: "Decadent dessert", price: "₹90", tags: ["cold","dessert"] },
    { name: "Nutella Shake", description: "Hazelnut spread", price: "₹90", tags: ["cold","chocolate"] },
    { name: "Ferrero Rocher", description: "Luxurious blend", price: "₹90", tags: ["cold","premium"] },
  ];

  // Cold Coffees & Summer Chills
  const coldCoffees = [
    { name: "Classic Cold Coffee", description: "Blended & chilled", price: "₹60", tags: ["cold"] },
    { name: "Caramel Coffee", description: "Sweet caramel swirl", price: "₹70", tags: ["cold"] },
    { name: "Belgian Coffee", description: "Chocolate infusion", price: "₹70", tags: ["cold"] },
    { name: "KitKat Coffee", description: "Cookie fragments", price: "₹80", tags: ["cold","dessert"] },
    { name: "Italian Coffee", description: "Espresso chill", price: "₹80", tags: ["cold","strong"] },
  ];
  const summerChills = [
    { name: "Buttermilk", description: "Tangy & refreshing", price: "₹20", tags: ["cold","veg"] },
    { name: "Rose Milk", description: "Floral sweetness", price: "₹40", tags: ["cold"] },
    { name: "Badam Milk", description: "Chilled almond", price: "₹40", tags: ["cold","nutty"] },
    { name: "Sweet Lassi", description: "Yogurt delight", price: "₹60", tags: ["cold","veg"] },
    { name: "Kesar Badam Lassi", description: "Saffron & almond", price: "₹60", tags: ["cold","premium"] },
    { name: "Lemon Iced Tea", description: "Cool citrus brew", price: "₹60", tags: ["cold","citrus"] },
    { name: "Peach Iced Tea", description: "Stone-fruit sip", price: "₹70", tags: ["cold","fruit"] },
    { name: "Blueberry Iced Tea", description: "Berry infusion", price: "₹80", tags: ["cold","fruit"] },
    { name: "Very Berry Smoothie", description: "Mixed berry blend", price: "₹80", tags: ["cold","fruit"] },
    { name: "Kiwi Smoothie", description: "Tart kiwi punch", price: "₹90", tags: ["cold","fruit"] },
    { name: "Nutella Banana Smoothie", description: "Choco-banana", price: "₹90", tags: ["cold","dessert"] },
  ];

  // Quick Bites
  const maggi = [
    { name: "Plain Maggi", description: "Classic noodles", price: "₹35", tags: ["veg"] },
    { name: "Veg Maggi", description: "Mixed veggies", price: "₹45", tags: ["veg"] },
    { name: "Egg Maggi", description: "Eggy upgrade", price: "₹60", tags: ["egg"] },
    { name: "Cheese Maggi", description: "Cheesy comfort", price: "₹60", tags: ["veg","cheese"] },
    { name: "Paneer Maggi", description: "Indian cottage cheese", price: "₹60", tags: ["veg"] },
  ];
  const lemonades = [
    { name: "Lime Juice", description: "Fresh squeezed", price: "₹35", tags: ["cold","citrus"] },
    { name: "Lime Soda", description: "Fizzy lime", price: "₹40", tags: ["cold","citrus"] },
    { name: "Masala Soda", description: "Spiced fizz", price: "₹45", tags: ["cold","spicy"] },
    { name: "Blue Lime", description: "Blue curaçao syrup", price: "₹60", tags: ["cold","sweet"] },
    { name: "Strawberry Lemonade", description: "Berry twist", price: "₹60", tags: ["cold","fruit"] },
    { name: "Virgin Mojito", description: "Minty cool", price: "₹70", tags: ["cold","mint"] },
    { name: "Mango Mojito", description: "Tropical mint", price: "₹80", tags: ["cold","mint","fruit"] },
  ];
  const burgers = [
    { name: "Aloo Tikki Burger", description: "Spiced potato patty", price: "₹60", tags: ["veg"] },
    { name: "Vegetable Burger", description: "Mixed veggie patty", price: "₹75", tags: ["veg"] },
    { name: "Paneer Burger", description: "Cottage cheese patty", price: "₹95", tags: ["veg"] },
    { name: "Extra Cheese", description: "Add-on slice", price: "₹15", tags: ["veg","cheese"] },
  ];

  return (
    <div className="page-container pb-16">
      <h1 className="page-title">Our Menu</h1>
      <p className="max-w-3xl mx-auto text-center text-tea-700 mb-12">
        Discover our signature teas, coffees, chilled drinks, and quick bites — all freshly prepared!
      </p>

      <MenuCategory title="Teas" items={teas} />
      <MenuCategory title="Coffees" items={coffees} />

      <MenuCategory title="Snacks" items={snacks} />
      <MenuCategory title="Sandwiches" items={sandwiches} />

      <MenuCategory title="Hot Milks" items={hotMilk} />
      <MenuCategory title="Milk Shakes" items={milkShakes} />

      <MenuCategory title="Cold Coffees" items={coldCoffees} />
      <MenuCategory title="Summer Chills" items={summerChills} />

      <MenuCategory title="Maggi" items={maggi} />
      <MenuCategory title="Lemonades & Mojitos" items={lemonades} />
      <MenuCategory title="Burgers" items={burgers} />
    </div>
  );
};

export default Menu;
