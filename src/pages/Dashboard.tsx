import React from "react";
import { useAuth } from "../context/AuthContext";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { projects } = useProjects();

  return (
    <div>
      <h1>Seus Projetos</h1>
      {isAuthenticated ? (
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>Por favor, faça login para ver seus projetos.</p>
      )}
    </div>
  );
};

export default Dashboard;
