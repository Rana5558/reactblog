import React, { useState } from 'react';
import { Blog } from '../types';

interface BlogFormProps {
  onSubmit: (blog: { title: string; content: string; author: string }) => Promise<void>;
  initialData?: Blog;
  submitButtonText?: string;
}

const BlogForm: React.FC<BlogFormProps> = ({ 
  onSubmit, 
  initialData,
  submitButtonText = 'Create Blog' 
}) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !content.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // Author will be set by the parent component using the logged-in user
      await onSubmit({ title: title.trim(), content: content.trim(), author: '' });
      // Reset form if creating new blog
      if (!initialData) {
        setTitle('');
        setContent('');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your blog content here..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Saving...' : submitButtonText}
      </button>
    </form>
  );
};

export default BlogForm;

