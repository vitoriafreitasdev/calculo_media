import Entrada from './components/Entrada'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
function App() {


  return (
    <div >
      <Header/>
      {/* <Entrada/> */}
      <Outlet/>
    </div>
  )
}

export default App
