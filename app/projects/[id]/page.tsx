import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

export function generateStaticParams() {
  const ids = [...new Set(projects.map((p) => p.id))];
  return ids.map((id) => ({ id }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="page project-page">
      <Link href="/" className="back-link">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Retour aux projets
      </Link>

      <div className="hero-media">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="hero-image object-cover"
          priority
        />
      </div>

      <h1 className="section-title">{project.title}</h1>
    </div>
  );
}
