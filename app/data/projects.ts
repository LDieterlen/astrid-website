import fr from "@/resource/translations/fr.json";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
  row: number;
  column: number;
  rowSpan?: number;
  colSpan?: number;
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
        src: "/images/projects/MODELEC/a.jpg",
        row: 1,
        column: 1,
        rowSpan: 3,
        colSpan: 4,
        alt: "MODELEC - Image 1",
      },
      {
        src: "/images/projects/MODELEC/b.jpg",
        row: 4,
        column: 1,
        rowSpan: 1,
        colSpan: 1,
        alt: "MODELEC - Image 2",
      },
      {
        src: "/images/projects/MODELEC/c.jpg",
        row: 4,
        column: 2,
        rowSpan: 1,
        colSpan: 1,
        alt: "MODELEC - Image 3",
      },
      {
        src: "/images/projects/MODELEC/d.jpg",
        row: 4,
        column: 3,
        rowSpan: 1,
        colSpan: 1,
        alt: "MODELEC - Image 4",
      },
      {
        src: "/images/projects/MODELEC/e.jpg",
        row: 4,
        column: 4,
        rowSpan: 1,
        colSpan: 1,
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
    image: "/images/projects/ARTE VENEZIANA/0.jpg",
    images: [
      {
        src: "/images/projects/ARTE VENEZIANA/a.jpg",
        row: 1,
        column: 1,
        rowSpan: 3,
        colSpan: 3,
        alt: "ARTE VENEZIANA - Image 1",
      },
      {
        src: "/images/projects/ARTE VENEZIANA/b.jpg",
        row: 1,
        column: 4,
        rowSpan: 1,
        colSpan: 1,
        alt: "ARTE VENEZIANA - Image 2",
      },
      {
        src: "/images/projects/ARTE VENEZIANA/c.jpg",
        row: 3,
        column: 4,
        rowSpan: 1,
        colSpan: 1,
        alt: "ARTE VENEZIANA - Image 3",
      },

    ],
  },
];
