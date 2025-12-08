
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Entrada.css'
const Entrada = () => {
    const navigate = useNavigate();
    const [numDeTeorica, setNumDeTeorica] = useState(0)
    const [numDePratica, setNumDePratica] = useState(0)
    const [message, setUserMessage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()

        if(numDeTeorica > 0 && numDePratica > 0){
          navigate('/nomeDasDisciplinas', {state: { numDeTeorica, numDePratica }})
        } else {
          setUserMessage("Adiocione a quantidade de disciplinas antes de enviar.")
          setTimeout(function(){
            setUserMessage(null)
          }, 2000)
          return
        }
    }
  return (
    <div className="entrada-div">
        {message && <p className="user-message">{message}</p>}
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