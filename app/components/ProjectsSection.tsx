import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

export function ProjectsSection() {
  return (
    <section className="w-full py-8 pb-20">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="relative aspect-square overflow-hidden bg-neutral-100"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
