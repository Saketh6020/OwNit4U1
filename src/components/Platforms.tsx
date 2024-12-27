import React from 'react';
import { Home, Building, FileText, LineChart, ArrowRight } from 'lucide-react';

const platforms = [
  {
    icon: Home,
    title: 'Ownit4U',
    description: 'Discover and acquire your ideal property with AI-powered insights.',
  },
  {
    icon: Building,
    title: 'Ownit4U Build',
    description: 'Design and build your dream home with seamless contractor management.',
  },
  {
    icon: FileText,
    title: 'Ownit4U Registry',
    description: 'Streamline property registration and legal processes effortlessly.',
  },
  {
    icon: LineChart,
    title: 'Ownit4U REITs',
    description: 'Grow your wealth through fractional real estate investments.',
  },
];

export default function Platforms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Integrated Platform
          </h2>
          <p className="text-xl text-gray-600">
            A solution for every stage of your real estate journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <platform.icon className="h-12 w-12 text-gray-900 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.title}</h3>
              <p className="text-gray-600 mb-6">{platform.description}</p>
              <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}