import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Blog Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

