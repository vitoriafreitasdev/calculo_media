import { useState } from "react"

export const useNotas = (notasTeoricas, setNotasTeoricas, notaPraticas, setNotaPraticas) => {
    const [userMessage, setUserMessage] = useState(null)
    
    // teoricas 

    const teoricas = (index, tipo, valor) => {
        const valorNumerico = Number(valor)

        setNotasTeoricas(prev => {
            const novasNotas = [...prev]
            novasNotas[index] = {
                ...novasNotas[index],
                [tipo]: valorNumerico
            }
            const media = calcularMediaTeorica(
            novasNotas[index].prova,
            novasNotas[index].ava,
            novasNotas[index].pim
            )

            novasNotas[index] ={
            ...novasNotas[index],
            media,
            aprovado: media >= 7
            }
            return novasNotas

            })

            

        
    }

    const calcularMediaTeorica = (prova, ava, pim) => {
        return (prova * 7 + pim * 2 + ava * 1) / 10
    }

    // praticas

    const praticas = (index, tipo, valor) => {
        const valorNumerico = Number(valor)

        setNotaPraticas( prev => {
            const novasNotas = [...prev]
            novasNotas[index] = {
            ...novasNotas[index],
            [tipo]: valorNumerico
            }

            const media = calcularMediaPratica(
            novasNotas[index].prova,
            novasNotas[index].relatorio
            )

            novasNotas[index] = {
            ...novasNotas[index],
            media,
            aprovado: media >= 7
            }

            return novasNotas
        })

    }


    const calcularMediaPratica = (prova, relatorio) => {
        return (prova * 7 + relatorio * 3) / 10
    }

    // salvar na local storage 

    const salvarLocalStorage = () => {

        const notasTeoricasSalvas = localStorage.getItem("notasTeoricas")
        const notasPraticasSalvas = localStorage.getItem("notasPraticas")

        if(!notasTeoricasSalvas && !notasPraticasSalvas){
            localStorage.setItem("notasTeoricas", JSON.stringify(notasTeoricas))
            localStorage.setItem("notasPraticas", JSON.stringify(notaPraticas))
            setUserMessage("Salvo com sucesso.")
            return
        }

        const notasTeoricaSalvaJS = JSON.parse(notasTeoricasSalvas)
        const notasPraticaSalvaJS = JSON.parse(notasPraticasSalvas)

        notasTeoricaSalvaJS.forEach((disciplina) => {
            notasTeoricas.push(disciplina)
        });

        notasPraticaSalvaJS.forEach((disciplina) => {
            notaPraticas.push(disciplina)
        });
        
        localStorage.setItem("notasTeoricas", JSON.stringify(notasTeoricas))
        localStorage.setItem("notasPraticas", JSON.stringify(notaPraticas))

        setUserMessage("Salvo com sucesso.")
  }

    return {teoricas, praticas, salvarLocalStorage, userMessage}
}