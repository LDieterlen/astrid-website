"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import fr from "@/resource/translations/fr.json";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-brand">
          {fr.navbar.brand}
        </Link>
        <div className="site-nav__links">
          <Link href="/" className={`nav-link${pathname === "/" ? " is-active" : ""}`}>
            {fr.navbar.projects}
          </Link>
          <Link href="/contact" className={`nav-link${pathname === "/contact" ? " is-active" : ""}`}>
            {fr.navbar.contact}
          </Link>
          <Link href="/about" className={`nav-link${pathname === "/about" ? " is-active" : ""}`}>
            {fr.navbar.about}
          </Link>
        </div>
      </div>
    </nav>
  );
}
