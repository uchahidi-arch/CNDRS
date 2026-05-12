import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Collections du musée — CNDRS',
  description: 'Les collections permanentes du Musée national du CNDRS — objets rituels, bijoux, céramiques et artefacts de l\'archipel comorien.',
}

const salles = [
  { titre: "Salle des sultanats", objets: 87, description: "Objets de cour, insignes royaux, trônes et parures des sultans de Ngazidja, Ndzuani et Mwali.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg" },
  { titre: "Salle de l'islam", objets: 54, description: "Manuscrits arabes, objets liturgiques, calligraphies et témoignages de la civilisation islamique aux Comores.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
  { titre: "Salle des traditions", objets: 120, description: "Costumes du grand mariage, bijoux traditionnels, instruments de musique et objets de la vie quotidienne.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Salle de l'archéologie", objets: 342, description: "Céramiques médiévales, monnaies, outils et vestiges des cités historiques de l'archipel.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg" },
  { titre: "Salle de la nature", objets: 68, description: "Spécimens de faune et de flore endémiques des Comores, dont le célèbre cœlacanthe.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg" },
  { titre: "Galerie photographique", objets: 200, description: "Un siècle d'histoire visuelle des Comores — sultanats, indépendance, vie quotidienne et cérémonies.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
]

export default function CollectionsMuseePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Collections"
        titre="Collections du musée"
        description="Plus de 870 objets répartis dans 6 salles permanentes — l'histoire et la culture de l'archipel comorien racontées par ses artefacts."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>

        <div className={styles.grid}>
          {salles.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={s.image} alt={s.titre} className={styles.img} />
              </div>
              <div className={styles.body}>
                <div className={styles.cardHeader}>
                  <h3>{s.titre}</h3>
                  <span className={styles.objets}>{s.objets} objets</span>
                </div>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.visite}>
          <h2>Visiter le musée</h2>
          <p>Le Musée national est ouvert du lundi au samedi de 8h à 17h. Les visites guidées sont disponibles sur réservation pour les groupes scolaires, touristiques et institutionnels.</p>
          <div className={styles.visiteBtns}>
            <Link href="/services/reserver" className={styles.btnPrimary}>Réserver une visite</Link>
            <Link href="/collections/visite-virtuelle" className={styles.btnSecondary}>Visite virtuelle →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
