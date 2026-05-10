import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: "Collections — CNDRS",
  description: "Les collections du CNDRS — bibliothèque nationale, archives, iconothèque, musée et fonds arabo-islamique.",
}

const sections = [
  { titre: "Catalogue de la bibliothèque", description: "Consultez le fonds documentaire de la Bibliothèque nationale — ouvrages, revues, rapports et thèses.", href: "/collections/catalogue", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
  { titre: "Fonds d'archives", description: "Les archives nationales de l'Union des Comores — documents administratifs, actes d'état civil et archives coloniales.", href: "/collections/archives", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Iconothèque", description: "Des milliers de photographies historiques couvrant plus d'un siècle de vie comorienne — des sultanats à l'indépendance.", href: "/collections/iconotheque", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg" },
  { titre: "Collections du musée", description: "Objets rituels, bijoux, costumes, céramiques et artefacts retraçant l'histoire et la culture de l'archipel.", href: "/collections/musee", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg" },
  { titre: "Visite virtuelle", description: "Explorez les collections du Musée national depuis n'importe où dans le monde grâce à notre visite virtuelle.", href: "/collections/visite-virtuelle", image: "https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg" },
  { titre: "Fonds arabo-islamique", description: "Manuscrits arabes, documents religieux et patrimoine de la civilisation islamique aux Comores.", href: "/collections/arabo-islamique", image: "https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg" },
]

export default function CollectionsPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="CNDRS"
        titre="Collections"
        description="L'ensemble des collections documentaires, muséales et archivistiques du CNDRS — accessibles sur place et progressivement en ligne."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
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
