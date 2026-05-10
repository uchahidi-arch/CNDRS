'use client'
import { useState, useEffect } from 'react'
import styles from './ReservationModal.module.css'

export default function ReservationModal() {
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.dataset.modal === 'reservation') setOpen(true)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => { setOpen(false); setSuccess(false) }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) { e.target.reportValidity(); return }
    setSuccess(true)
  }

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={e => { if (e.target === e.currentTarget) close() }}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <h2>Réserver une visite au musée</h2>
          <button className={styles.close} onClick={close} aria-label="Fermer">×</button>
        </div>
        <hr className={styles.divider} />

        {!success ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom complet" required />
            <input type="email" placeholder="Email" required />
            <input type="date" min={new Date().toISOString().split('T')[0]} required />
            <input type="number" placeholder="Nombre de visiteurs" min="1" max="50" required />
            <select required>
              <option value="">Type de groupe</option>
              <option>Individuel</option>
              <option>Groupe scolaire</option>
              <option>Groupe touristique</option>
              <option>Institution</option>
            </select>
            <textarea rows="3" placeholder="Demande spéciale ou commentaire" />
            <button type="submit" className={styles.submit}>Confirmer la réservation</button>
          </form>
        ) : (
          <div className={styles.success}>
            <div className={styles.check}>✓</div>
            <p>Votre demande a été envoyée. L'équipe du musée vous contactera sous 48h.</p>
            <button className={styles.submit} onClick={close}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  )
}
