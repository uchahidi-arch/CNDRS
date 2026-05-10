import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Chroniques historiques — CNDRS',
  description: 'L\'histoire des sultanats, des médinas et des civilisations de l\'archipel comorien racontée par les chercheurs du CNDRS.',
}

const chroniques = [
  { slug: "sultanats-ngazidja", titre: "Les sultanats de Ngazidja", categorie: "Histoire politique", description: "L'organisation politique de la Grande Comore entre le XIVe et le XIXe siècle — sultanats rivaux, alliances et conflits.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg", date: "Mars 2026" },
  { slug: "medinas-moroni", titre: "Les médinas historiques de Moroni", categorie: "Patrimoine urbain", description: "Architecture, organisation sociale et vie quotidienne dans les médinas de Moroni — un patrimoine en cours de classement à l'UNESCO.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg", date: "Février 2026" },
  { slug: "islam-comores", titre: "L'arrivée de l'islam aux Comores", categorie: "Histoire religieuse", description: "Les premières traces de l'islam dans l'archipel, les routes commerciales et l'influence des érudits arabes et swahilis.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg", date: "Janvier 2026" },
  { slug: "echanges-ocean-indien", titre: "Comores et océan Indien médiéval", categorie: "Histoire des échanges", description: "La place des Comores dans les réseaux commerciaux de l'océan Indien médiéval — céramiques, épices, esclaves et savoirs.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg", date: "Décembre 2025" },
  { slug: "grand-mariage", titre: "Le grand mariage comorien", categorie: "Traditions sociales", description: "Institution sociale fondamentale, le grand mariage structure la vie sociale et politique de la société comorienne depuis des siècles.", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg", date: "Novembre 2025" },
  { slug: "traditions-orales", titre: "Traditions orales de l'archipel", categorie: "Patrimoine immatériel", description: "Contes, proverbes, généalogies et épopées — la transmission orale du savoir dans la société comorienne traditionnelle.", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg", date: "Octobre 2025" },
]

export default function ChroniquesPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Chroniques historiques"
        description="L'histoire de l'archipel comorien racontée par les chercheurs du CNDRS — sultanats, médinas, traditions et échanges dans l'océan Indien."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {chroniques.map(c => (
            <Link key={c.slug} href={`/recherche/chroniques/${c.slug}`} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={c.image} alt={c.titre} className={styles.img} />
              </div>
              <div className={styles.body}>
                <span className={styles.categorie}>{c.categorie}</span>
                <h2>{c.titre}</h2>
                <p>{c.description}</p>
                <span className={styles.date}>{c.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
