import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Patrimoine naturel — CNDRS',
  description: 'Le patrimoine naturel des Comores — le Karthala, les forêts, la faune marine et les récifs coralliens de l\'archipel.',
}

const themes = [
  {
    titre: "Le volcan Karthala",
    description: "L'un des volcans les plus actifs au monde culmine à 2 361 mètres sur Ngazidja. Surveillé en permanence par l'Observatoire Volcanologique du Karthala, il façonne la géologie et les paysages de la Grande Comore.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg",
    href: "/ovk",
  },
  {
    titre: "Forêts et biodiversité terrestre",
    description: "Les forêts de montagne de Ngazidja abritent une biodiversité exceptionnelle avec de nombreuses espèces endémiques — oiseaux, reptiles, plantes et insectes uniques au monde.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg",
    href: "/recherche/patrimoine-naturel",
  },
  {
    titre: "Faune marine et récifs coralliens",
    description: "Les eaux comoriennes sont parmi les plus riches de l'océan Indien — récifs coralliens, tortues marines, dugongs, baleines à bosse et la légendaire population de cœlacanthes.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg",
    href: "/recherche/patrimoine-naturel",
  },
  {
    titre: "Géologie de l'archipel",
    description: "Quatre îles d'origine volcanique aux personnalités géologiques distinctes — de l'activité sismique de Ngazidja à la relative stabilité de Mwali, en passant par les formations coralliennes de Ndzuani.",
    image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg",
    href: "/ovk",
  },
]

export default function PatrimoineNaturelPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Patrimoine naturel"
        description="Le Karthala, les forêts, la faune marine et les récifs coralliens des Comores — un patrimoine naturel exceptionnel étudié et préservé par le CNDRS."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {themes.map(t => (
            <Link key={t.titre} href={t.href} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={t.image} alt={t.titre} className={styles.img} />
              </div>
              <div className={styles.body}>
                <h2>{t.titre}</h2>
                <p>{t.description}</p>
                <span className={styles.lien}>En savoir plus →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.ovkBlock}>
          <div className={styles.ovkText}>
            <h2>Observatoire Volcanologique du Karthala</h2>
            <p>Le CNDRS surveille en permanence l'activité volcanique et sismique de l'archipel via son Observatoire Volcanologique du Karthala, créé en 1988. Les données sont partagées avec les grandes institutions volcanologiques mondiales.</p>
            <Link href="/ovk" className={styles.ovkBtn}>Découvrir l'OVK →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
