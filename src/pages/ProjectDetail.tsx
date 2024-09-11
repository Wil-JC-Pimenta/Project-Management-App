import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Detalhes do Projeto {projectId}</h1>
      {/* Adicione os detalhes do projeto aqui */}
    </div>
  );
};

export default ProjectDetail;
