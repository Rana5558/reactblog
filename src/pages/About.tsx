import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Blog Platform</h1>
          
          <div className="prose max-w-none space-y-4 text-gray-700">
            <p className="text-lg">
              Welcome to Blog Platform, a modern and user-friendly blogging platform where you can 
              share your thoughts, ideas, and stories with the world.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Create and publish your own blog posts</li>
              <li>Read and explore blogs from other authors</li>
              <li>User authentication and secure access</li>
              <li>Clean and responsive design</li>
              <li>Easy-to-use interface</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get Started</h2>
            <p>
              To start creating your own blogs, simply sign up for an account and begin sharing 
              your content with our community. It's free and easy to get started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

