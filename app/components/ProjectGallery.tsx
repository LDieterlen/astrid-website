import Image from "next/image";
import { GalleryImage } from "@/app/data/projects";

interface ProjectGalleryProps {
  images: GalleryImage[];
  legend?: string;
  columns?: number;
  rowHeight?: string;
}

export function ProjectGallery({
  images,
  legend,
  columns = 4,
  rowHeight = "280px",
}: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mt-[0.2rem]" aria-label="Galerie du projet">
      <div
        className="grid gap-[0.55rem] p-[0.55rem] bg-white max-[680px]:flex max-[680px]:flex-col max-[680px]:p-[0.45rem] max-[680px]:gap-[0.45rem]"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridAutoRows: rowHeight,
        }}
      >
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="relative overflow-hidden bg-white max-[680px]:aspect-[3/4] max-[680px]:w-full"
            style={{
              gridRow: `${image.row} / span ${image.rowSpan ?? 1}`,
              gridColumn: `${image.column} / span ${image.colSpan ?? 1}`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt ?? `Image ${index + 1} du projet`}
              fill
              sizes="(max-width: 680px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>

      {legend && (
        <p className="mt-[0.25rem] text-[0.78rem] leading-[1.4] text-center text-[var(--color-text-tertiary)]">
          {legend}
        </p>
      )}
    </section>
  );
}
