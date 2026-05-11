import fr from "@/resource/translations/fr.json";

export interface Project {
  id: string;
  title: string;
  image: string;
}

const projectTranslations = fr.projects;

export const projects: Project[] = [
  {
    id: "modelec",
    title: projectTranslations["modelec"].title,
    image: "/images/projects/MODELEC/0.jpg",
  },
  {
    id: "modelec",
    title: projectTranslations["modelec"].title,
    image: "/images/projects/MODELEC/0.jpg",
  },
  {
    id: "modelec",
    title: projectTranslations["modelec"].title,
    image: "/images/projects/MODELEC/0.jpg",
  }
];
