import React from 'react'
import imgCV from '../../assets/images/CaptureCV.jpg'
import pdf from '../../assets/CV_ANDRIAMIHAJA_RAKOTOVAO.pdf'
import './cv.scss'
function CV() {
  return (
    <section className='box-Resume'>
        <a href="" download={pdf}> 
          <button>Télécharger CV </button>
        </a>
        <img src={imgCV} alt="" style={{  maxHeight: "100%",  maxWidth: "100%" }}/>
    </section>
  )
}

export default CV
