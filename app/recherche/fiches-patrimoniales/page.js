import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: 'Fiches patrimoniales — CNDRS',
  description: 'Les fiches patrimoniales du CNDRS — sites historiques, monuments, objets des collections et manuscrits de l\'archipel comorien.',
}

const fiches = [
  { categorie: "Site historique", titre: "La médina de Moroni", localisation: "Moroni, Ngazidja", statut: "Candidature UNESCO en cours", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg", description: "Ensemble urbain historique du XIVe siècle, la médina de Moroni constitue l'un des exemples les mieux préservés d'architecture swahilie de l'océan Indien occidental." },
  { categorie: "Monument", titre: "La mosquée du vendredi de Moroni", localisation: "Moroni, Ngazidja", statut: "Patrimoine national classé", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg", description: "Édifiée au XVe siècle, la mosquée du vendredi est le principal monument religieux des Comores. Son minaret caractéristique domine la médina de Moroni." },
  { categorie: "Site historique", titre: "Le palais Ujumbe de Domoni", localisation: "Domoni, Ndzuani", statut: "Patrimoine national classé", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg", description: "Ancienne résidence officielle du sultan de Ndzuani, le palais Ujumbe est l'un des rares exemples d'architecture palatiale préservée dans l'archipel." },
  { categorie: "Objet", titre: "Trône du sultan de Ngazidja", localisation: "Musée national, Moroni", statut: "Collection permanente", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg", description: "Pièce maîtresse des collections du Musée national, ce trône en bois sculpté du XVIIIe siècle témoigne du raffinement de la cour du sultan de Ngazidja." },
  { categorie: "Manuscrit", titre: "Chronique de Ngazidja", localisation: "Département arabo-islamique, CNDRS", statut: "En cours de numérisation", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg", description: "Manuscrit arabe du XVIIIe siècle retraçant l'histoire politique de Ngazidja depuis les origines légendaires jusqu'aux sultans historiques." },
  { categorie: "Site archéologique", titre: "Nkuni ya Sima — Ndzuani", localisation: "Sima, Ndzuani", statut: "En cours d'étude", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg", description: "Site archéologique médiéval de Ndzuani révélant des traces d'occupation humaine remontant au XIe siècle, avec des céramiques islamiques et africaines." },
]

export default function FichesPatrimoniales() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Fiches patrimoniales"
        description="Sites historiques, monuments, objets des collections et manuscrits — le patrimoine de l'archipel comorien documenté par les chercheurs du CNDRS."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {fiches.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={f.image} alt={f.titre} className={styles.img} />
                <span className={styles.categorieBadge}>{f.categorie}</span>
              </div>
              <div className={styles.body}>
                <h3>{f.titre}</h3>
                <div className={styles.meta}>
                  <span className={styles.localisation}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {f.localisation}
                  </span>
                  <span className={styles.statut}>{f.statut}</span>
                </div>
                <p>{f.description}</p>
                <a href="#" className={styles.voir}>Voir la fiche complète →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
