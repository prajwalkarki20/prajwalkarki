'use client';

import { useEffect, useState } from 'react';

interface SkillGroup {
  _id: string;
  category: string;
  skills: string[];
}

export default function AdminSkills() {
  const [skills, setSkills] = useState<SkillGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: 'Frontend',
    skills: '',
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch('/api/skills');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: formData.category,
          skills: formData.skills.split(',').map((skill) => skill.trim()),
        }),
      });

      if (!response.ok) throw new Error('Failed to create skill');

      setFormData({ category: 'Frontend', skills: '' });
      setShowForm(false);
      fetchSkills();
    } catch (error) {
      console.error('Error creating skill:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill group?')) return;

    try {
      const response = await fetch(`/api/skills/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      fetchSkills();
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Manage Skills</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          {showForm ? 'Cancel' : '+ Add Skill Group'}
        </button>
      </div>

      {/* Add Skill Form */}
      {showForm && (
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Add New Skill Group</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Tools & Others">Tools & Others</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Skills (comma separated)
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="React, Vue, Angular, Next.js"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition"
            >
              Add Skill Group
            </button>
          </form>
        </div>
      )}

      {/* Skills List */}
      {loading ? (
        <p className="text-gray-600">Loading skills...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleDelete(skillGroup._id)}
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
