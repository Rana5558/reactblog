import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const preview = blog.content.length > 150 
    ? blog.content.substring(0, 150) + '...' 
    : blog.content;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          <Link to={`/blogs/${blog.id}`} className="hover:text-blue-600">
            {blog.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{preview}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">By {blog.author}</p>
          <Link
            to={`/blogs/${blog.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

