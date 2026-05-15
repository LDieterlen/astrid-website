import Image from "next/image";
import fr from "@/resource/translations/fr.json";

export default function AboutPage() {
  const t = fr.about;

  return (
    <div className="page about-page">

      {/* Biography section */}
      <section className="bio-section">
        <h2 className="bio-section__title">{t.sectionTitle}</h2>

        <div className="bio-layout">
          {/* Portrait */}
          <div className="bio-portrait">
            <Image
              src="/images/ARCHI INT/COMM/DSC02155.jpg"
              alt={t.portraitAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 38vw, 100vw"
              priority
            />
          </div>

          {/* Text */}
          <div className="bio-text">
            {t.bio.map((paragraph, i) => (
              <p key={i} className="bio-paragraph">
                {paragraph}
              </p>
            ))}
            <a href={t.cvFile} target="_blank" rel="noopener noreferrer" className="bio-cv-link">
              → {t.cvLink}
            </a>
          </div>
        </div>
      </section>

      {/* Gallery sections */}
      {t.sections.map((section, si) => (
        <section key={si} className="bio-gallery-section">
          <h3 className="bio-gallery-section__title">{section.title}</h3>
          {section.subtitle && (
            <p className="bio-gallery-section__subtitle">{section.subtitle}</p>
          )}
          <div className="bio-gallery">
            {section.images.map((img, ii) => (
              <div key={ii} className="bio-gallery__item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 12vw, (min-width: 640px) 20vw, 45vw"
                />
              </div>
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}
