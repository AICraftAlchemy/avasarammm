import React from 'react';
import { Search } from 'lucide-react';
import RangeSlider from './RangeSlider';
import { jobRoles, industries, educationLevels, languages } from '../data/jobs';

interface FiltersProps {
  filters: any;
  setFilters: (filters: any) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="sticky top-4 bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Experience (Years)
        </label>
        <RangeSlider
          min={0}
          max={20}
          value={filters.experience}
          onChange={(value) => setFilters({ ...filters, experience: value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Salary Range (₹)
        </label>
        <RangeSlider
          min={0}
          max={10000000}
          step={100000}
          value={filters.salary}
          onChange={(value) => setFilters({ ...filters, salary: value })}
          formatLabel={(value) => `₹${(value / 100000).toFixed(1)}L`}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Role
        </label>
        <select
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        >
          <option value="">All Roles</option>
          {jobRoles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      {/* Add more filter components here */}
    </div>
  );
}