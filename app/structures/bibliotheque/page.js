import StructurePage from '../../../components/StructurePage'

export const metadata = {
  title: 'Bibliothèque nationale — CNDRS',
  description: 'La Bibliothèque nationale du CNDRS met à disposition un fonds documentaire de référence sur les Comores et l\'océan Indien.',
}

export default function BibliotequePage() {
  return (
    <StructurePage
      label="Structures"
      titre="Bibliothèque nationale"
      description="Un fonds documentaire de référence sur les Comores et l'océan Indien. Ouvert aux étudiants, chercheurs et au grand public."
      image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      intro={{
        titre: "Un patrimoine documentaire au service de tous",
        paragraphes: [
          "La Bibliothèque nationale du CNDRS est le principal centre de documentation du pays. Elle rassemble un fonds de plusieurs dizaines de milliers d'ouvrages, revues, rapports et documents couvrant toutes les disciplines, avec une attention particulière portée aux Comores, à l'Afrique orientale et à l'océan Indien.",
          "La bibliothèque accueille quotidiennement des étudiants, des chercheurs, des enseignants et des professionnels en quête de documentation. Elle dispose d'une salle de lecture, d'espaces de travail et d'un accès à des ressources numériques.",
        ]
      }}
      sections={[
        {
          titre: "Le fonds documentaire",
          items: [
            "Ouvrages sur les Comores, Madagascar et l'océan Indien",
            "Revues scientifiques nationales et internationales",
            "Rapports institutionnels et publications gouvernementales",
            "Thèses et mémoires universitaires comoriens",
            "Collection complète de Ya Mkobe depuis 1982",
            "Documents en arabe sur la civilisation islamique",
            "Fonds de livres anciens et rares",
          ]
        },
        {
          titre: "Services proposés",
          items: [
            "Consultation sur place — libre accès aux collections générales",
            "Prêt à domicile pour les abonnés",
            "Salle de lecture réservable pour les chercheurs",
            "Recherche documentaire assistée par nos bibliothécaires",
            "Impression et reproduction de documents",
            "Accès à des bases de données académiques en ligne",
          ]
        },
        {
          titre: "Catalogue en ligne",
          paragraphes: [
            "La bibliothèque est en cours de numérisation de son catalogue. Un premier accès en ligne sera disponible prochainement, permettant de consulter les collections à distance avant de se déplacer.",
          ]
        }
      ]}
      services={[
        { label: "Réserver la salle de lecture", href: "/services/salle-lecture" },
        { label: "Consulter le catalogue", href: "/collections/catalogue" },
        { label: "S'abonner", href: "/services/archives" },
        { label: "Nous contacter", href: "/contact" },
      ]}
    />
  )
}
