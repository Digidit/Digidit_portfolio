import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Client A', feedback: 'Great work and professionalism!' },
    { name: 'Client B', feedback: 'Highly recommend for editing projects.' },
  ];

  return (
    <div className="container py-5">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="my-3">
          <blockquote>{testimonial.feedback}</blockquote>
          <footer>- {testimonial.name}</footer>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
