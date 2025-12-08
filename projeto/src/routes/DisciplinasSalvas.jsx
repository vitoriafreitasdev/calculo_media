
import "./DisciplinasSalvas.css"

const DisplinasSalvas = () => {
    const teoricasSalvas = localStorage.getItem("notasTeoricas")
    const praticasSalvas = localStorage.getItem("notasPraticas")
    let teoricasJS = null
    let praticaJS = null
    if(teoricasSalvas && praticasSalvas) {
      teoricasJS = JSON.parse(teoricasSalvas)
      praticaJS = JSON.parse(praticasSalvas)
    } else {
      return <div><p>Não tem disciplinas salvas</p></div>
    }


    //fazer o css e dps permitir fazer o calculo da media delas aqui tambem, podendo reajustar os valores salvos e salvar novamente
  return (
    <div className='disciplinasSalvasDiv'>
      <h2>Disciplinas salvas</h2>
      <h3>Teóricas</h3>
      <div className='discTeoricasSalvas'>
          {teoricasJS && teoricasJS.map((disciplina, index) => (
            <div key={index} className='discTeorica'> 
                <h3>{disciplina.disciplina}</h3>
                <p><strong>Prova:</strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.prova}/>
                <p><strong>Ava: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.ava}/>
                <p><strong>Pim: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.pim}/>
                <p><strong>Média: </strong>{disciplina.media}</p>
                {disciplina.aprovado ? <p className="aprovado">Aprovado</p> : <p className="reprovado">Reprovado</p>}
            </div>
        ))}
      </div>
      <h3>Práticas</h3>
      <div className='discPraticasSalvas'>
          {praticaJS && praticaJS.map((disciplina, index) => (
            <div key={index} className='discPratica'> 
                <h3>{disciplina.disciplina}</h3>
                <p><strong>Prova: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.prova}/>
                <p><strong>Relatório: </strong></p>
                <input type="number" min="0" max="10" step="0.1" placeholder={disciplina.relatorio}/>
                <p><strong>Média: </strong>{disciplina.media}</p>
                {disciplina.aprovado ? <p className="aprovado">Aprovado</p> : <p className="reprovado">Reprovado</p>}
            </div>
           ))}
      </div>
      <button className="save-btn">Salvar</button>
    </div>
  )
}

export default DisplinasSalvas