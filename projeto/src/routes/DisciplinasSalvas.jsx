
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
                <h4>{disciplina.disciplina}</h4>
                <p><strong>Prova: </strong>{disciplina.prova}</p>
                <p><strong>Ava: </strong>{disciplina.ava}</p>
                <p><strong>Pim: </strong>{disciplina.pim}</p>
                <p><strong>Média: </strong>{disciplina.media}</p>
                {disciplina.aprovado ? <p>Aprovado</p> : <p>Reprovado</p>}
            </div>
        ))}
      </div>
      <h3>Práticas</h3>
      <div className='discPraticasSalvas'>
          {praticaJS && praticaJS.map((disciplina, index) => (
            <div key={index} className='discPratica'> 
                <h4>{disciplina.disciplina}</h4>
                <p><strong>Prova: </strong>{disciplina.prova}</p>
                <p><strong>Relatório: </strong>{disciplina.relatorio}</p>
                <p><strong>Média: </strong>{disciplina.media}</p>
                {disciplina.aprovado ? <p>Aprovado</p> : <p>Reprovado</p>}
            </div>
           ))}
      </div>
    </div>
  )
}

export default DisplinasSalvas