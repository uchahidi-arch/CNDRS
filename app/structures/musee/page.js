import StructurePage from '../../../components/StructurePage'

export const metadata = {
  title: 'Musée national — CNDRS',
  description: 'Le Musée national du CNDRS abrite des collections permanentes et temporaires retraçant l\'histoire et la culture de l\'archipel comorien.',
}

export default function MuseePage() {
  return (
    <StructurePage
      label="Structures"
      titre="Musée national"
      description="Collections permanentes et temporaires retraçant l'histoire et la culture de l'archipel comorien. Objets rituels, bijoux, manuscrits et reconstitutions historiques inédites."
      image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      intro={{
        titre: "La mémoire vivante de l'archipel",
        paragraphes: [
          "Le Musée national du CNDRS est le principal musée de l'Union des Comores. Il rassemble des collections couvrant l'histoire, l'archéologie, l'ethnographie, les arts et les traditions de l'archipel, des origines à l'époque contemporaine.",
          "Récemment enrichi d'une nouvelle salle dédiée aux sultanats de l'archipel, le musée présente pour la première fois au public des manuscrits, objets rituels et reconstitutions historiques inédites. Il accueille également des expositions temporaires en partenariat avec des institutions internationales.",
        ]
      }}
      sections={[
        {
          titre: "Collections permanentes",
          items: [
            "Salle des sultanats — histoire politique et objets des cours royales",
            "Salle de l'islam aux Comores — manuscrits, objets liturgiques, calligraphies",
            "Salle des traditions — grand mariage, manzaraka, costumes traditionnels",
            "Salle de l'archéologie — céramiques, monnaies, vestiges des cités médiévales",
            "Salle de la nature — faune, flore et géologie de l'archipel",
            "Galerie photographique — un siècle d'histoire visuelle des Comores",
          ]
        },
        {
          titre: "Visites et médiation",
          paragraphes: [
            "Le musée propose des visites guidées pour les groupes scolaires, les touristes et les professionnels. Des fiches pédagogiques sont disponibles pour les enseignants souhaitant préparer une visite avec leurs élèves.",
            "Les visites peuvent être réservées en ligne. Le musée est accessible aux personnes à mobilité réduite.",
          ]
        },
        {
          titre: "Expositions temporaires",
          paragraphes: [
            "Le musée accueille régulièrement des expositions temporaires en partenariat avec des institutions comoriennes, régionales et internationales. Consultez l'agenda pour connaître les expositions en cours.",
          ]
        }
      ]}
      services={[
        { label: "Réserver une visite", href: "/services/reserver" },
        { label: "Groupes scolaires", href: "/services/educatif" },
        { label: "Expositions en cours", href: "/services/evenements" },
        { label: "Visite virtuelle", href: "/collections/visite-virtuelle" },
      ]}
    />
  )
}
