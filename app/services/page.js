import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "Services — CNDRS",
  description: "Les services du CNDRS — réservation, consultation des archives, salle de lecture, événements, espace diaspora et éducatif.",
}

const sections = [
  { titre: "Réserver une visite", description: "Réservez votre visite du Musée national en ligne — individuel, groupe scolaire, groupe touristique ou institution.", href: "/services/reserver", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg" },
  { titre: "Consulter les archives", description: "Demandez une consultation des Archives nationales — chercheurs, étudiants, journalistes et particuliers.", href: "/services/archives", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Salle de lecture", description: "Réservez un créneau à la salle de lecture de la Bibliothèque nationale pour vos recherches.", href: "/services/salle-lecture", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
  { titre: "Événements & colloques", description: "Inscrivez-vous aux colloques, conférences, expositions et événements organisés par le CNDRS.", href: "/services/evenements", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg" },
  { titre: "Espace diaspora", description: "Accédez aux archives généalogiques, fonds photographiques historiques et actes d'état civil à distance.", href: "/services/diaspora", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Espace éducatif", description: "Fiches pédagogiques et ressources pour les enseignants et les groupes scolaires souhaitant préparer une visite.", href: "/services/educatif", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg" },
]

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="CNDRS"
        titre="Services"
        description="Tout ce que le CNDRS peut faire pour vous — en ligne et sur place. Réservations, consultations, événements et ressources éducatives."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg"
      />
      <div className={styles.inner}>
        <div className={styles.grid}>
          {sections.map(s => (
            <Link key={s.href} href={s.href} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={s.image} alt={s.titre} className={styles.img} />
              </div>
              <div className={styles.body}>
                <h2>{s.titre}</h2>
                <p>{s.description}</p>
                <span className={styles.lien}>Accéder →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
