import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "L'Institution — CNDRS",
  description: "Découvrez l'histoire, les missions et les structures du Centre National de Documentation et de Recherche Scientifique des Comores.",
}

const sections = [
  {
    titre: "Présentation & Histoire",
    description: "Fondé en 1979, le CNDRS est la mémoire scientifique, historique et culturelle de l'archipel des Comores depuis près de cinq décennies.",
    href: "/institution/presentation",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg",
  },
  {
    titre: "Organigramme",
    description: "La direction générale et les équipes du CNDRS — chercheurs, archivistes, bibliothécaires, agents de médiation culturelle.",
    href: "/institution/organigramme",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg",
  },
  {
    titre: "Partenaires",
    description: "Le CNDRS travaille avec l'UNESCO, la Commission de l'Océan Indien et l'Union Européenne pour valoriser le patrimoine comorien.",
    href: "/institution/partenaires",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg",
  },
  {
    titre: "Rapports d'activité",
    description: "Les rapports annuels du CNDRS — bilan des activités, publications, événements et perspectives de développement institutionnel.",
    href: "/rapports",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg",
  },
]

export default function InstitutionPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="CNDRS"
        titre="L'Institution"
        description="Le Centre National de Documentation et de Recherche Scientifique des Comores — son histoire, ses missions, ses équipes et ses partenaires."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p>Fondé en 1979, le CNDRS est l'institution de référence pour la conservation et la valorisation du patrimoine scientifique, historique et culturel de l'archipel des Comores. Il abrite les archives nationales, la bibliothèque nationale, le musée national, l'observatoire volcanologique du Karthala et plusieurs départements de recherche spécialisés.</p>
        </div>

        <div className={styles.grid}>
          {sections.map(s => (
            <Link key={s.href} href={s.href} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={s.image} alt={s.titre} className={styles.img} />
              </div>
              <div className={styles.body}>
                <h2>{s.titre}</h2>
                <p>{s.description}</p>
                <span className={styles.lien}>Découvrir →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
