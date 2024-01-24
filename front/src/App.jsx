
import { AuthProvider } from './Components/context/auth'
import RoutesPages from './Components/Routes'

function App() {

  return (
    <>
      <AuthProvider>
        <RoutesPages/>
      </AuthProvider>
    </>
  )
}

export default App
