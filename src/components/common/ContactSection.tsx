'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';
import { staggerContainer, slideInFromLeft, slideInFromRight } from '@/lib/framer';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      // Show success message
    }, 1000);
  };

  return (
    <section className="bg-green-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Enquiries & Booking */}
          <motion.div variants={slideInFromLeft} className="text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              For Enquiries & Booking
            </h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-green-200">CALL US:</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+919521524169" 
                  className="flex items-center space-x-3 text-xl hover:text-green-300 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <span>+91 95215 24169</span>
                </a>
                <a 
                  href="mailto:info@vanaashrya.com" 
                  className="flex items-center space-x-3 text-xl hover:text-green-300 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <span>info@vanaashrya.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={slideInFromRight} className="text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              For Seasonal Offers & Experiences
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email ID"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-green-800 border-t-transparent"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
