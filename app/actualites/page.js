import Link from 'next/link'
import Image from 'next/image'
import { actualites } from '@/lib/data'
import styles from './page.module.css'

export const metadata = {
  title: 'Actualités — CNDRS',
  description: 'Les dernières actualités du Centre National de Documentation et de Recherche Scientifique des Comores.',
}

export default function ActualitesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1>Actualités</h1>
        <p>Les dernières nouvelles du CNDRS et de ses partenaires</p>
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {actualites.map(a => (
            <Link key={a.slug} href={`/actualites/${a.slug}`} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={a.image}
                  alt={a.titre}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.body}>
                <span className={styles.categorie}>{a.categorie}</span>
                <h2>{a.titre}</h2>
                <p>{a.description}</p>
                <span className={styles.date}>{a.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
