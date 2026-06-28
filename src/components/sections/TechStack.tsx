import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'AI & Data Science',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'CatBoost',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    title: 'Languages & Core',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'SQL',
      'C++',
      'HTML / CSS',
    ],
  },
  {
    title: 'Web Integration',
    skills: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'Streamlit',
      'Flask',
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      'MySQL',
      'SQLAlchemy',
      'Git / GitHub',
      'Jupyter Notebook',
      'VS Code',
    ],
  },
];

export default function TechStack() {
  return (
    <div className="w-full mt-16 lg:mt-24">
      <h3 className="text-3xl font-bold text-text-secondary mb-10 text-center">
        Technical Arsenal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-bg-primary rounded-xl p-6 border border-border-subtle/30 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
          >
            <h4 className="text-xl font-bold text-accent-blue mb-4 border-b border-border-subtle/20 pb-2">
              {category.title}
            </h4>
            <ul className="space-y-3 flex-grow">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-text-primary text-base">
                  <span className="w-2 h-2 rounded-full bg-accent-green mr-3 flex-shrink-0"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
