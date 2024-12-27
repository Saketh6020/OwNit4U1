import React from 'react';
import { Search, Hammer, Key, PieChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Find the perfect property with our intelligent listing platform.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description: 'Design and construct your dream home with our integrated build platform.',
  },
  {
    icon: Key,
    title: 'Secure',
    description: 'Seamlessly manage property registration and legal processes.',
  },
  {
    icon: PieChart,
    title: 'Invest',
    description: 'Grow your wealth through fractional real estate investments.',
  },
];

export default function Journey() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Journey with Ownit4U
          </h2>
          <p className="text-xl text-gray-600">See how it works</p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative bg-white p-8 rounded-lg shadow-sm">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}