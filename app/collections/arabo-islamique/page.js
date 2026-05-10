import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Fonds arabo-islamique — CNDRS',
  description: 'Le fonds arabo-islamique du CNDRS — manuscrits arabes, documents religieux et patrimoine de la civilisation islamique aux Comores.',
}

const categories = [
  { titre: "Manuscrits de droit islamique", nombre: 124, periode: "XVIe — XVIIIe s.", description: "Traités de jurisprudence malékite et chaféite, commentaires des grandes œuvres du fiqh islamique." },
  { titre: "Chroniques historiques", nombre: 38, periode: "XVIIe — XIXe s.", description: "Récits historiques des sultans, généalogies royales et correspondances diplomatiques en arabe." },
  { titre: "Poésie et littérature", nombre: 67, periode: "XVIIIe — XXe s.", description: "Recueils de poèmes arabes et comoriens, panégyriques, élégies et poésie soufie." },
  { titre: "Sciences coraniques", nombre: 89, periode: "XVIe — XXe s.", description: "Commentaires coraniques, textes d'enseignement religieux et traités de sciences du Coran." },
  { titre: "Médecine et sciences", nombre: 22, periode: "XVIIe — XIXe s.", description: "Traités de médecine galénique, pharmacopée traditionnelle et sciences naturelles islamiques." },
]

export default function CollectionsAraboIslamiquePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Collections"
        titre="Fonds arabo-islamique"
        description="Plus de 340 manuscrits arabes conservés aux Comores — un patrimoine exceptionnel de la civilisation islamique dans l'océan Indien."
        image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.main}>
            <div className={styles.intro}>
              <h2>Un patrimoine islamique de référence</h2>
              <p>Le fonds arabo-islamique du CNDRS est l'un des plus importants de l'océan Indien occidental. Il comprend des textes produits ou collectés aux Comores entre le XVe et le XXe siècle, témoignant de plusieurs siècles d'érudition islamique dans l'archipel.</p>
              <p>Un programme de numérisation est en cours en partenariat avec l'UNESCO. Les manuscrits numérisés seront progressivement mis en ligne et accessibles aux chercheurs du monde entier.</p>
            </div>

            <div className={styles.categories}>
              {categories.map((c, i) => (
                <div key={i} className={styles.catItem}>
                  <div className={styles.catHeader}>
                    <h3>{c.titre}</h3>
                    <div className={styles.catMeta}>
                      <span className={styles.nombre}>{c.nombre} documents</span>
                      <span className={styles.periode}>{c.periode}</span>
                    </div>
                  </div>
                  <p>{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3>Consulter le fonds</h3>
              <p>La consultation est possible sur rendez-vous au Département arabo-islamique du CNDRS.</p>
              <Link href="/services/archives" className={styles.asideLink}>Faire une demande →</Link>
            </div>
            <div className={styles.asideCard}>
              <h3>Numérisation</h3>
              <p>Programme en cours — <strong>87 manuscrits</strong> déjà numérisés sur 340.</p>
            </div>
            <div className={styles.asideCard}>
              <h3>En savoir plus</h3>
              <Link href="/arabo-islamique" className={styles.asideLink}>Département arabo-islamique →</Link>
              <Link href="/recherche/manuscrits" className={styles.asideLink}>Page Manuscrits →</Link>
            </div>
            <div className={styles.asideCard}>
              <h3>Contact</h3>
              <a href="mailto:arabo-islamique@cndrs.km">arabo-islamique@cndrs.km</a>
              <a href="tel:+26977391002">+269 773 91 02</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
