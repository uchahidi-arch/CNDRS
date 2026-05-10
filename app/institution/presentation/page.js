import PageHero from '../../../components/PageHero'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'Présentation & Histoire — CNDRS',
  description: 'Découvrez l\'histoire et les missions du Centre National de Documentation et de Recherche Scientifique des Comores, fondé en 1979.',
}

export default function PresentationPage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="L'Institution"
        titre="Présentation & Histoire"
        description="Fondé en 1979, le CNDRS est la mémoire scientifique, historique et culturelle de l'archipel des Comores."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Une institution fondamentale</h2>
            <p>Le Centre National de Documentation et de Recherche Scientifique des Comores est une institution fondamentale. Depuis 1979, il abrite la mémoire scientifique, historique et culturelle de l'archipel : archives nationales, bibliothèque nationale, musée national, observatoire volcanologique du Karthala, revue scientifique Ya Mkobe, et plusieurs départements de recherche spécialisés.</p>
            <p>En près de cinq décennies d'existence, le CNDRS a constitué un patrimoine documentaire et scientifique sans équivalent aux Comores. Ses chercheurs ont produit des travaux de référence sur l'histoire de l'archipel, ses sultanats, ses langues, ses écosystèmes marins et volcaniques.</p>
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="https://cndrs.km/wp-content/uploads/2024/04/LOGO-CNDRS.png"
              alt="CNDRS"
              width={300}
              height={300}
              className={styles.img}
            />
          </div>
        </section>

        <section className={styles.missionSection}>
          <h2>Nos missions</h2>
          <div className={styles.missions}>
            {[
              { titre: "Conserver", desc: "Préserver les archives nationales, les collections muséales et le patrimoine documentaire de l'archipel pour les générations futures." },
              { titre: "Étudier", desc: "Mener des recherches scientifiques sur l'histoire, la linguistique, l'archéologie, les sciences naturelles et la culture des Comores." },
              { titre: "Diffuser", desc: "Rendre accessibles les ressources documentaires et scientifiques au public, aux chercheurs et à la diaspora comorienne." },
            ].map(m => (
              <div key={m.titre} className={styles.missionCard}>
                <h3>{m.titre}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h2>Repères historiques</h2>
          <div className={styles.timeline}>
            {[
              { annee: "1979", ev: "Création du CNDRS par décret présidentiel" },
              { annee: "1982", ev: "Lancement de la revue scientifique Ya Mkobe" },
              { annee: "1988", ev: "Création de l'Observatoire Volcanologique du Karthala" },
              { annee: "2000", ev: "Intégration dans le réseau UNESCO des institutions patrimoniales" },
              { annee: "2024", ev: "Lancement du projet de numérisation des archives nationales" },
            ].map(t => (
              <div key={t.annee} className={styles.timelineItem}>
                <span className={styles.annee}>{t.annee}</span>
                <span className={styles.ev}>{t.ev}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
