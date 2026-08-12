'use client';

import { useEffect, useState } from 'react';

interface Stats {
  totalProjects: number;
  totalMessages: number;
  totalSkills: number;
  newMessages: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalProjects: 0,
    totalMessages: 0,
    totalSkills: 0,
    newMessages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projects, messages, skills] = await Promise.all([
          fetch('/api/projects').then((r) => r.json()),
          fetch('/api/contact').then((r) => r.json()),
          fetch('/api/skills').then((r) => r.json()),
        ]);

        setStats({
          totalProjects: projects.length,
          totalMessages: messages.length,
          totalSkills: skills.length,
          newMessages: messages.filter((m: any) => m.status === 'new').length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {loading ? (
        <p className="text-gray-600">Loading statistics...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Projects</p>
                <h2 className="text-4xl font-bold text-gray-900">{stats.totalProjects}</h2>
              </div>
              <i className="fas fa-briefcase text-4xl text-purple-600 opacity-20"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Skills</p>
                <h2 className="text-4xl font-bold text-gray-900">{stats.totalSkills}</h2>
              </div>
              <i className="fas fa-star text-4xl text-yellow-600 opacity-20"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Messages</p>
                <h2 className="text-4xl font-bold text-gray-900">{stats.totalMessages}</h2>
              </div>
              <i className="fas fa-envelope text-4xl text-blue-600 opacity-20"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">New Messages</p>
                <h2 className="text-4xl font-bold text-red-600">{stats.newMessages}</h2>
              </div>
              <i className="fas fa-bell text-4xl text-red-600 opacity-20"></i>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/admin/projects"
            className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition text-center font-semibold"
          >
            <i className="fas fa-briefcase mb-2 block text-2xl"></i>
            Manage Projects
          </a>
          <a
            href="/admin/skills"
            className="bg-yellow-600 text-white p-4 rounded-lg hover:bg-yellow-700 transition text-center font-semibold"
          >
            <i className="fas fa-star mb-2 block text-2xl"></i>
            Manage Skills
          </a>
          <a
            href="/admin/messages"
            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition text-center font-semibold"
          >
            <i className="fas fa-envelope mb-2 block text-2xl"></i>
            View Messages
          </a>
          <a
            href="/"
            className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition text-center font-semibold"
          >
            <i className="fas fa-eye mb-2 block text-2xl"></i>
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
