import StructurePage from '@/components/StructurePage'

export const metadata = {
  title: 'Centre national de données — CNDRS',
  description: 'Le Centre national de données du CNDRS centralise et diffuse les données scientifiques nationales dans toutes les disciplines.',
}

export default function CentreDonneesPage() {
  return (
    <StructurePage
      label="Structures"
      titre="Centre national de données"
      description="Centralisation et diffusion des données scientifiques nationales — géologie, biodiversité, climat, sciences humaines et sociales."
      image="https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg"
      intro={{
        titre: "La donnée scientifique nationale au service de tous",
        paragraphes: [
          "Le Centre national de données du CNDRS est chargé de collecter, centraliser, archiver et diffuser les données scientifiques produites aux Comores ou portant sur l'archipel. Il couvre toutes les disciplines — sciences de la terre, biodiversité, climatologie, océanographie, sciences humaines et sociales.",
          "Le CND est l'interface entre la recherche nationale et les grands systèmes de données scientifiques internationaux. Il contribue aux bases de données mondiales et assure que les données produites aux Comores sont accessibles à la communauté scientifique internationale.",
        ]
      }}
      sections={[
        {
          titre: "Domaines couverts",
          items: [
            "Sismologie et volcanologie — données de l'OVK",
            "Climatologie et météorologie",
            "Biodiversité marine et terrestre",
            "Bathymétrie et cartographie des fonds marins",
            "Données socio-économiques et démographiques",
            "Patrimoine culturel immatériel — traditions orales, pratiques rituelles",
            "Données linguistiques — dialectes et variations du shikomori",
          ]
        },
        {
          titre: "Accès aux données",
          paragraphes: [
            "Les données non sensibles sont accessibles librement sur demande aux chercheurs, institutions et organisations internationales. Certains jeux de données sont disponibles en téléchargement direct.",
            "Le CND développe progressivement un portail de données ouvertes permettant de consulter et de télécharger les données scientifiques nationales depuis n'importe quel endroit dans le monde.",
          ]
        },
        {
          titre: "Partenariats de données",
          items: [
            "PANGAEA — base de données géoscientifiques et environnementales",
            "GBIF — données de biodiversité mondiale",
            "IRD — Institut de Recherche pour le Développement",
            "COI — Commission de l'Océan Indien",
            "Université de Moroni",
          ]
        }
      ]}
      services={[
        { label: "Demander des données", href: "/contact" },
        { label: "Bulletins scientifiques", href: "/recherche/publications" },
        { label: "Nous contacter", href: "/contact" },
      ]}
    />
  )
}
