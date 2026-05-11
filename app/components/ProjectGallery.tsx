import Image from "next/image";
import { GalleryImage } from "@/app/data/projects";

interface ProjectGalleryProps {
  images: GalleryImage[];
  legend?: string;
}

export function ProjectGallery({ images, legend }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const [featuredImage, ...thumbnailImages] = images;

  return (
    <section className="project-gallery" aria-label="Galerie du projet">
      <figure className="project-gallery__featured">
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt ?? "Image principale du projet"}
          fill
          priority
          sizes="(max-width: 680px) calc(100vw - 1.4rem), 1080px"
          className="project-gallery__image"
        />
      </figure>

      {thumbnailImages.length > 0 && (
        <div className="project-gallery__thumbs">
          {thumbnailImages.map((image, index) => (
            <figure className="project-gallery__thumb" key={`${image.src}-${index}`}>
              <Image
                src={image.src}
                alt={image.alt ?? `Image ${index + 2} du projet`}
                fill
                sizes="(max-width: 680px) calc((100vw - 2rem) / 2), calc((100vw - 4rem) / 4)"
                className="project-gallery__image"
              />
            </figure>
          ))}
        </div>
      )}

      {legend && <p className="project-gallery__legend">{legend}</p>}
    </section>
  );
}
