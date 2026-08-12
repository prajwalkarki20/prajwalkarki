'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
          : 'bg-gradient-to-r from-purple-600 to-pink-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Prajwal</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#home" className="text-white hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="#projects" className="text-white hover:text-yellow-300 transition">
            Projects
          </Link>
          <Link href="#skills" className="text-white hover:text-yellow-300 transition">
            Skills
          </Link>
          <Link href="#contact" className="text-white hover:text-yellow-300 transition">
            Contact
          </Link>
          <Link
            href="/admin"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 px-6 py-4 space-y-2">
          <Link
            href="#home"
            className="block text-white hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-white hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block text-white hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="block text-white hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="block text-white hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/admin"
            className="block bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}
