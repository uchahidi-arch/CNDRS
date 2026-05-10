import PageHero from '@/components/PageHero'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Espace éducatif — CNDRS',
  description: 'Ressources pédagogiques et fiches pour les enseignants et les groupes scolaires souhaitant préparer une visite au CNDRS.',
}

const fiches = [
  { titre: "Le Musée national — guide pédagogique", niveau: "Primaire / Collège", matiere: "Histoire — Géographie", description: "Fiche de préparation pour les visites du Musée national avec activités avant et après la visite.", href: "#" },
  { titre: "Les sultanats des Comores", niveau: "Collège / Lycée", matiere: "Histoire", description: "Dossier documentaire sur les sultanats de l'archipel, l'organisation politique et la vie à la cour.", href: "#" },
  { titre: "Le volcan Karthala", niveau: "Primaire / Collège", matiere: "Sciences — Géographie", description: "Fiche pédagogique sur la formation des îles volcaniques et les risques naturels aux Comores.", href: "#" },
  { titre: "La langue comorienne", niveau: "Primaire / Collège", matiere: "Langues", description: "Introduction au shikomori — origines, variations dialectales et mots essentiels à connaître.", href: "#" },
  { titre: "L'islam aux Comores", niveau: "Collège / Lycée", matiere: "Histoire — EMC", description: "Dossier sur l'arrivée et l'évolution de l'islam dans l'archipel, les pratiques culturelles et les manuscrits.", href: "#" },
  { titre: "La faune marine des Comores", niveau: "Primaire / Collège", matiere: "Sciences naturelles", description: "Découverte de la biodiversité marine comorienne — récifs coralliens, tortues, cœlacanthe.", href: "#" },
]

export default function EducatifPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Services"
        titre="Espace éducatif"
        description="Ressources pédagogiques pour les enseignants et les groupes scolaires — fiches, dossiers documentaires et guide de préparation des visites."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.visite}>
          <div className={styles.visiteText}>
            <h2>Organiser une visite scolaire</h2>
            <p>Le CNDRS accueille les groupes scolaires de tous niveaux au Musée national, à la Bibliothèque nationale et aux Archives nationales. Les visites guidées sont adaptées à l'âge et au programme scolaire. Une demande préalable est requise.</p>
          </div>
          <Link href="/services/reserver" className={styles.visiteBtn}>Réserver une visite scolaire →</Link>
        </div>

        <h2 className={styles.fichesTitle}>Fiches pédagogiques à télécharger</h2>

        <div className={styles.grid}>
          {fiches.map((f, i) => (
            <a key={i} href={f.href} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <span className={styles.matiere}>{f.matiere}</span>
                  <h3>{f.titre}</h3>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
              <p>{f.description}</p>
              <span className={styles.niveau}>{f.niveau}</span>
            </a>
          ))}
        </div>

        <div className={styles.contact}>
          <h2>Une question, un projet pédagogique ?</h2>
          <p>Notre équipe est disponible pour vous aider à préparer votre visite ou à construire un projet pédagogique autour des collections du CNDRS.</p>
          <Link href="/contact" className={styles.contactBtn}>Nous contacter →</Link>
        </div>
      </div>
    </div>
  )
}
