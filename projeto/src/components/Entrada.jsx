
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    <div className="entrada-div">
        
        <form onSubmit={onSubmit} className="formEntrada">
            <h1>Calculo de média</h1>
            <p>Quantas disciplinas teóricas você irá digitar: </p>
            <input type="number" onChange={(e) => setNumDeTeorica(Number(e.target.value))}></input>
            <p>Quantas disciplinas prática você irá digitar: </p>
            <input type="number" onChange={(e) => setNumDePratica(Number(e.target.value))}></input>
            <input type="submit" value="Enviar" />
            <button className="disc-salvas-btn"><Link className="linksalvas" to={"/disciplinassalvas"}>Ver disciplinas salvas</Link></button>
        </form>
        
    </div>
  )
}

export default Entrada