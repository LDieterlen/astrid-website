import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import fr from "@/resource/translations/fr.json";

export const metadata: Metadata = {
  title: fr.metadata.title,
  description: fr.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
