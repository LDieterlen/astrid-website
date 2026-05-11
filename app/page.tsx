import { getTranslator } from "./lib/getTranslator";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  const t = getTranslator();

  return (
    <main className="page home-page">
      <HeroSection t={t} />
      <ProjectsSection />
    </main>
  );
}
