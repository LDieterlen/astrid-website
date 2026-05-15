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
  columns?: number;
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
    columns: 6,
    images: [
      {
        src: "/images/projects/ARTE VENEZIANA/a.jpg",
        row: 1,
        column: 1,
        rowSpan: 4,
        colSpan: 4,
        alt: "ARTE VENEZIANA - Image 1",
      },
      {
        src: "/images/projects/ARTE VENEZIANA/b.jpg",
        row: 1,
        column: 5,
        rowSpan: 2,
        colSpan: 2,
        alt: "ARTE VENEZIANA - Image 2",
      },
      {
        src: "/images/projects/ARTE VENEZIANA/c.jpg",
        row: 3,
        column: 5,
        rowSpan: 2,
        colSpan: 2,
        alt: "ARTE VENEZIANA - Image 3",
      },
    ],
  },
  {
    id: "bacon",
    title: projectTranslations["bacon"].title,
    subtitle: projectTranslations["bacon"].subtitle,
    description: projectTranslations["bacon"].description,
    legend: projectTranslations["bacon"].legend,
    image: "/images/projects/BACON/0.jpg",
    columns: 6,
    images: [
      {
        src: "/images/projects/BACON/a.png",
        row: 1,
        column: 1,
        rowSpan: 3,
        colSpan: 4,
        alt: "BACON - Image 1",
      },
      {
        src: "/images/projects/BACON/d.jpg",
        row: 1,
        column: 5,
        rowSpan: 1,
        colSpan: 2,
        alt: "BACON - Image 2",
      },
      {
        src: "/images/projects/BACON/b.png",
        row: 2,
        column: 5,
        rowSpan: 1,
        colSpan: 2,
        alt: "BACON - Image 3",
      },
      {
        src: "/images/projects/BACON/c.png",
        row: 3,
        column: 5,
        rowSpan: 1,
        colSpan: 2,
        alt: "BACON - Image 4",
      },
    ],
  },
  {
    id: "blondel",
    title: projectTranslations["blondel"].title,
    subtitle: projectTranslations["blondel"].subtitle,
    description: projectTranslations["blondel"].description,
    legend: projectTranslations["blondel"].legend,
    image: "/images/projects/BLONDEL/0.png",
    columns: 6,
    images: [
      {
        src: "/images/projects/BLONDEL/b.jpg",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 2,
        alt: "BLONDEL - Image 1",
      },
      {
        src: "/images/projects/BLONDEL/a.jpg",
        row: 1,
        column: 3,
        rowSpan: 2,
        colSpan: 2,
        alt: "BLONDEL - Image 2",
      },
      {
        src: "/images/projects/BLONDEL/c.png",
        row: 1,
        column: 5,
        rowSpan: 2,
        colSpan: 2,
        alt: "BLONDEL - Image 3",
      },
      {
        src: "/images/projects/BLONDEL/0.png",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 6,
        alt: "BLONDEL - Image 4",
       }
      
    ],
  },
  {
    id: "burnett",
    title: projectTranslations["burnett"].title,
    subtitle: projectTranslations["burnett"].subtitle,
    description: projectTranslations["burnett"].description,
    legend: projectTranslations["burnett"].legend,
    image: "/images/projects/BURNETT/0.jpg",
    images: [
      {
        src: "/images/projects/BURNETT/a.jpg",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 2,
        alt: "BURNETT - Image 1",
      },
      {
        src: "/images/projects/BURNETT/c.jpg",
        row: 1,
        column: 3,
        rowSpan: 2,
        colSpan: 2,
        alt: "BURNETT - Image 2",
      },
      {
        src: "/images/projects/BURNETT/b.jpeg",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 4,
        alt: "BURNETT - Image 3",
      },
    ],
  },
  {
    id: "fragonard",
    title: projectTranslations["fragonard"].title,
    subtitle: projectTranslations["fragonard"].subtitle,
    description: projectTranslations["fragonard"].description,
    legend: projectTranslations["fragonard"].legend,
    image: "/images/projects/FRAGONARD/0.png",
    images: [
      {
        src: "/images/projects/FRAGONARD/b.jpg",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 2,
        alt: "FRAGONARD - Image 1",
      },
      {
        src: "/images/projects/FRAGONARD/c.jpg",
        row: 1,
        column: 3,
        rowSpan: 2,
        colSpan: 2,
        alt: "FRAGONARD - Image 2",
      },
      {
        src: "/images/projects/FRAGONARD/a.jpg",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 4,
        alt: "FRAGONARD - Image 3",
      },
    ],
  },
  {
    id: "garth",
    title: projectTranslations["garth"].title,
    subtitle: projectTranslations["garth"].subtitle,
    description: projectTranslations["garth"].description,
    legend: projectTranslations["garth"].legend,
    image: "/images/projects/GARTH/0.jpg",
    images: [
      {
        src: "/images/projects/GARTH/c.jpg",
        row: 1,
        column: 1,
        rowSpan: 3,
        colSpan: 3,
        alt: "GARTH - Image 1",
      },
      {
        src: "/images/projects/GARTH/e.png",
        row: 1,
        column: 4,
        rowSpan: 1,
        colSpan: 1,
        alt: "GARTH - Image 2",
      },
      {
        src: "/images/projects/GARTH/d.png",
        row: 2,
        column: 4,
        rowSpan: 1,
        colSpan: 1,
        alt: "GARTH - Image 3",
      },
      {
        src: "/images/projects/GARTH/b.png",
        row: 3,
        column: 4,
        rowSpan: 1,
        colSpan: 1,
        alt: "GARTH - Image 4",
      }
    ],
  },
  {
    id: "gibbon",
    title: projectTranslations["gibbon"].title,
    subtitle: projectTranslations["gibbon"].subtitle,
    description: projectTranslations["gibbon"].description,
    legend: projectTranslations["gibbon"].legend,
    image: "/images/projects/GIBBON/0.png",
    columns: 3,
    images: [
      {
        src: "/images/projects/GIBBON/c.jpg",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 3,
        alt: "GIBBON - Image 1",
      },
      {
        src: "/images/projects/GIBBON/a.png",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 1,
        alt: "GIBBON - Image 2",
      },
      {
        src: "/images/projects/GIBBON/b.png",
        row: 3,
        column: 2,
        rowSpan: 2,
        colSpan: 1,
        alt: "GIBBON - Image 3",
      },
      {
        src: "/images/projects/GIBBON/d.png",
        row: 3,
        column: 3,
        rowSpan: 2,
        colSpan: 1,
        alt: "GIBBON - Image 4",
      }
    ],
  },
  {
    id: "greuze",
    title: projectTranslations["greuze"].title,
    subtitle: projectTranslations["greuze"].subtitle,
    description: projectTranslations["greuze"].description,
    legend: projectTranslations["greuze"].legend,
    image: "/images/projects/GREUZE/0.png",
    columns: 6,
    images: [
      {
        src: "/images/projects/GREUZE/a.png",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 2,
        alt: "GREUZE - Image 1",
      },
      {
        src: "/images/projects/GREUZE/b.png",
        row: 1,
        column: 3,
        rowSpan: 2,
        colSpan: 4,
        alt: "GREUZE - Image 2",
      },
      {
        src: "/images/projects/GREUZE/c.png",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 6,
        alt: "GREUZE - Image 3",
      },
    ],
  },
  {
    id: "johnson",
    title: projectTranslations["johnson"].title,
    subtitle: projectTranslations["johnson"].subtitle,
    description: projectTranslations["johnson"].description,
    legend: projectTranslations["johnson"].legend,
    image: "/images/projects/JOHNSON/0.jpg",
    images: [
      {
        src: "/images/projects/JOHNSON/b.jpg",
        row: 1,
        column: 1,
        rowSpan: 3,
        colSpan: 2,
        alt: "JOHNSON - Image 1",
      },
      {
        src: "/images/projects/JOHNSON/a.jpg",
        row: 1,
        column: 3,
        rowSpan: 3,
        colSpan: 2,
        alt: "JOHNSON - Image 2",
      },
      {
        src: "/images/projects/JOHNSON/c.png",
        row: 4,
        column: 1,
        rowSpan: 3,
        colSpan: 4,
        alt: "JOHNSON - Image 3",
      },
    ],
  },
  {
    id: "promemoria",
    title: projectTranslations["promemoria"].title,
    subtitle: projectTranslations["promemoria"].subtitle,
    description: projectTranslations["promemoria"].description,
    legend: projectTranslations["promemoria"].legend,
    image: "/images/projects/PROMEMORIA/0.jpg",
    columns: 8,
    images: [
      {
        src: "/images/projects/PROMEMORIA/a.jpg",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 4,
        alt: "PROMEMORIA - Image 1",
      },
      {
        src: "/images/projects/PROMEMORIA/d.jpg",
        row: 1,
        column: 5,
        rowSpan: 2,
        colSpan: 4,
        alt: "PROMEMORIA - Image 2",
      },
      {
        src: "/images/projects/PROMEMORIA/b.png",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 5,
        alt: "PROMEMORIA - Image 3",
      },
      {
        src: "/images/projects/PROMEMORIA/c.jpg",
        row: 3,
        column: 6,
        rowSpan: 2,
        colSpan: 3,
        alt: "PROMEMORIA - Image 4",
      }
    ],
  },
  {
    id: "washington",
    title: projectTranslations["washington"].title,
    subtitle: projectTranslations["washington"].subtitle,
    description: projectTranslations["washington"].description,
    legend: projectTranslations["washington"].legend,
    image: "/images/projects/WASHINGTON/0.jpg",
    images: [
      {
        src: "/images/projects/WASHINGTON/b.jpg",
        row: 1,
        column: 1,
        rowSpan: 2,
        colSpan: 2,
        alt: "WASHINGTON - Image 1",
      },
      {
        src: "/images/projects/WASHINGTON/a.jpg",
        row: 1,
        column: 3,
        rowSpan: 2,
        colSpan: 2,
        alt: "WASHINGTON - Image 2",
      },
      {
        src: "/images/projects/WASHINGTON/c.jpg",
        row: 3,
        column: 1,
        rowSpan: 2,
        colSpan: 4,
        alt: "WASHINGTON - Image 3",
      },
    ],
  }
];

// Controls the display order in the main projects gallery.
// Edit this list to reorder, add, or remove projects from the gallery.
export const projectsDisplayOrder: string[] = [
  "modelec",
  "johnson",
  "fragonard",
  "burnett",
  "promemoria",
  "blondel",
  "arte",
  "bacon",
  "garth",
  "washington",
  "greuze",
  "gibbon",
];
