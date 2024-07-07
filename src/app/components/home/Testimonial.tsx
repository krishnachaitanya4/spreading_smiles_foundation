// components/SuccessStories.tsx

import React from 'react';

interface SuccessStory {
  name: string;
  story: string;
}

interface SuccessStoriesProps {
  successStories: SuccessStory[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ successStories }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
              <p className="text-gray-700 mb-4">{story.story}</p>
              <p className="text-blue-500 font-semibold">{story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
