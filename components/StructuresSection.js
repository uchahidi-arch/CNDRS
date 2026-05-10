import Image from 'next/image'
import Link from 'next/link'
import styles from './StructuresSection.module.css'

const structures = [
  {
    slug: "musee",
    nom: "Musée national",
    description: "Collections permanentes et temporaires retraçant l'histoire et la culture de l'archipel comorien. Objets rituels, bijoux, manuscrits et reconstitutions historiques.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg",
    href: "/structures/musee",
  },
  {
    slug: "archives",
    nom: "Archives nationales",
    description: "La mémoire administrative, juridique et historique de l'Union des Comores. Des siècles de documents conservés et accessibles aux chercheurs.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg",
    href: "/structures/archives",
  },
  {
    slug: "bibliotheque",
    nom: "Bibliothèque nationale",
    description: "Un fonds documentaire de référence sur les Comores et l'océan Indien. Ouvert aux étudiants, chercheurs et au grand public.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg",
    href: "/structures/bibliotheque",
  },
  {
    slug: "ovk",
    nom: "Observatoire du Karthala",
    description: "Surveillance en temps réel de l'activité volcanique du Karthala. Recherche en sciences de la terre et alerte sismique pour l'archipel.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg",
    href: "/structures/ovk",
  },
]

export default function StructuresSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {structures.map(s => (
            <Link key={s.slug} href={s.href} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={s.image}
                  alt={s.nom}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.nom}>{s.nom}</h3>
                <div className={styles.hover}>
                  <p className={styles.desc}>{s.description}</p>
                  <span className={styles.btn}>En savoir plus →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
