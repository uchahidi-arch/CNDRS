'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

const ouvrages = [
  { titre: "Histoire des Comores — des origines à l'indépendance", auteur: "Mohamed Ahmed-Chamanga", annee: 1997, categorie: "Histoire", disponible: true, cote: "HIS-001" },
  { titre: "Grammaire du shikomori de Ngazidja", auteur: "Noël Jacques Gueunier", annee: 2004, categorie: "Linguistique", disponible: true, cote: "LIN-012" },
  { titre: "Les sultans de Ndzuani — histoire politique et sociale", auteur: "Sophie Blanchy", annee: 1992, categorie: "Histoire", disponible: false, cote: "HIS-034" },
  { titre: "Archéologie des Comores — sites et vestiges médiévaux", auteur: "Henry Wright", annee: 1984, categorie: "Archéologie", disponible: true, cote: "ARC-007" },
  { titre: "La coelacanthe des Comores", auteur: "CNDRS", annee: 2001, categorie: "Sciences naturelles", disponible: true, cote: "SCI-023" },
  { titre: "Manuscrits arabes des Comores — catalogue descriptif", auteur: "CNDRS — Département arabo-islamique", annee: 2015, categorie: "Patrimoine", disponible: true, cote: "PAT-004" },
  { titre: "Le grand mariage des Comores — rite de passage et institution sociale", auteur: "Damir Ben Ali", annee: 1985, categorie: "Anthropologie", disponible: false, cote: "ANT-019" },
  { titre: "Volcanologie du Karthala", auteur: "OVK — CNDRS", annee: 2010, categorie: "Sciences de la terre", disponible: true, cote: "GEO-003" },
]

export default function CataloguePage() {
  const [query, setQuery] = useState('')
  const [categorie, setCategorie] = useState('Toutes')

  const categories = ['Toutes', ...new Set(ouvrages.map(o => o.categorie))]

  const filtered = ouvrages.filter(o => {
    const matchQuery = o.titre.toLowerCase().includes(query.toLowerCase()) || o.auteur.toLowerCase().includes(query.toLowerCase())
    const matchCat = categorie === 'Toutes' || o.categorie === categorie
    return matchQuery && matchCat
  })

  return (
    <div className={styles.page}>
      <PageHero
        label="Collections"
        titre="Catalogue de la bibliothèque"
        description="Consultez le fonds documentaire de la Bibliothèque nationale du CNDRS — ouvrages, revues, rapports et thèses sur les Comores et l'océan Indien."
        image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.searchBar}>
          <div className={styles.inputWrap}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Rechercher un titre, un auteur..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className={styles.input}
            />
          </div>
          <select className={styles.select} value={categorie} onChange={e => setCategorie(e.target.value)}>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <p className={styles.results}>{filtered.length} résultat{filtered.length > 1 ? 's' : ''}</p>

        <div className={styles.list}>
          {filtered.map((o, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.itemInfo}>
                <h3>{o.titre}</h3>
                <p className={styles.auteur}>{o.auteur} — {o.annee}</p>
                <div className={styles.tags}>
                  <span className={styles.cote}>{o.cote}</span>
                  <span className={styles.cat}>{o.categorie}</span>
                </div>
              </div>
              <div className={styles.dispo}>
                <span className={o.disponible ? styles.disponible : styles.indisponible}>
                  {o.disponible ? '● Disponible' : '○ Emprunté'}
                </span>
                {o.disponible && <a href="/services/salle-lecture" className={styles.reserver}>Réserver</a>}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.notice}>
          <p>Ce catalogue présente une sélection du fonds. Pour une recherche complète, contactez nos bibliothécaires ou rendez-vous à la Bibliothèque nationale du CNDRS.</p>
        </div>
      </div>
    </div>
  )
}
