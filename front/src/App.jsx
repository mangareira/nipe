
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { AuthProvider } from './Components/context/auth'

function App() {

  return (
    <>
      <AuthProvider>
        <Header/>
        <Footer/>
      </AuthProvider>
    </>
  )
}

export default App
