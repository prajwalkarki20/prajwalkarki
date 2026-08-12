'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-6 border-b border-gray-700">
          <h1 className={`font-bold ${isSidebarOpen ? 'text-2xl' : 'text-lg'}`}>
            {isSidebarOpen ? 'Admin Panel' : 'AP'}
          </h1>
        </div>

        <nav className="p-6 space-y-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <i className="fas fa-chart-line text-xl"></i>
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link
            href="/admin/projects"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <i className="fas fa-briefcase text-xl"></i>
            {isSidebarOpen && <span>Projects</span>}
          </Link>
          <Link
            href="/admin/skills"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <i className="fas fa-star text-xl"></i>
            {isSidebarOpen && <span>Skills</span>}
          </Link>
          <Link
            href="/admin/messages"
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <i className="fas fa-envelope text-xl"></i>
            {isSidebarOpen && <span>Messages</span>}
          </Link>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            <i className="fas fa-sign-out-alt text-xl"></i>
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-6 flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl text-gray-700 hover:text-gray-900"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="text-gray-700">
            <span className="mr-4">Welcome, Admin</span>
            <Link href="/" className="text-blue-600 hover:underline">
              Visit Site
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
