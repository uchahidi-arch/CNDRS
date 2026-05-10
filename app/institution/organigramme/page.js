import PageHero from '../../../components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: 'Organigramme — CNDRS',
  description: 'La direction et les équipes du Centre National de Documentation et de Recherche Scientifique.',
}

const equipe = [
  { nom: "Dr. Toiwilou Mze Hamadi", poste: "Directeur Général", photo: "https://cndrs.km/wp-content/uploads/2024/04/Dir-Toiwilou-Mze-Hamadi.jpg" },
]

const departements = [
  { nom: "Archives nationales", responsable: "À compléter", missions: ["Conservation des fonds d'archives", "Traitement et classement des documents", "Communication des archives aux chercheurs"] },
  { nom: "Bibliothèque nationale", responsable: "À compléter", missions: ["Gestion du fonds documentaire", "Accueil du public", "Catalogage et indexation"] },
  { nom: "Musée national", responsable: "À compléter", missions: ["Conservation des collections", "Médiation culturelle", "Expositions permanentes et temporaires"] },
  { nom: "Observatoire du Karthala", responsable: "À compléter", missions: ["Surveillance volcanique", "Recherche en sciences de la terre", "Alertes sismiques"] },
  { nom: "Département arabo-islamique", responsable: "À compléter", missions: ["Conservation des manuscrits arabes", "Recherche sur la civilisation islamique", "Valorisation du patrimoine islamique"] },
  { nom: "Centre national de données", responsable: "À compléter", missions: ["Centralisation des données scientifiques", "Diffusion et accès aux données", "Partenariats de recherche"] },
]

export default function OrganigrammePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="L'Institution"
        titre="Organigramme"
        description="La direction et les structures du CNDRS"
        image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      />

      <div className={styles.inner}>
        <section className={styles.direction}>
          <h2>Direction générale</h2>
          <div className={styles.dirCard}>
            <div className={styles.dirPhoto} style={{ backgroundImage: `url(${equipe[0].photo})` }} />
            <div>
              <h3>{equipe[0].nom}</h3>
              <p>{equipe[0].poste}</p>
            </div>
          </div>
        </section>

        <section className={styles.departements}>
          <h2>Départements et structures</h2>
          <div className={styles.grid}>
            {departements.map(d => (
              <div key={d.nom} className={styles.card}>
                <h3>{d.nom}</h3>
                <p className={styles.responsable}>Responsable : {d.responsable}</p>
                <ul className={styles.missions}>
                  {d.missions.map(m => <li key={m}>{m}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
