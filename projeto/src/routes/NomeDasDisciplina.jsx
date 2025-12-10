
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './NomeDasDisciplina.css'

import livro from "../img/icone-livro.png"
import frasco from "../img/icone-frasco.jpeg"


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
       const teoricas_ordenadas = nomeDasDisciTeorica.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });

        const praticas_ordenadas = nomeDasDisciPratica.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });

        setNomeDasDisciTeorica(teoricas_ordenadas)
        setNomeDasDisciPratica(praticas_ordenadas)
        navigate('/receberAsNotas', {state: { nomeDasDisciTeorica, nomeDasDisciPratica }})
    }
  return (
    // arrumar o css desse aqui
    <form onSubmit={handleSubmit} className="formNomes">
            <h2>Disciplinas nomes</h2>
            <div className="div-nomes">
                <div className="h2-img">
                    <img className="icone" src={livro} alt="" />
                    <h2>Teóricas</h2>
                </div>
                {Array.from({length: numDeTeorica}).map((_, index) =>(
                    <div key={index} className="div-nomes-disc">
                        <p className="p-name">Nome da disciplina: </p>
                        <input type="text" onChange={(e) => teoricas(index, e.target.value)} value={nomeDasDisciTeorica[index] || ''}/>
                    </div>
                ))}
                <div className="h2-img">
                    <img className="icone" src={frasco} alt="" />
                    <h2>Práticas</h2>
                </div>
                {Array.from({length: numDePratica}).map((_, index) =>(
                    <div key={index} className="div-nomes-disc">
                        <p className="p-name">Nome da disciplina: </p>
                        <input type="text" onChange={(e) => praticas(index, e.target.value)} value={nomeDasDisciPratica[index] || ''}/>
                    </div>
                ))}
                <input type="submit" value="Enviar" />
            </div>
    </form>
  )
}

export default NomeDasDisciplina