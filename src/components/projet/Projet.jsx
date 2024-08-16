import React from 'react'
import './projet.scss'
import blog from './../../assets/images/BlogBasan.png'
import ankoay from './../../assets/images/ankoay.jpg'
import tranosoa from './../../assets/images/tranosoa.jpg'
import { FaGithub} from 'react-icons/fa'
function Projet() {
  return (
    <section className='box-projet'>
        <div className="projet-content">
            <div className='entete'>
                <h1>Mes projets<span> recents</span></h1>
                <h3>Quelques projets que j'ai conçu récemment </h3>
            </div>
            <div className='projet-detail'> 
                <div className="projet-unity">
                    <img src={blog} alt="" style={{ maxHeight: "100%", maxWidth: "100%"   }}/>
                    <div className='description'>
                        <p>Application pour la Gestion de Formation.</p>
                        <p>Logiciel qui permet de faciliter les consultations des supports formations, la consultation des fiches personnels et l'accès facile aux fiches de présence.</p>
                        <p>Projet de Stage pour l'obtention du Diplôme de Licence</p>
                        <p>Frontend - JavaFx</p>
                    </div>
                    {/* <button> <FaGithub/> GitHub</button> */}
                </div>
                <div className="projet-unity">
                    <img src={ankoay} alt="" style={{ maxHeight: "100%", maxWidth: "100%"   }}/>
                    <div className='description'>
                        <p>Site d'Ankoay de Madagascar</p>
                        <p>Facilite les recherches des activités de l'équipes, les actualités.</p>
                        <p>PHP / JS / Sass</p>
                    </div>
                    <button > <a className='BtnGit' href="https://github.com/MihajaRakotovao/Ankoay/tree/master" target='blank' ><FaGithub/> GitHub</a> </button>
                </div>
                <div className="projet-unity">
                    <img src={tranosoa} alt="" style={{ maxHeight: "100%", maxWidth: "100%"   }}/>
                    <div className='description'>
                        <p>Site d'Agence Immo</p>
                        <p>Agence de location de maison à Antananarivo</p>
                        <p>Laravel</p>
                    </div>
                    <button > <a className='BtnGit' href= "https://github.com/MihajaRakotovao/TranoSoa/tree/master" target='blank' ><FaGithub/> GitHub</a> </button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Projet
