import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './StructurePage.module.css'

export default function StructurePage({ label, titre, description, image, intro, sections, services }) {
  return (
    <div className={styles.page}>
      <PageHero
        label={label}
        titre={titre}
        description={description}
        image={image}
      />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.content}>
            {intro && (
              <section className={styles.section}>
                <h2>{intro.titre}</h2>
                {intro.paragraphes.map((p, i) => <p key={i}>{p}</p>)}
              </section>
            )}

            {sections && sections.map((s, i) => (
              <section key={i} className={styles.section}>
                <h2>{s.titre}</h2>
                {s.paragraphes && s.paragraphes.map((p, j) => <p key={j}>{p}</p>)}
                {s.items && (
                  <ul className={styles.list}>
                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3>Accès et services</h3>
              {services && services.map((s, i) => (
                <Link key={i} href={s.href} className={styles.serviceLink}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  {s.label}
                </Link>
              ))}
            </div>

            <div className={styles.asideCard}>
              <h3>Horaires</h3>
              <p className={styles.horaire}>Lundi — Vendredi</p>
              <p className={styles.heures}>8H00 → 16H00</p>
              <p className={styles.horaire}>Samedi</p>
              <p className={styles.heures}>8H00 → 12H00</p>
            </div>

            <div className={styles.asideCard}>
              <h3>Contact</h3>
              <p>Boulevard Karthala, Moroni</p>
              <a href="mailto:contact@cndrs.km">contact@cndrs.km</a>
              <a href="tel:+269773910">+269 773 91 02</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
