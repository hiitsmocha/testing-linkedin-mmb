import React from 'react';
import { Search, Users, LineChart } from 'lucide-react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#f0f7ff] mx-auto">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-gray-500 text-center">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard 
            icon={<Search className="h-8 w-8 text-[#0a66c2]" />}
            title="Profile Analysis"
            description="Get detailed insights into professional profiles and career trajectories."
          />
          <FeatureCard 
            icon={<Users className="h-8 w-8 text-[#0a66c2]" />}
            title="Network Comparison"
            description="Compare networks and connections across different professional profiles."
          />
          <FeatureCard 
            icon={<LineChart className="h-8 w-8 text-[#0a66c2]" />}
            title="Growth Tracking"
            description="Track career growth and professional development over time."
          />
        </div>
      </div>
    </div>
  );
}