import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: "Rapports d'activité — CNDRS",
  description: "Les rapports annuels d'activité du Centre National de Documentation et de Recherche Scientifique des Comores.",
}

const rapports = [
  { annee: 2025, description: "Bilan des activités 2025 — numérisation des archives, expositions du musée, publications scientifiques et partenariats.", pages: 48, disponible: true },
  { annee: 2024, description: "Bilan des activités 2024 — lancement du programme de numérisation, colloque international sur les sultanats.", pages: 52, disponible: true },
  { annee: 2023, description: "Bilan des activités 2023 — rénovation du musée national, partenariat UNESCO, numéros 45 et 46 de Ya Mkobe.", pages: 44, disponible: true },
  { annee: 2022, description: "Bilan des activités 2022 — formations, acquisitions bibliothèque, travaux de l'OVK.", pages: 38, disponible: true },
  { annee: 2021, description: "Bilan des activités 2021 — reprise post-covid, réorganisation des services, projets numériques.", pages: 36, disponible: false },
]

export default function RapportsPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="L'Institution"
        titre="Rapports d'activité"
        description="Les bilans annuels du CNDRS — activités, publications, événements et perspectives de développement institutionnel."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.list}>
          {rapports.map(r => (
            <div key={r.annee} className={styles.item}>
              <div className={styles.anneeBlock}>
                <span className={styles.annee}>{r.annee}</span>
              </div>
              <div className={styles.info}>
                <h3>Rapport d'activité {r.annee}</h3>
                <p>{r.description}</p>
                <span className={styles.pages}>{r.pages} pages</span>
              </div>
              <div className={styles.actions}>
                {r.disponible ? (
                  <>
                    <a href="#" className={styles.btnLire}>Lire en ligne</a>
                    <a href="#" className={styles.btnDl}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Télécharger
                    </a>
                  </>
                ) : (
                  <span className={styles.indispo}>Non disponible</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
