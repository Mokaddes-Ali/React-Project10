import React from 'react';
import { FaPalette, FaBullhorn, FaWifi, FaMobileAlt, FaCogs } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center group">
            <FaPalette className="text-orange-500 text-5xl mb-4 group-hover:text-orange-600 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <div className="w-16 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
            <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center group">
            <FaPalette className="text-orange-500 text-5xl mb-4 group-hover:text-orange-600 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Unlimited Color</h3>
            <div className="w-16 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
            <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center group">
            <FaBullhorn className="text-orange-500 text-5xl mb-4 group-hover:text-orange-600 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Media Marketing</h3>
            <div className="w-16 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
            <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center group">
            <FaWifi className="text-orange-500 text-5xl mb-4 group-hover:text-orange-600 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Unlimited Wifi</h3>
            <div className="w-16 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
            <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
          </div>
          {/* Card 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center group">
            <FaMobileAlt className="text-orange-500 text-5xl mb-4 group-hover:text-orange-600 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <div className="w-16 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
            <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
          </div>
          {/* Card 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center group">
            <FaCogs className="text-orange-500 text-5xl mb-4 group-hover:text-orange-600 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
            <div className="w-16 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
            <p>There are many variations of passages of but the majority have suffered alteration in some form.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
