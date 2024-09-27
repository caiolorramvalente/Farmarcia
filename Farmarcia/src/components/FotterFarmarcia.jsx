import React from 'react'
import './NavBarFarmarcia.css'

function FotterFarmarcia() {
  return (
    <div>
        <div className='rodapeFarmarcia'>
        
            <div><h1 className='fotterInfo'>Contatos</h1>
            <p className='emailMarcia'>Marcia123@gmail.com</p>
            </div>

            <div>
              <h1 className='fotterInfo'>Fale Conosco</h1>
                <div className='divWhats'>   
                <p className='pFalecon'>Whatsapp</p> <img src="../images/whatsapp.png" alt="" className='whatIcone' />
                </div>

              <div className='divInsta'>
              <p className='pFalecon'>Insta</p><img src="../images/instagram.png" alt=""className='instaIcone' />
              </div>

            </div>
            <div><h1 className='fotterInfo'>Nossa Localização</h1>
            <p ><a href="https://www.google.com/maps/dir//Avenida+Madre+Benvenuta,+1356+-+Santa+Monica,+Florian%C3%B3polis+-+Santa+Catarina,+88035-000/@-27.5894376,-48.5906926,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95273980bf98b1d3:0x9da63011840c1b22!2m2!1d-48.5083191!2d-27.5894159?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">Nossa localização</a></p>
            </div>




        </div>
      
    </div>
  )
}

export default FotterFarmarcia
