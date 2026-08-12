'use client';

import { useEffect, useState } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        // If no projects from DB, use sample data
        if (data.length === 0) {
          setProjects([
            {
              _id: '1',
              title: 'E-Commerce Platform',
              description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product catalog, and payment integration.',
              image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              tags: ['React', 'Node.js', 'MongoDB'],
              github: '#',
              demo: '#',
            },
            {
              _id: '2',
              title: 'Task Management App',
              description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive user interface.',
              image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              tags: ['React', 'Firebase', 'CSS3'],
              github: '#',
              demo: '#',
            },
            {
              _id: '3',
              title: 'Weather Dashboard',
              description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
              image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              tags: ['JavaScript', 'API', 'HTML/CSS'],
              github: '#',
              demo: '#',
            },
            {
              _id: '4',
              title: 'Social Media Analytics',
              description: 'Comprehensive analytics dashboard for social media metrics with data visualization, trend analysis, and reporting tools.',
              image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              tags: ['React', 'Chart.js', 'Node.js'],
              github: '#',
              demo: '#',
            },
            {
              _id: '5',
              title: 'Learning Platform',
              description: 'Online learning management system with video courses, interactive quizzes, progress tracking, and certification generation.',
              image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              tags: ['Vue.js', 'Laravel', 'MySQL'],
              github: '#',
              demo: '#',
            },
            {
              _id: '6',
              title: 'Portfolio Generator',
              description: 'Automated portfolio website generator that creates beautiful portfolios with customizable templates and drag-and-drop builder.',
              image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
              tags: ['React', 'Webpack', 'Express'],
              github: '#',
              demo: '#',
            },
          ]);
        } else {
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Featured Projects
        </h2>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 duration-300"
              >
                <div
                  className="h-48 bg-gradient-to-br"
                  style={{ background: project.image }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded text-center font-semibold hover:opacity-90 transition"
                    >
                      <i className="fab fa-github"></i> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded text-center font-semibold hover:opacity-90 transition"
                    >
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
