import styles from './PartenairesSection.module.css'

const partenaires = [
  { nom: "UNESCO", href: "https://unesco.org" },
  { nom: "Commission de l'Océan Indien", href: "https://commissionoceanindien.org" },
  { nom: "Union Européenne", href: "https://europa.eu" },
  { nom: "IFLA", href: "https://ifla.org" },
]

export default function PartenairesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Partenaires institutionnels</p>
        <div className={styles.list}>
          {partenaires.map(p => (
            <a key={p.nom} href={p.href} target="_blank" rel="noopener" className={styles.item}>
              {p.nom}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
