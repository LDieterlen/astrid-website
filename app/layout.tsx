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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
