function Testimonials() {
  return (
    <div className="bg-black text-gray-300 py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="I absolutely love the cozy atmosphere and the amazing coffee at Espresso Emporium. It's my favorite spot to unwind after a long day."
            author="Emily Smith"
            location="Los Angeles, CA"
          />
          <TestimonialCard
            text="The quality of the coffee here is unmatched! Every cup feels like a work of art. Highly recommended!"
            author="John Doe"
            location="New York, NY"
          />
          <TestimonialCard
            text="I've been a regular at Espresso Emporium for years, and I must say, they never disappoint. The staff is friendly, and the coffee is consistently excellent."
            author="Sarah Johnson"
            location="Chicago, IL"
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ text, author, location }) {
  return (
    <div className="bg-gray-300 text-black p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <p className="text-gray-700">`{text}`</p>
      </div>
      <p className="text-gray-600 mb-2">
        - {author}, {location}
      </p>
    </div>
  );
}

export default Testimonials;
