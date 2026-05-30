import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import PageSection from './ui/PageSection';
import PageHeader from './ui/PageHeader';
import SearchInput from './ui/SearchInput';
import FilterBar from './ui/FilterBar';
import useIsMobile from '../hooks/useIsMobile';

const CATEGORIES = ['Todos', 'Software', 'IA', 'Ciencia'];

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const isMobile = useIsMobile();

  const filteredProjects = PROJECTS.filter((project) => {
    const catMatch = selectedCategory === 'Todos' || project.category === selectedCategory;
    const searchMatch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <PageSection className="projects-section">
      <PageHeader title="Proyectos" />

      <FilterBar
        primaryOptions={CATEGORIES}
        primaryValue={selectedCategory}
        onPrimaryChange={setSelectedCategory}
        primaryAriaLabel="Categorías de proyectos"
        showScrollHint={isMobile}
      />

      <SearchInput
        className="search-input--centered"
        variant="simple"
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar proyectos..."
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageSection>
  );
}

export default Projects;
