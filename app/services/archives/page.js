'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

export default function ArchivesServicePage() {
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
        titre="Consulter les archives"
        description="Demandez une consultation des Archives nationales du CNDRS — chercheurs, étudiants, journalistes et particuliers."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.formSection}>
            <h2>Demande de consultation</h2>
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
                    <label>Qualité</label>
                    <select required>
                      <option value="">Choisir</option>
                      <option>Chercheur</option>
                      <option>Étudiant</option>
                      <option>Journaliste</option>
                      <option>Particulier</option>
                      <option>Institution</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Institution / Université</label>
                    <input type="text" placeholder="Si applicable" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Fonds ou période recherchée</label>
                  <input type="text" placeholder="Ex : Archives coloniales 1920-1950, actes d'état civil..." required />
                </div>
                <div className={styles.field}>
                  <label>Objet de la recherche</label>
                  <textarea rows="4" placeholder="Décrivez votre projet de recherche et les documents que vous souhaitez consulter..." required />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Date souhaitée</label>
                    <input type="date" min={new Date().toISOString().split('T')[0]} required />
                  </div>
                  <div className={styles.field}>
                    <label>Durée estimée</label>
                    <select>
                      <option>Demi-journée</option>
                      <option>Une journée</option>
                      <option>Plusieurs jours</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className={styles.btn}>Envoyer la demande</button>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.check}>✓</div>
                <h3>Demande envoyée</h3>
                <p>L'équipe des Archives nationales vous contactera sous 48h pour valider votre demande et confirmer votre créneau.</p>
              </div>
            )}
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3>Horaires salle de consultation</h3>
              <p className={styles.jour}>Lundi — Vendredi</p>
              <p className={styles.heure}>8H00 → 15H30</p>
              <p className={styles.note}>Sur rendez-vous uniquement</p>
            </div>
            <div className={styles.asideCard}>
              <h3>Conditions d'accès</h3>
              <p>La consultation est gratuite. Une pièce d'identité est requise à l'entrée. Les appareils photo sont autorisés sans flash.</p>
            </div>
            <div className={styles.asideCard}>
              <h3>Reproduire un document</h3>
              <p>Des reproductions numériques haute définition peuvent être commandées pour usage académique ou personnel.</p>
              <a href="/contact" className={styles.link}>Faire une demande →</a>
            </div>
            <div className={styles.asideCard}>
              <h3>Contact</h3>
              <a href="tel:+26977391002">+269 773 91 02</a>
              <a href="mailto:archives@cndrs.km">archives@cndrs.km</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
