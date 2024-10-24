import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import JobCard from '../components/JobCard';
import Filters from '../components/Filters';
import { jobs } from '../data/jobs';

export default function Home() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    experience: 0,
    salary: 0,
    role: '',
    workMode: '',
    industry: '',
    education: '',
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Find Your Dream Job Today
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">Latest Jobs</h2>
              <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Experience: High to Low</option>
                <option>Experience: Low to High</option>
              </select>
            </div>
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => navigate(`/job/${job.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}