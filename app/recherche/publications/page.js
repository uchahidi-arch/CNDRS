import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Publications scientifiques — CNDRS',
  description: 'Les publications scientifiques du CNDRS — rapports, articles, bulletins et travaux de recherche sur les Comores.',
}

const publications = [
  { type: "Bulletin OVK", titre: "Bulletin d'activité volcanique — Avril 2026", date: "Mai 2026", auteur: "OVK — CNDRS", pages: 12, href: "#" },
  { type: "Article", titre: "Archéologie sous-marine aux Comores : premiers résultats des fouilles de Domoni", date: "Avril 2026", auteur: "Dr. Ahmed Said", pages: 18, href: "#" },
  { type: "Rapport", titre: "État de conservation des médinas historiques de Moroni", date: "Mars 2026", auteur: "CNDRS / UNESCO", pages: 64, href: "#" },
  { type: "Article", titre: "Variantes dialectales du shikomori à Ndzuani — étude sociolinguistique", date: "Février 2026", auteur: "Dr. Fatouma Mmadi", pages: 22, href: "#" },
  { type: "Bulletin OVK", titre: "Bulletin d'activité volcanique — Janvier 2026", date: "Février 2026", auteur: "OVK — CNDRS", pages: 10, href: "#" },
  { type: "Rapport", titre: "Biodiversité marine des Comores — inventaire 2025", date: "Janvier 2026", auteur: "CND — CNDRS", pages: 88, href: "#" },
  { type: "Article", titre: "Le grand mariage de Ngazidja : mutations contemporaines d'une institution séculaire", date: "Décembre 2025", auteur: "Dr. Said Omar", pages: 26, href: "#" },
  { type: "Bulletin OVK", titre: "Bulletin d'activité volcanique — Octobre 2025", date: "Novembre 2025", auteur: "OVK — CNDRS", pages: 11, href: "#" },
]

const typeColors = {
  "Bulletin OVK": "#e74c3c",
  "Article": "#1A5C2A",
  "Rapport": "#7a6a4a",
}

export default function PublicationsPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Publications scientifiques"
        description="L'ensemble des publications scientifiques du CNDRS — articles, rapports, bulletins volcanologiques et travaux de recherche."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.filters}>
          <button className={`${styles.filter} ${styles.active}`}>Toutes</button>
          <button className={styles.filter}>Articles</button>
          <button className={styles.filter}>Rapports</button>
          <button className={styles.filter}>Bulletins OVK</button>
        </div>

        <div className={styles.list}>
          {publications.map((p, i) => (
            <a key={i} href={p.href} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.type} style={{ background: typeColors[p.type] + '20', color: typeColors[p.type] }}>
                  {p.type}
                </span>
                <h3>{p.titre}</h3>
                <div className={styles.meta}>
                  <span>{p.auteur}</span>
                  <span>·</span>
                  <span>{p.pages} pages</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
              </div>
              <div className={styles.itemRight}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                PDF
              </div>
            </a>
          ))}
        </div>

        <div className={styles.yaMkobeBlock}>
          <p>Pour les articles publiés dans Ya Mkobe, consultez</p>
          <Link href="/recherche/ya-mkobe" className={styles.yaMkobeLink}>la page dédiée à Ya Mkobe →</Link>
        </div>
      </div>
    </div>
  )
}
