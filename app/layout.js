import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MuseeFloatingBtn from '../components/MuseeFloatingBtn'
import ReservationModal from '../components/ReservationModal'

export const metadata = {
  title: 'CNDRS — Centre National de Documentation et de Recherche Scientifique',
  description: 'Le Centre National de Documentation et de Recherche Scientifique des Comores conserve et valorise le patrimoine scientifique, historique et culturel de l\'archipel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MuseeFloatingBtn />
        <ReservationModal />
      </body>
    </html>
  )
}