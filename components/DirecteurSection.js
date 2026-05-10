import Image from 'next/image'
import Link from 'next/link'
import styles from './DirecteurSection.module.css'

export default function DirecteurSection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <Image
          src="https://cndrs.km/wp-content/uploads/2024/04/Dir-Toiwilou-Mze-Hamadi.jpg"
          alt="Dr. Toiwilou Mze Hamadi"
          width={260}
          height={300}
          className={styles.photo}
        />
        <div className={styles.texte}>
          <h2>Mot du Directeur</h2>
          <p>Chers visiteurs, bienvenue sur le site du Centre National de Documentation et de Recherche Scientifique. Notre mission est de valoriser le patrimoine culturel et scientifique de notre nation, en créant un espace de réflexion, de mémoire et d'innovation pour les générations présentes et futures.</p>
          <p className={styles.signature}>
            Dr. Toiwilou Mze Hamadi<br />
            Directeur Général du CNDRS
          </p>
          <Link href="/institution/presentation" className={styles.btn}>Lire plus</Link>
        </div>
      </div>
    </section>
  )
}
