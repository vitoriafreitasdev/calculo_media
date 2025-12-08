import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom"

import NomeDasDisciplina from './routes/NomeDasDisciplina.jsx'
import ReceberAsNota from './routes/ReceberAsNota.jsx'
import Entrada from './components/Entrada.jsx'
import DisciplinasSalvas from './routes/DisciplinasSalvas.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Entrada/>
      },
      {
        path: "/nomeDasDisciplinas",
        element: <NomeDasDisciplina/>
      },
      {
        path: "/receberAsNotas",
        element: <ReceberAsNota/>
      },
      {
        path: "/disciplinassalvas",
        element: <DisciplinasSalvas/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
