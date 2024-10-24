import React from 'react';
import { Users, Briefcase, Filter, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Connect with Top Employers',
      description: 'Access opportunities from leading companies across India. Our platform connects talented professionals with innovative organizations.',
    },
    {
      icon: <Filter className="w-8 h-8 text-blue-600" />,
      title: 'Advanced Filtering',
      description: 'Find your perfect job match using our intelligent filters. Filter by experience, salary, location, and more.',
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Targeted Job Search',
      description: 'Our smart algorithms help you discover relevant opportunities based on your skills and preferences.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: 'Career Growth',
      description: 'Access resources and opportunities that help you advance in your career journey.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Avasaram
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Connecting talent with opportunity across India. We're transforming how people find their dream jobs.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Avasaram, we believe everyone deserves the opportunity to find work that matters. 
              Our mission is to empower job seekers and employers by creating meaningful connections 
              that drive careers and businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}