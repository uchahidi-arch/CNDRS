import PageHero from '@/components/PageHero'
import styles from './page.module.css'

export const metadata = {
  title: 'Glossaire comorien — CNDRS',
  description: 'Glossaire des termes culturels, institutionnels et linguistiques de la société comorienne.',
}

const lettres = ['A', 'B', 'D', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'S', 'T', 'U', 'W', 'Y']

const termes = [
  { terme: "Aada", phonetique: "a-a-da", categorie: "Coutume", definition: "Coutume, usage traditionnel. Désigne l'ensemble des pratiques sociales et rituelles héritées et transmises de génération en génération dans la société comorienne." },
  { terme: "Bangwe", phonetique: "ban-gwe", categorie: "Architecture", definition: "Banc de pierre maçonné caractéristique de l'architecture des médinas comoriennes, situé à l'entrée des maisons ou des mosquées, lieu de rencontre et de palabre des hommes." },
  { terme: "Foundi", phonetique: "foun-di", categorie: "Titre", definition: "Maître, savant, enseignant. Titre honorifique désignant un érudit en sciences islamiques ou un artisan maître dans son art." },
  { terme: "Grand mariage", phonetique: "anda", categorie: "Institution sociale", definition: "Anda en shikomori. Institution sociale fondamentale de la société comorienne. Cérémonie fastueuse qui confère à celui qui l'accomplit un statut social éminent — le mruwadzima — et des responsabilités communautaires importantes." },
  { terme: "Ikabila", phonetique: "i-ka-bi-la", categorie: "Organisation sociale", definition: "Groupe de descendance, clan. Unité sociale de base de la société comorienne, fondée sur la transmission matrilinéaire de la maison familiale." },
  { terme: "Manzaraka", phonetique: "man-za-ra-ka", categorie: "Cérémonie", definition: "Cérémonie de remise de dot et de célébration du mariage. Moment central du grand mariage comorien, caractérisé par des chants, des danses et des festivités collectives." },
  { terme: "Mruwadzima", phonetique: "mrou-wa-dzi-ma", categorie: "Statut social", definition: "Homme accompli, notable. Titre conféré à celui qui a accompli le grand mariage et toutes les obligations sociales qui en découlent. Implique des responsabilités dans la gestion des affaires communautaires." },
  { terme: "Shiromani", phonetique: "shi-ro-ma-ni", categorie: "Bijou", definition: "Diadème en or traditionnel porté par les femmes comoriennes lors des grandes cérémonies. Pièce maîtresse du trousseau de la mariée, transmise de mère en fille." },
  { terme: "Sultan", phonetique: "soul-tan", categorie: "Titre politique", definition: "Chef politique et religieux des entités politiques comoriennes précoloniales. Les sultanats de Ngazidja, Ndzuani et Mwali ont structuré la vie politique de l'archipel du XIVe au XIXe siècle." },
  { terme: "Ulama", phonetique: "ou-la-ma", categorie: "Titre religieux", definition: "Savants religieux islamiques. Jouent un rôle central dans la société comorienne traditionnelle comme gardiens du savoir, arbitres des conflits et guides spirituels." },
  { terme: "Walimu", phonetique: "wa-li-mou", categorie: "Titre", definition: "Enseignant, maître d'école coranique. Personne chargée de l'enseignement du Coran et des sciences islamiques dans les écoles traditionnelles — les madrasa." },
  { terme: "Ya Mkobe", phonetique: "ya-m-ko-bé", categorie: "Culture", definition: "Littéralement 'de l'ancien', 'du temps passé'. Nom de la revue scientifique du CNDRS, fondée en 1982, qui se consacre à l'étude et à la valorisation du patrimoine historique et culturel de l'archipel." },
]

export default function GlossairePage() {
  return (
    <div className={styles.page}>
      <PageHero
        label="Patrimoine & Recherche"
        titre="Glossaire comorien"
        description="Les termes culturels, institutionnels et linguistiques essentiels pour comprendre la société et l'histoire de l'archipel comorien."
        image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.alphabet}>
          {lettres.map(l => (
            <a key={l} href={`#${l}`} className={styles.lettre}>{l}</a>
          ))}
        </div>

        <div className={styles.list}>
          {termes.map((t, i) => (
            <div key={i} id={t.terme[0]} className={styles.item}>
              <div className={styles.itemHeader}>
                <h3>{t.terme}</h3>
                <span className={styles.phonetique}>[{t.phonetique}]</span>
                <span className={styles.categorie}>{t.categorie}</span>
              </div>
              <p>{t.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
