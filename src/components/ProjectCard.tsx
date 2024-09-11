import React from "react";
import { ProjectType } from "../types/project";

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="project-card">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </div>
);

export default ProjectCard;
