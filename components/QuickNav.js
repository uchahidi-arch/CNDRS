import Link from 'next/link'
import styles from './QuickNav.module.css'

const LINKS = [
  { label: "Archives nationales", href: "/structures/archives" },
  { label: "Bibliothèque nationale", href: "/structures/bibliotheque" },
  { label: "Ya Mkobe", href: "/recherche/ya-mkobe" },
  { label: "Musée national", href: "/structures/musee" },
]

export default function QuickNav() {
  return (
    <div className={styles.bar}>
      {LINKS.map(l => (
        <Link key={l.href} href={l.href} className={styles.pill}>
          {l.label}
        </Link>
      ))}
    </div>
  )
}
