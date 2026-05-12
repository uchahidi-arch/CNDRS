'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Navbar.module.css'

const NAV = [
  {
    label: "L'Institution",
    items: [
      { label: "Présentation & histoire", href: "/institution/presentation" },
      { label: "Organigramme", href: "/institution/organigramme" },
      { label: "Archives nationales", href: "/structures/archives" },
      { label: "Bibliothèque nationale", href: "/structures/bibliotheque" },
      { label: "Musée national", href: "/structures/musee" },
      { label: "Observatoire du Karthala", href: "/structures/ovk" },
      { label: "Département arabo-islamique", href: "/structures/arabo-islamique" },
      { label: "Centre de données", href: "/structures/centre-donnees" },
      { label: "Partenaires", href: "/institution/partenaires" },
      { label: "Rapports d'activité", href: "/institution/rapports" },
    ]
  },
  {
    label: "Patrimoine & Recherche",
    items: [
      { label: "Ya Mkobe", href: "/recherche/ya-mkobe" },
      { label: "Publications scientifiques", href: "/recherche/publications" },
      { label: "Nos chercheurs", href: "/recherche/chercheurs" },
      { label: "Chroniques historiques", href: "/recherche/chroniques" },
      { label: "Fiches patrimoniales", href: "/recherche/fiches-patrimoniales" },
      { label: "Manuscrits", href: "/recherche/manuscrits" },
      { label: "Glossaire comorien", href: "/recherche/glossaire" },
      { label: "Patrimoine naturel", href: "/recherche/patrimoine-naturel" },
    ]
  },
  {
    label: "Collections",
    items: [
      { label: "Catalogue de la bibliothèque", href: "/collections/catalogue" },
      { label: "Iconothèque", href: "/collections/iconotheque" },
      { label: "Collections du musée", href: "/collections/musee" },
      { label: "Visite virtuelle", href: "/collections/visite-virtuelle" },
      { label: "Fonds arabo-islamique", href: "/collections/arabo-islamique" },
    ]
  },
  {
    label: "Services",
    items: [
      { label: "Réserver une visite", href: "/services/reserver" },
      { label: "Fonds d'archives", href: "/services/archives" },
      { label: "Consulter les archives", href: "/services/archives" },
      { label: "Salle de lecture", href: "/services/salle-lecture" },
      { label: "Événements & colloques", href: "/services/evenements" },
      { label: "Espace diaspora", href: "/services/diaspora" },
      { label: "Espace éducatif", href: "/services/educatif" },
    ]
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://cndrs.km/wp-content/uploads/2024/04/LOGO-CNDRS.png"
            alt="Logo CNDRS"
            width={75}
            height={75}
            style={{ height: '75px', width: 'auto' }}
          />
        </Link>

        <nav className={styles.nav}>
          {NAV.map((item) => (
            <div key={item.label} className={styles.dropdown}>
              <button className={styles.dropdownTrigger}>
                {item.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={styles.dropdownMenu}>
                {item.items.map((sub) => (
                  <Link key={sub.href} href={sub.href} className={styles.dropdownItem}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.menuBtn} aria-label="Menu">
            Menu
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <button className={styles.searchBtn} aria-label="Rechercher">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
