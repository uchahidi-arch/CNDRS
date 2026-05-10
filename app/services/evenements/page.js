'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

const evenements = [
  { titre: "Colloque international sur les sultanats de l'archipel", date: "15 Mai 2026", heure: "9H00 — 17H00", lieu: "Salle de conférences CNDRS, Moroni", type: "Colloque", description: "Deux jours de conférences réunissant des chercheurs comoriens et internationaux sur l'histoire politique et sociale des sultanats de l'archipel.", places: 80, inscrit: 54 },
  { titre: "Journée portes ouvertes — Musée national", date: "22 Mai 2026", heure: "8H00 — 17H00", lieu: "Musée national du CNDRS", type: "Événement", description: "Entrée gratuite, visites guidées toutes les heures, ateliers pour enfants et présentation des nouvelles collections.", places: 200, inscrit: 87 },
  { titre: "Présentation du numéro 48 de Ya Mkobe", date: "5 Juin 2026", heure: "16H00 — 18H00", lieu: "Bibliothèque nationale, Moroni", type: "Publication", description: "Présentation officielle du dernier numéro de la revue Ya Mkobe, consacré à l'archéologie sous-marine.", places: 60, inscrit: 31 },
  { titre: "Formation — Conservation préventive des archives", date: "18 Juin 2026", heure: "8H00 — 12H00", lieu: "Archives nationales, CNDRS", type: "Formation", description: "Formation ouverte aux agents d'institutions publiques sur les bonnes pratiques de conservation des documents d'archives.", places: 25, inscrit: 18 },
  { titre: "Conférence — Les Comores et l'UNESCO", date: "2 Juillet 2026", heure: "15H00 — 17H30", lieu: "Salle de conférences CNDRS, Moroni", type: "Conférence", description: "Présentation de l'avancement du dossier de candidature des médinas comoriennes au patrimoine mondial de l'UNESCO.", places: 100, inscrit: 62 },
]

const typeColors = { "Colloque": "#1A5C2A", "Événement": "#7a6a4a", "Publication": "#2e4a3a", "Formation": "#c0392b", "Conférence": "#2980b9" }

export default function EvenementsPage() {
  const [selected, setSelected] = useState(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <PageHero
        label="Services"
        titre="Événements & colloques"
        description="Les prochains événements, conférences, formations et colloques organisés par le CNDRS — ouverts au public sur inscription."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-6-Azali-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.list}>
          {evenements.map((e, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dateBlock}>
                <span className={styles.day}>{e.date.split(' ')[0]}</span>
                <span className={styles.month}>{e.date.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className={styles.info}>
                <div className={styles.infoTop}>
                  <span className={styles.type} style={{ background: typeColors[e.type] + '18', color: typeColors[e.type] }}>{e.type}</span>
                  <span className={styles.heure}>{e.heure}</span>
                </div>
                <h3>{e.titre}</h3>
                <p className={styles.lieu}>📍 {e.lieu}</p>
                <p className={styles.desc}>{e.description}</p>
                <div className={styles.places}>
                  <div className={styles.bar}>
                    <div className={styles.barFill} style={{ width: `${(e.inscrit / e.places) * 100}%` }} />
                  </div>
                  <span>{e.inscrit} / {e.places} inscrits</span>
                </div>
              </div>
              <button className={styles.inscritBtn} onClick={() => { setSelected(e); setSent(false) }}>
                S'inscrire
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className={styles.overlay} onClick={e => { if (e.target === e.currentTarget) setSelected(null) }}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Inscription — {selected.titre}</h2>
              <button className={styles.close} onClick={() => setSelected(null)}>×</button>
            </div>
            <hr className={styles.divider} />
            {!sent ? (
              <form className={styles.modalForm} onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom complet" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Téléphone (optionnel)" />
                <select required>
                  <option value="">Qualité</option>
                  <option>Chercheur</option>
                  <option>Étudiant</option>
                  <option>Professionnel</option>
                  <option>Grand public</option>
                </select>
                <textarea rows="2" placeholder="Message ou demande particulière (optionnel)" />
                <button type="submit" className={styles.modalBtn}>Confirmer l'inscription</button>
              </form>
            ) : (
              <div className={styles.modalSuccess}>
                <div className={styles.check}>✓</div>
                <p>Inscription confirmée. Vous recevrez un email de confirmation.</p>
                <button className={styles.modalBtn} onClick={() => setSelected(null)}>Fermer</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
