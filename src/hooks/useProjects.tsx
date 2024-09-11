import { useState, useEffect } from "react";
import { getProjects } from "../api/projects";
import { ProjectType } from "../types/project";

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return { projects };
};
