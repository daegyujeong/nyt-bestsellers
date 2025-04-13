"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          NYT Best Sellers
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link
            href="/"
            className={path === "/" ? styles.active : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path === "/about" ? styles.active : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
