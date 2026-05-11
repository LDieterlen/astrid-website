"use client";

import { useMemo } from "react";

interface GridImageGalleryProps {
  images: string[];
  altPrefix: string;
  className?: string;
  rowHeight?: number;
  maxRows?: number;
  margin?: number;
  ratio?: "square" | "landscape";
}

export function GridImageGallery({
  images,
  altPrefix,
  className,
  rowHeight = 240,
  maxRows,
  margin = 0,
  ratio = "landscape",
}: GridImageGalleryProps) {
  const uniqueImages = useMemo(() => {
    return images.filter((image, index, all) => Boolean(image) && all.indexOf(image) === index);
  }, [images]);

  if (uniqueImages.length === 0) {
    return null;
  }

  const aspectRatio = ratio === "square" ? "1/1" : "16/9";

  return (
    <div className={className} style={{ display: "flex", flexWrap: "wrap", gap: `${margin}px` }}>
      {uniqueImages.map((src, index) => (
        <div
          key={`${src}-${index}`}
          style={{
            flex: "1 1 100%",
            minHeight: `${rowHeight}px`,
            aspectRatio,
            overflow: "hidden",
            borderRadius: 0,
          }}
        >
          <img
            src={src}
            alt={`${altPrefix} ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}
