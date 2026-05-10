import Image from 'next/image'
import Link from 'next/link'
import { actualites } from '@/lib/data'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

export async function generateStaticParams() {
  return actualites.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const article = actualites.find(a => a.slug === params.slug)
  if (!article) return {}
  return { title: `${article.titre} — CNDRS`, description: article.description }
}

export default function ArticlePage({ params }) {
  const article = actualites.find(a => a.slug === params.slug)
  if (!article) notFound()

  const autres = actualites.filter(a => a.slug !== article.slug).slice(0, 2)

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: `url(${article.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/actualites" className={styles.back}>← Actualités</Link>
          <span className={styles.categorie}>{article.categorie}</span>
          <h1>{article.titre}</h1>
          <p className={styles.date}>{article.date}</p>
        </div>
      </div>

      <div className={styles.inner}>
        <article className={styles.article}>
          <p className={styles.chapeau}>{article.description}</p>
          <div className={styles.contenu}>
            {article.contenu.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <aside className={styles.aside}>
          <h3>Autres actualités</h3>
          <div className={styles.autresList}>
            {autres.map(a => (
              <Link key={a.slug} href={`/actualites/${a.slug}`} className={styles.autreCard}>
                <div className={styles.autreImgWrap}>
                  <Image src={a.image} alt={a.titre} fill className={styles.autreImg} sizes="120px" />
                </div>
                <div>
                  <span className={styles.autreCat}>{a.categorie}</span>
                  <p className={styles.autreTitre}>{a.titre}</p>
                  <span className={styles.autreDate}>{a.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
