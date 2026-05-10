import Link from 'next/link'
import styles from './YaMkobeSection.module.css'

export default function YaMkobeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.label}>Revue scientifique</span>
          <h2>Ya Mkobe</h2>
          <p>Publiée depuis les années 1980, Ya Mkobe est la revue scientifique de référence du CNDRS. Elle couvre l'histoire, la linguistique, l'archéologie, les traditions orales et les sciences naturelles de l'archipel comorien.</p>
          <p className={styles.numero}>Dernier numéro — N° 48 — Avril 2026</p>
          <div className={styles.btns}>
            <Link href="/recherche/ya-mkobe" className={styles.btnPrimary}>Voir tous les numéros</Link>
            <a href="#" className={styles.btnSecondary}>Télécharger le N°48</a>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.coverCard}>
            <p className={styles.coverLabel}>Ya Mkobe</p>
            <p className={styles.coverNum}>N°48</p>
            <p className={styles.coverYear}>Avril 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
