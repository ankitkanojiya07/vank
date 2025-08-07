import React from "react";

const ContactPageComponent = () => {
  const contactData = [
    {
      title: "Address",
      content: [
        "Vanaashrya, Tehla by pass road,",
        "Village: Talab, Tehsil: Rajgarh District:",
        "Alwar, Rajasthan, India.",
      ],
    },
    {
      title: "Contact Details",
      content: ["+91- 95215 24169", "info@vanaashrya.com"],
    },
    {
      title: "Corporate and Group Booking",
      content: ["+91- 88269 22779", "info@vanaashrya.com"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#CFA87A] hover:text-white cursor-pointer group"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
            <div className="space-y-2">
              {card.content.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form and Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="bg-white p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              Vanaashrya Resort and Spa S...
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Tehla Bye-Pass Road, Rajgarh, State Highway 25A, Talab, Rajasthan
              301410
            </p>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">{"★".repeat(4)}★</div>
              <span className="ml-2 text-sm text-gray-600">4.4</span>
              <span className="ml-2 text-sm text-blue-600">741 reviews</span>
            </div>
            <button className="mt-2 text-blue-600 text-sm hover:underline">
              View larger map
            </button>
          </div>
          <div className="h-96 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7095.176969900737!2d76.448128!3d27.232067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d80717e205639%3A0x9e79c67d3a77e000!2sVanaashrya%20Resort%20and%20Spa%20Sariska!5e0!3m2!1sen!2sin!4v1752488426268!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vanaashrya Resort and Spa Sariska Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA87A] transition-all duration-300 placeholder-gray-500 text-gray-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA87A] transition-all duration-300 placeholder-gray-500 text-gray-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA87A] transition-all duration-300 placeholder-gray-500 text-gray-700"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA87A] transition-all duration-300 placeholder-gray-500 text-gray-700"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFA87A] transition-all duration-300 resize-none placeholder-gray-500 text-gray-700"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#CFA87A] text-white font-semibold rounded-lg hover:bg-[#B8956A] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComponent;
