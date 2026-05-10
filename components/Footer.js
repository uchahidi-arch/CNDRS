import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.logoCol}>
            <div className={styles.logoWrap}>
              <Image
                src="https://cndrs.km/wp-content/uploads/2024/04/LOGO-CNDRS.png"
                alt="CNDRS"
                width={70}
                height={70}
              />
            </div>
          </div>

          <div className={styles.col}>
            <h4>Ministère de tutelle</h4>
            <a href="https://gouvernement.km" target="_blank" rel="noopener">Ministère de l'Éducation nationale</a>
            <a href="https://gouvernement.km" target="_blank" rel="noopener">Gouvernement de l'Union des Comores</a>
          </div>

          <div className={styles.col}>
            <h4>Nous rendre visite</h4>
            <span>Boulevard Karthala, Moroni</span>
            <span>Union des Comores</span>
            <span>BP: 0092123</span>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <a href="mailto:contact@cndrs.km">contact@cndrs.km</a>
            <a href="tel:+269773910">+269 773 91 02</a>
          </div>

          <div className={styles.col}>
            <h4>Réseaux sociaux</h4>
            <div className={styles.social}>
              <a href="#" className={styles.fb} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className={styles.tw} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" className={styles.yt} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          Copyright {new Date().getFullYear()} © CNDRS — Centre National de Documentation et de Recherche Scientifique des Comores
        </div>
      </div>
    </footer>
  )
}
