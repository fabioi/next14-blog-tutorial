import Link from "next/link"
import styles from "./navigation.module.css"

export default function Navigation() {
      return (
            <>
                  <nav className="font-mono">
                        <ul className="flex md:space-x-4 flex-col md:flex-row">
                              <li><Link className={styles.link} href="/">Home</Link></li>
                              <li><Link className={styles.link} href="/about">About</Link></li>
                              <li><Link className={styles.link} href="/about/projects">Projects</Link></li>
                              <li><Link className={styles.link} href="/photos">Photos</Link></li>
                        </ul>
                  </nav>

            </>
      )
}