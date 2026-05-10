import PageHero from '../../../components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: 'Nos chercheurs — CNDRS',
  description: 'Les chercheurs du Centre National de Documentation et de Recherche Scientifique des Comores et leurs travaux.',
}

const chercheurs = [
  { nom: "Dr. Toiwilou Mze Hamadi", poste: "Directeur Général", specialite: "Histoire et civilisation comorienne", publications: 12, photo: "https://cndrs.km/wp-content/uploads/2024/04/Dir-Toiwilou-Mze-Hamadi.jpg" },
  { nom: "À compléter", poste: "Chercheur", specialite: "Archéologie et traditions orales", publications: 8, photo: null },
  { nom: "À compléter", poste: "Chercheur", specialite: "Linguistique comorienne", publications: 6, photo: null },
  { nom: "À compléter", poste: "Chercheur", specialite: "Sciences de la terre et volcanologie", publications: 10, photo: null },
  { nom: "À compléter", poste: "Chercheur", specialite: "Civilisation arabo-islamique", publications: 7, photo: null },
  { nom: "À compléter", poste: "Chercheur", specialite: "Biodiversité marine et écosystèmes", publications: 5, photo: null },
]

export default function ChercheurPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Nos chercheurs"
        description="Les chercheurs du CNDRS produisent des travaux de référence sur l'histoire, la culture, les sciences naturelles et le patrimoine de l'archipel comorien."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {chercheurs.map((c, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.photo}
                style={{ backgroundImage: c.photo ? `url(${c.photo})` : 'none' }}
              >
                {!c.photo && (
                  <div className={styles.photoPlaceholder}>
                    <span>{c.nom.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <h3>{c.nom}</h3>
                <p className={styles.poste}>{c.poste}</p>
                <p className={styles.specialite}>{c.specialite}</p>
                <div className={styles.footer}>
                  <span className={styles.publications}>{c.publications} publications</span>
                  <a href="#" className={styles.voir}>Voir le profil →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
