'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

export default function SalleLecturePage() {
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
        titre="Salle de lecture"
        description="Réservez un créneau à la salle de lecture de la Bibliothèque nationale du CNDRS pour vos recherches."
        image="https://cndrs.km/wp-content/uploads/2025/04/Moroni-Mosquee-Salmata-Hamasi-150x150.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.formSection}>
            <h2>Réserver un créneau</h2>
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
                    <label>Date souhaitée</label>
                    <input type="date" min={new Date().toISOString().split('T')[0]} required />
                  </div>
                  <div className={styles.field}>
                    <label>Créneau</label>
                    <select required>
                      <option value="">Choisir</option>
                      <option>Matin (8H — 12H)</option>
                      <option>Après-midi (13H — 16H)</option>
                      <option>Journée complète</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Sujet de recherche</label>
                  <textarea rows="3" placeholder="Décrivez brièvement votre sujet de recherche..." required />
                </div>
                <button type="submit" className={styles.btn}>Confirmer la réservation</button>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.check}>✓</div>
                <h3>Réservation confirmée</h3>
                <p>Votre créneau est réservé. Vous recevrez une confirmation par email.</p>
              </div>
            )}
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3>Horaires</h3>
              <p className={styles.jour}>Lundi — Vendredi</p>
              <p className={styles.heure}>8H00 → 16H00</p>
              <p className={styles.jour}>Samedi</p>
              <p className={styles.heure}>8H00 → 12H00</p>
            </div>
            <div className={styles.asideCard}>
              <h3>Capacité</h3>
              <p>La salle de lecture dispose de <strong>20 places</strong>. La réservation est recommandée mais non obligatoire pour les visites individuelles.</p>
            </div>
            <div className={styles.asideCard}>
              <h3>À apporter</h3>
              <p>Pièce d'identité obligatoire. Les ordinateurs personnels et les appareils photo sont autorisés.</p>
            </div>
            <div className={styles.asideCard}>
              <h3>Contact</h3>
              <a href="tel:+26977391002">+269 773 91 02</a>
              <a href="mailto:bibliotheque@cndrs.km">bibliotheque@cndrs.km</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
