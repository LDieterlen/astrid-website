"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-brand">
          Astrid Dieterlen
        </Link>
        <div className="site-nav__links">
          <Link href="/" className={`nav-link${pathname === "/" ? " is-active" : ""}`}>
            Projets
          </Link>
          <Link href="/contact" className={`nav-link${pathname === "/contact" ? " is-active" : ""}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
