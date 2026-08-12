'use client';

import { useEffect, useState } from 'react';

interface Skill {
  _id: string;
  category: string;
  skills: string[];
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        // If no skills from DB, use sample data
        if (data.length === 0) {
          setSkills([
            {
              _id: '1',
              category: 'Frontend',
              skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
            },
            {
              _id: '2',
              category: 'Backend',
              skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'SQL'],
            },
            {
              _id: '3',
              category: 'Tools & Others',
              skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'APIs'],
            },
          ]);
        } else {
          setSkills(data);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Skills & Technologies
        </h2>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading skills...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup._id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-600 border-b-2 border-purple-600 pb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
