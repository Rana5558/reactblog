import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const preview =
    blog.content.length > 150 ? blog.content.substring(0, 150) + '...' : blog.content;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
          <Link to={`/blogs/${blog.blogId}`}>{blog.title}</Link>
        </h2>

        <p className="text-gray-600 mb-6 line-clamp-3">{preview}</p>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm text-gray-500">By {blog.author} ~</p>
          <Link
            to={`/blogs/${blog.blogId}`}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
