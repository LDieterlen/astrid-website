interface HeroSectionProps {
  t: any;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <div className="page-heading">
      <h1 className="page-title">{t.navbar.brand}</h1>
      <p className="page-subtitle">{t.contact.intro}</p>
    </div>
  );
}
