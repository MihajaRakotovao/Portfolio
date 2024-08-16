import React from 'react'
import imgAbout from './../../assets/images/about.jpeg'
import { FaReact } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { FaLaravel } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import './about.scss'
function About() {
  return (
    <section className="box-about">
      <div className='about-content'> 
        <div className="about-left">
          <h1>Mon<span> Parcours</span> </h1>
            <ul>
              <li>
                <div className='parcours'>
                  <div className="date">2018</div>
                  <div className="info">
                    <h2 className='title-info'>Diplôme Baccalauréat</h2>
                    <p className='decri-info'>
                    Lycée Privé Rantosoa | AMBATONDRAZAKA
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='parcours'>
                  <div className="date">2018 - 2019</div>
                  <div className="info">
                    <h2 className='title-info'></h2>
                    <p className='decri-info'>
                    ISPM - Institut Supérieur Polytechnique de Madagascar
                    </p>
                    <p className='decri-info'>
                   Antsobolo | ANTANANARIVO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='parcours'>
                  <div className="date">2019 - 2021</div>
                  <div className="info">
                    <h2 className='title-info'>Diplôme DTS en Informatique de gestion d’entreprise</h2>
                    <p className='decri-info'>
                    ESMIA Mahamasina | ANTANANARIVO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='parcours'>
                  <div className="date">2021 – 2022</div>
                  <div className="info">
                    <h2 className='title-info'>Diplôme de Licence en Informatique de gestion d’entreprise</h2>
                    <p className='decri-info'>
                    ESMIA Mahamasina | ANTANANARIVO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='parcours'>
                  <div className="date">2023-2024</div>
                  <div className="info">
                    <h2 className='title-info'>Formation Développement Web</h2>
                    <p className='decri-info'>
                    HOPES Formation  | ANTANANARIVO
                    </p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <div className="about-right">
          <img
            src={imgAbout}
            alt="home pic"
            className="img-fluid"
            style={{maxHeight: "100%",  maxWidth: "100%"}}
          />
        </div>
      </div>
      <div className="about-langage">
        <h1>Techno<span>logies</span></h1>
        <div className='box-langage'>
          <div className="langage">
            <FaHtml5 className='icon'/>
            <h3>60%</h3>
          </div>
          <div className="langage">
            <FaCss3 className='icon'/>
            <h3>60%</h3>
          </div>
          <div className="langage ">
            <FaSass className='icon'/>
            <h3>40%</h3>
          </div>
          <div className="langage">
            <FaJava className='icon'/>
            <h3>15%</h3>
          </div>
          <div className="langage">
            <FaJsSquare className='icon'/>
            <h3>30%</h3>
          </div>
          <div className="langage">
            <FaPhp className='icon'/>
            <h3>30%</h3>
          </div>
          <div className="langage">
            <FaLaravel className='icon'/>
            <h3>30%</h3>
          </div>
          <div className="langage ">
            <FaReact className='icon'/>
            <h3>25%</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
