import StructurePage from '../../../components/StructurePage'

export const metadata = {
  title: 'Archives nationales — CNDRS',
  description: 'Les Archives nationales du CNDRS conservent la mémoire administrative, juridique et historique de l\'Union des Comores.',
}

export default function ArchivesPage() {
  return (
    <StructurePage
      label="Structures"
      titre="Archives nationales"
      description="La mémoire administrative, juridique et historique de l'Union des Comores. Des siècles de documents conservés, classés et accessibles aux chercheurs."
      image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      intro={{
        titre: "Conserver la mémoire nationale",
        paragraphes: [
          "Les Archives nationales du CNDRS constituent le dépôt officiel des documents produits par les institutions de l'État comorien et par les administrations coloniales antérieures à l'indépendance. Elles couvrent une période allant du XIXe siècle à nos jours.",
          "Les fonds conservés comprennent des documents administratifs, des actes d'état civil, des archives judiciaires, des cartes et plans, ainsi que des collections de photographies et de documents audiovisuels. Certains fonds remontent à l'époque des sultanats.",
        ]
      }}
      sections={[
        {
          titre: "Les fonds disponibles",
          items: [
            "Archives coloniales — période française (1886-1975)",
            "Archives de l'État comorien post-indépendance (1975 à nos jours)",
            "Actes d'état civil — naissances, mariages, décès",
            "Archives judiciaires et notariales",
            "Cartes, plans et documents cadastraux",
            "Fonds photographiques et audiovisuels",
            "Archives des sultanats — documents en arabe et en français",
          ]
        },
        {
          titre: "Accès aux archives",
          paragraphes: [
            "La consultation des archives est ouverte à tous les chercheurs, étudiants, journalistes et particuliers sous réserve d'une demande préalable. Certains fonds sensibles sont soumis à des délais de communicabilité conformément à la loi.",
            "Une demande de consultation peut être soumise en ligne ou directement auprès de nos agents. Des reproductions numériques peuvent être commandées pour les documents disponibles.",
          ]
        },
        {
          titre: "Numérisation et conservation",
          paragraphes: [
            "Le CNDRS mène depuis 2024 un programme de numérisation progressive des fonds les plus fragiles. Ce programme vise à garantir la pérennité des documents et à faciliter leur accès à distance pour les chercheurs du monde entier, notamment la diaspora comorienne.",
          ]
        }
      ]}
      services={[
        { label: "Demander une consultation", href: "/services/archives" },
        { label: "Commander une reproduction", href: "/services/archives" },
        { label: "Espace diaspora", href: "/services/diaspora" },
        { label: "Nous contacter", href: "/contact" },
      ]}
    />
  )
}
