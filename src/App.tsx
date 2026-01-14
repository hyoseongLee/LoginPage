import './App.css'
import { Toaster } from 'react-hot-toast'
import LoginPage from './page/login/LoginPage'

function App() {

  return (
    <div className='App'>
<Toaster position='bottom-right'/>
<LoginPage />
    </div>

  )
}

export default App
