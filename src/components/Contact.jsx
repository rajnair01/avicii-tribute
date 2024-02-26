import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="bg-black text-gray-300 py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactInfo
            icon={<FaMapMarkerAlt />}
            title="Visit Us"
            info="123 Main Street, City, Country"
          />
          <ContactInfo
            icon={<FaPhoneAlt />}
            title="Call Us"
            info="+1 (123) 456-7890"
          />
          <ContactInfo
            icon={<FaEnvelope />}
            title="Email Us"
            info="info@espressoemporium.com"
          />
        </div>
        <div className="mt-8 text-center">
          <p>Or fill out the form below to send us a message:</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-2xl text-gray-600">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="max-w-md mx-auto mt-6">
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Your Email"
        />
        <textarea
          className="w-full px-4 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactUs;
