
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Coffee, CupSoda, Utensils } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Teas",
      description:
        "Hand-selected premium tea leaves from around the world, brewed to perfection.",
      imageUrl: "https://prajjwal-acharya.github.io/website/images/tea.webp",
      altText: "Premium tea selection"
    },
    {
      title: "Specialty Coffee",
      description:
        "Expertly crafted coffee using freshly roasted beans from ethical sources.",
      imageUrl: "https://prajjwal-acharya.github.io/website/images/coffee.webp",
      altText: "Specialty coffee"
    },
    {
      title: "Fresh Food",
      description:
        "Delicious sandwiches, burgers and more made with locally sourced ingredients.",
      imageUrl: "https://prajjwal-acharya.github.io/website/images/sandwich-fries.jpeg",
      altText: "Fresh food menu"
    }
  ];
  

  return (
    <div className="animate-fade-in">
      <HeroSection />
      
      {/* Featured Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                altText={feature.altText}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Tea Day</h2>
              <p className="text-tea-700 mb-6">
                Since 2020, our humble stall café has been serving affordable and delicious snacks, tea, and coffee to students and locals near the hostel. Founded with passion our café was born out of a simple idea: to fill the gap for a cozy, budget-friendly spot where everyone could enjoy quick bites like fries, burgers, Maggie, and freshly brewed beverages. 
              </p>
              <p className="text-tea-700 mb-6">
                Over the years, we've become a favorite evening hangout for students craving a tasty break. Every item is prepared with care, ensuring quality and flavor without breaking the bank. Whether you’re grabbing a quick snack or relaxing with friends, our stall is here to make your day a little brighter—one cup of tea or coffee with hot maggie of different types or even fries at a time.
              </p>
              <Link to="/about" className="btn-primary inline-block">
                Our Story
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://prajjwal-acharya.github.io/website/images/tea-day.jpg"
                alt="Tea Day cafe interior"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Preview */}
      <section className="py-16 bg-tea-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title text-center">Explore Our Menu</h2>
          <p className="text-tea-700 max-w-2xl mx-auto mb-10">
            From artisanal teas to gourmet sandwiches, we have something to delight every palate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-tea-100 p-4 rounded-full mb-4">
                <Coffee size={32} className="text-tea-700" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Teas</h3>
              <p className="text-tea-600 mb-6 text-center">
                Discover our collection of loose-leaf teas from around the world.
              </p>
              <Link to="/menu" className="text-tea-700 hover:text-tea-900 font-medium">
                View Selection →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-tea-100 p-4 rounded-full mb-4">
                <CupSoda size={32} className="text-tea-700" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Coffee & Drinks</h3>
              <p className="text-tea-600 mb-6 text-center">
                Expertly crafted coffees and refreshing specialty beverages.
              </p>
              <Link to="/menu" className="text-tea-700 hover:text-tea-900 font-medium">
                View Selection →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-tea-100 p-4 rounded-full mb-4">
                <Utensils size={32} className="text-tea-700" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Food</h3>
              <p className="text-tea-600 mb-6 text-center">
                Delicious sandwiches, burgers and sides made with quality ingredients.
              </p>
              <Link to="/menu" className="text-tea-700 hover:text-tea-900 font-medium">
                View Selection →
              </Link>
            </div>
          </div>
          
          <Link to="/menu" className="btn-primary inline-block mt-12">
            Full Menu
          </Link>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <TestimonialCard 
              quote="The tea selection here is amazing! I've discovered flavors I never knew existed. This has become my go-to spot to relax." 
              author="Neel" 
              role="Tea Enthusiast"
            />
            <TestimonialCard 
              quote="Their fries is the best I've had, and the sandwiches are always fresh. Great place to work or meet friends." 
              author="Prajjwal" 
              role="Regular Customer"
            />
            <TestimonialCard 
              quote="As a coffee snob, I was skeptical, but their coffee is exceptional! And don't get me started on their burgers - simply delicious!" 
              author="Kirti" 
              role="Coffee Lover"
            />
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-tea-800 text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Visit Tea Day Today
          </h2>
          <p className="text-tea-100 max-w-2xl mx-auto mb-10">
            Join us for a cup of tea, coffee, or a delicious meal. We're open daily from 8am to 8pm.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-tea-800 hover:bg-tea-100 font-medium px-6 py-3 rounded-md transition-colors duration-300">
              Find Us
            </Link>
            <Link to="/menu" className="border border-white hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
              See Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
