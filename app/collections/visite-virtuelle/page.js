import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Visite virtuelle — CNDRS',
  description: 'Explorez le Musée national du CNDRS depuis n\'importe où dans le monde grâce à notre visite virtuelle.',
}

const salles = [
  { titre: "Salle des sultanats", description: "Objets de cour, insignes royaux et trônes des sultans de l'archipel.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg", disponible: true },
  { titre: "Salle de l'islam", description: "Manuscrits arabes, objets liturgiques et calligraphies.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg", disponible: true },
  { titre: "Salle des traditions", description: "Costumes, bijoux et instruments de la vie comorienne traditionnelle.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg", disponible: false },
  { titre: "Salle de l'archéologie", description: "Céramiques, monnaies et vestiges des cités médiévales.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg", disponible: false },
]

export default function VisiteVirtuellePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Collections"
        titre="Visite virtuelle"
        description="Explorez les collections du Musée national du CNDRS depuis n'importe où dans le monde. Deux salles disponibles, d'autres à venir."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p>La visite virtuelle du Musée national permet d'explorer les collections depuis n'importe quel appareil. Chaque salle est présentée avec des photos haute définition des objets, leurs fiches descriptives et des audio-guides. D'autres salles seront progressivement ajoutées.</p>
        </div>

        <div className={styles.grid}>
          {salles.map((s, i) => (
            <div key={i} className={`${styles.card} ${!s.disponible ? styles.cardLocked : ''}`}>
              <div className={styles.imgWrap}>
                <img src={s.image} alt={s.titre} className={styles.img} />
                {!s.disponible && (
                  <div className={styles.lockOverlay}>
                    <span>🔒</span>
                    <p>Bientôt disponible</p>
                  </div>
                )}
              </div>
              <div className={styles.body}>
                <h3>{s.titre}</h3>
                <p>{s.description}</p>
                {s.disponible ? (
                  <a href="#" className={styles.entrer}>Entrer dans la salle →</a>
                ) : (
                  <span className={styles.soon}>En cours de numérisation</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reelCta}>
          <h2>Préférez la visite en personne ?</h2>
          <p>Le Musée national est ouvert du lundi au samedi. Les visites guidées sont disponibles sur réservation.</p>
          <Link href="/services/reserver" className={styles.ctaBtn}>Réserver une visite →</Link>
        </div>
      </div>
    </div>
  )
}
