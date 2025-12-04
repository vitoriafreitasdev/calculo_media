import React from 'react'

const DisplinasSalvas = () => {
    const teoricasSalvas = localStorage.getItem("notasTeoricas")
    const praticasSalvas = localStorage.getItem("notasPraticas")

    if(teoricasSalvas && praticasSalvas) {
      console.log(JSON.parse(teoricasSalvas))
      console.log(JSON.parse(praticasSalvas))
    }

    //mostrar as disciplinas salvas aqui e permitir fazer o calculo da media delas aqui tambem, podendo reajustar os valores salvos e salvar novamente
  return (
    <div>DisplinasSalvas</div>
  )
}

export default DisplinasSalvas