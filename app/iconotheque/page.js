import StructurePage from '@/components/StructurePage'

export const metadata = {
  title: 'Iconothèque — CNDRS',
  description: 'Le fonds iconographique du CNDRS — des milliers de photographies historiques couvrant plus d\'un siècle de vie comorienne.',
}

export default function IconothequePage() {
  return (
    <StructurePage
      label="Structures"
      titre="Iconothèque"
      description="Des milliers de photographies historiques couvrant plus d'un siècle de vie comorienne — des sultanats à l'indépendance, accessibles au public."
      image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      intro={{
        titre: "La mémoire visuelle des Comores",
        paragraphes: [
          "L'iconothèque du CNDRS constitue le principal fonds photographique national des Comores. Elle rassemble des collections couvrant plus d'un siècle d'histoire visuelle de l'archipel — de l'époque coloniale à l'indépendance, des sultanats aux transformations contemporaines.",
          "Le fonds comprend des photographies de personnalités politiques, de cérémonies traditionnelles, de paysages et de sites historiques, de la vie quotidienne et des grandes étapes de l'histoire comorienne. Certaines collections proviennent de dons de particuliers ou de familles de la diaspora.",
        ]
      }}
      sections={[
        {
          titre: "Les collections",
          items: [
            "Collection coloniale — photographies administratives françaises (1886-1975)",
            "Portraits de sultans et de personnalités comoriennes",
            "Cérémonies traditionnelles — grand mariage, manzaraka, funérailles",
            "Sites et monuments historiques — médinas, mosquées, palais",
            "Paysages et géographie de l'archipel",
            "Vie quotidienne — marchés, ports, écoles, villages",
            "Collections de la diaspora — donations de familles comoriennes",
          ]
        },
        {
          titre: "Accès et reproduction",
          paragraphes: [
            "Les collections de l'iconothèque sont consultables sur rendez-vous. Des reproductions numériques haute définition peuvent être commandées pour un usage personnel, académique ou éditorial, sous réserve de mention de la source.",
            "Le CNDRS mène en partenariat avec l'association Medina Wiratha un programme de numérisation et de valorisation du patrimoine photographique, dont les résultats sont accessibles sur museephotomoroni.com.",
          ]
        },
        {
          titre: "Faire un don",
          paragraphes: [
            "Vous possédez des photographies anciennes des Comores ? Le CNDRS accepte les dons et dépôts de collections photographiques privées. Contactez-nous pour discuter des modalités de conservation et de valorisation de vos documents.",
          ]
        }
      ]}
      services={[
        { label: "Consulter l'iconothèque", href: "/services/archives" },
        { label: "Commander une reproduction", href: "/services/archives" },
        { label: "Galerie en ligne", href: "/collections/iconotheque" },
        { label: "Faire un don", href: "/contact" },
      ]}
    />
  )
}
