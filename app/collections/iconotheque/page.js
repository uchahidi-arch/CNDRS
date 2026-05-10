import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Iconothèque — Collections — CNDRS',
  description: 'La galerie photographique numérique du CNDRS — photographies historiques des Comores accessibles en ligne.',
}

const collections = [
  { titre: "Comores coloniales (1886–1940)", photos: 342, description: "Archives photographiques de l'administration française — paysages, populations, infrastructures et vie quotidienne.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Les sultanats en images", photos: 87, description: "Portraits de sultans, cérémonies de cour et vues des palais historiques de l'archipel.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg" },
  { titre: "Moroni et ses médinas", photos: 215, description: "Évolution architecturale et urbaine de Moroni depuis le début du XXe siècle.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
  { titre: "Cérémonies traditionnelles", photos: 178, description: "Grand mariage, manzaraka, funérailles et fêtes religieuses — un siècle de rites photographiés.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg" },
  { titre: "Indépendance et modernité (1975–2000)", photos: 264, description: "Les premières années de l'indépendance, les changements politiques et la société comorienne contemporaine.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Paysages et nature", photos: 156, description: "Le Karthala, les plages, les forêts et les paysages de l'archipel tels que photographiés au fil du temps.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
]

export default function CollectionsIconothequePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Collections"
        titre="Iconothèque"
        description="Plus de 1 200 photographies historiques des Comores numérisées et accessibles en ligne — un siècle de mémoire visuelle de l'archipel."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p>Ces collections sont issues du fonds iconographique du CNDRS, numérisé en partenariat avec l'association Medina Wiratha. Une sélection étendue est également consultable sur <a href="https://museephotomoroni.com" target="_blank" rel="noopener">museephotomoroni.com</a>.</p>
        </div>

        <div className={styles.grid}>
          {collections.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={c.image} alt={c.titre} className={styles.img} />
                <div className={styles.overlay}>
                  <span className={styles.count}>{c.photos} photos</span>
                </div>
              </div>
              <div className={styles.body}>
                <h3>{c.titre}</h3>
                <p>{c.description}</p>
                <a href="#" className={styles.voir}>Parcourir la collection →</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.don}>
          <h2>Enrichir les collections</h2>
          <p>Vous possédez des photographies anciennes des Comores ? Le CNDRS accepte les dons et dépôts de collections photographiques privées pour les numériser et les rendre accessibles au public.</p>
          <Link href="/contact" className={styles.donBtn}>Nous contacter pour un don →</Link>
        </div>
      </div>
    </div>
  )
}
