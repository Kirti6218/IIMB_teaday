
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="page-container pb-16">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="section-title">Visit Tea Day</h2>
          
          <div className="mb-8">
            <h3 className="section-subtitle">Address</h3>
            <address className="not-italic text-tea-700">
              <p>Windsor Amulyam, Kamanahalli Main Rd</p>
              <p>Doddakammanahalli, 560076</p>
            </address>
          </div>
          
          <div className="mb-8">
            <h3 className="section-subtitle">Hours</h3>
            <div className="text-tea-700">
              <div className="flex justify-between mb-2">
                <span>Monday - Saturday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Sunday</span>
                <span>8:00 AM - 10:30 PM</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="section-subtitle">Contact</h3>
            <div className="text-tea-700">
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@teaday.com</p>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="bg-tea-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-tea-600 font-medium">Map would be displayed here</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="section-title">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-tea-800 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-tea-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tea-400"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-tea-800 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-tea-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tea-400"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-tea-800 font-medium mb-1">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-tea-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tea-400"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-tea-800 font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-tea-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tea-400"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-serif font-bold text-lg mb-2 text-tea-800">Do you offer catering?</h3>
            <p className="text-tea-700">
              Yes! We offer catering for events of all sizes. Please contact us at least 48 hours in advance to discuss your needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-serif font-bold text-lg mb-2 text-tea-800">Can I make a reservation?</h3>
            <p className="text-tea-700">
              We accept reservations for groups of 6 or more. For smaller groups, we operate on a first-come, first-served basis.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-serif font-bold text-lg mb-2 text-tea-800">Do you have gluten-free options?</h3>
            <p className="text-tea-700">
              Yes, we have several gluten-free items on our menu. Please ask your server for recommendations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-serif font-bold text-lg mb-2 text-tea-800">Do you sell loose leaf tea?</h3>
            <p className="text-tea-700">
              Absolutely! All of our teas are available for purchase in 50g and 100g packages to enjoy at home.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
