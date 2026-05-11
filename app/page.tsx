import { getTranslator } from "./lib/getTranslator";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  const t = getTranslator();

  return (
    <main className="page home-page">
      <ProjectsSection />
    </main>
  );
}
