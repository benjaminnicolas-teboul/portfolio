'use client';

import { useLanguage } from '@/src/contexts/LanguageContext';
import Project from '@/src/components/ui/Project';
import Projects from '@/src/data/projects';

const ProjectList = () => {
  const { language, t } = useLanguage();
  return (
    <section className="w-full p-6 bg-black">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        {t('projects.title')}
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 lg:grid-cols-2">
        {Projects.map((p, index) => (
          
          <Project 
            key={`${p.title}-${language}`} 
            {...p} 
            description={p.description[language]} // Description traduite selon langue
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;