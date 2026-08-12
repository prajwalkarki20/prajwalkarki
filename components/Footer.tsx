'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; 2024 Prajwal. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-2xl hover:text-yellow-300 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-2xl hover:text-yellow-300 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-2xl hover:text-yellow-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl hover:text-yellow-300 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
