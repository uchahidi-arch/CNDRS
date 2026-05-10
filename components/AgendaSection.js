import Link from 'next/link'
import styles from './AgendaSection.module.css'

const evenements = [
  { date: "15 Mai 2026", titre: "Colloque international sur les sultanats de l'archipel", lieu: "Salle de conférences CNDRS, Moroni", type: "Colloque" },
  { date: "22 Mai 2026", titre: "Journée portes ouvertes — Musée national", lieu: "Musée national du CNDRS", type: "Événement" },
  { date: "5 Juin 2026", titre: "Présentation du numéro 48 de Ya Mkobe", lieu: "Bibliothèque nationale, Moroni", type: "Publication" },
]

export default function AgendaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Agenda</h2>
          <Link href="/services/evenements" className={styles.voir}>Voir tous les événements →</Link>
        </div>
        <div className={styles.list}>
          {evenements.map((e, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dateBlock}>
                <span className={styles.day}>{e.date.split(' ')[0]}</span>
                <span className={styles.month}>{e.date.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.type}>{e.type}</span>
                <h3>{e.titre}</h3>
                <p>{e.lieu}</p>
              </div>
              <Link href="/services/evenements" className={styles.inscrit}>S'inscrire →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
