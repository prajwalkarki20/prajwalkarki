'use client';

import { useEffect, useState } from 'react';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      fetchMessages();
      setSelectedMessage(null);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    if (filter === 'all') return true;
    return msg.status === filter;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Messages List */}
      <div className="lg:col-span-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {(['all', 'new', 'read', 'replied'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === status
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Messages List */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {loading ? (
            <p className="text-gray-600">Loading messages...</p>
          ) : filteredMessages.length === 0 ? (
            <p className="text-gray-600">No messages found</p>
          ) : (
            filteredMessages.map((msg) => (
              <button
                key={msg._id}
                onClick={() => setSelectedMessage(msg)}
                className={`w-full p-4 rounded-lg text-left transition ${
                  selectedMessage?._id === msg._id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border border-gray-300 hover:border-purple-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{msg.name}</h3>
                    <p className="text-sm opacity-75 truncate">{msg.subject}</p>
                  </div>
                  {msg.status === 'new' && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                      NEW
                    </span>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className="lg:col-span-2">
        {selectedMessage ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedMessage.subject}
                  </h2>
                  <p className="text-gray-600">From: {selectedMessage.name}</p>
                  <p className="text-gray-600">Email: {selectedMessage.email}</p>
                  <p className="text-gray-600">
                    Date: {new Date(selectedMessage.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-4 py-2 rounded-full font-semibold text-white ${
                    selectedMessage.status === 'new'
                      ? 'bg-red-600'
                      : selectedMessage.status === 'read'
                      ? 'bg-yellow-600'
                      : 'bg-green-600'
                  }`}
                >
                  {selectedMessage.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedMessage.message}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={`mailto:${selectedMessage.email}`}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition text-center"
              >
                Reply via Email
              </a>
              <button
                onClick={() => handleDelete(selectedMessage._id)}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center h-full">
            <p className="text-gray-600 text-center">Select a message to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
