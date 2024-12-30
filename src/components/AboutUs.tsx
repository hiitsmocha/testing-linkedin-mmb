import React from 'react';

function FounderCard({ name, role, description, imageUrl }: { 
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-[#0a66c2] mb-4">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FounderCard
            name="Jiawei Chen"
            role="Co-Founder & Technical Lead"
            description="Leading the technical development of LinkedIn Compare, bringing extensive experience in data analytics and machine learning to help professionals gain meaningful insights."
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <FounderCard
            name="Yifan Zhang"
            role="Co-Founder & Product Strategy"
            description="Driving product vision and strategy, with a passion for creating tools that empower professionals to make data-driven career decisions."
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
}