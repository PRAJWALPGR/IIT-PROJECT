import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold text-gray-900">FreshLocal</span>
            </div>
            <p className="text-gray-600">
              Connecting local farmers with consumers for fresher, healthier food and a more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Shop</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Farmers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-green-500" />
                123 Farmer's Market St,<br />Springfield, ST 12345
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 text-green-500" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-green-500" />
                support@freshlocal.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FreshLocal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}