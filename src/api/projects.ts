import { ProjectType } from "../types/project";

export const getProjects = async (): Promise<ProjectType[]> => {
  // Simula uma requisição de busca de projetos da API
  return fetch("/api/projects")
    .then(response => response.json());
};
