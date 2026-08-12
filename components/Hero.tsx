'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-bounce"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-bounce delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Prajwal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            Full Stack Developer | Creative Designer | Problem Solver
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Building beautiful and functional digital experiences with React, Node.js & MongoDB
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-purple-600 transition transform hover:-translate-y-2"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="#"
              className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-purple-600 transition transform hover:-translate-y-2"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="#"
              className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-purple-600 transition transform hover:-translate-y-2"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-purple-600 transition transform hover:-translate-y-2"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <p className="text-white mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll mt-2"></div>
        </div>
      </div>
    </section>
  );
}
