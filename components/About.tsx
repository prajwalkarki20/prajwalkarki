'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Text */}
          <div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex
              problems. With expertise in both frontend and backend technologies, I build
              full-featured web applications that users love.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              My journey in web development started with a curiosity about how things work, and it
              has evolved into a passion for crafting beautiful, functional digital experiences.
              I'm constantly learning and exploring new technologies to stay at the forefront of
              web development.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-purple-600">50+</h3>
                <p className="text-gray-600 mt-2">Projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-purple-600">3+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-purple-600">100%</h3>
                <p className="text-gray-600 mt-2">Dedication</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition">
              <i className="fas fa-code text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable, efficient code</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition">
              <i className="fas fa-mobile-alt text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Responsive Design</h3>
              <p className="text-gray-600">Mobile-first approach to design</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition">
              <i className="fas fa-rocket text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance</h3>
              <p className="text-gray-600">Fast and optimized experiences</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition">
              <i className="fas fa-users text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Collaboration</h3>
              <p className="text-gray-600">Great teamwork and communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
