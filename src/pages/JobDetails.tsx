import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Building2, MapPin, Briefcase, IndianRupee, Calendar, Globe2, GraduationCap, Clock } from 'lucide-react';
import { jobs } from '../data/jobs';
import { formatSalary, formatDate } from '../utils/formatters';
import toast from 'react-hot-toast';

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Job not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Back to jobs
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-600 mb-1">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="text-sm">Experience</span>
                </div>
                <span className="font-semibold">{job.experience}+ years</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-600 mb-1">
                  <IndianRupee className="w-4 h-4 mr-2" />
                  <span className="text-sm">Salary</span>
                </div>
                <span className="font-semibold">{formatSalary(job.salary)}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-600 mb-1">
                  <Globe2 className="w-4 h-4 mr-2" />
                  <span className="text-sm">Work Mode</span>
                </div>
                <span className="font-semibold">{job.workMode}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-600 mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Job Type</span>
                </div>
                <span className="font-semibold">{job.type}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                <p className="text-gray-600">{job.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Required</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <button
              onClick={handleApply}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Apply Now
            </button>
            <button
              className="w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Save Job
            </button>

            <hr className="my-6" />

            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Posted {formatDate(job.postedDate)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span>{job.education}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}