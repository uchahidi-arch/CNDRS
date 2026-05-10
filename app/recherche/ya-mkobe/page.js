import PageHero from '../../../components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Ya Mkobe — CNDRS',
  description: 'La revue scientifique du CNDRS publiée depuis les années 1980, couvrant l\'histoire, la linguistique, l\'archéologie et les sciences naturelles des Comores.',
}

const numeros = [
  { num: 48, date: "Avril 2026", theme: "Archéologie sous-marine et échanges commerciaux dans l'océan Indien médiéval", articles: 6 },
  { num: 47, date: "Octobre 2025", theme: "Traditions orales et transmission du savoir dans l'archipel comorien", articles: 8 },
  { num: 46, date: "Avril 2025", theme: "Les sultanats de Ngazidja : histoire politique et organisation sociale", articles: 7 },
  { num: 45, date: "Octobre 2024", theme: "Linguistique comorienne : dialectes, emprunts et évolution du shikomori", articles: 5 },
  { num: 44, date: "Avril 2024", theme: "Patrimoine naturel des Comores : biodiversité marine et volcanique", articles: 9 },
  { num: 43, date: "Octobre 2023", theme: "Manuscrits arabes des Comores : catalogage et analyse", articles: 6 },
]

export default function YaMkobePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Ya Mkobe"
        description="Revue scientifique du CNDRS publiée depuis 1982. Elle couvre l'histoire, la linguistique, l'archéologie, les traditions orales et les sciences naturelles de l'archipel comorien."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <h2>Une revue de référence depuis 1982</h2>
            <p>Ya Mkobe est la publication scientifique de référence du Centre National de Documentation et de Recherche Scientifique des Comores. Depuis sa création en 1982, elle publie des travaux de chercheurs comoriens et internationaux sur toutes les disciplines touchant à l'archipel.</p>
            <p>Chaque numéro est organisé autour d'un thème central, complété par des articles libres, des notes de terrain et des comptes rendus d'ouvrages. La revue est disponible en open access sur cette plateforme.</p>
          </div>
          <div className={styles.dernierNumero}>
            <div className={styles.coverCard}>
              <p className={styles.coverLabel}>Ya Mkobe</p>
              <p className={styles.coverNum}>N°48</p>
              <p className={styles.coverYear}>Avril 2026</p>
            </div>
            <a href="#" className={styles.dlBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Télécharger le N°48
            </a>
          </div>
        </div>

        <div className={styles.separator} />

        <section className={styles.numerosSection}>
          <h2>Tous les numéros</h2>
          <div className={styles.grid}>
            {numeros.map(n => (
              <div key={n.num} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNum}>N°{n.num}</span>
                  <span className={styles.cardDate}>{n.date}</span>
                </div>
                <p className={styles.cardTheme}>{n.theme}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardArticles}>{n.articles} articles</span>
                  <div className={styles.cardBtns}>
                    <a href="#" className={styles.btnLire}>Lire</a>
                    <a href="#" className={styles.btnDl}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.soumettre}>
          <h2>Soumettre un article</h2>
          <p>Ya Mkobe accepte des contributions de chercheurs comoriens et internationaux dans toutes les disciplines touchant à l'archipel des Comores et à l'océan Indien. Les articles sont soumis à un processus de relecture par les pairs.</p>
          <Link href="/services/evenements" className={styles.btnSoumettre}>Consulter les instructions aux auteurs →</Link>
        </section>
      </div>
    </div>
  )
}
