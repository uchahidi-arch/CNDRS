'use client'
import styles from './MuseeFloatingBtn.module.css'

export default function MuseeFloatingBtn() {
  return (
    <button className={styles.btn} data-modal="reservation">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
      </svg>
      Réserver une visite
    </button>
  )
}
