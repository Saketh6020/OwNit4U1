import React from 'react';
import { Link2, Brain, Eye, ArrowRight, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: Link2,
    title: 'Seamless Integration',
    description: 'All platforms work together in perfect harmony for a unified experience.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Efficiency',
    description: 'Advanced algorithms optimize every step of your real estate journey.',
  },
  {
    icon: Eye,
    title: 'Enhanced Transparency',
    description: 'Clear visibility into every process and transaction.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Decisions',
    description: 'Make informed choices backed by comprehensive market analytics.',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Choosing the Ownit4U Ecosystem
          </h2>
          <p className="text-xl text-gray-600">
            Experience the advantages of our integrated approach
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-gray-900 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}