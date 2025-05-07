
import React from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  isPopular?: boolean;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg transition-colors hover:bg-tea-50"
          >
            {item.image && (
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-serif font-bold text-tea-800 flex items-center gap-2">
                  {item.name}
                  {item.isPopular && (
                    <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </h3>
                <span className="font-medium text-tea-700">{item.price}</span>
              </div>
              <p className="text-tea-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
