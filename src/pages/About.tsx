
import React from "react";

const About = () => {
  return (
    <div className="page-container pb-16">
      <h1 className="page-title">About Tea Day</h1>
      
      {/* Origin Story */}
      <section className="mb-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="section-title">Our Story</h2>
      <p className="text-tea-700 mb-4">
        Since 2020, our humble stall café has been serving affordable and delicious snacks, tea, and coffee to students and locals near the hostel. Founded with passion our café was born out of a simple idea: to fill the gap for a cozy, budget-friendly spot where everyone could enjoy quick bites like fries, burgers, Maggie, and freshly brewed beverages.
      </p>
      <p className="text-tea-700 mb-4">
        Over the years, we’ve become a favorite evening hangout for students craving a tasty break. Every item is prepared with care, ensuring quality and flavor without breaking the bank. Whether you’re grabbing a quick snack or relaxing with friends, our stall is here to make your day a little brighter—one cup of tea or coffee with hot maggie of different types or even fries at a time.
      </p>
      </div>
    <div className="rounded-lg overflow-hidden">
      <img
        src="https://prajjwal-acharya.github.io/website/images/tea-day.jpg"
        alt="Tea Day founders"
        className="w-full h-96 object-cover"
      />
    </div>
  </div>
</section>

      
      {/* Our Values */}
      <section className="mb-16 bg-tea-50 py-12 px-8 rounded-lg">
        <h2 className="section-title text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-tea-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-tea-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-xl mb-2">Quality</h3>
            <p className="text-tea-600">
              We source only the finest ingredients and take pride in every cup and plate we serve.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-tea-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-tea-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-xl mb-2">Community</h3>
            <p className="text-tea-600">
              We believe in creating a welcoming space where people can connect and feel at home.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-tea-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-tea-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-xl mb-2">Sustainability</h3>
            <p className="text-tea-600">
              We're committed to ethical sourcing and environmentally friendly practices in everything we do.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="mb-16">
  <h2 className="section-title text-center mb-10">Meet Our Team</h2>
  <div
    className="
      grid
      grid-cols-1       /* 1 col on mobile */
      md:grid-cols-2    /* 2 cols on ≥md */
      gap-8
      justify-items-center
      text-center
      max-w-3xl         /* adjust as needed */
      mx-auto           /* center the grid itself */
    "
  >
    {/* Card 1 */}
    <div className="space-y-2">
      <h3 className="font-serif font-bold text-lg">Balaram Sarkar</h3>
      <p className="text-tea-600 font-medium">Coffee Expert</p>
      <p className="text-tea-500 text-sm">
        A certified barista with a knack for creating the perfect brew, Balaram leads our coffee program.
      </p>
    </div>

    {/* Card 2 */}
    <div className="space-y-2">
      <h3 className="font-serif font-bold text-lg">Kirtiraj</h3>
      <p className="text-tea-600 font-medium">Manager</p>
      <p className="text-tea-500 text-sm">
        Kirtiraj ensures everything runs smoothly and that every guest has an exceptional experience.
      </p>
    </div>
  </div>
</section>


      
      {/* Join Us CTA */}
      <section className="bg-tea-800 text-white p-10 rounded-lg text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Come Visit Us</h2>
        <p className="text-tea-100 max-w-2xl mx-auto mb-6">
          We'd love to welcome you to Tea Day. Come experience our warm atmosphere, delicious offerings, and meet our friendly team.
        </p>
        <a
          href="/contact"
          className="bg-white text-tea-800 hover:bg-tea-100 font-medium px-6 py-3 rounded-md transition-colors duration-300 inline-block"
        >
          Find Our Location
        </a>
      </section>
    </div>
  );
};

export default About;
