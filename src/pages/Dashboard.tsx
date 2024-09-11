import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { projects } = useProjects();

  if (!isAuthenticated) {
    return <p>Por favor, faça login para acessar o dashboard.</p>;
  }

  return (
    <div className="dashboard">
      <h1>Seus Projetos</h1>
      <div className="project-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
