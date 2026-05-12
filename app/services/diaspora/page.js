'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

export default function DiasporaPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) { e.target.reportValidity(); return }
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <PageHero
        label="Services"
        titre="Espace diaspora"
        description="Accédez à distance aux archives généalogiques, fonds photographiques historiques et documents d'état civil — où que vous soyez dans le monde."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2>Le CNDRS au service de la diaspora comorienne</h2>
          <p>La diaspora comorienne est profondément attachée à l'histoire de l'archipel. Des dizaines de milliers de Comoriens installés en France, à Mayotte, dans les pays du Golfe et à travers le monde cherchent à reconstituer leur histoire familiale, à retrouver des documents anciens ou à accéder aux archives nationales sans pouvoir se déplacer à Moroni.</p>
          <p>Le CNDRS propose un service dédié permettant d'effectuer des recherches à distance dans les fonds d'archives, de commander des reproductions de documents et d'accéder à certaines ressources numérisées en ligne.</p>
        </div>

        <div className={styles.services}>
          {[
            { label: "Généalogie", titre: "Recherche généalogique", desc: "Retrouvez les actes d'état civil de vos ancêtres — naissances, mariages, décès — dans les archives nationales du CNDRS." },
            { label: "Archives", titre: "Reproduction de documents", desc: "Commandez des reproductions numériques haute définition de documents d'archives pour usage personnel ou académique." },
            { label: "Photographies", titre: "Fonds photographiques", desc: "Accédez aux collections photographiques historiques du CNDRS — portraits de famille, cérémonies, paysages d'époque." },
            { label: "Sultanats", titre: "Archives des sultanats", desc: "Consultez les chroniques et documents historiques sur les sultanats, les familles nobles et l'histoire politique de l'archipel." },
          ].map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <span className={styles.cardLabel}>{s.label}</span>
              <h3>{s.titre}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.formSection}>
          <h2>Faire une demande</h2>
          {!sent ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Nom complet</label>
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input type="email" placeholder="votre@email.com" required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Pays de résidence</label>
                  <input type="text" placeholder="France, Mayotte, Émirats..." required />
                </div>
                <div className={styles.field}>
                  <label>Type de demande</label>
                  <select required>
                    <option value="">Choisir</option>
                    <option>Recherche généalogique</option>
                    <option>Reproduction de document</option>
                    <option>Accès fonds photographique</option>
                    <option>Archives des sultanats</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <label>Détail de la demande</label>
                <textarea rows="5" placeholder="Précisez votre demande — noms, dates, lieux, périodes concernées..." required />
              </div>
              <button type="submit" className={styles.btn}>Envoyer la demande</button>
            </form>
          ) : (
            <div className={styles.success}>
              <div className={styles.check}>✓</div>
              <h3>Demande envoyée</h3>
              <p>L'équipe du CNDRS traitera votre demande et vous répondra par email dans un délai de 5 jours ouvrables.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}