
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white group">
      <div className="overflow-hidden h-48 sm:h-60">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-tea-800">{title}</h3>
        <p className="text-tea-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
