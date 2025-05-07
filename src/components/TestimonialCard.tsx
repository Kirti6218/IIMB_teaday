
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-tea-300 mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-tea-700 italic">{quote}</p>
      </div>
      <div>
        <p className="font-semibold text-tea-800">{author}</p>
        {role && <p className="text-tea-500 text-sm">{role}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
