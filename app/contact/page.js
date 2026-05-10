'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) { e.target.reportValidity(); return }
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <PageHero
        label="CNDRS"
        titre="Contact"
        description="Une question, une demande de partenariat, un projet de recherche ? Contactez nos équipes."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-17-UnescoBONBON.jpg"
      />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.formSection}>
            <h2>Nous écrire</h2>
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
                <div className={styles.field}>
                  <label>Sujet</label>
                  <select required>
                    <option value="">Choisir un sujet</option>
                    <option>Demande de consultation d'archives</option>
                    <option>Réservation de visite</option>
                    <option>Partenariat institutionnel</option>
                    <option>Projet de recherche</option>
                    <option>Presse et médias</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Message</label>
                  <textarea rows="6" placeholder="Votre message..." required />
                </div>
                <button type="submit" className={styles.btn}>Envoyer le message</button>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.check}>✓</div>
                <h3>Message envoyé</h3>
                <p>Nous avons bien reçu votre message. Nos équipes vous répondront dans les meilleurs délais.</p>
              </div>
            )}
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3>Adresse</h3>
              <p>Boulevard Karthala</p>
              <p>Moroni, Union des Comores</p>
              <p>BP : 0092123</p>
            </div>
            <div className={styles.asideCard}>
              <h3>Téléphone</h3>
              <a href="tel:+26977391002">+269 773 91 02</a>
            </div>
            <div className={styles.asideCard}>
              <h3>Email</h3>
              <a href="mailto:contact@cndrs.km">contact@cndrs.km</a>
            </div>
            <div className={styles.asideCard}>
              <h3>Horaires d'ouverture</h3>
              <p className={styles.jour}>Lundi — Vendredi</p>
              <p className={styles.heure}>8H00 → 16H00</p>
              <p className={styles.jour}>Samedi</p>
              <p className={styles.heure}>8H00 → 12H00</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
