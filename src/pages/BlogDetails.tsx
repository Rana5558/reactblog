import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsApi } from '../api/blogs';
import { Blog } from '../types';

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError('Invalid blog ID');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await blogsApi.getById(id);
        setBlog(data);
        setError('');
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load blog. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error || 'Blog not found'}
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </button>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-gray-600">By {blog.author}</p>
            {blog.createdAt && (
              <p className="text-sm text-gray-500 mt-1">
                Published on {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{blog.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;

