import React from 'react';
import { ArrowRight, Building2, Workflow } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Seamless Real Estate Journey Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience end-to-end real estate solutions powered by AI, from property discovery
            to investment management. One integrated ecosystem for all your real estate needs.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              <span>AI-Powered Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Workflow className="h-6 w-6" />
              <span>End-to-End Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}