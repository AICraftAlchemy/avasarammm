import React from 'react';
import { Building2, MapPin, Briefcase, IndianRupee, Calendar } from 'lucide-react';
import { Job } from '../data/jobs';
import { formatSalary, formatDate } from '../utils/formatters';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <img 
          src={job.logo} 
          alt={job.company} 
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600">
              <Building2 className="w-4 h-4 mr-2" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{job.experience}+ years</span>
            </div>
            <div className="flex items-center text-gray-600">
              <IndianRupee className="w-4 h-4 mr-2" />
              <span>{formatSalary(job.salary)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(job.postedDate)}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.slice(0, 3).map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <button 
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}