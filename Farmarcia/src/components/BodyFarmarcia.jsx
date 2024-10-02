import React, { useState } from 'react'
import SorteioCamisas from './SorteioCamisas'
import CartaoPlacas from './CartaoPlacas'
import { useNavigate } from 'react-router-dom'


function BodyFarmarcia() {
  const  navigate = useNavigate('')
  



  const [imagemMostrada,setImagemMostrada]=useState("")
  function sorteioCamisas(){
    setImagemMostrada(<SorteioCamisas />)

  }
  function cartoesFarmarcia(){
    setImagemMostrada(<CartaoPlacas />)

  }


  return (
    <div className='body'>
        <img src="../images/farmarcia_fundo.avif" alt="" className='imagemLegal' />
        <h2>Ola seja bem vindo(a) ao nosso sitema de atendimento.
        </h2> 
        <h2>Escolha uma das opções de nosso site</h2>
    
        <div>
        <button className='butaoOpc' onClick={sorteioCamisas} >sorteios</button>
        <button className='butaoOpc' onClick={cartoesFarmarcia}>Cartoes</button>
        <button className='butaoOpc' onClick={()=>{navigate("/Atendimentos")}}>Atendimentos</button>
        <button className='butaoOpc' onClick={()=>{navigate("/Remedios")}}>Remedios</button>
        </div>
        {imagemMostrada}
        

            
        
    </div>
  )
}

export default BodyFarmarcia
