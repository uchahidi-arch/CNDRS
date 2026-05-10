import Image from 'next/image'
import styles from './PageHero.module.css'

export default function PageHero({ label, titre, description, image }) {
  return (
    <div className={styles.hero}>
      {image && (
        <div className={styles.imgWrap}>
          <Image
            src={image}
            alt={titre}
            fill
            className={styles.img}
            sizes="100vw"
            priority
          />
        </div>
      )}
      <div className={styles.text}>
        {label && <span className={styles.label}>{label}</span>}
        <h1 className={styles.titre}>{titre}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}
