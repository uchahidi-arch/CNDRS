import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Bande institutionnelle */}
      <div className={styles.govStripe}>
        <div className={styles.govInner}>
          <Image src="/SEAUDeLETAT.png" alt="Sceau de l'Union des Comores" width={22} height={22} className={styles.govSceau} />
          <span>République de l'Union des Comores &nbsp;·&nbsp; Unité – Solidarité – Développement</span>
        </div>
      </div>

      {/* Corps du footer */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Colonne 1 — Adresse */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Nous rendre visite</p>
            <span>Boulevard Karthala, Moroni</span>
            <span>Union des Comores</span>
            <span>BP : 0092123</span>
            <span className={styles.horaires}>Lun – Ven &nbsp;·&nbsp; 8h – 16h</span>
          </div>

          {/* Colonne 2 — Contact */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Contact</p>
            <a href="mailto:contact@cndrs.km">contact@cndrs.km</a>
            <a href="tel:+26977391002">+269 773 91 02</a>
            <Link href="/contact" className={styles.contactLink}>Formulaire de contact →</Link>
            <div className={styles.social}>
              <a href="https://www.facebook.com/cndrs.comores.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/cndrscomores/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          {/* Colonne 3 — Tutelle */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Sous tutelle de</p>
            <a href="https://gouvernement.km" target="_blank" rel="noopener noreferrer">Ministère de la Culture</a>
            <a href="https://gouvernement.km" target="_blank" rel="noopener noreferrer">Ministère de la Recherche scientifique</a>
            <a href="https://mineducomores.gouv.km/" target="_blank" rel="noopener noreferrer">Ministère de l'Éducation nationale</a>
            <div className={styles.sceauBlock}>
              <Image src="/SEAUDeLETAT.png" alt="Sceau de l'État" width={48} height={48} className={styles.sceauLarge} />
            </div>
          </div>

          {/* Colonne 4 — Logo + Identité */}
          <div className={styles.identity}>
            <div className={styles.logoWrap}>
              <Image src="/LOGO-CNDRS.png" alt="Logo CNDRS" width={88} height={88} className={styles.logo} />
            </div>
            <p className={styles.identitySub}>Centre National de Documentation<br />et de Recherche Scientifique<br />des Comores</p>
          </div>

        </div>
      </div>

      {/* Bas de footer */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {new Date().getFullYear()} CNDRS — Centre National de Documentation et de Recherche Scientifique des Comores</span>
          <div className={styles.bottomLinks}>
            <Link href="/contact">Contact</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <a href="https://cndrs.km" target="_blank" rel="noopener noreferrer">Site actuel</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
