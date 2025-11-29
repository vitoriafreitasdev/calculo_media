
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './NomeDasDisciplina.css'

const NomeDasDisciplina = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const {numDeTeorica, numDePratica} = location.state || 0
    const [nomeDasDisciTeorica, setNomeDasDisciTeorica] = useState([])
    const [nomeDasDisciPratica, setNomeDasDisciPratica] = useState([])
    const teoricas = (index, value) => {
        const teorica = [...nomeDasDisciTeorica]
        teorica[index] = value
        setNomeDasDisciTeorica(teorica)

    }

    const praticas = (index, value) => {
        const teorica = [...nomeDasDisciPratica]
        teorica[index] = value
        setNomeDasDisciPratica(teorica)

    }

    const handleSubmit = (e) => {
       e.preventDefault()
        navigate('/receberAsNotas', {state: { nomeDasDisciTeorica, nomeDasDisciPratica }})
    }
  return (
    <form onSubmit={handleSubmit} className="formNomes">
        <h1>Nomes das teóricas</h1>
         {Array.from({length: numDeTeorica}).map((_, index) =>(
            <div key={index}>
                <p>nome da disciplina: </p>
                <input type="text" onChange={(e) => teoricas(index, e.target.value)} value={nomeDasDisciTeorica[index] || ''}/>
            </div>
         ))}
         <h1>Nomes das práticas</h1>
         {Array.from({length: numDePratica}).map((_, index) =>(
            <div key={index}>
                <p>nome da disciplina: </p>
                 <input type="text" onChange={(e) => praticas(index, e.target.value)} value={nomeDasDisciPratica[index] || ''}/>
            </div>
         ))}
         <input type="submit" value="Enviar" />
    </form>
  )
}

export default NomeDasDisciplina