import Entrada from './components/Entrada'
import './App.css'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <div >
      <Entrada/>
      <Outlet/>
    </div>
  )
}

export default App
