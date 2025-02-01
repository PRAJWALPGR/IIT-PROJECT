import React from 'react';
import { Sprout, Users, Truck, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About FreshLocal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting local farmers with consumers to create a sustainable and healthy food ecosystem.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At FreshLocal, we believe in creating a direct connection between local farmers and consumers. 
              Our platform eliminates unnecessary middlemen, ensuring farmers receive fair compensation for 
              their hard work while providing consumers with access to the freshest, highest-quality produce 
              at reasonable prices.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Produce</h3>
            <p className="text-gray-600">
              Direct from local farms to your table, ensuring maximum freshness and quality.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-600">
              Supporting local farmers and strengthening our community's economic fabric.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Same-day delivery options to ensure your produce arrives at peak freshness.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              We stand behind the quality of every product sold on our platform.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">100+</div>
              <div className="text-gray-600">Local Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">50,000+</div>
              <div className="text-gray-600">Deliveries Made</div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a farmer looking to reach more customers or a consumer seeking fresh, 
            local produce, we'd love to have you join our growing community.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              Join as a Farmer
            </button>
            <button className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded-md hover:bg-green-50 transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}