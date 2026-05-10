'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './HeroCarousel.module.css'

export default function HeroCarousel({ actualites }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % actualites.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [actualites.length])

  const article = actualites[current]

  return (
    <section className={styles.hero}>
      {actualites.map((a, i) => (
        <div
          key={a.slug}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${a.image})` }}
        />
      ))}

      <div className={styles.gradient} />

      <div className={styles.content}>
        <span className={styles.categorie}>{article.categorie}</span>
        <h1 className={styles.titre}>{article.titre}</h1>
        <Link href={`/actualites/${article.slug}`} className={styles.btn}>
          En savoir plus →
        </Link>
      </div>

      <div className={styles.infoBlock}>
        <p className={styles.infoLabel}>Musée National</p>
        <p className={styles.infoSub}>Ouvert du lundi au samedi</p>
        <p className={styles.infoHours}>8H → 17H</p>
        <button className={styles.reserveBtn} data-modal="reservation">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
          Réserver une visite
        </button>
        <Link href="/services/reserver" className={styles.prepareBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Préparer sa visite
        </Link>
      </div>

      <div className={styles.dots}>
        {actualites.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Actualité ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
