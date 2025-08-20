"use client";
import React, { PropsWithChildren, useState } from "react";
import { X } from "lucide-react";

const BookNowButton = ({children , className}: PropsWithChildren<{className?: string}>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    checkin_date: "",
    checkout_date: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    special_requests: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setResult("");
    setFormData({
      checkin_date: "",
      checkout_date: "",
      guests: "",
      name: "",
      email: "",
      phone: "",
      special_requests: "",
    });
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    // Basic validation
    if (
      !formData.checkin_date ||
      !formData.checkout_date ||
      !formData.guests ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      setResult("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending booking request...");

    const submitData = new FormData();

    // Replace with your actual Web3Forms access key
    submitData.append("access_key", "4c2feffb-e996-42f1-906c-a2b95ae9b4e5");

    // Add form subject for better organization
    submitData.append("subject", "New Booking Request - Vanaashrya Resort");

    // Add additional context
    submitData.append("from_name", "Vanaashrya Resort Booking Form");

    // Add form data
    Object.keys(formData).forEach((key) => {
      submitData.append(key, formData[key as keyof typeof formData] || "");
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Booking request submitted successfully! We'll contact you soon."
        );
        // Reset form
        setFormData({
          checkin_date: "",
          checkout_date: "",
          guests: "",
          name: "",
          email: "",
          phone: "",
          special_requests: "",
        });
        // Close modal after 3 seconds
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  

  return (
    <>
      {/* Fixed Book Now Button - Professional positioning */}
      {children ? (
        <button onClick={openModal} className={className}>
          {children}
        </button>
      ) : (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={openModal}
            style={{ backgroundColor: "#1e2939" }}
            className="hover:bg-[#16202f] text-white font-semibold py-2 px-4 rounded-md shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Book Now"
          >
            <span className="mr-2 text-sm tracking-wide">BOOK NOW</span>
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div
              style={{ backgroundColor: "#1e2939" }}
              className="text-white p-6 rounded-t-xl"
            >
              <h2 className="text-2xl font-bold">Our Accommodations</h2>
              <p className="opacity-90">
                Book your perfect stay at Vanaashrya Resort
              </p>
            </div>

            {/* Booking Form Content */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Stay Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkin_date"
                      value={formData.checkin_date}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkout_date"
                      value={formData.checkout_date}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Guest Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <input
                      type="text"
                      name="special_requests"
                      value={formData.special_requests}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Any special requests?"
                    />
                  </div>
                </div>

                {/* Result Message */}
                {result && (
                  <div
                    className={`p-3 rounded-md ${
                      result.includes("successfully") ||
                      result.includes("Successfully")
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : result.includes("Sending")
                        ? "bg-blue-50 text-blue-800 border border-blue-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {result}
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    onClick={onSubmit}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: isSubmitting ? "#9ca3af" : "#1e2939",
                    }}
                    className="hover:bg-[#16202f] disabled:hover:bg-[#9ca3af] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Book Your Stay Now"}
                  </button>
                </div>

                <div className="text-sm text-gray-600">* Required fields</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowButton;
