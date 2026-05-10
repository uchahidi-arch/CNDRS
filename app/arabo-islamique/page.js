import StructurePage from '@/components/StructurePage'

export const metadata = {
  title: 'Département arabo-islamique — CNDRS',
  description: 'Le département arabo-islamique du CNDRS conserve et valorise les manuscrits arabes et le patrimoine de la civilisation islamique aux Comores.',
}

export default function AraboIslamiquePage() {
  return (
    <StructurePage
      label="Structures"
      titre="Département arabo-islamique"
      description="Conservation et valorisation des manuscrits arabes et du patrimoine de la civilisation islamique aux Comores — un héritage de plusieurs siècles."
      image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      intro={{
        titre: "Un patrimoine islamique exceptionnel",
        paragraphes: [
          "L'islam est présent aux Comores depuis le VIIIe siècle. Au fil des siècles, l'archipel a développé une civilisation islamique originale, nourrie des échanges avec la côte est-africaine, la péninsule arabique, l'Inde et l'Indonésie. Le département arabo-islamique du CNDRS est chargé de conserver, d'étudier et de valoriser ce patrimoine exceptionnel.",
          "Le fonds de manuscrits arabes du CNDRS est l'un des plus importants de la région de l'océan Indien. Il comprend des textes de droit islamique, de grammaire arabe, de poésie, de médecine traditionnelle et de sciences coraniques, produits ou collectés aux Comores entre le XVe et le XXe siècle.",
        ]
      }}
      sections={[
        {
          titre: "Le fonds de manuscrits",
          items: [
            "Traités de droit islamique — fiqh malékite et chaféite",
            "Textes de grammaire arabe et de rhétorique",
            "Poésie arabe et comorienne en caractères arabes",
            "Ouvrages de médecine traditionnelle et de botanique",
            "Chroniques historiques des sultanats en arabe",
            "Correspondances diplomatiques des sultans",
            "Textes de sciences coraniques et d'exégèse",
          ]
        },
        {
          titre: "Recherche et valorisation",
          paragraphes: [
            "Le département mène des recherches sur la civilisation arabo-islamique aux Comores et dans l'océan Indien, en collaboration avec des institutions partenaires au Maroc, en Egypte et en France. Il publie régulièrement dans la revue Ya Mkobe et dans des revues scientifiques internationales.",
            "Un programme de numérisation des manuscrits les plus fragiles est en cours, en partenariat avec l'UNESCO. L'objectif est de rendre ces textes accessibles aux chercheurs du monde entier tout en garantissant leur conservation à long terme.",
          ]
        },
        {
          titre: "L'enseignement islamique traditionnel",
          paragraphes: [
            "Le département s'intéresse également aux écoles coraniques traditionnelles — les madrasa — qui ont joué un rôle central dans la transmission du savoir islamique aux Comores. Des enquêtes de terrain documentent ces institutions et leurs pratiques pédagogiques séculaires.",
          ]
        }
      ]}
      services={[
        { label: "Consulter les manuscrits", href: "/services/archives" },
        { label: "Fonds arabo-islamique", href: "/collections/arabo-islamique" },
        { label: "Publications du département", href: "/recherche/publications" },
        { label: "Nous contacter", href: "/contact" },
      ]}
    />
  )
}
