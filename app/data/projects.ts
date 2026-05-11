import fr from "@/resource/translations/fr.json";

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  images: GalleryImage[];
  description?: string;
  legend?: string;
}

const projectTranslations = fr.projects;

export const projects: Project[] = [
  {
    id: "modelec",
    title: projectTranslations["modelec"].title,
    subtitle: projectTranslations["modelec"].subtitle,
    description: projectTranslations["modelec"].description,
    legend: projectTranslations["modelec"].legend,
    image: "/images/projects/MODELEC/0.jpg",
    images: [
      {
        src: "/images/projects/MODELEC/1-1.jpg",
        width: 1254,
        height: 1036,
        alt: "MODELEC - Image 1",
      },
      {
        src: "/images/projects/MODELEC/2-1.jpg",
        width: 1080,
        height: 1350,
        alt: "MODELEC - Image 2",
      },
      {
        src: "/images/projects/MODELEC/2-2.jpg",
        width: 1080,
        height: 1350,
        alt: "MODELEC - Image 3",
      },
      {
        src: "/images/projects/MODELEC/2-3.jpg",
        width: 1080,
        height: 1350,
        alt: "MODELEC - Image 4",
      },
      {
        src: "/images/projects/MODELEC/VOLUME - VIEUX BRONZE.jpg",
        width: 1080,
        height: 1350,
        alt: "MODELEC - Image 5",
      },
    ],
  },
  {
    id: "arte",
    title: projectTranslations["arte"].title,
    subtitle: projectTranslations["arte"].subtitle,
    description: projectTranslations["arte"].description,
    legend: projectTranslations["arte"].legend,
    image: "/images/projects/ARTE/0.jpg",
    images: [],
  },
];
