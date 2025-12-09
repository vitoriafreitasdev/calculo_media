
import { useLocation } from "react-router-dom"
import { useState } from "react"
import './ReceberAsNota.css'
import { useNotas } from "../hooks/useNotas"

const ReceberAsNota = () => {
    const location = useLocation()
    const {nomeDasDisciTeorica = [], nomeDasDisciPratica = []} = location.state || []

    
    const [notasTeoricas, setNotasTeoricas] = useState(
        nomeDasDisciTeorica.map((nome) => ({
            disciplina: nome,
            prova: 0,
            ava: 0,
            pim: 0,
            media: 0,
            aprovado: false
        }))
    )

    const [notaPraticas, setNotaPraticas] = useState(
      nomeDasDisciPratica.map((nome) =>({
          disciplina: nome,
          prova: 0,
          relatorio: 0,
          aprovado: false,
        }))
    )

   const {teoricas, praticas, salvarLocalStorage, userMessage} = useNotas(notasTeoricas, setNotasTeoricas, notaPraticas, setNotaPraticas)


  


  // const calcularMediaGeral = () => {
  //     const medias = notasTeoricas.map(nota => nota.media);
  //     return medias.reduce((sum, media) => sum + media, 0) / medias.length;
  // };

  

  return (
    <div className="divMedia">
      <h1>Lançamento de notas</h1>
      <div>
        <h2 className="h2-divMedia">Teóricas</h2>
          <div className="disciplinas-teoricas-grid">
                {nomeDasDisciTeorica.map((nome, index) => (
                    <div key={index} className="disciplina-card">
                        <h3>{nome}</h3>
                        
                        <div className="nota-input">
                            <label>Prova (70%):</label>
                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={notasTeoricas[index].prova}
                                onChange={(e) => teoricas(index, 'prova', e.target.value)}
                            />
                        </div>
                        
                        <div className="nota-input">
                            <label>AVA (10%):</label>
                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={notasTeoricas[index].ava}
                                onChange={(e) => teoricas(index, 'ava', e.target.value)}
                            />
                        </div>
                        
                        <div className="nota-input">
                            <label>PIM (20%):</label>
                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={notasTeoricas[index].pim}
                                onChange={(e) => teoricas(index, 'pim', e.target.value)}
                            />
                        </div>
                        
                        <div className={`resultado ${notasTeoricas[index].aprovado ? 'aprovado' : 'reprovado'}`}>
                            <p>Média: <strong>{notasTeoricas[index].media.toFixed(1)}</strong></p>
                            <p>Situação: {notasTeoricas[index].aprovado ? '✅ Aprovado' : '❌ Reprovado'}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="h2-divMedia">Práticas</h2>
            <div className="disciplinas-praticas-grid">
                  {nomeDasDisciPratica.map((nome, index) => (
                    <div key={index} className="disciplina-card">
                        <h3>{nome}</h3>
                        
                        <div className="nota-input">
                            <label>Prova (70%):</label>
                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={notaPraticas[index].prova}
                                onChange={(e) => praticas(index, 'prova', e.target.value)}
                            />
                        </div>
                        
                        <div className="nota-input">
                            <label>Relatório (30%):</label>
                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                value={notaPraticas[index].ava}
                                onChange={(e) => praticas(index, 'relatorio', e.target.value)}
                            />
                        </div>
                        
                      <div className={`resultado ${notaPraticas[index].aprovado ? 'aprovado' : 'reprovado'}`}>
                            <p>Média: <strong>{notaPraticas[index].media}</strong></p>
                            <p>Situação: {notaPraticas[index].aprovado ? '✅ Aprovado' : '❌ Reprovado'}</p>
                      </div>
                    </div>
                ))}
                {userMessage && <p className="userMessage">{userMessage}</p>}
                <div className="btn-salvar">
                  <button onClick={salvarLocalStorage}>Salvar</button>
                </div>
            </div>
            {/* <div className="resumo-geral">
                <h2>Resumo Geral</h2>
                <p>Média Geral: {calcularMediaGeral().toFixed(1)}</p>
                <p>Total de Aprovados: {notas.filter(nota => nota.aprovado).length}/{notas.length}</p>
            </div> */}
      </div>
    </div>
  )
}

export default ReceberAsNota