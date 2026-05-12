'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './HeroCarousel.module.css'

export default function HeroCarousel({ actualites }) {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % actualites.length)
      setAnimKey(prev => prev + 1)
    }, 6000)
    return () => clearInterval(timer)
  }, [actualites.length])

  const handleDot = (i) => {
    setCurrent(i)
    setAnimKey(prev => prev + 1)
  }

  const article = actualites[current]

  return (
    <section className={styles.hero}>
      {actualites.map((a, i) => (
        <div
          key={a.slug}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${a.image})` }}
        >
          {i === current && (
            <div
              key={animKey}
              className={styles.zoomLayer}
              style={{ backgroundImage: `url(${a.image})` }}
            />
          )}
        </div>
      ))}

      <div className={styles.gradient} />

      <div className={styles.content}>
        <span className={styles.categorie}>{article.categorie}</span>
        <h1 className={styles.titre}>{article.titre}</h1>
        <Link href={`/actualites/${article.slug}`} className={styles.btn}>
          En savoir plus →
        </Link>
      </div>

      <div className={styles.dots}>
        {actualites.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => handleDot(i)}
            aria-label={`Actualité ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
