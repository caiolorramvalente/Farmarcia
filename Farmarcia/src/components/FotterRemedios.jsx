import React, { useState } from 'react'
import './BodyRemedios.css'
import { useNavigate } from 'react-router-dom'
function FotterRemedios() {
   const navigate=useNavigate("")
   const [isOpen,setIsOpen] = useState(false)
   const [isClosing,setisClosing]=useState("")

   function abrirPopUp(){
    setIsOpen(true)
    

   }
   function fecharPopUp(){
    setIsOpen(false)
   }


  return (
    <div className='containerPai'>

      {isOpen &&
      <div className='divPopUp'>
       <dialog open={isOpen} className={isClosing ?"closing" :"open"}>
        <div className='divConteudoModal'>
          <div>
        <h2>Compra bem sucedida</h2>
          </div>
          <div>
          <button onClick={()=>{setIsOpen(false)}} className='btnFecharModal'>X</button>
          </div>
        </div>
        </dialog>
      </div>
      }

    <div className='divRemedios'>
        <div className='divDoragina'>
            <img src="../images/doragina.jpg" alt="" />
            <button className='botaoCompra' onClick={abrirPopUp}>Comprar</button>
           
        </div>

        <div className='divDorflex'>
        <img src="../images/dorflex.jpg" alt="" className='img' />
        <button className='botaoCompra' onClick={abrirPopUp}>Comprar</button>
        </div>

        <div className='divMultigrip'>
        <img src="../images/Multigrip.jpg" alt=""className='img' />
        <button className='botaoCompra' onClick={abrirPopUp}>Comprar</button>
        </div>

        <div className='divMultigrip'>
        <img src="../images/images.jpg" alt=""  className='img'/>
        <button className='botaoCompra' onClick={abrirPopUp}>Comprar</button>
        </div>
    </div>
        <button className='btnVoltar' onClick={()=>{navigate("/")}}>⬅ Home</button>
    </div>
    
  )
}

export default FotterRemedios
