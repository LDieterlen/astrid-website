import { GridImageGallery } from "@/app/components/GridImageGallery";
import fr from "@/resource/translations/fr.json";

export default function ContactPage() {
  return (
    <section className="page contact-page">
      <div className="contact-grid">
        <div className="portrait-frame">
          <GridImageGallery
            images={["/images/contact/portrait.jpg"]}
            altPrefix={fr.contact.title}
            className="portrait-gallery"
            rowHeight={380}
            maxRows={1}
            ratio="square"
          />
        </div>

        <div className="contact-panel">
          <h1 className="section-title">{fr.contact.title}</h1>
          <p className="body-copy">
            {fr.contact.intro}
          </p>
          <p className="body-copy">
            {fr.contact.cta}
          </p>

          <div className="meta-list">
            <div>
              <h3 className="meta-label">
                {fr.contact.emailLabel}
              </h3>
              <a
                href="mailto:hello@designer.com"
                className="meta-link"
              >
                {fr.contact.emailValue}
              </a>
            </div>
            <div>
              <h3 className="meta-label">
                {fr.contact.locationLabel}
              </h3>
              <p className="meta-value">{fr.contact.locationValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
