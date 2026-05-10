import PageHero from '../../../components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: 'Partenaires — CNDRS',
  description: 'Les partenaires institutionnels du CNDRS : UNESCO, Commission de l\'Océan Indien, Union Européenne.',
}

const partenaires = [
  {
    nom: "UNESCO",
    categorie: "Organisation internationale",
    description: "Le CNDRS collabore avec l'UNESCO dans le cadre de la préservation et de la valorisation du patrimoine culturel et naturel des Comores, notamment pour le projet d'inscription des médinas historiques au patrimoine mondial.",
    href: "https://unesco.org",
  },
  {
    nom: "Commission de l'Océan Indien (COI)",
    categorie: "Organisation régionale",
    description: "La COI appuie les projets de coopération régionale du CNDRS en matière de recherche scientifique et de valorisation du patrimoine dans l'espace indianocéanique.",
    href: "https://commissionoceanindien.org",
  },
  {
    nom: "Union Européenne",
    categorie: "Bailleur de fonds",
    description: "L'Union Européenne soutient plusieurs programmes de numérisation et de valorisation du patrimoine documentaire du CNDRS dans le cadre de la coopération ACP-UE.",
    href: "https://europa.eu",
  },
  {
    nom: "IFLA",
    categorie: "Fédération internationale",
    description: "La Fédération Internationale des Associations de Bibliothécaires et des Bibliothèques accompagne le développement de la Bibliothèque nationale du CNDRS.",
    href: "https://ifla.org",
  },
]

export default function PartenairesPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="L'Institution"
        titre="Partenaires"
        description="Le CNDRS travaille avec des institutions de premier plan à l'échelle nationale, régionale et internationale."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {partenaires.map(p => (
            <a key={p.nom} href={p.href} target="_blank" rel="noopener" className={styles.card}>
              <span className={styles.categorie}>{p.categorie}</span>
              <h2>{p.nom}</h2>
              <p>{p.description}</p>
              <span className={styles.link}>Visiter le site →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
