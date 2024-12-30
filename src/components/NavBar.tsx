import React from 'react';
import { Briefcase, Search, Users, LineChart, LogIn } from 'lucide-react';

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  );
}

export function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-[#0a66c2]" />
            <span className="ml-2 text-xl font-semibold text-[#0a66c2]">LinkedIn Compare</span>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink icon={<Search className="h-5 w-5" />} text="Search" />
            <NavLink icon={<Users className="h-5 w-5" />} text="Network" />
            <NavLink icon={<LineChart className="h-5 w-5" />} text="Analytics" />
            <button className="bg-[#0a66c2] text-white px-4 py-2 rounded-full hover:bg-[#004182] transition-colors flex items-center">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}