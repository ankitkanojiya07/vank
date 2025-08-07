import React from 'react';
import TestimonialsTabs from './TestimonialsTabs';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="pb-20">
      <div className="container w-full mx-auto px-4 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-muted">
            Guest Testimonials
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Hear from our guests about their unforgettable experiences at Vanaashrya.
          </p>
        </div>
        <TestimonialsTabs />
      </div>
    </section>
  );
};

export default TestimonialsSection; 