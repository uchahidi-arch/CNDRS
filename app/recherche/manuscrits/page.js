import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: 'Manuscrits — CNDRS',
  description: 'Le fonds de manuscrits arabes du CNDRS — des siècles de savoir islamique conservés aux Comores.',
}

const manuscrits = [
  { titre: "Traités de droit islamique", periode: "XVIe — XVIIIe siècle", langue: "Arabe", nombre: 124, description: "Textes de jurisprudence malékite et chaféite, commentaires des grandes œuvres du fiqh." },
  { titre: "Chroniques des sultanats", periode: "XVIIe — XIXe siècle", langue: "Arabe et comorien", nombre: 38, description: "Récits historiques des sultans de Ngazidja, Ndzuani et Mwali, généalogies royales et correspondances diplomatiques." },
  { titre: "Poésie et littérature", periode: "XVIIIe — XXe siècle", langue: "Arabe et shikomori", nombre: 67, description: "Recueils de poèmes arabes et comoriens, panégyriques, élégies et poésie mystique soufie." },
  { titre: "Médecine traditionnelle", periode: "XVIIe — XIXe siècle", langue: "Arabe", nombre: 22, description: "Traités de médecine galénique, pharmacopée traditionnelle et recettes de soins transmises par les érudits." },
  { titre: "Sciences coraniques", periode: "XVIe — XXe siècle", langue: "Arabe", nombre: 89, description: "Commentaires coraniques, traités de sciences du Coran, textes d'enseignement religieux traditionnel." },
]

export default function ManuscritsPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Manuscrits"
        description="Le fonds de manuscrits arabes du CNDRS est l'un des plus importants de l'océan Indien. Des siècles de savoir islamique conservés aux Comores."
        image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p>Le CNDRS conserve plus de <strong>340 manuscrits arabes</strong> produits ou collectés aux Comores entre le XVe et le XXe siècle. Ce fonds exceptionnel est en cours de numérisation en partenariat avec l'UNESCO. Chaque manuscrit fait l'objet d'une fiche de catalogage détaillée incluant la date, le copiste, le contenu et l'état de conservation.</p>
        </div>

        <div className={styles.list}>
          {manuscrits.map((m, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.itemHeader}>
                <div>
                  <h3>{m.titre}</h3>
                  <div className={styles.meta}>
                    <span className={styles.tag}>{m.langue}</span>
                    <span className={styles.tag}>{m.periode}</span>
                    <span className={styles.nombre}>{m.nombre} documents</span>
                  </div>
                </div>
              </div>
              <p className={styles.desc}>{m.description}</p>
              <a href="#" className={styles.voir}>Consulter ce fonds →</a>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Accéder aux manuscrits</h2>
          <p>La consultation des manuscrits est possible sur rendez-vous au Département arabo-islamique du CNDRS. Une demande préalable est requise. Des reproductions numériques peuvent être commandées pour un usage académique.</p>
          <a href="/services/archives" className={styles.ctaBtn}>Faire une demande de consultation →</a>
        </div>
      </div>
    </div>
  )
}
