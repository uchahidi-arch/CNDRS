import StructurePage from '../../../components/StructurePage'

export const metadata = {
  title: 'Observatoire Volcanologique du Karthala — CNDRS',
  description: 'L\'OVK surveille en permanence l\'activité volcanique du Karthala et mène des recherches en sciences de la terre aux Comores.',
}

export default function OVKPage() {
  return (
    <StructurePage
      label="Structures"
      titre="Observatoire du Karthala"
      description="Surveillance en temps réel de l'activité volcanique du Karthala. Recherche en sciences de la terre et système d'alerte sismique pour l'archipel comorien."
      image="https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg"
      intro={{
        titre: "Surveiller le volcan, protéger les populations",
        paragraphes: [
          "L'Observatoire Volcanologique du Karthala a été créé en 1988 dans le cadre d'une collaboration scientifique internationale. Il est chargé de la surveillance permanente de l'activité du Karthala, l'un des volcans les plus actifs au monde, dont le cratère principal culmine à 2 361 mètres.",
          "L'OVK produit des bulletins d'activité réguliers, gère un réseau de stations sismiques réparties sur l'île de Ngazidja, et assure la transmission des alertes aux autorités compétentes en cas de risque éruptif. Ses données sont partagées avec les grands observatoires volcanologiques internationaux.",
        ]
      }}
      sections={[
        {
          titre: "Missions de l'OVK",
          items: [
            "Surveillance sismique en temps réel — réseau de stations sur Ngazidja",
            "Mesures géodésiques et déformation du sol",
            "Analyse géochimique des gaz volcaniques",
            "Émission de bulletins d'activité mensuels",
            "Système d'alerte précoce pour les autorités et la population",
            "Formation aux risques volcaniques et sismiques",
            "Recherche en volcanologie et sciences de la terre",
          ]
        },
        {
          titre: "Partenariats scientifiques",
          paragraphes: [
            "L'OVK travaille en étroite collaboration avec l'Institut de Physique du Globe de Paris (IPGP), l'IRD, et plusieurs universités françaises et américaines. Ces partenariats permettent d'accéder à des équipements de pointe et d'intégrer les données comoriennes dans les bases de données volcanologiques mondiales.",
          ]
        },
        {
          titre: "Le Karthala en chiffres",
          items: [
            "Altitude : 2 361 mètres",
            "Dernière éruption majeure : 2005",
            "Plus de 20 éruptions recensées depuis le XIXe siècle",
            "Cratère principal : environ 3 km de diamètre",
            "Réseau de surveillance : 8 stations sismiques",
          ]
        }
      ]}
      services={[
        { label: "Bulletins d'activité", href: "/recherche/publications" },
        { label: "Données sismiques", href: "/collections/centre-donnees" },
        { label: "Nous contacter", href: "/contact" },
      ]}
    />
  )
}
