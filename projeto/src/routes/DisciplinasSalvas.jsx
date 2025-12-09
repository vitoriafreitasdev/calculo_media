/* eslint-disable no-unused-vars */

import { useState } from "react"
import "./DisciplinasSalvas.css"
import { useNotas } from "../hooks/useNotas"
const DisplinasSalvas = () => {
    const teoricasSalvas = localStorage.getItem("notasTeoricas")
    const praticasSalvas = localStorage.getItem("notasPraticas")

    let teoricasJS = teoricasSalvas ?  JSON.parse(teoricasSalvas) : null
    let praticasJS = praticasSalvas ?  JSON.parse(praticasSalvas) : null
    
    const [notasTeoricas, setNotasTeoricas] = useState(teoricasJS)
    const [notaPraticas, setNotaPraticas] = useState(praticasJS)

    const {teoricas, praticas, salvarLocalStorage, userMessage} = useNotas(notasTeoricas, setNotasTeoricas, notaPraticas, setNotaPraticas)

    if(!teoricasSalvas && !praticasSalvas) return <div><p>Não tem disciplinas salvas</p></div>
    
    // fazer o teste de salvarLocalStorage
  return (
    <div className='disciplinasSalvasDiv'>
      {userMessage && <p>{userMessage}</p>}
      <h2>Disciplinas salvas</h2>
      <h3>Teóricas</h3>
      <div className='discTeoricasSalvas'>
          {notasTeoricas && notasTeoricas.map((disciplina, index) => (
            <div key={index} className='discTeorica'> 
                <h3>{disciplina.disciplina}</h3>
                <p><strong>Prova:</strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.prova} onChange={(e) => teoricas(index, 'prova', e.target.value)}/>
                <p><strong>Ava: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.ava} onChange={(e) => teoricas(index, 'ava', e.target.value)}/>
                <p><strong>Pim: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.pim} onChange={(e) => teoricas(index, 'pim', e.target.value)}/>
                <p><strong>Média: </strong>{disciplina.media}</p>
                {disciplina.aprovado ? <p className="aprovado">Aprovado</p> : <p className="reprovado">Reprovado</p>}
            </div>
        ))}
      </div>
      <h3>Práticas</h3>
      <div className='discPraticasSalvas'>
          {notaPraticas && notaPraticas.map((disciplina, index) => (
            <div key={index} className='discPratica'> 
                <h3>{disciplina.disciplina}</h3>
                <p><strong>Prova: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.prova} onChange={(e) => praticas(index, 'prova', e.target.value)}/>
                <p><strong>Relatório: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.relatorio} onChange={(e) => praticas(index, 'relatorio', e.target.value)}/>
                <p><strong>Média: </strong>{disciplina.media}</p>
                {disciplina.aprovado ? <p className="aprovado">Aprovado</p> : <p className="reprovado">Reprovado</p>}
            </div>
           ))}
      </div>
      <button className="save-btn" onClick={salvarLocalStorage}>Salvar</button>
    </div>
  )
}

export default DisplinasSalvas