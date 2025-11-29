
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Entrada.css'
const Entrada = () => {
    const navigate = useNavigate();
    const [numDeTeorica, setNumDeTeorica] = useState(0)
    const [numDePratica, setNumDePratica] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/nomeDasDisciplinas', {state: { numDeTeorica, numDePratica }})
    }
  return (
    <div >
        <form onSubmit={onSubmit} className="formEntrada">
            <h1>Calculo de média</h1>
            <p>Quantas disciplinas teóricas você irá digitar: </p>
            <input type="number" onChange={(e) => setNumDeTeorica(Number(e.target.value))}></input>
            <p>Quantas disciplinas prática você irá digitar: </p>
            <input type="number" onChange={(e) => setNumDePratica(Number(e.target.value))}></input>
            <input type="submit" value="Enviar" />
        </form>
        
    </div>
  )
}

export default Entrada