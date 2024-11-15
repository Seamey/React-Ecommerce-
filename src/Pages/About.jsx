
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-32 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600">About Us</h1>
        <p className="mt-4 text-gray-600">
          Welcome to Shoppink! We’re dedicated to providing you with the best products and exceptional customer service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to deliver quality products that enhance your lifestyle and meet your needs. We believe in the power of excellent service and genuine customer satisfaction.
          </p>
        </div>

        {/* Values Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600">
            Integrity, quality, and respect are at the heart of everything we do. We strive to maintain transparency with our customers and ensure a seamless shopping experience.
          </p>
        </div>

        {/* Team Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Our dedicated team is passionate about bringing you the best. From our customer service representatives to our product specialists, everyone is here to serve you.
          </p>
        </div>

        {/* Customer Promise Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Promise</h2>
          <p className="text-gray-600">
            We promise to stand by our products and provide support every step of the way. Your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-medium text-gray-700">Thank you for choosing Shoppink!</h3>
        <p className="mt-4 text-gray-600">
          We’re excited to be a part of your journey and look forward to serving you for many years to come.
        </p>
      </div>
    </div>
  );
};

export default About;
