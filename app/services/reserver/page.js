'use client'
import PageHero from '@/components/PageHero'
import { useState } from 'react'
import styles from './page.module.css'

export default function ReserverPage() {
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
        titre="Réserver une visite"
        description="Planifiez votre visite du Musée national du CNDRS — individuel, groupe scolaire, groupe touristique ou institution."
        image="https://cndrs.km/wp-content/uploads/2025/04/Page-11-Palais-Ujumbe-150x150.jpeg"
      />

      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.formSection}>
            <h2>Votre demande de visite</h2>
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
                    <label>Téléphone</label>
                    <input type="tel" placeholder="+269 XXX XX XX" />
                  </div>
                  <div className={styles.field}>
                    <label>Type de groupe</label>
                    <select required>
                      <option value="">Choisir</option>
                      <option>Individuel</option>
                      <option>Groupe scolaire</option>
                      <option>Groupe touristique</option>
                      <option>Institution</option>
                    </select>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Date souhaitée</label>
                    <input type="date" min={new Date().toISOString().split('T')[0]} required />
                  </div>
                  <div className={styles.field}>
                    <label>Nombre de visiteurs</label>
                    <input type="number" min="1" max="100" placeholder="Ex : 25" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Demande spéciale ou commentaire</label>
                  <textarea rows="4" placeholder="Langue de visite souhaitée, besoins particuliers, thème d'intérêt..." />
                </div>
                <button type="submit" className={styles.btn}>Confirmer la demande</button>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.check}>✓</div>
                <h3>Demande envoyée</h3>
                <p>L'équipe du musée vous contactera sous 48h pour confirmer votre visite.</p>
              </div>
            )}
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3>Horaires du musée</h3>
              <p className={styles.jour}>Lundi — Vendredi</p>
              <p className={styles.heure}>8H00 → 17H00</p>
              <p className={styles.jour}>Samedi</p>
              <p className={styles.heure}>8H00 → 12H00</p>
              <p className={styles.jour}>Dimanche</p>
              <p className={styles.ferme}>Fermé</p>
            </div>
            <div className={styles.asideCard}>
              <h3>Tarifs</h3>
              <div className={styles.tarif}><span>Adulte</span><span>500 KMF</span></div>
              <div className={styles.tarif}><span>Enfant (- 12 ans)</span><span>Gratuit</span></div>
              <div className={styles.tarif}><span>Groupe scolaire</span><span>Sur devis</span></div>
              <div className={styles.tarif}><span>Visite guidée</span><span>1 500 KMF</span></div>
            </div>
            <div className={styles.asideCard}>
              <h3>Contact direct</h3>
              <a href="tel:+26977391002">+269 773 91 02</a>
              <a href="mailto:musee@cndrs.km">musee@cndrs.km</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
