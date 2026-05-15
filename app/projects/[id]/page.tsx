import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { ProjectGallery } from "@/app/components/ProjectGallery";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="page project-page">
      <header className="page-heading">
        <h1 className="page-title">{project.title}</h1>
        <p className="page-subtitle">{project.subtitle}</p>
        {project.description && <p className="page-description">{project.description}</p>}
      </header>

      <ProjectGallery images={project.images} legend={project.legend} columns={project.columns} />
    </section>
  );
}
